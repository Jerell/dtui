import styles from './DiagonalBox.module.css';

export const DiagonalBox = ({ children }) => {
	return (
		<div className={`${styles.diagonalBox}`}>
			<div className={`${styles.content}`}>{children}</div>
		</div>
	);
};
