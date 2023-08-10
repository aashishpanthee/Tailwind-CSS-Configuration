/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "550px",
      md: "800px",
      lg: "1200px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        primary: "#FF5733",
        secondary: "#FFFC33",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};

// :::::::::::::::::::::::::::::::::::::::::::NOTE:::::::::::::::::::::::::::::::::
/* The theme section in the Tailwind configuration file allows you to customize the default values for 
   various design properties such as colors, typography, spacing, and more. When you update values in 
    the theme section, you're essentially redefining the default styles that Tailwind uses for its utility classes. */
// BASICALLY IN THEME , you are redefining the default values of tailwindcss

// :::::::::::::::::::::::::::::::::::::::::::NOTE:::::::::::::::::::::::::::::::::
/* The extend section in the Tailwind configuration file allows you to add new utility classes that don't exist
    in the default Tailwind styles. This is particularly useful when you want to create custom utility classes 
    or add styles that are specific to your project. */

// :::::::::::::::::::::::::::::::::::::::::::NOTE:::::::::::::::::::::::::::::::::
// DIFFERENCE BETWEEN THEME AND EXTEND
/* The theme section is used to customize the default values of existing Tailwind utility classes.
   It lets you modify properties like colors, typography, spacing, and more, allowing you to 
   establish a consistent design language throughout your project.

  The extend section is used to add new utility classes that don't exist in the default Tailwind styles.
  It allows you to introduce custom styles or specific variations that are unique to your project. */
