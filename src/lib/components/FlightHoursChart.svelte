<!-- src/lib/components/FlightHoursChart.svelte -->
<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	let chart;

	onMount(async () => {
		const res = await fetch('/api/flight_hours_per_year');
		const apiData = await res.json();

		// Find the range of years
		const firstYear = parseInt(apiData.body[0].year);
		const lastYear = new Date().getFullYear(); // Assume last year is the current year
		const allYears = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i);

		// Initialize an object with all years set to 0
		const dataByYear = Object.fromEntries(allYears.map((year) => [year, 0]));

		// Fill in the years with actual data
		apiData.body.forEach((entry) => {
			dataByYear[parseInt(entry.year)] = entry.total_hours;
		});

		const ctx = document.getElementById('myChart').getContext('2d');
		chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: allYears,
				datasets: [
					{
						label: 'Flight Hours',
						data: allYears.map((year) => dataByYear[year]),
						backgroundColor: 'rgba(75, 192, 192, 0.5)',
						borderColor: 'rgba(75, 192, 192, 1)',
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					x: {
						ticks: {
							color: 'white' // X-axis label color
						}
					},
					y: {
						ticks: {
							color: 'white' // Y-axis label color
						},
						grid: {
							color: 'rgba(255, 255, 255, 0.1)' // grid color
						},
						beginAtZero: true
					}
				}
			}
		});
	});
</script>

<canvas id="myChart" width="400" height="200" />

<style lang="scss">
	#myChart {
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>
