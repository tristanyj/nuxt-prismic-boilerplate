module.exports = function (plop) {
	plop.setGenerator('component', {
		description: 'Create New Component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name'
			},
			{
				type: 'input',
				name: 'folder',
				message: 'Component folder'
			}
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/{{ pathCase folder }}/{{ dashCase name }}.vue',
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
