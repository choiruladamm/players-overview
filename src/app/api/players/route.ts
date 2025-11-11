import { NextRequest } from 'next/server';
import { ApiResponse } from '@/lib/api/api-response';
import { getAllPlayers, searchPlayers } from '@/lib/api/player-helpers';
import { PaginationMeta } from '@/lib/types/api';
import { PAGINATION_LIMITS } from '@/lib/constants/pagination-constants';
import { HTTP_STATUS } from '@/lib/constants/http-status-codes';

export async function GET(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams;
		const page = parseInt(searchParams.get('page') || String(PAGINATION_LIMITS.DEFAULT_PAGE));
		const limit = parseInt(searchParams.get('limit') || String(PAGINATION_LIMITS.DEFAULT_LIMIT));
		const search = searchParams.get('search') || '';

		if (page < PAGINATION_LIMITS.MIN_PAGE || limit < PAGINATION_LIMITS.MIN_LIMIT || limit > PAGINATION_LIMITS.MAX_LIMIT) {
			return ApiResponse.error('Invalid pagination parameters', HTTP_STATUS.BAD_REQUEST);
		}

		const allPlayers = search ? searchPlayers(search) : getAllPlayers();

		const total = allPlayers.length;
		const totalPages = Math.ceil(total / limit);
		const startIndex = (page - 1) * limit;
		const endIndex = startIndex + limit;
		const players = allPlayers.slice(startIndex, endIndex);

		const meta: PaginationMeta = {
			page,
			limit,
			total,
			total_pages: totalPages,
		};

		return ApiResponse.success(players, { meta });
	} catch (error) {
		console.error('Players API Error:', error);
		return ApiResponse.error('Internal Server Error', HTTP_STATUS.INTERNAL_SERVER_ERROR);
	}
}
