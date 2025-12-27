# TypeScript Migration Progress

## 개요
이 문서는 프로젝트의 JavaScript → TypeScript 마이그레이션 진행 상황을 기록합니다.

**시작일**: 2025-12-27
**목표**: Next.js 15 + React 19 프로젝트를 완전한 TypeScript로 전환

---

## 진행 상황 요약

| 단계 | 상태 | 설명 |
|------|------|------|
| 1. TypeScript 설정 | ✅ 완료 | tsconfig.json, next-env.d.ts, src/types/ |
| 2. 테마 마이그레이션 | ✅ 완료 | theme.js → theme.ts |
| 3. ThemeRegistry | ✅ 완료 | ThemeRegistry.jsx → ThemeRegistry.tsx |
| 4. App 파일들 | ✅ 완료 | layout.tsx, page.tsx |
| 5. 데이터 파일 | ✅ 완료 | componentTokenMap.ts |
| 6. Storybook 설정 | ✅ 완료 | main.ts, preview.tsx, vitest.setup.ts |
| 7. 스토리 파일들 | ✅ 완료 | 19개 파일 모두 변환 |
| 8. ESLint 설정 | ⏳ 대기 | TypeScript ESLint 추가 필요 |
| 9. 빌드 검증 | ✅ 완료 | Storybook 테스트 완료 |
| 10. 패키지 추가 | ✅ 완료 | @mui/icons-material 설치 |

---

## 완료된 작업

### 1. TypeScript 기본 설정 ✅

**생성된 파일:**
- `/tsconfig.json` - TypeScript 컴파일러 설정
- `/next-env.d.ts` - Next.js 타입 참조
- `/src/types/theme.d.ts` - MUI 테마 타입 확장
- `/src/types/storybook.d.ts` - Storybook 타입 헬퍼
- `/src/types/index.ts` - 타입 내보내기

**tsconfig.json 주요 설정:**
```json
{
  "compilerOptions": {
    "strict": false,      // 점진적 활성화 예정
    "allowJs": true,      // 마이그레이션 완료 후 false로 변경
    "paths": { "@/*": ["./src/*"] }
  }
}
```

### 2. Core App 파일들 ✅

| 이전 파일 | 변환 파일 | 상태 |
|-----------|-----------|------|
| src/styles/theme.js | src/styles/theme.ts | ✅ |
| src/app/ThemeRegistry.jsx | src/app/ThemeRegistry.tsx | ✅ |
| src/app/layout.jsx | src/app/layout.tsx | ✅ |
| src/app/page.jsx | src/app/page.tsx | ✅ |
| src/data/componentTokenMap.js | src/data/componentTokenMap.ts | ✅ |

### 3. Storybook 설정 ✅

| 이전 파일 | 변환 파일 | 상태 |
|-----------|-----------|------|
| .storybook/main.js | .storybook/main.ts | ✅ |
| .storybook/preview.jsx | .storybook/preview.tsx | ✅ |
| .storybook/vitest.setup.js | .storybook/vitest.setup.ts | ✅ |

### 4. 스토리 파일들 (19개) ✅

**Component 스토리 (10개):**
- [x] Button.stories.tsx
- [x] Card.stories.tsx
- [x] Checkbox.stories.tsx
- [x] Dialog.stories.tsx
- [x] Grid.stories.tsx
- [x] Select.stories.tsx
- [x] Switch.stories.tsx
- [x] Table.stories.tsx
- [x] Tabs.stories.tsx
- [x] TextField.stories.tsx

**Style 스토리 (5개):**
- [x] Colors.stories.tsx
- [x] Typography.stories.tsx
- [x] Icons.stories.tsx
- [x] Overview.stories.tsx
- [x] ComponentTokens.stories.tsx

**Overview 스토리 (2개):**
- [x] Introduction.stories.tsx
- [x] ForDesigners.stories.tsx

**Template/Page 스토리 (2개):**
- [x] template/Introduction.stories.tsx
- [x] page/Introduction.stories.tsx

---

## 남은 작업

### 8. ESLint TypeScript 설정 업데이트

```bash
# 필요한 패키지 설치
bun add -D typescript-eslint

# eslint.config.js 업데이트 필요
```

**수정 내용:**
```typescript
// eslint.config.ts
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // ... existing config
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    }
  }
);
```

### 9. 빌드 검증

```bash
# 1. 개발 서버 테스트
bun run dev

# 2. 프로덕션 빌드 테스트
bun run build

# 3. Storybook 테스트
bun run storybook

# 4. Storybook 빌드 테스트
bun run build-storybook
```

### 10. 최종 정리 (선택)

마이그레이션 완료 후:
1. `tsconfig.json`에서 `allowJs: false`로 변경
2. `strict: true`로 점진적 활성화
3. 타입 에러 수정

---

## 현재 프로젝트 구조

```
/
├── tsconfig.json          ✅ NEW
├── next-env.d.ts          ✅ NEW
├── .storybook/
│   ├── main.ts            ✅ (.js → .ts)
│   ├── preview.tsx        ✅ (.jsx → .tsx)
│   └── vitest.setup.ts    ✅ (.js → .ts)
└── src/
    ├── types/             ✅ NEW
    │   ├── theme.d.ts
    │   ├── storybook.d.ts
    │   └── index.ts
    ├── app/
    │   ├── layout.tsx     ✅ (.jsx → .tsx)
    │   ├── page.tsx       ✅ (.jsx → .tsx)
    │   ├── ThemeRegistry.tsx ✅ (.jsx → .tsx)
    │   ├── globals.css
    │   └── App.css
    ├── styles/
    │   └── theme.ts       ✅ (.js → .ts)
    ├── data/
    │   └── componentTokenMap.ts ✅ (.js → .ts)
    └── stories/
        ├── component/     ✅ (10 .tsx files)
        ├── style/         ✅ (5 .tsx files)
        ├── overview/      ✅ (2 .tsx files)
        ├── template/      ✅ (1 .tsx file)
        └── page/          ✅ (1 .tsx file)
```

---

## 이어서 작업하기

### 바로 다음 단계 명령어:

```bash
# 1. ESLint TypeScript 패키지 설치
bun add -D typescript-eslint

# 2. 빌드 테스트
bun run build

# 3. Storybook 테스트
bun run storybook
```

### 문제 발생 시:

1. **타입 에러**: `tsconfig.json`의 `strict: false` 확인
2. **import 에러**: 경로 alias `@/` 사용 가능
3. **Storybook 에러**: `.storybook/main.ts`의 stories 패턴 확인

---

## 참고 사항

- **MUI 테마 타입 확장**: `src/types/theme.d.ts`에서 customShadows 정의
- **Storybook 타입**: `Meta`, `StoryObj` 타입 사용
- **Grid v7**: `size` prop 사용 (xs, md 등 deprecated)

---

*마지막 업데이트: 2025-12-27 (Storybook 빌드 검증 완료)*
