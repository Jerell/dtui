import { Placeholder } from './Placeholder';
import styles from './PTGraph.module.css';

export const PTGraph = () => {
	return (
		<div className='flex relative h-96 w-min'>
			<p className={styles.yaxis}>Pressure</p>
			<p className={styles.xaxis}>Temperature</p>
			<div className='mb-6 border-l border-b border-pace-green'>
				<Placeholder />
			</div>
		</div>
	);
};
