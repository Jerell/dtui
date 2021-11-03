import { Heading } from './Heading';
import NumberInput from './NumberInput';
import Button from './Button';
import DateSelect from './DateSelect';

interface IInitialConditionsProps {
	type: 'snapshot' | 'life of field';
}

const SingleComponentFields = ({ heading, children }) => {
	return (
		<>
			<Heading level={4}>{heading}</Heading>
			<div className='mb-2 px-2'>{children}</div>
		</>
	);
};

const InitialConditions = ({ type }: IInitialConditionsProps) => {
	return (
		<div className='max-w-prose'>
			<Heading level={2}>{type}</Heading>
			<Heading level={1}>Initial conditions</Heading>
			<div className='mt-2 pb-2 bg-white'>
				<SingleComponentFields heading='Inlet'>
					<NumberInput label='temperature' unitListType='temperature' />
					<NumberInput label='flowrate' unitListType='flowrate' />
				</SingleComponentFields>

				<SingleComponentFields heading='Reservoir'>
					<NumberInput label='pressure' unitListType='pressure' />
				</SingleComponentFields>

				{type === 'snapshot' ? (
					<div className='flex justify-center space-x-6'>
						<Button />
					</div>
				) : (
					<>
						<div className='flex flex-col space-y-2'>
							<div className='flex justify-center space-x-6 px-2'>
								<DateSelect label='Start' />
								<DateSelect label='End' />
							</div>
							<div className='flex justify-center space-x-6'>
								<Button text={'days'} />
								<Button text={'weeks'} />
								<Button text={'months'} />
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default InitialConditions;
