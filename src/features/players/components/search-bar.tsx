import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Funnel, Search, X } from 'lucide-react';

interface SearchBarProps {
	value: string;
	onChange: (v: string) => void;
	onClear: () => void;
}

export const SearchBar = ({ value, onChange, onClear }: SearchBarProps) => (
	<div className='flex items-center gap-2'>
		<div className='relative flex-1'>
			<Input
				type='text'
				placeholder='Search Player'
				value={value}
				onChange={e => onChange(e.target.value)}
				className='pr-10'
			/>
			<Search className='absolute right-3 top-1/2 size-5 -translate-y-1/2 text-gray-400' />
		</div>
		<Button variant='outline' size='icon'>
			<Funnel size={20} className='text-gray-600' />
		</Button>
	</div>
);
