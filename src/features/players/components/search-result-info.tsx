import { Button } from '@/components/ui/button';

interface SearchResultInfoProps {
	query: string;
	count: number;
	onClear: () => void;
}

export const SearchResultInfo = ({
	query,
	count,
	onClear,
}: SearchResultInfoProps) => (
	<div className='mt-4 flex items-center justify-between text-sm text-gray-600'>
		<div>
			{count > 0 ? (
				<>
					Found <span className='font-semibold text-gray-900'>{count}</span>{' '}
					players for &quot;
					<span className='font-semibold text-gray-900'>{query}</span>&quot;
				</>
			) : (
				<>
					No players found for &quot;
					<span className='font-semibold text-gray-900'>{query}</span>&quot;
				</>
			)}
		</div>

		<Button onClick={onClear}>Clear</Button>
	</div>
);
