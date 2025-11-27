# Project Rules

## 0. Project Summary

### 프로젝트 개요
**Starter Kit Basic**은 React + MUI + Storybook 환경을 디자이너에게 마치 디자인 툴처럼 사용할 수 있도록 도와주는 개발 환경입니다.

### 핵심 목적
1. **UI 컴포넌트 체계적 관리** - 재사용 가능한 컴포넌트를 Storybook으로 문서화
2. **디자인 톤 일관성 유지** - 색상, 타이포그래피, 스타일을 중앙에서 관리
3. **로직과 UI 분리** - 제품의 비즈니스 로직과 UI 디자인 작업을 명확히 분리

### 대상 사용자
- **디자이너**: Storybook을 통해 컴포넌트를 시각적으로 탐색하고 테스트
- **개발자**: 체계적인 컴포넌트 구조와 스타일 가이드를 활용하여 개발

### 기술 스택
- React 19.x
- MUI 7.x (Material UI)
- Vite 7.x
- Storybook 10.x

### 중요 규칙

#### 컴포넌트 작성
- 모든 UI 컴포넌트는 MUI 기반으로 작성
- 스타일링은 MUI의 `sx` prop 사용
- 컴포넌트는 독립적이고 재사용 가능하게 설계

#### 스토리 작성
- 모든 컴포넌트는 Storybook 스토리와 함께 작성
- 디자이너가 이해하기 쉬운 명확한 설명 포함
- Props 변형을 시각적으로 확인할 수 있도록 구성

#### 디자인 시스템
- 색상, 타이포그래피는 테마 파일에서 중앙 관리
- 일관된 spacing, elevation, borderRadius 적용
- Style 섹션에서 디자인 토큰 문서화

#### 작업 분리 원칙
- **UI 레이어**: 순수 프레젠테이션 컴포넌트 (로직 없음)
- **로직 레이어**: 비즈니스 로직, 상태 관리, API 호출
- Storybook에서는 UI 레이어만 다룸

---

## 1. Code Convention (JavaScript + React.js)

### Lint Rules (자동 검출/수정 기준)
- 파일 마지막 줄은 newline 추가
- import 순서: 외부 라이브러리 → 내부 모듈 → 스타일 파일
- 사용하지 않는 변수 금지 (`no-unused-vars`)
- indent는 space 2칸 사용
- 세미콜론(;) 반드시 추가
- ' " ' 대신 ' ' ' 사용 (single quotes)
- JSX 중괄호 스타일 `{ value }` (공백 한 칸)
- Hooks는 최상단에 선언 (`react-hooks/rules-of-hooks`)

### 코드 작성 규칙
- 함수 이름은 camelCase 사용
- 컴포넌트 이름은 PascalCase 사용
- 파일명은 kebab-case 사용
- 하나의 파일에는 하나의 컴포넌트만 작성
- CSS className은 BEM 방식 권장
- 주석은 `/** */`로 명확히 작성하고, TODO / FIXME 등 용도 구분
- 폴더는 기능 단위로 구성 (components, pages, hooks, utils)

### React 컴포넌트 Props 관리 규칙
- props는 함수 인자에서 구조분해(destructuring)해서 받는다
- 컴포넌트 함수 선언부 위에 props를 목록 형태로 주석으로 설명한다
- 주석 형식: `@param {데이터타입} props명 - 설명 [Required/Optional, 기본값: 값]`
- boolean props는 is/has로 시작
- 함수형 props는 on으로 시작
- 주석 아래에는 props 사용 예시 (Example usage)를 간단히 추가

```jsx
/**
 * Button 컴포넌트
 *
 * Props:
 * @param {string} label - 버튼에 표시할 텍스트 [Required]
 * @param {function} onClick - 버튼 클릭 시 실행할 함수 [Optional]
 * @param {boolean} isActive - 버튼 활성화 여부 [Optional, 기본값: true]
 *
 * Example usage:
 * <Button label="확인" onClick={handleClick} />
 */
function Button({ label, onClick, isActive = true }) {
  return (
    <button onClick={onClick} disabled={!isActive}>
      {label}
    </button>
  );
}
```

---

## 2. Design System Rules

- **중요** 모든 기본 컴퍼넌트는 MUI의 가장 최신버전 사용
- 모든 컴퍼넌트의 스타일은 가능한 MUI의 sx 함수를 사용
- 수정시 의존성을 줄만한 기능들을 독립된 컴퍼넌트로 모듈화
- 새로운 수정, 추가사항이 있을때 지시하지 않은 기존 기능, 형태에 영향을 주지 않도록 조심
- 특별한 의도가 없다면 구글 메터리얼 디자인의 가이드에 기반한 UX에 충실

---

## 3. MUI Grid Usage (v7 신규 API)

**중요**: Grid 컴퍼넌트는 `size` prop을 사용 (xs, sm, md 등 deprecated)

```jsx
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
```

---

## 4. MUI Custom Theme

custom theme은 별도의 파일로 관리

### Typography
- 본문: pretendard variable 버전 웹폰트
- headline 영어: Google Font Outfit
- headline 한글: pretendard 가장 높은 weight

### Color
- Primary: `#0000FF`
- Secondary: blueGrey의 가장 어두운색

### Elevation
- paper의 box shadow: x, y offset 0
- opacity 낮추고 blur 높임 (dimmed shadow)

### BorderRadius
- 인라인 지정 없으면 모든 컴퍼넌트 borderRadius: 0

---

## 5. Project Directory Structure

