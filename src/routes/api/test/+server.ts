interface ApiResponse {
	status: number;
	body: {
		message: string;
	};
	headers: {
		'content-type': string;
	};
}

export async function GET(): Promise<Response> {
	const apiResponse: ApiResponse = {
		status: 200,
		body: { message: 'Hello, world!' },
		headers: {
			'content-type': 'application/json'
		}
	};

	return new Response(JSON.stringify(apiResponse));
}
