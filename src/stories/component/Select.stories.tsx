import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const meta: Meta<typeof Select> = {
  title: 'Component/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Select

드롭다운 메뉴에서 옵션을 선택할 수 있는 컴포넌트입니다.

### 주요 특징

| 기능 | 설명 | 예시 |
|------|------|------|
| 단일 선택 | 하나의 옵션 선택 | \`<Select value={value}>\` |
| 다중 선택 | 여러 옵션 선택 | \`<Select multiple>\` |
| 라벨 | InputLabel 사용 | 필드명 표시 |
| 변형 | outlined, filled, standard | 스타일 변형 |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'Select의 스타일 변형을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'outlined' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Select의 크기를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Select의 비활성화 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Select의 에러 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Select를 전체 너비로 확장합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

/** 기본 Select */
export const Default: Story = {
  render: function DefaultExample(): React.ReactElement {
    const [value, setValue] = React.useState<string>('');

    return (
      <FormControl sx={ { minWidth: 200 } }>
        <InputLabel>옵션 선택</InputLabel>
        <Select
          value={ value }
          label="옵션 선택"
          onChange={ (e: SelectChangeEvent) => setValue(e.target.value) }
        >
          <MenuItem value="option1">옵션 1</MenuItem>
          <MenuItem value="option2">옵션 2</MenuItem>
          <MenuItem value="option3">옵션 3</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

/** Variant 변형 */
export const Variants: Story = {
  render: function VariantsExample(): React.ReactElement {
    const [values, setValues] = React.useState<{ outlined: string; filled: string; standard: string }>({
      outlined: '',
      filled: '',
      standard: '',
    });

    const handleChange = (variant: 'outlined' | 'filled' | 'standard') => (e: SelectChangeEvent) => {
      setValues((prev) => ({ ...prev, [variant]: e.target.value }));
    };

    return (
      <Stack direction="row" spacing={ 2 }>
        <FormControl variant="outlined" sx={ { minWidth: 150 } }>
          <InputLabel>Outlined</InputLabel>
          <Select value={ values.outlined } label="Outlined" onChange={ handleChange('outlined') }>
            <MenuItem value="1">옵션 1</MenuItem>
            <MenuItem value="2">옵션 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled" sx={ { minWidth: 150 } }>
          <InputLabel>Filled</InputLabel>
          <Select value={ values.filled } onChange={ handleChange('filled') }>
            <MenuItem value="1">옵션 1</MenuItem>
            <MenuItem value="2">옵션 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={ { minWidth: 150 } }>
          <InputLabel>Standard</InputLabel>
          <Select value={ values.standard } onChange={ handleChange('standard') }>
            <MenuItem value="1">옵션 1</MenuItem>
            <MenuItem value="2">옵션 2</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    );
  },
};

/** 크기 변형 */
export const Sizes: Story = {
  render: function SizesExample(): React.ReactElement {
    const [values, setValues] = React.useState<{ small: string; medium: string }>({
      small: '',
      medium: '',
    });

    const handleChange = (size: 'small' | 'medium') => (e: SelectChangeEvent) => {
      setValues((prev) => ({ ...prev, [size]: e.target.value }));
    };

    return (
      <Stack direction="row" spacing={ 2 } alignItems="flex-start">
        <FormControl size="small" sx={ { minWidth: 150 } }>
          <InputLabel>Small</InputLabel>
          <Select value={ values.small } label="Small" onChange={ handleChange('small') }>
            <MenuItem value="1">옵션 1</MenuItem>
            <MenuItem value="2">옵션 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="medium" sx={ { minWidth: 150 } }>
          <InputLabel>Medium</InputLabel>
          <Select value={ values.medium } label="Medium" onChange={ handleChange('medium') }>
            <MenuItem value="1">옵션 1</MenuItem>
            <MenuItem value="2">옵션 2</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    );
  },
};

/** 헬퍼 텍스트 */
export const WithHelperText: Story = {
  render: function HelperTextExample(): React.ReactElement {
    const [value, setValue] = React.useState<string>('');

    return (
      <FormControl sx={ { minWidth: 200 } }>
        <InputLabel>국가 선택</InputLabel>
        <Select
          value={ value }
          label="국가 선택"
          onChange={ (e: SelectChangeEvent) => setValue(e.target.value) }
        >
          <MenuItem value="kr">대한민국</MenuItem>
          <MenuItem value="us">미국</MenuItem>
          <MenuItem value="jp">일본</MenuItem>
          <MenuItem value="cn">중국</MenuItem>
        </Select>
        <FormHelperText>거주 국가를 선택해주세요</FormHelperText>
      </FormControl>
    );
  },
};

/** 에러 상태 */
export const ErrorState: Story = {
  render: function ErrorExample(): React.ReactElement {
    const [value, setValue] = React.useState<string>('');

    return (
      <FormControl error sx={ { minWidth: 200 } }>
        <InputLabel>필수 항목</InputLabel>
        <Select
          value={ value }
          label="필수 항목"
          onChange={ (e: SelectChangeEvent) => setValue(e.target.value) }
        >
          <MenuItem value="1">옵션 1</MenuItem>
          <MenuItem value="2">옵션 2</MenuItem>
        </Select>
        <FormHelperText>필수 항목입니다. 선택해주세요.</FormHelperText>
      </FormControl>
    );
  },
};

/** 비활성화 상태 */
export const Disabled: Story = {
  render: () => (
    <Stack direction="row" spacing={ 2 }>
      <FormControl disabled sx={ { minWidth: 150 } }>
        <InputLabel>비활성화</InputLabel>
        <Select value="" label="비활성화">
          <MenuItem value="1">옵션 1</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={ { minWidth: 150 } }>
        <InputLabel>부분 비활성화</InputLabel>
        <Select defaultValue="" label="부분 비활성화">
          <MenuItem value="1">옵션 1</MenuItem>
          <MenuItem value="2" disabled>옵션 2 (비활성화)</MenuItem>
          <MenuItem value="3">옵션 3</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  ),
};

/** 다중 선택 */
export const MultipleSelect: Story = {
  render: function MultipleExample(): React.ReactElement {
    const [values, setValues] = React.useState<string[]>([]);

    const options = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js'];

    return (
      <FormControl sx={ { minWidth: 300 } }>
        <InputLabel>기술 스택</InputLabel>
        <Select
          multiple
          value={ values }
          label="기술 스택"
          onChange={ (e: SelectChangeEvent<string[]>) => setValues(e.target.value as string[]) }
        >
          { options.map((option) => (
            <MenuItem key={ option } value={ option }>
              { option }
            </MenuItem>
          )) }
        </Select>
        <FormHelperText>관심있는 기술을 모두 선택하세요</FormHelperText>
      </FormControl>
    );
  },
};

/** 칩으로 다중 선택 표시 */
export const MultipleWithChips: Story = {
  render: function ChipsExample(): React.ReactElement {
    const [values, setValues] = React.useState<string[]>([]);

    const options = ['디자인', '개발', '기획', '마케팅', 'QA'];

    return (
      <FormControl sx={ { minWidth: 300 } }>
        <InputLabel>부서 선택</InputLabel>
        <Select
          multiple
          value={ values }
          label="부서 선택"
          onChange={ (e: SelectChangeEvent<string[]>) => setValues(e.target.value as string[]) }
          input={ <OutlinedInput label="부서 선택" /> }
          renderValue={ (selected) => (
            <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 0.5 } }>
              { (selected as string[]).map((value) => (
                <Chip key={ value } label={ value } size="small" />
              )) }
            </Box>
          ) }
        >
          { options.map((option) => (
            <MenuItem key={ option } value={ option }>
              { option }
            </MenuItem>
          )) }
        </Select>
      </FormControl>
    );
  },
};

/** 체크박스와 함께 다중 선택 */
export const MultipleWithCheckbox: Story = {
  render: function CheckboxExample(): React.ReactElement {
    const [values, setValues] = React.useState<string[]>([]);

    const options = ['월요일', '화요일', '수요일', '목요일', '금요일'];

    return (
      <FormControl sx={ { minWidth: 250 } }>
        <InputLabel>근무 요일</InputLabel>
        <Select
          multiple
          value={ values }
          label="근무 요일"
          onChange={ (e: SelectChangeEvent<string[]>) => setValues(e.target.value as string[]) }
          renderValue={ (selected) => (selected as string[]).join(', ') }
        >
          { options.map((option) => (
            <MenuItem key={ option } value={ option }>
              <Checkbox checked={ values.indexOf(option) > -1 } />
              <ListItemText primary={ option } />
            </MenuItem>
          )) }
        </Select>
      </FormControl>
    );
  },
};

/** 그룹화된 옵션 */
export const GroupedOptions: Story = {
  render: function GroupedExample(): React.ReactElement {
    const [value, setValue] = React.useState<string>('');

    return (
      <FormControl sx={ { minWidth: 250 } }>
        <InputLabel>카테고리</InputLabel>
        <Select
          value={ value }
          label="카테고리"
          onChange={ (e: SelectChangeEvent) => setValue(e.target.value) }
        >
          <MenuItem disabled sx={ { fontWeight: 600, opacity: 1 } }>
            <Typography variant="caption" color="primary">과일</Typography>
          </MenuItem>
          <MenuItem value="apple" sx={ { pl: 4 } }>사과</MenuItem>
          <MenuItem value="banana" sx={ { pl: 4 } }>바나나</MenuItem>
          <MenuItem value="orange" sx={ { pl: 4 } }>오렌지</MenuItem>

          <MenuItem disabled sx={ { fontWeight: 600, opacity: 1, mt: 1 } }>
            <Typography variant="caption" color="primary">채소</Typography>
          </MenuItem>
          <MenuItem value="carrot" sx={ { pl: 4 } }>당근</MenuItem>
          <MenuItem value="broccoli" sx={ { pl: 4 } }>브로콜리</MenuItem>
          <MenuItem value="spinach" sx={ { pl: 4 } }>시금치</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

/** 필터 예시 */
export const FilterExample: Story = {
  render: function FilterExample(): React.ReactElement {
    const [filters, setFilters] = React.useState<{
      category: string;
      sort: string;
      status: string;
    }>({
      category: '',
      sort: 'newest',
      status: '',
    });

    const handleChange = (field: 'category' | 'sort' | 'status') => (e: SelectChangeEvent) => {
      setFilters((prev) => ({ ...prev, [field]: e.target.value }));
    };

    return (
      <Stack direction="row" spacing={ 2 }>
        <FormControl size="small" sx={ { minWidth: 120 } }>
          <InputLabel>카테고리</InputLabel>
          <Select value={ filters.category } label="카테고리" onChange={ handleChange('category') }>
            <MenuItem value="">전체</MenuItem>
            <MenuItem value="electronics">전자제품</MenuItem>
            <MenuItem value="clothing">의류</MenuItem>
            <MenuItem value="food">식품</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={ { minWidth: 120 } }>
          <InputLabel>정렬</InputLabel>
          <Select value={ filters.sort } label="정렬" onChange={ handleChange('sort') }>
            <MenuItem value="newest">최신순</MenuItem>
            <MenuItem value="popular">인기순</MenuItem>
            <MenuItem value="price_low">가격 낮은순</MenuItem>
            <MenuItem value="price_high">가격 높은순</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={ { minWidth: 120 } }>
          <InputLabel>상태</InputLabel>
          <Select value={ filters.status } label="상태" onChange={ handleChange('status') }>
            <MenuItem value="">전체</MenuItem>
            <MenuItem value="available">판매중</MenuItem>
            <MenuItem value="soldout">품절</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    );
  },
};
