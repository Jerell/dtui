import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IntervalButton } from './IntervalButton';

export default {
	title: 'Components/IntervalButton',
	component: IntervalButton,
	decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
} as ComponentMeta<typeof IntervalButton>;

const Template: ComponentStory<typeof IntervalButton> = (args) => (
	<IntervalButton {...args}></IntervalButton>
);

export const Default = Template.bind({});

export const Days = Template.bind({});
Days.args = {
	interval: 'days',
};

export const Weeks = Template.bind({});
Weeks.args = {
	interval: 'weeks',
};

export const Months = Template.bind({});
Months.args = {
	interval: 'months',
};
