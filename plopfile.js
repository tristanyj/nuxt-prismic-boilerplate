module.exports = function (plop) {
	plop.setGenerator('component', {
		description: 'Create New Component',
		prompts: [
			{
				name: 'name',
				message: 'Component Name'
			}
		],
		actions: [
			{
				type: 'add',
				path: 'components/{{ dashCase name }}.vue',
				templateFile: 'plop-templates/component.vue'
			}
		]
	})
	plop.setGenerator('page', {
		description: 'Create New Page',
		prompts: [
			{
				name: 'name',
				message: 'Page Name'
			}
		],
		actions: [
			{
				type: 'add',
				path: 'pages/{{ dashCase name }}.vue',
				templateFile: 'plop-templates/page.vue'
			}
		]
	})
}
