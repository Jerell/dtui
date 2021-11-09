import Page from './page';
import { DisplayText } from './DisplayText';
import { DiagonalBox } from './DiagonalBox';
import { PTGraph } from './PTGraph';
import { Heading } from './Heading';
import InitialConditionsForm from './InitialConditionsForm';

export const MainScreen = () => (
	<Page>
		<section className='mb-20 relative py-10'>
			<DiagonalBox>
				<div className='flex justify-center'>
					<div className='max-w-screen-xl p-10'>
						<DisplayText>
							Simulate the evolution of a pipeline network
						</DisplayText>
					</div>
				</div>
			</DiagonalBox>
		</section>
		<section className='mt-12 px-6 max-w-screen-2xl'>
			<div className='flex flex-col space-y-12'>
				<div className='flex space-x-6 justify-around'>
					<div className=''>
						<Heading level={2}>Snapshot</Heading>
						<InitialConditionsForm type='snapshot' limited />
					</div>

					<div className=''>
						<Heading level={2}>Life of field</Heading>
						<InitialConditionsForm type='life of field' limited />
					</div>
				</div>

				<div className='flex-flex-col'>
					<div className='ml-6'>
						<Heading level={2}>Event boundaries</Heading>
					</div>
					<PTGraph />
				</div>
			</div>
		</section>
	</Page>
);
