import React from 'react';
import type { Meta } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import theme, { palette } from '../../styles/theme';

/**
 * Colors 스토리
 *
 * 디자인 시스템의 색상 토큰을 시각적으로 문서화합니다.
 * Primary, Secondary, 상태 색상, 텍스트 색상, Grey 스케일 등을 포함합니다.
 */

/**
 * ColorSwatch 컴포넌트
 *
 * Props:
 * @param {string} color - 배경색으로 사용할 색상 값 [Required]
 * @param {string} label - 색상 이름 [Required]
 * @param {string} value - 색상 HEX 또는 rgba 값 [Required]
 * @param {boolean} isDark - 어두운 배경인 경우 흰색 텍스트 사용 [Optional, 기본값: false]
 *
 * Example usage:
 * <ColorSwatch color="#0000FF" label="primary.main" value="#0000FF" isDark />
 */
function ColorSwatch({
  color,
  label,
  value,
  isDark = false,
}: {
  color: string;
  label: string;
  value: string;
  isDark?: boolean;
}) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          width: 80,
          height: 80,
          bgcolor: color,
          border: '1px solid',
          borderColor: 'divider',
          mb: 1,
        }}
      />
      <Typography variant="caption" display="block" sx={{ fontWeight: 600 }}>
        {label}
      </Typography>
      <Typography variant="caption" color="text.secondary" display="block">
        {value}
      </Typography>
    </Box>
  );
}

/**
 * ColorPaletteRow 컴포넌트
 *
 * Props:
 * @param {string} title - 색상 팔레트 제목 [Required]
 * @param {Array} colors - 색상 정보 배열 [Required]
 *
 * Example usage:
 * <ColorPaletteRow title="Primary" colors={[{ label: 'light', color: '#6666FF', value: '#6666FF' }]} />
 */
function ColorPaletteRow({
  title,
  colors,
}: {
  title: string;
  colors: Array<{ label: string; color: string; value: string; isDark?: boolean }>;
}) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        {colors.map((item) => (
          <ColorSwatch
            key={item.label}
            color={item.color}
            label={item.label}
            value={item.value}
            isDark={item.isDark}
          />
        ))}
      </Stack>
    </Box>
  );
}

const meta: Meta = {
  title: 'Style/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Colors (색상 토큰)

프로젝트에서 사용하는 모든 색상을 중앙에서 관리합니다.
MUI 테마의 palette 설정을 통해 일관된 색상 시스템을 유지합니다.

### 색상 카테고리

| 카테고리 | 설명 | 용도 |
|----------|------|------|
| **Primary** | 브랜드 메인 색상 | CTA 버튼, 강조 요소 |
| **Secondary** | 브랜드 보조 색상 | 보조 버튼, 배경 |
| **Feedback** | 상태 색상 | 성공, 에러, 경고, 정보 |
| **Text** | 텍스트 색상 | 본문, 보조 텍스트, 비활성 |
| **Grey** | 회색 스케일 | 배경, 구분선, 보더 |

### 사용 방법

\`\`\`jsx
// sx prop에서 사용
<Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
  Primary Button
</Box>

// theme에서 직접 접근
const primaryColor = theme.palette.primary.main;
\`\`\`
        `,
      },
    },
  },
};

export default meta;

/** 전체 색상 팔레트 */
export const Default = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Color Tokens
      </Typography>

      <ColorPaletteRow
        title="Primary"
        colors={[
          { label: 'light', color: '#6666FF', value: '#6666FF' },
          { label: 'main', color: '#0000FF', value: '#0000FF', isDark: true },
          { label: 'dark', color: '#0000B2', value: '#0000B2', isDark: true },
          { label: 'contrastText', color: '#FFFFFF', value: '#FFFFFF' },
        ]}
      />

      <ColorPaletteRow
        title="Secondary"
        colors={[
          { label: 'light', color: theme.palette.secondary.light, value: 'blueGrey[700]', isDark: true },
          { label: 'main', color: theme.palette.secondary.main, value: 'blueGrey[900]', isDark: true },
          { label: 'dark', color: '#1a252b', value: '#1a252b', isDark: true },
          { label: 'contrastText', color: '#FFFFFF', value: '#FFFFFF' },
        ]}
      />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Feedback Colors (상태 색상)
      </Typography>

      <ColorPaletteRow
        title="Success"
        colors={[
          { label: 'light', color: '#4caf50', value: '#4caf50', isDark: true },
          { label: 'main', color: '#2e7d32', value: '#2e7d32', isDark: true },
          { label: 'dark', color: '#1b5e20', value: '#1b5e20', isDark: true },
        ]}
      />

      <ColorPaletteRow
        title="Error"
        colors={[
          { label: 'light', color: '#ef5350', value: '#ef5350' },
          { label: 'main', color: '#d32f2f', value: '#d32f2f', isDark: true },
          { label: 'dark', color: '#c62828', value: '#c62828', isDark: true },
        ]}
      />

      <ColorPaletteRow
        title="Warning"
        colors={[
          { label: 'light', color: '#ff9800', value: '#ff9800' },
          { label: 'main', color: '#ed6c02', value: '#ed6c02' },
          { label: 'dark', color: '#e65100', value: '#e65100', isDark: true },
        ]}
      />

      <ColorPaletteRow
        title="Info"
        colors={[
          { label: 'light', color: '#03a9f4', value: '#03a9f4' },
          { label: 'main', color: '#0288d1', value: '#0288d1', isDark: true },
          { label: 'dark', color: '#01579b', value: '#01579b', isDark: true },
        ]}
      />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Text Colors (텍스트 색상)
      </Typography>

      <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              width: 120,
              height: 60,
              bgcolor: 'rgba(0, 0, 0, 0.87)',
              mb: 1,
            }}
          />
          <Typography variant="caption" display="block" sx={{ fontWeight: 600 }}>
            text.primary
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block">
            rgba(0, 0, 0, 0.87)
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              width: 120,
              height: 60,
              bgcolor: 'rgba(0, 0, 0, 0.6)',
              mb: 1,
            }}
          />
          <Typography variant="caption" display="block" sx={{ fontWeight: 600 }}>
            text.secondary
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block">
            rgba(0, 0, 0, 0.6)
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              width: 120,
              height: 60,
              bgcolor: 'rgba(0, 0, 0, 0.38)',
              mb: 1,
            }}
          />
          <Typography variant="caption" display="block" sx={{ fontWeight: 600 }}>
            text.disabled
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block">
            rgba(0, 0, 0, 0.38)
          </Typography>
        </Box>
      </Stack>
    </Box>
  ),
};

