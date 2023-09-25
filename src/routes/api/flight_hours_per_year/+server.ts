import data from '/data/pilot_logbook.json';

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
	try {
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
	} catch (err) {
		console.log(err);
		return new Response(
			JSON.stringify({
				status: 500,
				body: { message: 'Internal Server Error' },
				headers: {
					'content-type': 'application/json'
				}
			})
		);
	}
}
