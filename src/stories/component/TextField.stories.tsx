import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';

const meta: Meta<typeof TextField> = {
  title: 'Component/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## TextField

사용자로부터 텍스트 입력을 받는 필드 컴포넌트입니다.

### 주요 특징

| 기능 | 설명 | 예시 |
|------|------|------|
| 변형 | outlined, filled, standard | 스타일 변형 |
| 크기 | small, medium | 다양한 크기 |
| 라벨 | InputLabel 자동 포함 | 필드명 표시 |
| 헬퍼 텍스트 | 추가 안내 문구 | 입력 가이드 |
| 에러 상태 | 유효성 검사 표시 | 빨간색 강조 |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'TextField의 스타일 변형을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outlined' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'TextField의 크기를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    label: {
      control: 'text',
      description: 'TextField의 라벨을 지정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'TextField의 플레이스홀더를 지정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'TextField의 비활성화 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'boolean',
      description: 'TextField의 에러 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'TextField의 필수 입력 여부를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'TextField를 전체 너비로 확장합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    multiline: {
      control: 'boolean',
      description: 'TextField를 여러 줄 입력 가능하게 합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

/** 기본 TextField */
export const Default: Story = {
  args: {
    label: '이름',
    variant: 'outlined',
    size: 'medium',
  },
};

/** Variant 변형 */
export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={ 2 }>
      <TextField label="Outlined" variant="outlined" />
      <TextField label="Filled" variant="filled" />
      <TextField label="Standard" variant="standard" />
    </Stack>
  ),
};

/** 크기 변형 */
export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={ 2 } alignItems="flex-start">
      <TextField label="Small" size="small" />
      <TextField label="Medium" size="medium" />
    </Stack>
  ),
};

/** 필수 필드 */
export const Required: Story = {
  render: () => (
    <Stack spacing={ 2 }>
      <TextField label="이름" required />
      <TextField label="이메일" required type="email" />
    </Stack>
  ),
};

/** 헬퍼 텍스트 */
export const WithHelperText: Story = {
  render: () => (
    <Stack spacing={ 2 }>
      <TextField
        label="비밀번호"
        type="password"
        helperText="8자 이상, 영문, 숫자, 특수문자 포함"
      />
      <TextField
        label="이메일"
        type="email"
        helperText="example@domain.com 형식으로 입력해주세요"
      />
    </Stack>
  ),
};

/** 에러 상태 */
export const ErrorState: Story = {
  render: () => (
    <Stack spacing={ 2 }>
      <TextField
        label="이메일"
        error
        defaultValue="invalid-email"
        helperText="올바른 이메일 형식이 아닙니다"
      />
      <TextField
        label="비밀번호"
        type="password"
        error
        helperText="비밀번호는 8자 이상이어야 합니다"
      />
    </Stack>
  ),
};

/** 비활성화 상태 */
export const Disabled: Story = {
  render: () => (
    <Stack direction="row" spacing={ 2 }>
      <TextField label="Outlined" disabled defaultValue="비활성화" />
      <TextField label="Filled" variant="filled" disabled defaultValue="비활성화" />
      <TextField label="Standard" variant="standard" disabled defaultValue="비활성화" />
    </Stack>
  ),
};

/** 읽기 전용 */
export const ReadOnly: Story = {
  render: () => (
    <TextField
      label="읽기 전용"
      defaultValue="수정할 수 없는 값입니다"
      slotProps={ {
        input: {
          readOnly: true,
        },
      } }
    />
  ),
};

/** 여러 줄 입력 */
export const Multiline: Story = {
  render: () => (
    <Stack spacing={ 2 } sx={ { width: 300 } }>
      <TextField
        label="메시지"
        multiline
        rows={ 4 }
        placeholder="메시지를 입력하세요..."
      />
      <TextField
        label="자동 높이 조절"
        multiline
        minRows={ 2 }
        maxRows={ 6 }
        placeholder="내용이 늘어나면 자동으로 높이가 조절됩니다"
      />
    </Stack>
  ),
};

/** Select (드롭다운) */
export const SelectField: Story = {
  render: function SelectExample(): React.ReactElement {
    const [value, setValue] = React.useState<string>('');

    return (
      <TextField
        select
        label="국가 선택"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
        sx={ { minWidth: 200 } }
      >
        <MenuItem value="kr">대한민국</MenuItem>
        <MenuItem value="us">미국</MenuItem>
        <MenuItem value="jp">일본</MenuItem>
        <MenuItem value="cn">중국</MenuItem>
      </TextField>
    );
  },
};

/** 입력 타입 */
export const InputTypes: Story = {
  render: () => (
    <Stack spacing={ 2 } sx={ { width: 250 } }>
      <TextField label="텍스트" type="text" placeholder="일반 텍스트" />
      <TextField label="이메일" type="email" placeholder="example@email.com" />
      <TextField label="비밀번호" type="password" placeholder="비밀번호" />
      <TextField label="숫자" type="number" placeholder="0" />
      <TextField label="전화번호" type="tel" placeholder="010-0000-0000" />
      <TextField label="날짜" type="date" slotProps={ { inputLabel: { shrink: true } } } />
      <TextField label="시간" type="time" slotProps={ { inputLabel: { shrink: true } } } />
    </Stack>
  ),
};

/** Adornments (접두사/접미사) */
export const WithAdornments: Story = {
  render: () => (
    <Stack spacing={ 2 } sx={ { width: 250 } }>
      <TextField
        label="금액"
        slotProps={ {
          input: {
            startAdornment: <InputAdornment position="start">₩</InputAdornment>,
          },
        } }
      />
      <TextField
        label="무게"
        slotProps={ {
          input: {
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          },
        } }
      />
      <TextField
        label="웹사이트"
        slotProps={ {
          input: {
            startAdornment: <InputAdornment position="start">https://</InputAdornment>,
          },
        } }
      />
    </Stack>
  ),
};

