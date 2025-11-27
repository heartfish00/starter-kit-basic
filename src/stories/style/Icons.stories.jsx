import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default {
  title: 'Style/Icons',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Material Symbols

Google Material Symbols는 2,500개 이상의 아이콘을 제공하는 Variable Font 기반 아이콘 시스템입니다.

### 스타일 종류

| Style | 클래스명 | 특징 |
|-------|---------|------|
| **Outlined** | \`material-symbols-outlined\` | 기본 스타일, 선으로 표현 |
| **Rounded** | \`material-symbols-rounded\` | 둥근 모서리 |
| **Sharp** | \`material-symbols-sharp\` | 날카로운 모서리 |

### Variable Font Axes

| Axis | 범위 | 용도 |
|------|------|------|
| **Fill** | 0-1 | 채워진/빈 아이콘 전환 |
| **Weight** | 100-700 | 획 굵기 (Thin ~ Bold) |
| **Grade** | -50~200 | 미세한 두께 조정 |
| **Optical Size** | 20-48 | 크기별 획 최적화 |

### 사용법

\`\`\`jsx
<span
  className="material-symbols-rounded"
  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}
>
  home
</span>
\`\`\`
        `,
      },
    },
  },
};

/** 스타일별 클래스명 매핑 */
const STYLE_CLASS_MAP = {
  outlined: 'material-symbols-outlined',
  rounded: 'material-symbols-rounded',
  sharp: 'material-symbols-sharp',
};

/**
 * MaterialSymbol 컴포넌트
 *
 * Props:
 * @param {string} name - 아이콘 이름 [Required]
 * @param {string} variant - 스타일 종류 (outlined, rounded, sharp) [Optional, 기본값: 'outlined']
 * @param {number} size - 아이콘 크기 (px) [Optional, 기본값: 24]
 * @param {boolean} fill - 채움 여부 [Optional, 기본값: false]
 * @param {number} weight - 획 굵기 (100-700) [Optional, 기본값: 400]
 * @param {number} grade - 미세 두께 (-50~200) [Optional, 기본값: 0]
 * @param {number} opticalSize - 광학 크기 (20-48) [Optional, 기본값: 24]
 * @param {string} color - 아이콘 색상 [Optional, 기본값: 'inherit']
 *
 * Example usage:
 * <MaterialSymbol name="home" variant="rounded" fill size={24} />
 */
const MaterialSymbol = ({
  name,
  variant = 'outlined',
  size = 24,
  fill = false,
  weight = 400,
  grade = 0,
  opticalSize = 24,
  color = 'inherit',
  ...props
}) => (
  <span
    className={ STYLE_CLASS_MAP[variant] || STYLE_CLASS_MAP.outlined }
    style={ {
      fontSize: size,
      color,
      fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
      lineHeight: 1,
      display: 'inline-block',
      verticalAlign: 'middle',
    } }
    { ...props }
  >
    { name }
  </span>
);

/** 인기 아이콘 목록 */
const popularIcons = [
  'home', 'search', 'settings', 'person', 'favorite', 'star',
  'check_circle', 'delete', 'add', 'close', 'menu', 'more_vert',
  'arrow_back', 'arrow_forward', 'expand_more', 'expand_less',
  'visibility', 'visibility_off', 'edit', 'content_copy',
  'share', 'download', 'upload', 'refresh', 'sync', 'cloud',
  'folder', 'file_copy', 'attachment', 'link', 'image', 'video_camera_back',
  'mail', 'send', 'chat', 'notifications', 'alarm', 'schedule',
  'lock', 'lock_open', 'key', 'security', 'verified', 'warning',
  'info', 'help', 'error', 'check', 'priority_high', 'lightbulb',
];

/** 카테고리별 아이콘 */
const iconCategories = {
  'Action': ['home', 'search', 'settings', 'bookmark', 'favorite', 'shopping_cart', 'thumb_up', 'thumb_down'],
  'Navigation': ['menu', 'close', 'arrow_back', 'arrow_forward', 'expand_more', 'chevron_right', 'first_page', 'last_page'],
  'Content': ['add', 'remove', 'create', 'content_copy', 'content_paste', 'delete', 'archive', 'inventory'],
  'Communication': ['mail', 'call', 'chat', 'message', 'forum', 'comment', 'send', 'contact_mail'],
  'Alert': ['error', 'warning', 'info', 'help', 'notification_important', 'report', 'feedback', 'new_releases'],
  'File': ['folder', 'file_copy', 'attachment', 'cloud_upload', 'cloud_download', 'save', 'print', 'description'],
  'Social': ['person', 'group', 'share', 'public', 'thumb_up', 'mood', 'sentiment_satisfied', 'emoji_emotions'],
  'Device': ['smartphone', 'computer', 'tablet', 'watch', 'headphones', 'keyboard', 'mouse', 'monitor'],
};

