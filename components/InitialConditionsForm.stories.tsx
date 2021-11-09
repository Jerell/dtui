import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InitialConditionsForm from './InitialConditionsForm';

export default {
	title: 'Components/InitialConditionsForm',
	component: InitialConditionsForm,
	decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
	argTypes: {
		// foo is the property we want to remove from the UI
		type: {
			table: {
				disable: true,
			},
		},
	},
} as ComponentMeta<typeof InitialConditionsForm>;

const Template: ComponentStory<typeof InitialConditionsForm> = (args) => (
	<InitialConditionsForm {...args} />
);

export const Snapshot = Template.bind({});
Snapshot.args = { type: 'snapshot' };

export const LifeOfField = Template.bind({});
LifeOfField.args = { type: 'life of field' };
