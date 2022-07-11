const defaultColors = {
  colors: {
    // Primary
    primaryPrimary: '#5279E1',
    primarySecondary: '#7191E6',
    primaryTetriary: '#A0B5EE',
    primaryQuaternary: '#F6F8FE',
    primaryHoverState: '#3361DC',
    primaryClickState: '#1F47B4',

    // SystemColors
    successPrimary: '#2AC769',
    successSecondary: '#EAF9F0',
    successHover: '#1D8B4A',
    attantionPrimary: '#FEB64F',
    attantionSecondary: '#FFF8ED',
    attantionHover: '#CB923F',
    errorPrimary: '#F93232',
    errorSecondary: '#FEEBEB',
    errorHover: '#C72828',
    infoPrimary: '#63ACEA',
    infoSecondary: '#EFF7FD',
    infoHover: '#4F8ABB',

    // Background
    bgPrimary: '#F4F4F8',
    bgSecondary: '#FFFFFF',
    bgTetriary: '#FFFFFF',
    bgDisabled: '#F2F4F6',
    bgHover: '#F4F4F8',

    // Greyscale
    dividers: '#E5E8EC',
    icons: '#6B7B94',
    stroke: '#CCD1DA',

    // Text
    textPrimary: '#17191C',
    textSecondary: '#555E6D',
    textTetriary: '#6B7B94',
    textOnPrimaryColor: '#FFFFFF',
    textDisabled: '#99A4B5',
    textPRbtnDisabled: '#FFFFFF',

    //  Stroke
    strokeFocus: '#F845FC',
  },
};
const darkThemeColors = {
  colors: {
    // Primary
    primaryPrimary: '#5279E1',
    primarySecondary: '#7191E6',
    primaryTetriary: '#2E3F61',
    primaryQuaternary: '#293856',
    primaryHoverState: '#2553D0',
    primaryClickState: '#295BE0',

    // SystemColors
    successPrimary: '#3CB56C',
    successSecondary: '#224542',
    successHover: '#2A7E4C',
    attantionPrimary: '#F9B554',
    attantionSecondary: '#44423E',
    attantionHover: '#CB923F',
    errorPrimary: '#F43636',
    errorSecondary: '#442D3A',
    errorHover: '#CB2424',
    infoPrimary: '#63ACEA',
    infoSecondary: '#2C4057',
    infoHover: '#4F8ABB',

    // Background
    bgPrimary: '#1B2431',
    bgSecondary: '#212C3B',
    bgTetriary: '#243041',
    bgDisabled: '#283548',
    bgHover: '#2B3A4F',

    // Greyscale
    dividers: '#304057',
    icons: '#B2BBC7',
    stroke: '#5E6878',

    // Text
    textPrimary: '#F4F4F5',
    textSecondary: '#CCD1DA',
    textTetriary: '#6B7B94',
    textOnPrimaryColor: '#F4F4F5',
    textDisabled: '#555E6D',
    textPRbtnDisabled: '#657081',

    //  Stroke
    strokeFocus: '#F845FC',
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

    dark: { ...darkThemeColors },
    light: { ...defaultColors },
  },
};
