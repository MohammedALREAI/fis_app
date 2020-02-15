const fs = require('fs');
const _ = require('lodash');

const withCSS = require('@zeit/next-css');

const nextConfig = {
	generateBuildId: () => {
		const id =
			process.env.CIRCLECI === 'true' ? process.env.CIRCLE_SHA1 : fs.readFileSync(process.cwd() + '/BUILD_ID', 'utf8');
		console.log('Build id: ', id);
		return id;
	},
	// publicRuntimeConfig: _.pick(config, [
	// 	'AWS_BUCKET_PREFIX',
	// 	'OVERTIME_BACKEND_URL',
	// 	'OVERTIME_AUTH_URL',
	// 	'OVERTIME_VIDEOS_CDN',
	// 	'OVERTIME_VIDEOS_SOCKET',
	// 	'OVERTIME_IMAGES_CDN',
	// 	'GOOGLE_MAPS_API_KEY',
	// 	'OVERTIME_WWW_URL'
	// ]),
	webpack: config => {
		config.module.rules.push({
			test: /\.(png|jpg|gif|svg)$/,
			use: [
				{
					loader: 'file-loader',
					options: {}
				}
			]
		});
		return config;
	}
};

module.exports = withCSS(nextConfig);