```
src/
  components/           # 재사용 가능한 UI 컴포넌트 모음
    card/               # 카드 관련 컴포넌트 (ProductCard + stories)
    carousel/           # 캐로셀 관련 컴포넌트
    container/          # 컨테이너 컴포넌트
    grid/               # 그리드 관련 컴포넌트
    navigation/         # 네비게이션 컴포넌트
    style/              # 스타일 가이드 (Icons, Assets + stories)

  pages/                # 페이지 레벨 컴포넌트

  common/               # 공통 유틸 컴포넌트
    ui/                 # UI 요소 (ArrowButton, Indicator 등)
    media/              # 미디어 렌더러

  guide/                # 중요한 컴퍼넌트 생성시 적용된 가이드
  templates/            # 다수의 컴퍼넌트들이 합쳐진 템플릿
  sections/             # 페이지 내 주요 섹션
  hooks/                # 커스텀 React 훅
  utils/                # 유틸리티 함수
  styles/               # 전역 스타일 또는 테마
  assets/               # 이미지, 폰트, 비디오 등 정적 자원

  stories/              # 스토리북 스토리 전용 폴더
    overview/           # 프로젝트 소개, 가이드
    style/              # 색상, 타이포그래피, 아이콘
    component/          # 재사용 가능한 UI 컴포넌트
    template/           # 컴포넌트 조합 템플릿
    page/               # 전체 페이지 레이아웃

docs/                   # 프로젝트 문서
.storybook/             # Storybook 설정
```

### Storybook 파일 위치 규칙
- `.stories.jsx` 파일은 `src/stories/` 하위 섹션 폴더에 위치
- Storybook 사이드바 순서: `Overview` → `Style` → `Component` → `Template` → `Page`

---

## 6. Refactoring Rules

- 디자이너 입장에서 declarative하게 함수 리팩토링 및 주석 수정
- 주석에는 동작 방식과 단계가 사용자의 인풋, 시각적 변화 관점에서 서술
- **절대로 기능과 기본 로직, 형태가 바뀌지 않도록 조심**

---

## 7. Storybook Writing Rules

### 스토리 파일 구조
1. **parameters.docs.description**: 문서 상단에 마크다운으로 타이틀/설명 표시
2. **argTypes**: 단일 값으로 제어 가능한 props만 정의
3. **Default Story**: 기본 사용 예시 (autodocs용)
4. **Variation Stories**: 각 props별 변형 스토리

### 필수 구성 요소
```jsx
export default {
  title: 'Category/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // or 'padded', 'fullscreen'
    docs: {
      description: {
        component: `
## Component Name

컴포넌트에 대한 상세 설명을 마크다운으로 작성합니다.

### 사용 패턴
| 패턴 | 설명 | 예시 |
|------|------|------|
| 패턴1 | 설명1 | \`예시코드\` |
        `,
      },
    },
  },
  // 단일 값으로 제어 가능한 props만 argTypes에 정의
  argTypes: {
    propName: {
      control: 'select',
      options: ['option1', 'option2'],
      description: 'prop에 대한 설명',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'option1' },
      },
    },
  },
};
```

### 스토리 작성 패턴

#### 1. 단일 컴포넌트 (Button 등) - args만 사용
```jsx
export const Default = {
  args: {
    variant: 'contained',
    children: 'Button',
  },
};
```

#### 2. 복합 컴포넌트 (Grid 등) - args + render 조합
```jsx
export const Default = {
  args: {
    spacing: 2,
  },
  render: ({ spacing }) => (
    <Grid container spacing={ spacing }>
      <Grid size={ 6 }><Item>A</Item></Grid>
      <Grid size={ 6 }><Item>B</Item></Grid>
    </Grid>
  ),
};
```

#### 3. 비교용 스토리 - render만 사용
```jsx
export const AllVariants = {
  render: () => (
    <Stack spacing={ 2 } direction="row">
      <Component variant="a">A</Component>
      <Component variant="b">B</Component>
    </Stack>
  ),
};
```

### argTypes 작성 원칙
- **단일 값 제어 가능한 props만** argTypes에 정의
- 복잡한 객체/배열 props는 문서 설명으로 대체
- 예: `spacing` (숫자) ✅, `size={{ xs: 12, md: 6 }}` (객체) ❌

### 스토리 네이밍 규칙
- Default: 기본 상태
- AllVariants: 모든 변형 한눈에 보기
- Colors: 색상 변형
- Sizes: 크기 변형
- States: 상태 변형 (disabled, loading 등)
- Responsive: 반응형 레이아웃
- [Name]Comparison: 여러 값 비교용 (control 미연동)

### 사이드바 디렉토리 구조

Storybook 사이드바는 다음 순서로 정렬됩니다:

| 순서 | 섹션 | 설명 | 폴더 |
|------|------|------|------|
| 1 | **Overview** | 프로젝트 소개, 가이드 | `stories/overview/` |
| 2 | **Style** | 색상, 타이포그래피, 아이콘 | `stories/style/` |
| 3 | **Component** | 재사용 가능한 UI 컴포넌트 | `stories/component/` |
| 4 | **Template** | 컴포넌트 조합 템플릿 | `stories/template/` |
| 5 | **Page** | 전체 페이지 레이아웃 | `stories/page/` |

각 섹션 내부는 **alphabetical** 순으로 자동 정렬됩니다.

### 스토리 title 작성법
```jsx
// Overview 섹션
title: 'Overview/Introduction'

// Style 섹션
title: 'Style/Colors'
title: 'Style/Typography'

// Component 섹션
title: 'Component/Button'
title: 'Component/Grid'

// Template 섹션
title: 'Template/CardGrid'

// Page 섹션
title: 'Page/MainPage'
```
