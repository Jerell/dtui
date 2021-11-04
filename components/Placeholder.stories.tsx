import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Placeholder } from './Placeholder';

export default {
	title: 'Components/Placeholder',
	component: Placeholder,
} as ComponentMeta<typeof Placeholder>;

const Template: ComponentStory<typeof Placeholder> = () => <Placeholder />;

export const Default = Template.bind({});
