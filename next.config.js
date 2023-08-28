const withNextIntl = require('next-intl/plugin')(
	'./i18n.js'
);

module.exports = withNextIntl({
	experimental: {appDir: true},
	images: {
		domains: [
			'res.cloudinary.com',
			'athletid.com'
		],
	},
});