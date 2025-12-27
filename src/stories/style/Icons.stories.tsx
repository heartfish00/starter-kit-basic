import React from 'react';
import type { Meta } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

/**
 * Icons 스토리
 *
 * 디자인 시스템에서 사용하는 아이콘을 시각적으로 문서화합니다.
 * Google Material Symbols 폰트 아이콘을 사용합니다.
 */

/**
 * MaterialIcon 컴포넌트
 *
 * Props:
 * @param {string} name - Material Symbols 아이콘 이름 [Required]
 * @param {number} size - 아이콘 크기 (px) [Optional, 기본값: 24]
 * @param {string} color - 아이콘 색상 [Optional]
 * @param {boolean} filled - 채워진 스타일 사용 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <MaterialIcon name="home" size={24} />
 */
function MaterialIcon({
  name,
  size = 24,
  color,
  filled = false,
}: {
  name: string;
  size?: number;
  color?: string;
  filled?: boolean;
}) {
  return (
    <span
      className="material-symbols-outlined"
      style={{
        fontSize: size,
        color: color,
        fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
      }}
    >
      {name}
    </span>
  );
}

/**
 * IconGrid 컴포넌트
 *
 * Props:
 * @param {string} title - 아이콘 그룹 제목 [Required]
 * @param {Array} icons - 아이콘 이름 배열 [Required]
 *
 * Example usage:
 * <IconGrid title="Navigation" icons={['home', 'menu', 'search']} />
 */
