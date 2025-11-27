import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default {
  title: 'Page/Introduction',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## 페이지

전체 페이지 레이아웃과 플로우를 보여줍니다.

### 예정된 페이지
- Main Page
- Detail Page
- Settings Page
        `,
      },
    },
  },
};

export const Default = {
  render: () => (
    <Box sx={ { maxWidth: 600 } }>
      <Paper sx={ { p: 3 } }>
        <Typography variant="h6" gutterBottom>
          페이지 섹션
        </Typography>
        <Typography variant="body2" color="text.secondary">
          이 섹션에는 전체 페이지 레이아웃이 추가될 예정입니다.
        </Typography>
      </Paper>
    </Box>
  ),
};
