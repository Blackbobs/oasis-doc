module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Scan JavaScript/TypeScript files in the src directory
      './docs/**/*.{mdx, md}', // Scan MDX files in the docs directory (if you're using the docs feature)
      './static/**/*.html', // Scan HTML files in the static directory
      './node_modules/oasis-toast/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };