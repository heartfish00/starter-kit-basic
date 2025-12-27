import React from 'react';
import type { Meta } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import theme, {
  spacing,
  shape,
  customShadows,
  breakpoints,
  zIndex,
  transitions,
} from '../../styles/theme';

/**
 * ComponentTokens 스토리
 *
 * 컴포넌트 레벨의 디자인 토큰을 시각적으로 문서화합니다.
 * Spacing, Shape, Shadow, Breakpoints, Z-Index, Transitions 등을 포함합니다.
 */

const meta: Meta = {
  title: 'Style/ComponentTokens',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Component Tokens (컴포넌트 토큰)

UI 컴포넌트의 레이아웃과 동작을 정의하는 토큰들입니다.

### 토큰 카테고리

| 카테고리 | 설명 | 용도 |
|----------|------|------|
| **Spacing** | 8px 기반 간격 시스템 | margin, padding, gap |
| **Shape** | 모서리 라운딩 | borderRadius |
| **Shadows** | Dimmed 스타일 그림자 | elevation, boxShadow |
| **Breakpoints** | 반응형 기준점 | media queries |
| **Z-Index** | 레이어 순서 | stacking context |
| **Transitions** | 전환 효과 | animation timing |

### 사용 방법

\`\`\`jsx
// spacing 사용 (8px 단위)
<Box sx={{ p: 2, m: 3, gap: 1 }} />  // 16px, 24px, 8px

// custom shadow 사용
<Paper sx={{ boxShadow: theme.customShadows.lg }} />

// breakpoint 사용
<Box sx={{ display: { xs: 'none', md: 'block' } }} />
\`\`\`
        `,
      },
    },
  },
};

export default meta;

