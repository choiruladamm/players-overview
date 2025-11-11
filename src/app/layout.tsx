import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from '@/providers/react-query-provider';
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Next.js 14 Starter - Adamm',
	description:
		'Next.js 14 Starter with Tailwind CSS, TypeScript, React, React Query, Axios, and more.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${poppins.variable} antialiased`}
				suppressHydrationWarning
			>
				<NextTopLoader showSpinner={false} height={5} color='#129bf0' />
				<ReactQueryProvider>{children}</ReactQueryProvider>
			</body>
		</html>
	);
}