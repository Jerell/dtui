import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NumberInput from './NumberInput';

export default {
	title: 'Components/NumberInput',
	component: NumberInput,
	argTypes: {
		unitListType: {
			options: ['pressure', 'temperature', 'flowrate', 'length'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => (
	<NumberInput {...args} />
);

export const pressure = Template.bind({});
pressure.args = {
	label: 'pressure',
	unitListType: 'pressure',
};

export const temperature = Template.bind({});
temperature.args = {
	label: 'temperature',
	unitListType: 'temperature',
};

export const flowrate = Template.bind({});
flowrate.args = {
	label: 'flowrate',
	unitListType: 'flowrate',
};

export const length = Template.bind({});
length.args = {
	label: 'length',
	unitListType: 'length',
};
