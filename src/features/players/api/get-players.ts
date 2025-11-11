import { client } from '@/lib/axios';
import { ApiResponse } from '@/lib/types/api';
import { Player } from '@/lib/types/player';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';

interface GetPlayersParams {
	page?: number;
	limit?: number;
	search?: string;
}

export async function getPlayers(params?: GetPlayersParams): Promise<ApiResponse<Player[]>> {
	const res = await axios.get('/api/players', { params });
	return res.data;
}

export function useGetPlayers(
	params?: GetPlayersParams,
	options?: Omit<UseQueryOptions<ApiResponse<Player[]>>, 'queryKey' | 'queryFn'>,
) {
	return useQuery({
		queryKey: ['players', params],
		queryFn: () => getPlayers(params),
		...options,
	});
}