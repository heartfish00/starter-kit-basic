import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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

const ColoredItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
}));

export default {
  title: 'MUI/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Grid

MUI Grid v7 컴포넌트입니다.

\`size\` prop을 사용하여 반응형 레이아웃을 구성합니다. 12컬럼 시스템을 기반으로 합니다.

### 주요 변경사항 (v7)
- \`xs\`, \`sm\`, \`md\` 등의 props 대신 \`size\` prop 사용
- \`size={{ xs: 12, md: 6 }}\` 형태로 반응형 지정
        `,
      },
    },
  },
  argTypes: {
    container: {
      control: 'boolean',
      description: 'Grid 컨테이너로 설정합니다. 자식 Grid 아이템을 감쌉니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    spacing: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      description: 'Grid 아이템 간의 간격을 지정합니다. (8px 단위)',
      table: {
        type: { summary: 'number | object' },
        defaultValue: { summary: '0' },
      },
    },
    size: {
      control: 'object',
      description: '브레이크포인트별 컬럼 크기를 지정합니다. (xs, sm, md, lg, xl)',
      table: {
        type: { summary: 'number | object' },
      },
    },
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'Flex direction을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'row' },
      },
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
      description: '주축 방향 정렬을 지정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      description: '교차축 방향 정렬을 지정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

/** 기본 그리드 레이아웃 */
export const Default = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 2 }>
        <Grid size={ 8 }>
          <Item>size=8</Item>
        </Grid>
        <Grid size={ 4 }>
          <Item>size=4</Item>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** 기본 그리드 - 8:4 / 4:8 비율 */
export const BasicGrid = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 2 }>
        <Grid size={ 8 }>
          <Item>size=8</Item>
        </Grid>
        <Grid size={ 4 }>
          <Item>size=4</Item>
        </Grid>
        <Grid size={ 4 }>
          <Item>size=4</Item>
        </Grid>
        <Grid size={ 8 }>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** 균등 컬럼 - 3등분 */
export const EqualColumns = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 2 }>
        <Grid size={ 4 }>
          <Item>size=4</Item>
        </Grid>
        <Grid size={ 4 }>
          <Item>size=4</Item>
        </Grid>
        <Grid size={ 4 }>
          <Item>size=4</Item>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** 반응형 그리드 - 브레이크포인트별 다른 크기 */
export const Responsive = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 2 }>
        <Grid size={ { xs: 12, sm: 6, md: 4 } }>
          <ColoredItem>xs=12 sm=6 md=4</ColoredItem>
        </Grid>
        <Grid size={ { xs: 12, sm: 6, md: 4 } }>
          <ColoredItem>xs=12 sm=6 md=4</ColoredItem>
        </Grid>
        <Grid size={ { xs: 12, sm: 6, md: 4 } }>
          <ColoredItem>xs=12 sm=6 md=4</ColoredItem>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** 자동 레이아웃 - grow 사용 */
export const AutoLayout = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 2 }>
        <Grid size="grow">
          <Item>grow</Item>
        </Grid>
        <Grid size={ 6 }>
          <Item>size=6</Item>
        </Grid>
        <Grid size="grow">
          <Item>grow</Item>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** 중첩 그리드 */
export const NestedGrid = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 2 }>
        <Grid size={ 12 }>
          <Item>size=12 (Parent)</Item>
        </Grid>
        <Grid container size={ 12 } spacing={ 2 }>
          <Grid size={ 6 }>
            <ColoredItem>Nested size=6</ColoredItem>
          </Grid>
          <Grid size={ 6 }>
            <ColoredItem>Nested size=6</ColoredItem>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  ),
};

/** Spacing 변형 - 간격 비교 */
export const Spacing = {
  render: () => (
    <Box sx={ { flexGrow: 1 } }>
      <Grid container spacing={ 1 } sx={ { mb: 2 } }>
        <Grid size={ 4 }><Item>spacing=1</Item></Grid>
        <Grid size={ 4 }><Item>spacing=1</Item></Grid>
        <Grid size={ 4 }><Item>spacing=1</Item></Grid>
      </Grid>
      <Grid container spacing={ 2 } sx={ { mb: 2 } }>
        <Grid size={ 4 }><Item>spacing=2</Item></Grid>
        <Grid size={ 4 }><Item>spacing=2</Item></Grid>
        <Grid size={ 4 }><Item>spacing=2</Item></Grid>
      </Grid>
      <Grid container spacing={ 4 }>
        <Grid size={ 4 }><Item>spacing=4</Item></Grid>
        <Grid size={ 4 }><Item>spacing=4</Item></Grid>
        <Grid size={ 4 }><Item>spacing=4</Item></Grid>
      </Grid>
    </Box>
  ),
};
