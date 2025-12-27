import React from 'react';
import type { Meta } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import theme, {
  palette,
  typography,
  spacing,
  shape,
  customShadows,
  breakpoints,
  zIndex,
  transitions,
} from '../../styles/theme';

/**
 * Style Overview 스토리
 *
 * 디자인 시스템의 전체 개요를 보여줍니다.
 * 디자이너와 개발자가 디자인 토큰을 한눈에 파악할 수 있도록 구성합니다.
 */

const meta: Meta = {
  title: 'Style/Overview',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Style Overview (스타일 개요)

프로젝트의 디자인 시스템을 구성하는 핵심 토큰들을 한눈에 볼 수 있습니다.

### 디자인 토큰이란?

디자인 토큰은 UI의 시각적 스타일을 정의하는 가장 작은 단위입니다.
색상, 타이포그래피, 간격, 그림자 등을 토큰으로 관리하면:

- **일관성 유지**: 동일한 값을 여러 곳에서 재사용
- **유지보수 용이**: 토큰 값만 변경하면 전체 UI에 반영
- **협업 효율화**: 디자이너와 개발자가 동일한 언어로 소통

### 스타일 섹션 구성

| 섹션 | 설명 |
|------|------|
| **Colors** | 색상 팔레트 (Primary, Secondary, Feedback, Grey) |
| **Typography** | 폰트 패밀리, 크기, 굵기, 행간 |
| **Icons** | Material Symbols 아이콘 |
| **ComponentTokens** | Spacing, Shape, Shadow, Breakpoints 등 |
        `,
      },
    },
  },
};

export default meta;

/** 전체 스타일 개요 */
export const Default = {
  render: () => (
    <Box sx={{ maxWidth: 1000 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
        Design Tokens Overview
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        프로젝트의 디자인 시스템을 구성하는 핵심 토큰들입니다.
        모든 UI 요소는 이 토큰들을 기반으로 일관되게 구성됩니다.
      </Typography>

      <Grid container spacing={3}>
        {/* Colors */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Colors
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              브랜드와 상태를 표현하는 색상 시스템
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Box sx={{ width: 40, height: 40, bgcolor: 'primary.main' }} />
              <Box sx={{ width: 40, height: 40, bgcolor: 'secondary.main' }} />
              <Box sx={{ width: 40, height: 40, bgcolor: 'success.main' }} />
              <Box sx={{ width: 40, height: 40, bgcolor: 'error.main' }} />
              <Box sx={{ width: 40, height: 40, bgcolor: 'warning.main' }} />
              <Box sx={{ width: 40, height: 40, bgcolor: 'info.main' }} />
            </Stack>
            <Stack direction="row" spacing={0} sx={{ mt: 2 }}>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <Box
                  key={shade}
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: theme.palette.grey[shade as keyof typeof theme.palette.grey],
                  }}
                />
              ))}
            </Stack>
          </Paper>
        </Grid>

        {/* Typography */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Typography
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              일관된 텍스트 스타일을 위한 타이포그래피 스케일
            </Typography>
            <Stack spacing={1}>
              <Typography variant="h4" sx={{ lineHeight: 1.2 }}>Heading</Typography>
              <Typography variant="subtitle1">Subtitle</Typography>
              <Typography variant="body1">Body text</Typography>
              <Typography variant="caption" color="text.secondary">Caption</Typography>
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Stack direction="row" spacing={2}>
              <Chip label="Outfit" size="small" variant="outlined" />
              <Chip label="Pretendard" size="small" variant="outlined" />
            </Stack>
          </Paper>
        </Grid>

        {/* Spacing */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Spacing
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              8px 기반 간격 시스템 (0.5x ~ 10x)
            </Typography>
            <Stack direction="row" spacing={2} alignItems="flex-end">
              {[1, 2, 3, 4, 5].map((multiplier) => (
                <Box key={multiplier} sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 40,
                      height: spacing * multiplier,
                      bgcolor: 'primary.light',
                    }}
                  />
                  <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>
                    {multiplier}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {spacing * multiplier}px
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        {/* Shadows */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Shadows
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Dimmed 스타일의 그림자 토큰
            </Typography>
            <Stack direction="row" spacing={2}>
              {Object.entries(customShadows).slice(1).map(([key, value]) => (
                <Box key={key} sx={{ textAlign: 'center' }}>
                  <Paper
                    sx={{
                      width: 48,
                      height: 48,
                      boxShadow: value,
                    }}
                  />
                  <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    {key}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        {/* Shape */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Shape
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              모서리 라운딩 설정
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  bgcolor: 'primary.main',
                  borderRadius: 0,
                }}
              />
              <Box>
                <Typography variant="subtitle2">borderRadius: 0</Typography>
                <Typography variant="caption" color="text.secondary">
                  Sharp corners (기본값)
                </Typography>
              </Box>
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Chip 컴포넌트 예외: borderRadius: 4
            </Typography>
          </Paper>
        </Grid>

        {/* Breakpoints */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Breakpoints
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              반응형 디자인을 위한 화면 크기 기준점
            </Typography>
            <Stack spacing={1}>
              {Object.entries(breakpoints.values).map(([key, value]) => (
                <Box key={key} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Chip label={key} size="small" sx={{ minWidth: 40 }} />
                  <Typography variant="body2">{value}px</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {key === 'xs' && '모바일'}
                    {key === 'sm' && '태블릿 세로'}
                    {key === 'md' && '태블릿 가로'}
                    {key === 'lg' && '데스크톱'}
                    {key === 'xl' && '대형 데스크톱'}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** 디자인 원칙 */
export const DesignPrinciples = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
        Design Principles
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        프로젝트의 디자인 결정을 이끄는 핵심 원칙들입니다.
      </Typography>

      <Stack spacing={3}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            1. Material Design 기반
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Google Material Design 가이드라인을 기반으로 일관된 UX를 제공합니다.
            MUI 컴포넌트를 활용하여 접근성과 사용성을 보장합니다.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            2. 토큰 중심 설계
          </Typography>
          <Typography variant="body2" color="text.secondary">
            모든 시각적 스타일은 디자인 토큰으로 정의됩니다.
            하드코딩된 값 대신 토큰을 사용하여 일관성과 유지보수성을 확보합니다.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            3. Sharp & Clean
          </Typography>
          <Typography variant="body2" color="text.secondary">
            borderRadius: 0을 기본값으로 하여 모던하고 깔끔한 시각적 언어를 사용합니다.
            불필요한 장식을 최소화하고 콘텐츠에 집중합니다.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            4. Dimmed Shadows
          </Typography>
          <Typography variant="body2" color="text.secondary">
            그림자는 x, y offset을 0으로 하고 blur를 높여 부드럽고 자연스러운 입체감을 표현합니다.
            opacity를 낮춰 콘텐츠를 방해하지 않습니다.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            5. 명확한 타이포그래피 계층
          </Typography>
          <Typography variant="body2" color="text.secondary">
            영문 헤딩은 Outfit, 한글과 본문은 Pretendard를 사용합니다.
            크기와 굵기의 차이로 명확한 정보 계층을 만듭니다.
          </Typography>
        </Paper>
      </Stack>
    </Box>
  ),
};

/** 테마 구조 */
export const ThemeStructure = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
        Theme Structure
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        MUI 테마 객체의 구조와 커스텀 설정을 보여줍니다.
      </Typography>

      <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
        <Typography
          component="pre"
          sx={{
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            overflow: 'auto',
            m: 0,
          }}
        >
{`theme = {
  palette: {
    primary: { light, main, dark, contrastText },
    secondary: { light, main, dark, contrastText },
    error: { light, main, dark },
    warning: { light, main, dark },
    success: { light, main, dark },
    info: { light, main, dark },
    text: { primary, secondary, disabled },
    background: { default, paper },
    grey: { 50, 100, 200, ..., 900 },
    action: { active, hover, selected, disabled, ... },
    divider,
  },

  typography: {
    fontFamily: 'Pretendard Variable, ...',
    h1, h2, h3, h4, h5, h6,
    subtitle1, subtitle2,
    body1, body2,
    button, caption, overline,
  },

  spacing: 8, // base unit

  shape: {
    borderRadius: 0,
  },

  customShadows: {
    none, sm, md, lg, xl,
  },

  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },

  zIndex: {
    appBar: 1100, drawer: 1200, modal: 1300, ...
  },

  transitions: {
    duration: { shortest, shorter, short, standard, complex },
    easing: { easeInOut, easeOut, easeIn, sharp },
  },

  components: {
    MuiPaper: { styleOverrides: { ... } },
    MuiButton: { styleOverrides: { ... } },
    MuiCard: { styleOverrides: { ... } },
    MuiChip: { styleOverrides: { ... } },
    // ...
  },
}`}
        </Typography>
      </Paper>
    </Box>
  ),
};

/** 토큰 사용 가이드 */
export const TokenUsageGuide = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
        Token Usage Guide
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        디자인 토큰을 코드에서 사용하는 방법입니다.
      </Typography>

      <Stack spacing={3}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            sx prop에서 테마 참조
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.50', mt: 2 }}>
            <Typography component="pre" sx={{ fontFamily: 'monospace', fontSize: '0.875rem', m: 0 }}>
{`// 색상
<Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }} />
<Typography color="text.secondary" />

