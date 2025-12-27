import React from 'react';
import type { Meta } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const meta: Meta = {
  title: 'Overview/Introduction',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Starter Kit Basic

React + MUI + Storybook 기반의 디자인 시스템 스타터 킷입니다.

### 핵심 목적

1. **UI 컴포넌트 체계적 관리** - 재사용 가능한 컴포넌트를 Storybook으로 문서화
2. **디자인 톤 일관성 유지** - 색상, 타이포그래피, 스타일을 중앙에서 관리
3. **로직과 UI 분리** - 제품의 비즈니스 로직과 UI 디자인 작업을 명확히 분리

### 기술 스택

| 기술 | 버전 | 설명 |
|------|------|------|
| React | 19.x | UI 라이브러리 |
| MUI | 7.x | 컴포넌트 라이브러리 |
| Storybook | 10.x | 컴포넌트 문서화 |
| Vite | 7.x | 빌드 도구 |

### 사이드바 구조

| 순서 | 섹션 | 설명 |
|------|------|------|
| 1 | **Overview** | 프로젝트 소개, 가이드 |
| 2 | **Style** | 색상, 타이포그래피, 아이콘 |
| 3 | **Component** | 재사용 가능한 UI 컴포넌트 |
| 4 | **Template** | 컴포넌트 조합 템플릿 |
| 5 | **Page** | 전체 페이지 레이아웃 |
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
        Starter Kit Basic에 오신 것을 환영합니다
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        이 스타터 킷은 디자이너와 개발자가 함께 사용할 수 있는 컴포넌트 라이브러리입니다.
        Storybook을 통해 컴포넌트를 시각적으로 탐색하고, 다양한 상태를 테스트할 수 있습니다.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Style
            </Typography>
            <Typography variant="body2" color="text.secondary">
              색상, 타이포그래피, 아이콘 등 디자인 토큰을 확인하세요.
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Component
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Button, Card 등 재사용 가능한 UI 컴포넌트를 탐색하세요.
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Template
            </Typography>
            <Typography variant="body2" color="text.secondary">
              여러 컴포넌트를 조합한 템플릿 패턴을 확인하세요.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  ),
};
