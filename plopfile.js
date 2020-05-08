module.exports = function (plop) {
	plop.setGenerator('component', {
		description: 'Create New Component',
		prompts: [
			{
				type: 'list',
				name: 'category',
				message: 'Component category',
				choices: [
				  	{
						name: 'Controls (Component manipulating data)',
						value: 'controls'
				  	},
				  	{
						name: 'Display (Component displaying data)',
						value: 'display'
				  	},
				  	{
						name: 'Layouts (Component providing structure)',
						value: 'layout'
				  	},
				  	{
						name: 'Partials (Component appearing commonly)',
						value: 'partials'
				  	}
				]
			},
			{
				type: 'input',
				name: 'folder',
				message: 'Component folder'
			},
			{
				type: 'input',
				name: 'name',
				message: 'Component name'
			}
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/{{ lowerCase category }}/{{ pathCase folder }}/{{ dashCase name }}.vue',
				templateFile: 'plop-templates/component.vue',
				abortOnFail: true
			}
		]
	})
	plop.setGenerator('page', {
		description: 'Create New Page',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Page name'
			},
			{
				type: 'input',
				name: 'folder',
				message: 'Page folder'
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/pages/{{ pathCase folder }}/{{ name }}.vue',
				templateFile: 'plop-templates/page.vue',
				abortOnFail: true
			}
		]
	})
}
