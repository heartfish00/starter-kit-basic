import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Pretendard Variable"',
      'Pretendard',
      '-apple-system',
      'BlinkMacSystemFont',
      'system-ui',
      'Roboto',
      '"Helvetica Neue"',
      '"Segoe UI"',
      '"Apple SD Gothic Neo"',
      '"Noto Sans KR"',
      '"Malgun Gothic"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
      fontWeight: 900,
    },
    h2: {
      fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
      fontWeight: 900,
    },
    h3: {
      fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
      fontWeight: 800,
    },
    h4: {
      fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: '#0000FF',
    },
    secondary: {
      main: blueGrey[900],
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.08)',
        },
        elevation1: {
          boxShadow: '0 0 12px rgba(0, 0, 0, 0.06)',
        },
        elevation2: {
          boxShadow: '0 0 16px rgba(0, 0, 0, 0.08)',
        },
        elevation3: {
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.10)',
        },
        elevation4: {
          boxShadow: '0 0 24px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