// 간격 (spacing 함수)
<Box sx={{ p: 2, m: 3, gap: 1 }} />  // 16px, 24px, 8px

// 타이포그래피
<Typography variant="h4" />
<Typography sx={{ fontWeight: 'fontWeightBold' }} />`}
            </Typography>
          </Paper>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            theme 객체 직접 접근
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.50', mt: 2 }}>
            <Typography component="pre" sx={{ fontFamily: 'monospace', fontSize: '0.875rem', m: 0 }}>
{`import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        color: theme.palette.primary.main,
        fontSize: theme.typography.h6.fontSize,
        boxShadow: theme.customShadows.lg,
      }}
    />
  );
}`}
            </Typography>
          </Paper>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            반응형 스타일
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.50', mt: 2 }}>
            <Typography component="pre" sx={{ fontFamily: 'monospace', fontSize: '0.875rem', m: 0 }}>
{`// 배열 형식 (xs, sm, md, lg, xl 순서)
<Box sx={{ p: [1, 2, 3, 4] }} />

// 객체 형식
<Box
  sx={{
    width: { xs: '100%', md: '50%' },
    display: { xs: 'block', md: 'flex' },
  }}
/>

// Grid size prop (MUI v7)
<Grid size={{ xs: 12, sm: 6, md: 4 }} />`}
            </Typography>
          </Paper>
        </Paper>
      </Stack>
    </Box>
  ),
};
