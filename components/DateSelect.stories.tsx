import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DateSelect from './DateSelect';

export default {
	title: 'Components/DateSelect',
} as ComponentMeta<typeof DateSelect>;

const Template: ComponentStory<typeof DateSelect> = (args) => (
	<DateSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
	label: 'Date',
	required: false,
	labelClasses: '',
};
