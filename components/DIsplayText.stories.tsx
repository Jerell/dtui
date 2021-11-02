import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DisplayText } from './DisplayText';

export default {
	title: 'Components/DisplayText',
	component: DisplayText,
} as ComponentMeta<typeof DisplayText>;

const Template: ComponentStory<typeof DisplayText> = (args) => (
	<DisplayText {...args}>{args.children}</DisplayText>
);

export const BigGradient = Template.bind({});
BigGradient.args = {
	children: 'Long text that gradually changes colour',
};
