import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InitialConditions from './InitialConditions';

export default {
	title: 'Components/InitialConditions',
	component: InitialConditions,
	decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
	argTypes: {
		// foo is the property we want to remove from the UI
		type: {
			table: {
				disable: true,
			},
		},
	},
} as ComponentMeta<typeof InitialConditions>;

const Template: ComponentStory<typeof InitialConditions> = (args) => (
	<InitialConditions {...args} />
);

export const Snapshot = Template.bind({});
Snapshot.args = { type: 'snapshot' };

export const LifeOfField = Template.bind({});
LifeOfField.args = { type: 'life of field' };
