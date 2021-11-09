import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DiagonalBox } from './DiagonalBox';
import { DisplayText } from './DisplayText';

export default {
	title: 'Components/DiagonalBox',
	component: DiagonalBox,
} as ComponentMeta<typeof DiagonalBox>;

const Template: ComponentStory<typeof DiagonalBox> = (args) => (
	<DiagonalBox>{args.children}</DiagonalBox>
);

export const Default = Template.bind({});
Default.args = {
	children: (
		<div className='flex justify-center'>
			<div className='max-w-screen-xl'>
				<DisplayText>Simulate the evolution of a pipeline network</DisplayText>
			</div>
		</div>
	),
};
