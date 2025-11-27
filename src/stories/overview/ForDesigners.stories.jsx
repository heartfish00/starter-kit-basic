import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

export default {
  title: 'Overview/For Designers',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## 디자이너를 위한 가이드

피그마를 사용해본 디자이너가 React + MUI + Storybook 환경을 이해하기 위한 가이드입니다.

이 문서에서는 피그마의 익숙한 개념과 코드의 개념을 1:1로 매핑하여 설명합니다.
        `,
      },
    },
  },
};

/** 섹션 타이틀 컴포넌트 */
const SectionTitle = ({ children, subtitle }) => (
  <Box sx={ { mb: 4 } }>
    <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
      { children }
    </Typography>
    { subtitle && (
      <Typography variant="body1" color="text.secondary">
        { subtitle }
      </Typography>
    ) }
  </Box>
);

/** 개념 비교 카드 */
const ConceptCard = ({ figma, code, description, color = 'primary' }) => (
  <Paper sx={ { p: 3, height: '100%' } }>
    <Box sx={ { display: 'flex', gap: 2, mb: 2, alignItems: 'center' } }>
      <Chip
        label={ `피그마: ${figma}` }
        size="small"
        sx={ { backgroundColor: '#1e1e1e', color: 'white' } }
      />
      <Typography variant="body2" color="text.secondary">=</Typography>
      <Chip
        label={ `코드: ${code}` }
        size="small"
        color={ color }
      />
    </Box>
    <Typography variant="body2" color="text.secondary">
      { description }
    </Typography>
  </Paper>
);

/** 다이어그램 박스 */
const DiagramBox = ({ children, label, color = '#e3f2fd', borderColor = '#1976d2' }) => (
  <Paper
    sx={ {
      p: 2,
      backgroundColor: color,
      border: `2px solid ${borderColor}`,
      textAlign: 'center',
    } }
  >
    <Typography variant="subtitle2" sx={ { fontWeight: 600 } }>
      { label }
    </Typography>
    { children }
  </Paper>
);

/** 0. Overview - React와 Storybook의 관계 */
export const Overview = {
  name: '0. Overview',
  render: () => (
    <Box sx={ { maxWidth: 1200 } }>
      <SectionTitle subtitle="React.js와 Storybook이 무엇이고, 왜 함께 사용하는지 알아봅니다.">
        React.js와 Storybook의 관계
      </SectionTitle>

      {/* 핵심 비유 */}
      <Paper sx={ { p: 4, mb: 4, backgroundColor: '#e3f2fd' } }>
        <Typography variant="h6" sx={ { mb: 2, fontWeight: 600 } }>
          💡 피그마로 비유하면...
        </Typography>
        <Grid container spacing={ 3 } alignItems="center">
          <Grid size={ { xs: 12, md: 5 } }>
            <Paper sx={ { p: 3, backgroundColor: '#1e1e1e', color: 'white', textAlign: 'center' } }>
              <Typography variant="h6">피그마</Typography>
              <Typography variant="body2" sx={ { opacity: 0.8, mt: 1 } }>
                디자인 파일 + 컴포넌트 문서
              </Typography>
            </Paper>
          </Grid>
          <Grid size={ { xs: 12, md: 2 } } sx={ { textAlign: 'center' } }>
            <Typography variant="h4">=</Typography>
          </Grid>
          <Grid size={ { xs: 12, md: 5 } }>
            <Paper sx={ { p: 3, backgroundColor: '#1976d2', color: 'white', textAlign: 'center' } }>
              <Typography variant="h6">React + Storybook</Typography>
              <Typography variant="body2" sx={ { opacity: 0.9, mt: 1 } }>
                실제 코드 + 컴포넌트 문서
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      <Divider sx={ { my: 5 } } />

      {/* React.js란? */}
      <Typography variant="h5" sx={ { mb: 3, fontWeight: 600 } }>
        React.js란?
      </Typography>

      <Grid container spacing={ 4 } sx={ { mb: 5 } }>
        <Grid size={ { xs: 12, md: 6 } }>
          <Paper sx={ { p: 3, height: '100%' } }>
            <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 2, color: 'primary.main' } }>
              🎯 목적
            </Typography>
            <Typography variant="body2" sx={ { mb: 2 } }>
              <strong>사용자가 실제로 보고 사용하는 화면</strong>을 만드는 도구입니다.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              피그마에서 디자인한 것을 실제 웹사이트로 구현할 때 사용합니다.
              버튼을 클릭하면 반응하고, 데이터를 불러오고, 페이지를 이동하는 등
              실제 동작하는 제품을 만듭니다.
            </Typography>
          </Paper>
        </Grid>
        <Grid size={ { xs: 12, md: 6 } }>
          <Paper sx={ { p: 3, height: '100%' } }>
            <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 2, color: 'primary.main' } }>
              📦 핵심 개념: 컴포넌트
            </Typography>
            <Typography variant="body2" sx={ { mb: 2 } }>
              피그마의 컴포넌트처럼, <strong>재사용 가능한 UI 블록</strong>을 만듭니다.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Button, Card, Header 등 작은 단위를 만들고,
              이것들을 조합해서 전체 페이지를 구성합니다.
              한 번 만들어두면 여러 곳에서 재사용할 수 있습니다.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Storybook이란? */}
      <Typography variant="h5" sx={ { mb: 3, fontWeight: 600 } }>
        Storybook이란?
      </Typography>

      <Grid container spacing={ 4 } sx={ { mb: 5 } }>
        <Grid size={ { xs: 12, md: 6 } }>
          <Paper sx={ { p: 3, height: '100%' } }>
            <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 2, color: 'secondary.main' } }>
              🎯 목적
            </Typography>
            <Typography variant="body2" sx={ { mb: 2 } }>
              <strong>컴포넌트를 독립적으로 보고 테스트</strong>하는 도구입니다.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              전체 앱을 실행하지 않고도 각 컴포넌트를 개별적으로 확인할 수 있습니다.
              피그마에서 컴포넌트를 문서화하고 Variants를 정의하는 것처럼,
              Storybook에서 컴포넌트의 다양한 상태를 정의하고 문서화합니다.
            </Typography>
          </Paper>
        </Grid>
        <Grid size={ { xs: 12, md: 6 } }>
          <Paper sx={ { p: 3, height: '100%' } }>
            <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 2, color: 'secondary.main' } }>
              🔍 피그마와의 차이
            </Typography>
            <Typography variant="body2" sx={ { mb: 2 } }>
              피그마는 <strong>그림</strong>, Storybook은 <strong>실제 작동하는 코드</strong>입니다.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              피그마의 버튼은 클릭해도 아무 일도 안 일어나지만,
              Storybook의 버튼은 실제로 클릭되고, hover 효과가 나타나고,
              disabled 상태가 적용됩니다. 실제 제품과 100% 동일합니다.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* 둘의 관계 다이어그램 */}
      <Typography variant="h5" sx={ { mb: 3, fontWeight: 600 } }>
        React와 Storybook의 관계
      </Typography>

      <Paper sx={ { p: 4, backgroundColor: '#fafafa' } }>
        <Box
          component="pre"
          sx={ {
            backgroundColor: '#263238',
            color: '#80cbc4',
            p: 3,
            borderRadius: 2,
            fontSize: '13px',
            lineHeight: 1.8,
            overflow: 'auto',
            mb: 3,
          } }
        >
{ `
    ┌─────────────────────────────────────────────────────────────┐
    │                                                             │
    │                    📦 React 컴포넌트                        │
    │                    (Button, Card, Grid...)                  │
    │                                                             │
    │              한 번 만들면 두 곳에서 사용됩니다                │
    │                                                             │
    └──────────────────────┬──────────────────────────────────────┘
                           │
           ┌───────────────┴───────────────┐
           │                               │
           ▼                               ▼
┌─────────────────────────┐     ┌─────────────────────────┐
│                         │     │                         │
│   🌐 실제 서비스 (App)   │     │  📖 Storybook (문서)    │
│                         │     │                         │
│   • 사용자가 보는 화면   │     │  • 개발자/디자이너용     │
│   • 비즈니스 로직 포함   │     │  • 컴포넌트만 독립 표시  │
│   • 데이터 연동          │     │  • Props 테스트         │
│   • 페이지 라우팅        │     │  • 문서화               │
│                         │     │                         │
└─────────────────────────┘     └─────────────────────────┘

        Production                   Development
       (실제 서비스)                  (개발/디자인 협업)
` }
        </Box>

        <Grid container spacing={ 3 }>
          <Grid size={ { xs: 12, md: 6 } }>
            <Paper sx={ { p: 3, backgroundColor: '#e8f5e9' } }>
              <Typography variant="subtitle2" sx={ { fontWeight: 600, color: '#2e7d32', mb: 1 } }>
                ✅ 같은 컴포넌트, 다른 용도
              </Typography>
              <Typography variant="body2">
                React로 만든 컴포넌트는 실제 서비스에서도,
                Storybook에서도 <strong>똑같이</strong> 사용됩니다.
                Storybook에서 보이는 버튼은 실제 서비스의 버튼과 100% 동일합니다.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={ { xs: 12, md: 6 } }>
            <Paper sx={ { p: 3, backgroundColor: '#fff3e0' } }>
              <Typography variant="subtitle2" sx={ { fontWeight: 600, color: '#e65100', mb: 1 } }>
                💡 디자이너가 Storybook을 보는 이유
              </Typography>
              <Typography variant="body2">
                피그마 디자인이 코드로 <strong>정확히 구현되었는지</strong> 확인할 수 있습니다.
                실제 서비스를 켜지 않아도 모든 컴포넌트의 상태를 확인하고 테스트할 수 있습니다.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      <Divider sx={ { my: 5 } } />

      {/* 워크플로우 */}
      <Typography variant="h5" sx={ { mb: 3, fontWeight: 600 } }>
        디자인 → 개발 워크플로우
      </Typography>

      <Grid container spacing={ 2 }>
        <Grid size={ { xs: 12, md: 3 } }>
          <Paper sx={ { p: 3, textAlign: 'center', height: '100%' } }>
            <Typography variant="h3" sx={ { color: '#1e1e1e', mb: 1 } }>1</Typography>
            <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
              피그마에서 디자인
            </Typography>
            <Typography variant="body2" color="text.secondary">
              컴포넌트, Variants,<br />스타일 정의
            </Typography>
          </Paper>
        </Grid>
        <Grid size={ { xs: 12, md: 3 } }>
          <Paper sx={ { p: 3, textAlign: 'center', height: '100%' } }>
            <Typography variant="h3" sx={ { color: 'primary.main', mb: 1 } }>2</Typography>
            <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
              React로 구현
            </Typography>
            <Typography variant="body2" color="text.secondary">
              피그마 디자인을<br />코드로 변환
            </Typography>
          </Paper>
        </Grid>
        <Grid size={ { xs: 12, md: 3 } }>
          <Paper sx={ { p: 3, textAlign: 'center', height: '100%' } }>
            <Typography variant="h3" sx={ { color: 'secondary.main', mb: 1 } }>3</Typography>
            <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
              Storybook에서 확인
            </Typography>
            <Typography variant="body2" color="text.secondary">
              구현된 컴포넌트<br />디자이너가 검수
            </Typography>
          </Paper>
        </Grid>
        <Grid size={ { xs: 12, md: 3 } }>
          <Paper sx={ { p: 3, textAlign: 'center', height: '100%' } }>
            <Typography variant="h3" sx={ { color: 'success.main', mb: 1 } }>4</Typography>
            <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
              실제 서비스 배포
            </Typography>
            <Typography variant="body2" color="text.secondary">
              검수된 컴포넌트로<br />제품 완성
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** 1. 개념 매핑 - 피그마와 코드 비교 */
export const ConceptMapping = {
  name: '1. 개념 매핑',
  render: () => (
    <Box sx={ { maxWidth: 1200 } }>
      <SectionTitle subtitle="피그마에서 익숙한 개념이 코드에서는 어떻게 불리는지 알아봅니다.">
        피그마 ↔ 코드 개념 매핑
      </SectionTitle>

      <TableContainer component={ Paper } sx={ { mb: 6 } }>
        <Table>
          <TableHead>
            <TableRow sx={ { backgroundColor: '#f5f5f5' } }>
              <TableCell sx={ { fontWeight: 700 } }>피그마</TableCell>
              <TableCell sx={ { fontWeight: 700 } }>코드</TableCell>
              <TableCell sx={ { fontWeight: 700 } }>설명</TableCell>
              <TableCell sx={ { fontWeight: 700 } }>예시</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Chip label="Component" size="small" sx={ { backgroundColor: '#1e1e1e', color: 'white' } } />
              </TableCell>
              <TableCell>
                <Chip label="React Component" size="small" color="primary" />
              </TableCell>
              <TableCell>재사용 가능한 UI 블록</TableCell>
              <TableCell>Button, Card, Input</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Chip label="Variants" size="small" sx={ { backgroundColor: '#1e1e1e', color: 'white' } } />
              </TableCell>
              <TableCell>
                <Chip label="Props" size="small" color="primary" />
              </TableCell>
              <TableCell>컴포넌트의 상태와 옵션</TableCell>
              <TableCell>variant="contained", size="large"</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Chip label="Styles" size="small" sx={ { backgroundColor: '#1e1e1e', color: 'white' } } />
              </TableCell>
              <TableCell>
                <Chip label="Theme" size="small" color="secondary" />
              </TableCell>
              <TableCell>색상, 타이포, 효과 등 디자인 토큰</TableCell>
              <TableCell>primary: #0000FF</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Chip label="UI Kit" size="small" sx={ { backgroundColor: '#1e1e1e', color: 'white' } } />
              </TableCell>
              <TableCell>
                <Chip label="MUI" size="small" color="success" />
              </TableCell>
              <TableCell>미리 만들어진 컴포넌트 라이브러리</TableCell>
              <TableCell>Material Design 기반</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Chip label="Override" size="small" sx={ { backgroundColor: '#1e1e1e', color: 'white' } } />
              </TableCell>
              <TableCell>
                <Chip label="sx prop" size="small" color="warning" />
              </TableCell>
              <TableCell>개별 인스턴스 스타일 덮어쓰기</TableCell>
              <TableCell>sx={ '{ color: "red" }' }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Chip label="Auto Layout" size="small" sx={ { backgroundColor: '#1e1e1e', color: 'white' } } />
              </TableCell>
              <TableCell>
                <Chip label="Grid / Flexbox" size="small" color="info" />
              </TableCell>
              <TableCell>자동 정렬 레이아웃</TableCell>
              <TableCell>Grid container, Stack</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Chip label="Component Docs" size="small" sx={ { backgroundColor: '#1e1e1e', color: 'white' } } />
              </TableCell>
              <TableCell>
                <Chip label="Storybook" size="small" color="error" />
              </TableCell>
              <TableCell>컴포넌트 문서화 & 테스트 도구</TableCell>
              <TableCell>지금 보고 있는 화면!</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={ { my: 6 } } />

      <Typography variant="h5" sx={ { mb: 3, fontWeight: 600 } }>
        핵심 개념 상세
      </Typography>

      <Grid container spacing={ 3 }>
        <Grid size={ { xs: 12, md: 6 } }>
          <ConceptCard
            figma="Component"
            code="React Component"
            description="피그마에서 마스터 컴포넌트를 만들고 인스턴스를 배치하듯이, React에서도 컴포넌트를 정의하고 여러 곳에서 재사용합니다."
          />
        </Grid>
        <Grid size={ { xs: 12, md: 6 } }>
          <ConceptCard
            figma="Variants"
            code="Props"
            description="피그마 Variants에서 Property를 바꾸면 컴포넌트가 변하듯이, React에서는 Props를 바꿔서 컴포넌트 상태를 제어합니다."
          />
        </Grid>
        <Grid size={ { xs: 12, md: 6 } }>
          <ConceptCard
            figma="Styles"
            code="Theme"
            color="secondary"
            description="피그마에서 Color Styles, Text Styles를 정의하듯이, Theme 파일에서 색상, 타이포그래피를 중앙 관리합니다."
          />
        </Grid>
        <Grid size={ { xs: 12, md: 6 } }>
          <ConceptCard
            figma="Override"
            code="sx prop"
            color="warning"
            description="피그마에서 인스턴스 속성을 덮어쓰듯이, sx prop으로 개별 컴포넌트의 스타일을 변경할 수 있습니다."
          />
        </Grid>
      </Grid>
    </Box>
  ),
};

/** 2. Theme 구조 */
export const ThemeStructure = {
  name: '2. Theme 구조',
  render: () => {
    const theme = useTheme();
    return (
      <Box sx={ { maxWidth: 1200 } }>
        <SectionTitle subtitle="피그마의 Styles가 코드에서는 Theme으로 관리됩니다.">
          Theme = 피그마 Styles
        </SectionTitle>

        <Paper sx={ { p: 4, mb: 4, backgroundColor: '#fafafa' } }>
          <Typography variant="body1" sx={ { mb: 3 } }>
            피그마에서 <strong>Color Styles</strong>, <strong>Text Styles</strong>, <strong>Effect Styles</strong>를
            한 곳에서 관리하듯이, 코드에서는 <strong>Theme 파일</strong>에서 모든 디자인 토큰을 관리합니다.
          </Typography>

          <Grid container spacing={ 4 }>
            <Grid size={ { xs: 12, md: 6 } }>
              <Paper sx={ { p: 3, backgroundColor: '#1e1e1e', color: 'white' } }>
                <Typography variant="subtitle2" sx={ { mb: 2, opacity: 0.7 } }>
                  피그마 Styles 패널
                </Typography>
                <Box sx={ { pl: 2, borderLeft: '2px solid #666' } }>
                  <Typography variant="body2" sx={ { mb: 1 } }>📁 Color Styles</Typography>
                  <Typography variant="body2" sx={ { mb: 1, pl: 2, opacity: 0.7 } }>Primary / Blue</Typography>
                  <Typography variant="body2" sx={ { mb: 1, pl: 2, opacity: 0.7 } }>Secondary / Gray</Typography>
                  <Typography variant="body2" sx={ { mb: 2 } }>📁 Text Styles</Typography>
                  <Typography variant="body2" sx={ { mb: 1, pl: 2, opacity: 0.7 } }>Heading / H1</Typography>
                  <Typography variant="body2" sx={ { mb: 1, pl: 2, opacity: 0.7 } }>Body / Regular</Typography>
                  <Typography variant="body2">📁 Effect Styles</Typography>
                  <Typography variant="body2" sx={ { pl: 2, opacity: 0.7 } }>Shadow / Card</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid size={ { xs: 12, md: 6 } }>
              <Paper sx={ { p: 3, backgroundColor: '#e3f2fd' } }>
                <Typography variant="subtitle2" sx={ { mb: 2, color: '#1976d2' } }>
                  코드 Theme 파일 (theme.js)
                </Typography>
                <Box
                  component="pre"
                  sx={ {
                    backgroundColor: '#263238',
                    color: '#aed581',
                    p: 2,
                    borderRadius: 1,
                    fontSize: '12px',
                    overflow: 'auto',
                  } }
                >
{ `palette: {
  primary: { main: '#0000FF' },
  secondary: { main: '#455a64' }
},
typography: {
  h1: { fontFamily: 'Outfit' },
  body1: { fontFamily: 'Pretendard' }
},
components: {
  MuiPaper: {
    styleOverrides: {
      root: { boxShadow: '...' }
    }
  }
}` }
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Paper>

        <Typography variant="h5" sx={ { mb: 3, fontWeight: 600 } }>
          현재 프로젝트 Theme 값
        </Typography>

        <Grid container spacing={ 3 }>
          <Grid size={ { xs: 12, md: 4 } }>
            <Paper sx={ { p: 3 } }>
              <Typography variant="subtitle2" gutterBottom>🎨 Primary Color</Typography>
              <Box sx={ { display: 'flex', alignItems: 'center', gap: 2 } }>
                <Box
                  sx={ {
                    width: 48,
                    height: 48,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1,
                  } }
                />
                <Typography variant="body2" sx={ { fontFamily: 'monospace' } }>
                  { theme.palette.primary.main }
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid size={ { xs: 12, md: 4 } }>
            <Paper sx={ { p: 3 } }>
              <Typography variant="subtitle2" gutterBottom>🎨 Secondary Color</Typography>
              <Box sx={ { display: 'flex', alignItems: 'center', gap: 2 } }>
                <Box
                  sx={ {
                    width: 48,
                    height: 48,
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: 1,
                  } }
                />
                <Typography variant="body2" sx={ { fontFamily: 'monospace' } }>
                  { theme.palette.secondary.main }
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid size={ { xs: 12, md: 4 } }>
            <Paper sx={ { p: 3 } }>
              <Typography variant="subtitle2" gutterBottom>📐 Border Radius</Typography>
              <Box sx={ { display: 'flex', alignItems: 'center', gap: 2 } }>
                <Box
                  sx={ {
                    width: 48,
                    height: 48,
                    backgroundColor: '#e0e0e0',
                    borderRadius: `${theme.shape.borderRadius}px`,
                    border: '2px solid #9e9e9e',
                  } }
                />
                <Typography variant="body2" sx={ { fontFamily: 'monospace' } }>
                  { theme.shape.borderRadius }px
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={ { my: 6 } } />

        <Typography variant="h5" sx={ { mb: 3, fontWeight: 600 } }>
          ThemeProvider = 테마 적용 범위
        </Typography>

        <Paper sx={ { p: 4, backgroundColor: '#fff3e0' } }>
          <Typography variant="body1" sx={ { mb: 3 } }>
            피그마에서 팀 라이브러리를 퍼블리시하면 모든 파일에서 사용할 수 있듯이,
            <strong> ThemeProvider</strong>로 감싼 영역 안의 모든 컴포넌트에 테마가 자동 적용됩니다.
          </Typography>

          <Box
            sx={ {
              p: 3,
              border: '3px dashed #ff9800',
              borderRadius: 2,
              backgroundColor: 'white',
            } }
          >
            <Typography variant="caption" sx={ { color: '#ff9800', fontWeight: 600 } }>
              {'<ThemeProvider theme={theme}>'}
            </Typography>
            <Box sx={ { p: 3, ml: 2, borderLeft: '2px solid #ff9800' } }>
              <Typography variant="body2" sx={ { mb: 1 } }>
                ✅ Button → 자동으로 primary color 적용
              </Typography>
              <Typography variant="body2" sx={ { mb: 1 } }>
                ✅ Typography → 자동으로 font family 적용
              </Typography>
              <Typography variant="body2">
                ✅ Paper → 자동으로 elevation, border radius 적용
              </Typography>
            </Box>
            <Typography variant="caption" sx={ { color: '#ff9800', fontWeight: 600 } }>
              {'</ThemeProvider>'}
            </Typography>
          </Box>
        </Paper>
      </Box>
    );
  },
};

/** 3. 프로젝트 구조 */
export const ProjectStructure = {
  name: '3. 프로젝트 구조',
  render: () => (
    <Box sx={ { maxWidth: 1200 } }>
      <SectionTitle subtitle="React.js와 Storybook이 각각 어떻게 구성되고 실행되는지 알아봅니다.">
        React.js & Storybook 구조
      </SectionTitle>

      {/* 두 개의 독립적인 앱 */}
      <Paper sx={ { p: 4, mb: 5, backgroundColor: '#e3f2fd' } }>
        <Typography variant="h6" sx={ { mb: 2, fontWeight: 600 } }>
          💡 핵심 이해: 두 개의 독립적인 앱
        </Typography>
        <Typography variant="body1" sx={ { mb: 3 } }>
          React 프로젝트에서 <strong>실제 서비스(App)</strong>와 <strong>Storybook</strong>은
          <strong> 완전히 별개의 앱</strong>으로 실행됩니다.
          같은 컴포넌트를 공유하지만, 시작점과 설정 파일이 다릅니다.
        </Typography>
        <Grid container spacing={ 3 }>
          <Grid size={ { xs: 12, md: 6 } }>
            <Paper sx={ { p: 3, backgroundColor: '#1976d2', color: 'white', height: '100%' } }>
              <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 1 } }>
                🌐 실제 서비스 (pnpm dev)
              </Typography>
              <Typography variant="body2" sx={ { opacity: 0.9 } }>
                • 시작점: <code>main.jsx</code> → <code>App.jsx</code><br />
                • 설정: <code>vite.config.js</code><br />
                • 포트: localhost:5173
              </Typography>
            </Paper>
          </Grid>
          <Grid size={ { xs: 12, md: 6 } }>
            <Paper sx={ { p: 3, backgroundColor: '#7b1fa2', color: 'white', height: '100%' } }>
              <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 1 } }>
                📖 Storybook (pnpm storybook)
              </Typography>
              <Typography variant="body2" sx={ { opacity: 0.9 } }>
                • 시작점: <code>.storybook/main.js</code><br />
                • 설정: <code>.storybook/preview.jsx</code><br />
                • 포트: localhost:6006
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      <Divider sx={ { my: 5 } } />

      {/* React.js 앱 구조 */}
      <Typography variant="h5" sx={ { mb: 3, fontWeight: 600 } }>
        1. React.js 앱 구조
      </Typography>

      <Paper sx={ { p: 4, mb: 4, backgroundColor: '#fafafa' } }>
        <Typography variant="body1" sx={ { mb: 3 } }>
          React 앱은 항상 <strong>하나의 시작점(Entry Point)</strong>에서 시작해서
          <strong> 트리 구조</strong>로 컴포넌트를 렌더링합니다.
          피그마에서 최상위 Frame 안에 모든 요소가 들어가는 것과 같습니다.
        </Typography>

        <Grid container spacing={ 4 }>
          <Grid size={ { xs: 12, md: 6 } }>
            <Box
              component="pre"
              sx={ {
                backgroundColor: '#263238',
                color: '#80cbc4',
                p: 3,
                borderRadius: 2,
                fontSize: '12px',
                lineHeight: 1.8,
                overflow: 'auto',
              } }
            >
{ `┌─────────────────────────────────────────────┐
│  📄 index.html                              │
│  (브라우저가 처음 로드하는 파일)              │
│                                             │
│  <div id="root"></div>  ← React가 여기에 렌더링
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  📄 main.jsx (Entry Point)                  │
│                                             │
│  ReactDOM.createRoot(                       │
│    document.getElementById('root')          │
│  ).render(<App />)     ← App 컴포넌트 시작   │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│  📄 App.jsx (최상위 컴포넌트)                │
│                                             │
│  <ThemeProvider theme={theme}>              │
│    <CssBaseline />                          │
│    <Header />         ← 자식 컴포넌트들      │
│    <Main />                                 │
│    <Footer />                               │
│  </ThemeProvider>                           │
└─────────────────────────────────────────────┘` }
            </Box>
          </Grid>
          <Grid size={ { xs: 12, md: 6 } }>
            <Paper sx={ { p: 3, backgroundColor: '#fff3e0', mb: 2 } }>
              <Typography variant="subtitle2" sx={ { fontWeight: 600, color: '#e65100', mb: 1 } }>
                🎯 피그마로 비유하면
              </Typography>
              <Typography variant="body2">
                <strong>main.jsx</strong> = 피그마 파일을 여는 것<br />
                <strong>App.jsx</strong> = 최상위 Frame (모든 요소의 부모)<br />
                <strong>ThemeProvider</strong> = 팀 라이브러리 연결<br />
                <strong>Header, Main, Footer</strong> = Frame 안의 컴포넌트들
              </Typography>
            </Paper>
            <Paper sx={ { p: 3, backgroundColor: '#e8f5e9' } }>
              <Typography variant="subtitle2" sx={ { fontWeight: 600, color: '#2e7d32', mb: 1 } }>
                ✅ 핵심 포인트
              </Typography>
              <Typography variant="body2">
                React 앱은 항상 <strong>App.jsx에서 시작</strong>합니다.<br />
                모든 컴포넌트는 App의 자식으로 트리 구조를 이룹니다.<br />
                ThemeProvider가 App을 감싸서 모든 자식에게 테마를 전달합니다.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      <Divider sx={ { my: 5 } } />

      {/* Storybook 구조 */}
      <Typography variant="h5" sx={ { mb: 3, fontWeight: 600 } }>
        2. Storybook 구조
      </Typography>

      <Paper sx={ { p: 4, mb: 4, backgroundColor: '#fafafa' } }>
        <Typography variant="body1" sx={ { mb: 3 } }>
          Storybook은 <strong>.storybook 폴더</strong>의 설정 파일들로 구성됩니다.
          크게 두 가지 핵심 파일이 있습니다.
        </Typography>

        <Grid container spacing={ 4 } sx={ { mb: 4 } }>
          {/* main.js 설명 */}
          <Grid size={ { xs: 12, md: 6 } }>
            <Paper sx={ { p: 3, border: '2px solid #7b1fa2', height: '100%' } }>
              <Typography variant="h6" sx={ { color: '#7b1fa2', mb: 2 } }>
                📋 main.js - "무엇을 보여줄까?"
              </Typography>
              <Typography variant="body2" sx={ { mb: 2 } }>
                Storybook의 <strong>기본 설정 파일</strong>입니다.
                어떤 스토리 파일을 로드할지, 어떤 기능(addon)을 사용할지 정의합니다.
              </Typography>
              <Box
                component="pre"
                sx={ {
                  backgroundColor: '#263238',
                  color: '#aed581',
                  p: 2,
                  borderRadius: 1,
                  fontSize: '11px',
                  overflow: 'auto',
                } }
              >
{ `// .storybook/main.js

export default {
  // 📁 스토리 파일 위치
  stories: [
    "../src/**/*.stories.@(js|jsx)"
  ],

  // 🔧 사용할 기능들
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-controls"
  ],

  // ⚙️ 빌드 도구
  framework: "@storybook/react-vite"
}` }
              </Box>
              <Paper sx={ { p: 2, mt: 2, backgroundColor: '#f3e5f5' } }>
                <Typography variant="caption" sx={ { color: '#7b1fa2' } }>
                  💡 피그마 비유: 어떤 페이지들을 프로젝트에 포함할지 설정하는 것
                </Typography>
              </Paper>
            </Paper>
          </Grid>

          {/* preview.jsx 설명 */}
          <Grid size={ { xs: 12, md: 6 } }>
            <Paper sx={ { p: 3, border: '2px solid #1976d2', height: '100%' } }>
              <Typography variant="h6" sx={ { color: '#1976d2', mb: 2 } }>
                🎨 preview.jsx - "어떻게 보여줄까?"
              </Typography>
              <Typography variant="body2" sx={ { mb: 2 } }>
                모든 스토리에 <strong>공통으로 적용될 설정</strong>입니다.
                테마, 레이아웃, 정렬 순서 등을 정의합니다.
              </Typography>
              <Box
                component="pre"
                sx={ {
                  backgroundColor: '#263238',
                  color: '#aed581',
                  p: 2,
                  borderRadius: 1,
                  fontSize: '11px',
                  overflow: 'auto',
                } }
              >
{ `// .storybook/preview.jsx

