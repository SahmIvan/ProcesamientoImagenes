/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'burnt_red': '#AD1F1F',
      'blood_red': '#8B1818',
      'night': '#131614',
      'flash_white': '#F3F4F6'
    }
  },
  plugins: [
    require('flowbite/plugin')
],
}
