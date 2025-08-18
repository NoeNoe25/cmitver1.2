// Theme configuration for the SIITec website - Grey and Copper theme

export const theme = {
  colors: {
    copper: '#B87333', // Primary copper color
    copperLight: '#D4A76A', // Lighter copper shade
    copperDark: '#8E5A28', // Darker copper shade
    gray: '#758384', // Primary gray color
    grayLight: '#A9B2B3', // Lighter gray shade
    grayDark: '#4A5455', // Darker gray shade
    white: '#FFFFFF',
    black: '#000000',
    background: '#F5F5F5',
    text: '#333333',
    accent: '#B87333', // Using copper as accent instead of gold
    // Maintaining tech colors but with copper/gray focus
    tech: {
      neon: '#B87333', // Changed from cyan to copper
      darkBlue: '#4A5455', // Changed from dark blue to dark gray
      highlight: '#D4A76A', // Changed to light copper
      grid: 'rgba(117, 131, 132, 0.2)', // Changed to gray grid lines
    },
  },
  fonts: {
    primary: '"Montserrat", sans-serif',
    secondary: '"Roboto", sans-serif',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.5s ease',
    fast: '0.2s ease',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '50%',
  },
};