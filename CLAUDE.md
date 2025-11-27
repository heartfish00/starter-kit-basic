# Project Rules

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

stories/                # 스토리북 스토리 전용 폴더
docs/                   # 프로젝트 문서
.storybook/             # Storybook 설정
```

### Storybook 파일 위치 규칙
- `.stories.jsx` 파일은 해당 컴포넌트와 **같은 폴더**에 위치
- Storybook 구조: `1. Style/` → `2. Components/` → `3. Pages/`

---

## 6. Refactoring Rules

- 디자이너 입장에서 declarative하게 함수 리팩토링 및 주석 수정
- 주석에는 동작 방식과 단계가 사용자의 인풋, 시각적 변화 관점에서 서술
- **절대로 기능과 기본 로직, 형태가 바뀌지 않도록 조심**

---

## 7. Storybook Writing Rules

### 스토리 파일 구조
1. **parameters.docs.description**: 문서 상단에 마크다운으로 타이틀/설명 표시
2. **argTypes**: 각 props의 control 타입 정의 (select, boolean 등)
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

### 주요 특징
- 특징 1
- 특징 2
        `,
      },
    },
  },
  argTypes: {
    propName: {
      control: 'select', // or 'boolean', 'text', 'number', 'color'
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

### Variation Story 작성법
```jsx
/** 기본 상태 */
export const Default = {
  args: {
    variant: 'contained',
    children: 'Button Text',
  },
};

/** 여러 변형 비교 */
export const AllVariants = {
  render: () => (
    <Stack spacing={2} direction="row">
      <Component variant="a">A</Component>
      <Component variant="b">B</Component>
    </Stack>
  ),
};
```

### 스토리 네이밍 규칙
- Default: 기본 상태
- AllVariants: 모든 변형 한눈에 보기
- Colors: 색상 변형
- Sizes: 크기 변형
- States: 상태 변형 (disabled, loading 등)
- WithIcon: 아이콘 포함 변형
- Responsive: 반응형 레이아웃
