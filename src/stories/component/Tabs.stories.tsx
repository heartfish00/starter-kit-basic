import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps): React.ReactElement | null {
  return (
    <div
      role="tabpanel"
      hidden={ value !== index }
      id={ `tabpanel-${index}` }
      aria-labelledby={ `tab-${index}` }
    >
      { value === index && (
        <Box sx={ { p: 3 } }>
          { children }
        </Box>
      ) }
    </div>
  );
}

const meta: Meta<typeof Tabs> = {
  title: 'Component/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Tabs

관련 콘텐츠를 그룹화하여 탭으로 전환하는 컴포넌트입니다.

### 주요 특징

| 기능 | 설명 | 예시 |
|------|------|------|
| 기본 사용 | 탭 전환 | \`<Tabs value={0}><Tab label="탭1" />...\` |
| 색상 | primary, secondary | 테마 색상 |
| 변형 | standard, scrollable, fullWidth | 레이아웃 변형 |
| 아이콘 | 아이콘만 또는 아이콘+텍스트 | 시각적 표시 |
        `,
      },
    },
  },
  argTypes: {
    textColor: {
      control: 'select',
      options: ['primary', 'secondary', 'inherit'],
      description: '탭 텍스트의 색상을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    indicatorColor: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: '선택 표시기의 색상을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    variant: {
      control: 'select',
      options: ['standard', 'scrollable', 'fullWidth'],
      description: '탭의 레이아웃 변형을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'standard' },
      },
    },
    centered: {
      control: 'boolean',
      description: '탭을 가운데 정렬합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/** 기본 탭 */
export const Default: Story = {
  render: function DefaultExample(): React.ReactElement {
    const [value, setValue] = React.useState<number>(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Box sx={ { width: 400 } }>
        <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
          <Tabs value={ value } onChange={ handleChange }>
            <Tab label="탭 1" />
            <Tab label="탭 2" />
            <Tab label="탭 3" />
          </Tabs>
        </Box>
        <TabPanel value={ value } index={ 0 }>
          <Typography>탭 1의 내용입니다.</Typography>
        </TabPanel>
        <TabPanel value={ value } index={ 1 }>
          <Typography>탭 2의 내용입니다.</Typography>
        </TabPanel>
        <TabPanel value={ value } index={ 2 }>
          <Typography>탭 3의 내용입니다.</Typography>
        </TabPanel>
      </Box>
    );
  },
};

/** 색상 변형 */
export const Colors: Story = {
  render: function ColorsExample(): React.ReactElement {
    const [value1, setValue1] = React.useState<number>(0);
    const [value2, setValue2] = React.useState<number>(0);

    return (
      <Stack spacing={ 4 }>
        <Box>
          <Typography variant="subtitle2" gutterBottom>Primary (기본)</Typography>
          <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
            <Tabs
              value={ value1 }
              onChange={ (_, newValue) => setValue1(newValue) }
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="탭 1" />
              <Tab label="탭 2" />
              <Tab label="탭 3" />
            </Tabs>
          </Box>
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>Secondary</Typography>
          <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
            <Tabs
              value={ value2 }
              onChange={ (_, newValue) => setValue2(newValue) }
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab label="탭 1" />
              <Tab label="탭 2" />
              <Tab label="탭 3" />
            </Tabs>
          </Box>
        </Box>
      </Stack>
    );
  },
};

/** 가운데 정렬 */
export const Centered: Story = {
  render: function CenteredExample(): React.ReactElement {
    const [value, setValue] = React.useState<number>(0);

    return (
      <Box sx={ { width: 500 } }>
        <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
          <Tabs value={ value } onChange={ (_, newValue) => setValue(newValue) } centered>
            <Tab label="홈" />
            <Tab label="프로필" />
            <Tab label="설정" />
          </Tabs>
        </Box>
      </Box>
    );
  },
};

/** 전체 너비 */
export const FullWidth: Story = {
  render: function FullWidthExample(): React.ReactElement {
    const [value, setValue] = React.useState<number>(0);

    return (
      <Box sx={ { width: 500 } }>
        <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
          <Tabs
            value={ value }
            onChange={ (_, newValue) => setValue(newValue) }
            variant="fullWidth"
          >
            <Tab label="홈" />
            <Tab label="프로필" />
            <Tab label="설정" />
          </Tabs>
        </Box>
      </Box>
    );
  },
};

/** 스크롤 가능한 탭 */
export const Scrollable: Story = {
  render: function ScrollableExample(): React.ReactElement {
    const [value, setValue] = React.useState<number>(0);

    return (
      <Box sx={ { width: 400 } }>
        <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
          <Tabs
            value={ value }
            onChange={ (_, newValue) => setValue(newValue) }
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="탭 1" />
            <Tab label="탭 2" />
            <Tab label="탭 3" />
            <Tab label="탭 4" />
            <Tab label="탭 5" />
            <Tab label="탭 6" />
            <Tab label="탭 7" />
          </Tabs>
        </Box>
      </Box>
    );
  },
};

/** 아이콘 탭 */
export const WithIcons: Story = {
  render: function IconsExample(): React.ReactElement {
    const [value, setValue] = React.useState<number>(0);

    return (
      <Box sx={ { width: 400 } }>
        <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
          <Tabs value={ value } onChange={ (_, newValue) => setValue(newValue) }>
            <Tab icon={ <Box component="span" sx={ { fontSize: 20 } }>🏠</Box> } label="홈" />
            <Tab icon={ <Box component="span" sx={ { fontSize: 20 } }>👤</Box> } label="프로필" />
            <Tab icon={ <Box component="span" sx={ { fontSize: 20 } }>⚙️</Box> } label="설정" />
          </Tabs>
        </Box>
      </Box>
    );
  },
};

/** 아이콘만 있는 탭 */
export const IconOnly: Story = {
  render: function IconOnlyExample(): React.ReactElement {
    const [value, setValue] = React.useState<number>(0);

    return (
      <Box sx={ { width: 300 } }>
        <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
          <Tabs value={ value } onChange={ (_, newValue) => setValue(newValue) } centered>
            <Tab icon={ <Box component="span" sx={ { fontSize: 20 } }>🏠</Box> } aria-label="home" />
            <Tab icon={ <Box component="span" sx={ { fontSize: 20 } }>❤️</Box> } aria-label="favorites" />
            <Tab icon={ <Box component="span" sx={ { fontSize: 20 } }>👤</Box> } aria-label="profile" />
          </Tabs>
        </Box>
      </Box>
    );
  },
};

/** 비활성화된 탭 */
export const DisabledTab: Story = {
  render: function DisabledExample(): React.ReactElement {
    const [value, setValue] = React.useState<number>(0);

    return (
      <Box sx={ { width: 400 } }>
        <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
          <Tabs value={ value } onChange={ (_, newValue) => setValue(newValue) }>
            <Tab label="활성 탭" />
            <Tab label="비활성 탭" disabled />
            <Tab label="활성 탭" />
          </Tabs>
        </Box>
      </Box>
    );
  },
};

/** 세로 탭 */
export const VerticalTabs: Story = {
  render: function VerticalExample(): React.ReactElement {
    const [value, setValue] = React.useState<number>(0);

    return (
      <Box sx={ { display: 'flex', height: 300, width: 500 } }>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={ value }
          onChange={ (_, newValue) => setValue(newValue) }
          sx={ { borderRight: 1, borderColor: 'divider' } }
        >
          <Tab label="프로필" />
          <Tab label="계정" />
          <Tab label="보안" />
          <Tab label="알림" />
          <Tab label="결제" />
        </Tabs>
        <Box sx={ { flexGrow: 1 } }>
          <TabPanel value={ value } index={ 0 }>
            <Typography variant="h6" gutterBottom>프로필 설정</Typography>
            <Typography>프로필 정보를 수정할 수 있습니다.</Typography>
          </TabPanel>
          <TabPanel value={ value } index={ 1 }>
            <Typography variant="h6" gutterBottom>계정 설정</Typography>
            <Typography>계정 정보를 관리합니다.</Typography>
          </TabPanel>
          <TabPanel value={ value } index={ 2 }>
            <Typography variant="h6" gutterBottom>보안 설정</Typography>
            <Typography>비밀번호와 2단계 인증을 설정합니다.</Typography>
          </TabPanel>
          <TabPanel value={ value } index={ 3 }>
            <Typography variant="h6" gutterBottom>알림 설정</Typography>
            <Typography>알림 수신 여부를 설정합니다.</Typography>
          </TabPanel>
          <TabPanel value={ value } index={ 4 }>
            <Typography variant="h6" gutterBottom>결제 설정</Typography>
            <Typography>결제 수단을 관리합니다.</Typography>
          </TabPanel>
        </Box>
      </Box>
    );
  },
};

/** 카드 스타일 탭 */
export const CardTabs: Story = {
  render: function CardTabsExample(): React.ReactElement {
    const [value, setValue] = React.useState<number>(0);

    return (
      <Paper sx={ { width: 500 } }>
        <Tabs
          value={ value }
          onChange={ (_, newValue) => setValue(newValue) }
          sx={ { borderBottom: 1, borderColor: 'divider' } }
        >
          <Tab label="개요" />
          <Tab label="상세정보" />
          <Tab label="리뷰" />
        </Tabs>
        <Box sx={ { p: 2 } }>
          { value === 0 && (
            <Box>
              <Typography variant="h6" gutterBottom>상품 개요</Typography>
              <Typography variant="body2" color="text.secondary">
                이 상품은 최고 품질의 소재로 제작되었습니다. 편안한 착용감과
                세련된 디자인이 특징입니다.
              </Typography>
            </Box>
          ) }
          { value === 1 && (
            <Box>
              <Typography variant="h6" gutterBottom>상세 정보</Typography>
              <Stack spacing={ 1 }>
                <Typography variant="body2">소재: 100% 면</Typography>
                <Typography variant="body2">사이즈: S, M, L, XL</Typography>
                <Typography variant="body2">색상: 블랙, 화이트, 네이비</Typography>
                <Typography variant="body2">세탁: 손세탁 권장</Typography>
              </Stack>
            </Box>
          ) }
          { value === 2 && (
            <Box>
              <Typography variant="h6" gutterBottom>고객 리뷰</Typography>
              <Typography variant="body2" color="text.secondary">
                아직 리뷰가 없습니다. 첫 번째 리뷰를 작성해주세요!
              </Typography>
            </Box>
          ) }
        </Box>
      </Paper>
    );
  },
};

/** 내비게이션 탭 */
export const NavigationTabs: Story = {
  render: function NavigationExample(): React.ReactElement {
    const [value, setValue] = React.useState<number>(0);

    return (
      <Box sx={ { width: '100%', maxWidth: 600 } }>
        <Paper elevation={ 0 } sx={ { borderBottom: 1, borderColor: 'divider' } }>
          <Tabs
            value={ value }
            onChange={ (_, newValue) => setValue(newValue) }
            variant="fullWidth"
          >
            <Tab label="전체" />
            <Tab label="인기" />
            <Tab label="최신" />
            <Tab label="팔로잉" />
          </Tabs>
        </Paper>
        <Box sx={ { p: 2, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
          <Typography color="text.secondary">
            { ['전체 피드', '인기 게시물', '최신 게시물', '팔로잉 피드'][value] } 내용이 표시됩니다.
          </Typography>
        </Box>
      </Box>
    );
  },
};
