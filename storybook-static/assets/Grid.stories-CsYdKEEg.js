import{j as e}from"./iframe-BWgkq3nG.js";import{G as s}from"./Grid-Cw9YSzFF.js";import{B as i}from"./Box-B4QF7xQt.js";import{s as x}from"./memoTheme-wZLTRCdj.js";import{P as l}from"./Paper-BPbdMq_H.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CPxBch2_.js";import"./useThemeProps-BQFY9YMS.js";import"./isMuiElement-Dnj352N-.js";const r=x(l)(({theme:n})=>({backgroundColor:"#fff",...n.typography.body2,padding:n.spacing(2),textAlign:"center",color:(n.vars??n).palette.text.secondary,...n.applyStyles("dark",{backgroundColor:"#1A2027"})})),m=x(l)(({theme:n})=>({padding:n.spacing(2),textAlign:"center",backgroundColor:n.palette.primary.main,color:"#fff"})),y={title:"Component/Grid",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:'\n## Grid\n\nMUI Grid v7 컴포넌트입니다.\n\n`size` prop을 사용하여 반응형 레이아웃을 구성합니다. 12컬럼 시스템을 기반으로 합니다.\n\n### 주요 변경사항 (v7)\n- `xs`, `sm`, `md` 등의 props 대신 `size` prop 사용\n- `size={{ xs: 12, md: 6 }}` 형태로 반응형 지정\n\n### 사용 패턴\n| 패턴 | 설명 | 예시 |\n|------|------|------|\n| 고정 크기 | 숫자로 컬럼 지정 | `size={6}` |\n| 반응형 | 브레이크포인트별 지정 | `size={{ xs: 12, md: 6 }}` |\n| 자동 확장 | 남은 공간 채움 | `size="grow"` |\n        '}}},argTypes:{spacing:{control:"select",options:[0,1,2,3,4,5,6,7,8],description:"Grid 아이템 간의 간격을 지정합니다. (8px 단위)",table:{type:{summary:"number"},defaultValue:{summary:"0"}}}}},d={args:{spacing:2},render:({spacing:n})=>e.jsx(i,{sx:{flexGrow:1},children:e.jsxs(s,{container:!0,spacing:n,children:[e.jsx(s,{size:8,children:e.jsx(r,{children:"size=8"})}),e.jsx(s,{size:4,children:e.jsx(r,{children:"size=4"})}),e.jsx(s,{size:4,children:e.jsx(r,{children:"size=4"})}),e.jsx(s,{size:8,children:e.jsx(r,{children:"size=8"})})]})})},c={args:{spacing:2},render:({spacing:n})=>e.jsx(i,{sx:{flexGrow:1},children:e.jsxs(s,{container:!0,spacing:n,children:[e.jsx(s,{size:4,children:e.jsx(r,{children:"size=4"})}),e.jsx(s,{size:4,children:e.jsx(r,{children:"size=4"})}),e.jsx(s,{size:4,children:e.jsx(r,{children:"size=4"})})]})})},o={args:{spacing:2},render:({spacing:n})=>e.jsx(i,{sx:{flexGrow:1},children:e.jsxs(s,{container:!0,spacing:n,children:[e.jsx(s,{size:{xs:12,sm:6,md:4},children:e.jsx(m,{children:"xs=12 sm=6 md=4"})}),e.jsx(s,{size:{xs:12,sm:6,md:4},children:e.jsx(m,{children:"xs=12 sm=6 md=4"})}),e.jsx(s,{size:{xs:12,sm:6,md:4},children:e.jsx(m,{children:"xs=12 sm=6 md=4"})})]})})},a={args:{spacing:2},render:({spacing:n})=>e.jsx(i,{sx:{flexGrow:1},children:e.jsxs(s,{container:!0,spacing:n,children:[e.jsx(s,{size:"grow",children:e.jsx(r,{children:"grow"})}),e.jsx(s,{size:6,children:e.jsx(r,{children:"size=6"})}),e.jsx(s,{size:"grow",children:e.jsx(r,{children:"grow"})})]})})},t={args:{spacing:2},render:({spacing:n})=>e.jsx(i,{sx:{flexGrow:1},children:e.jsxs(s,{container:!0,spacing:n,children:[e.jsx(s,{size:12,children:e.jsx(r,{children:"size=12 (Parent)"})}),e.jsxs(s,{container:!0,size:12,spacing:n,children:[e.jsx(s,{size:6,children:e.jsx(m,{children:"Nested size=6"})}),e.jsx(s,{size:6,children:e.jsx(m,{children:"Nested size=6"})})]})]})})},p={render:()=>e.jsxs(i,{sx:{flexGrow:1},children:[e.jsxs(s,{container:!0,spacing:1,sx:{mb:2},children:[e.jsx(s,{size:4,children:e.jsx(r,{children:"spacing=1"})}),e.jsx(s,{size:4,children:e.jsx(r,{children:"spacing=1"})}),e.jsx(s,{size:4,children:e.jsx(r,{children:"spacing=1"})})]}),e.jsxs(s,{container:!0,spacing:2,sx:{mb:2},children:[e.jsx(s,{size:4,children:e.jsx(r,{children:"spacing=2"})}),e.jsx(s,{size:4,children:e.jsx(r,{children:"spacing=2"})}),e.jsx(s,{size:4,children:e.jsx(r,{children:"spacing=2"})})]}),e.jsxs(s,{container:!0,spacing:4,children:[e.jsx(s,{size:4,children:e.jsx(r,{children:"spacing=4"})}),e.jsx(s,{size:4,children:e.jsx(r,{children:"spacing=4"})}),e.jsx(s,{size:4,children:e.jsx(r,{children:"spacing=4"})})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 2
  },
  render: ({
    spacing
  }) => <Box sx={{
    flexGrow: 1
  }}>
      <Grid container spacing={spacing}>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </Box>
}`,...d.parameters?.docs?.source},description:{story:"기본 그리드 - spacing 조절 가능",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 2
  },
  render: ({
    spacing
  }) => <Box sx={{
    flexGrow: 1
  }}>
      <Grid container spacing={spacing}>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
      </Grid>
    </Box>
}`,...c.parameters?.docs?.source},description:{story:"균등 컬럼 - 3등분",...c.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 2
  },
  render: ({
    spacing
  }) => <Box sx={{
    flexGrow: 1
  }}>
      <Grid container spacing={spacing}>
        <Grid size={{
        xs: 12,
        sm: 6,
        md: 4
      }}>
          <ColoredItem>xs=12 sm=6 md=4</ColoredItem>
        </Grid>
        <Grid size={{
        xs: 12,
        sm: 6,
        md: 4
      }}>
          <ColoredItem>xs=12 sm=6 md=4</ColoredItem>
        </Grid>
        <Grid size={{
        xs: 12,
        sm: 6,
        md: 4
      }}>
          <ColoredItem>xs=12 sm=6 md=4</ColoredItem>
        </Grid>
      </Grid>
    </Box>
}`,...o.parameters?.docs?.source},description:{story:"반응형 그리드 - 브레이크포인트별 다른 크기",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 2
  },
  render: ({
    spacing
  }) => <Box sx={{
    flexGrow: 1
  }}>
      <Grid container spacing={spacing}>
        <Grid size="grow">
          <Item>grow</Item>
        </Grid>
        <Grid size={6}>
          <Item>size=6</Item>
        </Grid>
        <Grid size="grow">
          <Item>grow</Item>
        </Grid>
      </Grid>
    </Box>
}`,...a.parameters?.docs?.source},description:{story:"자동 레이아웃 - grow 사용",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: 2
  },
  render: ({
    spacing
  }) => <Box sx={{
    flexGrow: 1
  }}>
      <Grid container spacing={spacing}>
        <Grid size={12}>
          <Item>size=12 (Parent)</Item>
        </Grid>
        <Grid container size={12} spacing={spacing}>
          <Grid size={6}>
            <ColoredItem>Nested size=6</ColoredItem>
          </Grid>
          <Grid size={6}>
            <ColoredItem>Nested size=6</ColoredItem>
          </Grid>
        </Grid>
      </Grid>
    </Box>
}`,...t.parameters?.docs?.source},description:{story:"중첩 그리드",...t.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    flexGrow: 1
  }}>
      <Grid container spacing={1} sx={{
      mb: 2
    }}>
        <Grid size={4}><Item>spacing=1</Item></Grid>
        <Grid size={4}><Item>spacing=1</Item></Grid>
        <Grid size={4}><Item>spacing=1</Item></Grid>
      </Grid>
      <Grid container spacing={2} sx={{
      mb: 2
    }}>
        <Grid size={4}><Item>spacing=2</Item></Grid>
        <Grid size={4}><Item>spacing=2</Item></Grid>
        <Grid size={4}><Item>spacing=2</Item></Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid size={4}><Item>spacing=4</Item></Grid>
        <Grid size={4}><Item>spacing=4</Item></Grid>
        <Grid size={4}><Item>spacing=4</Item></Grid>
      </Grid>
    </Box>
}`,...p.parameters?.docs?.source},description:{story:"Spacing 비교 - 다양한 간격 한눈에 보기",...p.parameters?.docs?.description}}};const C=["Default","EqualColumns","Responsive","AutoLayout","NestedGrid","SpacingComparison"];export{a as AutoLayout,d as Default,c as EqualColumns,t as NestedGrid,o as Responsive,p as SpacingComparison,C as __namedExportsOrder,y as default};
