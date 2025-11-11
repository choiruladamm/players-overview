import { PlayerCardSkeleton } from '@/features/players/components/player-card-skeleton';
import { Player } from '@/lib/types/player';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface PlayerListProps {
	players: Player[];
	startRank?: number;
	isLoading?: boolean;
}

export const PlayerList = ({
	players,
	startRank = 1,
	isLoading,
}: PlayerListProps) => {
	if (isLoading) {
		return (
			<div className='space-y-3'>
				{Array.from({ length: 10 }).map((_, i) => (
					<PlayerCardSkeleton key={i} />
				))}
			</div>
		);
	}

	return (
		<div className='space-y-2'>
			{players.map((player, index) => (
				<PlayerCard key={player.id} player={player} rank={startRank + index} />
			))}
		</div>
	);
};

interface PlayerCardProps {
	player: Player;
	rank: number;
}

const PlayerCard = ({ player, rank }: PlayerCardProps) => {
	const isTopTwenty = rank >= 11 && rank <= 20;

	const imageConfig = isTopTwenty
		? { size: 'h-24 w-24', position: 'order-last', shape: 'rounded-lg' }
		: { size: 'h-12 w-12', position: 'order-first', shape: 'rounded-full' };

	return (
		<div className='group flex items-center gap-4 rounded-xl bg-gray-100 p-4 shadow-sm transition-all'>
			<div className='flex w-12 items-center justify-center'>
				<span className='text-[35px] font-light text-primary'>
					{player.ranking}
				</span>
			</div>

			<div
				className={cn(
					'relative flex-shrink-0 overflow-hidden ring-2 ring-gray-100 transition-all',
					imageConfig.size,
					imageConfig.position,
					imageConfig.shape,
				)}
			>
				<Image
					fill
					src={player.image}
					alt={player.name}
					className='object-cover transition-transform'
				/>
			</div>

			<div className='flex flex-1 flex-col gap-1'>
				<h3 className='truncate text-base font-semibold text-gray-800'>
					{player.name}
				</h3>

				<div className='flex items-center gap-3'>
					<div className='flex items-center gap-1.5 rounded-sm bg-gray-200 px-1 py-0.5'>
						<span className='text-xs text-gray-500'>Points</span>
						<span className='text-sm font-bold text-pink-500'>
							{player.points.toLocaleString()}
						</span>
					</div>

					<div>
						<span className='text-xs font-semibold text-green-600'>
							▲ {player.ranking}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
