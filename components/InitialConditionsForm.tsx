import { Heading } from './Heading';
import NumberInput from './NumberInput';
import Button from './Button';
import DateSelect from './DateSelect';
import { useState, useEffect } from 'react';
import { daysApart, weeksApart, monthsApart } from './utils/timeApart';
import { IntervalButton } from './IntervalButton';

interface IInitialConditionsFormProps {
	type: 'snapshot' | 'life of field';
	limited: boolean;
}

const SingleComponentFields = ({ heading, children }) => {
	return (
		<>
			<Heading level={4}>{heading}</Heading>
			<div className='mb-2 px-2'>{children}</div>
		</>
	);
};

const Col = ({ children }) => (
	<div className='flex flex-col w-min space-y-4 items-end'>{children}</div>
);

const Row = ({ children, prose = false }) => (
	<div className={`flex space-x-6 px-2 ${prose ? 'max-w-prose' : ''}`}>
		{children}
	</div>
);

const InitialConditionsForm = ({
	type,
	limited = false,
}: IInitialConditionsFormProps) => {
	const [startDate, setStartDate] = useState(new Date('2024-06-01'));
	const [endDate, setEndDate] = useState(new Date('2025-06-01'));

	return (
		<div>
			<div className='pb-2 bg-white'>
				<SingleComponentFields heading='Inlet'>
					<NumberInput label='temperature' unitListType='temperature' />
					<NumberInput label='flowrate' unitListType='flowrate' />
				</SingleComponentFields>

				<SingleComponentFields heading='Reservoir'>
					<NumberInput label='pressure' unitListType='pressure' />
				</SingleComponentFields>

				{!limited && (
					<>
						<SingleComponentFields heading='Wells: Hamilton'>
							<NumberInput label='Number of wells' />
						</SingleComponentFields>
						<SingleComponentFields heading='Wells: Hamilton North'>
							<NumberInput label='Number of wells' />
						</SingleComponentFields>
						<SingleComponentFields heading='Wells: Lennox'>
							<NumberInput label='Number of wells' />
						</SingleComponentFields>
					</>
				)}

				{type === 'snapshot' ? (
					<Row>
						<Button />
					</Row>
				) : (
					<div className='flex flex-col space-y-4 py-2'>
						<Col>
							<Row prose>
								<DateSelect
									label='Start'
									placeholder={startDate}
									fn={setStartDate}
								/>
							</Row>
							<Row prose>
								<DateSelect label='End' placeholder={endDate} fn={setEndDate} />
							</Row>
						</Col>
						<Row>
							<IntervalButton
								fn={() => {}}
								startDate={startDate}
								endDate={endDate}
								interval='days'
							/>
							<IntervalButton
								fn={() => {}}
								startDate={startDate}
								endDate={endDate}
								interval='weeks'
							/>
							<IntervalButton
								fn={() => {}}
								startDate={startDate}
								endDate={endDate}
								interval='months'
							/>
						</Row>
					</div>
				)}
			</div>
		</div>
	);
};

export default InitialConditionsForm;
