import{r as i,j as e}from"./iframe-BWgkq3nG.js";import{T as n,a}from"./Tab-C8goB82A.js";import{B as o}from"./Box-B4QF7xQt.js";import{T}from"./Typography-Crr089TM.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CPxBch2_.js";import"./memoTheme-wZLTRCdj.js";import"./useSlotProps-D3eyalIf.js";import"./useSlot-OsDyiYkB.js";import"./useTimeout-BL3CCW4_.js";import"./ButtonBase-BrHEvKFd.js";import"./KeyboardArrowRight-K3a6UMEd.js";import"./createSvgIcon-B2KGxEB9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const _={title:"Component/Tabs",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## Tabs

탭 네비게이션 컴포넌트입니다. 관련된 콘텐츠 그룹 간의 전환을 제공합니다.

### 사용 패턴

| 패턴 | 설명 | 예시 |
|------|------|------|
| Basic | 기본 탭 | \`<Tabs><Tab label="탭1" /></Tabs>\` |
| Centered | 중앙 정렬 | \`centered\` prop |
| Scrollable | 스크롤 가능 | \`variant="scrollable"\` |
| Vertical | 세로 방향 | \`orientation="vertical"\` |
        `}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"탭의 방향을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"horizontal"}}},variant:{control:"select",options:["standard","scrollable","fullWidth"],description:"탭의 레이아웃 변형을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"standard"}}},centered:{control:"boolean",description:"탭을 중앙에 배치합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},textColor:{control:"select",options:["inherit","primary","secondary"],description:"탭 텍스트 색상을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},indicatorColor:{control:"select",options:["primary","secondary"],description:"탭 인디케이터 색상을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}}}},d=({children:r,value:l,index:s,...t})=>e.jsx("div",{role:"tabpanel",hidden:l!==s,id:`tabpanel-${s}`,"aria-labelledby":`tab-${s}`,...t,children:l===s&&e.jsx(o,{sx:{p:3},children:e.jsx(T,{children:r})})}),b={args:{orientation:"horizontal",variant:"standard",centered:!1,textColor:"primary",indicatorColor:"primary"},render:r=>{const[l,s]=i.useState(0),t=(y,c)=>{s(c)};return e.jsxs(o,{sx:{width:"100%"},children:[e.jsx(o,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(n,{value:l,onChange:t,orientation:r.orientation,variant:r.variant,centered:r.centered,textColor:r.textColor,indicatorColor:r.indicatorColor,children:[e.jsx(a,{label:"탭 1"}),e.jsx(a,{label:"탭 2"}),e.jsx(a,{label:"탭 3"})]})}),e.jsx(d,{value:l,index:0,children:"첫 번째 탭의 콘텐츠입니다."}),e.jsx(d,{value:l,index:1,children:"두 번째 탭의 콘텐츠입니다."}),e.jsx(d,{value:l,index:2,children:"세 번째 탭의 콘텐츠입니다."})]})}},u={render:()=>{const[r,l]=i.useState(0);return e.jsx(o,{sx:{width:"100%"},children:e.jsxs(n,{value:r,onChange:(s,t)=>l(t),centered:!0,children:[e.jsx(a,{label:"홈"}),e.jsx(a,{label:"프로필"}),e.jsx(a,{label:"설정"})]})})}},x={render:()=>{const[r,l]=i.useState(0);return e.jsx(o,{sx:{width:"100%"},children:e.jsxs(n,{value:r,onChange:(s,t)=>l(t),variant:"fullWidth",children:[e.jsx(a,{label:"전화"}),e.jsx(a,{label:"즐겨찾기"}),e.jsx(a,{label:"최근"})]})})}},p={render:()=>{const[r,l]=i.useState(0);return e.jsx(o,{sx:{maxWidth:480},children:e.jsxs(n,{value:r,onChange:(s,t)=>l(t),variant:"scrollable",scrollButtons:"auto",children:[e.jsx(a,{label:"아이템 1"}),e.jsx(a,{label:"아이템 2"}),e.jsx(a,{label:"아이템 3"}),e.jsx(a,{label:"아이템 4"}),e.jsx(a,{label:"아이템 5"}),e.jsx(a,{label:"아이템 6"}),e.jsx(a,{label:"아이템 7"})]})})}},m={render:()=>{const[r,l]=i.useState(0);return e.jsxs(o,{sx:{display:"flex",height:224,bgcolor:"background.paper"},children:[e.jsxs(n,{orientation:"vertical",variant:"scrollable",value:r,onChange:(s,t)=>l(t),sx:{borderRight:1,borderColor:"divider"},children:[e.jsx(a,{label:"아이템 1"}),e.jsx(a,{label:"아이템 2"}),e.jsx(a,{label:"아이템 3"}),e.jsx(a,{label:"아이템 4"})]}),e.jsx(d,{value:r,index:0,children:"아이템 1의 내용"}),e.jsx(d,{value:r,index:1,children:"아이템 2의 내용"}),e.jsx(d,{value:r,index:2,children:"아이템 3의 내용"}),e.jsx(d,{value:r,index:3,children:"아이템 4의 내용"})]})}},v={render:()=>{const[r,l]=i.useState(0),[s,t]=i.useState(0);return e.jsxs(o,{sx:{display:"flex",flexDirection:"column",gap:4},children:[e.jsxs(o,{children:[e.jsx(T,{variant:"subtitle2",sx:{mb:1},children:"Primary (기본)"}),e.jsxs(n,{value:r,onChange:(y,c)=>l(c),textColor:"primary",indicatorColor:"primary",children:[e.jsx(a,{label:"탭 1"}),e.jsx(a,{label:"탭 2"}),e.jsx(a,{label:"탭 3"})]})]}),e.jsxs(o,{children:[e.jsx(T,{variant:"subtitle2",sx:{mb:1},children:"Secondary"}),e.jsxs(n,{value:s,onChange:(y,c)=>t(c),textColor:"secondary",indicatorColor:"secondary",children:[e.jsx(a,{label:"탭 1"}),e.jsx(a,{label:"탭 2"}),e.jsx(a,{label:"탭 3"})]})]})]})}},h={render:()=>{const[r,l]=i.useState(0);return e.jsxs(n,{value:r,onChange:(s,t)=>l(t),children:[e.jsx(a,{label:"활성"}),e.jsx(a,{label:"비활성",disabled:!0}),e.jsx(a,{label:"활성"})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'standard',
    centered: false,
    textColor: 'primary',
    indicatorColor: 'primary'
  },
  render: args => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return <Box sx={{
      width: '100%'
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: 'divider'
      }}>
          <Tabs value={value} onChange={handleChange} orientation={args.orientation} variant={args.variant} centered={args.centered} textColor={args.textColor} indicatorColor={args.indicatorColor}>
            <Tab label="탭 1" />
            <Tab label="탭 2" />
            <Tab label="탭 3" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          첫 번째 탭의 콘텐츠입니다.
        </TabPanel>
        <TabPanel value={value} index={1}>
          두 번째 탭의 콘텐츠입니다.
        </TabPanel>
        <TabPanel value={value} index={2}>
          세 번째 탭의 콘텐츠입니다.
        </TabPanel>
      </Box>;
  }
}`,...b.parameters?.docs?.source},description:{story:"기본 탭",...b.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: '100%'
    }}>
        <Tabs value={value} onChange={(e, v) => setValue(v)} centered>
          <Tab label="홈" />
          <Tab label="프로필" />
          <Tab label="설정" />
        </Tabs>
      </Box>;
  }
}`,...u.parameters?.docs?.source},description:{story:"중앙 정렬 탭",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      width: '100%'
    }}>
        <Tabs value={value} onChange={(e, v) => setValue(v)} variant="fullWidth">
          <Tab label="전화" />
          <Tab label="즐겨찾기" />
          <Tab label="최근" />
        </Tabs>
      </Box>;
  }
}`,...x.parameters?.docs?.source},description:{story:"전체 너비 탭",...x.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      maxWidth: 480
    }}>
        <Tabs value={value} onChange={(e, v) => setValue(v)} variant="scrollable" scrollButtons="auto">
          <Tab label="아이템 1" />
          <Tab label="아이템 2" />
          <Tab label="아이템 3" />
          <Tab label="아이템 4" />
          <Tab label="아이템 5" />
          <Tab label="아이템 6" />
          <Tab label="아이템 7" />
        </Tabs>
      </Box>;
  }
}`,...p.parameters?.docs?.source},description:{story:"스크롤 가능한 탭",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Box sx={{
      display: 'flex',
      height: 224,
      bgcolor: 'background.paper'
    }}>
        <Tabs orientation="vertical" variant="scrollable" value={value} onChange={(e, v) => setValue(v)} sx={{
        borderRight: 1,
        borderColor: 'divider'
      }}>
          <Tab label="아이템 1" />
          <Tab label="아이템 2" />
          <Tab label="아이템 3" />
          <Tab label="아이템 4" />
        </Tabs>
        <TabPanel value={value} index={0}>
          아이템 1의 내용
        </TabPanel>
        <TabPanel value={value} index={1}>
          아이템 2의 내용
        </TabPanel>
        <TabPanel value={value} index={2}>
          아이템 3의 내용
        </TabPanel>
        <TabPanel value={value} index={3}>
          아이템 4의 내용
        </TabPanel>
      </Box>;
  }
}`,...m.parameters?.docs?.source},description:{story:"세로 방향 탭",...m.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    return <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
        <Box>
          <Typography variant="subtitle2" sx={{
          mb: 1
        }}>Primary (기본)</Typography>
          <Tabs value={value1} onChange={(e, v) => setValue1(v)} textColor="primary" indicatorColor="primary">
            <Tab label="탭 1" />
            <Tab label="탭 2" />
            <Tab label="탭 3" />
          </Tabs>
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{
          mb: 1
        }}>Secondary</Typography>
          <Tabs value={value2} onChange={(e, v) => setValue2(v)} textColor="secondary" indicatorColor="secondary">
            <Tab label="탭 1" />
            <Tab label="탭 2" />
            <Tab label="탭 3" />
          </Tabs>
        </Box>
      </Box>;
  }
}`,...v.parameters?.docs?.source},description:{story:"색상 변형",...v.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <Tabs value={value} onChange={(e, v) => setValue(v)}>
        <Tab label="활성" />
        <Tab label="비활성" disabled />
        <Tab label="활성" />
      </Tabs>;
  }
}`,...h.parameters?.docs?.source},description:{story:"비활성화 탭",...h.parameters?.docs?.description}}};const k=["Default","Centered","FullWidth","Scrollable","Vertical","Colors","Disabled"];export{u as Centered,v as Colors,b as Default,h as Disabled,x as FullWidth,p as Scrollable,m as Vertical,k as __namedExportsOrder,_ as default};
