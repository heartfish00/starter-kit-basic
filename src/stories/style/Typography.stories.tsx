import React from 'react';
import type { Meta } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import theme, { typography, headingFontFamily } from '../../styles/theme';

/**
 * Typography 스토리
 *
 * 디자인 시스템의 타이포그래피 토큰을 시각적으로 문서화합니다.
 * 헤딩, 본문, 캡션 등 다양한 텍스트 스타일을 포함합니다.
 */

const meta: Meta = {
  title: 'Style/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Typography (타이포그래피 토큰)

프로젝트에서 사용하는 모든 텍스트 스타일을 중앙에서 관리합니다.

### 폰트 패밀리

| 용도 | 폰트 | 설명 |
|------|------|------|
| **본문** | Pretendard Variable | 가독성 높은 본문용 폰트 |
| **헤딩** | Outfit + Pretendard | 영문은 Outfit, 한글은 Pretendard 높은 weight |

### 타이포그래피 스케일

| Variant | 크기 | 용도 |
|---------|------|------|
| h1 | 40px | 페이지 메인 타이틀 |
| h2 | 32px | 섹션 타이틀 |
| h3 | 28px | 서브 섹션 타이틀 |
| h4 | 24px | 카드 타이틀 |
| h5 | 20px | 작은 타이틀 |
| h6 | 18px | 강조 텍스트 |
| body1 | 16px | 기본 본문 |
| body2 | 14px | 작은 본문 |
| caption | 12px | 캡션, 라벨 |
| overline | 12px | 오버라인 (대문자) |

### 사용 방법

\`\`\`jsx
<Typography variant="h1">헤딩 1</Typography>
<Typography variant="body1">본문 텍스트입니다.</Typography>
<Typography variant="caption" color="text.secondary">캡션 텍스트</Typography>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

/** 전체 타이포그래피 스케일 */
export const Default = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Typography Scale
      </Typography>

      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="text.secondary">
            H1 - 40px / weight 900
          </Typography>
          <Typography variant="h1">Heading 1 헤딩</Typography>
        </Box>

        <Box>
          <Typography variant="overline" color="text.secondary">
            H2 - 32px / weight 900
          </Typography>
          <Typography variant="h2">Heading 2 헤딩</Typography>
        </Box>

        <Box>
          <Typography variant="overline" color="text.secondary">
            H3 - 28px / weight 800
          </Typography>
          <Typography variant="h3">Heading 3 헤딩</Typography>
        </Box>

        <Box>
          <Typography variant="overline" color="text.secondary">
            H4 - 24px / weight 700
          </Typography>
          <Typography variant="h4">Heading 4 헤딩</Typography>
        </Box>

        <Box>
          <Typography variant="overline" color="text.secondary">
            H5 - 20px / weight 700
          </Typography>
          <Typography variant="h5">Heading 5 헤딩</Typography>
        </Box>

        <Box>
          <Typography variant="overline" color="text.secondary">
            H6 - 18px / weight 600
          </Typography>
          <Typography variant="h6">Heading 6 헤딩</Typography>
        </Box>

        <Divider />

        <Box>
          <Typography variant="overline" color="text.secondary">
            SUBTITLE1 - 16px / weight 500
          </Typography>
          <Typography variant="subtitle1">Subtitle 1 서브타이틀</Typography>
        </Box>

        <Box>
          <Typography variant="overline" color="text.secondary">
            SUBTITLE2 - 14px / weight 500
          </Typography>
          <Typography variant="subtitle2">Subtitle 2 서브타이틀</Typography>
        </Box>

        <Divider />

        <Box>
          <Typography variant="overline" color="text.secondary">
            BODY1 - 16px / weight 400
          </Typography>
          <Typography variant="body1">
            Body 1 본문 텍스트입니다. 일반적인 본문에 사용되는 기본 스타일입니다.
            가독성을 위해 line-height 1.6을 적용합니다.
          </Typography>
        </Box>

        <Box>
          <Typography variant="overline" color="text.secondary">
            BODY2 - 14px / weight 400
          </Typography>
          <Typography variant="body2">
            Body 2 본문 텍스트입니다. 부가적인 설명이나 작은 본문에 사용됩니다.
            가독성을 위해 line-height 1.6을 적용합니다.
          </Typography>
        </Box>

        <Divider />

        <Box>
          <Typography variant="overline" color="text.secondary">
            BUTTON - 14px / weight 600
          </Typography>
          <Typography variant="button" display="block">
            Button Text 버튼 텍스트
          </Typography>
        </Box>

        <Box>
          <Typography variant="overline" color="text.secondary">
            CAPTION - 12px / weight 400
          </Typography>
          <Typography variant="caption" display="block">
            Caption 캡션 텍스트입니다. 이미지 설명이나 작은 라벨에 사용됩니다.
          </Typography>
        </Box>

        <Box>
          <Typography variant="overline" color="text.secondary">
            OVERLINE - 12px / weight 600 / UPPERCASE
          </Typography>
          <Typography variant="overline" display="block">
            Overline Text 오버라인
          </Typography>
        </Box>
      </Stack>
    </Box>
  ),
};

/** 폰트 패밀리 */
export const FontFamilies = {
  render: () => (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Font Families
      </Typography>

      <Stack spacing={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="overline" color="text.secondary" gutterBottom display="block">
            Heading Font (Outfit + Pretendard)
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontFamily: headingFontFamily }}
          >
            The Quick Brown Fox
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontFamily: headingFontFamily }}
          >
            빠른 갈색 여우가 게으른 개를 뛰어넘습니다
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
            영문: Outfit / 한글: Pretendard (weight 900)
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="overline" color="text.secondary" gutterBottom display="block">
            Body Font (Pretendard Variable)
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            The quick brown fox jumps over the lazy dog.
          </Typography>
          <Typography variant="body1">
            다람쥐 헌 쳇바퀴에 타고파. 동해물과 백두산이 마르고 닳도록
            하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려 강산
            대한 사람 대한으로 길이 보전하세.
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
            Pretendard Variable - 가변 폰트로 다양한 weight 지원
          </Typography>
        </Paper>
      </Stack>
    </Box>
  ),
};

/** 폰트 Weight */
export const FontWeights = {
  render: () => (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Font Weights
      </Typography>

      <Stack spacing={2}>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <Typography sx={{ fontWeight: 300, fontSize: '1.5rem', minWidth: 200 }}>
            Light (300)
          </Typography>
          <Typography variant="caption" color="text.secondary">
            fontWeightLight
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <Typography sx={{ fontWeight: 400, fontSize: '1.5rem', minWidth: 200 }}>
            Regular (400)
          </Typography>
          <Typography variant="caption" color="text.secondary">
            fontWeightRegular
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <Typography sx={{ fontWeight: 500, fontSize: '1.5rem', minWidth: 200 }}>
            Medium (500)
          </Typography>
          <Typography variant="caption" color="text.secondary">
            fontWeightMedium
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', minWidth: 200 }}>
            Bold (700)
          </Typography>
          <Typography variant="caption" color="text.secondary">
            fontWeightBold
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <Typography sx={{ fontWeight: 800, fontSize: '1.5rem', minWidth: 200 }}>
            ExtraBold (800)
          </Typography>
          <Typography variant="caption" color="text.secondary">
            H3 헤딩에 사용
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <Typography sx={{ fontWeight: 900, fontSize: '1.5rem', minWidth: 200 }}>
            Black (900)
          </Typography>
          <Typography variant="caption" color="text.secondary">
            H1, H2 헤딩에 사용
          </Typography>
        </Box>
      </Stack>
    </Box>
  ),
};

/** 텍스트 색상 */
export const TextColors = {
  render: () => (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Text Colors
      </Typography>

      <Stack spacing={3}>
        <Box>
          <Typography variant="body1" color="text.primary" gutterBottom>
            text.primary - 주요 텍스트 (rgba(0, 0, 0, 0.87))
          </Typography>
          <Typography variant="body2" color="text.secondary">
            가장 높은 가시성의 텍스트. 헤딩, 본문, 중요 정보에 사용합니다.
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            text.secondary - 보조 텍스트 (rgba(0, 0, 0, 0.6))
          </Typography>
          <Typography variant="body2" color="text.secondary">
            부가 정보, 설명, 힌트 텍스트에 사용합니다.
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" color="text.disabled" gutterBottom>
            text.disabled - 비활성 텍스트 (rgba(0, 0, 0, 0.38))
          </Typography>
          <Typography variant="body2" color="text.secondary">
            비활성화된 요소, 플레이스홀더에 사용합니다.
          </Typography>
        </Box>

        <Divider />

        <Box>
          <Typography variant="body1" color="primary" gutterBottom>
            primary - 주요 강조 (Primary Color)
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" color="secondary" gutterBottom>
            secondary - 보조 강조 (Secondary Color)
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" color="error" gutterBottom>
            error - 에러 상태 (Error Color)
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" color="success.main" gutterBottom>
            success - 성공 상태 (Success Color)
          </Typography>
        </Box>
      </Stack>
    </Box>
  ),
};

/** 타이포그래피 스펙 테이블 */
export const SpecTable = {
  render: () => (
    <Box sx={{ maxWidth: 900 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Typography Specifications
      </Typography>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: 'grey.100' }}>
              <TableCell sx={{ fontWeight: 600 }}>Variant</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Font Size</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Font Weight</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Line Height</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Letter Spacing</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>h1</TableCell>
              <TableCell>2.5rem (40px)</TableCell>
              <TableCell>900</TableCell>
              <TableCell>1.2</TableCell>
              <TableCell>-0.02em</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>h2</TableCell>
              <TableCell>2rem (32px)</TableCell>
              <TableCell>900</TableCell>
              <TableCell>1.2</TableCell>
              <TableCell>-0.02em</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>h3</TableCell>
              <TableCell>1.75rem (28px)</TableCell>
              <TableCell>800</TableCell>
              <TableCell>1.3</TableCell>
              <TableCell>-0.01em</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>h4</TableCell>
              <TableCell>1.5rem (24px)</TableCell>
              <TableCell>700</TableCell>
              <TableCell>1.3</TableCell>
              <TableCell>-0.01em</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>h5</TableCell>
              <TableCell>1.25rem (20px)</TableCell>
              <TableCell>700</TableCell>
              <TableCell>1.4</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>h6</TableCell>
              <TableCell>1.125rem (18px)</TableCell>
              <TableCell>600</TableCell>
              <TableCell>1.4</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>subtitle1</TableCell>
              <TableCell>1rem (16px)</TableCell>
              <TableCell>500</TableCell>
              <TableCell>1.5</TableCell>
              <TableCell>0.01em</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>subtitle2</TableCell>
              <TableCell>0.875rem (14px)</TableCell>
              <TableCell>500</TableCell>
              <TableCell>1.5</TableCell>
              <TableCell>0.01em</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>body1</TableCell>
              <TableCell>1rem (16px)</TableCell>
              <TableCell>400</TableCell>
              <TableCell>1.6</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>body2</TableCell>
              <TableCell>0.875rem (14px)</TableCell>
              <TableCell>400</TableCell>
              <TableCell>1.6</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>button</TableCell>
              <TableCell>0.875rem (14px)</TableCell>
              <TableCell>600</TableCell>
              <TableCell>1.75</TableCell>
              <TableCell>0.02em</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>caption</TableCell>
              <TableCell>0.75rem (12px)</TableCell>
              <TableCell>400</TableCell>
              <TableCell>1.5</TableCell>
              <TableCell>0.02em</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>overline</TableCell>
              <TableCell>0.75rem (12px)</TableCell>
              <TableCell>600</TableCell>
              <TableCell>2</TableCell>
              <TableCell>0.08em</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  ),
};

/** 실제 사용 예시 */
export const UsageExamples = {
  render: () => (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Usage Examples
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="overline" color="primary" gutterBottom display="block">
          카테고리
        </Typography>
        <Typography variant="h4" gutterBottom>
          블로그 포스트 제목
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          2024년 1월 15일 · 5분 읽기
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          이것은 블로그 포스트의 본문 텍스트입니다. 가독성을 위해
          적절한 line-height와 font-size를 사용합니다. 사용자가
          편하게 읽을 수 있도록 구성되어 있습니다.
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
          조회수 1,234 · 좋아요 56
        </Typography>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          상품명
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          간단한 상품 설명이 들어갑니다.
        </Typography>
        <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>
          ₩89,000
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textDecoration: 'line-through' }}
        >
          ₩120,000
        </Typography>
      </Paper>
    </Box>
  ),
};
