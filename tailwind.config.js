const defaultConfig = {
  colors: {
    primary: '#5C82D7',
    secondary: '#FFE5BD',
    background: '#F5F6FA',
    darkBackground: '#C5C9DA',
    lightBackground: '#F1F4FE',
    whiteBackground: '#FFFFFF',
    mainText: '#24303B',
    darkText: '#262626',
    lightText: '#9BA0AF',
    hoverButton: '#4C72C4',
    shadow: 'rgba(23, 32, 54, 0.1)',
    error: '#FE461E',
    lightBorder: '#C6C6C6',
    accentColor: '#FFE5BD',
    border: '#C5C9DA',
  },
};

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

    dark: { ...defaultConfig },
    light: { ...defaultConfig },
  },
};