export default {
  // 📐 전역 설정
  parameters: {
    layout: 'centered',
    options: {
      storySort: { order: [...] }
    }
  },

  // 🎨 모든 스토리를 감싸는 래퍼
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
}` }
              </Box>
              <Paper sx={ { p: 2, mt: 2, backgroundColor: '#e3f2fd' } }>
                <Typography variant="caption" sx={ { color: '#1976d2' } }>
                  💡 피그마 비유: 팀 라이브러리를 모든 파일에 자동 연결하는 것
                </Typography>
              </Paper>
            </Paper>
          </Grid>
        </Grid>

        {/* Storybook 로딩 흐름 */}
        <Typography variant="h6" sx={ { mb: 3, fontWeight: 600 } }>
          Storybook 로딩 흐름
        </Typography>
        <Box
          component="pre"
          sx={ {
            backgroundColor: '#263238',
            color: '#80cbc4',
            p: 3,
            borderRadius: 2,
            fontSize: '12px',
            lineHeight: 1.8,
            overflow: 'auto',
          } }
        >
{ `pnpm storybook 실행
        │
        ▼
┌─────────────────────────────────────────────────────────────┐
│  1️⃣  main.js 읽기                                           │
│      → stories: ["../src/**/*.stories.jsx"]                 │
│      → 이 패턴에 맞는 모든 파일을 찾음                         │
└─────────────────────────────────────────────────────────────┘
        │
        ▼
