import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PTGraph } from './PTGraph';

export default {
	title: 'Components/PTGraph',
	component: PTGraph,
} as ComponentMeta<typeof PTGraph>;

const Template: ComponentStory<typeof PTGraph> = () => <PTGraph />;

export const Default = Template.bind({});