/** Grey 스케일 */
export const GreyScale = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Grey Scale
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        MUI의 grey 팔레트를 기반으로 한 회색 스케일입니다.
        배경, 보더, 구분선 등에 사용합니다.
      </Typography>

      <Stack direction="row" spacing={0}>
        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
          <Box key={shade} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                width: 60,
                height: 80,
                bgcolor: theme.palette.grey[shade as keyof typeof theme.palette.grey],
              }}
            />
            <Typography variant="caption" display="block" sx={{ fontWeight: 600, mt: 1 }}>
              {shade}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  ),
};

/** Primary 색상 상세 */
export const PrimaryColors = {
  render: () => (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
        Primary Color
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        브랜드의 메인 색상입니다. CTA 버튼, 강조가 필요한 요소에 사용합니다.
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Paper
            sx={{
              p: 4,
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Primary Main
            </Typography>
            <Typography variant="body2">#0000FF</Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Paper
            sx={{
              p: 3,
              bgcolor: 'primary.light',
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Light
            </Typography>
            <Typography variant="caption">#6666FF</Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Paper
            sx={{
              p: 3,
              bgcolor: 'primary.dark',
              color: 'primary.contrastText',
              textAlign: 'center',
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Dark
            </Typography>
            <Typography variant="caption">#0000B2</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** Secondary 색상 상세 */
export const SecondaryColors = {
  render: () => (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
        Secondary Color
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        브랜드의 보조 색상입니다. blueGrey 팔레트를 기반으로 합니다.
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Paper
            sx={{
              p: 4,
              bgcolor: 'secondary.main',
              color: 'secondary.contrastText',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Secondary Main
            </Typography>
            <Typography variant="body2">blueGrey[900]</Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Paper
            sx={{
              p: 3,
              bgcolor: 'secondary.light',
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Light
            </Typography>
            <Typography variant="caption">blueGrey[700]</Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Paper
            sx={{
              p: 3,
              bgcolor: 'secondary.dark',
              color: 'secondary.contrastText',
              textAlign: 'center',
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Dark
            </Typography>
            <Typography variant="caption">#1a252b</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** 액션 상태 색상 */
export const ActionColors = {
  render: () => (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
        Action Colors
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        인터랙션 상태에 사용되는 색상입니다.
      </Typography>

      <Stack spacing={2}>
        <Paper sx={{ p: 2, bgcolor: 'action.active' }}>
          <Typography variant="body2" color="common.white">
            action.active - rgba(0, 0, 0, 0.54)
          </Typography>
        </Paper>
        <Paper sx={{ p: 2, bgcolor: 'action.hover' }}>
          <Typography variant="body2">
            action.hover - rgba(0, 0, 0, 0.04)
          </Typography>
        </Paper>
        <Paper sx={{ p: 2, bgcolor: 'action.selected' }}>
          <Typography variant="body2">
            action.selected - rgba(0, 0, 0, 0.08)
          </Typography>
        </Paper>
        <Paper sx={{ p: 2, bgcolor: 'action.disabled', color: 'action.disabled' }}>
          <Typography variant="body2">
            action.disabled - rgba(0, 0, 0, 0.26)
          </Typography>
        </Paper>
        <Paper sx={{ p: 2, bgcolor: 'action.disabledBackground' }}>
          <Typography variant="body2">
            action.disabledBackground - rgba(0, 0, 0, 0.12)
          </Typography>
        </Paper>
        <Paper sx={{ p: 2, bgcolor: 'action.focus' }}>
          <Typography variant="body2">
            action.focus - rgba(0, 0, 0, 0.12)
          </Typography>
        </Paper>
      </Stack>
    </Box>
  ),
};
