// Theme configuration for the SIITec website - Grey and Copper theme

export const theme = {
  colors: {
   // Brand Copper Shades
  copper: '#B87333',       // Primary copper
  copperLight: '#E6C08C',  // Lighter copper (softer for light UI)
  copperDark: '#8E5A28',   // Darker copper for contrast

  // Neutral Grays
  gray: '#758384',         // Medium gray
  grayLight: '#D1D6D7',    // Lighter gray (background elements)
  grayDark: '#4A5455',     // Darker gray (text/icons)

  // Base Colors
  white: '#FFFFFF',
  black: '#000000',
  background: '#FAFAFA',   // Slightly lighter than #F5F5F5
  surface: '#FFFFFF',      // Cards, containers
  text: '#2A2A2A',         // Darker than original #333 for clarity
  subtext: '#5A5A5A',      // Muted secondary text

  // Accent (brand highlight)
  accent: '#B87333',       // Copper stays as accent

  // Tech-inspired elements
  tech: {
    neon: '#B87333',                       // Copper glow style
    darkBlue: '#4A5455',                   // Dark gray used in logo
    highlight: '#E6C08C',                  // Lighter copper highlight
    grid: 'rgba(117, 131, 132, 0.15)',
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