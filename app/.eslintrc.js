module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'@vue/standard'
	],
	parserOptions: {
		ecmaVersion: 2020,
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/camelcase': 'off',
		'prefer-const': 'off',
		semi: [1, 'never'],
		indent: ['error', 'tab'],
		'vue/html-indent': ['error', 'tab']
	}
}
