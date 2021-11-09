import Button from './Button';
import { useState, useEffect } from 'react';
import { daysApart, weeksApart, monthsApart } from './utils/timeApart';

export const IntervalButton = ({
	fn = () => {},
	startDate = new Date('2021-11-09'),
	endDate = new Date('2021-11-20'),
	interval = 'days',
}: {
	fn: (...args: any[]) => any;
	startDate: Date;
	endDate: Date;
	interval: 'days' | 'weeks' | 'months';
}) => {
	const [days, setDays] = useState(0);
	const [weeks, setWeeks] = useState(0);
	const [months, setMonths] = useState(0);

	useEffect(() => {
		setDays(daysApart(startDate, endDate));
		setWeeks(weeksApart(startDate, endDate));
		setMonths(monthsApart(startDate, endDate));
	}, [startDate, endDate]);

	const stepCount = () => {
		const stepMap = {
			days: days,
			weeks: weeks,
			months: months,
		};
		return stepMap[interval];
	};

	return (
		<Button
			fn={fn}
			additionalClasses='w-28'
			text={`${stepCount()} ${interval}`}
			disabled={stepCount() > 1000 || stepCount() == 0}
		/>
	);
};
