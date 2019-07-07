const containerFluid = function () {
  return function ({ addUtilities }) {
    addUtilities({
      '.container-fluid': {
        'width': '100%',
        'padding-right': '1rem',
        'padding-left': '1rem',
        'margin-right': 'auto',
        'margin-left': 'auto'
      }
    })
  }
}

module.exports = {
  prefix: 'tw-',
  theme: {
    container: {
      padding: '1rem'
    },
    colors: {
      black: '#22292f',
      white: '#FAFBFC',
      hvr05: 'rgba(0,0,0,0.5)',
      primary: {
        primary: '#264fc1',
        light: '#9aa7e0',
        dark: '#113dab'
      },
      secondary: {
        primary: '#6b34d3',
        light: '#b79de9',
        dark: '#5127c4'
      },
      accent: {
        primary: '#00d4b7',
        light: '#53f2e2',
        dark: '#00b294'
      },
      error: {
        base: '#FF5630'
      },
      background: {
        base: '#18191c'
      },
      surface: {
        base: '#303033',
        dp01: '#242528',
        dp02: '#28292c',
        dp03: '#2a2b2e',
        dp04: '#2d2e30',
        dp06: '#313235',
        dp08: '#343538',
        dp12: '#39393c',
        dp16: '#3a3b3e',
        dp24: '#3d3e40'
      },
      on: {
        light: '#ECF0F1',
        dark: '#050709'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    flex: {
      '1': '1',
      none: '0 0 auto',
      initial: '0 1 auto',
      auto: '1 1 auto',
      grow: '1 1 100%',
      nogrow: '0 1 auto',
      noshrink: '1 0 auto'
    }
  },
  variants: {},
  plugins: [
    containerFluid()
  ]
}
