import Head from 'next/head';
import TopBar from '@/components/TopBar';
import BottomNav from '@/components/bottom-nav';

interface Props {
	title?: string;
	children: React.ReactNode;
}

const Page = ({ title, children }: Props) => (
	<>
		{title ? (
			<Head>
				<title>Rice Bowl | {title}</title>
			</Head>
		) : null}

		<TopBar />

		<main
			/**
			 * Padding top = `appbar` height
			 * Padding bottom = `bottom-nav` height
			 */
			className='mx-auto pt-20 pb-16 max-w-screen-md'
		>
			<div className='p-6'>{children}</div>
		</main>

		<BottomNav />
	</>
);

export default Page;
