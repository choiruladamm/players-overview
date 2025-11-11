import { NextResponse } from 'next/server';

export class ApiResponse {
	static success<T>(data: T, meta?: Record<string, unknown>) {
		return NextResponse.json({
			data,
			...(meta && { meta }),
		});
	}

	static error(message: string, status = 500, details?: unknown) {
		return NextResponse.json(
			{
				error: {
					message,
					...(typeof details === 'object' && details !== null ? { details } : {}),
				},
			},
			{ status },
		);
	}
}
