import '@mui/material/styles';

/**
 * MUI Theme Type Extensions
 *
 * 이 파일은 MUI 테마의 커스텀 속성들을 TypeScript에서 인식할 수 있도록
 * 타입을 확장합니다.
 */

// Custom shadow tokens interface
export interface CustomShadows {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadows;
  }

  interface ThemeOptions {
    customShadows?: CustomShadows;
  }

  interface TypographyVariants {
    headingFontFamily: string;
  }

  interface TypographyVariantsOptions {
    headingFontFamily?: string;
  }
}
