import Page from './page';
import { DisplayText } from './DisplayText';
import InitialConditions from './InitialConditions';
import { DiagonalBox } from './DiagonalBox';
import { PTGraph } from './PTGraph';
import { Heading } from './Heading';

export const MainScreen = () => (
	<Page>
		<section className='mb-20 mt-16 relative py-10'>
			<div className='absolute w-full h-full -top-10 z-negative'>
				<DiagonalBox>
					<div className='h-full w-full'></div>
				</DiagonalBox>
			</div>
			<div className='px-2'>
				<DisplayText>Simulate the evolution of a pipeline network</DisplayText>
			</div>
		</section>
		<section className='mt-12 px-6'>
			<div className='flex space-x-6 justify-around'>
				<InitialConditions type='snapshot' />
				<div className='flex-flex-col'>
					<div className='ml-6'>
						<Heading level={2}>Event boundaries</Heading>
					</div>
					<PTGraph />
				</div>
				<InitialConditions type='life of field' />
			</div>
		</section>
	</Page>
);
