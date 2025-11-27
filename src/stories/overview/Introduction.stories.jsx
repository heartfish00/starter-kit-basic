import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default {
  title: 'Overview/Introduction',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## 프로젝트 개요

이 프로젝트는 React + MUI 기반의 디자인 시스템입니다.

### 기술 스택
- **React** 19.x
- **MUI** 7.x
- **Vite** 7.x
- **Storybook** 10.x

### 문서 구조
| 섹션 | 설명 |
|------|------|
| Overview | 프로젝트 소개 및 가이드 |
| Style | 색상, 타이포그래피, 아이콘 등 |
| Component | 재사용 가능한 UI 컴포넌트 |
| Template | 컴포넌트 조합 템플릿 |
| Page | 전체 페이지 레이아웃 |
        `,
      },
    },
  },
};

export const Default = {
  render: () => (
    <Box sx={ { maxWidth: 800 } }>
      <Typography variant="h4" gutterBottom>
        Welcome to Design System
      </Typography>
      <Paper sx={ { p: 3, mt: 2 } }>
        <Typography variant="body1">
          이 Storybook은 프로젝트의 UI 컴포넌트를 문서화하고 테스트하기 위한 공간입니다.
        </Typography>
      </Paper>
    </Box>
  ),
};
