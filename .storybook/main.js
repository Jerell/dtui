module.exports = {
	stories: [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)',
		'../components/**/*.stories.mdx',
		'../components/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'storybook-addon-next-router',
		'@storybook/addon-postcss',
		'storybook-css-modules-preset',
	],
};
