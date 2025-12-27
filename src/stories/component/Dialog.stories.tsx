import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

const meta: Meta<typeof Dialog> = {
  title: 'Component/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Dialog

사용자에게 중요한 정보를 알리거나 결정을 요청하는 모달 컴포넌트입니다.

### 구성 요소

| 컴포넌트 | 설명 | 예시 |
|----------|------|------|
| Dialog | 다이얼로그 컨테이너 | \`<Dialog open={open}>...</Dialog>\` |
| DialogTitle | 제목 영역 | 알림, 확인 제목 |
| DialogContent | 내용 영역 | 메시지, 폼 |
| DialogContentText | 텍스트 내용 | 설명 문구 |
| DialogActions | 액션 버튼 영역 | 확인, 취소 |
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: '다이얼로그의 열림/닫힘 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: '다이얼로그를 최대 너비로 확장합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
      description: '다이얼로그의 최대 너비를 지정합니다.',
      table: {
        type: { summary: 'string | false' },
        defaultValue: { summary: 'sm' },
      },
    },
    fullScreen: {
      control: 'boolean',
      description: '다이얼로그를 전체 화면으로 표시합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/** 기본 다이얼로그 */
export const Default: Story = {
  render: function DefaultExample(): React.ReactElement {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
      <Box>
        <Button variant="contained" onClick={ () => setOpen(true) }>
          다이얼로그 열기
        </Button>
        <Dialog open={ open } onClose={ () => setOpen(false) }>
          <DialogTitle>기본 다이얼로그</DialogTitle>
          <DialogContent>
            <DialogContentText>
              이것은 기본 다이얼로그입니다. 사용자에게 정보를 전달하거나 확인을 요청할 때 사용합니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={ () => setOpen(false) }>닫기</Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  },
};

/** 확인 다이얼로그 (Alert Dialog) */
export const AlertDialog: Story = {
  render: function AlertDialogExample(): React.ReactElement {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
      <Box>
        <Button variant="contained" color="error" onClick={ () => setOpen(true) }>
          삭제하기
        </Button>
        <Dialog open={ open } onClose={ () => setOpen(false) }>
          <DialogTitle>항목을 삭제하시겠습니까?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              이 작업은 되돌릴 수 없습니다. 선택한 항목이 영구적으로 삭제됩니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={ () => setOpen(false) }>취소</Button>
            <Button onClick={ () => setOpen(false) } color="error" variant="contained">
              삭제
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  },
};

/** 폼 다이얼로그 */
export const FormDialog: Story = {
  render: function FormDialogExample(): React.ReactElement {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
      <Box>
        <Button variant="contained" onClick={ () => setOpen(true) }>
          새 항목 추가
        </Button>
        <Dialog open={ open } onClose={ () => setOpen(false) } fullWidth maxWidth="sm">
          <DialogTitle>새 항목 추가</DialogTitle>
          <DialogContent>
            <Stack spacing={ 2 } sx={ { mt: 1 } }>
              <TextField label="제목" fullWidth variant="outlined" />
              <TextField label="설명" fullWidth multiline rows={ 3 } variant="outlined" />
              <TextField label="카테고리" fullWidth variant="outlined" />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={ () => setOpen(false) }>취소</Button>
            <Button onClick={ () => setOpen(false) } variant="contained">
              추가
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  },
};

/** 크기 변형 (maxWidth) */
export const MaxWidthVariants: Story = {
  render: function MaxWidthExample(): React.ReactElement {
    const [open, setOpen] = React.useState<boolean>(false);
    const [maxWidth, setMaxWidth] = React.useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('sm');

    const handleOpen = (size: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
      setMaxWidth(size);
      setOpen(true);
    };

    return (
      <Box>
        <Stack direction="row" spacing={ 2 }>
          <Button variant="outlined" onClick={ () => handleOpen('xs') }>XS</Button>
          <Button variant="outlined" onClick={ () => handleOpen('sm') }>SM</Button>
          <Button variant="outlined" onClick={ () => handleOpen('md') }>MD</Button>
          <Button variant="outlined" onClick={ () => handleOpen('lg') }>LG</Button>
          <Button variant="outlined" onClick={ () => handleOpen('xl') }>XL</Button>
        </Stack>
        <Dialog open={ open } onClose={ () => setOpen(false) } fullWidth maxWidth={ maxWidth }>
          <DialogTitle>{ maxWidth.toUpperCase() } 크기 다이얼로그</DialogTitle>
          <DialogContent>
            <DialogContentText>
              maxWidth="{ maxWidth }" 와 fullWidth 속성이 적용된 다이얼로그입니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={ () => setOpen(false) }>닫기</Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  },
};

/** 스크롤 가능한 다이얼로그 */
export const ScrollableDialog: Story = {
  render: function ScrollableExample(): React.ReactElement {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
      <Box>
        <Button variant="contained" onClick={ () => setOpen(true) }>
          이용약관 보기
        </Button>
        <Dialog open={ open } onClose={ () => setOpen(false) } scroll="paper" maxWidth="sm" fullWidth>
          <DialogTitle>서비스 이용약관</DialogTitle>
          <DialogContent dividers>
            { [...Array(10)].map((_, index) => (
              <Typography key={ index } paragraph>
                제{ index + 1 }조 (목적)
                <br />
                이 약관은 회사가 제공하는 서비스의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및
                책임사항 등 기본적인 사항을 규정함을 목적으로 합니다. 회원은 이 약관에 동의함으로써
                서비스를 이용할 수 있으며, 관련 법령을 준수해야 합니다.
              </Typography>
            )) }
          </DialogContent>
          <DialogActions>
            <Button onClick={ () => setOpen(false) }>동의하지 않음</Button>
            <Button onClick={ () => setOpen(false) } variant="contained">
              동의함
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  },
};

/** 닫기 버튼이 있는 다이얼로그 */
export const WithCloseButton: Story = {
  render: function CloseButtonExample(): React.ReactElement {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
      <Box>
        <Button variant="contained" onClick={ () => setOpen(true) }>
          공지사항
        </Button>
        <Dialog open={ open } onClose={ () => setOpen(false) } maxWidth="sm" fullWidth>
          <DialogTitle sx={ { m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
            <Typography variant="h6">공지사항</Typography>
            <IconButton onClick={ () => setOpen(false) } sx={ { color: 'text.secondary' } }>
              <Box component="span" sx={ { fontSize: 20 } }>✕</Box>
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 1 } }>
              시스템 점검 안내
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2024년 1월 20일 02:00 ~ 06:00 동안 시스템 점검이 예정되어 있습니다.
              해당 시간에는 서비스 이용이 제한될 수 있으니 양해 부탁드립니다.
            </Typography>
          </DialogContent>
        </Dialog>
      </Box>
    );
  },
};

/** 선택 다이얼로그 */
export const SelectionDialog: Story = {
  render: function SelectionExample(): React.ReactElement {
    const [open, setOpen] = React.useState<boolean>(false);
    const [selected, setSelected] = React.useState<string>('');

    const users = [
      { id: '1', name: '김철수', email: 'kim@example.com' },
      { id: '2', name: '이영희', email: 'lee@example.com' },
      { id: '3', name: '박민수', email: 'park@example.com' },
    ];

    const handleSelect = (name: string) => {
      setSelected(name);
      setOpen(false);
    };

    return (
      <Box>
        <Button variant="contained" onClick={ () => setOpen(true) }>
          담당자 선택: { selected || '선택 안됨' }
        </Button>
        <Dialog open={ open } onClose={ () => setOpen(false) } maxWidth="xs" fullWidth>
          <DialogTitle>담당자 선택</DialogTitle>
          <List sx={ { pt: 0 } }>
            { users.map((user) => (
              <ListItem key={ user.id } disablePadding>
                <ListItemButton onClick={ () => handleSelect(user.name) }>
                  <ListItemAvatar>
                    <Avatar sx={ { bgcolor: 'primary.main' } }>
                      { user.name.charAt(0) }
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={ user.name } secondary={ user.email } />
                </ListItemButton>
              </ListItem>
            )) }
          </List>
        </Dialog>
      </Box>
    );
  },
};

/** 로그인 다이얼로그 */
export const LoginDialog: Story = {
  render: function LoginExample(): React.ReactElement {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
      <Box>
        <Button variant="contained" onClick={ () => setOpen(true) }>
          로그인
        </Button>
        <Dialog open={ open } onClose={ () => setOpen(false) } maxWidth="xs" fullWidth>
          <DialogTitle sx={ { textAlign: 'center', pt: 4 } }>로그인</DialogTitle>
          <DialogContent>
            <Stack spacing={ 2 } sx={ { mt: 1 } }>
              <TextField label="이메일" type="email" fullWidth variant="outlined" />
              <TextField label="비밀번호" type="password" fullWidth variant="outlined" />
              <Button variant="contained" fullWidth size="large">
                로그인
              </Button>
              <Typography variant="body2" color="text.secondary" sx={ { textAlign: 'center' } }>
                계정이 없으신가요? <Button variant="text" size="small">회원가입</Button>
              </Typography>
            </Stack>
          </DialogContent>
        </Dialog>
      </Box>
    );
  },
};

/** 확인/취소 다이얼로그 */
export const ConfirmDialog: Story = {
  render: function ConfirmExample(): React.ReactElement {
    const [open, setOpen] = React.useState<boolean>(false);
    const [result, setResult] = React.useState<string>('');

    const handleConfirm = () => {
      setResult('확인됨');
      setOpen(false);
    };

    const handleCancel = () => {
      setResult('취소됨');
      setOpen(false);
    };

    return (
      <Box>
        <Stack direction="row" spacing={ 2 } alignItems="center">
          <Button variant="contained" onClick={ () => setOpen(true) }>
            변경사항 저장
          </Button>
          { result && <Typography variant="body2" color="text.secondary">결과: { result }</Typography> }
        </Stack>
        <Dialog open={ open } onClose={ handleCancel }>
          <DialogTitle>변경사항을 저장하시겠습니까?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              저장하지 않은 변경사항이 있습니다. 저장하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={ handleCancel } color="inherit">
              저장 안 함
            </Button>
            <Button onClick={ handleCancel }>
              취소
            </Button>
            <Button onClick={ handleConfirm } variant="contained">
              저장
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  },
};
