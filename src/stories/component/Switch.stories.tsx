import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

const meta: Meta<typeof Switch> = {
  title: 'Component/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Switch

두 가지 상태 사이를 전환하는 토글 스위치 컴포넌트입니다.

### 주요 특징

| 기능 | 설명 | 예시 |
|------|------|------|
| 기본 사용 | 온/오프 토글 | \`<Switch checked={true} />\` |
| 라벨 | FormControlLabel 사용 | 설정 항목 |
| 색상 | primary, secondary 등 | 테마 색상 |
| 크기 | small, medium | 다양한 크기 |
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: '스위치의 활성화 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'default'],
      description: '스위치의 색상을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: '스위치의 크기를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '스위치의 비활성화 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

/** 기본 스위치 */
export const Default: Story = {
  args: {
    checked: false,
    color: 'primary',
    size: 'medium',
  },
};

/** 라벨이 있는 스위치 */
export const WithLabel: Story = {
  render: () => (
    <FormControlLabel
      control={ <Switch defaultChecked /> }
      label="알림 받기"
    />
  ),
};

/** 색상 변형 */
export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={ 2 }>
      <FormControlLabel control={ <Switch defaultChecked color="primary" /> } label="Primary" />
      <FormControlLabel control={ <Switch defaultChecked color="secondary" /> } label="Secondary" />
      <FormControlLabel control={ <Switch defaultChecked color="success" /> } label="Success" />
      <FormControlLabel control={ <Switch defaultChecked color="error" /> } label="Error" />
      <FormControlLabel control={ <Switch defaultChecked color="warning" /> } label="Warning" />
      <FormControlLabel control={ <Switch defaultChecked color="info" /> } label="Info" />
    </Stack>
  ),
};

/** 크기 변형 */
export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={ 2 } alignItems="center">
      <FormControlLabel
        control={ <Switch defaultChecked size="small" /> }
        label="Small"
      />
      <FormControlLabel
        control={ <Switch defaultChecked size="medium" /> }
        label="Medium"
      />
    </Stack>
  ),
};

/** 비활성화 상태 */
export const Disabled: Story = {
  render: () => (
    <Stack direction="row" spacing={ 2 }>
      <FormControlLabel disabled control={ <Switch /> } label="비활성화 (Off)" />
      <FormControlLabel disabled control={ <Switch defaultChecked /> } label="비활성화 (On)" />
    </Stack>
  ),
};

/** 라벨 위치 */
export const LabelPlacement: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel
        control={ <Switch defaultChecked /> }
        label="오른쪽 라벨"
        labelPlacement="end"
      />
      <FormControlLabel
        control={ <Switch defaultChecked /> }
        label="왼쪽 라벨"
        labelPlacement="start"
      />
      <FormControlLabel
        control={ <Switch defaultChecked /> }
        label="상단 라벨"
        labelPlacement="top"
      />
      <FormControlLabel
        control={ <Switch defaultChecked /> }
        label="하단 라벨"
        labelPlacement="bottom"
      />
    </FormGroup>
  ),
};

/** 스위치 그룹 */
export const SwitchGroup: Story = {
  render: () => (
    <FormControl component="fieldset">
      <FormLabel component="legend">알림 설정</FormLabel>
      <FormGroup>
        <FormControlLabel control={ <Switch defaultChecked /> } label="이메일 알림" />
        <FormControlLabel control={ <Switch /> } label="SMS 알림" />
        <FormControlLabel control={ <Switch defaultChecked /> } label="푸시 알림" />
        <FormControlLabel control={ <Switch disabled /> } label="마케팅 알림 (비활성화)" />
      </FormGroup>
    </FormControl>
  ),
};

/** 설정 페이지 예시 */
export const SettingsExample: Story = {
  render: function SettingsExample(): React.ReactElement {
    const [settings, setSettings] = React.useState<{
      darkMode: boolean;
      notifications: boolean;
      autoSave: boolean;
      analytics: boolean;
    }>({
      darkMode: false,
      notifications: true,
      autoSave: true,
      analytics: false,
    });

    const handleChange = (name: keyof typeof settings) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setSettings((prev) => ({ ...prev, [name]: event.target.checked }));
    };

    return (
      <Paper sx={ { p: 3, minWidth: 320 } }>
        <Typography variant="h6" gutterBottom>
          설정
        </Typography>
        <Divider sx={ { mb: 2 } } />

        <Box sx={ { display: 'flex', flexDirection: 'column', gap: 1 } }>
          <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
            <Box>
              <Typography variant="body1">다크 모드</Typography>
              <Typography variant="body2" color="text.secondary">
                어두운 테마를 사용합니다
              </Typography>
            </Box>
            <Switch
              checked={ settings.darkMode }
              onChange={ handleChange('darkMode') }
            />
          </Box>

          <Divider />

          <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
            <Box>
              <Typography variant="body1">알림</Typography>
              <Typography variant="body2" color="text.secondary">
                새 소식을 받아봅니다
              </Typography>
            </Box>
            <Switch
              checked={ settings.notifications }
              onChange={ handleChange('notifications') }
            />
          </Box>

          <Divider />

          <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
            <Box>
              <Typography variant="body1">자동 저장</Typography>
              <Typography variant="body2" color="text.secondary">
                변경사항을 자동으로 저장합니다
              </Typography>
            </Box>
            <Switch
              checked={ settings.autoSave }
              onChange={ handleChange('autoSave') }
            />
          </Box>

          <Divider />

          <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
            <Box>
              <Typography variant="body1">사용 통계</Typography>
              <Typography variant="body2" color="text.secondary">
                익명의 사용 데이터를 수집합니다
              </Typography>
            </Box>
            <Switch
              checked={ settings.analytics }
              onChange={ handleChange('analytics') }
            />
          </Box>
        </Box>
      </Paper>
    );
  },
};

/** 기능 토글 예시 */
export const FeatureToggle: Story = {
  render: function FeatureToggleExample(): React.ReactElement {
    const [features, setFeatures] = React.useState<{
      experimental: boolean;
      beta: boolean;
      developer: boolean;
    }>({
      experimental: false,
      beta: true,
      developer: false,
    });

    const handleChange = (name: keyof typeof features) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFeatures((prev) => ({ ...prev, [name]: event.target.checked }));
    };

    return (
      <Paper sx={ { p: 3, minWidth: 400 } }>
        <Typography variant="h6" gutterBottom>
          기능 설정
        </Typography>

        <Stack spacing={ 2 }>
          <Paper variant="outlined" sx={ { p: 2 } }>
            <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } }>
              <Box>
                <Stack direction="row" spacing={ 1 } alignItems="center" sx={ { mb: 0.5 } }>
                  <Typography variant="subtitle1">실험적 기능</Typography>
                  <Typography
                    variant="caption"
                    sx={ {
                      bgcolor: 'warning.light',
                      color: 'warning.contrastText',
                      px: 1,
                      py: 0.25,
                      borderRadius: 1,
                    } }
                  >
                    실험
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  아직 테스트 중인 새로운 기능을 사용해봅니다
                </Typography>
              </Box>
              <Switch
                checked={ features.experimental }
                onChange={ handleChange('experimental') }
                color="warning"
              />
            </Box>
          </Paper>

          <Paper variant="outlined" sx={ { p: 2 } }>
            <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } }>
              <Box>
                <Stack direction="row" spacing={ 1 } alignItems="center" sx={ { mb: 0.5 } }>
                  <Typography variant="subtitle1">베타 기능</Typography>
                  <Typography
                    variant="caption"
                    sx={ {
                      bgcolor: 'info.light',
                      color: 'info.contrastText',
                      px: 1,
                      py: 0.25,
                      borderRadius: 1,
                    } }
                  >
                    베타
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  곧 출시될 베타 기능을 미리 사용합니다
                </Typography>
              </Box>
              <Switch
                checked={ features.beta }
                onChange={ handleChange('beta') }
                color="info"
              />
            </Box>
          </Paper>

          <Paper variant="outlined" sx={ { p: 2 } }>
            <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } }>
              <Box>
                <Stack direction="row" spacing={ 1 } alignItems="center" sx={ { mb: 0.5 } }>
                  <Typography variant="subtitle1">개발자 모드</Typography>
                  <Typography
                    variant="caption"
                    sx={ {
                      bgcolor: 'secondary.light',
                      color: 'secondary.contrastText',
                      px: 1,
                      py: 0.25,
                      borderRadius: 1,
                    } }
                  >
                    고급
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  개발자용 도구와 로그를 표시합니다
                </Typography>
              </Box>
              <Switch
                checked={ features.developer }
                onChange={ handleChange('developer') }
                color="secondary"
              />
            </Box>
          </Paper>
        </Stack>
      </Paper>
    );
  },
};

/** 간단한 온/오프 표시 */
export const OnOffIndicator: Story = {
  render: function OnOffExample(): React.ReactElement {
    const [isOn, setIsOn] = React.useState<boolean>(false);

    return (
      <Box sx={ { display: 'flex', alignItems: 'center', gap: 2 } }>
        <Typography
          variant="body2"
          sx={ { color: isOn ? 'text.disabled' : 'error.main', fontWeight: 500 } }
        >
          OFF
        </Typography>
        <Switch
          checked={ isOn }
          onChange={ (e) => setIsOn(e.target.checked) }
        />
        <Typography
          variant="body2"
          sx={ { color: isOn ? 'success.main' : 'text.disabled', fontWeight: 500 } }
        >
          ON
        </Typography>
      </Box>
    );
  },
};
