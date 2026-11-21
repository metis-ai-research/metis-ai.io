// Tailwind supplies the reset (preflight) only. Design tokens live as CSS custom
// properties in src/index.css; component styles sit beside each component.
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: { extend: {} },
  plugins: [],
};
