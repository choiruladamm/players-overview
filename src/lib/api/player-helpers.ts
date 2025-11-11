import { MOCK_PLAYERS } from '@/lib/api/mock-players';
import { Player } from '@/lib/types/player';

export function getAllPlayers(): Player[] {
	return MOCK_PLAYERS;
}

export function searchPlayers(query: string): Player[] {
	const searchTerm = query.toLowerCase().trim();

	if (!searchTerm) return MOCK_PLAYERS;

	return MOCK_PLAYERS.filter(
		player =>
			player.name.toLowerCase().includes(searchTerm) || player.country.toLowerCase().includes(searchTerm),
	);
}
