'use client';

import React, { ReactNode, useState } from 'react';
import createCache, { EmotionCache } from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';

/**
 * ThemeRegistry 컴포넌트
 *
 * Props:
 * @param {ReactNode} children - 테마가 적용될 자식 요소들 [Required]
 *
 * Example usage:
 * <ThemeRegistry>{children}</ThemeRegistry>
 */

interface ThemeRegistryProps {
  children: ReactNode;
}

interface CacheState {
  cache: EmotionCache;
  flush: () => string[];
}

// This implementation is based on the MUI Next.js App Router guide
export default function ThemeRegistry({ children }: ThemeRegistryProps): React.ReactElement {
  const [{ cache, flush }] = useState<CacheState>(() => {
    const cache = createCache({ key: 'mui' });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = (): string[] => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
