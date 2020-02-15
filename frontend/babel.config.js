const next = {
	presets: [
		[
			'next/babel',
			{
				'preset-env': {
					modules: 'commonjs',
					debug: true
				}
			}
		]
	],
	plugins: [['inline-svg']]
};

module.exports = {
	env: {
		test: {
			presets: [
				[
					'env',
					{
						targets: {
							node: 'current'
						},
						modules: 'commonjs'
					}
				]
			]
		},
		production: next,
		development: next
	}
};
