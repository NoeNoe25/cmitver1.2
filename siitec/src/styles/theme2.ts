// Theme configuration for the SIITec website - Tech-inspired

export const theme = {
  colors: {
    copper: '#B87333', // Copper color
    gray: '#758384', // Specified gray color
    white: '#FFFFFF',
    black: '#000000',
    background: '#F5F5F5',
    text: '#333333',
    accent: '#D4AF37', // Gold accent to complement copper
    tech: {
      neon: '#00FFFF', // Cyan neon accent
      darkBlue: '#0A192F', // Dark blue tech background
      highlight: '#64FFDA', // Highlight for tech elements
      grid: 'rgba(184, 115, 51, 0.2)', // Copper grid lines with transparency
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