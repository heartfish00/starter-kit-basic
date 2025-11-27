import{j as t}from"./iframe-BWgkq3nG.js";import{B as r}from"./Button-DjpYfm2Y.js";import{S as l}from"./Stack-BlXiqy8W.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-wZLTRCdj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BrHEvKFd.js";import"./useTimeout-BL3CCW4_.js";import"./CircularProgress-CDkyS_V7.js";import"./useThemeProps-BQFY9YMS.js";const f={title:"Component/Button",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## Button

MUI Button 컴포넌트의 다양한 변형을 보여줍니다.

variant, color, size 등의 props를 조합하여 원하는 스타일을 만들 수 있습니다.
        `}}},argTypes:{variant:{control:"select",options:["text","contained","outlined"],description:"버튼의 시각적 스타일을 결정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"text"}}},color:{control:"select",options:["primary","secondary","success","error","info","warning"],description:"버튼의 색상 테마를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},size:{control:"select",options:["small","medium","large"],description:"버튼의 크기를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"버튼의 비활성화 상태를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"버튼을 부모 요소의 전체 너비로 확장합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{control:"text",description:"버튼 내부에 표시될 텍스트 또는 요소입니다.",table:{type:{summary:"ReactNode"}}}}},n={args:{variant:"contained",children:"Button"}},e={args:{variant:"contained",children:"Contained Button"}},a={args:{variant:"outlined",children:"Outlined Button"}},o={args:{variant:"text",children:"Text Button"}},i={render:()=>t.jsxs(l,{spacing:2,direction:"row",children:[t.jsx(r,{variant:"text",children:"Text"}),t.jsx(r,{variant:"contained",children:"Contained"}),t.jsx(r,{variant:"outlined",children:"Outlined"})]})},s={render:()=>t.jsxs(l,{spacing:2,direction:"row",flexWrap:"wrap",useFlexGap:!0,children:[t.jsx(r,{variant:"contained",color:"primary",children:"Primary"}),t.jsx(r,{variant:"contained",color:"secondary",children:"Secondary"}),t.jsx(r,{variant:"contained",color:"success",children:"Success"}),t.jsx(r,{variant:"contained",color:"error",children:"Error"}),t.jsx(r,{variant:"contained",color:"info",children:"Info"}),t.jsx(r,{variant:"contained",color:"warning",children:"Warning"})]})},c={render:()=>t.jsxs(l,{spacing:2,direction:"row",alignItems:"center",children:[t.jsx(r,{variant:"contained",size:"small",children:"Small"}),t.jsx(r,{variant:"contained",size:"medium",children:"Medium"}),t.jsx(r,{variant:"contained",size:"large",children:"Large"})]})},d={render:()=>t.jsxs(l,{spacing:2,direction:"row",children:[t.jsx(r,{variant:"text",disabled:!0,children:"Text"}),t.jsx(r,{variant:"contained",disabled:!0,children:"Contained"}),t.jsx(r,{variant:"outlined",disabled:!0,children:"Outlined"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Button'
  }
}`,...n.parameters?.docs?.source},description:{story:"기본 버튼",...n.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained',
    children: 'Contained Button'
  }
}`,...e.parameters?.docs?.source},description:{story:"Contained 버튼 - 강조가 필요한 주요 액션에 사용",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: 'Outlined Button'
  }
}`,...a.parameters?.docs?.source},description:{story:"Outlined 버튼 - 보조 액션에 사용",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    children: 'Text Button'
  }
}`,...o.parameters?.docs?.source},description:{story:"Text 버튼 - 가장 낮은 강조 수준의 액션에 사용",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
}`,...i.parameters?.docs?.source},description:{story:"모든 Variant 비교",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" color="success">Success</Button>
      <Button variant="contained" color="error">Error</Button>
      <Button variant="contained" color="info">Info</Button>
      <Button variant="contained" color="warning">Warning</Button>
    </Stack>
}`,...s.parameters?.docs?.source},description:{story:"색상 변형 - Primary, Secondary, Success, Error, Info, Warning",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} direction="row" alignItems="center">
      <Button variant="contained" size="small">Small</Button>
      <Button variant="contained" size="medium">Medium</Button>
      <Button variant="contained" size="large">Large</Button>
    </Stack>
}`,...c.parameters?.docs?.source},description:{story:"크기 변형 - Small, Medium, Large",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} direction="row">
      <Button variant="text" disabled>Text</Button>
      <Button variant="contained" disabled>Contained</Button>
      <Button variant="outlined" disabled>Outlined</Button>
    </Stack>
}`,...d.parameters?.docs?.source},description:{story:"비활성화 상태",...d.parameters?.docs?.description}}};const j=["Default","Contained","Outlined","Text","AllVariants","Colors","Sizes","Disabled"];export{i as AllVariants,s as Colors,e as Contained,n as Default,d as Disabled,a as Outlined,c as Sizes,o as Text,j as __namedExportsOrder,f as default};
