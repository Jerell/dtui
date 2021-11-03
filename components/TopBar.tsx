import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './TopBar.module.css';

const links = [
	{ label: 'Second page', href: '/page' },
	{ label: 'Third page', href: '/page' },
	{ label: 'Another page', href: '/page' },
];

const TopBar = () => {
	const router = useRouter();

	return (
		<div className={`${styles.topbar} pt-safe w-full relative top-0 z-20`}>
			<header className='bg-pace-blue text-white pl-2'>
				<div className='mx-auto pr-6 h-16 flex items-end justify-between'>
					<Link href='/'>
						<a>
							<h1 className='font-bold raleway text-xl text-white'>
								Digital Twin
							</h1>
						</a>
					</Link>

					<nav className='space-x-6 flex items-center h-full'>
						<div className='hidden sm:block h-full'>
							<div
								className={`space-x-6 flex h-full items-end ${styles.items}`}
							>
								{links.map(({ label, href }) => (
									<Link key={label} href={href}>
										<a
											className={`hover:text-pace-violet ${
												router.pathname === href
													? 'text-pace-raisin'
													: 'text-white '
											}`}
										>
											<p>{label}</p>
										</a>
									</Link>
								))}
							</div>
						</div>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default TopBar;