function IconGrid({
  title,
  icons,
}: {
  title: string;
  icons: string[];
}) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Grid container spacing={1}>
        {icons.map((icon) => (
          <Grid size={{ xs: 4, sm: 3, md: 2 }} key={icon}>
            <Tooltip title={icon} arrow>
              <Paper
                sx={{
                  p: 2,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: 'action.hover',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <MaterialIcon name={icon} size={24} />
                <Typography
                  variant="caption"
                  display="block"
                  sx={{
                    mt: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {icon}
                </Typography>
              </Paper>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const meta: Meta = {
  title: 'Style/Icons',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Icons (아이콘)

Google Material Symbols 폰트 아이콘을 사용합니다.
일관된 시각적 언어를 위해 Outlined 스타일을 기본으로 사용합니다.

### 아이콘 사용 방법

\`\`\`jsx
// Material Symbols 클래스 사용
<span className="material-symbols-outlined">home</span>

// 크기 조절
<span className="material-symbols-outlined" style={{ fontSize: 32 }}>home</span>

// 채워진 스타일
<span
  className="material-symbols-outlined"
  style={{ fontVariationSettings: "'FILL' 1" }}
>
  favorite
</span>
\`\`\`

### 아이콘 카테고리

| 카테고리 | 용도 | 예시 |
|----------|------|------|
| **Navigation** | 탐색, 메뉴 | home, menu, arrow_back |
| **Action** | 동작, 액션 | add, edit, delete, save |
| **Content** | 콘텐츠 표시 | inbox, mail, notifications |
| **Communication** | 커뮤니케이션 | chat, message, share |
| **Social** | 소셜 인터랙션 | favorite, thumb_up, person |
| **Toggle** | 상태 토글 | check_box, toggle_on, visibility |

### 참고 링크

[Google Material Symbols](https://fonts.google.com/icons)에서 전체 아이콘을 검색할 수 있습니다.
        `,
      },
    },
  },
};

export default meta;

/** 전체 아이콘 모음 */
export const Default = {
  render: () => (
    <Box sx={{ maxWidth: 900 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Material Symbols Icons
      </Typography>

      <IconGrid
        title="Navigation"
        icons={[
          'home',
          'menu',
          'arrow_back',
          'arrow_forward',
          'expand_more',
          'expand_less',
          'chevron_left',
          'chevron_right',
          'close',
          'search',
          'refresh',
          'more_vert',
        ]}
      />

      <IconGrid
        title="Actions"
        icons={[
          'add',
          'edit',
          'delete',
          'save',
          'done',
          'clear',
          'settings',
          'download',
          'upload',
          'print',
          'copy_all',
          'content_paste',
        ]}
      />

      <IconGrid
        title="Content"
        icons={[
          'inbox',
          'mail',
          'drafts',
          'send',
          'attach_file',
          'link',
          'folder',
          'description',
          'image',
          'videocam',
          'mic',
          'article',
        ]}
      />

      <IconGrid
        title="Communication"
        icons={[
          'chat',
          'message',
          'forum',
          'share',
          'call',
          'phone',
          'email',
          'notifications',
          'campaign',
          'feedback',
          'help',
          'info',
        ]}
      />

      <IconGrid
        title="Social"
        icons={[
          'person',
          'group',
          'person_add',
          'people',
          'public',
          'favorite',
          'thumb_up',
          'thumb_down',
          'star',
          'mood',
          'sentiment_satisfied',
          'emoji_emotions',
        ]}
      />

      <IconGrid
        title="Toggle & States"
        icons={[
          'check_box',
          'check_box_outline_blank',
          'radio_button_checked',
          'radio_button_unchecked',
          'toggle_on',
          'toggle_off',
          'visibility',
          'visibility_off',
          'lock',
          'lock_open',
          'bookmark',
          'bookmark_border',
        ]}
      />
    </Box>
  ),
};

/** 아이콘 크기 */
export const Sizes = {
  render: () => (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Icon Sizes
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        아이콘은 다양한 크기로 사용할 수 있습니다. 용도에 맞는 적절한 크기를 선택하세요.
      </Typography>

      <Stack spacing={3}>
        {[
          { size: 16, label: '16px - Extra Small', usage: '인라인 텍스트, 작은 버튼' },
          { size: 20, label: '20px - Small', usage: '목록 아이템, 입력 필드' },
          { size: 24, label: '24px - Medium (Default)', usage: '툴바, 네비게이션' },
          { size: 32, label: '32px - Large', usage: '카드 아이콘, 강조 표시' },
          { size: 48, label: '48px - Extra Large', usage: '빈 상태, 온보딩' },
        ].map((item) => (
          <Paper key={item.size} sx={{ p: 2 }}>
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ minWidth: 60, textAlign: 'center' }}>
                <MaterialIcon name="favorite" size={item.size} />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {item.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.usage}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  ),
};

/** 아이콘 스타일 */
export const Styles = {
  render: () => (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Icon Styles
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Material Symbols는 Outlined(기본)와 Filled 스타일을 지원합니다.
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 6 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="overline" color="text.secondary" display="block" gutterBottom>
              Outlined (Default)
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
              <MaterialIcon name="favorite" size={32} filled={false} />
              <MaterialIcon name="home" size={32} filled={false} />
              <MaterialIcon name="settings" size={32} filled={false} />
            </Stack>
          </Paper>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="overline" color="text.secondary" display="block" gutterBottom>
              Filled
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
              <MaterialIcon name="favorite" size={32} filled />
              <MaterialIcon name="home" size={32} filled />
              <MaterialIcon name="settings" size={32} filled />
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
        Outlined vs Filled 사용 가이드
      </Typography>

      <Stack spacing={2}>
        <Paper sx={{ p: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <MaterialIcon name="favorite" size={24} filled={false} />
            <Typography variant="body2">
              <strong>Outlined</strong> - 기본 상태, 비선택 상태에 사용
            </Typography>
          </Stack>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <MaterialIcon name="favorite" size={24} filled />
            <Typography variant="body2">
              <strong>Filled</strong> - 활성 상태, 선택된 상태에 사용
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  ),
};

/** 아이콘 색상 */
export const IconColors = {
  render: () => (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Icon Colors
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        아이콘에 테마 색상을 적용할 수 있습니다.
      </Typography>

      <Stack spacing={2}>
        <Paper sx={{ p: 2 }}>
          <Stack direction="row" spacing={3} alignItems="center">
            <MaterialIcon name="home" size={24} color="rgba(0, 0, 0, 0.87)" />
            <Typography variant="body2">Default (text.primary)</Typography>
          </Stack>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Stack direction="row" spacing={3} alignItems="center">
            <MaterialIcon name="home" size={24} color="rgba(0, 0, 0, 0.54)" />
            <Typography variant="body2">action.active (기본 액션 아이콘)</Typography>
          </Stack>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Stack direction="row" spacing={3} alignItems="center">
            <MaterialIcon name="home" size={24} color="#0000FF" />
            <Typography variant="body2">Primary</Typography>
          </Stack>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Stack direction="row" spacing={3} alignItems="center">
            <MaterialIcon name="check_circle" size={24} color="#2e7d32" />
            <Typography variant="body2">Success</Typography>
          </Stack>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Stack direction="row" spacing={3} alignItems="center">
            <MaterialIcon name="error" size={24} color="#d32f2f" />
            <Typography variant="body2">Error</Typography>
          </Stack>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Stack direction="row" spacing={3} alignItems="center">
            <MaterialIcon name="warning" size={24} color="#ed6c02" />
            <Typography variant="body2">Warning</Typography>
          </Stack>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Stack direction="row" spacing={3} alignItems="center">
            <MaterialIcon name="info" size={24} color="#0288d1" />
            <Typography variant="body2">Info</Typography>
          </Stack>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <Stack direction="row" spacing={3} alignItems="center">
            <MaterialIcon name="block" size={24} color="rgba(0, 0, 0, 0.26)" />
            <Typography variant="body2">Disabled</Typography>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  ),
};

/** 아이콘 버튼 */
export const IconButtons = {
  render: () => (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Icon Buttons
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        MUI IconButton 컴포넌트와 함께 사용하는 예시입니다.
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
          기본 IconButton
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <IconButton>
            <MaterialIcon name="favorite" />
          </IconButton>
          <IconButton>
            <MaterialIcon name="share" />
          </IconButton>
          <IconButton>
            <MaterialIcon name="bookmark" />
          </IconButton>
          <IconButton>
            <MaterialIcon name="more_vert" />
          </IconButton>
        </Stack>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
          색상이 있는 IconButton
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <IconButton color="primary">
            <MaterialIcon name="add" color="#0000FF" />
          </IconButton>
          <IconButton color="error">
            <MaterialIcon name="delete" color="#d32f2f" />
          </IconButton>
          <IconButton color="success">
            <MaterialIcon name="check" color="#2e7d32" />
          </IconButton>
          <IconButton disabled>
            <MaterialIcon name="block" color="rgba(0, 0, 0, 0.26)" />
          </IconButton>
        </Stack>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
          크기별 IconButton
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
          <IconButton size="small">
            <MaterialIcon name="settings" size={20} />
          </IconButton>
          <IconButton size="medium">
            <MaterialIcon name="settings" size={24} />
          </IconButton>
          <IconButton size="large">
            <MaterialIcon name="settings" size={28} />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <Typography variant="caption" sx={{ minWidth: 40, textAlign: 'center' }}>
            small
          </Typography>
          <Typography variant="caption" sx={{ minWidth: 48, textAlign: 'center' }}>
            medium
          </Typography>
          <Typography variant="caption" sx={{ minWidth: 56, textAlign: 'center' }}>
            large
          </Typography>
        </Stack>
      </Paper>
    </Box>
  ),
};

/** 사용 예시 */
export const UsageExamples = {
  render: () => (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
        Usage Examples
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
          앱 바 네비게이션
        </Typography>
        <Paper
          elevation={2}
          sx={{
            p: 2,
            mt: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton>
              <MaterialIcon name="menu" />
            </IconButton>
            <Typography variant="h6">Title</Typography>
          </Stack>
          <Stack direction="row" spacing={0}>
            <IconButton>
              <MaterialIcon name="search" />
            </IconButton>
            <IconButton>
              <MaterialIcon name="notifications" />
            </IconButton>
            <IconButton>
              <MaterialIcon name="account_circle" />
            </IconButton>
          </Stack>
        </Paper>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
          목록 아이템
        </Typography>
        <Stack spacing={0} sx={{ mt: 2 }}>
          {[
            { icon: 'inbox', label: '받은편지함', badge: '12' },
            { icon: 'send', label: '보낸편지함' },
            { icon: 'drafts', label: '임시보관함' },
            { icon: 'delete', label: '휴지통' },
          ].map((item) => (
            <Box
              key={item.icon}
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1.5,
                gap: 2,
                '&:hover': { bgcolor: 'action.hover' },
              }}
            >
              <MaterialIcon name={item.icon} size={24} color="rgba(0, 0, 0, 0.54)" />
              <Typography variant="body2" sx={{ flex: 1 }}>
                {item.label}
              </Typography>
              {item.badge && (
                <Typography variant="caption" color="text.secondary">
                  {item.badge}
                </Typography>
              )}
            </Box>
          ))}
        </Stack>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
          상태 표시
        </Typography>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <MaterialIcon name="check_circle" size={24} color="#2e7d32" />
            <Typography variant="body2">작업이 완료되었습니다.</Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <MaterialIcon name="error" size={24} color="#d32f2f" />
            <Typography variant="body2">오류가 발생했습니다.</Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <MaterialIcon name="warning" size={24} color="#ed6c02" />
            <Typography variant="body2">주의가 필요합니다.</Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <MaterialIcon name="info" size={24} color="#0288d1" />
            <Typography variant="body2">참고 정보입니다.</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  ),
};
