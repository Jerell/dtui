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
			<DisplayText>Simulate the evolution of a pipeline network</DisplayText>
		</section>
		<section className='mt-12'>
			<div className='flex space-x-6 justify-end'>
				<InitialConditions type='snapshot' />
				<InitialConditions type='life of field' />
			</div>
		</section>
	</Page>
);
