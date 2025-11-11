import { Loader } from 'lucide-react';

export const LoadingScreen = () => {
	return (
		<div className='flex h-dvh items-center justify-center'>
			<Loader className='animate-spin text-primary' />
		</div>
	);
};
