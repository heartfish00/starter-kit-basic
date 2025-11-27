import{r as R,u as D,j as e,c as M,a as P}from"./iframe-BWgkq3nG.js";import{T as r}from"./TextField-Cmma3gLP.js";import{S as a}from"./Stack-BlXiqy8W.js";import{u as O,F as $}from"./utils-C3e22Fhs.js";import{a as U,g as _,s as N,c as H,m as G}from"./memoTheme-wZLTRCdj.js";import{T as w}from"./Typography-Crr089TM.js";import{I as J}from"./IconButton-BlYvHqG4.js";import{B as F}from"./Box-B4QF7xQt.js";import"./preload-helper-PPVm8Dsz.js";import"./useSlot-OsDyiYkB.js";import"./useTimeout-BL3CCW4_.js";import"./Select-vJ_dQeDl.js";import"./useSlotProps-D3eyalIf.js";import"./Paper-BPbdMq_H.js";import"./useTheme-CPxBch2_.js";import"./utils-WEb9flUJ.js";import"./index-C3Q5W1AK.js";import"./index-C35CsaQh.js";import"./mergeSlotProps-CAj06Lhe.js";import"./ButtonBase-BrHEvKFd.js";import"./createSvgIcon-B2KGxEB9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./InputLabel-B1sbly18.js";import"./FormLabel-DMuR5-Ws.js";import"./isMuiElement-Dnj352N-.js";import"./FormHelperText-jpz2YTJd.js";import"./useThemeProps-BQFY9YMS.js";import"./CircularProgress-CDkyS_V7.js";function K(t){return _("MuiInputAdornment",t)}const V=U("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var E;const Q=(t,s)=>{const{ownerState:o}=t;return[s.root,s[`position${P(o.position)}`],o.disablePointerEvents===!0&&s.disablePointerEvents,s[o.variant]]},X=t=>{const{classes:s,disablePointerEvents:o,hiddenLabel:j,position:n,size:S,variant:v}=t,A={root:["root",o&&"disablePointerEvents",n&&`position${P(n)}`,v,j&&"hiddenLabel",S&&`size${P(S)}`]};return H(A,K,s)},Y=N("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:Q})(G(({theme:t})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active,variants:[{props:{variant:"filled"},style:{[`&.${V.positionStart}&:not(.${V.hiddenLabel})`]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]}))),W=R.forwardRef(function(s,o){const j=D({props:s,name:"MuiInputAdornment"}),{children:n,className:S,component:v="div",disablePointerEvents:A=!1,disableTypography:B=!1,position:I,variant:q,...C}=j,l=O()||{};let k=q;q&&l.variant,l&&!k&&(k=l.variant);const z={...j,hiddenLabel:l.hiddenLabel,size:l.size,disablePointerEvents:A,position:I,variant:k},L=X(z);return e.jsx($.Provider,{value:null,children:e.jsx(Y,{as:v,ownerState:z,className:M(L.root,S),ref:o,...C,children:typeof n=="string"&&!B?e.jsx(w,{color:"textSecondary",children:n}):e.jsxs(R.Fragment,{children:[I==="start"?E||(E=e.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):null,n]})})})}),ke={title:"Component/TextField",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## TextField

사용자 텍스트 입력을 받는 폼 컴포넌트입니다.

### 사용 패턴

| 패턴 | 설명 | 예시 |
|------|------|------|
| Outlined | 테두리 스타일 (기본) | \`variant="outlined"\` |
| Filled | 배경색 스타일 | \`variant="filled"\` |
| Standard | 언더라인 스타일 | \`variant="standard"\` |
| Multiline | 여러 줄 입력 | \`multiline rows={4}\` |
        `}}},argTypes:{variant:{control:"select",options:["outlined","filled","standard"],description:"입력 필드의 시각적 스타일을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"outlined"}}},size:{control:"select",options:["small","medium"],description:"입력 필드의 크기를 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},color:{control:"select",options:["primary","secondary","error","info","success","warning"],description:"포커스 시 색상을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},disabled:{control:"boolean",description:"입력 필드를 비활성화합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{control:"boolean",description:"필수 입력 필드로 표시합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},error:{control:"boolean",description:"에러 상태를 표시합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"전체 너비로 확장합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:"text",description:"입력 필드의 라벨입니다.",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"플레이스홀더 텍스트입니다.",table:{type:{summary:"string"}}},helperText:{control:"text",description:"입력 필드 아래 도움말 텍스트입니다.",table:{type:{summary:"string"}}}}},i={args:{label:"라벨",placeholder:"텍스트를 입력하세요"}},d={render:()=>e.jsxs(a,{spacing:3,sx:{width:300},children:[e.jsx(r,{label:"Outlined",variant:"outlined"}),e.jsx(r,{label:"Filled",variant:"filled"}),e.jsx(r,{label:"Standard",variant:"standard"})]})},p={render:()=>e.jsxs(a,{spacing:3,direction:"row",alignItems:"center",children:[e.jsx(r,{label:"Small",size:"small"}),e.jsx(r,{label:"Medium",size:"medium"})]})},c={args:{label:"이름",required:!0,helperText:"필수 입력 항목입니다"}},m={render:()=>e.jsxs(a,{spacing:3,sx:{width:300},children:[e.jsx(r,{label:"이메일",error:!0,helperText:"올바른 이메일 형식이 아닙니다",defaultValue:"invalid-email"}),e.jsx(r,{label:"비밀번호",type:"password",error:!0,helperText:"비밀번호는 8자 이상이어야 합니다"})]})},u={render:()=>e.jsxs(a,{spacing:3,sx:{width:300},children:[e.jsx(r,{label:"Disabled",defaultValue:"비활성화된 입력",disabled:!0}),e.jsx(r,{label:"Read Only",defaultValue:"읽기 전용 입력",slotProps:{input:{readOnly:!0}}})]})},x={render:()=>e.jsxs(a,{spacing:3,sx:{width:400},children:[e.jsx(r,{label:"기본 멀티라인",multiline:!0,rows:4,placeholder:"여러 줄의 텍스트를 입력하세요"}),e.jsx(r,{label:"자동 높이 조절",multiline:!0,minRows:2,maxRows:6,placeholder:"내용에 따라 높이가 자동으로 조절됩니다"})]})},b={render:()=>e.jsxs(a,{spacing:3,sx:{width:300},children:[e.jsx(r,{label:"텍스트",type:"text"}),e.jsx(r,{label:"비밀번호",type:"password"}),e.jsx(r,{label:"이메일",type:"email"}),e.jsx(r,{label:"숫자",type:"number"}),e.jsx(r,{label:"날짜",type:"date",slotProps:{inputLabel:{shrink:!0}}}),e.jsx(r,{label:"시간",type:"time",slotProps:{inputLabel:{shrink:!0}}})]})},h={render:()=>e.jsxs(a,{spacing:3,sx:{width:300},children:[e.jsx(r,{label:"금액",slotProps:{input:{startAdornment:e.jsx(W,{position:"start",children:"₩"})}}}),e.jsx(r,{label:"무게",slotProps:{input:{endAdornment:e.jsx(W,{position:"end",children:"kg"})}}}),e.jsx(r,{label:"비밀번호",type:"password",slotProps:{input:{endAdornment:e.jsx(W,{position:"end",children:e.jsx(J,{edge:"end",size:"small",children:e.jsx(F,{component:"span",sx:{fontSize:16},children:"👁"})})})}}})]})},y={render:()=>e.jsxs(a,{spacing:3,sx:{width:300},children:[e.jsx(r,{label:"Primary",color:"primary",focused:!0}),e.jsx(r,{label:"Secondary",color:"secondary",focused:!0}),e.jsx(r,{label:"Success",color:"success",focused:!0}),e.jsx(r,{label:"Warning",color:"warning",focused:!0})]})},g={render:()=>e.jsx(F,{sx:{width:400},children:e.jsx(r,{label:"전체 너비",fullWidth:!0,helperText:"부모 요소의 전체 너비를 차지합니다"})})},f={render:()=>e.jsxs(F,{component:"form",sx:{width:360,p:4,display:"flex",flexDirection:"column",gap:3,bgcolor:"background.paper",boxShadow:1},children:[e.jsx(w,{variant:"h5",sx:{fontWeight:700,mb:1},children:"로그인"}),e.jsx(r,{label:"이메일",type:"email",required:!0,fullWidth:!0,placeholder:"example@email.com"}),e.jsx(r,{label:"비밀번호",type:"password",required:!0,fullWidth:!0,placeholder:"비밀번호를 입력하세요"}),e.jsx(w,{variant:"caption",color:"text.secondary",children:"* 필수 입력 항목"})]})},T={render:()=>e.jsxs(F,{component:"form",sx:{width:400,p:4,display:"flex",flexDirection:"column",gap:2.5,bgcolor:"background.paper",boxShadow:1},children:[e.jsx(w,{variant:"h5",sx:{fontWeight:700,mb:1},children:"회원가입"}),e.jsx(r,{label:"이름",required:!0,fullWidth:!0,helperText:"실명을 입력해주세요"}),e.jsx(r,{label:"이메일",type:"email",required:!0,fullWidth:!0,helperText:"인증 메일이 발송됩니다"}),e.jsx(r,{label:"비밀번호",type:"password",required:!0,fullWidth:!0,helperText:"8자 이상, 영문/숫자/특수문자 포함"}),e.jsx(r,{label:"비밀번호 확인",type:"password",required:!0,fullWidth:!0}),e.jsx(r,{label:"자기소개",multiline:!0,rows:3,fullWidth:!0,placeholder:"간단한 자기소개를 작성해주세요 (선택)"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: '라벨',
    placeholder: '텍스트를 입력하세요'
  }
}`,...i.parameters?.docs?.source},description:{story:"기본 텍스트 필드",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 300
  }}>
      <TextField label="Outlined" variant="outlined" />
      <TextField label="Filled" variant="filled" />
      <TextField label="Standard" variant="standard" />
    </Stack>
}`,...d.parameters?.docs?.source},description:{story:"Variant 비교",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} direction="row" alignItems="center">
      <TextField label="Small" size="small" />
      <TextField label="Medium" size="medium" />
    </Stack>
}`,...p.parameters?.docs?.source},description:{story:"크기 비교",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: '이름',
    required: true,
    helperText: '필수 입력 항목입니다'
  }
}`,...c.parameters?.docs?.source},description:{story:"필수 입력",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 300
  }}>
      <TextField label="이메일" error helperText="올바른 이메일 형식이 아닙니다" defaultValue="invalid-email" />
      <TextField label="비밀번호" type="password" error helperText="비밀번호는 8자 이상이어야 합니다" />
    </Stack>
}`,...m.parameters?.docs?.source},description:{story:"에러 상태",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 300
  }}>
      <TextField label="Disabled" defaultValue="비활성화된 입력" disabled />
      <TextField label="Read Only" defaultValue="읽기 전용 입력" slotProps={{
      input: {
        readOnly: true
      }
    }} />
    </Stack>
}`,...u.parameters?.docs?.source},description:{story:"비활성화 & 읽기 전용",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 400
  }}>
      <TextField label="기본 멀티라인" multiline rows={4} placeholder="여러 줄의 텍스트를 입력하세요" />
      <TextField label="자동 높이 조절" multiline minRows={2} maxRows={6} placeholder="내용에 따라 높이가 자동으로 조절됩니다" />
    </Stack>
}`,...x.parameters?.docs?.source},description:{story:"여러 줄 입력 (Multiline)",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 300
  }}>
      <TextField label="텍스트" type="text" />
      <TextField label="비밀번호" type="password" />
      <TextField label="이메일" type="email" />
      <TextField label="숫자" type="number" />
      <TextField label="날짜" type="date" slotProps={{
      inputLabel: {
        shrink: true
      }
    }} />
      <TextField label="시간" type="time" slotProps={{
      inputLabel: {
        shrink: true
      }
    }} />
    </Stack>
}`,...b.parameters?.docs?.source},description:{story:"입력 타입",...b.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 300
  }}>
      <TextField label="금액" slotProps={{
      input: {
        startAdornment: <InputAdornment position="start">₩</InputAdornment>
      }
    }} />
      <TextField label="무게" slotProps={{
      input: {
        endAdornment: <InputAdornment position="end">kg</InputAdornment>
      }
    }} />
      <TextField label="비밀번호" type="password" slotProps={{
      input: {
        endAdornment: <InputAdornment position="end">
                <IconButton edge="end" size="small">
                  <Box component="span" sx={{
              fontSize: 16
            }}>👁</Box>
                </IconButton>
              </InputAdornment>
      }
    }} />
    </Stack>
}`,...h.parameters?.docs?.source},description:{story:"Adornment (접두/접미 요소)",...h.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 300
  }}>
      <TextField label="Primary" color="primary" focused />
      <TextField label="Secondary" color="secondary" focused />
      <TextField label="Success" color="success" focused />
      <TextField label="Warning" color="warning" focused />
    </Stack>
}`,...y.parameters?.docs?.source},description:{story:"색상 변형",...y.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 400
  }}>
      <TextField label="전체 너비" fullWidth helperText="부모 요소의 전체 너비를 차지합니다" />
    </Box>
}`,...g.parameters?.docs?.source},description:{story:"전체 너비",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Box component="form" sx={{
    width: 360,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    bgcolor: 'background.paper',
    boxShadow: 1
  }}>
      <Typography variant="h5" sx={{
      fontWeight: 700,
      mb: 1
    }}>
        로그인
      </Typography>
      <TextField label="이메일" type="email" required fullWidth placeholder="example@email.com" />
      <TextField label="비밀번호" type="password" required fullWidth placeholder="비밀번호를 입력하세요" />
      <Typography variant="caption" color="text.secondary">
        * 필수 입력 항목
      </Typography>
    </Box>
}`,...f.parameters?.docs?.source},description:{story:"폼 예시 - 로그인",...f.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Box component="form" sx={{
    width: 400,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 2.5,
    bgcolor: 'background.paper',
    boxShadow: 1
  }}>
      <Typography variant="h5" sx={{
      fontWeight: 700,
      mb: 1
    }}>
        회원가입
      </Typography>
      <TextField label="이름" required fullWidth helperText="실명을 입력해주세요" />
      <TextField label="이메일" type="email" required fullWidth helperText="인증 메일이 발송됩니다" />
      <TextField label="비밀번호" type="password" required fullWidth helperText="8자 이상, 영문/숫자/특수문자 포함" />
      <TextField label="비밀번호 확인" type="password" required fullWidth />
      <TextField label="자기소개" multiline rows={3} fullWidth placeholder="간단한 자기소개를 작성해주세요 (선택)" />
    </Box>
}`,...T.parameters?.docs?.source},description:{story:"폼 예시 - 회원가입",...T.parameters?.docs?.description}}};const We=["Default","AllVariants","Sizes","Required","Error","DisabledAndReadOnly","Multiline","InputTypes","WithAdornments","Colors","FullWidth","LoginForm","SignupForm"];export{d as AllVariants,y as Colors,i as Default,u as DisabledAndReadOnly,m as Error,g as FullWidth,b as InputTypes,f as LoginForm,x as Multiline,c as Required,T as SignupForm,p as Sizes,h as WithAdornments,We as __namedExportsOrder,ke as default};
