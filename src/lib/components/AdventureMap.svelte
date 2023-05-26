<script context="module" lang="ts">
	export type Track = {
		kml: string;
		color: string;
	};

	export type Point = {
		lat: number;
		lng: number;
		label: string;
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

	onMount(async () => {
		let bounds = new mapboxgl.LngLatBounds();
		mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
		map = new mapboxgl.Map({
			container: mapContainer,
			style: 'mapbox://styles/mapbox/satellite-v9', // style URL
			center: [-77.04, 38.907], // starting position [lng, lat]
			zoom: 3
		});

		map.on('load', async () => {
			for (let i = 0; i < tracks.length; i++) {
				const track = tracks[i];
				const response = await axios.get(`/tracklogs/${track.kml}`);
				const parser = new DOMParser();
				const kml = parser.parseFromString(response.data, 'application/xml');
				const converted = ts.kml(kml);

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
						'line-color': track.color, // Color from track object
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

			// add markers for each point
			points.forEach(({ lat, lng, label }) => {
				// Create a DOM element for the marker and put in it the icon
				const el = document.createElement('div');
				el.className = 'marker';
				el.innerHTML = '<img src="/airfield.svg" alt="airfield marker" />';

				// Create a DOM element for the marker label
				const markerLabel = document.createElement('div');
				markerLabel.className = 'marker-label';
				markerLabel.textContent = label;

				// Create the map marker and add the label element to it
				const marker = new mapboxgl.Marker({ color: '#ff0000', element: el })
					.setLngLat([lng, lat])
					.addTo(map);

				// Add the label element to the map marker
				marker.getElement().appendChild(markerLabel);

				// Extend bounds to include the point
				bounds.extend([lng, lat]);
			});

			// Set map to fit the bounds of all tracks
			map.fitBounds(bounds, { padding: 80 });
		});
	});

	onDestroy(() => {
		if (map) map.remove();
	});
</script>

<div id="map" bind:this={mapContainer} style="width: 100%; height: 600px;" />

<style lang="scss">
	@import 'mapbox-gl/dist/mapbox-gl.css';

	#map {
		position: relative;
	}

	.marker-label {
		font-size: 1.5rem;
		max-width: 200px;
	}
</style>
