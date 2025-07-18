// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	tutorialsSidebar: [
		'index',
		{
			Guides: [
				{ Customization: [
					{
						type: 'autogenerated',
						dirName: 'customization',
					},
				] },
				{ Accessibility: [
					{
						type: 'autogenerated',
						dirName: 'a11y',
					},
				] },
			],
		},
		{
			'Framework Integrations': [
				{ React: [
					{
						type: 'autogenerated',
						dirName: 'react',
					},
				] },
				{
					type: 'doc',
					id: 'vuejs/wrapper',
					label: 'Vue.js',
				},
				{
					type: 'doc',
					id: 'webcomponents/custom-element',
					label: 'Web Components',
				},
			],
		},
		{
			'How To': [
				{
					type: 'autogenerated',
					dirName: 'how_to',
				},
			],
		},
		{
			'Examples / Demos': [
				{
					type: 'autogenerated',
					dirName: 'demos',
				},
			],
		},
		'analysis-indicators',
	],
};

module.exports = sidebars;
