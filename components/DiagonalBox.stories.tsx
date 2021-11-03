import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DiagonalBox } from './DiagonalBox';

export default {
	title: 'Components/DiagonalBox',
	component: DiagonalBox,
} as ComponentMeta<typeof DiagonalBox>;

const Template: ComponentStory<typeof DiagonalBox> = (args) => (
	<DiagonalBox>{args.children}</DiagonalBox>
);

export const Default = Template.bind({});
Default.args = {
	children: 'Text',
};
