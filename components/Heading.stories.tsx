import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading } from './Heading';

export default {
	title: 'Components/Heading',
	component: Heading,
	decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
	<Heading {...args}>{args.children}</Heading>
);

export const level1 = Template.bind({});
level1.args = {
	level: 1,
	children: 'Text',
};
export const level2 = Template.bind({});
level2.args = {
	level: 2,
	children: 'Text',
};
export const level3 = Template.bind({});
level3.args = {
	level: 3,
	children: 'Text',
};
export const level4 = Template.bind({});
level4.args = {
	level: 4,
	children: 'Text',
};
export const level5 = Template.bind({});
level5.args = {
	level: 5,
	children: 'Text',
};
export const level6 = Template.bind({});
level6.args = {
	level: 6,
	children: 'Text',
};
