import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Alert from '@mui/material/Alert';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from '@mui/material/styles';

import { componentTokenMap, tokenCategories, componentList } from '../../data/componentTokenMap';

export default {
  title: 'Style/Component Tokens',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## 컴포넌트별 토큰 사용 가이드

MUI 컴포넌트가 디자인될 때 어떤 테마 토큰을 참조하는지 보여줍니다.

### 목적
- 디자이너가 각 컴포넌트의 스타일링 구조를 이해
- 토큰 변경 시 영향받는 컴포넌트 파악
- 일관된 디자인 시스템 유지

### 토큰 카테고리
| 카테고리 | 설명 | 피그마 비유 |
|----------|------|-------------|
| 🎨 Palette | 색상 | Color Styles |
| 📝 Typography | 타이포그래피 | Text Styles |
| 📐 Spacing | 간격 (8px 기반) | Auto Layout |
| ⬜ Shape | 모양 | Corner Radius |
| 🌑 Shadows | 그림자 | Drop Shadow |
| ⏱️ Transitions | 전환 효과 | Smart Animate |
| 📚 Z-Index | 레이어 순서 | Layer Order |
        `,
      },
    },
  },
};

/** 카테고리 아이콘 컴포넌트 */
const CategoryIcon = ({ category }) => {
  const icons = {
    palette: '🎨',
    typography: '📝',
    spacing: '📐',
    shape: '⬜',
    shadows: '🌑',
    transitions: '⏱️',
    zIndex: '📚',
  };
  return <span>{ icons[category] || '📦' }</span>;
};

/** 토큰 카테고리 칩 */
const TokenCategoryChip = ({ category, count }) => (
  <Chip
    size="small"
    label={
      <Box sx={ { display: 'flex', alignItems: 'center', gap: 0.5 } }>
        <CategoryIcon category={ category } />
        <span>{ tokenCategories[category]?.name || category }</span>
        <Typography component="span" sx={ { fontSize: '10px', opacity: 0.7 } }>
          ({ count })
        </Typography>
      </Box>
    }
    sx={ {
      backgroundColor: 'grey.100',
      '&:hover': { backgroundColor: 'grey.200' },
    } }
  />
);

/** 컴포넌트 프리뷰 렌더러 */
const ComponentPreview = ({ componentName }) => {
  const theme = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const previews = {
    Button: (
      <Box sx={ { display: 'flex', gap: 1, flexWrap: 'wrap' } }>
        <Button variant="contained" size="small">Contained</Button>
        <Button variant="outlined" size="small">Outlined</Button>
        <Button variant="text" size="small">Text</Button>
      </Box>
    ),
    Typography: (
      <Box>
        <Typography variant="h6">Heading</Typography>
        <Typography variant="body2" color="text.secondary">Body text</Typography>
      </Box>
    ),
    TextField: (
      <TextField size="small" label="Label" placeholder="Placeholder" sx={ { width: 200 } } />
    ),
    Select: (
      <FormControl size="small" sx={ { width: 200 } }>
        <InputLabel>Select</InputLabel>
        <Select label="Select" value="">
          <MenuItem value="1">Option 1</MenuItem>
          <MenuItem value="2">Option 2</MenuItem>
        </Select>
      </FormControl>
    ),
    Card: (
      <Card sx={ { width: 200 } }>
        <CardContent sx={ { p: 1.5, '&:last-child': { pb: 1.5 } } }>
          <Typography variant="subtitle2">Card Title</Typography>
          <Typography variant="caption" color="text.secondary">Card content</Typography>
        </CardContent>
      </Card>
    ),
    Table: (
      <Table size="small" sx={ { width: 250 } }>
        <TableHead>
          <TableRow>
            <TableCell sx={ { py: 0.5 } }>Name</TableCell>
            <TableCell sx={ { py: 0.5 } }>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={ { py: 0.5 } }>Item</TableCell>
            <TableCell sx={ { py: 0.5 } }>100</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    Chip: (
      <Box sx={ { display: 'flex', gap: 0.5 } }>
        <Chip label="Default" size="small" />
        <Chip label="Primary" size="small" color="primary" />
        <Chip label="Success" size="small" color="success" />
      </Box>
    ),
    Alert: (
      <Box sx={ { display: 'flex', flexDirection: 'column', gap: 0.5, width: 250 } }>
        <Alert severity="info" sx={ { py: 0 } }>Info message</Alert>
      </Box>
    ),
    Tabs: (
      <Tabs value={ tabValue } onChange={ (e, v) => setTabValue(v) }>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
      </Tabs>
    ),
    Dialog: (
      <>
        <Button variant="outlined" size="small" onClick={ () => setDialogOpen(true) }>
          Open Dialog
        </Button>
        <Dialog open={ dialogOpen } onClose={ () => setDialogOpen(false) } maxWidth="xs">
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogContent>
            <Typography variant="body2">Dialog content goes here.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={ () => setDialogOpen(false) }>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    ),
  };

  return previews[componentName] || <Typography color="text.secondary">Preview not available</Typography>;
};

/** 토큰 상세 테이블 */
const TokenDetailTable = ({ tokens }) => (
  <Box sx={ { mt: 2 } }>
    { Object.entries(tokens).map(([category, data]) => (
      <Box key={ category } sx={ { mb: 3 } }>
        <Box sx={ { display: 'flex', alignItems: 'center', gap: 1, mb: 1 } }>
          <CategoryIcon category={ category } />
          <Typography variant="subtitle2" sx={ { fontWeight: 600 } }>
            { tokenCategories[category]?.name || category }
          </Typography>
        </Box>

        <Paper variant="outlined" sx={ { overflow: 'hidden' } }>
          <Table size="small">
            <TableHead>
              <TableRow sx={ { backgroundColor: 'grey.50' } }>
                <TableCell sx={ { fontWeight: 600, width: '30%' } }>토큰</TableCell>
                <TableCell sx={ { fontWeight: 600 } }>역할</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { data.items.map((item, index) => (
                <TableRow key={ index }>
                  <TableCell>
                    <Typography
                      component="code"
                      sx={ {
                        fontSize: '12px',
                        backgroundColor: 'grey.100',
                        px: 0.75,
                        py: 0.25,
                        borderRadius: 0.5,
                      } }
                    >
                      { item.token }
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{ item.role }</Typography>
                  </TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>

          { (data.affects || data.howToUse) && (
            <Box sx={ { p: 1.5, backgroundColor: 'grey.50', borderTop: '1px solid', borderColor: 'divider' } }>
              { data.affects && (
                <Typography variant="caption" color="text.secondary" sx={ { display: 'block' } }>
                  <strong>영향:</strong> { data.affects }
                </Typography>
              ) }
              { data.howToUse && (
                <Typography variant="caption" color="text.secondary" sx={ { display: 'block' } }>
                  <strong>사용법:</strong> { data.howToUse }
                </Typography>
              ) }
            </Box>
          ) }
        </Paper>
      </Box>
    )) }
  </Box>
);

/** 컴포넌트 프로필 카드 */
const ComponentProfileCard = ({ componentName, isExpanded, onToggle }) => {
  const component = componentTokenMap[componentName];
  if (!component) return null;

  const tokenCount = Object.values(component.tokens).reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );

  return (
    <Paper sx={ { mb: 2, overflow: 'hidden' } }>
      {/* 헤더 */}
      <Box
        onClick={ onToggle }
        sx={ {
          p: 2,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '&:hover': { backgroundColor: 'action.hover' },
        } }
      >
        <Box sx={ { display: 'flex', alignItems: 'center', gap: 2 } }>
          <Typography variant="h6" sx={ { fontWeight: 700 } }>
            { component.name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { component.description }
          </Typography>
        </Box>
        <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
          <Chip label={ `${tokenCount} tokens` } size="small" color="primary" variant="outlined" />
          <Typography sx={ { fontSize: '20px' } }>{ isExpanded ? '▼' : '▶' }</Typography>
        </Box>
      </Box>

      {/* 펼쳐진 내용 */}
      { isExpanded && (
        <Box sx={ { borderTop: '1px solid', borderColor: 'divider' } }>
          <Grid container>
            {/* 왼쪽: 프리뷰 */}
            <Grid size={ { xs: 12, md: 4 } }>
              <Box sx={ { p: 3, backgroundColor: 'grey.50', height: '100%' } }>
                <Typography variant="overline" color="text.secondary" sx={ { display: 'block', mb: 2 } }>
                  Preview
                </Typography>
                <ComponentPreview componentName={ componentName } />

                { component.variants && (
                  <Box sx={ { mt: 3 } }>
                    <Typography variant="caption" color="text.secondary" sx={ { display: 'block', mb: 1 } }>
                      Variants
                    </Typography>
                    <Box sx={ { display: 'flex', gap: 0.5, flexWrap: 'wrap' } }>
                      { component.variants.map((v) => (
                        <Chip key={ v } label={ v } size="small" variant="outlined" />
                      )) }
                    </Box>
                  </Box>
                ) }

                { component.sizes && (
                  <Box sx={ { mt: 2 } }>
                    <Typography variant="caption" color="text.secondary" sx={ { display: 'block', mb: 1 } }>
                      Sizes
                    </Typography>
                    <Box sx={ { display: 'flex', gap: 0.5, flexWrap: 'wrap' } }>
                      { component.sizes.map((s) => (
                        <Chip key={ s } label={ s } size="small" variant="outlined" />
                      )) }
                    </Box>
                  </Box>
                ) }
              </Box>
            </Grid>

            {/* 오른쪽: 토큰 상세 */}
            <Grid size={ { xs: 12, md: 8 } }>
              <Box sx={ { p: 3 } }>
                <Typography variant="overline" color="text.secondary" sx={ { display: 'block', mb: 1 } }>
                  Token Categories
                </Typography>
                <Box sx={ { display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 } }>
                  { Object.entries(component.tokens).map(([category, data]) => (
                    <TokenCategoryChip key={ category } category={ category } count={ data.items.length } />
                  )) }
                </Box>

                <TokenDetailTable tokens={ component.tokens } />

                { component.stateTokens && (
                  <Box sx={ { mt: 3, p: 2, backgroundColor: '#e3f2fd', borderRadius: 1 } }>
                    <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
                      상태별 토큰
                    </Typography>
                    <Grid container spacing={ 1 }>
                      { Object.entries(component.stateTokens).map(([state, token]) => (
                        <Grid size={ { xs: 6 } } key={ state }>
                          <Typography variant="caption">
                            <strong>{ state }:</strong> { token }
                          </Typography>
                        </Grid>
                      )) }
                    </Grid>
                  </Box>
                ) }
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) }
    </Paper>
  );
};

/** 기본 - 전체 컴포넌트 토큰 가이드 */
export const Default = {
  render: () => {
    const [expandedComponents, setExpandedComponents] = useState(['Button']);

    const toggleComponent = (name) => {
      setExpandedComponents((prev) =>
        prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
      );
    };

    const expandAll = () => setExpandedComponents(componentList);
    const collapseAll = () => setExpandedComponents([]);

    return (
      <Box sx={ { maxWidth: 1200 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          Component Token Usage
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 3 } }>
          각 MUI 컴포넌트가 테마의 어떤 토큰을 사용하는지 확인합니다.
        </Typography>

        <Box sx={ { display: 'flex', gap: 1, mb: 3 } }>
          <Button variant="outlined" size="small" onClick={ expandAll }>
            모두 펼치기
          </Button>
          <Button variant="outlined" size="small" onClick={ collapseAll }>
            모두 접기
          </Button>
        </Box>

        { componentList.map((name) => (
          <ComponentProfileCard
            key={ name }
            componentName={ name }
            isExpanded={ expandedComponents.includes(name) }
            onToggle={ () => toggleComponent(name) }
          />
        )) }

        <Paper sx={ { p: 3, mt: 4, backgroundColor: '#fff3e0' } }>
          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
            💡 디자이너를 위한 팁
          </Typography>
          <Typography variant="body2">
            • <strong>palette</strong> 변경 시: 버튼, 칩, 알림 등 대부분의 컬러풀한 컴포넌트에 영향<br />
            • <strong>typography</strong> 변경 시: 모든 텍스트 요소에 영향<br />
            • <strong>shape.borderRadius</strong> 변경 시: 카드, 버튼, 인풋 필드 등 모서리에 영향<br />
            • <strong>spacing</strong> 변경 시: 모든 컴포넌트의 여백에 영향
          </Typography>
        </Paper>
      </Box>
    );
  },
};

/** 요약 - 토큰 카테고리별 영향 매트릭스 */
export const Summary = {
  name: 'Summary Matrix',
  render: () => {
    const categories = ['palette', 'typography', 'spacing', 'shape', 'shadows', 'transitions', 'zIndex'];

    const matrix = componentList.map((name) => {
      const component = componentTokenMap[name];
      return {
        name,
        categories: categories.map((cat) => component?.tokens[cat]?.items.length || 0),
      };
    });

    return (
      <Box sx={ { maxWidth: 1000 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          Token Usage Matrix
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 3 } }>
          컴포넌트 × 토큰 카테고리 매트릭스. 숫자는 사용하는 토큰 개수입니다.
        </Typography>

        <Paper sx={ { overflow: 'auto' } }>
          <Table size="small">
            <TableHead>
              <TableRow sx={ { backgroundColor: 'grey.100' } }>
                <TableCell sx={ { fontWeight: 700, position: 'sticky', left: 0, backgroundColor: 'grey.100' } }>
                  Component
                </TableCell>
                { categories.map((cat) => (
                  <TableCell key={ cat } align="center" sx={ { fontWeight: 600 } }>
                    <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 } }>
                      <CategoryIcon category={ cat } />
                      <Typography variant="caption">{ tokenCategories[cat]?.name }</Typography>
                    </Box>
                  </TableCell>
                )) }
              </TableRow>
            </TableHead>
            <TableBody>
              { matrix.map((row) => (
                <TableRow key={ row.name } sx={ { '&:hover': { backgroundColor: 'action.hover' } } }>
                  <TableCell
                    sx={ {
                      fontWeight: 600,
                      position: 'sticky',
                      left: 0,
                      backgroundColor: 'background.paper',
                    } }
                  >
                    { row.name }
                  </TableCell>
                  { row.categories.map((count, idx) => (
                    <TableCell key={ idx } align="center">
                      { count > 0 ? (
                        <Chip
                          label={ count }
                          size="small"
                          sx={ {
                            minWidth: 32,
                            backgroundColor: count >= 5 ? 'primary.light' : count >= 3 ? 'grey.200' : 'grey.100',
                            color: count >= 5 ? 'primary.contrastText' : 'text.primary',
                          } }
                        />
                      ) : (
                        <Typography color="text.disabled">-</Typography>
                      ) }
                    </TableCell>
                  )) }
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </Paper>

        <Box sx={ { mt: 3, display: 'flex', gap: 2, alignItems: 'center' } }>
          <Typography variant="caption" color="text.secondary">범례:</Typography>
          <Chip label="5+" size="small" sx={ { backgroundColor: 'primary.light', color: 'white' } } />
          <Typography variant="caption">많이 사용</Typography>
          <Chip label="3-4" size="small" sx={ { backgroundColor: 'grey.200' } } />
          <Typography variant="caption">보통</Typography>
          <Chip label="1-2" size="small" sx={ { backgroundColor: 'grey.100' } } />
          <Typography variant="caption">적게 사용</Typography>
        </Box>
      </Box>
    );
  },
};

/** 토큰 중심 뷰 - 특정 토큰이 영향주는 컴포넌트 */
export const ByToken = {
  name: 'By Token',
  render: () => {
    const [selectedCategory, setSelectedCategory] = useState('palette');

    const getComponentsUsingCategory = (category) => {
      return componentList.filter((name) => {
        const component = componentTokenMap[name];
        return component?.tokens[category]?.items.length > 0;
      });
    };

    const affectedComponents = getComponentsUsingCategory(selectedCategory);

    return (
      <Box sx={ { maxWidth: 1000 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          Token → Components
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 3 } }>
          특정 토큰 카테고리를 변경하면 어떤 컴포넌트에 영향을 주는지 확인합니다.
        </Typography>

        <Box sx={ { display: 'flex', gap: 1, mb: 4, flexWrap: 'wrap' } }>
          { Object.keys(tokenCategories).map((cat) => (
            <Chip
              key={ cat }
              label={
                <Box sx={ { display: 'flex', alignItems: 'center', gap: 0.5 } }>
                  <CategoryIcon category={ cat } />
                  { tokenCategories[cat].name }
                </Box>
              }
              onClick={ () => setSelectedCategory(cat) }
              color={ selectedCategory === cat ? 'primary' : 'default' }
              variant={ selectedCategory === cat ? 'filled' : 'outlined' }
            />
          )) }
        </Box>

        <Paper sx={ { p: 3 } }>
          <Box sx={ { display: 'flex', alignItems: 'center', gap: 2, mb: 3 } }>
            <Typography variant="h5" sx={ { fontWeight: 600 } }>
              <CategoryIcon category={ selectedCategory } /> { tokenCategories[selectedCategory]?.name }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { tokenCategories[selectedCategory]?.description }
            </Typography>
          </Box>

          <Alert severity="info" sx={ { mb: 3 } }>
            <strong>{ affectedComponents.length }개 컴포넌트</strong>가 이 토큰 카테고리를 사용합니다.
            이 토큰을 변경하면 아래 컴포넌트들의 스타일이 변경됩니다.
          </Alert>

          <Grid container spacing={ 2 }>
            { affectedComponents.map((name) => {
              const component = componentTokenMap[name];
              const tokens = component?.tokens[selectedCategory]?.items || [];

              return (
                <Grid size={ { xs: 12, sm: 6, md: 4 } } key={ name }>
                  <Paper variant="outlined" sx={ { p: 2, height: '100%' } }>
                    <Typography variant="subtitle1" sx={ { fontWeight: 600, mb: 1 } }>
                      { name }
                    </Typography>
                    <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 0.5 } }>
                      { tokens.map((item, idx) => (
                        <Chip
                          key={ idx }
                          label={ item.token }
                          size="small"
                          sx={ { fontSize: '11px', height: 24 } }
                        />
                      )) }
                    </Box>
                    { component?.tokens[selectedCategory]?.affects && (
                      <Typography variant="caption" color="text.secondary" sx={ { display: 'block', mt: 1 } }>
                        → { component.tokens[selectedCategory].affects }
                      </Typography>
                    ) }
                  </Paper>
                </Grid>
              );
            }) }
          </Grid>
        </Paper>
      </Box>
    );
  },
};