/** 비밀번호 표시/숨김 */
export const PasswordToggle: Story = {
  render: function PasswordExample(): React.ReactElement {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    return (
      <TextField
        label="비밀번호"
        type={ showPassword ? 'text' : 'password' }
        sx={ { width: 250 } }
        slotProps={ {
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={ () => setShowPassword(!showPassword) }
                  edge="end"
                >
                  <Box component="span" sx={ { fontSize: 20 } }>
                    { showPassword ? '👁️' : '👁️‍🗨️' }
                  </Box>
                </IconButton>
              </InputAdornment>
            ),
          },
        } }
      />
    );
  },
};

/** 검색 필드 */
export const SearchField: Story = {
  render: function SearchExample(): React.ReactElement {
    const [value, setValue] = React.useState<string>('');

    return (
      <TextField
        placeholder="검색어를 입력하세요"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
        sx={ { width: 300 } }
        slotProps={ {
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Box component="span" sx={ { fontSize: 20 } }>🔍</Box>
              </InputAdornment>
            ),
            endAdornment: value && (
              <InputAdornment position="end">
                <IconButton size="small" onClick={ () => setValue('') }>
                  <Box component="span" sx={ { fontSize: 16 } }>✕</Box>
                </IconButton>
              </InputAdornment>
            ),
          },
        } }
      />
    );
  },
};

/** 문자 수 카운터 */
export const CharacterCounter: Story = {
  render: function CounterExample(): React.ReactElement {
    const [value, setValue] = React.useState<string>('');
    const maxLength = 100;

    return (
      <TextField
        label="자기소개"
        multiline
        rows={ 4 }
        value={ value }
        onChange={ (e) => setValue(e.target.value.slice(0, maxLength)) }
        helperText={ `${value.length}/${maxLength}` }
        sx={ { width: 300 } }
      />
    );
  },
};

/** 회원가입 폼 예시 */
export const SignUpForm: Story = {
  render: function SignUpExample(): React.ReactElement {
    const [formData, setFormData] = React.useState<{
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    }>({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const passwordError = formData.confirmPassword && formData.password !== formData.confirmPassword;

    return (
      <Paper sx={ { p: 3, width: 350 } }>
        <Typography variant="h6" gutterBottom>
          회원가입
        </Typography>
        <Stack spacing={ 2 }>
          <TextField
            label="이름"
            required
            fullWidth
            value={ formData.name }
            onChange={ handleChange('name') }
          />
          <TextField
            label="이메일"
            type="email"
            required
            fullWidth
            value={ formData.email }
            onChange={ handleChange('email') }
            helperText="example@email.com"
          />
          <TextField
            label="비밀번호"
            type="password"
            required
            fullWidth
            value={ formData.password }
            onChange={ handleChange('password') }
            helperText="8자 이상"
          />
          <TextField
            label="비밀번호 확인"
            type="password"
            required
            fullWidth
            value={ formData.confirmPassword }
            onChange={ handleChange('confirmPassword') }
            error={ !!passwordError }
            helperText={ passwordError ? '비밀번호가 일치하지 않습니다' : '' }
          />
        </Stack>
      </Paper>
    );
  },
};

/** 주소 입력 폼 */
export const AddressForm: Story = {
  render: () => (
    <Paper sx={ { p: 3, width: 400 } }>
      <Typography variant="h6" gutterBottom>
        배송지 정보
      </Typography>
      <Stack spacing={ 2 }>
        <TextField label="받는 분" required fullWidth />
        <TextField label="연락처" type="tel" required fullWidth placeholder="010-0000-0000" />
        <Box sx={ { display: 'flex', gap: 1 } }>
          <TextField label="우편번호" required sx={ { width: 150 } } />
          <Box sx={ { display: 'flex', alignItems: 'flex-end' } }>
            <Typography
              variant="body2"
              sx={ { color: 'primary.main', cursor: 'pointer', textDecoration: 'underline' } }
            >
              주소 검색
            </Typography>
          </Box>
        </Box>
        <TextField label="기본 주소" required fullWidth />
        <TextField label="상세 주소" fullWidth placeholder="동/호수 등" />
        <TextField label="배송 메모" fullWidth placeholder="부재시 문 앞에 놓아주세요" />
      </Stack>
    </Paper>
  ),
};

/** 모든 상태 비교 */
export const AllStates: Story = {
  render: () => (
    <Stack spacing={ 3 }>
      <Typography variant="subtitle2">기본 상태</Typography>
      <Stack direction="row" spacing={ 2 }>
        <TextField label="Outlined" variant="outlined" defaultValue="텍스트" />
        <TextField label="Filled" variant="filled" defaultValue="텍스트" />
        <TextField label="Standard" variant="standard" defaultValue="텍스트" />
      </Stack>

      <Typography variant="subtitle2">에러 상태</Typography>
      <Stack direction="row" spacing={ 2 }>
        <TextField label="Outlined" variant="outlined" error defaultValue="에러" />
        <TextField label="Filled" variant="filled" error defaultValue="에러" />
        <TextField label="Standard" variant="standard" error defaultValue="에러" />
      </Stack>

      <Typography variant="subtitle2">비활성화 상태</Typography>
      <Stack direction="row" spacing={ 2 }>
        <TextField label="Outlined" variant="outlined" disabled defaultValue="비활성화" />
        <TextField label="Filled" variant="filled" disabled defaultValue="비활성화" />
        <TextField label="Standard" variant="standard" disabled defaultValue="비활성화" />
      </Stack>
    </Stack>
  ),
};