┌─────────────────────────────────────────────────────────────┐
│  2️⃣  스토리 파일들 로드                                      │
│      → Button.stories.jsx                                   │
│      → Grid.stories.jsx                                     │
│      → ForDesigners.stories.jsx                             │
│      → ... (모든 *.stories.jsx 파일)                         │
└─────────────────────────────────────────────────────────────┘
        │
        ▼
┌─────────────────────────────────────────────────────────────┐
│  3️⃣  preview.jsx 적용                                       │
│      → ThemeProvider로 모든 스토리 감싸기                    │
│      → 사이드바 정렬 순서 적용                                │
│      → 전역 파라미터 적용                                    │
└─────────────────────────────────────────────────────────────┘
        │
        ▼
┌─────────────────────────────────────────────────────────────┐
│  4️⃣  브라우저에서 Storybook UI 표시                          │
│      → localhost:6006                                       │
│      → 사이드바에 모든 스토리 목록 표시                        │
└─────────────────────────────────────────────────────────────┘` }
        </Box>
      </Paper>

      <Divider sx={ { my: 5 } } />

      {/* 스토리 파일 구조 */}
      <Typography variant="h5" sx={ { mb: 3, fontWeight: 600 } }>
        3. 스토리 파일 구조 (*.stories.jsx)
      </Typography>

      <Paper sx={ { p: 4, mb: 4, backgroundColor: '#fafafa' } }>
        <Typography variant="body1" sx={ { mb: 3 } }>
          각 스토리 파일은 <strong>하나의 컴포넌트에 대한 문서</strong>입니다.
          피그마에서 컴포넌트 페이지를 만들고 Variants를 정의하는 것과 같습니다.
        </Typography>

        <Grid container spacing={ 4 }>
          <Grid size={ { xs: 12, lg: 7 } }>
            <Box
              component="pre"
              sx={ {
                backgroundColor: '#263238',
                color: '#aed581',
                p: 3,
                borderRadius: 2,
                fontSize: '11px',
                lineHeight: 1.7,
                overflow: 'auto',
              } }
            >
{ `// Button.stories.jsx

