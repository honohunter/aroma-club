module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      GP: ['GothamPro-Bold', 'sans-serif'],
      GS: ['GothamSSm-Book', 'sans-serif'],
      PT: ['PTSerif-Italic', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem',
      },
    },
    screens: {
      xs: '600px',
      sm: '960px',
      md: '1280px',
      // lg: '1920px',
      // => @media
    },

    extend: {
      fontSize: {
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '26px': '26px',
        '28px': '28px',
        '32px': '32px',
        '34px': '34px',
      },
      backgroundColor: {
        transparent: 'transparent',
        black: {
          900: '#212322',
          hover: '#313533',
          DEFAULT: '#000',
        },
      },
      textColor: {
        black: {
          900: '#212322',
          DEFAULT: '#000',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
};
