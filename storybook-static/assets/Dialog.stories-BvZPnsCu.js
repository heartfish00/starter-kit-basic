import{r as i,u as V,j as e,c as b}from"./iframe-BWgkq3nG.js";import{D as u,a as m,b as x,c as g}from"./DialogTitle-BY4Lxrn1.js";import{B as r}from"./Button-DjpYfm2Y.js";import{g as te,a as _,s as B,c as E,r as xe,m as ge}from"./memoTheme-wZLTRCdj.js";import{T as c,t as pe}from"./Typography-Crr089TM.js";import{S as ne}from"./Stack-BlXiqy8W.js";import{T as q}from"./TextField-Cmma3gLP.js";import{L as T,a as he}from"./Select-vJ_dQeDl.js";import{i as fe}from"./isMuiElement-Dnj352N-.js";import{u as ye}from"./useTimeout-BL3CCW4_.js";import{i as ue,u as ae}from"./useSlot-OsDyiYkB.js";import{A as Ce}from"./Avatar-BPH86LN6.js";import{g as ve,l as Z}from"./listItemTextClasses-B4_rjIbA.js";import{I as je}from"./IconButton-BlYvHqG4.js";import{B as ee}from"./Box-B4QF7xQt.js";import{D as le}from"./Divider-DpaNVM42.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CPxBch2_.js";import"./Paper-BPbdMq_H.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BrHEvKFd.js";import"./CircularProgress-CDkyS_V7.js";import"./useThemeProps-BQFY9YMS.js";import"./InputLabel-B1sbly18.js";import"./utils-C3e22Fhs.js";import"./FormLabel-DMuR5-Ws.js";import"./FormHelperText-jpz2YTJd.js";import"./useSlotProps-D3eyalIf.js";import"./utils-WEb9flUJ.js";import"./index-C3Q5W1AK.js";import"./index-C35CsaQh.js";import"./mergeSlotProps-CAj06Lhe.js";import"./createSvgIcon-B2KGxEB9.js";import"./dividerClasses-B3yZpvVG.js";function De(n){return te("MuiDialogContentText",n)}_("MuiDialogContentText",["root"]);const Se=n=>{const{classes:t}=n,s=E({root:["root"]},De,t);return{...t,...s}},Te=B(c,{shouldForwardProp:n=>xe(n)||n==="classes",name:"MuiDialogContentText",slot:"Root"})({}),v=i.forwardRef(function(t,o){const s=V({props:t,name:"MuiDialogContentText"}),{children:d,className:p,...a}=s,l=Se(a);return e.jsx(Te,{component:"p",variant:"body1",color:"textSecondary",ref:o,ownerState:a,className:b(l.root,p),...s,classes:l})});function be(n){return te("MuiListItem",n)}_("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);const Be=_("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function ke(n){return te("MuiListItemSecondaryAction",n)}_("MuiListItemSecondaryAction",["root","disableGutters"]);const Ie=n=>{const{disableGutters:t,classes:o}=n;return E({root:["root",t&&"disableGutters"]},ke,o)},Ae=B("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,o.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:n})=>n.disableGutters,style:{right:0}}]}),me=i.forwardRef(function(t,o){const s=V({props:t,name:"MuiListItemSecondaryAction"}),{className:d,...p}=s,a=i.useContext(T),l={...s,disableGutters:a.disableGutters},h=Ie(l);return e.jsx(Ae,{className:b(h.root,d),ownerState:l,ref:o,...p})});me.muiName="ListItemSecondaryAction";const Oe=(n,t)=>{const{ownerState:o}=n;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.hasSecondaryAction&&t.secondaryAction]},We=n=>{const{alignItems:t,classes:o,dense:s,disableGutters:d,disablePadding:p,divider:a,hasSecondaryAction:l}=n;return E({root:["root",s&&"dense",!d&&"gutters",!p&&"padding",a&&"divider",t==="flex-start"&&"alignItemsFlexStart",l&&"secondaryAction"],container:["container"]},be,o)},Le=B("div",{name:"MuiListItem",slot:"Root",overridesResolver:Oe})(ge(({theme:n})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:t})=>!t.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:t})=>!t.disablePadding&&t.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:t})=>!t.disablePadding&&!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>!t.disablePadding&&!!t.secondaryAction,style:{paddingRight:48}},{props:({ownerState:t})=>!!t.secondaryAction,style:{[`& > .${Be.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(n.vars||n).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>t.button,style:{transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:t})=>t.hasSecondaryAction,style:{paddingRight:48}}]}))),we=B("li",{name:"MuiListItem",slot:"Container"})({position:"relative"}),Fe=i.forwardRef(function(t,o){const s=V({props:t,name:"MuiListItem"}),{alignItems:d="center",children:p,className:a,component:l,components:h={},componentsProps:oe={},ContainerComponent:H="li",ContainerProps:{className:se,...re}={},dense:Y=!1,disableGutters:k=!1,disablePadding:J=!1,divider:C=!1,secondaryAction:f,slotProps:j={},slots:I={},...A}=s,K=i.useContext(T),O=i.useMemo(()=>({dense:Y||K.dense||!1,alignItems:d,disableGutters:k}),[d,K.dense,Y,k]),ie=i.useRef(null),y=i.Children.toArray(p),Q=y.length&&fe(y[y.length-1],["ListItemSecondaryAction"]),D={...s,alignItems:d,dense:O.dense,disableGutters:k,disablePadding:J,divider:C,hasSecondaryAction:Q},ce=We(D),de=ye(ie,o),X=I.root||h.Root||Le,W=j.root||oe.root||{},L={className:b(ce.root,W.className,a),...A};let S=l||"li";return Q?(S=!L.component&&!l?"div":S,H==="li"&&(S==="li"?S="div":L.component==="li"&&(L.component="div")),e.jsx(T.Provider,{value:O,children:e.jsxs(we,{as:H,className:b(ce.container,se),ref:de,ownerState:D,...re,children:[e.jsx(X,{...W,...!ue(X)&&{as:S,ownerState:{...D,...W.ownerState}},...L,children:y}),y.pop()]})})):e.jsx(T.Provider,{value:O,children:e.jsxs(X,{...W,as:S,ref:de,...!ue(X)&&{ownerState:{...D,...W.ownerState}},...L,children:[y,f&&e.jsx(me,{children:f})]})})}),Pe=n=>{const{classes:t,inset:o,primary:s,secondary:d,dense:p}=n;return E({root:["root",o&&"inset",p&&"dense",s&&d&&"multiline"],primary:["primary"],secondary:["secondary"]},ve,t)},Re=B("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[{[`& .${Z.primary}`]:t.primary},{[`& .${Z.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${pe.root}:where(& .${Z.primary})`]:{display:"block"},[`.${pe.root}:where(& .${Z.secondary})`]:{display:"block"},variants:[{props:({ownerState:n})=>n.primary&&n.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:n})=>n.inset,style:{paddingLeft:56}}]}),ze=i.forwardRef(function(t,o){const s=V({props:t,name:"MuiListItemText"}),{children:d,className:p,disableTypography:a=!1,inset:l=!1,primary:h,primaryTypographyProps:oe,secondary:H,secondaryTypographyProps:se,slots:re={},slotProps:Y={},...k}=s,{dense:J}=i.useContext(T);let C=h??d,f=H;const j={...s,disableTypography:a,inset:l,primary:!!C,secondary:!!f,dense:J},I=Pe(j),A={slots:re,slotProps:{primary:oe,secondary:se,...Y}},[K,O]=ae("root",{className:b(I.root,p),elementType:Re,externalForwardedProps:{...A,...k},ownerState:j,ref:o}),[ie,y]=ae("primary",{className:I.primary,elementType:c,externalForwardedProps:A,ownerState:j}),[Q,D]=ae("secondary",{className:I.secondary,elementType:c,externalForwardedProps:A,ownerState:j});return C!=null&&C.type!==c&&!a&&(C=e.jsx(ie,{variant:J?"body2":"body1",component:y?.variant?void 0:"span",...y,children:C})),f!=null&&f.type!==c&&!a&&(f=e.jsx(Q,{variant:"body2",color:"textSecondary",...D,children:f})),e.jsxs(K,{...O,children:[C,f]})});function Me(n){return te("MuiListItemAvatar",n)}_("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Ne=n=>{const{alignItems:t,classes:o}=n;return E({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},Me,o)},Ue=B("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,o.alignItems==="flex-start"&&t.alignItemsFlexStart]}})({minWidth:56,flexShrink:0,variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}),Ge=i.forwardRef(function(t,o){const s=V({props:t,name:"MuiListItemAvatar"}),{className:d,...p}=s,a=i.useContext(T),l={...s,alignItems:a.alignItems},h=Ne(l);return e.jsx(Ue,{className:b(h.root,d),ownerState:l,ref:o,...p})}),Dt={title:"Component/Dialog",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## Dialog

모달 대화상자 컴포넌트입니다. 사용자의 주의를 집중시키고 중요한 정보나 결정을 요청할 때 사용합니다.

### 구성 요소

| 컴포넌트 | 설명 | 예시 |
|----------|------|------|
| Dialog | 대화상자 컨테이너 | \`<Dialog open={open}>...</Dialog>\` |
| DialogTitle | 제목 영역 | 대화상자 제목 |
| DialogContent | 내용 영역 | 본문, 폼 등 |
| DialogActions | 액션 버튼 영역 | 확인, 취소 버튼 |
        `}}},argTypes:{maxWidth:{control:"select",options:["xs","sm","md","lg","xl",!1],description:"대화상자의 최대 너비를 설정합니다.",table:{type:{summary:"string | false"},defaultValue:{summary:"sm"}}},fullWidth:{control:"boolean",description:"maxWidth까지 전체 너비를 사용합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullScreen:{control:"boolean",description:"전체 화면 대화상자로 표시합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},scroll:{control:"select",options:["paper","body"],description:"스크롤 동작을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"paper"}}}}},w={args:{maxWidth:"sm",fullWidth:!1,fullScreen:!1,scroll:"paper"},render:n=>{const[t,o]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outlined",onClick:()=>o(!0),children:"대화상자 열기"}),e.jsxs(u,{open:t,onClose:()=>o(!1),maxWidth:n.maxWidth,fullWidth:n.fullWidth,fullScreen:n.fullScreen,scroll:n.scroll,children:[e.jsx(m,{children:"기본 대화상자"}),e.jsx(x,{children:e.jsx(v,{children:"대화상자는 사용자의 주의를 집중시키고 중요한 정보를 전달하거나 결정을 요청할 때 사용합니다."})}),e.jsxs(g,{children:[e.jsx(r,{onClick:()=>o(!1),children:"취소"}),e.jsx(r,{onClick:()=>o(!1),variant:"contained",children:"확인"})]})]})]})}},F={render:()=>{const[n,t]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"contained",color:"error",onClick:()=>t(!0),children:"삭제하기"}),e.jsxs(u,{open:n,onClose:()=>t(!1),children:[e.jsx(m,{children:"항목을 삭제하시겠습니까?"}),e.jsx(x,{children:e.jsx(v,{children:"이 작업은 되돌릴 수 없습니다. 선택한 항목이 영구적으로 삭제됩니다."})}),e.jsxs(g,{children:[e.jsx(r,{onClick:()=>t(!1),children:"취소"}),e.jsx(r,{onClick:()=>t(!1),color:"error",variant:"contained",children:"삭제"})]})]})]})}},P={render:()=>{const[n,t]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"contained",onClick:()=>t(!0),children:"새 항목 추가"}),e.jsxs(u,{open:n,onClose:()=>t(!1),maxWidth:"sm",fullWidth:!0,children:[e.jsx(m,{children:"새 항목 추가"}),e.jsxs(x,{children:[e.jsx(v,{sx:{mb:2},children:"새로운 항목의 정보를 입력해주세요."}),e.jsxs(ne,{spacing:2,children:[e.jsx(q,{autoFocus:!0,label:"제목",fullWidth:!0,variant:"outlined"}),e.jsx(q,{label:"설명",fullWidth:!0,multiline:!0,rows:3,variant:"outlined"}),e.jsx(q,{label:"카테고리",fullWidth:!0,variant:"outlined"})]})]}),e.jsxs(g,{children:[e.jsx(r,{onClick:()=>t(!1),children:"취소"}),e.jsx(r,{onClick:()=>t(!1),variant:"contained",children:"추가"})]})]})]})}},R={render:()=>{const[n,t]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outlined",color:"warning",onClick:()=>t(!0),children:"경고 표시"}),e.jsxs(u,{open:n,onClose:()=>t(!1),children:[e.jsx(m,{sx:{color:"warning.main"},children:"주의가 필요합니다"}),e.jsx(x,{children:e.jsx(v,{children:"저장하지 않은 변경사항이 있습니다. 페이지를 떠나면 변경사항이 손실됩니다."})}),e.jsxs(g,{children:[e.jsx(r,{onClick:()=>t(!1),children:"계속 편집"}),e.jsx(r,{onClick:()=>t(!1),color:"warning",children:"저장 안 함"}),e.jsx(r,{onClick:()=>t(!1),variant:"contained",children:"저장"})]})]})]})}},z={render:()=>{const[n,t]=i.useState(null),o=["xs","sm","md","lg"];return e.jsxs(e.Fragment,{children:[e.jsx(ne,{direction:"row",spacing:2,children:o.map(s=>e.jsx(r,{variant:"outlined",onClick:()=>t(s),children:s.toUpperCase()},s))}),o.map(s=>e.jsxs(u,{open:n===s,onClose:()=>t(null),maxWidth:s,fullWidth:!0,children:[e.jsxs(m,{children:["maxWidth: ",s]}),e.jsx(x,{children:e.jsxs(v,{children:['fullWidth를 true로 설정하면 maxWidth까지 전체 너비를 사용합니다. 현재 설정된 maxWidth는 "',s,'"입니다.']})}),e.jsx(g,{children:e.jsx(r,{onClick:()=>t(null),children:"닫기"})})]},s))]})}},M={render:()=>{const[n,t]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outlined",onClick:()=>t(!0),children:"긴 콘텐츠 대화상자"}),e.jsxs(u,{open:n,onClose:()=>t(!1),scroll:"paper",maxWidth:"sm",fullWidth:!0,children:[e.jsx(m,{children:"이용약관"}),e.jsx(x,{dividers:!0,children:[...Array(10)].map((o,s)=>e.jsx(c,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},s))}),e.jsxs(g,{children:[e.jsx(r,{onClick:()=>t(!1),children:"취소"}),e.jsx(r,{onClick:()=>t(!1),variant:"contained",children:"동의"})]})]})]})}},N={render:()=>{const[n,t]=i.useState(!1),o=[{name:"김철수",email:"kim@example.com"},{name:"이영희",email:"lee@example.com"},{name:"박민수",email:"park@example.com"},{name:"최수진",email:"choi@example.com"}];return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outlined",onClick:()=>t(!0),children:"사용자 선택"}),e.jsxs(u,{open:n,onClose:()=>t(!1),children:[e.jsx(m,{children:"담당자 선택"}),e.jsx(he,{sx:{pt:0},children:o.map(s=>e.jsxs(Fe,{component:"button",onClick:()=>t(!1),sx:{cursor:"pointer","&:hover":{backgroundColor:"action.hover"}},children:[e.jsx(Ge,{children:e.jsx(Ce,{sx:{bgcolor:"primary.main"},children:s.name[0]})}),e.jsx(ze,{primary:s.name,secondary:s.email})]},s.email))})]})]})}},U={render:()=>{const[n,t]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"contained",onClick:()=>t(!0),children:"설정 열기"}),e.jsxs(u,{open:n,onClose:()=>t(!1),maxWidth:"sm",fullWidth:!0,children:[e.jsxs(m,{sx:{m:0,p:2,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(c,{variant:"h6",component:"span",children:"설정"}),e.jsx(je,{onClick:()=>t(!1),sx:{color:"grey.500"},children:e.jsx(ee,{component:"span",sx:{fontSize:20},children:"✕"})})]}),e.jsx(le,{}),e.jsx(x,{children:e.jsxs(ne,{spacing:3,children:[e.jsxs(ee,{children:[e.jsx(c,{variant:"subtitle2",gutterBottom:!0,children:"알림 설정"}),e.jsx(c,{variant:"body2",color:"text.secondary",children:"이메일 알림, 푸시 알림 등을 설정할 수 있습니다."})]}),e.jsxs(ee,{children:[e.jsx(c,{variant:"subtitle2",gutterBottom:!0,children:"개인정보"}),e.jsx(c,{variant:"body2",color:"text.secondary",children:"프로필 정보와 개인정보 보호 설정을 관리합니다."})]}),e.jsxs(ee,{children:[e.jsx(c,{variant:"subtitle2",gutterBottom:!0,children:"보안"}),e.jsx(c,{variant:"body2",color:"text.secondary",children:"비밀번호 변경, 2단계 인증 등 보안 설정을 관리합니다."})]})]})}),e.jsx(le,{}),e.jsxs(g,{children:[e.jsx(r,{onClick:()=>t(!1),children:"닫기"}),e.jsx(r,{onClick:()=>t(!1),variant:"contained",children:"저장"})]})]})]})}},G={render:()=>{const[n,t]=i.useState(!1),[o,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outlined",onClick:()=>t(!0),children:"첫 번째 대화상자"}),e.jsxs(u,{open:n,onClose:()=>t(!1),children:[e.jsx(m,{children:"첫 번째 대화상자"}),e.jsx(x,{children:e.jsx(v,{children:"대화상자 안에서 다른 대화상자를 열 수 있습니다."})}),e.jsxs(g,{children:[e.jsx(r,{onClick:()=>t(!1),children:"닫기"}),e.jsx(r,{onClick:()=>s(!0),variant:"contained",children:"다음 대화상자 열기"})]})]}),e.jsxs(u,{open:o,onClose:()=>s(!1),children:[e.jsx(m,{children:"두 번째 대화상자"}),e.jsx(x,{children:e.jsx(v,{children:"이것은 중첩된 대화상자입니다."})}),e.jsx(g,{children:e.jsx(r,{onClick:()=>s(!1),variant:"contained",children:"확인"})})]})]})}},$={render:()=>{const[n,t]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"contained",onClick:()=>t(!0),children:"로그인"}),e.jsxs(u,{open:n,onClose:()=>t(!1),maxWidth:"xs",fullWidth:!0,children:[e.jsx(m,{sx:{textAlign:"center",pt:4},children:e.jsx(c,{variant:"h5",sx:{fontWeight:700},children:"로그인"})}),e.jsx(x,{children:e.jsxs(ne,{spacing:2,sx:{mt:1},children:[e.jsx(q,{label:"이메일",type:"email",fullWidth:!0,variant:"outlined"}),e.jsx(q,{label:"비밀번호",type:"password",fullWidth:!0,variant:"outlined"}),e.jsx(r,{variant:"contained",fullWidth:!0,size:"large",children:"로그인"}),e.jsx(le,{children:"또는"}),e.jsx(r,{variant:"outlined",fullWidth:!0,children:"Google로 계속하기"})]})}),e.jsx(g,{sx:{justifyContent:"center",pb:3},children:e.jsxs(c,{variant:"body2",color:"text.secondary",children:["계정이 없으신가요?",e.jsx(r,{size:"small",children:"회원가입"})]})})]})]})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    maxWidth: 'sm',
    fullWidth: false,
    fullScreen: false,
    scroll: 'paper'
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          대화상자 열기
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth={args.maxWidth} fullWidth={args.fullWidth} fullScreen={args.fullScreen} scroll={args.scroll}>
          <DialogTitle>기본 대화상자</DialogTitle>
          <DialogContent>
            <DialogContentText>
              대화상자는 사용자의 주의를 집중시키고 중요한 정보를 전달하거나
              결정을 요청할 때 사용합니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>취소</Button>
            <Button onClick={() => setOpen(false)} variant="contained">
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...w.parameters?.docs?.source},description:{story:"기본 대화상자",...w.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>
          삭제하기
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>항목을 삭제하시겠습니까?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              이 작업은 되돌릴 수 없습니다. 선택한 항목이 영구적으로 삭제됩니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>취소</Button>
            <Button onClick={() => setOpen(false)} color="error" variant="contained">
              삭제
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...F.parameters?.docs?.source},description:{story:"확인 대화상자",...F.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          새 항목 추가
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>새 항목 추가</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{
            mb: 2
          }}>
              새로운 항목의 정보를 입력해주세요.
            </DialogContentText>
            <Stack spacing={2}>
              <TextField autoFocus label="제목" fullWidth variant="outlined" />
              <TextField label="설명" fullWidth multiline rows={3} variant="outlined" />
              <TextField label="카테고리" fullWidth variant="outlined" />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>취소</Button>
            <Button onClick={() => setOpen(false)} variant="contained">
              추가
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...P.parameters?.docs?.source},description:{story:"폼 대화상자",...P.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="outlined" color="warning" onClick={() => setOpen(true)}>
          경고 표시
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle sx={{
          color: 'warning.main'
        }}>
            주의가 필요합니다
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              저장하지 않은 변경사항이 있습니다.
              페이지를 떠나면 변경사항이 손실됩니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>
              계속 편집
            </Button>
            <Button onClick={() => setOpen(false)} color="warning">
              저장 안 함
            </Button>
            <Button onClick={() => setOpen(false)} variant="contained">
              저장
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...R.parameters?.docs?.source},description:{story:"알림 대화상자",...R.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openSize, setOpenSize] = useState(null);
    const sizes = ['xs', 'sm', 'md', 'lg'];
    return <>
        <Stack direction="row" spacing={2}>
          {sizes.map(size => <Button key={size} variant="outlined" onClick={() => setOpenSize(size)}>
              {size.toUpperCase()}
            </Button>)}
        </Stack>
        {sizes.map(size => <Dialog key={size} open={openSize === size} onClose={() => setOpenSize(null)} maxWidth={size} fullWidth>
            <DialogTitle>maxWidth: {size}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                fullWidth를 true로 설정하면 maxWidth까지 전체 너비를 사용합니다.
                현재 설정된 maxWidth는 "{size}"입니다.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenSize(null)}>닫기</Button>
            </DialogActions>
          </Dialog>)}
      </>;
  }
}`,...z.parameters?.docs?.source},description:{story:"크기 변형",...z.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          긴 콘텐츠 대화상자
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} scroll="paper" maxWidth="sm" fullWidth>
          <DialogTitle>이용약관</DialogTitle>
          <DialogContent dividers>
            {[...Array(10)].map((_, index) => <Typography key={index} paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </Typography>)}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>취소</Button>
            <Button onClick={() => setOpen(false)} variant="contained">
              동의
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...M.parameters?.docs?.source},description:{story:"스크롤 대화상자",...M.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const users = [{
      name: '김철수',
      email: 'kim@example.com'
    }, {
      name: '이영희',
      email: 'lee@example.com'
    }, {
      name: '박민수',
      email: 'park@example.com'
    }, {
      name: '최수진',
      email: 'choi@example.com'
    }];
    return <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          사용자 선택
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>담당자 선택</DialogTitle>
          <List sx={{
          pt: 0
        }}>
            {users.map(user => <ListItem key={user.email} component="button" onClick={() => setOpen(false)} sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'action.hover'
            }
          }}>
                <ListItemAvatar>
                  <Avatar sx={{
                bgcolor: 'primary.main'
              }}>
                    {user.name[0]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.name} secondary={user.email} />
              </ListItem>)}
          </List>
        </Dialog>
      </>;
  }
}`,...N.parameters?.docs?.source},description:{story:"리스트 대화상자",...N.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          설정 열기
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle sx={{
          m: 0,
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
            <Typography variant="h6" component="span">
              설정
            </Typography>
            <IconButton onClick={() => setOpen(false)} sx={{
            color: 'grey.500'
          }}>
              <Box component="span" sx={{
              fontSize: 20
            }}>✕</Box>
            </IconButton>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <Stack spacing={3}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  알림 설정
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  이메일 알림, 푸시 알림 등을 설정할 수 있습니다.
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  개인정보
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  프로필 정보와 개인정보 보호 설정을 관리합니다.
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  보안
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  비밀번호 변경, 2단계 인증 등 보안 설정을 관리합니다.
                </Typography>
              </Box>
            </Stack>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={() => setOpen(false)}>닫기</Button>
            <Button onClick={() => setOpen(false)} variant="contained">
              저장
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...U.parameters?.docs?.source},description:{story:"커스텀 헤더",...U.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    return <>
        <Button variant="outlined" onClick={() => setOpen1(true)}>
          첫 번째 대화상자
        </Button>

        <Dialog open={open1} onClose={() => setOpen1(false)}>
          <DialogTitle>첫 번째 대화상자</DialogTitle>
          <DialogContent>
            <DialogContentText>
              대화상자 안에서 다른 대화상자를 열 수 있습니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen1(false)}>닫기</Button>
            <Button onClick={() => setOpen2(true)} variant="contained">
              다음 대화상자 열기
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={open2} onClose={() => setOpen2(false)}>
          <DialogTitle>두 번째 대화상자</DialogTitle>
          <DialogContent>
            <DialogContentText>
              이것은 중첩된 대화상자입니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen2(false)} variant="contained">
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...G.parameters?.docs?.source},description:{story:"중첩 대화상자",...G.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          로그인
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
          <DialogTitle sx={{
          textAlign: 'center',
          pt: 4
        }}>
            <Typography variant="h5" sx={{
            fontWeight: 700
          }}>
              로그인
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2} sx={{
            mt: 1
          }}>
              <TextField label="이메일" type="email" fullWidth variant="outlined" />
              <TextField label="비밀번호" type="password" fullWidth variant="outlined" />
              <Button variant="contained" fullWidth size="large">
                로그인
              </Button>
              <Divider>또는</Divider>
              <Button variant="outlined" fullWidth>
                Google로 계속하기
              </Button>
            </Stack>
          </DialogContent>
          <DialogActions sx={{
          justifyContent: 'center',
          pb: 3
        }}>
            <Typography variant="body2" color="text.secondary">
              계정이 없으신가요?
              <Button size="small">회원가입</Button>
            </Typography>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...$.parameters?.docs?.source},description:{story:"실제 사용 예시 - 로그인",...$.parameters?.docs?.description}}};const St=["Default","Confirmation","FormDialog","Alert","Sizes","Scrollable","ListDialog","CustomHeader","Nested","LoginDialog"];export{R as Alert,F as Confirmation,U as CustomHeader,w as Default,P as FormDialog,N as ListDialog,$ as LoginDialog,G as Nested,M as Scrollable,z as Sizes,St as __namedExportsOrder,Dt as default};
