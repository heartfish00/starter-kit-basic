import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

export default {
  title: 'Overview/Introduction',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Starter Kit Basic

React + MUI + Storybook 환경을 **디자이너에게 마치 디자인 툴처럼** 사용할 수 있도록 도와주는 개발 환경입니다.

### 핵심 목적

| 목적 | 설명 |
|------|------|
| **UI 컴포넌트 체계적 관리** | 재사용 가능한 컴포넌트를 Storybook으로 문서화 |
| **디자인 톤 일관성 유지** | 색상, 타이포그래피, 스타일을 중앙에서 관리 |
| **로직과 UI 분리** | 제품의 비즈니스 로직과 UI 디자인 작업을 명확히 분리 |

### 문서 구조

| 섹션 | 설명 |
|------|------|
| **Overview** | 프로젝트 소개 및 가이드 |
| **Style** | 색상, 타이포그래피, 아이콘 등 디자인 토큰 |
| **Component** | 재사용 가능한 UI 컴포넌트 |
| **Template** | 컴포넌트 조합 템플릿 |
| **Page** | 전체 페이지 레이아웃 |
        `,
      },
    },
  },
};

const FeatureCard = ({ title, description, icon }) => (
  <Paper sx={ { p: 3, height: '100%' } }>
    <Typography variant="h6" gutterBottom>
      { icon } { title }
    </Typography>
    <Typography variant="body2" color="text.secondary">
      { description }
    </Typography>
  </Paper>
);

export const Default = {
  render: () => (
    <Box sx={ { maxWidth: 1000 } }>
      <Typography variant="h3" gutterBottom sx={ { fontWeight: 700 } }>
        Starter Kit Basic
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={ { mb: 4 } }>
        디자이너를 위한 React + MUI + Storybook 환경
      </Typography>

      <Box sx={ { mb: 4 } }>
        <Chip label="React 19.x" sx={ { mr: 1 } } />
        <Chip label="MUI 7.x" sx={ { mr: 1 } } />
        <Chip label="Vite 7.x" sx={ { mr: 1 } } />
        <Chip label="Storybook 10.x" />
      </Box>

      <Divider sx={ { my: 4 } } />

      <Typography variant="h5" gutterBottom sx={ { mb: 3 } }>
        핵심 목적
      </Typography>

      <Grid container spacing={ 3 } sx={ { mb: 4 } }>
        <Grid size={ { xs: 12, md: 4 } }>
          <FeatureCard
            icon="📦"
            title="UI 컴포넌트 관리"
            description="재사용 가능한 컴포넌트를 Storybook으로 문서화하고 체계적으로 관리합니다."
          />
        </Grid>
        <Grid size={ { xs: 12, md: 4 } }>
          <FeatureCard
            icon="🎨"
            title="디자인 일관성"
            description="색상, 타이포그래피, 스타일을 테마 파일에서 중앙 관리하여 일관성을 유지합니다."
          />
        </Grid>
        <Grid size={ { xs: 12, md: 4 } }>
          <FeatureCard
            icon="🔀"
            title="로직과 UI 분리"
            description="비즈니스 로직과 UI 디자인 작업을 명확히 분리하여 협업 효율을 높입니다."
          />
        </Grid>
      </Grid>

      <Divider sx={ { my: 4 } } />

      <Typography variant="h5" gutterBottom sx={ { mb: 3 } }>
        대상 사용자
      </Typography>

      <Grid container spacing={ 3 } sx={ { mb: 4 } }>
        <Grid size={ { xs: 12, md: 6 } }>
          <Paper sx={ { p: 3, backgroundColor: 'primary.main', color: 'white' } }>
            <Typography variant="h6" gutterBottom>
              🎨 디자이너
            </Typography>
            <Typography variant="body2">
              Storybook을 통해 컴포넌트를 시각적으로 탐색하고 테스트할 수 있습니다.
              코드 없이도 Props를 조절하며 다양한 상태를 확인할 수 있습니다.
            </Typography>
          </Paper>
        </Grid>
        <Grid size={ { xs: 12, md: 6 } }>
          <Paper sx={ { p: 3, backgroundColor: 'secondary.main', color: 'white' } }>
            <Typography variant="h6" gutterBottom>
              💻 개발자
            </Typography>
            <Typography variant="body2">
              체계적인 컴포넌트 구조와 스타일 가이드를 활용하여 빠르고 일관된 개발이 가능합니다.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={ { my: 4 } } />

      <Typography variant="h5" gutterBottom sx={ { mb: 3 } }>
        작업 분리 원칙
      </Typography>

      <Grid container spacing={ 3 }>
        <Grid size={ { xs: 12, md: 6 } }>
          <Paper sx={ { p: 3 } }>
            <Typography variant="subtitle1" gutterBottom sx={ { fontWeight: 600 } }>
              UI 레이어 (Storybook)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • 순수 프레젠테이션 컴포넌트<br />
              • 로직 없음, 시각적 요소만<br />
              • Props로 상태 제어<br />
              • 디자이너가 직접 테스트 가능
            </Typography>
          </Paper>
        </Grid>
        <Grid size={ { xs: 12, md: 6 } }>
          <Paper sx={ { p: 3 } }>
            <Typography variant="subtitle1" gutterBottom sx={ { fontWeight: 600 } }>
              로직 레이어 (App)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • 비즈니스 로직<br />
              • 상태 관리 (State)<br />
              • API 호출<br />
              • 이벤트 핸들링
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  ),
};
