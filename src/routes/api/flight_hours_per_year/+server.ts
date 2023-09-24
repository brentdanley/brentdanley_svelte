import fs from 'fs';
import path from 'path';

interface LogbookResponse {
	status: number;
	body: {
		year: string;
		total_hours: number;
	}[];
	headers: {
		'content-type': string;
	};
}

export async function GET(): Promise<LogbookResponse> {
	// Read JSON file
	const filePath = path.resolve('static/data/pilot_logbook.json');
	const rawData = fs.readFileSync(filePath, 'utf8');
	const data = JSON.parse(rawData);

	const groupedDataObject = data.reduce((acc: any, cur: any) => {
		const year = cur.date.split('-')[0];
		const flightHours = parseFloat(cur.flight_hours); // Make sure it's a number

		if (acc[year]) {
			acc[year].total_hours += flightHours;
		} else {
			acc[year] = {
				year,
				total_hours: flightHours
			};
		}
		return acc;
	}, {});

	// Round total_hours to 1 decimal place for each year
	Object.keys(groupedDataObject).forEach((year) => {
		groupedDataObject[year].total_hours = parseFloat(
			groupedDataObject[year].total_hours.toFixed(1)
		);
	});

	// Sort years and create a sorted array
	const years = Object.keys(groupedDataObject).sort();
	const groupedDataArray = years.map((year) => groupedDataObject[year]);

	return new Response(
		JSON.stringify({
			status: 200,
			body: groupedDataArray,
			headers: {
				'content-type': 'application/json'
			}
		})
	);
}
