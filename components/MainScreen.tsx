import Page from './page';
import { DisplayText } from './DisplayText';
import InitialConditions from './InitialConditions';
import { DiagonalBox } from './DiagonalBox';

export const MainScreen = () => (
	<Page>
		<section className='my-32 relative'>
			<div className='absolute w-full -top-28 z-negative'>
				<DiagonalBox>
					<div className='h-96 w-full'></div>
				</DiagonalBox>
			</div>
			<div className='px-2'>
				<DisplayText>Simulate the evolution of a pipeline network</DisplayText>
			</div>
		</section>
		<section className='mt-12 px-6'>
			<div className='flex space-x-6 justify-around'>
				<InitialConditions type='snapshot' />
				<InitialConditions type='life of field' />
			</div>
		</section>
	</Page>
);
