import{r as B,u as X,c as q,j as t,a as u}from"./iframe-BWgkq3nG.js";import{c as H}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{S as J}from"./SwitchBase-D25N7mk3.js";import{a as K,g as Q,s as $,c as Y,m as L}from"./memoTheme-wZLTRCdj.js";import{u as O}from"./useSlot-OsDyiYkB.js";import{F as s,a as Z}from"./FormControlLabel-_vhCaGsK.js";import{S as z}from"./Stack-BlXiqy8W.js";import{F as ee,a as te}from"./FormLabel-DMuR5-Ws.js";import{B as F}from"./Box-B4QF7xQt.js";import{T as l}from"./Typography-Crr089TM.js";import{P as R}from"./Paper-BPbdMq_H.js";import{D as W}from"./Divider-DpaNVM42.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C3e22Fhs.js";import"./ButtonBase-BrHEvKFd.js";import"./useTimeout-BL3CCW4_.js";import"./useThemeProps-BQFY9YMS.js";import"./isMuiElement-Dnj352N-.js";import"./useTheme-CPxBch2_.js";import"./dividerClasses-B3yZpvVG.js";function re(e){return Q("MuiSwitch",e)}const c=K("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),oe=e=>{const{classes:r,edge:a,size:n,color:d,checked:p,disabled:h}=e,b={root:["root",a&&`edge${u(a)}`,`size${u(n)}`],switchBase:["switchBase",`color${u(d)}`,p&&"checked",h&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},I=Y(b,re,r);return{...r,...I}},ae=$("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,a.edge&&r[`edge${u(a.edge)}`],r[`size${u(a.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${c.thumb}`]:{width:16,height:16},[`& .${c.switchBase}`]:{padding:4,[`&.${c.checked}`]:{transform:"translateX(16px)"}}}}]}),se=$(J,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.switchBase,{[`& .${c.input}`]:r.input},a.color!=="default"&&r[`color${u(a.color)}`]]}})(L(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${c.checked}`]:{transform:"translateX(20px)"},[`&.${c.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${c.checked} + .${c.track}`]:{opacity:.5},[`&.${c.disabled} + .${c.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${c.input}`]:{left:"-100%",width:"300%"}})),L(({theme:e})=>({"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(H(["light"])).map(([r])=>({props:{color:r},style:{[`&.${c.checked}`]:{color:(e.vars||e).palette[r].main,"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[r].main,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${r}DisabledColor`]:`${e.palette.mode==="light"?e.lighten(e.palette[r].main,.62):e.darken(e.palette[r].main,.55)}`}},[`&.${c.checked} + .${c.track}`]:{backgroundColor:(e.vars||e).palette[r].main}}}))]}))),ce=$("span",{name:"MuiSwitch",slot:"Track"})(L(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`}))),ne=$("span",{name:"MuiSwitch",slot:"Thumb"})(L(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),o=B.forwardRef(function(r,a){const n=X({props:r,name:"MuiSwitch"}),{className:d,color:p="primary",edge:h=!1,size:b="medium",sx:I,slots:g={},slotProps:i={},...E}=n,m={...n,color:p,edge:h,size:b},y=oe(m),M={slots:g,slotProps:i},[V,G]=O("root",{className:q(y.root,d),elementType:ae,externalForwardedProps:M,ownerState:m,additionalProps:{sx:I}}),[N,U]=O("thumb",{className:y.thumb,elementType:ne,externalForwardedProps:M,ownerState:m}),D=t.jsx(N,{...U}),[_,A]=O("track",{className:y.track,elementType:ce,externalForwardedProps:M,ownerState:m});return t.jsxs(V,{...G,children:[t.jsx(se,{type:"checkbox",icon:D,checkedIcon:D,ref:a,ownerState:m,...E,classes:{...y,root:y.switchBase},slots:{...g.switchBase&&{root:g.switchBase},...g.input&&{input:g.input}},slotProps:{...i.switchBase&&{root:typeof i.switchBase=="function"?i.switchBase(m):i.switchBase},input:{role:"switch"},...i.input&&{input:typeof i.input=="function"?i.input(m):i.input}}}),t.jsx(_,{...A})]})}),Fe={title:"Component/Switch",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## Switch

토글 스위치 컴포넌트입니다. 켜기/끄기 상태를 전환할 때 사용합니다.

### 사용 패턴

| 패턴 | 설명 | 예시 |
|------|------|------|
| Basic | 기본 스위치 | \`<Switch />\` |
| Labeled | 라벨이 있는 스위치 | \`<FormControlLabel label="라벨" control={<Switch />} />\` |
| iOS Style | iOS 스타일 스위치 | 커스텀 스타일 적용 |
        `}}},argTypes:{color:{control:"select",options:["primary","secondary","success","error","info","warning","default"],description:"스위치 색상을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},size:{control:"select",options:["small","medium"],description:"스위치 크기를 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"스위치를 비활성화합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultChecked:{control:"boolean",description:"기본 스위치 상태를 설정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},edge:{control:"select",options:["start","end",!1],description:"스위치 가장자리 위치를 설정합니다.",table:{type:{summary:"string | false"},defaultValue:{summary:"false"}}}}},x={args:{color:"primary",size:"medium",disabled:!1,defaultChecked:!1},render:e=>t.jsx(o,{color:e.color,size:e.size,disabled:e.disabled,defaultChecked:e.defaultChecked})},f={render:()=>{const[e,r]=B.useState(!0);return t.jsx(s,{control:t.jsx(o,{checked:e,onChange:a=>r(a.target.checked)}),label:"알림 받기"})}},S={render:()=>t.jsxs(z,{direction:"row",spacing:2,alignItems:"center",children:[t.jsx(s,{control:t.jsx(o,{size:"small",defaultChecked:!0}),label:"Small"}),t.jsx(s,{control:t.jsx(o,{size:"medium",defaultChecked:!0}),label:"Medium"})]})},k={render:()=>t.jsxs(z,{direction:"row",spacing:1,flexWrap:"wrap",useFlexGap:!0,children:[t.jsx(s,{control:t.jsx(o,{defaultChecked:!0,color:"primary"}),label:"Primary"}),t.jsx(s,{control:t.jsx(o,{defaultChecked:!0,color:"secondary"}),label:"Secondary"}),t.jsx(s,{control:t.jsx(o,{defaultChecked:!0,color:"success"}),label:"Success"}),t.jsx(s,{control:t.jsx(o,{defaultChecked:!0,color:"error"}),label:"Error"}),t.jsx(s,{control:t.jsx(o,{defaultChecked:!0,color:"info"}),label:"Info"}),t.jsx(s,{control:t.jsx(o,{defaultChecked:!0,color:"warning"}),label:"Warning"})]})},w={render:()=>t.jsxs(z,{spacing:1,children:[t.jsx(s,{control:t.jsx(o,{disabled:!0}),label:"비활성화 (Off)"}),t.jsx(s,{control:t.jsx(o,{disabled:!0,checked:!0}),label:"비활성화 (On)"})]})},C={render:()=>t.jsxs(ee,{component:"fieldset",children:[t.jsx(te,{component:"legend",children:"알림 설정"}),t.jsxs(Z,{children:[t.jsx(s,{control:t.jsx(o,{defaultChecked:!0}),label:"이메일 알림"}),t.jsx(s,{control:t.jsx(o,{}),label:"SMS 알림"}),t.jsx(s,{control:t.jsx(o,{defaultChecked:!0}),label:"푸시 알림"})]})]})},j={render:()=>t.jsxs(z,{spacing:2,children:[t.jsx(s,{control:t.jsx(o,{}),label:"End (기본)",labelPlacement:"end"}),t.jsx(s,{control:t.jsx(o,{}),label:"Start",labelPlacement:"start"}),t.jsx(s,{control:t.jsx(o,{}),label:"Top",labelPlacement:"top"}),t.jsx(s,{control:t.jsx(o,{}),label:"Bottom",labelPlacement:"bottom"})]})},v={render:()=>{const[e,r]=B.useState(!1);return t.jsxs(F,{sx:{display:"flex",alignItems:"center",gap:2},children:[t.jsx(l,{variant:"body2",color:e?"text.secondary":"text.primary",children:"Off"}),t.jsx(o,{checked:e,onChange:a=>r(a.target.checked)}),t.jsx(l,{variant:"body2",color:e?"text.primary":"text.secondary",children:"On"})]})}},T={render:()=>{const[e,r]=B.useState({darkMode:!1,notifications:!0,autoSave:!0,analytics:!1,newsletter:!1}),a=d=>p=>{r({...e,[d]:p.target.checked})},n=({label:d,description:p,name:h,checked:b})=>t.jsxs(F,{sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",py:1.5},children:[t.jsxs(F,{sx:{pr:2},children:[t.jsx(l,{variant:"body1",children:d}),t.jsx(l,{variant:"caption",color:"text.secondary",children:p})]}),t.jsx(o,{checked:b,onChange:a(h),edge:"end"})]});return t.jsxs(R,{sx:{p:3,width:400},children:[t.jsx(l,{variant:"h6",sx:{mb:2,fontWeight:600},children:"설정"}),t.jsx(l,{variant:"overline",color:"text.secondary",children:"일반"}),t.jsx(n,{label:"다크 모드",description:"어두운 테마를 사용합니다",name:"darkMode",checked:e.darkMode}),t.jsx(n,{label:"자동 저장",description:"변경사항을 자동으로 저장합니다",name:"autoSave",checked:e.autoSave}),t.jsx(W,{sx:{my:2}}),t.jsx(l,{variant:"overline",color:"text.secondary",children:"알림"}),t.jsx(n,{label:"푸시 알림",description:"새로운 소식을 알림으로 받습니다",name:"notifications",checked:e.notifications}),t.jsx(n,{label:"뉴스레터",description:"주간 뉴스레터를 이메일로 받습니다",name:"newsletter",checked:e.newsletter}),t.jsx(W,{sx:{my:2}}),t.jsx(l,{variant:"overline",color:"text.secondary",children:"개인정보"}),t.jsx(n,{label:"분석 데이터 수집",description:"서비스 개선을 위해 사용 데이터를 수집합니다",name:"analytics",checked:e.analytics})]})}},P={render:()=>{const[e,r]=B.useState(!1);return t.jsx(R,{sx:{p:3,width:300},children:t.jsxs(F,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsxs(F,{children:[t.jsx(l,{variant:"subtitle1",sx:{fontWeight:600},children:e?"공개":"비공개"}),t.jsx(l,{variant:"body2",color:"text.secondary",children:e?"모든 사용자가 볼 수 있습니다":"나만 볼 수 있습니다"})]}),t.jsx(o,{checked:e,onChange:a=>r(a.target.checked),color:e?"success":"default"})]})})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'medium',
    disabled: false,
    defaultChecked: false
  },
  render: args => <Switch color={args.color} size={args.size} disabled={args.disabled} defaultChecked={args.defaultChecked} />
}`,...x.parameters?.docs?.source},description:{story:"기본 스위치",...x.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <FormControlLabel control={<Switch checked={checked} onChange={e => setChecked(e.target.checked)} />} label="알림 받기" />;
  }
}`,...f.parameters?.docs?.source},description:{story:"라벨이 있는 스위치",...f.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <FormControlLabel control={<Switch size="small" defaultChecked />} label="Small" />
      <FormControlLabel control={<Switch size="medium" defaultChecked />} label="Medium" />
    </Stack>
}`,...S.parameters?.docs?.source},description:{story:"크기 비교",...S.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      <FormControlLabel control={<Switch defaultChecked color="primary" />} label="Primary" />
      <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="Secondary" />
      <FormControlLabel control={<Switch defaultChecked color="success" />} label="Success" />
      <FormControlLabel control={<Switch defaultChecked color="error" />} label="Error" />
      <FormControlLabel control={<Switch defaultChecked color="info" />} label="Info" />
      <FormControlLabel control={<Switch defaultChecked color="warning" />} label="Warning" />
    </Stack>
}`,...k.parameters?.docs?.source},description:{story:"색상 변형",...k.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={1}>
      <FormControlLabel control={<Switch disabled />} label="비활성화 (Off)" />
      <FormControlLabel control={<Switch disabled checked />} label="비활성화 (On)" />
    </Stack>
}`,...w.parameters?.docs?.source},description:{story:"비활성화 상태",...w.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <FormControl component="fieldset">
      <FormLabel component="legend">알림 설정</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="이메일 알림" />
        <FormControlLabel control={<Switch />} label="SMS 알림" />
        <FormControlLabel control={<Switch defaultChecked />} label="푸시 알림" />
      </FormGroup>
    </FormControl>
}`,...C.parameters?.docs?.source},description:{story:"스위치 그룹",...C.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <FormControlLabel control={<Switch />} label="End (기본)" labelPlacement="end" />
      <FormControlLabel control={<Switch />} label="Start" labelPlacement="start" />
      <FormControlLabel control={<Switch />} label="Top" labelPlacement="top" />
      <FormControlLabel control={<Switch />} label="Bottom" labelPlacement="bottom" />
    </Stack>
}`,...j.parameters?.docs?.source},description:{story:"라벨 위치",...j.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }}>
        <Typography variant="body2" color={checked ? 'text.secondary' : 'text.primary'}>
          Off
        </Typography>
        <Switch checked={checked} onChange={e => setChecked(e.target.checked)} />
        <Typography variant="body2" color={checked ? 'text.primary' : 'text.secondary'}>
          On
        </Typography>
      </Box>;
  }
}`,...v.parameters?.docs?.source},description:{story:"상태 텍스트 표시",...v.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      darkMode: false,
      notifications: true,
      autoSave: true,
      analytics: false,
      newsletter: false
    });
    const handleChange = name => event => {
      setSettings({
        ...settings,
        [name]: event.target.checked
      });
    };
    const SettingItem = ({
      label,
      description,
      name,
      checked
    }) => <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      py: 1.5
    }}>
        <Box sx={{
        pr: 2
      }}>
          <Typography variant="body1">{label}</Typography>
          <Typography variant="caption" color="text.secondary">
            {description}
          </Typography>
        </Box>
        <Switch checked={checked} onChange={handleChange(name)} edge="end" />
      </Box>;
    return <Paper sx={{
      p: 3,
      width: 400
    }}>
        <Typography variant="h6" sx={{
        mb: 2,
        fontWeight: 600
      }}>
          설정
        </Typography>

        <Typography variant="overline" color="text.secondary">
          일반
        </Typography>
        <SettingItem label="다크 모드" description="어두운 테마를 사용합니다" name="darkMode" checked={settings.darkMode} />
        <SettingItem label="자동 저장" description="변경사항을 자동으로 저장합니다" name="autoSave" checked={settings.autoSave} />

        <Divider sx={{
        my: 2
      }} />

        <Typography variant="overline" color="text.secondary">
          알림
        </Typography>
        <SettingItem label="푸시 알림" description="새로운 소식을 알림으로 받습니다" name="notifications" checked={settings.notifications} />
        <SettingItem label="뉴스레터" description="주간 뉴스레터를 이메일로 받습니다" name="newsletter" checked={settings.newsletter} />

        <Divider sx={{
        my: 2
      }} />

        <Typography variant="overline" color="text.secondary">
          개인정보
        </Typography>
        <SettingItem label="분석 데이터 수집" description="서비스 개선을 위해 사용 데이터를 수집합니다" name="analytics" checked={settings.analytics} />
      </Paper>;
  }
}`,...T.parameters?.docs?.source},description:{story:"실제 사용 예시 - 설정 패널",...T.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isPublic, setIsPublic] = useState(false);
    return <Paper sx={{
      p: 3,
      width: 300
    }}>
        <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <Box>
            <Typography variant="subtitle1" sx={{
            fontWeight: 600
          }}>
              {isPublic ? '공개' : '비공개'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {isPublic ? '모든 사용자가 볼 수 있습니다' : '나만 볼 수 있습니다'}
            </Typography>
          </Box>
          <Switch checked={isPublic} onChange={e => setIsPublic(e.target.checked)} color={isPublic ? 'success' : 'default'} />
        </Box>
      </Paper>;
  }
}`,...P.parameters?.docs?.source},description:{story:"실제 사용 예시 - 공개/비공개 토글",...P.parameters?.docs?.description}}};const Be=["Default","WithLabel","Sizes","Colors","Disabled","Group","LabelPlacement","WithStatusText","SettingsPanel","VisibilityToggle"];export{k as Colors,x as Default,w as Disabled,C as Group,j as LabelPlacement,T as SettingsPanel,S as Sizes,P as VisibilityToggle,f as WithLabel,v as WithStatusText,Be as __namedExportsOrder,Fe as default};
