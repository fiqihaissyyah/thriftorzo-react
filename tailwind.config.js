module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		container: {
			// you can configure the container to be centered
			center: true,

			// or have default horizontal padding
			padding: '1rem',

			// default breakpoints but with 40px removed
			screens: {
				sm: '600px',
				md: '728px',
				lg: '984px',
				xl: '1168px',
				'2xl': '1496px',
			},
		},
		extend: {
			boxShadow: {
				custom: '0 0px 4px 0px rgba(0, 0, 0, 0.15)',
			},
		},
	},
	plugins: [],
};
