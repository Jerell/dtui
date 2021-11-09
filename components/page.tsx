import Head from 'next/head';
import TopBar from './TopBar';
import BottomNav from './bottom-nav';

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

		<main className='mx-auto'>
			<div className='flex flex-col items-center bg-gray-50'>{children}</div>
		</main>

		<BottomNav />
	</>
);

export default Page;
