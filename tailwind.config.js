module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '960px',
        xl: '960px',
      },
    },

    dark: {
      colors: {
        text: '#24303B',
        secondary: '#FFE5BD',
        background: '#F5F6FA',

        primary: '#ed4077',
        primaryDark: '#b5004c',
        primaryLight: '#ff77a6',
      },
    },
    light: {
      colors: {
        text: '#24303B',
        secondary: '#FFE5BD',
        background: '#F5F6FA',

        primary: '#ed4077',
        primaryDark: '#b5004c',
        primaryLight: '#ff77a6',
      },
    },
  },
};
