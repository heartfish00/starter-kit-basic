import{r as j,j as e}from"./iframe-BWgkq3nG.js";import{B as t}from"./Box-B4QF7xQt.js";import{T as o}from"./Typography-Crr089TM.js";import{B as x}from"./Button-DjpYfm2Y.js";import{P as g}from"./Paper-BPbdMq_H.js";import{a as w,b as U,c as y,T as d,d as z}from"./TableRow-Bj3wSUr6.js";import{C as p}from"./Chip-GrVheW_z.js";import{A as W}from"./Alert-BYfZU7EM.js";import{G as m}from"./Grid-Cw9YSzFF.js";import{u as A}from"./useTheme-CPxBch2_.js";import{D,a as R,b as P,c as M}from"./DialogTitle-BY4Lxrn1.js";import{T as O,a as S}from"./Tab-C8goB82A.js";import{C as E,a as L}from"./CardContent-D992YUE6.js";import{F}from"./FormLabel-DMuR5-Ws.js";import{I as H}from"./InputLabel-B1sbly18.js";import{S as V}from"./Select-vJ_dQeDl.js";import{M as B}from"./MenuItem-D--KqcPq.js";import{T as G}from"./TextField-Cmma3gLP.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-wZLTRCdj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BrHEvKFd.js";import"./useTimeout-BL3CCW4_.js";import"./CircularProgress-CDkyS_V7.js";import"./createSvgIcon-B2KGxEB9.js";import"./useSlot-OsDyiYkB.js";import"./IconButton-BlYvHqG4.js";import"./useThemeProps-BQFY9YMS.js";import"./isMuiElement-Dnj352N-.js";import"./useSlotProps-D3eyalIf.js";import"./KeyboardArrowRight-K3a6UMEd.js";import"./utils-C3e22Fhs.js";import"./utils-WEb9flUJ.js";import"./index-C3Q5W1AK.js";import"./index-C35CsaQh.js";import"./mergeSlotProps-CAj06Lhe.js";import"./listItemTextClasses-B4_rjIbA.js";import"./dividerClasses-B3yZpvVG.js";import"./FormHelperText-jpz2YTJd.js";const C={Button:{name:"Button",description:"클릭 가능한 인터랙션 요소. 주요 액션을 유도하는 데 사용됩니다.",variants:["contained","outlined","text"],sizes:["small","medium","large"],tokens:{palette:{items:[{token:"primary",role:"기본 버튼 색상"},{token:"secondary",role:"보조 버튼 색상"},{token:"error",role:"삭제/위험 액션"},{token:"warning",role:"주의 필요 액션"},{token:"success",role:"완료/확인 액션"},{token:"info",role:"정보성 액션"}],affects:"배경색 (contained), 테두리색 (outlined), 텍스트색",howToUse:'color prop으로 지정 (예: color="primary")'},typography:{items:[{token:"button",role:"버튼 텍스트 스타일"}],affects:"폰트 크기 (14px), 굵기 (600), 자간 (0.02em)",howToUse:"자동 적용 (theme.typography.button)"},spacing:{items:[{token:"spacing(1)",role:"small 버튼 padding"},{token:"spacing(2)",role:"medium 버튼 padding"},{token:"spacing(3)",role:"large 버튼 padding"}],affects:"버튼 내부 여백",howToUse:"size prop으로 간접 조절"},shape:{items:[{token:"borderRadius",role:"버튼 모서리 곡률"}],affects:"버튼 외곽선 모서리",howToUse:"theme.shape.borderRadius (현재: 0px)"},shadows:{items:[{token:"elevation1",role:"기본 그림자"},{token:"elevation2",role:"hover 시 그림자"}],affects:"contained 버튼의 그림자",howToUse:"disableElevation prop으로 제거 가능"},transitions:{items:[{token:"duration.short",role:"상태 변화 속도"},{token:"easing.easeInOut",role:"애니메이션 곡선"}],affects:"hover, focus, active 전환 효과",howToUse:"자동 적용"}},stateTokens:{hover:"palette.action.hover (배경 오버레이)",focus:"palette.action.focus + focusVisible 링",active:"palette.[color].dark (어두운 색상)",disabled:"palette.action.disabled, disabledBackground"}},Typography:{name:"Typography",description:"텍스트를 표시하는 컴포넌트. 제목부터 본문까지 다양한 텍스트 스타일을 제공합니다.",variants:["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","overline"],tokens:{typography:{items:[{token:"h1",role:"가장 큰 제목 (40px, 900)"},{token:"h2",role:"섹션 제목 (32px, 900)"},{token:"h3",role:"하위 섹션 제목 (28px, 800)"},{token:"h4",role:"카드 제목 (24px, 700)"},{token:"h5",role:"작은 제목 (20px, 700)"},{token:"h6",role:"가장 작은 제목 (18px, 600)"},{token:"subtitle1",role:"부제목 (16px, 500)"},{token:"subtitle2",role:"작은 부제목 (14px, 500)"},{token:"body1",role:"기본 본문 (16px)"},{token:"body2",role:"보조 본문 (14px)"},{token:"caption",role:"캡션/주석 (12px)"},{token:"overline",role:"라벨/분류 (12px, 대문자)"}],affects:"fontFamily, fontSize, fontWeight, lineHeight, letterSpacing",howToUse:"variant prop으로 지정"},palette:{items:[{token:"text.primary",role:"주요 텍스트 색상"},{token:"text.secondary",role:"보조 텍스트 색상"},{token:"text.disabled",role:"비활성 텍스트 색상"},{token:"primary.main",role:"강조 텍스트"},{token:"error.main",role:"오류 텍스트"}],affects:"텍스트 색상",howToUse:'color prop으로 지정 (예: color="textSecondary")'}}},TextField:{name:"TextField",description:"텍스트 입력 필드. 사용자로부터 텍스트 데이터를 입력받습니다.",variants:["outlined","filled","standard"],tokens:{palette:{items:[{token:"primary.main",role:"focus 시 테두리/라벨 색상"},{token:"error.main",role:"오류 상태 색상"},{token:"text.primary",role:"입력 텍스트 색상"},{token:"text.secondary",role:"라벨/플레이스홀더 색상"},{token:"action.hover",role:"hover 시 배경"},{token:"action.disabled",role:"비활성 상태"}],affects:"테두리, 라벨, 입력 텍스트, 배경 색상",howToUse:"color, error prop으로 지정"},typography:{items:[{token:"body1",role:"입력 텍스트 스타일"},{token:"caption",role:"helperText 스타일"},{token:"body2",role:"라벨 스타일"}],affects:"입력 필드 내 텍스트 스타일",howToUse:"자동 적용"},spacing:{items:[{token:"spacing(1.5)",role:"내부 padding"},{token:"spacing(1)",role:"helperText 간격"}],affects:"필드 내부 여백",howToUse:"size, margin prop으로 조절"},shape:{items:[{token:"borderRadius",role:"필드 모서리"}],affects:"outlined, filled variant 모서리",howToUse:"theme.shape.borderRadius"},transitions:{items:[{token:"duration.shorter",role:"focus 전환 속도"}],affects:"테두리 색상, 라벨 위치 전환",howToUse:"자동 적용"}},stateTokens:{hover:"테두리 색상 진해짐",focus:"primary.main 테두리, 라벨 축소 이동",error:"error.main 테두리/라벨",disabled:"action.disabled 배경, 텍스트"}},Select:{name:"Select",description:"드롭다운 선택 컴포넌트. 여러 옵션 중 하나를 선택할 수 있습니다.",variants:["outlined","filled","standard"],tokens:{palette:{items:[{token:"primary.main",role:"focus 시 테두리 색상"},{token:"text.primary",role:"선택된 값 텍스트"},{token:"text.secondary",role:"라벨/플레이스홀더"},{token:"action.hover",role:"옵션 hover 배경"},{token:"action.selected",role:"선택된 옵션 배경"},{token:"background.paper",role:"드롭다운 메뉴 배경"}],affects:"필드, 드롭다운 메뉴 색상",howToUse:"TextField와 동일"},typography:{items:[{token:"body1",role:"선택된 값 텍스트"},{token:"body2",role:"옵션 텍스트"}],affects:"텍스트 스타일",howToUse:"자동 적용"},shape:{items:[{token:"borderRadius",role:"필드 및 메뉴 모서리"}],affects:"모서리 곡률",howToUse:"theme.shape.borderRadius"},shadows:{items:[{token:"elevation8",role:"드롭다운 메뉴 그림자"}],affects:"메뉴 떠있는 효과",howToUse:"MenuProps로 조절 가능"},zIndex:{items:[{token:"modal",role:"드롭다운 레이어 순서"}],affects:"다른 요소 위에 표시",howToUse:"자동 적용"}}},Card:{name:"Card",description:"콘텐츠를 담는 컨테이너. 관련 정보를 그룹화하여 표시합니다.",subComponents:["CardHeader","CardContent","CardActions","CardMedia"],tokens:{palette:{items:[{token:"background.paper",role:"카드 배경색"},{token:"text.primary",role:"제목 텍스트"},{token:"text.secondary",role:"부제목, 설명 텍스트"},{token:"divider",role:"구분선 색상"}],affects:"카드 배경, 텍스트 색상",howToUse:"sx prop으로 커스텀"},shape:{items:[{token:"borderRadius",role:"카드 모서리"}],affects:"카드 외곽 모서리",howToUse:"theme.shape.borderRadius (현재: 0px)"},shadows:{items:[{token:"elevation1",role:"기본 그림자"},{token:"elevation2-24",role:"elevation prop 값"}],affects:"카드 떠있는 효과",howToUse:"elevation prop으로 지정"},spacing:{items:[{token:"spacing(2)",role:"CardContent padding"},{token:"spacing(1)",role:"CardActions padding"}],affects:"내부 여백",howToUse:"자동 적용, sx로 조절"}}},Table:{name:"Table",description:"데이터를 행과 열로 구성하여 표시하는 테이블 컴포넌트.",subComponents:["TableHead","TableBody","TableRow","TableCell","TablePagination"],tokens:{palette:{items:[{token:"background.paper",role:"테이블 배경"},{token:"text.primary",role:"셀 텍스트"},{token:"text.secondary",role:"보조 텍스트"},{token:"divider",role:"셀 구분선"},{token:"action.hover",role:"행 hover 배경"},{token:"action.selected",role:"선택된 행 배경"}],affects:"배경, 텍스트, 구분선 색상",howToUse:"sx prop으로 커스텀"},typography:{items:[{token:"body2",role:"셀 텍스트 (14px)"},{token:"subtitle2",role:"헤더 셀 텍스트"}],affects:"텍스트 스타일",howToUse:"자동 적용"},spacing:{items:[{token:"spacing(2)",role:"셀 padding"}],affects:"셀 내부 여백",howToUse:"size prop (small, medium)"}},stateTokens:{hover:"action.hover 행 배경",selected:"action.selected 행 배경",sortActive:"primary.main 정렬 아이콘"}},Chip:{name:"Chip",description:"태그, 상태, 카테고리를 표시하는 작은 컴포넌트.",variants:["filled","outlined"],sizes:["small","medium"],tokens:{palette:{items:[{token:"default",role:"기본 회색 배경"},{token:"primary",role:"주요 강조"},{token:"secondary",role:"보조 강조"},{token:"error",role:"오류/삭제 상태"},{token:"warning",role:"주의 상태"},{token:"success",role:"성공/완료 상태"},{token:"info",role:"정보 상태"}],affects:"배경색 (filled), 테두리색 (outlined)",howToUse:"color prop으로 지정"},typography:{items:[{token:"body2",role:"칩 텍스트 스타일"}],affects:"라벨 텍스트",howToUse:"자동 적용"},shape:{items:[{token:"16px (커스텀)",role:"칩 모서리 (pill 형태)"}],affects:"둥근 모서리",howToUse:"theme.components.MuiChip (현재: 4px)"},spacing:{items:[{token:"spacing(0.5)",role:"아이콘-텍스트 간격"},{token:"spacing(1)",role:"내부 padding"}],affects:"내부 여백",howToUse:"size prop으로 조절"}},stateTokens:{hover:"배경색 진해짐 (clickable)",focus:"focusVisible 링",disabled:"action.disabled"}},Alert:{name:"Alert",description:"사용자에게 중요한 메시지를 전달하는 피드백 컴포넌트.",variants:["standard","filled","outlined"],severities:["error","warning","success","info"],tokens:{palette:{items:[{token:"error",role:"오류 메시지 (빨간색)"},{token:"warning",role:"경고 메시지 (주황색)"},{token:"success",role:"성공 메시지 (초록색)"},{token:"info",role:"정보 메시지 (파란색)"}],affects:"배경색, 아이콘색, 텍스트색",howToUse:"severity prop으로 지정"},typography:{items:[{token:"body2",role:"메시지 텍스트"},{token:"subtitle2",role:"제목 텍스트 (AlertTitle)"}],affects:"텍스트 스타일",howToUse:"자동 적용"},shape:{items:[{token:"borderRadius",role:"Alert 모서리"}],affects:"외곽 모서리",howToUse:"theme.shape.borderRadius"},spacing:{items:[{token:"spacing(1.5)",role:"내부 padding"},{token:"spacing(1.5)",role:"아이콘-텍스트 간격"}],affects:"내부 여백",howToUse:"자동 적용"}}},Tabs:{name:"Tabs",description:"콘텐츠를 탭으로 구분하여 네비게이션하는 컴포넌트.",subComponents:["Tab"],tokens:{palette:{items:[{token:"primary.main",role:"선택된 탭, indicator 색상"},{token:"text.primary",role:"선택된 탭 텍스트"},{token:"text.secondary",role:"비선택 탭 텍스트"},{token:"action.hover",role:"탭 hover 배경"},{token:"divider",role:"탭 구분선 (선택적)"}],affects:"탭 텍스트, indicator 색상",howToUse:"textColor, indicatorColor prop"},typography:{items:[{token:"button",role:"탭 텍스트 스타일"}],affects:"탭 라벨 텍스트",howToUse:"자동 적용"},spacing:{items:[{token:"spacing(2)",role:"탭 내부 padding"},{token:"spacing(3)",role:"탭 간 간격"}],affects:"탭 크기, 간격",howToUse:"자동 적용"},transitions:{items:[{token:"duration.standard",role:"indicator 이동 속도"}],affects:"indicator 슬라이드 애니메이션",howToUse:"자동 적용"}},stateTokens:{hover:"action.hover 배경",selected:"primary.main 텍스트, indicator",disabled:"text.disabled"}},Dialog:{name:"Dialog",description:"모달 창. 사용자의 주의를 끌어 중요한 정보나 액션을 요청합니다.",subComponents:["DialogTitle","DialogContent","DialogActions"],tokens:{palette:{items:[{token:"background.paper",role:"다이얼로그 배경"},{token:"text.primary",role:"제목, 본문 텍스트"},{token:"text.secondary",role:"보조 텍스트"},{token:"divider",role:"섹션 구분선"},{token:"action.active",role:"backdrop (어두운 오버레이)"}],affects:"배경, 텍스트, backdrop 색상",howToUse:"sx prop으로 커스텀"},typography:{items:[{token:"h6",role:"DialogTitle 텍스트"},{token:"body1",role:"DialogContent 텍스트"}],affects:"텍스트 스타일",howToUse:"자동 적용"},shape:{items:[{token:"borderRadius",role:"다이얼로그 모서리"}],affects:"외곽 모서리",howToUse:"theme.shape.borderRadius"},shadows:{items:[{token:"elevation24",role:"다이얼로그 그림자"}],affects:"떠있는 효과",howToUse:"자동 적용 (가장 높은 elevation)"},zIndex:{items:[{token:"modal (1300)",role:"레이어 순서"}],affects:"다른 모든 요소 위에 표시",howToUse:"자동 적용"},spacing:{items:[{token:"spacing(2)",role:"DialogTitle padding"},{token:"spacing(3)",role:"DialogContent padding"},{token:"spacing(1)",role:"DialogActions padding"}],affects:"내부 여백",howToUse:"자동 적용"},transitions:{items:[{token:"duration.enteringScreen",role:"열림 애니메이션"},{token:"duration.leavingScreen",role:"닫힘 애니메이션"}],affects:"나타남/사라짐 효과",howToUse:"TransitionComponent prop"}}}},h={palette:{name:"Palette",description:"색상 토큰",figmaAnalogy:"Color Styles / Variables",icon:"🎨"},typography:{name:"Typography",description:"타이포그래피 토큰",figmaAnalogy:"Text Styles",icon:"📝"},spacing:{name:"Spacing",description:"간격 토큰 (8px 기반)",figmaAnalogy:"Auto Layout spacing",icon:"📐"},shape:{name:"Shape",description:"모양 토큰",figmaAnalogy:"Corner Radius",icon:"⬜"},shadows:{name:"Shadows",description:"그림자/Elevation 토큰",figmaAnalogy:"Drop Shadow Effects",icon:"🌑"},transitions:{name:"Transitions",description:"전환 효과 토큰",figmaAnalogy:"Smart Animate",icon:"⏱️"},zIndex:{name:"Z-Index",description:"레이어 순서",figmaAnalogy:"Layer Order",icon:"📚"}},v=["Button","Typography","TextField","Select","Card","Table","Chip","Alert","Tabs","Dialog"],De={title:"Style/Component Tokens",parameters:{layout:"padded",docs:{description:{component:`
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
        `}}}},T=({category:r})=>{const l={palette:"🎨",typography:"📝",spacing:"📐",shape:"⬜",shadows:"🌑",transitions:"⏱️",zIndex:"📚"};return e.jsx("span",{children:l[r]||"📦"})},_=({category:r,count:l})=>e.jsx(p,{size:"small",label:e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:.5},children:[e.jsx(T,{category:r}),e.jsx("span",{children:h[r]?.name||r}),e.jsxs(o,{component:"span",sx:{fontSize:"10px",opacity:.7},children:["(",l,")"]})]}),sx:{backgroundColor:"grey.100","&:hover":{backgroundColor:"grey.200"}}}),N=({componentName:r})=>{A();const[l,a]=j.useState(!1),[s,i]=j.useState(0);return{Button:e.jsxs(t,{sx:{display:"flex",gap:1,flexWrap:"wrap"},children:[e.jsx(x,{variant:"contained",size:"small",children:"Contained"}),e.jsx(x,{variant:"outlined",size:"small",children:"Outlined"}),e.jsx(x,{variant:"text",size:"small",children:"Text"})]}),Typography:e.jsxs(t,{children:[e.jsx(o,{variant:"h6",children:"Heading"}),e.jsx(o,{variant:"body2",color:"text.secondary",children:"Body text"})]}),TextField:e.jsx(G,{size:"small",label:"Label",placeholder:"Placeholder",sx:{width:200}}),Select:e.jsxs(F,{size:"small",sx:{width:200},children:[e.jsx(H,{children:"Select"}),e.jsxs(V,{label:"Select",value:"",children:[e.jsx(B,{value:"1",children:"Option 1"}),e.jsx(B,{value:"2",children:"Option 2"})]})]}),Card:e.jsx(E,{sx:{width:200},children:e.jsxs(L,{sx:{p:1.5,"&:last-child":{pb:1.5}},children:[e.jsx(o,{variant:"subtitle2",children:"Card Title"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"Card content"})]})}),Table:e.jsxs(w,{size:"small",sx:{width:250},children:[e.jsx(U,{children:e.jsxs(y,{children:[e.jsx(d,{sx:{py:.5},children:"Name"}),e.jsx(d,{sx:{py:.5},children:"Value"})]})}),e.jsx(z,{children:e.jsxs(y,{children:[e.jsx(d,{sx:{py:.5},children:"Item"}),e.jsx(d,{sx:{py:.5},children:"100"})]})})]}),Chip:e.jsxs(t,{sx:{display:"flex",gap:.5},children:[e.jsx(p,{label:"Default",size:"small"}),e.jsx(p,{label:"Primary",size:"small",color:"primary"}),e.jsx(p,{label:"Success",size:"small",color:"success"})]}),Alert:e.jsx(t,{sx:{display:"flex",flexDirection:"column",gap:.5,width:250},children:e.jsx(W,{severity:"info",sx:{py:0},children:"Info message"})}),Tabs:e.jsxs(O,{value:s,onChange:(c,f)=>i(f),children:[e.jsx(S,{label:"Tab 1"}),e.jsx(S,{label:"Tab 2"})]}),Dialog:e.jsxs(e.Fragment,{children:[e.jsx(x,{variant:"outlined",size:"small",onClick:()=>a(!0),children:"Open Dialog"}),e.jsxs(D,{open:l,onClose:()=>a(!1),maxWidth:"xs",children:[e.jsx(R,{children:"Dialog Title"}),e.jsx(P,{children:e.jsx(o,{variant:"body2",children:"Dialog content goes here."})}),e.jsx(M,{children:e.jsx(x,{onClick:()=>a(!1),children:"Close"})})]})]})}[r]||e.jsx(o,{color:"text.secondary",children:"Preview not available"})},Z=({tokens:r})=>e.jsx(t,{sx:{mt:2},children:Object.entries(r).map(([l,a])=>e.jsxs(t,{sx:{mb:3},children:[e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[e.jsx(T,{category:l}),e.jsx(o,{variant:"subtitle2",sx:{fontWeight:600},children:h[l]?.name||l})]}),e.jsxs(g,{variant:"outlined",sx:{overflow:"hidden"},children:[e.jsxs(w,{size:"small",children:[e.jsx(U,{children:e.jsxs(y,{sx:{backgroundColor:"grey.50"},children:[e.jsx(d,{sx:{fontWeight:600,width:"30%"},children:"토큰"}),e.jsx(d,{sx:{fontWeight:600},children:"역할"})]})}),e.jsx(z,{children:a.items.map((s,i)=>e.jsxs(y,{children:[e.jsx(d,{children:e.jsx(o,{component:"code",sx:{fontSize:"12px",backgroundColor:"grey.100",px:.75,py:.25,borderRadius:.5},children:s.token})}),e.jsx(d,{children:e.jsx(o,{variant:"body2",children:s.role})})]},i))})]}),(a.affects||a.howToUse)&&e.jsxs(t,{sx:{p:1.5,backgroundColor:"grey.50",borderTop:"1px solid",borderColor:"divider"},children:[a.affects&&e.jsxs(o,{variant:"caption",color:"text.secondary",sx:{display:"block"},children:[e.jsx("strong",{children:"영향:"})," ",a.affects]}),a.howToUse&&e.jsxs(o,{variant:"caption",color:"text.secondary",sx:{display:"block"},children:[e.jsx("strong",{children:"사용법:"})," ",a.howToUse]})]})]})]},l))}),$=({componentName:r,isExpanded:l,onToggle:a})=>{const s=C[r];if(!s)return null;const i=Object.values(s.tokens).reduce((n,c)=>n+c.items.length,0);return e.jsxs(g,{sx:{mb:2,overflow:"hidden"},children:[e.jsxs(t,{onClick:a,sx:{p:2,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between","&:hover":{backgroundColor:"action.hover"}},children:[e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(o,{variant:"h6",sx:{fontWeight:700},children:s.name}),e.jsx(o,{variant:"body2",color:"text.secondary",children:s.description})]}),e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:1},children:[e.jsx(p,{label:`${i} tokens`,size:"small",color:"primary",variant:"outlined"}),e.jsx(o,{sx:{fontSize:"20px"},children:l?"▼":"▶"})]})]}),l&&e.jsx(t,{sx:{borderTop:"1px solid",borderColor:"divider"},children:e.jsxs(m,{container:!0,children:[e.jsx(m,{size:{xs:12,md:4},children:e.jsxs(t,{sx:{p:3,backgroundColor:"grey.50",height:"100%"},children:[e.jsx(o,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:2},children:"Preview"}),e.jsx(N,{componentName:r}),s.variants&&e.jsxs(t,{sx:{mt:3},children:[e.jsx(o,{variant:"caption",color:"text.secondary",sx:{display:"block",mb:1},children:"Variants"}),e.jsx(t,{sx:{display:"flex",gap:.5,flexWrap:"wrap"},children:s.variants.map(n=>e.jsx(p,{label:n,size:"small",variant:"outlined"},n))})]}),s.sizes&&e.jsxs(t,{sx:{mt:2},children:[e.jsx(o,{variant:"caption",color:"text.secondary",sx:{display:"block",mb:1},children:"Sizes"}),e.jsx(t,{sx:{display:"flex",gap:.5,flexWrap:"wrap"},children:s.sizes.map(n=>e.jsx(p,{label:n,size:"small",variant:"outlined"},n))})]})]})}),e.jsx(m,{size:{xs:12,md:8},children:e.jsxs(t,{sx:{p:3},children:[e.jsx(o,{variant:"overline",color:"text.secondary",sx:{display:"block",mb:1},children:"Token Categories"}),e.jsx(t,{sx:{display:"flex",gap:1,flexWrap:"wrap",mb:2},children:Object.entries(s.tokens).map(([n,c])=>e.jsx(_,{category:n,count:c.items.length},n))}),e.jsx(Z,{tokens:s.tokens}),s.stateTokens&&e.jsxs(t,{sx:{mt:3,p:2,backgroundColor:"#e3f2fd",borderRadius:1},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:600,mb:1},children:"상태별 토큰"}),e.jsx(m,{container:!0,spacing:1,children:Object.entries(s.stateTokens).map(([n,c])=>e.jsx(m,{size:{xs:6},children:e.jsxs(o,{variant:"caption",children:[e.jsxs("strong",{children:[n,":"]})," ",c]})},n))})]})]})})]})})]})},k={render:()=>{const[r,l]=j.useState(["Button"]),a=n=>{l(c=>c.includes(n)?c.filter(f=>f!==n):[...c,n])},s=()=>l(v),i=()=>l([]);return e.jsxs(t,{sx:{maxWidth:1200},children:[e.jsx(o,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Component Token Usage"}),e.jsx(o,{variant:"body1",color:"text.secondary",sx:{mb:3},children:"각 MUI 컴포넌트가 테마의 어떤 토큰을 사용하는지 확인합니다."}),e.jsxs(t,{sx:{display:"flex",gap:1,mb:3},children:[e.jsx(x,{variant:"outlined",size:"small",onClick:s,children:"모두 펼치기"}),e.jsx(x,{variant:"outlined",size:"small",onClick:i,children:"모두 접기"})]}),v.map(n=>e.jsx($,{componentName:n,isExpanded:r.includes(n),onToggle:()=>a(n)},n)),e.jsxs(g,{sx:{p:3,mt:4,backgroundColor:"#fff3e0"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:600,mb:1},children:"💡 디자이너를 위한 팁"}),e.jsxs(o,{variant:"body2",children:["• ",e.jsx("strong",{children:"palette"})," 변경 시: 버튼, 칩, 알림 등 대부분의 컬러풀한 컴포넌트에 영향",e.jsx("br",{}),"• ",e.jsx("strong",{children:"typography"})," 변경 시: 모든 텍스트 요소에 영향",e.jsx("br",{}),"• ",e.jsx("strong",{children:"shape.borderRadius"})," 변경 시: 카드, 버튼, 인풋 필드 등 모서리에 영향",e.jsx("br",{}),"• ",e.jsx("strong",{children:"spacing"})," 변경 시: 모든 컴포넌트의 여백에 영향"]})]})]})}},b={name:"Summary Matrix",render:()=>{const r=["palette","typography","spacing","shape","shadows","transitions","zIndex"],l=v.map(a=>{const s=C[a];return{name:a,categories:r.map(i=>s?.tokens[i]?.items.length||0)}});return e.jsxs(t,{sx:{maxWidth:1e3},children:[e.jsx(o,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Token Usage Matrix"}),e.jsx(o,{variant:"body1",color:"text.secondary",sx:{mb:3},children:"컴포넌트 × 토큰 카테고리 매트릭스. 숫자는 사용하는 토큰 개수입니다."}),e.jsx(g,{sx:{overflow:"auto"},children:e.jsxs(w,{size:"small",children:[e.jsx(U,{children:e.jsxs(y,{sx:{backgroundColor:"grey.100"},children:[e.jsx(d,{sx:{fontWeight:700,position:"sticky",left:0,backgroundColor:"grey.100"},children:"Component"}),r.map(a=>e.jsx(d,{align:"center",sx:{fontWeight:600},children:e.jsxs(t,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:.5},children:[e.jsx(T,{category:a}),e.jsx(o,{variant:"caption",children:h[a]?.name})]})},a))]})}),e.jsx(z,{children:l.map(a=>e.jsxs(y,{sx:{"&:hover":{backgroundColor:"action.hover"}},children:[e.jsx(d,{sx:{fontWeight:600,position:"sticky",left:0,backgroundColor:"background.paper"},children:a.name}),a.categories.map((s,i)=>e.jsx(d,{align:"center",children:s>0?e.jsx(p,{label:s,size:"small",sx:{minWidth:32,backgroundColor:s>=5?"primary.light":s>=3?"grey.200":"grey.100",color:s>=5?"primary.contrastText":"text.primary"}}):e.jsx(o,{color:"text.disabled",children:"-"})},i))]},a.name))})]})}),e.jsxs(t,{sx:{mt:3,display:"flex",gap:2,alignItems:"center"},children:[e.jsx(o,{variant:"caption",color:"text.secondary",children:"범례:"}),e.jsx(p,{label:"5+",size:"small",sx:{backgroundColor:"primary.light",color:"white"}}),e.jsx(o,{variant:"caption",children:"많이 사용"}),e.jsx(p,{label:"3-4",size:"small",sx:{backgroundColor:"grey.200"}}),e.jsx(o,{variant:"caption",children:"보통"}),e.jsx(p,{label:"1-2",size:"small",sx:{backgroundColor:"grey.100"}}),e.jsx(o,{variant:"caption",children:"적게 사용"})]})]})}},u={name:"By Token",render:()=>{const[r,l]=j.useState("palette"),s=(i=>v.filter(n=>C[n]?.tokens[i]?.items.length>0))(r);return e.jsxs(t,{sx:{maxWidth:1e3},children:[e.jsx(o,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Token → Components"}),e.jsx(o,{variant:"body1",color:"text.secondary",sx:{mb:3},children:"특정 토큰 카테고리를 변경하면 어떤 컴포넌트에 영향을 주는지 확인합니다."}),e.jsx(t,{sx:{display:"flex",gap:1,mb:4,flexWrap:"wrap"},children:Object.keys(h).map(i=>e.jsx(p,{label:e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:.5},children:[e.jsx(T,{category:i}),h[i].name]}),onClick:()=>l(i),color:r===i?"primary":"default",variant:r===i?"filled":"outlined"},i))}),e.jsxs(g,{sx:{p:3},children:[e.jsxs(t,{sx:{display:"flex",alignItems:"center",gap:2,mb:3},children:[e.jsxs(o,{variant:"h5",sx:{fontWeight:600},children:[e.jsx(T,{category:r})," ",h[r]?.name]}),e.jsx(o,{variant:"body2",color:"text.secondary",children:h[r]?.description})]}),e.jsxs(W,{severity:"info",sx:{mb:3},children:[e.jsxs("strong",{children:[s.length,"개 컴포넌트"]}),"가 이 토큰 카테고리를 사용합니다. 이 토큰을 변경하면 아래 컴포넌트들의 스타일이 변경됩니다."]}),e.jsx(m,{container:!0,spacing:2,children:s.map(i=>{const n=C[i],c=n?.tokens[r]?.items||[];return e.jsx(m,{size:{xs:12,sm:6,md:4},children:e.jsxs(g,{variant:"outlined",sx:{p:2,height:"100%"},children:[e.jsx(o,{variant:"subtitle1",sx:{fontWeight:600,mb:1},children:i}),e.jsx(t,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:c.map((f,I)=>e.jsx(p,{label:f.token,size:"small",sx:{fontSize:"11px",height:24}},I))}),n?.tokens[r]?.affects&&e.jsxs(o,{variant:"caption",color:"text.secondary",sx:{display:"block",mt:1},children:["→ ",n.tokens[r].affects]})]})},i)})})]})]})}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [expandedComponents, setExpandedComponents] = useState(['Button']);
    const toggleComponent = name => {
      setExpandedComponents(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);
    };
    const expandAll = () => setExpandedComponents(componentList);
    const collapseAll = () => setExpandedComponents([]);
    return <Box sx={{
      maxWidth: 1200
    }}>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          Component Token Usage
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 3
      }}>
          각 MUI 컴포넌트가 테마의 어떤 토큰을 사용하는지 확인합니다.
        </Typography>

        <Box sx={{
        display: 'flex',
        gap: 1,
        mb: 3
      }}>
          <Button variant="outlined" size="small" onClick={expandAll}>
            모두 펼치기
          </Button>
          <Button variant="outlined" size="small" onClick={collapseAll}>
            모두 접기
          </Button>
        </Box>

        {componentList.map(name => <ComponentProfileCard key={name} componentName={name} isExpanded={expandedComponents.includes(name)} onToggle={() => toggleComponent(name)} />)}

        <Paper sx={{
        p: 3,
        mt: 4,
        backgroundColor: '#fff3e0'
      }}>
          <Typography variant="subtitle2" sx={{
          fontWeight: 600,
          mb: 1
        }}>
            💡 디자이너를 위한 팁
          </Typography>
          <Typography variant="body2">
            • <strong>palette</strong> 변경 시: 버튼, 칩, 알림 등 대부분의 컬러풀한 컴포넌트에 영향<br />
            • <strong>typography</strong> 변경 시: 모든 텍스트 요소에 영향<br />
            • <strong>shape.borderRadius</strong> 변경 시: 카드, 버튼, 인풋 필드 등 모서리에 영향<br />
            • <strong>spacing</strong> 변경 시: 모든 컴포넌트의 여백에 영향
          </Typography>
        </Paper>
      </Box>;
  }
}`,...k.parameters?.docs?.source},description:{story:"기본 - 전체 컴포넌트 토큰 가이드",...k.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Summary Matrix',
  render: () => {
    const categories = ['palette', 'typography', 'spacing', 'shape', 'shadows', 'transitions', 'zIndex'];
    const matrix = componentList.map(name => {
      const component = componentTokenMap[name];
      return {
        name,
        categories: categories.map(cat => component?.tokens[cat]?.items.length || 0)
      };
    });
    return <Box sx={{
      maxWidth: 1000
    }}>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          Token Usage Matrix
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 3
      }}>
          컴포넌트 × 토큰 카테고리 매트릭스. 숫자는 사용하는 토큰 개수입니다.
        </Typography>

        <Paper sx={{
        overflow: 'auto'
      }}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{
              backgroundColor: 'grey.100'
            }}>
                <TableCell sx={{
                fontWeight: 700,
                position: 'sticky',
                left: 0,
                backgroundColor: 'grey.100'
              }}>
                  Component
                </TableCell>
                {categories.map(cat => <TableCell key={cat} align="center" sx={{
                fontWeight: 600
              }}>
                    <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 0.5
                }}>
                      <CategoryIcon category={cat} />
                      <Typography variant="caption">{tokenCategories[cat]?.name}</Typography>
                    </Box>
                  </TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {matrix.map(row => <TableRow key={row.name} sx={{
              '&:hover': {
                backgroundColor: 'action.hover'
              }
            }}>
                  <TableCell sx={{
                fontWeight: 600,
                position: 'sticky',
                left: 0,
                backgroundColor: 'background.paper'
              }}>
                    {row.name}
                  </TableCell>
                  {row.categories.map((count, idx) => <TableCell key={idx} align="center">
                      {count > 0 ? <Chip label={count} size="small" sx={{
                  minWidth: 32,
                  backgroundColor: count >= 5 ? 'primary.light' : count >= 3 ? 'grey.200' : 'grey.100',
                  color: count >= 5 ? 'primary.contrastText' : 'text.primary'
                }} /> : <Typography color="text.disabled">-</Typography>}
                    </TableCell>)}
                </TableRow>)}
            </TableBody>
          </Table>
        </Paper>

        <Box sx={{
        mt: 3,
        display: 'flex',
        gap: 2,
        alignItems: 'center'
      }}>
          <Typography variant="caption" color="text.secondary">범례:</Typography>
          <Chip label="5+" size="small" sx={{
          backgroundColor: 'primary.light',
          color: 'white'
        }} />
          <Typography variant="caption">많이 사용</Typography>
          <Chip label="3-4" size="small" sx={{
          backgroundColor: 'grey.200'
        }} />
          <Typography variant="caption">보통</Typography>
          <Chip label="1-2" size="small" sx={{
          backgroundColor: 'grey.100'
        }} />
          <Typography variant="caption">적게 사용</Typography>
        </Box>
      </Box>;
  }
}`,...b.parameters?.docs?.source},description:{story:"요약 - 토큰 카테고리별 영향 매트릭스",...b.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'By Token',
  render: () => {
    const [selectedCategory, setSelectedCategory] = useState('palette');
    const getComponentsUsingCategory = category => {
      return componentList.filter(name => {
        const component = componentTokenMap[name];
        return component?.tokens[category]?.items.length > 0;
      });
    };
    const affectedComponents = getComponentsUsingCategory(selectedCategory);
    return <Box sx={{
      maxWidth: 1000
    }}>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          Token → Components
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{
        mb: 3
      }}>
          특정 토큰 카테고리를 변경하면 어떤 컴포넌트에 영향을 주는지 확인합니다.
        </Typography>

        <Box sx={{
        display: 'flex',
        gap: 1,
        mb: 4,
        flexWrap: 'wrap'
      }}>
          {Object.keys(tokenCategories).map(cat => <Chip key={cat} label={<Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5
        }}>
                  <CategoryIcon category={cat} />
                  {tokenCategories[cat].name}
                </Box>} onClick={() => setSelectedCategory(cat)} color={selectedCategory === cat ? 'primary' : 'default'} variant={selectedCategory === cat ? 'filled' : 'outlined'} />)}
        </Box>

        <Paper sx={{
        p: 3
      }}>
          <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 3
        }}>
            <Typography variant="h5" sx={{
            fontWeight: 600
          }}>
              <CategoryIcon category={selectedCategory} /> {tokenCategories[selectedCategory]?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {tokenCategories[selectedCategory]?.description}
            </Typography>
          </Box>

          <Alert severity="info" sx={{
          mb: 3
        }}>
            <strong>{affectedComponents.length}개 컴포넌트</strong>가 이 토큰 카테고리를 사용합니다.
            이 토큰을 변경하면 아래 컴포넌트들의 스타일이 변경됩니다.
          </Alert>

          <Grid container spacing={2}>
            {affectedComponents.map(name => {
            const component = componentTokenMap[name];
            const tokens = component?.tokens[selectedCategory]?.items || [];
            return <Grid size={{
              xs: 12,
              sm: 6,
              md: 4
            }} key={name}>
                  <Paper variant="outlined" sx={{
                p: 2,
                height: '100%'
              }}>
                    <Typography variant="subtitle1" sx={{
                  fontWeight: 600,
                  mb: 1
                }}>
                      {name}
                    </Typography>
                    <Box sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 0.5
                }}>
                      {tokens.map((item, idx) => <Chip key={idx} label={item.token} size="small" sx={{
                    fontSize: '11px',
                    height: 24
                  }} />)}
                    </Box>
                    {component?.tokens[selectedCategory]?.affects && <Typography variant="caption" color="text.secondary" sx={{
                  display: 'block',
                  mt: 1
                }}>
                        → {component.tokens[selectedCategory].affects}
                      </Typography>}
                  </Paper>
                </Grid>;
          })}
          </Grid>
        </Paper>
      </Box>;
  }
}`,...u.parameters?.docs?.source},description:{story:"토큰 중심 뷰 - 특정 토큰이 영향주는 컴포넌트",...u.parameters?.docs?.description}}};const Re=["Default","Summary","ByToken"];export{u as ByToken,k as Default,b as Summary,Re as __namedExportsOrder,De as default};
