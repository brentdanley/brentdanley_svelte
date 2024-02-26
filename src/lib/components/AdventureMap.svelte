<script context="module" lang="ts">
	export type Activities = 'pin' | 'hike' | 'bike' | 'paddle' | 'flight' | 'photo';
	export type Track = {
		filename: string;
		color?: string;
		startLabel?: string;
		endLabel?: string;
		startIcon?: Activities;
		endIcon?: Activities;
		label?: string;
	};

	export type Point = {
		lat: number;
		lng: number;
		label: string;
		type?: Activities;
	};

	export type MapSectionals = {
		newyork_sectional?: boolean;
		montreal_sectional: boolean;
	};

	export type MapPlates = {
		klew_rnav22: boolean;
	};
</script>

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import axios from 'axios';
	import * as ts from '@tmcw/togeojson';
	import { writable } from 'svelte/store';

	export let tracks: Track[] = [];
	export let points: Point[] = [];
	export let sectionals: String[] = [];
	export let plates: String[] = [];

	const mapSectionals = writable({
		newyork_sectional: false,
		montreal_sectional: false
	} as MapSectionals);

	const mapPlates = writable({
		klew_rnav22: false
	} as MapPlates);

	let selectedTrackIndex: number | null = null;

	let mapContainer: HTMLElement;
	let map: mapboxgl.Map;
	let bounds = new mapboxgl.LngLatBounds();

	const togglePlate = (plate: keyof MapPlates) => {
		mapPlates.update((layers) => {
			layers[plate] = !layers[plate];
			return layers;
		});

		map.setLayoutProperty(plate, 'visibility', $mapPlates[plate] ? 'visible' : 'none');
	};
	const toggleSectional = (sectional: keyof MapSectionals) => {
		mapSectionals.update((layers) => {
			layers[sectional] = !layers[sectional];
			return layers;
		});

		map.setLayoutProperty(sectional, 'visibility', $mapSectionals[sectional] ? 'visible' : 'none');
	};

	const getTrackBounds = (feature: GeoJSON.Feature<GeoJSON.LineString>): mapboxgl.LngLatBounds => {
		const bounds = new mapboxgl.LngLatBounds();
		feature.geometry.coordinates.forEach((coord) => {
			bounds.extend(coord as mapboxgl.LngLatLike);
		});
		return bounds;
	};

	let previouslySelectedIndex: number | null = null;

	const selectTrack = (index: number) => {
		selectedTrackIndex = index;
		updateMapColors();

		// Get the GeoJSON feature for the selected track from the map's data source
		const feature: GeoJSON.Feature<GeoJSON.LineString> = map.getSource(`route-${index}`)._data
			.features[0];

		// If there was a previously selected track, move its layer down
		if (previouslySelectedIndex !== null) {
			map.moveLayer(`route-${previouslySelectedIndex}`, `route-${index}`);
		}

		// Move the newly selected layer to the top.
		// If you have a topmost layer that you don't want to cover, specify it as the second argument.
		// Otherwise, the layer will be moved to the top of the stack.
		map.moveLayer(`route-${index}`);

		// Update the index of the currently selected track
		previouslySelectedIndex = index;

		// Get the bounds of the selected track
		const bounds = getTrackBounds(feature);

		// Fit the map to the bounds of the selected track with some padding
		map.fitBounds(bounds, { padding: 50 });
	};

	const updateMapColors = () => {
		tracks.forEach((track, index) => {
			const layerID = `route-${index}`;
			const newColor = index === selectedTrackIndex ? track.color ?? 'magenta' : 'gray';
			if (map.getLayer(layerID)) {
				map.setPaintProperty(layerID, 'line-color', newColor);
			}
		});
	};

	const addMarkerToMap = ({ lat, lng, label, type }: Point) => {
		// Create a DOM element for the marker and put in it the icon
		const el = document.createElement('div');
		const icons = {
			pin: 'fas fa-location-pin',
			hike: 'fas fa-person-hiking',
			bike: 'fas fa-biking',
			paddle: 'fa-solid fa-sailboat',
			flight: 'fas fa-plane',
			photo: 'fa-solid fa-camera',
			boat: 'fa-solid fa-sailboat'
		};
		const icon = icons[type ?? 'pin'];
		el.className = 'marker';
		el.innerHTML = `<i class="${icon}" style="color: white; font-size: 2rem; background-color: var(--dark-font-color); border-radius: 50%; height: 2em; width: 2em; display: flex; align-items: center; justify-content: center; border: 2px solid white;"></i>`;

		el.style.display = 'flex';
		el.style.flexDirection = 'column';
		el.style.alignContent = 'center';
		el.style.justifyContent = 'center';
		el.style.textAlign = 'center';

		// Create a DOM element for the marker label
		const markerLabel = document.createElement('div');
		markerLabel.className = 'marker-label';
		markerLabel.textContent = label;

		// Create the map marker and add the label element to it
		const marker = new mapboxgl.Marker({ element: el }).setLngLat([lng, lat]).addTo(map);

		// Add the label element to the map marker
		marker.getElement().appendChild(markerLabel);

		// Extend bounds to include the point
		bounds.extend([lng, lat]);
	};
	onMount(async () => {
		mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ADVENTURE_TOKEN;
		map = new mapboxgl.Map({
			container: mapContainer,
			style: 'mapbox://styles/brentedanley/clt0gru7400rl01qshwet746b',
			center: [-77.04, 38.907], // starting position [lng, lat]
			zoom: 3
		});

		map.on('load', async () => {
			Object.keys($mapSectionals).forEach((layer) => {
				map.setLayoutProperty(layer, 'visibility', $mapSectionals[layer] ? 'visible' : 'none');
			});
			Object.keys($mapPlates).forEach((layer) => {
				map.setLayoutProperty(layer, 'visibility', $mapPlates[layer] ? 'visible' : 'none');
			});

			for (let i = 0; i < tracks.length; i++) {
				const track = tracks[i];
				const response = await axios.get(`/tracklogs/${track.filename}`);
				const parser = new DOMParser();
				const fileExtension = track.filename.slice(-3); // get the last three characters of the filename
				const parsedTrack = parser.parseFromString(response.data, 'application/xml');
				let converted;

				if (fileExtension === 'kml') {
					converted = ts.kml(parsedTrack);
				} else if (fileExtension === 'gpx') {
					converted = ts.gpx(parsedTrack);
				} else {
					console.error(`Unsupported file extension: ${fileExtension}`);
					continue;
				}

				// Add type check before accessing coordinates
				let trackCoordinates;
				if (converted?.features?.[0].geometry?.type === 'LineString') {
					trackCoordinates = converted?.features?.[0].geometry?.coordinates;
				}

				if (trackCoordinates && track.startLabel) {
					const startPoint: Point = {
						lat: trackCoordinates[0][1],
						lng: trackCoordinates[0][0],
						label: track.startLabel,
						type: track.startIcon
					};
					addMarkerToMap(startPoint);
				}
				if (trackCoordinates && track.endLabel) {
					const startPoint: Point = {
						lat: trackCoordinates[trackCoordinates.length - 1][1],
						lng: trackCoordinates[trackCoordinates.length - 1][0],
						label: track.endLabel ?? '',
						type: track.endIcon
					};
					addMarkerToMap(startPoint);
				}
				const featuresWithGeometry = converted.features.filter(
					(feature) => feature.geometry !== null
				);

				const validGeoJSON: GeoJSON.FeatureCollection = {
					type: 'FeatureCollection',
					features: featuresWithGeometry as GeoJSON.Feature<GeoJSON.Geometry>[]
				};

				map.addSource(`route-${i}`, {
					type: 'geojson',
					data: validGeoJSON
				});

				map.addLayer({
					id: `route-${i}`,
					type: 'line',
					source: `route-${i}`,
					layout: {
						'line-join': 'round',
						'line-cap': 'round'
					},
					paint: {
						'line-color': track.color ? track.color : 'magenta', // Color from track object
						'line-width': 4
					}
				});

				validGeoJSON.features.forEach((feature) => {
					if (feature.geometry.type === 'LineString') {
						const coordinates = feature.geometry.coordinates;
						coordinates.forEach((coord) => {
							bounds.extend([coord[0], coord[1]]);
						});
					}
				});

				if (tracks.length === 1) {
					selectTrack(i);
				}
			}

			// console.log all the layers
			map.on('styledata', () => {
				console.log('Map style loaded');
				console.log(map.getStyle());
			});

			// Add map zoomend event listener
			map.on('zoomend', () => {
				// Get current zoom level
				const zoom = map.getZoom();

				// Log zoom level
				console.log('Current zoom:', zoom);
			});

			points.forEach((point) => {
				addMarkerToMap(point);
			});

			// Set map to fit the bounds of all tracks
			map.fitBounds(bounds, { padding: 80 });

			// Call updateMapColors to set the initial track colors
			updateMapColors();
		});

		// Add custom controls to map
		map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right');
	});

	onDestroy(() => {
		if (map) map.remove();
	});
</script>

<div id="map" bind:this={mapContainer} />
<ul class="map-button-list">
	{#if tracks.length > 1}
		{#each tracks as track, i}
			<li
				class="item {selectedTrackIndex === i ? 'selected' : ''}"
				on:click={() => selectTrack(i)}
				on:keydown={() => selectTrack(i)}
			>
				{track.startLabel || track.filename}
			</li>
		{/each}
	{/if}
</ul>
<ul class="map-button-list">
	{#if sectionals && sectionals.includes('ny')}
		<div
			on:click={() => toggleSectional('newyork_sectional')}
			class="item{$mapSectionals['newyork_sectional'] ? ' selected' : ''}"
		>
			New York Sectional
		</div>
	{/if}
	{#if sectionals && sectionals.includes('mon')}
		<div on:click={() => toggleSectional('montreal_sectional')} class="item">
			Montreal Sectional
		</div>
	{/if}
	<div on:click={() => togglePlate('klew_rnav22')} class="item">KLEW RNAV 22</div>
</ul>

<style lang="scss">
	@import 'mapbox-gl/dist/mapbox-gl.css';

	#map {
		position: relative;
		width: 100%;
		aspect-ratio: 4 / 3;
		margin: 2rem auto;
	}
	// Style for the list container
	.map-button-list {
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		// Style for each list item (i.e., button)
		.item {
			cursor: pointer;
			padding: 6px 15px;
			margin: 5px;
			color: var(--secondary-light-color);
			background-color: var(--dark-font-color);
			border: 2px solid var(--secondary-light-color);
			border-radius: 5px;
			transition: background-color 0.3s ease;

			&:hover {
				background-color: #ddd;
			}

			// Additional style for the selected track
			&.selected {
				background-color: #bbb;
			}
		}
	}
</style>
