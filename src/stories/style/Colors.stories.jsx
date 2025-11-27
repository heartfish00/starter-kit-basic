import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export default {
  title: 'Style/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## 색상 시스템

프로젝트에서 사용하는 색상 팔레트입니다.

### Primary
- Main: \`#0000FF\`

### Secondary
- Main: \`blueGrey[900]\`
        `,
      },
    },
  },
};

const ColorBox = ({ color, name, value }) => (
  <Paper sx={ { p: 2, textAlign: 'center' } }>
    <Box
      sx={ {
        width: '100%',
        height: 80,
        backgroundColor: color,
        mb: 1,
      } }
    />
    <Typography variant="subtitle2">{ name }</Typography>
    <Typography variant="caption" color="text.secondary">{ value }</Typography>
  </Paper>
);

export const Default = {
  render: () => {
    const theme = useTheme();
    return (
      <Box sx={ { flexGrow: 1 } }>
        <Typography variant="h6" gutterBottom>Primary</Typography>
        <Grid container spacing={ 2 } sx={ { mb: 4 } }>
          <Grid size={ { xs: 6, md: 3 } }>
            <ColorBox
              color={ theme.palette.primary.main }
              name="Primary Main"
              value="#0000FF"
            />
          </Grid>
          <Grid size={ { xs: 6, md: 3 } }>
            <ColorBox
              color={ theme.palette.primary.light }
              name="Primary Light"
              value={ theme.palette.primary.light }
            />
          </Grid>
          <Grid size={ { xs: 6, md: 3 } }>
            <ColorBox
              color={ theme.palette.primary.dark }
              name="Primary Dark"
              value={ theme.palette.primary.dark }
            />
          </Grid>
        </Grid>

        <Typography variant="h6" gutterBottom>Secondary</Typography>
        <Grid container spacing={ 2 }>
          <Grid size={ { xs: 6, md: 3 } }>
            <ColorBox
              color={ theme.palette.secondary.main }
              name="Secondary Main"
              value={ theme.palette.secondary.main }
            />
          </Grid>
          <Grid size={ { xs: 6, md: 3 } }>
            <ColorBox
              color={ theme.palette.secondary.light }
              name="Secondary Light"
              value={ theme.palette.secondary.light }
            />
          </Grid>
          <Grid size={ { xs: 6, md: 3 } }>
            <ColorBox
              color={ theme.palette.secondary.dark }
              name="Secondary Dark"
              value={ theme.palette.secondary.dark }
            />
          </Grid>
        </Grid>
      </Box>
    );
  },
};
