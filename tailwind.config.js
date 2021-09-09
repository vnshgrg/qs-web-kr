module.exports = {
    theme: {
        extend: {
            listStyleType: {
                roman: 'upper-roman'
            },
            colors: {
                primary: '#ef6127',
                secondary: '#034aa1'
            }
        }
    },
    purge: [
        './pages/**/*.jsx',
        './pages/**/*.js',
        './app/components/**/*.jsx',
        './app/components/**/*.js',
        './app/layout/**/*.jsx',
        './app/layout/**/*.js'
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp')
    ]
};