/** 전체 컴포넌트 토큰 */
export const Default = {
  render: () => (
    <Box sx={{ maxWidth: 900 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Component Tokens
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Spacing
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Base unit: {spacing}px
            </Typography>
            <Stack direction="row" spacing={1} alignItems="flex-end">
              {[1, 2, 3, 4, 5].map((n) => (
                <Box key={n} sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 32,
                      height: spacing * n,
                      bgcolor: 'primary.light',
                    }}
                  />
                  <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>
                    {n} ({spacing * n}px)
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Shadows
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Dimmed shadows with 0 offset
            </Typography>
            <Stack direction="row" spacing={2}>
              {Object.entries(customShadows).slice(1).map(([key, value]) => (
                <Box key={key} sx={{ textAlign: 'center' }}>
                  <Paper sx={{ width: 48, height: 48, boxShadow: value }} />
                  <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    {key}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Shape
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Default borderRadius: {shape.borderRadius}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: 'primary.main',
                    borderRadius: 0,
                  }}
                />
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  default (0)
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: 'secondary.main',
                    borderRadius: 1,
                  }}
                />
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Chip (4px)
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Breakpoints
            </Typography>
            <Stack spacing={1}>
              {Object.entries(breakpoints.values).map(([key, value]) => (
                <Stack key={key} direction="row" spacing={2} alignItems="center">
                  <Chip label={key} size="small" sx={{ minWidth: 40 }} />
                  <Typography variant="body2">{value}px</Typography>
                </Stack>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** Spacing 토큰 */
export const SpacingTokens = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
        Spacing Tokens
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        8px를 기본 단위로 하는 간격 시스템입니다.
        일관된 시각적 리듬을 위해 모든 간격은 이 단위의 배수로 설정합니다.
      </Typography>

      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: 'grey.100' }}>
              <TableCell sx={{ fontWeight: 600 }}>Multiplier</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Value</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Usage</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Visual</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { n: 0.5, usage: '매우 좁은 간격, 아이콘 내부' },
              { n: 1, usage: '인라인 요소 간격' },
              { n: 1.5, usage: '버튼 내부 패딩' },
              { n: 2, usage: '기본 간격, 카드 내부 패딩' },
              { n: 3, usage: '섹션 내 그룹 간격' },
              { n: 4, usage: '카드 간격, 리스트 아이템 간격' },
              { n: 5, usage: '섹션 간격' },
              { n: 6, usage: '큰 섹션 간격' },
              { n: 8, usage: '페이지 섹션 간격' },
              { n: 10, usage: '주요 섹션 구분' },
            ].map(({ n, usage }) => (
              <TableRow key={n}>
                <TableCell>{n}</TableCell>
                <TableCell>{spacing * n}px</TableCell>
                <TableCell>{usage}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      width: spacing * n,
                      height: 16,
                      bgcolor: 'primary.main',
                      minWidth: 4,
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          사용 예시
        </Typography>
        <Paper sx={{ p: 2, bgcolor: 'grey.50', mt: 2 }}>
          <Typography component="pre" sx={{ fontFamily: 'monospace', fontSize: '0.875rem', m: 0 }}>
{`// sx prop에서 사용
<Box sx={{ p: 2 }} />           // padding: 16px
<Box sx={{ m: 3 }} />           // margin: 24px
<Box sx={{ gap: 1 }} />         // gap: 8px
<Box sx={{ py: 2, px: 3 }} />   // padding: 16px 24px

// Stack/Grid에서 사용
<Stack spacing={2}>...</Stack>  // gap: 16px
<Grid spacing={3}>...</Grid>    // gap: 24px`}
          </Typography>
        </Paper>
      </Paper>
    </Box>
  ),
};

/** Shadow 토큰 */
export const ShadowTokens = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
        Shadow Tokens
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Dimmed 스타일의 그림자 토큰입니다.
        x, y offset을 0으로 하고 blur를 높여 부드럽고 자연스러운 입체감을 표현합니다.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {Object.entries(customShadows).map(([key, value]) => (
          <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={key}>
            <Box sx={{ textAlign: 'center' }}>
              <Paper
                sx={{
                  width: '100%',
                  height: 100,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: value,
                }}
              >
                <Typography variant="h6">{key}</Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: 'grey.100' }}>
              <TableCell sx={{ fontWeight: 600 }}>Token</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Value</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Usage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>none</TableCell>
              <TableCell><code>none</code></TableCell>
              <TableCell>그림자 없음</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>sm</TableCell>
              <TableCell><code>0 0 12px rgba(0, 0, 0, 0.06)</code></TableCell>
              <TableCell>미묘한 부유 효과, 버튼 hover</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>md</TableCell>
              <TableCell><code>0 0 16px rgba(0, 0, 0, 0.08)</code></TableCell>
              <TableCell>카드, 패널</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>lg</TableCell>
              <TableCell><code>0 0 20px rgba(0, 0, 0, 0.10)</code></TableCell>
              <TableCell>모달, 드롭다운 (기본값)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>xl</TableCell>
              <TableCell><code>0 0 24px rgba(0, 0, 0, 0.12)</code></TableCell>
              <TableCell>강조가 필요한 요소</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  ),
};

/** Breakpoint 토큰 */
export const BreakpointTokens = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
        Breakpoint Tokens
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        반응형 디자인을 위한 화면 크기 기준점입니다.
      </Typography>

      <Stack spacing={2} sx={{ mb: 4 }}>
        {[
          { key: 'xs', value: 0, label: '모바일', description: '스마트폰 세로 모드' },
          { key: 'sm', value: 600, label: '태블릿 세로', description: '태블릿 세로 모드, 대형 스마트폰' },
          { key: 'md', value: 900, label: '태블릿 가로', description: '태블릿 가로 모드, 소형 노트북' },
          { key: 'lg', value: 1200, label: '데스크톱', description: '일반 데스크톱 모니터' },
          { key: 'xl', value: 1536, label: '대형 데스크톱', description: '대형 모니터, 4K 디스플레이' },
        ].map((bp, index) => (
          <Paper key={bp.key} sx={{ p: 2 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box
                sx={{
                  width: 60 + index * 20,
                  height: 40,
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="caption" color="common.white" sx={{ fontWeight: 600 }}>
                  {bp.key}
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {bp.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {bp.value}px 이상 - {bp.description}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        ))}
      </Stack>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          사용 예시
        </Typography>
        <Paper sx={{ p: 2, bgcolor: 'grey.50', mt: 2 }}>
          <Typography component="pre" sx={{ fontFamily: 'monospace', fontSize: '0.875rem', m: 0 }}>
{`// sx prop에서 반응형 스타일
<Box
  sx={{
    width: { xs: '100%', md: '50%', lg: '33%' },
    display: { xs: 'none', sm: 'block' },
    p: { xs: 2, md: 4 },
  }}
/>

// Grid size prop
<Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
  <Item />
</Grid>

// useMediaQuery 훅
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));`}
          </Typography>
        </Paper>
      </Paper>
    </Box>
  ),
};

/** Z-Index 토큰 */
export const ZIndexTokens = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
        Z-Index Tokens
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        UI 요소의 레이어 순서를 정의합니다.
        일관된 stacking context를 위해 정의된 값을 사용합니다.
      </Typography>

      <Stack spacing={2}>
        {[
          { key: 'mobileStepper', value: 1000, description: '모바일 스테퍼' },
          { key: 'fab', value: 1050, description: 'Floating Action Button' },
          { key: 'speedDial', value: 1050, description: 'Speed Dial' },
          { key: 'appBar', value: 1100, description: '앱 바, 헤더' },
          { key: 'drawer', value: 1200, description: '드로어, 사이드바' },
          { key: 'modal', value: 1300, description: '모달, 다이얼로그' },
          { key: 'snackbar', value: 1400, description: '스낵바, 토스트' },
          { key: 'tooltip', value: 1500, description: '툴팁' },
        ].map((item, index) => (
          <Paper key={item.key} sx={{ p: 2 }}>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Box
                sx={{
                  width: 80,
                  height: 40,
                  bgcolor: `hsl(${index * 45}, 70%, 50%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'common.white',
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  {item.value}
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {item.key}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  ),
};

/** Transition 토큰 */
export const TransitionTokens = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
        Transition Tokens
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        애니메이션과 전환 효과를 위한 타이밍 토큰입니다.
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Duration
            </Typography>
            <Stack spacing={2}>
              {Object.entries(transitions.duration).map(([key, value]) => (
                <Box key={key}>
                  <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {key}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value}ms
                    </Typography>
                  </Stack>
                  <Box
                    sx={{
                      width: `${(value / 400) * 100}%`,
                      height: 8,
                      bgcolor: 'primary.main',
                      transition: `width ${value}ms`,
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Easing
            </Typography>
            <Stack spacing={2}>
              {Object.entries(transitions.easing).map(([key, value]) => (
                <Box key={key}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {key}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {value}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          사용 예시
        </Typography>
        <Paper sx={{ p: 2, bgcolor: 'grey.50', mt: 2 }}>
          <Typography component="pre" sx={{ fontFamily: 'monospace', fontSize: '0.875rem', m: 0 }}>
{`// sx prop에서 transition 사용
<Box
  sx={{
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  }}
/>

// theme의 transition 함수 사용
<Box
  sx={{
    transition: (theme) =>
      theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
      }),
  }}
/>`}
          </Typography>
        </Paper>
      </Paper>
    </Box>
  ),
};

/** 컴포넌트 오버라이드 */
export const ComponentOverrides = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
        Component Overrides
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        MUI 컴포넌트의 기본 스타일 오버라이드 설정입니다.
      </Typography>

      <Stack spacing={3}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            MuiPaper
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Paper 컴포넌트의 그림자를 커스텀 shadow 토큰으로 오버라이드합니다.
          </Typography>
          <Stack direction="row" spacing={2}>
            {[0, 1, 2, 3, 4].map((elevation) => (
              <Paper key={elevation} elevation={elevation} sx={{ p: 2, width: 80, textAlign: 'center' }}>
                <Typography variant="caption">
                  elevation {elevation}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            MuiButton
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            borderRadius: 0, textTransform: none
          </Typography>
          <Stack direction="row" spacing={2}>
            <Box
              component="button"
              sx={{
                px: 2,
                py: 1,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                border: 'none',
                borderRadius: 0,
                fontFamily: 'inherit',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Button
            </Box>
          </Stack>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            MuiCard
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            borderRadius: 0
          </Typography>
          <Paper sx={{ width: 200, p: 2 }}>
            <Typography variant="subtitle2">Card Title</Typography>
            <Typography variant="body2" color="text.secondary">
              Card content
            </Typography>
          </Paper>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            MuiChip
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            borderRadius: 4 (예외)
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="Default" />
            <Chip label="Primary" color="primary" />
            <Chip label="Outlined" variant="outlined" />
          </Stack>
        </Paper>
      </Stack>
    </Box>
  ),
};
