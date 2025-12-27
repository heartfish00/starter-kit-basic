import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

interface RowData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
}

const meta: Meta<typeof Table> = {
  title: 'Component/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Table

데이터를 행과 열로 구조화하여 표시하는 테이블 컴포넌트입니다.

### 구성 요소

| 컴포넌트 | 설명 | 예시 |
|----------|------|------|
| Table | 테이블 컨테이너 | \`<Table>...</Table>\` |
| TableHead | 헤더 영역 | 컬럼 제목 |
| TableBody | 본문 영역 | 데이터 행 |
| TableRow | 행 | 한 줄의 데이터 |
| TableCell | 셀 | 개별 데이터 |
| TablePagination | 페이지네이션 | 페이지 이동 |
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: '테이블의 크기를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    stickyHeader: {
      control: 'boolean',
      description: '헤더를 고정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

/** 샘플 데이터 */
const sampleData: RowData[] = [
  { id: 1, name: '김철수', email: 'kim@example.com', role: '관리자', status: 'active' },
  { id: 2, name: '이영희', email: 'lee@example.com', role: '편집자', status: 'active' },
  { id: 3, name: '박민수', email: 'park@example.com', role: '뷰어', status: 'inactive' },
  { id: 4, name: '정수진', email: 'jung@example.com', role: '편집자', status: 'pending' },
  { id: 5, name: '최동욱', email: 'choi@example.com', role: '뷰어', status: 'active' },
];

/** 기본 테이블 */
export const Default: Story = {
  render: () => (
    <TableContainer component={ Paper }>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>이름</TableCell>
            <TableCell>이메일</TableCell>
            <TableCell>역할</TableCell>
            <TableCell>상태</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { sampleData.map((row) => (
            <TableRow key={ row.id }>
              <TableCell>{ row.name }</TableCell>
              <TableCell>{ row.email }</TableCell>
              <TableCell>{ row.role }</TableCell>
              <TableCell>{ row.status }</TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </TableContainer>
  ),
};

/** 크기 변형 */
export const Sizes: Story = {
  render: () => (
    <Stack spacing={ 4 }>
      <Box>
        <Typography variant="subtitle2" gutterBottom>Small</Typography>
        <TableContainer component={ Paper }>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>이름</TableCell>
                <TableCell>이메일</TableCell>
                <TableCell>역할</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { sampleData.slice(0, 3).map((row) => (
                <TableRow key={ row.id }>
                  <TableCell>{ row.name }</TableCell>
                  <TableCell>{ row.email }</TableCell>
                  <TableCell>{ row.role }</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom>Medium (Default)</Typography>
        <TableContainer component={ Paper }>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>이름</TableCell>
                <TableCell>이메일</TableCell>
                <TableCell>역할</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { sampleData.slice(0, 3).map((row) => (
                <TableRow key={ row.id }>
                  <TableCell>{ row.name }</TableCell>
                  <TableCell>{ row.email }</TableCell>
                  <TableCell>{ row.role }</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  ),
};

/** 상태 칩이 있는 테이블 */
export const WithStatusChips: Story = {
  render: () => {
    const getStatusColor = (status: RowData['status']): 'success' | 'error' | 'warning' => {
      switch (status) {
        case 'active': return 'success';
        case 'inactive': return 'error';
        case 'pending': return 'warning';
        default: return 'warning';
      }
    };

    const getStatusLabel = (status: RowData['status']): string => {
      switch (status) {
        case 'active': return '활성';
        case 'inactive': return '비활성';
        case 'pending': return '대기중';
        default: return status;
      }
    };

    return (
      <TableContainer component={ Paper }>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>이름</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell>역할</TableCell>
              <TableCell>상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { sampleData.map((row) => (
              <TableRow key={ row.id }>
                <TableCell>{ row.name }</TableCell>
                <TableCell>{ row.email }</TableCell>
                <TableCell>{ row.role }</TableCell>
                <TableCell>
                  <Chip
                    label={ getStatusLabel(row.status) }
                    color={ getStatusColor(row.status) }
                    size="small"
                  />
                </TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
};

/** 체크박스가 있는 테이블 */
export const WithCheckbox: Story = {
  render: function CheckboxExample(): React.ReactElement {
    const [selected, setSelected] = React.useState<number[]>([]);

    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        setSelected(sampleData.map((row) => row.id));
      } else {
        setSelected([]);
      }
    };

    const handleSelect = (id: number) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected: number[] = [];

      if (selectedIndex === -1) {
        newSelected = [...selected, id];
      } else {
        newSelected = selected.filter((item) => item !== id);
      }

      setSelected(newSelected);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    return (
      <TableContainer component={ Paper }>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={ selected.length > 0 && selected.length < sampleData.length }
                  checked={ sampleData.length > 0 && selected.length === sampleData.length }
                  onChange={ handleSelectAll }
                />
              </TableCell>
              <TableCell>이름</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell>역할</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { sampleData.map((row) => (
              <TableRow
                key={ row.id }
                selected={ isSelected(row.id) }
                onClick={ () => handleSelect(row.id) }
                sx={ { cursor: 'pointer' } }
              >
                <TableCell padding="checkbox">
                  <Checkbox checked={ isSelected(row.id) } />
                </TableCell>
                <TableCell>{ row.name }</TableCell>
                <TableCell>{ row.email }</TableCell>
                <TableCell>{ row.role }</TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
};

/** 정렬 가능한 테이블 */
export const Sortable: Story = {
  render: function SortableExample(): React.ReactElement {
    const [order, setOrder] = React.useState<'asc' | 'desc'>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof RowData>('name');

    const handleSort = (property: keyof RowData) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    const sortedData = [...sampleData].sort((a, b) => {
      const aValue = a[orderBy];
      const bValue = b[orderBy];
      if (aValue < bValue) return order === 'asc' ? -1 : 1;
      if (aValue > bValue) return order === 'asc' ? 1 : -1;
      return 0;
    });

    return (
      <TableContainer component={ Paper }>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={ orderBy === 'name' }
                  direction={ orderBy === 'name' ? order : 'asc' }
                  onClick={ () => handleSort('name') }
                >
                  이름
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={ orderBy === 'email' }
                  direction={ orderBy === 'email' ? order : 'asc' }
                  onClick={ () => handleSort('email') }
                >
                  이메일
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={ orderBy === 'role' }
                  direction={ orderBy === 'role' ? order : 'asc' }
                  onClick={ () => handleSort('role') }
                >
                  역할
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { sortedData.map((row) => (
              <TableRow key={ row.id }>
                <TableCell>{ row.name }</TableCell>
                <TableCell>{ row.email }</TableCell>
                <TableCell>{ row.role }</TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
};

/** 페이지네이션이 있는 테이블 */
export const WithPagination: Story = {
  render: function PaginationExample(): React.ReactElement {
    const [page, setPage] = React.useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

    const extendedData = [...Array(23)].map((_, index) => ({
      id: index + 1,
      name: `사용자 ${index + 1}`,
      email: `user${index + 1}@example.com`,
      role: ['관리자', '편집자', '뷰어'][index % 3],
      status: (['active', 'inactive', 'pending'] as const)[index % 3],
    }));

    const handleChangePage = (_event: unknown, newPage: number) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return (
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>이메일</TableCell>
                <TableCell>역할</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { extendedData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={ row.id }>
                    <TableCell>{ row.id }</TableCell>
                    <TableCell>{ row.name }</TableCell>
                    <TableCell>{ row.email }</TableCell>
                    <TableCell>{ row.role }</TableCell>
                  </TableRow>
                )) }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={ [5, 10, 25] }
          component="div"
          count={ extendedData.length }
          rowsPerPage={ rowsPerPage }
          page={ page }
          onPageChange={ handleChangePage }
          onRowsPerPageChange={ handleChangeRowsPerPage }
          labelRowsPerPage="페이지당 행:"
        />
      </Paper>
    );
  },
};

/** 아바타가 있는 테이블 */
export const WithAvatar: Story = {
  render: () => (
    <TableContainer component={ Paper }>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>사용자</TableCell>
            <TableCell>이메일</TableCell>
            <TableCell>역할</TableCell>
            <TableCell align="right">액션</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { sampleData.map((row) => (
            <TableRow key={ row.id }>
              <TableCell>
                <Box sx={ { display: 'flex', alignItems: 'center', gap: 2 } }>
                  <Avatar sx={ { bgcolor: 'primary.main' } }>
                    { row.name.charAt(0) }
                  </Avatar>
                  <Typography variant="body2">{ row.name }</Typography>
                </Box>
              </TableCell>
              <TableCell>{ row.email }</TableCell>
              <TableCell>{ row.role }</TableCell>
              <TableCell align="right">
                <IconButton size="small">
                  <Box component="span" sx={ { fontSize: 16 } }>✎</Box>
                </IconButton>
                <IconButton size="small" color="error">
                  <Box component="span" sx={ { fontSize: 16 } }>✕</Box>
                </IconButton>
              </TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </TableContainer>
  ),
};

/** Hover 효과 */
export const HoverEffect: Story = {
  render: () => (
    <TableContainer component={ Paper }>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>이름</TableCell>
            <TableCell>이메일</TableCell>
            <TableCell>역할</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { sampleData.map((row) => (
            <TableRow
              key={ row.id }
              hover
              sx={ { cursor: 'pointer' } }
            >
              <TableCell>{ row.name }</TableCell>
              <TableCell>{ row.email }</TableCell>
              <TableCell>{ row.role }</TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </TableContainer>
  ),
};

/** 줄무늬 테이블 */
export const StripedTable: Story = {
  render: () => (
    <TableContainer component={ Paper }>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>이름</TableCell>
            <TableCell>이메일</TableCell>
            <TableCell>역할</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { sampleData.map((row, index) => (
            <TableRow
              key={ row.id }
              sx={ {
                backgroundColor: index % 2 === 0 ? 'action.hover' : 'transparent',
              } }
            >
              <TableCell>{ row.name }</TableCell>
              <TableCell>{ row.email }</TableCell>
              <TableCell>{ row.role }</TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </TableContainer>
  ),
};

/** 빈 상태 */
export const EmptyState: Story = {
  render: () => (
    <TableContainer component={ Paper }>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>이름</TableCell>
            <TableCell>이메일</TableCell>
            <TableCell>역할</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={ 3 } align="center" sx={ { py: 6 } }>
              <Typography variant="body1" color="text.secondary">
                데이터가 없습니다
              </Typography>
              <Typography variant="body2" color="text.secondary">
                새 항목을 추가해주세요
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ),
};
