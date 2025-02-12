module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2020,
	},
	extends: [
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	plugins: ["eslint-plugin-tsdoc", "svelte3"],
	rules: {
		"no-console": ["warn", { allow: ["info", "warn", "error"] }],
		"no-debugger": "warn",
		"no-undef": "off",
		curly: "error",
		"prefer-const": "error",
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: "return" },
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
			},
		],
		"@typescript-eslint/no-var-requires": "off",
		"tsdoc/syntax": "warn",
	},
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
};
