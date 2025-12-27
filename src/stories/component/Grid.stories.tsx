import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const meta: Meta<typeof Grid> = {
  title: 'Component/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Grid

MUI v7 Grid 컴포넌트로 반응형 레이아웃을 구성합니다.

### 중요: v7 문법

| 속성 | 설명 | 예시 |
|------|------|------|
| container | 그리드 컨테이너 | \`<Grid container>\` |
| size | 반응형 크기 (v7 신규) | \`size={{ xs: 12, md: 6 }}\` |
| spacing | 아이템 간격 | \`spacing={2}\` |
| columns | 총 컬럼 수 | \`columns={12}\` |

**주의**: MUI v7에서는 xs, sm, md 등의 props가 아닌 \`size\` prop을 사용합니다.
        `,
      },
    },
  },
  argTypes: {
    spacing: {
      control: { type: 'range', min: 0, max: 10 },
      description: '그리드 아이템 간의 간격을 지정합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    columns: {
      control: { type: 'range', min: 1, max: 24 },
      description: '그리드의 총 컬럼 수를 지정합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '12' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

/** 기본 그리드 */
export const Default: Story = {
  args: {
    spacing: 2,
  },
  render: ({ spacing }) => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ spacing }>
        <Grid size={ { xs: 12, md: 8 } }>
          <Item>xs=12 md=8</Item>
        </Grid>
        <Grid size={ { xs: 12, md: 4 } }>
          <Item>xs=12 md=4</Item>
        </Grid>
        <Grid size={ { xs: 12, md: 4 } }>
          <Item>xs=12 md=4</Item>
        </Grid>
        <Grid size={ { xs: 12, md: 8 } }>
          <Item>xs=12 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** 12컬럼 그리드 */
export const TwelveColumns: Story = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 2 }>
        { [...Array(12)].map((_, index) => (
          <Grid key={ index } size={ { xs: 1 } }>
            <Item>1</Item>
          </Grid>
        )) }
      </Grid>
    </Box>
  ),
};

/** 동일 너비 컬럼 */
export const EqualWidth: Story = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 2 }>
        <Grid size={ { xs: 12, sm: 6, md: 4 } }>
          <Item>xs=12 sm=6 md=4</Item>
        </Grid>
        <Grid size={ { xs: 12, sm: 6, md: 4 } }>
          <Item>xs=12 sm=6 md=4</Item>
        </Grid>
        <Grid size={ { xs: 12, sm: 6, md: 4 } }>
          <Item>xs=12 sm=6 md=4</Item>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** 반응형 레이아웃 */
export const ResponsiveLayout: Story = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 3 }>
        {/* 메인 콘텐츠 */}
        <Grid size={ { xs: 12, md: 8 } }>
          <Item sx={ { minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
            <Typography variant="h6">메인 콘텐츠</Typography>
          </Item>
        </Grid>
        {/* 사이드바 */}
        <Grid size={ { xs: 12, md: 4 } }>
          <Item sx={ { minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
            <Typography variant="h6">사이드바</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** Spacing 비교 */
export const SpacingComparison: Story = {
  render: () => (
    <Box sx={ { display: 'flex', flexDirection: 'column', gap: 4 } }>
      { [0, 1, 2, 3, 4].map((spacing) => (
        <Box key={ spacing }>
          <Typography variant="subtitle2" sx={ { mb: 1 } }>
            spacing={ spacing }
          </Typography>
          <Grid container spacing={ spacing }>
            { [1, 2, 3, 4].map((item) => (
              <Grid key={ item } size={ { xs: 3 } }>
                <Item>{ item }</Item>
              </Grid>
            )) }
          </Grid>
        </Box>
      )) }
    </Box>
  ),
};

/** 중첩 그리드 */
export const NestedGrid: Story = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 2 }>
        <Grid size={ { xs: 12 } }>
          <Item>
            <Typography variant="subtitle1" sx={ { mb: 2 } }>외부 그리드</Typography>
            <Grid container spacing={ 2 }>
              <Grid size={ { xs: 6 } }>
                <Paper elevation={ 2 } sx={ { p: 2, textAlign: 'center' } }>
                  내부 1
                </Paper>
              </Grid>
              <Grid size={ { xs: 6 } }>
                <Paper elevation={ 2 } sx={ { p: 2, textAlign: 'center' } }>
                  내부 2
                </Paper>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** 오프셋 효과 (빈 그리드) */
export const OffsetEffect: Story = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 2 }>
        <Grid size={ { xs: 12, md: 3 } }>
          <Item>md=3</Item>
        </Grid>
        <Grid size={ { xs: 12, md: 6 } }>
          <Item>md=6 (가운데)</Item>
        </Grid>
        <Grid size={ { xs: 12, md: 3 } }>
          <Item>md=3</Item>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** 대시보드 레이아웃 */
export const DashboardLayout: Story = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 3 }>
        {/* 상단 카드 */}
        { [1, 2, 3, 4].map((item) => (
          <Grid key={ item } size={ { xs: 12, sm: 6, md: 3 } }>
            <Item sx={ { py: 3 } }>
              <Typography variant="overline" color="text.secondary">
                통계 { item }
              </Typography>
              <Typography variant="h4" sx={ { fontWeight: 700 } }>
                { Math.floor(Math.random() * 1000) }
              </Typography>
            </Item>
          </Grid>
        )) }

        {/* 메인 차트 */}
        <Grid size={ { xs: 12, md: 8 } }>
          <Item sx={ { height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
            <Typography variant="h6" color="text.secondary">
              메인 차트 영역
            </Typography>
          </Item>
        </Grid>

        {/* 사이드 위젯 */}
        <Grid size={ { xs: 12, md: 4 } }>
          <Item sx={ { height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
            <Typography variant="h6" color="text.secondary">
              사이드 위젯
            </Typography>
          </Item>
        </Grid>

        {/* 하단 테이블 */}
        <Grid size={ { xs: 12 } }>
          <Item sx={ { height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
            <Typography variant="h6" color="text.secondary">
              데이터 테이블 영역
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** 이미지 갤러리 */
export const ImageGallery: Story = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 2 }>
        { [...Array(9)].map((_, index) => (
          <Grid key={ index } size={ { xs: 12, sm: 6, md: 4 } }>
            <Paper
              sx={ {
                height: 200,
                backgroundImage: `url(https://picsum.photos/seed/gallery${index}/400/200)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              } }
            />
          </Grid>
        )) }
      </Grid>
    </Box>
  ),
};

/** 카드 리스트 */
export const CardList: Story = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 3 }>
        { [...Array(6)].map((_, index) => (
          <Grid key={ index } size={ { xs: 12, sm: 6, lg: 4 } }>
            <Paper sx={ { overflow: 'hidden' } }>
              <Box
                sx={ {
                  height: 140,
                  backgroundImage: `url(https://picsum.photos/seed/card${index}/400/140)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                } }
              />
              <Box sx={ { p: 2 } }>
                <Typography variant="subtitle1" sx={ { fontWeight: 600 } }>
                  카드 제목 { index + 1 }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  카드에 대한 간단한 설명이 들어갑니다.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        )) }
      </Grid>
    </Box>
  ),
};

/** Auto 레이아웃 */
export const AutoLayout: Story = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 2 }>
        <Grid size="auto">
          <Item>auto</Item>
        </Grid>
        <Grid size="grow">
          <Item>grow (남은 공간 채움)</Item>
        </Grid>
        <Grid size="auto">
          <Item>auto</Item>
        </Grid>
      </Grid>
    </Box>
  ),
};
