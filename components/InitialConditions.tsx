import { Heading } from './Heading';
import NumberInput from './NumberInput';
import Button from './Button';

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
				<div className='flex justify-center'>
					<Button />
				</div>
			</div>
		</div>
	);
};

export default InitialConditions;
