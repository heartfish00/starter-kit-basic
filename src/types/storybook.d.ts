import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentType } from 'react';

/**
 * Storybook Type Helpers
 *
 * Storybook 스토리 작성 시 사용하는 타입 헬퍼들입니다.
 */

// Helper type for creating typed stories with a component
export type StoryMeta<T extends ComponentType<any>> = Meta<T>;
export type Story<T extends ComponentType<any>> = StoryObj<T>;

// For render-only stories without a specific component
export interface RenderOnlyStory {
  render: () => React.ReactElement;
  name?: string;
}
