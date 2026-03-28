/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      /* ── Colours — exact from Figma specs ── */
      colors: {
        brand: {
          blue:       '#2563EB',   /* primary / Blue/600 */
          'blue-dark':'#0F3795',   /* dark heading blue */
          navy:       '#0D2455',   /* footer dark navy */
          orange:     '#EA580C',   /* accent / footer icon */
          'orange-500':'#FF782D',  /* CTA orange */
        },
        gray: {
          900: '#0F172A',   /* Blue Gray/900 */
          600: '#475569',   /* Blue Gray/600 */
          text: '#1E1E1E',  /* body text */
          black: '#141414', /* headings */
        },
        benefit: {
          bg:      '#F2F6FF',  /* card light fill */
          border:  '#F2F2F2',  /* card outline */
        },
        footer: {
          bg:     '#EFFBFF',
          copy:   '#0D2455',
        },
        banner: {
          yellow: '#FFD952',
        }
      },

      /* ── Typography ── */
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        inter:   ['Inter', 'sans-serif'],
        caveat:  ['Caveat', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        roboto:  ['Roboto', 'sans-serif'],
        exo:     ['Exo', 'sans-serif'],
        jost:    ['Jost', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        franklin:['Libre Franklin', 'sans-serif'],
      },

      /* ── Font sizes — exact pixel values from Figma ── */
      fontSize: {
        '15':  ['15px', { lineHeight: '10px' }],
        '16':  ['16px', { lineHeight: '26px' }],
        '17':  ['17px', { lineHeight: '24px' }],
        '18':  ['18px', { lineHeight: '27px' }],
        '20':  ['20px', { lineHeight: '100%' }],
        '22':  ['22px', { lineHeight: '30px' }],
        '24':  ['24px', { lineHeight: '100%' }],
        '34':  ['34px', { lineHeight: '41px' }],
        '40':  ['40px', { lineHeight: '58px' }],
        '48':  ['48px', { lineHeight: '58px' }],
        '66':  ['66px', { lineHeight: '100%' }],
        '78':  ['78px', { lineHeight: '110%' }],
      },

      /* ── Spacing / sizes from Figma ── */
      spacing: {
        '2px':  '2px',
        '7px':  '7px',
        '13px': '13px',
        '14':   '14px',
        '17':   '17px',
        '22':   '22px',
        '24':   '24px',
        '26':   '26px',
        '27':   '27px',
        '29':   '29px',
        '30':   '30px',
        '32':   '32px',
        '34':   '34px',
        '37':   '37px',
        '41':   '41px',
        '48':   '48px',
        '52':   '52px',
        '54':   '54px',
        '60':   '60px',
        '64':   '64px',
        '65':   '65px',
        '80':   '80px',
        '86':   '86px',
        '90':   '90px',
        '96':   '96px',
        '102':  '102px',
        '117':  '117px',
        '120':  '120px',
        '127':  '127px',
        '157':  '157px',
        '168':  '168px',
        '202':  '202px',
        '250':  '250px',
        '256':  '256px',
        '260':  '260px',
        '291':  '291px',
        '306':  '306px',
        '326':  '326px',
        '376':  '376px',
        '391':  '391px',
        '433':  '433px',
        '451':  '451px',
        '464':  '464px',
        '474':  '474px',
        '572':  '572px',
        '620':  '620px',
        '655':  '655px',
        '993':  '993px',
        '1075': '1075px',
        '1162': '1162px',
        '1200': '1200px',
        '1280': '1280px',
        '1290': '1290px',
        '1440': '1440px',
      },

      /* ── Border radius ── */
      borderRadius: {
        'sm':   '8px',
        'md':   '10px',
        'lg':   '20px',
        'xl':   '37px',
        'full': '100px',
        '9999': '9999px',
      },

      /* ── Box shadows from Figma ── */
      boxShadow: {
        'card':   '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.07)',
        'btn-blue':'0px 10px 15px -3px rgba(59, 130, 246, 0.2), 0px 4px 6px -4px rgba(59, 130, 246, 0.2)',
        'step':   '0px 100px 80px rgba(150, 114, 255, 0.07)',
        'img':    '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};