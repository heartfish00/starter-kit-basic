import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const meta: Meta<typeof Checkbox> = {
  title: 'Component/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Checkbox

사용자가 하나 이상의 옵션을 선택할 수 있는 체크박스 컴포넌트입니다.

### 주요 특징

| 기능 | 설명 | 예시 |
|------|------|------|
| 단독 사용 | 개별 체크박스 | \`<Checkbox />\` |
| 라벨과 함께 | FormControlLabel 사용 | 동의 체크박스 |
| 그룹 | FormGroup으로 묶기 | 다중 선택 |
| 불확정 상태 | indeterminate prop | 전체 선택 |
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: '체크박스의 선택 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'default'],
      description: '체크박스의 색상을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '체크박스의 크기를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '체크박스의 비활성화 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    indeterminate: {
      control: 'boolean',
      description: '불확정 상태를 표시합니다 (일부 선택됨).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/** 기본 체크박스 */
export const Default: Story = {
  args: {
    checked: false,
    color: 'primary',
    size: 'medium',
  },
};

/** 라벨이 있는 체크박스 */
export const WithLabel: Story = {
  render: () => (
    <FormControlLabel
      control={ <Checkbox defaultChecked /> }
      label="동의합니다"
    />
  ),
};

/** 색상 변형 */
export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={ 2 }>
      <FormControlLabel control={ <Checkbox defaultChecked color="primary" /> } label="Primary" />
      <FormControlLabel control={ <Checkbox defaultChecked color="secondary" /> } label="Secondary" />
      <FormControlLabel control={ <Checkbox defaultChecked color="success" /> } label="Success" />
      <FormControlLabel control={ <Checkbox defaultChecked color="error" /> } label="Error" />
      <FormControlLabel control={ <Checkbox defaultChecked color="info" /> } label="Info" />
      <FormControlLabel control={ <Checkbox defaultChecked color="warning" /> } label="Warning" />
    </Stack>
  ),
};

/** 크기 변형 */
export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={ 2 } alignItems="center">
      <FormControlLabel
        control={ <Checkbox defaultChecked size="small" /> }
        label="Small"
      />
      <FormControlLabel
        control={ <Checkbox defaultChecked size="medium" /> }
        label="Medium"
      />
      <FormControlLabel
        control={ <Checkbox defaultChecked sx={ { '& .MuiSvgIcon-root': { fontSize: 32 } } } /> }
        label="Large (Custom)"
      />
    </Stack>
  ),
};

/** 비활성화 상태 */
export const Disabled: Story = {
  render: () => (
    <Stack direction="row" spacing={ 2 }>
      <FormControlLabel disabled control={ <Checkbox /> } label="미선택 (비활성화)" />
      <FormControlLabel disabled control={ <Checkbox defaultChecked /> } label="선택됨 (비활성화)" />
    </Stack>
  ),
};

/** 불확정 상태 (Indeterminate) */
export const Indeterminate: Story = {
  render: function IndeterminateExample(): React.ReactElement {
    const [checked, setChecked] = React.useState<boolean[]>([true, false]);

    const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };

    const handleChild1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };

    const handleChild2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };

    return (
      <Box>
        <FormControlLabel
          label="부모 항목"
          control={
            <Checkbox
              checked={ checked[0] && checked[1] }
              indeterminate={ checked[0] !== checked[1] }
              onChange={ handleParentChange }
            />
          }
        />
        <Box sx={ { display: 'flex', flexDirection: 'column', ml: 3 } }>
          <FormControlLabel
            label="자식 항목 1"
            control={ <Checkbox checked={ checked[0] } onChange={ handleChild1Change } /> }
          />
          <FormControlLabel
            label="자식 항목 2"
            control={ <Checkbox checked={ checked[1] } onChange={ handleChild2Change } /> }
          />
        </Box>
      </Box>
    );
  },
};

/** 체크박스 그룹 */
export const CheckboxGroup: Story = {
  render: () => (
    <FormControl component="fieldset">
      <FormLabel component="legend">좋아하는 과일을 선택하세요</FormLabel>
      <FormGroup>
        <FormControlLabel control={ <Checkbox defaultChecked /> } label="사과" />
        <FormControlLabel control={ <Checkbox /> } label="바나나" />
        <FormControlLabel control={ <Checkbox /> } label="오렌지" />
        <FormControlLabel control={ <Checkbox disabled /> } label="포도 (품절)" />
      </FormGroup>
    </FormControl>
  ),
};

/** 가로 배열 그룹 */
export const HorizontalGroup: Story = {
  render: () => (
    <FormControl component="fieldset">
      <FormLabel component="legend">알림 설정</FormLabel>
      <FormGroup row>
        <FormControlLabel control={ <Checkbox defaultChecked /> } label="이메일" />
        <FormControlLabel control={ <Checkbox defaultChecked /> } label="SMS" />
        <FormControlLabel control={ <Checkbox /> } label="푸시 알림" />
      </FormGroup>
    </FormControl>
  ),
};

/** 약관 동의 예시 */
export const TermsAgreement: Story = {
  render: function TermsAgreementExample(): React.ReactElement {
    const [state, setState] = React.useState<{
      all: boolean;
      terms: boolean;
      privacy: boolean;
      marketing: boolean;
    }>({
      all: false,
      terms: false,
      privacy: false,
      marketing: false,
    });

    const handleAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;
      setState({
        all: checked,
        terms: checked,
        privacy: checked,
        marketing: checked,
      });
    };

    const handleChange = (name: 'terms' | 'privacy' | 'marketing') => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newState = { ...state, [name]: event.target.checked };
      newState.all = newState.terms && newState.privacy && newState.marketing;
      setState(newState);
    };

    return (
      <Box sx={ { p: 3, border: 1, borderColor: 'divider', borderRadius: 0, minWidth: 320 } }>
        <Typography variant="h6" gutterBottom>
          약관 동의
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={ state.all }
              indeterminate={ !state.all && (state.terms || state.privacy || state.marketing) }
              onChange={ handleAllChange }
            />
          }
          label={ <Typography sx={ { fontWeight: 600 } }>전체 동의</Typography> }
        />
        <Box sx={ { ml: 3, display: 'flex', flexDirection: 'column' } }>
          <FormControlLabel
            control={ <Checkbox checked={ state.terms } onChange={ handleChange('terms') } /> }
            label="이용약관 동의 (필수)"
          />
          <FormControlLabel
            control={ <Checkbox checked={ state.privacy } onChange={ handleChange('privacy') } /> }
            label="개인정보 처리방침 동의 (필수)"
          />
          <FormControlLabel
            control={ <Checkbox checked={ state.marketing } onChange={ handleChange('marketing') } /> }
            label="마케팅 정보 수신 동의 (선택)"
          />
        </Box>
      </Box>
    );
  },
};
