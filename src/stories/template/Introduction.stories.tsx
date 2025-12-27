import React from 'react';
import type { Meta } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const meta: Meta = {
  title: 'Template/Introduction',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Template 섹션 소개

Template은 여러 컴포넌트를 조합하여 만든 재사용 가능한 UI 패턴입니다.

### Template의 목적

1. **일관된 레이아웃** - 반복되는 UI 구조를 표준화
2. **빠른 개발** - 검증된 패턴을 재사용하여 개발 시간 단축
3. **디자인 일관성** - 동일한 구조로 사용자 경험 향상

### Template vs Component

| 구분 | Component | Template |
|------|-----------|----------|
| 정의 | 단일 UI 요소 | 컴포넌트 조합 |
| 예시 | Button, Card | CardGrid, Header+Content |
| 재사용 | 높음 | 중간 |
| 커스터마이징 | Props 변경 | 구조 변경 가능 |

### 포함된 Template 유형

- **CardGrid**: 카드 컴포넌트의 그리드 레이아웃
- **FormLayout**: 입력 폼의 표준 레이아웃
- **ListWithHeader**: 헤더가 있는 목록 패턴
- **DashboardSection**: 대시보드 섹션 구조
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
        Template 섹션
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Template은 여러 컴포넌트를 조합하여 만든 재사용 가능한 UI 패턴입니다.
        일관된 레이아웃과 빠른 개발을 위해 검증된 패턴을 제공합니다.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Component
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              단일 UI 요소입니다.
            </Typography>
            <Typography variant="body2">
              예시: Button, Card, Input
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Template
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              여러 컴포넌트의 조합입니다.
            </Typography>
            <Typography variant="body2">
              예시: CardGrid, FormLayout, ListWithHeader
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Template 활용 가이드
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          1. 사이드바에서 원하는 Template을 선택합니다.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          2. 기본 구조와 포함된 컴포넌트를 확인합니다.
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          3. Controls 패널에서 다양한 설정을 테스트합니다.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          4. Docs 탭에서 사용 방법과 코드 예시를 확인합니다.
        </Typography>
      </Paper>
    </Box>
  ),
};