import Button from '@mui/material/Button';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📋 기본 설정 (default export)
// → 이 파일 전체에 대한 메타 정보
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default {
  title: 'Component/Button',  // 사이드바 경로
  component: Button,          // 문서화할 컴포넌트
  tags: ['autodocs'],         // 자동 문서 생성
  parameters: {
    docs: {
      description: {
        component: '버튼 컴포넌트입니다.'
      }
    }
  }
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📖 개별 스토리들 (named exports)
// → 피그마의 Variants와 같음
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/** 기본 버튼 */
export const Default = {
  args: {
    variant: 'contained',
    children: 'Button'
  }
};

/** Outlined 스타일 */
export const Outlined = {
  args: {
    variant: 'outlined',
    children: 'Outlined'
  }
};

/** 모든 색상 비교 */
export const AllColors = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
    </Stack>
  )
};` }
            </Box>
          </Grid>
          <Grid size={ { xs: 12, lg: 5 } }>
            <Paper sx={ { p: 3, backgroundColor: '#fff3e0', mb: 2 } }>
              <Typography variant="subtitle2" sx={ { fontWeight: 600, color: '#e65100', mb: 2 } }>
                🎯 피그마로 비유하면
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableBody>
                    <TableRow>
                      <TableCell sx={ { fontWeight: 600, width: '40%' } }>export default</TableCell>
                      <TableCell>컴포넌트 페이지 설정</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={ { fontWeight: 600 } }>title</TableCell>
                      <TableCell>페이지 이름 & 위치</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={ { fontWeight: 600 } }>component</TableCell>
                      <TableCell>마스터 컴포넌트</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={ { fontWeight: 600 } }>export const</TableCell>
                      <TableCell>각각의 Variant</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={ { fontWeight: 600 } }>args</TableCell>
                      <TableCell>Variant의 속성값</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>

            <Paper sx={ { p: 3, backgroundColor: '#e8f5e9', mb: 2 } }>
              <Typography variant="subtitle2" sx={ { fontWeight: 600, color: '#2e7d32', mb: 1 } }>
                📁 사이드바 구조
              </Typography>
              <Box
                component="pre"
                sx={ {
                  backgroundColor: '#1b5e20',
                  color: '#a5d6a7',
                  p: 2,
                  borderRadius: 1,
                  fontSize: '11px',
                } }
              >
{ `Component/
└── Button/        ← title: 'Component/Button'
    ├── Docs       ← autodocs 자동 생성
    ├── Default    ← export const Default
    ├── Outlined   ← export const Outlined
    └── AllColors  ← export const AllColors` }
              </Box>
            </Paper>

            <Paper sx={ { p: 3, backgroundColor: '#fce4ec' } }>
              <Typography variant="subtitle2" sx={ { fontWeight: 600, color: '#c2185b', mb: 1 } }>
                ⚡ 스토리 작성 패턴 3가지
              </Typography>
              <Typography variant="body2" sx={ { mb: 1 } }>
                <strong>1. args만</strong> - 단순 props 전달<br />
                <code>{'{ args: { variant: "contained" } }'}</code>
              </Typography>
              <Typography variant="body2" sx={ { mb: 1 } }>
                <strong>2. render만</strong> - 복잡한 레이아웃<br />
                <code>{'{ render: () => <여러 컴포넌트 /> }'}</code>
              </Typography>
              <Typography variant="body2">
                <strong>3. args + render</strong> - Controls 연동<br />
                <code>{'{ args: {...}, render: ({...args}) => ... }'}</code>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      <Divider sx={ { my: 5 } } />

      {/* 전체 파일 구조 요약 */}
      <Typography variant="h5" sx={ { mb: 3, fontWeight: 600 } }>
        4. 전체 파일 구조 요약
      </Typography>

      <Paper sx={ { p: 4, backgroundColor: '#fafafa' } }>
        <Grid container spacing={ 4 }>
          <Grid size={ { xs: 12, md: 6 } }>
            <Typography variant="h6" sx={ { mb: 2 } }>React App 파일들</Typography>
            <Box
              component="pre"
              sx={ {
                backgroundColor: '#1976d2',
                color: 'white',
                p: 3,
                borderRadius: 2,
                fontSize: '12px',
                lineHeight: 2,
              } }
            >
{ `📁 프로젝트/
│
├── 📄 index.html      ← HTML 템플릿
│
├── 📁 src/
│   ├── 📄 main.jsx    ← 🚀 앱 시작점
│   ├── 📄 App.jsx     ← 최상위 컴포넌트
│   │
│   ├── 📁 styles/
│   │   └── 📄 theme.js   ← 🎨 테마 정의
│   │
│   └── 📁 components/    ← UI 컴포넌트들
│       ├── Button/
│       ├── Card/
│       └── ...
│
└── 📄 vite.config.js     ← 빌드 설정` }
            </Box>
          </Grid>
          <Grid size={ { xs: 12, md: 6 } }>
            <Typography variant="h6" sx={ { mb: 2 } }>Storybook 파일들</Typography>
            <Box
              component="pre"
              sx={ {
                backgroundColor: '#7b1fa2',
                color: 'white',
                p: 3,
                borderRadius: 2,
                fontSize: '12px',
                lineHeight: 2,
              } }
            >
{ `📁 프로젝트/
│
├── 📁 .storybook/        ← Storybook 설정
│   ├── 📄 main.js        ← 📋 무엇을 로드할지
│   └── 📄 preview.jsx    ← 🎨 어떻게 보여줄지
│
└── 📁 src/
    └── 📁 stories/       ← 스토리 파일들
        ├── 📁 overview/
        │   └── 📄 ForDesigners.stories.jsx
        ├── 📁 style/
        │   └── 📄 Colors.stories.jsx
        ├── 📁 component/
        │   ├── 📄 Button.stories.jsx
        │   └── 📄 Grid.stories.jsx
        ├── 📁 template/
        └── 📁 page/` }
            </Box>
          </Grid>
        </Grid>

        <Paper sx={ { p: 3, mt: 4, backgroundColor: '#e8f5e9' } }>
          <Typography variant="subtitle2" sx={ { fontWeight: 600, color: '#2e7d32', mb: 1 } }>
            💡 핵심 정리
          </Typography>
          <Grid container spacing={ 2 }>
            <Grid size={ { xs: 12, md: 4 } }>
              <Typography variant="body2">
                <strong>React App:</strong><br />
                main.jsx → App.jsx → 컴포넌트들
              </Typography>
            </Grid>
            <Grid size={ { xs: 12, md: 4 } }>
              <Typography variant="body2">
                <strong>Storybook:</strong><br />
                main.js → *.stories.jsx → preview.jsx 적용
              </Typography>
            </Grid>
            <Grid size={ { xs: 12, md: 4 } }>
              <Typography variant="body2">
                <strong>공유하는 것:</strong><br />
                컴포넌트, 테마(theme.js)
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </Box>
  ),
};

/** 4. Storybook 사용법 */
export const StorybookGuide = {
  name: '4. Storybook 사용법',
  render: () => (
    <Box sx={ { maxWidth: 1200 } }>
      <SectionTitle subtitle="Storybook에서 컴포넌트를 탐색하고 테스트하는 방법을 알아봅니다.">
        Storybook = 컴포넌트 플레이그라운드
      </SectionTitle>

      <Paper sx={ { p: 4, mb: 4, backgroundColor: '#fafafa' } }>
        <Typography variant="body1" sx={ { mb: 3 } }>
          Storybook은 피그마의 <strong>Component Docs</strong>와 <strong>Inspect 패널</strong>을 합쳐놓은 것과 같습니다.
          실제 코드로 만들어진 컴포넌트를 시각적으로 확인하고, Props를 바꿔가며 테스트할 수 있습니다.
        </Typography>

        <Grid container spacing={ 4 }>
          <Grid size={ { xs: 12, md: 6 } }>
            <Paper sx={ { p: 3, backgroundColor: '#e3f2fd', height: '100%' } }>
              <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 2, color: '#1976d2' } }>
                📋 피그마 Inspect 패널
              </Typography>
              <Typography variant="body2" sx={ { mb: 2 } }>
                • 컴포넌트 속성 확인<br />
                • Variants 선택<br />
                • 색상, 크기 값 복사<br />
                • 읽기 전용 (수정 불가)
              </Typography>
            </Paper>
          </Grid>
          <Grid size={ { xs: 12, md: 6 } }>
            <Paper sx={ { p: 3, backgroundColor: '#e8f5e9', height: '100%' } }>
              <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 2, color: '#2e7d32' } }>
                🎛️ Storybook Controls
              </Typography>
              <Typography variant="body2" sx={ { mb: 2 } }>
                • Props 실시간 조절<br />
                • 드롭다운으로 Variants 변경<br />
                • 결과 즉시 확인<br />
                • <strong>직접 조작 가능!</strong>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="h5" sx={ { mb: 3, fontWeight: 600 } }>
        사용 방법
      </Typography>

      <Grid container spacing={ 3 } sx={ { mb: 4 } }>
        <Grid size={ { xs: 12, md: 4 } }>
          <Paper sx={ { p: 3, height: '100%' } }>
            <Typography variant="h3" sx={ { color: 'primary.main', mb: 1 } }>1</Typography>
            <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 1 } }>
              사이드바에서 컴포넌트 선택
            </Typography>
            <Typography variant="body2" color="text.secondary">
              왼쪽 사이드바에서 원하는 컴포넌트를 클릭합니다.
              Component → Button 처럼 카테고리별로 정리되어 있습니다.
            </Typography>
          </Paper>
        </Grid>
        <Grid size={ { xs: 12, md: 4 } }>
          <Paper sx={ { p: 3, height: '100%' } }>
            <Typography variant="h3" sx={ { color: 'primary.main', mb: 1 } }>2</Typography>
            <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 1 } }>
              Controls 패널에서 Props 조절
            </Typography>
            <Typography variant="body2" color="text.secondary">
              하단의 Controls 탭에서 variant, color, size 등을
              드롭다운이나 체크박스로 변경해보세요.
            </Typography>
          </Paper>
        </Grid>
        <Grid size={ { xs: 12, md: 4 } }>
          <Paper sx={ { p: 3, height: '100%' } }>
            <Typography variant="h3" sx={ { color: 'primary.main', mb: 1 } }>3</Typography>
            <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 1 } }>
              실시간 결과 확인
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Props를 바꾸면 위의 미리보기 영역에서
              컴포넌트가 즉시 변경되는 것을 확인할 수 있습니다.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={ { my: 4 } } />

      <Typography variant="h5" sx={ { mb: 3, fontWeight: 600 } }>
        직접 해보기: Button Controls
      </Typography>

      <Paper sx={ { p: 4, backgroundColor: '#fafafa' } }>
        <Typography variant="body2" sx={ { mb: 3 } }>
          아래 버튼의 속성을 하단 Controls 패널에서 변경해보세요.
          (이 스토리에서는 작동하지 않습니다. Component/Button으로 이동해서 테스트하세요)
        </Typography>

        <Box sx={ { display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 } }>
          <Button variant="contained" color="primary">
            Contained Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Outlined Secondary
          </Button>
          <Button variant="text" color="error">
            Text Error
          </Button>
        </Box>

        <Paper sx={ { p: 2, backgroundColor: '#fff8e1' } }>
          <Typography variant="subtitle2" sx={ { color: '#f57c00', mb: 1 } }>
            🎯 연습하기
          </Typography>
          <Typography variant="body2">
            사이드바에서 <strong>Component → Button → Default</strong>로 이동한 후,
            하단 Controls에서 variant를 "outlined"로, color를 "secondary"로 바꿔보세요!
          </Typography>
        </Paper>
      </Paper>
    </Box>
  ),
};

/** 기본 스토리 */
export const Default = {
  render: () => (
    <Box sx={ { maxWidth: 1000 } }>
      <Typography variant="h3" gutterBottom sx={ { fontWeight: 700 } }>
        디자이너를 위한 가이드
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={ { mb: 4 } }>
        피그마 사용자가 React + MUI + Storybook을 이해하기 위한 가이드
      </Typography>

      <Paper sx={ { p: 4, mb: 4, backgroundColor: '#e3f2fd' } }>
        <Typography variant="body1">
          이 문서는 피그마를 사용해본 디자이너가 코드 기반 디자인 시스템을 이해하도록 돕습니다.
          익숙한 피그마 개념과 1:1로 매핑하여 설명합니다.
        </Typography>
      </Paper>

      <Typography variant="h5" sx={ { mb: 3, fontWeight: 600 } }>
        목차
      </Typography>

      <Grid container spacing={ 2 }>
        <Grid size={ { xs: 12 } }>
          <Paper sx={ { p: 3, backgroundColor: '#e3f2fd' } }>
            <Typography variant="subtitle1" sx={ { fontWeight: 600 } }>
              0. Overview
            </Typography>
            <Typography variant="body2" color="text.secondary">
              React.js와 Storybook의 관계
            </Typography>
          </Paper>
        </Grid>
        <Grid size={ { xs: 12, sm: 6 } }>
          <Paper sx={ { p: 3 } }>
            <Typography variant="subtitle1" sx={ { fontWeight: 600 } }>
              1. 개념 매핑
            </Typography>
            <Typography variant="body2" color="text.secondary">
              피그마 ↔ 코드 용어 비교
            </Typography>
          </Paper>
        </Grid>
        <Grid size={ { xs: 12, sm: 6 } }>
          <Paper sx={ { p: 3 } }>
            <Typography variant="subtitle1" sx={ { fontWeight: 600 } }>
              2. Theme 구조
            </Typography>
            <Typography variant="body2" color="text.secondary">
              피그마 Styles = Theme
            </Typography>
          </Paper>
        </Grid>
        <Grid size={ { xs: 12, sm: 6 } }>
          <Paper sx={ { p: 3 } }>
            <Typography variant="subtitle1" sx={ { fontWeight: 600 } }>
              3. 프로젝트 구조
            </Typography>
            <Typography variant="body2" color="text.secondary">
              파일 위치와 연결 관계
            </Typography>
          </Paper>
        </Grid>
        <Grid size={ { xs: 12, sm: 6 } }>
          <Paper sx={ { p: 3 } }>
            <Typography variant="subtitle1" sx={ { fontWeight: 600 } }>
              4. Storybook 사용법
            </Typography>
            <Typography variant="body2" color="text.secondary">
              컴포넌트 탐색 & 테스트
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={ { mt: 4, p: 3, backgroundColor: '#f5f5f5', borderRadius: 2 } }>
        <Typography variant="body2" color="text.secondary">
          💡 왼쪽 사이드바에서 각 섹션(1. 개념 매핑, 2. Theme 구조, ...)을 클릭하여 상세 내용을 확인하세요.
        </Typography>
      </Box>
    </Box>
  ),
};
