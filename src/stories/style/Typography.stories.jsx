import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default {
  title: 'Style/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## 타이포그래피 시스템

### 폰트 패밀리
- **본문**: Pretendard Variable
- **헤드라인 (영문)**: Outfit
- **헤드라인 (한글)**: Pretendard (Black)
        `,
      },
    },
  },
};

export const Default = {
  render: () => (
    <Box sx={ { maxWidth: 800 } }>
      <Typography variant="h1" gutterBottom>h1. Heading</Typography>
      <Typography variant="h2" gutterBottom>h2. Heading</Typography>
      <Typography variant="h3" gutterBottom>h3. Heading</Typography>
      <Typography variant="h4" gutterBottom>h4. Heading</Typography>
      <Typography variant="h5" gutterBottom>h5. Heading</Typography>
      <Typography variant="h6" gutterBottom>h6. Heading</Typography>
      <Divider sx={ { my: 3 } } />
      <Typography variant="subtitle1" gutterBottom>subtitle1. Lorem ipsum</Typography>
      <Typography variant="subtitle2" gutterBottom>subtitle2. Lorem ipsum</Typography>
      <Typography variant="body1" gutterBottom>body1. Lorem ipsum dolor sit amet.</Typography>
      <Typography variant="body2" gutterBottom>body2. Lorem ipsum dolor sit amet.</Typography>
      <Typography variant="button" display="block" gutterBottom>button text</Typography>
      <Typography variant="caption" display="block" gutterBottom>caption text</Typography>
      <Typography variant="overline" display="block">overline text</Typography>
    </Box>
  ),
};
