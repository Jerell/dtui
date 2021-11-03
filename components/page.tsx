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

		<main
			/**
			 * Padding top = `appbar` height
			 * Padding bottom = `bottom-nav` height
			 */
			className='mx-auto'
		>
			<div>{children}</div>
		</main>

		<BottomNav />
	</>
);

export default Page;
