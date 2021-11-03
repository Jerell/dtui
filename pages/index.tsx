import Page from '@/components/page';
import { DisplayText } from '@/components/DisplayText';

const Index = () => (
	<Page>
		<section>
			<DisplayText>We grow a lot of rice</DisplayText>

			<p className='mt-2 text-gray-600 dark:text-gray-400'>
				You love rice, and so does the rest of the world. In the crop year
				2008/2009, the milled rice production volume amounted to over{' '}
				<span className='font-medium text-gray-900 dark:text-gray-50'>
					448 million tons
				</span>{' '}
				worldwide.
			</p>
		</section>
	</Page>
);

export default Index;
