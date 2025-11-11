'use client';

import { useGetPlayers } from '@/features/players/api/get-players';
import { HeroSlider } from '@/features/players/components/hero-slider';
import { LoadingScreen } from '@/features/players/components/loading-screen';
import { PlayerList } from '@/features/players/components/player-list';
import { SearchBar } from '@/features/players/components/search-bar';
import { SearchResultInfo } from '@/features/players/components/search-result-info';
import { useDebounce } from '@/hooks/use-debounce';
import React from 'react';

const PlayersPage = () => {
	const [search, setSearch] = React.useState('');
	const debouncedSearch = useDebounce(search, 500);

	const { data, isLoading } = useGetPlayers({
		limit: 100,
		search: debouncedSearch || undefined,
	});

	if (isLoading) return <LoadingScreen />;

	const players = data?.data || [];
	const heroPlayers = players.slice(0, 10);
	const listPlayers = players.slice(10);

	return (
		<div className='min-h-dvh pb-2'>
			<section id='search-section' className='sticky top-0 z-10 bg-white py-4'>
				<div className='layout'>
					<SearchBar
						value={search}
						onChange={setSearch}
						onClear={() => setSearch('')}
					/>
					{debouncedSearch && (
						<SearchResultInfo
							query={debouncedSearch}
							count={players.length}
							onClear={() => setSearch('')}
						/>
					)}
				</div>
			</section>

			{heroPlayers.length > 0 && !debouncedSearch && (
				<section id='hero-section' className='bg-white'>
					<div className='mx-auto max-w-[390px]'>
						<HeroSlider players={heroPlayers} />
					</div>
				</section>
			)}

			<section id='list-section' className='py-6'>
				<div className='layout'>
					{debouncedSearch ? (
						<PlayerList players={players} startRank={1} />
					) : (
						<PlayerList players={listPlayers} startRank={11} />
					)}
				</div>
			</section>
		</div>
	);
};

export default PlayersPage;