/** 기본 - 아이콘 플레이그라운드 */
export const Default = {
  render: () => {
    const [iconName, setIconName] = useState('home');
    const [variant, setVariant] = useState('outlined');
    const [size, setSize] = useState(48);
    const [fill, setFill] = useState(false);
    const [weight, setWeight] = useState(400);
    const [grade, setGrade] = useState(0);
    const [opticalSize, setOpticalSize] = useState(24);

    return (
      <Box sx={ { maxWidth: 900 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          아이콘 플레이그라운드
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
          스타일과 Variable Font Axes를 조절하여 아이콘을 변경해보세요.
        </Typography>

        <Grid container spacing={ 4 }>
          {/* 아이콘 미리보기 */}
          <Grid size={ { xs: 12, md: 5 } }>
            <Paper sx={ { p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' } }>
              <Box sx={ { mb: 3 } }>
                <MaterialSymbol
                  name={ iconName }
                  variant={ variant }
                  size={ size }
                  fill={ fill }
                  weight={ weight }
                  grade={ grade }
                  opticalSize={ opticalSize }
                  color="#0000FF"
                />
              </Box>
              <Typography variant="h6" sx={ { fontFamily: 'monospace' } }>
                { iconName }
              </Typography>
              <Typography variant="caption" color="text.secondary">
                { variant } · { size }px { fill ? '· filled' : '' }
              </Typography>
            </Paper>
          </Grid>

          {/* 컨트롤 패널 */}
          <Grid size={ { xs: 12, md: 7 } }>
            <Paper sx={ { p: 3 } }>
              <Typography variant="subtitle2" sx={ { mb: 2, fontWeight: 600 } }>
                아이콘 이름
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={ iconName }
                onChange={ (e) => setIconName(e.target.value) }
                placeholder="아이콘 이름 입력"
                sx={ { mb: 3 } }
                slotProps={ {
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <MaterialSymbol name="search" size={ 20 } variant={ variant } />
                      </InputAdornment>
                    ),
                  },
                } }
              />

              <Typography variant="subtitle2" sx={ { mb: 2, fontWeight: 600 } }>
                Style
              </Typography>
              <ToggleButtonGroup
                value={ variant }
                exclusive
                onChange={ (e, v) => v && setVariant(v) }
                size="small"
                sx={ { mb: 3 } }
              >
                <ToggleButton value="outlined">
                  <MaterialSymbol name="category" size={ 20 } variant="outlined" />
                  <Typography variant="caption" sx={ { ml: 1 } }>Outlined</Typography>
                </ToggleButton>
                <ToggleButton value="rounded">
                  <MaterialSymbol name="category" size={ 20 } variant="rounded" />
                  <Typography variant="caption" sx={ { ml: 1 } }>Rounded</Typography>
                </ToggleButton>
                <ToggleButton value="sharp">
                  <MaterialSymbol name="category" size={ 20 } variant="sharp" />
                  <Typography variant="caption" sx={ { ml: 1 } }>Sharp</Typography>
                </ToggleButton>
              </ToggleButtonGroup>

              <Box sx={ { mb: 3 } }>
                <FormControlLabel
                  control={
                    <Switch
                      checked={ fill }
                      onChange={ (e) => setFill(e.target.checked) }
                    />
                  }
                  label={
                    <Typography variant="subtitle2" sx={ { fontWeight: 600 } }>
                      Fill
                    </Typography>
                  }
                />
              </Box>

              <Typography variant="subtitle2" sx={ { mb: 2, fontWeight: 600 } }>
                Size: { size }px
              </Typography>
              <Slider
                value={ size }
                onChange={ (e, v) => setSize(v) }
                min={ 16 }
                max={ 96 }
                sx={ { mb: 3 } }
              />

              <Typography variant="subtitle2" sx={ { mb: 2, fontWeight: 600 } }>
                Weight: { weight }
              </Typography>
              <Slider
                value={ weight }
                onChange={ (e, v) => setWeight(v) }
                min={ 100 }
                max={ 700 }
                step={ 100 }
                marks
                sx={ { mb: 3 } }
              />

              <Typography variant="subtitle2" sx={ { mb: 2, fontWeight: 600 } }>
                Grade: { grade }
              </Typography>
              <Slider
                value={ grade }
                onChange={ (e, v) => setGrade(v) }
                min={ -50 }
                max={ 200 }
                sx={ { mb: 3 } }
              />

              <Typography variant="subtitle2" sx={ { mb: 2, fontWeight: 600 } }>
                Optical Size: { opticalSize }
              </Typography>
              <Slider
                value={ opticalSize }
                onChange={ (e, v) => setOpticalSize(v) }
                min={ 20 }
                max={ 48 }
              />
            </Paper>
          </Grid>
        </Grid>

        {/* 코드 미리보기 */}
        <Paper sx={ { p: 3, mt: 4, backgroundColor: '#263238' } }>
          <Typography variant="subtitle2" sx={ { color: '#80cbc4', mb: 2 } }>
            코드 예시
          </Typography>
          <Box
            component="pre"
            sx={ {
              color: '#aed581',
              fontSize: '12px',
              overflow: 'auto',
              m: 0,
            } }
          >
{ `<span
  className="material-symbols-${variant}"
  style={{
    fontSize: ${size},
    fontVariationSettings: "'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}"
  }}
>
  ${iconName}
</span>` }
          </Box>
        </Paper>
      </Box>
    );
  },
};

/** Fill 비교 */
export const FillComparison = {
  render: () => {
    const icons = ['favorite', 'star', 'bookmark', 'check_circle', 'thumb_up', 'visibility'];

    return (
      <Box sx={ { maxWidth: 800 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          Fill 비교
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
          Fill 값을 0에서 1로 변경하면 아이콘이 채워집니다. 토글 상태 표현에 유용합니다.
        </Typography>

        <Grid container spacing={ 3 }>
          { icons.map((icon) => (
            <Grid size={ { xs: 6, sm: 4, md: 2 } } key={ icon }>
              <Paper sx={ { p: 2, textAlign: 'center' } }>
                <Box sx={ { display: 'flex', justifyContent: 'center', gap: 2, mb: 1 } }>
                  <MaterialSymbol name={ icon } size={ 32 } fill={ 0 } />
                  <MaterialSymbol name={ icon } size={ 32 } fill={ 1 } />
                </Box>
                <Typography variant="caption" color="text.secondary">
                  { icon }
                </Typography>
              </Paper>
            </Grid>
          )) }
        </Grid>

        <Paper sx={ { p: 3, mt: 4, backgroundColor: '#e3f2fd' } }>
          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
            사용 예시
          </Typography>
          <Typography variant="body2">
            • 좋아요 버튼: Fill 0 (기본) → Fill 1 (좋아요 누름)<br />
            • 북마크: Fill 0 (저장 안 됨) → Fill 1 (저장됨)<br />
            • 별점: Fill로 선택/미선택 상태 표현
          </Typography>
        </Paper>
      </Box>
    );
  },
};

/** Weight 비교 */
export const WeightComparison = {
  render: () => {
    const weights = [100, 200, 300, 400, 500, 600, 700];
    const icon = 'settings';

    return (
      <Box sx={ { maxWidth: 800 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          Weight 비교
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
          Weight는 100(Thin)에서 700(Bold)까지 조절할 수 있습니다.
        </Typography>

        <Paper sx={ { p: 4 } }>
          <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 2 } }>
            { weights.map((weight) => (
              <Box key={ weight } sx={ { textAlign: 'center' } }>
                <MaterialSymbol name={ icon } size={ 48 } weight={ weight } />
                <Typography variant="caption" display="block" sx={ { mt: 1 } }>
                  { weight }
                </Typography>
              </Box>
            )) }
          </Box>
        </Paper>

        <Grid container spacing={ 3 } sx={ { mt: 3 } }>
          <Grid size={ { xs: 12, md: 4 } }>
            <Paper sx={ { p: 3, textAlign: 'center' } }>
              <MaterialSymbol name="home" size={ 48 } weight={ 100 } />
              <Typography variant="subtitle2" sx={ { mt: 2 } }>Thin (100)</Typography>
              <Typography variant="caption" color="text.secondary">
                섬세한 UI, 밝은 배경
              </Typography>
            </Paper>
          </Grid>
          <Grid size={ { xs: 12, md: 4 } }>
            <Paper sx={ { p: 3, textAlign: 'center' } }>
              <MaterialSymbol name="home" size={ 48 } weight={ 400 } />
              <Typography variant="subtitle2" sx={ { mt: 2 } }>Regular (400)</Typography>
              <Typography variant="caption" color="text.secondary">
                기본값, 대부분의 상황
              </Typography>
            </Paper>
          </Grid>
          <Grid size={ { xs: 12, md: 4 } }>
            <Paper sx={ { p: 3, textAlign: 'center' } }>
              <MaterialSymbol name="home" size={ 48 } weight={ 700 } />
              <Typography variant="subtitle2" sx={ { mt: 2 } }>Bold (700)</Typography>
              <Typography variant="caption" color="text.secondary">
                강조, 어두운 배경
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  },
};

/** 인기 아이콘 */
export const PopularIcons = {
  render: () => {
    const [selectedIcon, setSelectedIcon] = useState(null);

    return (
      <Box sx={ { maxWidth: 1000 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          인기 아이콘
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
          자주 사용되는 아이콘 모음입니다. 클릭하면 아이콘 이름을 복사합니다.
        </Typography>

        <Paper sx={ { p: 3 } }>
          <Grid container spacing={ 1 }>
            { popularIcons.map((icon) => (
              <Grid size={ { xs: 3, sm: 2, md: 1.5 } } key={ icon }>
                <Box
                  onClick={ () => {
                    navigator.clipboard.writeText(icon);
                    setSelectedIcon(icon);
                    setTimeout(() => setSelectedIcon(null), 1500);
                  } }
                  sx={ {
                    p: 2,
                    textAlign: 'center',
                    cursor: 'pointer',
                    borderRadius: 1,
                    transition: 'all 0.2s',
                    backgroundColor: selectedIcon === icon ? 'primary.main' : 'transparent',
                    color: selectedIcon === icon ? 'white' : 'inherit',
                    '&:hover': {
                      backgroundColor: selectedIcon === icon ? 'primary.main' : 'action.hover',
                    },
                  } }
                >
                  <MaterialSymbol
                    name={ icon }
                    size={ 24 }
                    color={ selectedIcon === icon ? 'white' : 'inherit' }
                  />
                  <Typography
                    variant="caption"
                    display="block"
                    sx={ {
                      mt: 0.5,
                      fontSize: '10px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    } }
                  >
                    { selectedIcon === icon ? 'Copied!' : icon }
                  </Typography>
                </Box>
              </Grid>
            )) }
          </Grid>
        </Paper>

        <Box sx={ { mt: 3, p: 2, backgroundColor: '#fff3e0', borderRadius: 1 } }>
          <Typography variant="body2">
            전체 아이콘 목록은{' '}
            <a
              href="https://fonts.google.com/icons"
              target="_blank"
              rel="noopener noreferrer"
              style={ { color: '#1976d2' } }
            >
              Google Fonts Icons
            </a>
            에서 확인하세요.
          </Typography>
        </Box>
      </Box>
    );
  },
};

/** 카테고리별 아이콘 */
export const IconsByCategory = {
  render: () => (
    <Box sx={ { maxWidth: 1000 } }>
      <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
        카테고리별 아이콘
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
        용도별로 분류된 아이콘입니다.
      </Typography>

      <Stack spacing={ 4 }>
        { Object.entries(iconCategories).map(([category, icons]) => (
          <Box key={ category }>
            <Typography variant="h6" sx={ { mb: 2, fontWeight: 600 } }>
              { category }
            </Typography>
            <Paper sx={ { p: 2 } }>
              <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 1 } }>
                { icons.map((icon) => (
                  <Chip
                    key={ icon }
                    icon={ <MaterialSymbol name={ icon } size={ 18 } /> }
                    label={ icon }
                    variant="outlined"
                    sx={ { fontFamily: 'monospace', fontSize: '12px' } }
                  />
                )) }
              </Box>
            </Paper>
          </Box>
        )) }
      </Stack>
    </Box>
  ),
};

/** 크기 비교 */
export const SizeComparison = {
  render: () => {
    const sizes = [16, 20, 24, 32, 40, 48, 64];
    const icon = 'favorite';

    return (
      <Box sx={ { maxWidth: 800 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          크기 비교
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
          다양한 크기의 아이콘을 비교합니다.
        </Typography>

        <Paper sx={ { p: 4 } }>
          <Box sx={ { display: 'flex', alignItems: 'flex-end', gap: 3, flexWrap: 'wrap' } }>
            { sizes.map((size) => (
              <Box key={ size } sx={ { textAlign: 'center' } }>
                <MaterialSymbol name={ icon } size={ size } fill={ 1 } color="#e91e63" />
                <Typography variant="caption" display="block" sx={ { mt: 1 } }>
                  { size }px
                </Typography>
              </Box>
            )) }
          </Box>
        </Paper>

        <Divider sx={ { my: 4 } } />

        <Typography variant="h6" sx={ { mb: 2 } }>
          사용 가이드
        </Typography>
        <Grid container spacing={ 2 }>
          <Grid size={ { xs: 12, md: 4 } }>
            <Paper sx={ { p: 2 } }>
              <Box sx={ { display: 'flex', alignItems: 'center', gap: 2, mb: 1 } }>
                <MaterialSymbol name="info" size={ 16 } />
                <Typography variant="subtitle2">16-20px</Typography>
              </Box>
              <Typography variant="caption" color="text.secondary">
                인라인 텍스트, 작은 버튼, 태그
              </Typography>
            </Paper>
          </Grid>
          <Grid size={ { xs: 12, md: 4 } }>
            <Paper sx={ { p: 2 } }>
              <Box sx={ { display: 'flex', alignItems: 'center', gap: 2, mb: 1 } }>
                <MaterialSymbol name="info" size={ 24 } />
                <Typography variant="subtitle2">24px (기본)</Typography>
              </Box>
              <Typography variant="caption" color="text.secondary">
                버튼, 리스트 아이템, 네비게이션
              </Typography>
            </Paper>
          </Grid>
          <Grid size={ { xs: 12, md: 4 } }>
            <Paper sx={ { p: 2 } }>
              <Box sx={ { display: 'flex', alignItems: 'center', gap: 2, mb: 1 } }>
                <MaterialSymbol name="info" size={ 48 } />
                <Typography variant="subtitle2">48px+</Typography>
              </Box>
              <Typography variant="caption" color="text.secondary">
                빈 상태, 히어로 섹션, 강조
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  },
};

/** 색상 적용 */
export const IconColors = {
  render: () => {
    const colors = [
      { name: 'Primary', color: 'primary.main', value: '#0000FF' },
      { name: 'Secondary', color: 'secondary.main', value: '#263238' },
      { name: 'Error', color: 'error.main', value: '#d32f2f' },
      { name: 'Warning', color: 'warning.main', value: '#ed6c02' },
      { name: 'Success', color: 'success.main', value: '#2e7d32' },
      { name: 'Info', color: 'info.main', value: '#0288d1' },
    ];

    return (
      <Box sx={ { maxWidth: 800 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          색상 적용
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
          테마 색상을 아이콘에 적용할 수 있습니다.
        </Typography>

        <Grid container spacing={ 2 }>
          { colors.map((c) => (
            <Grid size={ { xs: 6, sm: 4, md: 2 } } key={ c.name }>
              <Paper sx={ { p: 3, textAlign: 'center' } }>
                <MaterialSymbol name="favorite" size={ 40 } fill={ 1 } color={ c.value } />
                <Typography variant="subtitle2" sx={ { mt: 2 } }>
                  { c.name }
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={ { fontFamily: 'monospace' } }>
                  { c.color }
                </Typography>
              </Paper>
            </Grid>
          )) }
        </Grid>

        <Paper sx={ { p: 3, mt: 4, backgroundColor: '#263238' } }>
          <Typography variant="subtitle2" sx={ { color: '#80cbc4', mb: 2 } }>
            사용 예시
          </Typography>
          <Box
            component="pre"
            sx={ {
              color: '#aed581',
              fontSize: '12px',
              overflow: 'auto',
              m: 0,
            } }
          >
{ `// sx prop 사용
<Box sx={{ color: 'primary.main' }}>
  <span className="material-symbols-outlined">favorite</span>
</Box>

// inline style 사용
<span
  className="material-symbols-outlined"
  style={{ color: '#0000FF' }}
>
  favorite
</span>` }
          </Box>
        </Paper>
      </Box>
    );
  },
};

/** 사용 예시 */
export const UsageExamples = {
  render: () => (
    <Box sx={ { maxWidth: 800 } }>
      <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
        사용 예시
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
        실제 UI에서 아이콘을 활용하는 방법입니다.
      </Typography>

      <Stack spacing={ 4 }>
        {/* 버튼과 함께 */}
        <Box>
          <Typography variant="h6" sx={ { mb: 2 } }>버튼과 함께</Typography>
          <Paper sx={ { p: 3 } }>
            <Stack direction="row" spacing={ 2 } flexWrap="wrap" useFlexGap>
              <Box
                component="button"
                sx={ {
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  border: 'none',
                  borderRadius: 0,
                  backgroundColor: 'primary.main',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                } }
              >
                <MaterialSymbol name="add" size={ 20 } color="white" />
                새로 만들기
              </Box>
              <Box
                component="button"
                sx={ {
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 0,
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  fontSize: '14px',
                } }
              >
                <MaterialSymbol name="edit" size={ 20 } />
                수정
              </Box>
              <Box
                component="button"
                sx={ {
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  border: '1px solid',
                  borderColor: 'error.main',
                  borderRadius: 0,
                  backgroundColor: 'transparent',
                  color: 'error.main',
                  cursor: 'pointer',
                  fontSize: '14px',
                } }
              >
                <MaterialSymbol name="delete" size={ 20 } color="#d32f2f" />
                삭제
              </Box>
            </Stack>
          </Paper>
        </Box>

        {/* 리스트 아이템 */}
        <Box>
          <Typography variant="h6" sx={ { mb: 2 } }>리스트 아이템</Typography>
          <Paper>
            { ['home', 'person', 'settings', 'help'].map((icon, index) => (
              <Box
                key={ icon }
                sx={ {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 2,
                  borderBottom: index < 3 ? '1px solid' : 'none',
                  borderColor: 'divider',
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: 'action.hover' },
                } }
              >
                <MaterialSymbol name={ icon } size={ 24 } />
                <Typography sx={ { textTransform: 'capitalize' } }>
                  { icon === 'person' ? '프로필' : icon === 'home' ? '홈' : icon === 'settings' ? '설정' : '도움말' }
                </Typography>
              </Box>
            )) }
          </Paper>
        </Box>

        {/* 상태 표시 */}
        <Box>
          <Typography variant="h6" sx={ { mb: 2 } }>상태 표시</Typography>
          <Paper sx={ { p: 3 } }>
            <Stack direction="row" spacing={ 3 } flexWrap="wrap" useFlexGap>
              <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                <MaterialSymbol name="check_circle" size={ 20 } fill={ 1 } color="#2e7d32" />
                <Typography variant="body2">완료</Typography>
              </Box>
              <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                <MaterialSymbol name="schedule" size={ 20 } color="#ed6c02" />
                <Typography variant="body2">대기중</Typography>
              </Box>
              <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                <MaterialSymbol name="error" size={ 20 } fill={ 1 } color="#d32f2f" />
                <Typography variant="body2">오류</Typography>
              </Box>
              <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                <MaterialSymbol name="info" size={ 20 } fill={ 1 } color="#0288d1" />
                <Typography variant="body2">정보</Typography>
              </Box>
            </Stack>
          </Paper>
        </Box>

        {/* 토글 상태 */}
        <Box>
          <Typography variant="h6" sx={ { mb: 2 } }>토글 상태 (Fill 활용)</Typography>
          <Paper sx={ { p: 3 } }>
            <Stack direction="row" spacing={ 4 }>
              <Box sx={ { textAlign: 'center' } }>
                <Box sx={ { display: 'flex', gap: 1 } }>
                  <MaterialSymbol name="favorite" size={ 32 } fill={ 0 } />
                  <MaterialSymbol name="favorite" size={ 32 } fill={ 1 } color="#e91e63" />
                </Box>
                <Typography variant="caption">좋아요</Typography>
              </Box>
              <Box sx={ { textAlign: 'center' } }>
                <Box sx={ { display: 'flex', gap: 1 } }>
                  <MaterialSymbol name="bookmark" size={ 32 } fill={ 0 } />
                  <MaterialSymbol name="bookmark" size={ 32 } fill={ 1 } color="#1976d2" />
                </Box>
                <Typography variant="caption">북마크</Typography>
              </Box>
              <Box sx={ { textAlign: 'center' } }>
                <Box sx={ { display: 'flex', gap: 1 } }>
                  <MaterialSymbol name="star" size={ 32 } fill={ 0 } />
                  <MaterialSymbol name="star" size={ 32 } fill={ 1 } color="#ffc107" />
                </Box>
                <Typography variant="caption">즐겨찾기</Typography>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </Box>
  ),
};
