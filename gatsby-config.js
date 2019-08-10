module.exports = {
    siteMetadata: {
        title: 'PyLucknow - Be the change',
        description: 'Python Users Group Lucknow',
        keywords: 'python,lucknow,software,community,opensource',
    },
    plugins: [
        'gatsby-theme-carbon',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'PyLucknow - Be the change',
                short_name: 'PyLucknow',
                start_url: '/',
                background_color: '#171717',
                theme_color: '#0062ff',
                display: 'browser',
                isSearchEnabled: true
            },
        },
    ],
};
