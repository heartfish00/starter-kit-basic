import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

export default {
  title: 'Style/Overview',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Theme 구조

\`src/styles/theme.js\`의 전체 구조를 트리 형태로 탐색합니다.

키를 클릭하면 하위 구조를 펼치거나 접을 수 있습니다.
        `,
      },
    },
  },
};

/** 트리 노드 컴포넌트 */
const TreeNode = ({ keyName, value, depth = 0, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const isObject = typeof value === 'object' && value !== null && !Array.isArray(value);
  const isArray = Array.isArray(value);
  const isExpandable = isObject || isArray;
  const childCount = isExpandable ? Object.keys(value).length : 0;

  // 색상값 감지
  const isColor = typeof value === 'string' && (
    value.startsWith('#') ||
    value.startsWith('rgb') ||
    value.startsWith('rgba')
  );

  // 값 포맷팅
  const formatValue = (val) => {
    if (typeof val === 'string') return `"${val}"`;
    if (typeof val === 'number') return val;
    if (typeof val === 'boolean') return val ? 'true' : 'false';
    if (typeof val === 'function') return 'ƒ()';
    if (val === null) return 'null';
    if (val === undefined) return 'undefined';
    return String(val);
  };

  return (
    <Box sx={ { ml: depth > 0 ? 2 : 0 } }>
      <Box
        onClick={ () => isExpandable && setIsOpen(!isOpen) }
        sx={ {
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          py: 0.5,
          px: 1,
          cursor: isExpandable ? 'pointer' : 'default',
          borderRadius: 1,
          '&:hover': isExpandable ? { backgroundColor: 'action.hover' } : {},
          borderLeft: depth > 0 ? '1px solid' : 'none',
          borderColor: 'divider',
        } }
      >
        {/* 펼침/접힘 아이콘 */}
        { isExpandable ? (
          <Typography
            component="span"
            sx={ {
              width: 16,
              color: 'text.secondary',
              fontSize: '12px',
              fontFamily: 'monospace',
              userSelect: 'none',
            } }
          >
            { isOpen ? '▼' : '▶' }
          </Typography>
        ) : (
          <Box sx={ { width: 16 } } />
        ) }

        {/* 키 이름 */}
        <Typography
          component="span"
          sx={ {
            color: isExpandable ? 'primary.main' : 'secondary.main',
            fontFamily: 'monospace',
            fontSize: '13px',
            fontWeight: isExpandable ? 600 : 400,
          } }
        >
          { keyName }
        </Typography>

        {/* 구분자 */}
        <Typography component="span" sx={ { color: 'text.secondary', fontSize: '13px' } }>
          :
        </Typography>

        {/* 값 또는 타입 정보 */}
        { isExpandable ? (
          <Typography
            component="span"
            sx={ { color: 'text.secondary', fontSize: '12px', fontFamily: 'monospace' } }
          >
            { isArray ? `Array[${childCount}]` : `{${childCount}}` }
          </Typography>
        ) : (
          <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
            { isColor && (
              <Box
                sx={ {
                  width: 14,
                  height: 14,
                  backgroundColor: value,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '2px',
                  flexShrink: 0,
                } }
              />
            ) }
            <Typography
              component="span"
              sx={ {
                color: typeof value === 'string' ? 'success.dark' :
                       typeof value === 'number' ? 'warning.dark' : 'text.primary',
                fontFamily: 'monospace',
                fontSize: '12px',
                maxWidth: 400,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              } }
            >
              { formatValue(value) }
            </Typography>
          </Box>
        ) }
      </Box>

      {/* 하위 노드 */}
      { isExpandable && (
        <Collapse in={ isOpen }>
          <Box>
            { Object.entries(value).map(([childKey, childValue]) => (
              <TreeNode
                key={ childKey }
                keyName={ childKey }
                value={ childValue }
                depth={ depth + 1 }
              />
            )) }
          </Box>
        </Collapse>
      ) }
    </Box>
  );
};

/** 기본 - Theme 트리 탐색기 */
export const Default = {
  render: () => {
    const theme = useTheme();

    // theme 객체에서 순환 참조와 함수를 제외한 주요 키만 추출
    const themeStructure = {
      palette: {
        primary: theme.palette.primary,
        secondary: theme.palette.secondary,
        error: theme.palette.error,
        warning: theme.palette.warning,
        success: theme.palette.success,
        info: theme.palette.info,
        text: theme.palette.text,
        background: theme.palette.background,
        action: theme.palette.action,
        divider: theme.palette.divider,
        grey: theme.palette.grey,
      },
      typography: {
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
        htmlFontSize: theme.typography.htmlFontSize,
        fontWeightLight: theme.typography.fontWeightLight,
        fontWeightRegular: theme.typography.fontWeightRegular,
        fontWeightMedium: theme.typography.fontWeightMedium,
        fontWeightBold: theme.typography.fontWeightBold,
        h1: theme.typography.h1,
        h2: theme.typography.h2,
        h3: theme.typography.h3,
        h4: theme.typography.h4,
        h5: theme.typography.h5,
        h6: theme.typography.h6,
        body1: theme.typography.body1,
        body2: theme.typography.body2,
        subtitle1: theme.typography.subtitle1,
        subtitle2: theme.typography.subtitle2,
        button: theme.typography.button,
        caption: theme.typography.caption,
        overline: theme.typography.overline,
      },
      spacing: {
        unit: 8,
        'spacing(1)': theme.spacing(1),
        'spacing(2)': theme.spacing(2),
        'spacing(3)': theme.spacing(3),
        'spacing(4)': theme.spacing(4),
        'spacing(5)': theme.spacing(5),
        'spacing(6)': theme.spacing(6),
        'spacing(8)': theme.spacing(8),
      },
      shape: theme.shape,
      breakpoints: {
        values: theme.breakpoints.values,
      },
      zIndex: theme.zIndex,
      transitions: {
        duration: theme.transitions.duration,
        easing: theme.transitions.easing,
      },
      shadows: {
        'elevation0': theme.shadows[0],
        'elevation1': theme.shadows[1],
        'elevation2': theme.shadows[2],
        'elevation3': theme.shadows[3],
        'elevation4': theme.shadows[4],
        'elevation8': theme.shadows[8],
        'elevation16': theme.shadows[16],
        'elevation24': theme.shadows[24],
      },
    };

    return (
      <Box sx={ { maxWidth: 900 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          Theme Structure
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={ { mb: 3 } }>
          클릭하여 펼치기/접기 | <code>src/styles/theme.js</code>
        </Typography>

        <Paper sx={ { p: 2, backgroundColor: '#fafafa' } }>
          <Box sx={ { fontFamily: 'monospace' } }>
            { Object.entries(themeStructure).map(([key, value]) => (
              <TreeNode
                key={ key }
                keyName={ key }
                value={ value }
                depth={ 0 }
                defaultOpen={ false }
              />
            )) }
          </Box>
        </Paper>

        <Box sx={ { mt: 3, p: 2, backgroundColor: '#e3f2fd', borderRadius: 1 } }>
          <Typography variant="body2">
            💡 <strong>피그마 비유:</strong> 이 구조는 피그마의 Local Variables 패널과 같습니다.
            각 카테고리(palette, typography 등)가 Variable Collection이고,
            그 안의 값들이 개별 Variable입니다.
          </Typography>
        </Box>
      </Box>
    );
  },
};

/** 테이블 뷰 - 주요 토큰 요약 */
export const TableView = {
  name: 'Table View',
  render: () => {
    const theme = useTheme();

    const tables = [
      {
        title: 'palette',
        description: '색상 토큰',
        data: [
          { key: 'primary.main', value: theme.palette.primary.main },
          { key: 'primary.light', value: theme.palette.primary.light },
          { key: 'primary.dark', value: theme.palette.primary.dark },
          { key: 'secondary.main', value: theme.palette.secondary.main },
          { key: 'error.main', value: theme.palette.error.main },
          { key: 'warning.main', value: theme.palette.warning.main },
          { key: 'success.main', value: theme.palette.success.main },
          { key: 'info.main', value: theme.palette.info.main },
          { key: 'text.primary', value: theme.palette.text.primary },
          { key: 'text.secondary', value: theme.palette.text.secondary },
          { key: 'background.default', value: theme.palette.background.default },
          { key: 'background.paper', value: theme.palette.background.paper },
          { key: 'divider', value: theme.palette.divider },
        ],
      },
      {
        title: 'typography',
        description: '타이포그래피 토큰',
        data: [
          { key: 'fontSize', value: theme.typography.fontSize },
          { key: 'h1.fontSize', value: theme.typography.h1.fontSize },
          { key: 'h2.fontSize', value: theme.typography.h2.fontSize },
          { key: 'h3.fontSize', value: theme.typography.h3.fontSize },
          { key: 'h4.fontSize', value: theme.typography.h4.fontSize },
          { key: 'h5.fontSize', value: theme.typography.h5.fontSize },
          { key: 'h6.fontSize', value: theme.typography.h6.fontSize },
          { key: 'body1.fontSize', value: theme.typography.body1.fontSize },
          { key: 'body2.fontSize', value: theme.typography.body2.fontSize },
          { key: 'caption.fontSize', value: theme.typography.caption.fontSize },
        ],
      },
      {
        title: 'spacing',
        description: '간격 토큰 (8px 기반)',
        data: [
          { key: 'spacing(1)', value: theme.spacing(1) },
          { key: 'spacing(2)', value: theme.spacing(2) },
          { key: 'spacing(3)', value: theme.spacing(3) },
          { key: 'spacing(4)', value: theme.spacing(4) },
          { key: 'spacing(6)', value: theme.spacing(6) },
          { key: 'spacing(8)', value: theme.spacing(8) },
        ],
      },
      {
        title: 'shape',
        description: '모양 토큰',
        data: [
          { key: 'borderRadius', value: `${theme.shape.borderRadius}px` },
        ],
      },
      {
        title: 'breakpoints',
        description: '반응형 분기점',
        data: Object.entries(theme.breakpoints.values).map(([key, value]) => ({
          key,
          value: `${value}px`,
        })),
      },
      {
        title: 'zIndex',
        description: '레이어 순서',
        data: Object.entries(theme.zIndex).map(([key, value]) => ({
          key,
          value,
        })),
      },
    ];

    return (
      <Box sx={ { maxWidth: 800 } }>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          Token Tables
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
          주요 토큰을 테이블 형태로 확인합니다.
        </Typography>

        { tables.map((table) => (
          <Box key={ table.title } sx={ { mb: 4 } }>
            <Typography variant="h6" sx={ { fontWeight: 600, mb: 0.5 } }>
              { table.title }
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={ { display: 'block', mb: 1 } }>
              { table.description }
            </Typography>

            <Paper sx={ { overflow: 'hidden' } }>
              <Box
                component="table"
                sx={ {
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '13px',
                  fontFamily: 'monospace',
                } }
              >
                <Box component="thead" sx={ { backgroundColor: '#f5f5f5' } }>
                  <Box component="tr">
                    <Box component="th" sx={ { p: 1.5, textAlign: 'left', fontWeight: 600 } }>Key</Box>
                    <Box component="th" sx={ { p: 1.5, textAlign: 'left', fontWeight: 600 } }>Value</Box>
                  </Box>
                </Box>
                <Box component="tbody">
                  { table.data.map((row, index) => {
                    const isColor = typeof row.value === 'string' && (
                      row.value.startsWith('#') ||
                      row.value.startsWith('rgb')
                    );
                    return (
                      <Box
                        component="tr"
                        key={ row.key }
                        sx={ {
                          borderTop: '1px solid',
                          borderColor: 'divider',
                          '&:hover': { backgroundColor: 'action.hover' },
                        } }
                      >
                        <Box component="td" sx={ { p: 1.5, color: 'primary.main' } }>
                          { row.key }
                        </Box>
                        <Box component="td" sx={ { p: 1.5, display: 'flex', alignItems: 'center', gap: 1 } }>
                          { isColor && (
                            <Box
                              sx={ {
                                width: 16,
                                height: 16,
                                backgroundColor: row.value,
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: '2px',
                              } }
                            />
                          ) }
                          <span>{ row.value }</span>
                        </Box>
                      </Box>
                    );
                  }) }
                </Box>
              </Box>
            </Paper>
          </Box>
        )) }
      </Box>
    );
  },
};
