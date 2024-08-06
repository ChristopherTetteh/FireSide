export const colors = {
    primary: '#FF9900',
    secondary: '#FEFEFD',
    tertairy:'#0E0E0E',
    textWhite: '#F4F3F3',
    textBalck:'#0A0A0A',
    textSecondary: '#757575',
  };
  export const fontWeights = {
    light: 200,
    extraLight: 250,
    regular: 300,
    large: 400,
    extraLarge: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  };
  export const borderRadii = {
    small: 10,
    medium: 20,
    large: 30,
  };
  export const fontSizes = {
    small: 12,
    medium: 14,
    regular:16,
    large: 18,
    extaRegular: 20,
    extaLarge: 24,
  };

  export const opacityShades = {
    primary: {
        60: `rgba(${rgbToRgba(colors.primary)}, 0.6)`,
        70: `rgba(${rgbToRgba(colors.primary)}, 0.7)`,
        80: `rgba(${rgbToRgba(colors.primary)}, 0.8)`,
        90: `rgba(${rgbToRgba(colors.primary)}, 0.9)`,
      // Add more opacity shades as needed
    },
    secondary: {
      60: `rgba(${rgbToRgba(colors.secondary)}, 0.6)`,
      70: `rgba(${rgbToRgba(colors.secondary)}, 0.7)`,
      80: `rgba(${rgbToRgba(colors.secondary)}, 0.8)`,
      90: `rgba(${rgbToRgba(colors.secondary)}, 0.9)`,
      // Add more opacity shades as needed
    },
    tertairy: {
      60: `rgba(${rgbToRgba(colors.tertairy)}, 0.6)`,
      70: `rgba(${rgbToRgba(colors.tertairy)}, 0.7)`,
      80: `rgba(${rgbToRgba(colors.tertairy)}, 0.8)`,
      90: `rgba(${rgbToRgba(colors.tertairy)}, 0.9)`,
      // Add more opacity shades as needed
    },
  };
  
  //rgbToRgba function converts the color values from hexadecimal format to RGBA format.
  function rgbToRgba(color) {
    const [r, g, b] = color.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `${r},${g},${b},1`;
  }