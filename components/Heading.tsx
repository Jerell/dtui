import styles from './Heading.module.css';

type LevelRange = 1 | 2 | 3 | 4 | 5 | 6;

export const Heading = ({
	children,
	level = 1,
	center = false,
	additionalClasses = '',
}: {
	children: any;
	level: LevelRange;
	center?: boolean;
	additionalClasses?: string;
}) => {
	const commonClasses = `${additionalClasses} flex-grow w-full m-0 raleway px-2 ${
		center ? 'text-center' : ''
	} `;
	switch (level) {
		case 1:
			return (
				<h1
					className={`${commonClasses} font-light uppercase text-5xl text-pace-grey border-t border-pace-grey`}
				>
					{children}
				</h1>
			);
		case 2:
			return (
				<h2
					className={`${commonClasses} font-semibold py-2 uppercase text-lg bg-pace-violet text-white`}
				>
					{children}
				</h2>
			);
		case 3:
			return (
				<h3 className={`${commonClasses} font-semibold uppercase text-lg py-2`}>
					{children}
				</h3>
			);
		case 4:
			return (
				<h4
					className={`${commonClasses} font-semibold pt-2 bg-white text-gray-400`}
				>
					{children}
				</h4>
			);
		case 5:
			return <h5 className={`${commonClasses} font-semibold`}>{children}</h5>;
		case 6:
			return <h6 className={`${commonClasses}`}>{children}</h6>;
	}
};
