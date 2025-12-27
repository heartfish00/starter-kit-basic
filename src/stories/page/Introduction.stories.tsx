import React from 'react';
import type { Meta } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const meta: Meta = {
  title: 'Page/Introduction',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Page 섹션 소개

Page는 전체 화면을 구성하는 최상위 레이아웃입니다.

### Page의 특징

1. **완전한 화면** - 헤더, 콘텐츠, 푸터 등 모든 요소 포함
2. **실제 사용 예시** - 프로덕션 환경과 동일한 구조
3. **반응형 레이아웃** - 다양한 화면 크기 지원

### 계층 구조

\`\`\`
Page (전체 페이지)
  └── Template (섹션 레이아웃)
        └── Component (개별 요소)
\`\`\`

### Page 구성 요소

| 요소 | 설명 | 위치 |
|------|------|------|
| Header | 네비게이션, 로고 | 상단 |
| Main Content | 핵심 콘텐츠 영역 | 중앙 |
| Sidebar | 보조 네비게이션 | 좌/우측 |
| Footer | 링크, 저작권 정보 | 하단 |

### 반응형 테스트

상단 툴바의 뷰포트 버튼을 사용하여 다양한 화면 크기에서
Page가 어떻게 표시되는지 확인할 수 있습니다.
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
        Page 섹션
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Page는 전체 화면을 구성하는 최상위 레이아웃입니다.
        실제 프로덕션 환경과 동일한 구조로 제작되어 있습니다.
      </Typography>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          계층 구조
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Page
              </Typography>
              <Typography variant="body2" color="text.secondary">
                전체 페이지
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Template
              </Typography>
              <Typography variant="body2" color="text.secondary">
                섹션 레이아웃
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Component
              </Typography>
              <Typography variant="body2" color="text.secondary">
                개별 요소
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Page 구성 요소
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Header - 네비게이션, 로고
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Main Content - 핵심 콘텐츠 영역
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sidebar - 보조 네비게이션
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Footer - 링크, 저작권 정보
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              반응형 테스트
            </Typography>
            <Typography variant="body2" color="text.secondary">
              상단 툴바의 뷰포트 버튼을 사용하여 다양한 화면 크기에서
              Page가 어떻게 표시되는지 확인할 수 있습니다.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  ),
};
