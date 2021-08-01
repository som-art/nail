yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest postcss-cli
echo "module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}" > postcss.config.js
echo "  module.exports = {
    mode: 'jit',
   purge: [
     './src/**/*.html',
     './src/**/*.js',
     './src/**/*.jsx',
   ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }" > tailwind.config.js
mkdir ./src/styles
echo "@tailwind base;
@tailwind components;
@tailwind utilities;
" > ./src/styles/style.css

