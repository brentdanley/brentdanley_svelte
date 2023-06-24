<script context="module" lang="ts">
	export type Activities = 'pin' | 'hike' | 'bike' | 'paddle' | 'flight' | 'photo';
	export type Track = {
		filename: string;
		color?: string;
		startLabel?: string;
		endLabel?: string;
		startIcon?: Activities;
		endIcon?: Activities;
	};

	export type Point = {
		lat: number;
		lng: number;
		label: string;
		type?: Activities;
	};
</script>

<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import axios from 'axios';
	import * as ts from '@tmcw/togeojson';

	export let tracks: Track[] = [];
	export let points: Point[] = [];

	let mapContainer: HTMLElement;
	let map: mapboxgl.Map;
	let bounds = new mapboxgl.LngLatBounds();

	const addMarkerToMap = ({ lat, lng, label, type }: Point) => {
		// Create a DOM element for the marker and put in it the icon
		const el = document.createElement('div');
		const icons = {
			pin: 'fas fa-location-pin',
			hike: 'fas fa-person-hiking',
			bike: 'fas fa-biking',
			paddle: 'fa-solid fa-sailboat',
			flight: 'fas fa-plane',
			photo: 'fa-solid fa-camera'
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
		mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
		map = new mapboxgl.Map({
			container: mapContainer,
			style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
			center: [-77.04, 38.907], // starting position [lng, lat]
			zoom: 3
		});

		map.on('load', async () => {
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
				const trackCoordinates = converted?.features?.[0].geometry?.coordinates;
				if (track.startLabel) {
					const startPoint: Point = {
						lat: trackCoordinates[0][1],
						lng: trackCoordinates[0][0],
						label: track.startLabel,
						type: track.startIcon
					};
					addMarkerToMap(startPoint);
				}
				if (track.endLabel) {
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
			}

			points.forEach((point) => {
				addMarkerToMap(point);
			});

			// Set map to fit the bounds of all tracks
			map.fitBounds(bounds, { padding: 80 });
		});

		// Add custom controls to map
		map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), 'top-right');
	});

	onDestroy(() => {
		if (map) map.remove();
	});
</script>

<div id="map" bind:this={mapContainer} />

<style lang="scss">
	@import 'mapbox-gl/dist/mapbox-gl.css';

	#map {
		position: relative;
		width: 100%;
		aspect-ratio: 4 / 3;
		margin: 2rem auto;
	}
</style>
