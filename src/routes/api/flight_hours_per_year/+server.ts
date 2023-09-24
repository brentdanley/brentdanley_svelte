import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

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
	// Open the SQLite database; adjust the path as necessary
	const db = await open({
		filename: './pilot_logbook.db',
		driver: sqlite3.Database
	});

	// Query to get flight hours per year
	const rows = await db.all(
		`SELECT strftime('%Y', date) as year, ROUND(SUM(flight_hours), 1) as total_hours FROM logbook GROUP BY year ORDER BY year`
	);

	// Close the database
	await db.close();

	return new Response(
		JSON.stringify({
			status: 200,
			body: rows,
			headers: {
				'content-type': 'application/json'
			}
		})
	);
}
