import React from 'react';
import type { Meta } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const meta: Meta = {
  title: 'Overview/ForDesigners',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## 디자이너를 위한 가이드

Storybook을 디자인 도구처럼 활용하는 방법을 안내합니다.

### Storybook 활용법

1. **컴포넌트 탐색**: 사이드바에서 원하는 컴포넌트를 선택하여 확인
2. **Controls 패널**: 하단 Controls 탭에서 props를 실시간으로 변경
3. **Docs 탭**: 각 컴포넌트의 상세 문서와 사용 예시 확인
4. **반응형 테스트**: 상단 뷰포트 버튼으로 다양한 화면 크기 테스트

### 주요 기능

| 기능 | 설명 | 위치 |
|------|------|------|
| Controls | Props 실시간 변경 | 하단 패널 |
| Actions | 이벤트 로그 확인 | 하단 패널 |
| Viewport | 반응형 테스트 | 상단 툴바 |
| Backgrounds | 배경색 변경 | 상단 툴바 |
| Docs | 컴포넌트 문서 | 상단 탭 |

### 작업 워크플로우

1. **Style 섹션** - 디자인 토큰(색상, 타이포그래피) 확인
2. **Component 섹션** - 필요한 컴포넌트 탐색 및 테스트
3. **Template 섹션** - 컴포넌트 조합 패턴 참고
4. **Page 섹션** - 전체 페이지 레이아웃 확인
        `,
      },
    },
  },
};

export default meta;

export const Default = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
        디자이너를 위한 Storybook 가이드
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Storybook은 코드 없이도 컴포넌트를 탐색하고 테스트할 수 있는 강력한 도구입니다.
        아래 가이드를 따라 효율적으로 활용해보세요.
      </Typography>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          시작하기
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="사이드바 탐색"
              secondary="왼쪽 사이드바에서 컴포넌트를 카테고리별로 탐색할 수 있습니다."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Controls 패널 활용"
              secondary="하단 Controls 탭에서 컴포넌트의 속성을 실시간으로 변경해보세요."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Docs 탭 확인"
              secondary="각 컴포넌트의 상세 설명과 사용 예시를 확인할 수 있습니다."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="반응형 테스트"
              secondary="상단 툴바의 뷰포트 버튼으로 다양한 화면 크기를 테스트하세요."
            />
          </ListItem>
        </List>
      </Paper>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          권장 작업 순서
        </Typography>
        <Typography variant="body2" color="text.secondary">
          1. Style 섹션에서 색상, 타이포그래피 등 디자인 토큰 확인
        </Typography>
        <Typography variant="body2" color="text.secondary">
          2. Component 섹션에서 필요한 컴포넌트 탐색
        </Typography>
        <Typography variant="body2" color="text.secondary">
          3. Template 섹션에서 컴포넌트 조합 패턴 참고
        </Typography>
        <Typography variant="body2" color="text.secondary">
          4. Page 섹션에서 전체 페이지 레이아웃 확인
        </Typography>
      </Paper>
    </Box>
  ),
};
