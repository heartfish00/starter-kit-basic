import{j as e,n as w,o as P,p as z,q as S,s as G,t as R,v as A}from"./iframe-BWgkq3nG.js";import{u as v}from"./useTheme-CPxBch2_.js";import{B as r}from"./Box-B4QF7xQt.js";import{P as i}from"./Paper-BPbdMq_H.js";import{T as o}from"./Typography-Crr089TM.js";import{G as s}from"./Grid-Cw9YSzFF.js";import{D as j}from"./Divider-DpaNVM42.js";import{T as B}from"./TableContainer-ij2fGYf7.js";import{a as k,d as W,c as l,T as t,b as I}from"./TableRow-Bj3wSUr6.js";import{C as n}from"./Chip-GrVheW_z.js";import{B as p}from"./Button-DjpYfm2Y.js";import{A as u}from"./Alert-BYfZU7EM.js";import"./preload-helper-PPVm8Dsz.js";import"./memoTheme-wZLTRCdj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useThemeProps-BQFY9YMS.js";import"./isMuiElement-Dnj352N-.js";import"./dividerClasses-B3yZpvVG.js";import"./createSvgIcon-B2KGxEB9.js";import"./useSlot-OsDyiYkB.js";import"./useTimeout-BL3CCW4_.js";import"./ButtonBase-BrHEvKFd.js";import"./CircularProgress-CDkyS_V7.js";import"./IconButton-BlYvHqG4.js";const se={title:"Style/Colors",parameters:{layout:"padded",docs:{description:{component:`
## 색상 시스템

프로젝트에서 사용하는 색상 팔레트와 역할별 컬러 토큰입니다.

### 구조

| 계층 | 설명 | 예시 |
|------|------|------|
| **Color Palette** | 순수 색상값 모음 | blue[500], grey[100] |
| **Semantic Tokens** | 역할별 의미 부여 | primary, secondary |
| **Component Tokens** | 컴포넌트별 적용 | Button, Alert |
        `}}}},h=({color:a,name:d,value:T,textColor:c="inherit",size:C="medium"})=>e.jsxs(i,{sx:{p:C==="small"?1:2,textAlign:"center"},children:[e.jsx(r,{sx:{width:"100%",height:C==="small"?48:80,backgroundColor:a,mb:1,display:"flex",alignItems:"center",justifyContent:"center"},children:c!=="inherit"&&e.jsx(o,{variant:"caption",sx:{color:c,fontFamily:"monospace"},children:"Aa"})}),e.jsx(o,{variant:C==="small"?"caption":"subtitle2",sx:{fontWeight:600},children:d}),e.jsx(o,{variant:"caption",color:"text.secondary",sx:{fontFamily:"monospace",display:"block"},children:T})]}),x=({name:a,colorObj:d,description:T})=>e.jsxs(r,{sx:{mb:4},children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2,mb:2},children:[e.jsx(o,{variant:"h6",sx:{fontWeight:600},children:a}),e.jsx(o,{variant:"body2",color:"text.secondary",children:T})]}),e.jsx(r,{sx:{display:"flex",gap:.5},children:[50,100,200,300,400,500,600,700,800,900].map(c=>e.jsx(r,{sx:{flex:1,minWidth:0},children:e.jsx(r,{sx:{height:48,backgroundColor:d[c],display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(o,{variant:"caption",sx:{color:c>=500?"white":"rgba(0,0,0,0.7)",fontSize:"10px",fontWeight:600},children:c})})},c))})]}),f=({children:a,subtitle:d})=>e.jsxs(r,{sx:{mb:4},children:[e.jsx(o,{variant:"h4",sx:{fontWeight:700,mb:1},children:a}),d&&e.jsx(o,{variant:"body1",color:"text.secondary",children:d})]}),g={render:()=>{const a=v();return e.jsxs(r,{sx:{maxWidth:1200},children:[e.jsx(f,{subtitle:"색상 시스템의 구조와 계층을 이해합니다.",children:"색상 시스템 개요"}),e.jsxs(i,{sx:{p:4,mb:5,backgroundColor:"#e3f2fd"},children:[e.jsx(o,{variant:"h6",sx:{mb:2,fontWeight:600},children:"💡 피그마로 비유하면"}),e.jsxs(s,{container:!0,spacing:3,children:[e.jsx(s,{size:{xs:12,md:4},children:e.jsxs(i,{sx:{p:3,backgroundColor:"white",height:"100%"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:600,color:"primary.main",mb:1},children:"Color Palette"}),e.jsxs(o,{variant:"body2",color:"text.secondary",children:["= 피그마의 ",e.jsx("strong",{children:"Color Styles 라이브러리"}),e.jsx("br",{}),"blue/500, grey/100 같은 순수 색상값"]})]})}),e.jsx(s,{size:{xs:12,md:4},children:e.jsxs(i,{sx:{p:3,backgroundColor:"white",height:"100%"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:600,color:"secondary.main",mb:1},children:"Semantic Tokens"}),e.jsxs(o,{variant:"body2",color:"text.secondary",children:["= 피그마의 ",e.jsx("strong",{children:"Variables"}),e.jsx("br",{}),"Primary, Error 같은 의미 부여"]})]})}),e.jsx(s,{size:{xs:12,md:4},children:e.jsxs(i,{sx:{p:3,backgroundColor:"white",height:"100%"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:600,color:"success.main",mb:1},children:"Component Tokens"}),e.jsxs(o,{variant:"body2",color:"text.secondary",children:["= 피그마의 ",e.jsx("strong",{children:"Component Variants"}),e.jsx("br",{}),"Button/Primary, Alert/Error 적용"]})]})})]})]}),e.jsx(o,{variant:"h5",sx:{mb:3,fontWeight:600},children:"색상 토큰 계층 구조"}),e.jsx(i,{sx:{p:4,backgroundColor:"#fafafa",mb:5},children:e.jsx(r,{component:"pre",sx:{backgroundColor:"#263238",color:"#80cbc4",p:3,borderRadius:2,fontSize:"12px",lineHeight:1.8,overflow:"auto"},children:`┌─────────────────────────────────────────────────────────────────────┐
│  1️⃣  Color Palette (원시 색상)                                       │
│                                                                     │
│      blue[500]  →  #2196f3                                          │
│      grey[100]  →  #f5f5f5                                          │
│      red[500]   →  #f44336                                          │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              │  의미 부여
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│  2️⃣  Semantic Tokens (역할별 색상)                                   │
│                                                                     │
│      primary.main     →  #0000FF (브랜드 색상)                       │
│      secondary.main   →  #263238 (보조 색상)                         │
│      error.main       →  #d32f2f (오류/위험)                         │
│      success.main     →  #2e7d32 (성공/완료)                         │
│      warning.main     →  #ed6c02 (주의/경고)                         │
│      info.main        →  #0288d1 (정보/안내)                         │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              │  컴포넌트 적용
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│  3️⃣  Component Tokens (컴포넌트별 적용)                              │
│                                                                     │
│      <Button color="primary">   →  primary.main 배경                │
│      <Alert severity="error">   →  error.main 테두리                │
│      <Chip color="success">     →  success.main 배경                │
└─────────────────────────────────────────────────────────────────────┘`})}),e.jsx(o,{variant:"h5",sx:{mb:3,fontWeight:600},children:"현재 프로젝트 주요 색상"}),e.jsxs(s,{container:!0,spacing:3,children:[e.jsx(s,{size:{xs:12,md:6},children:e.jsxs(i,{sx:{p:3},children:[e.jsx(o,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Primary"}),e.jsxs(r,{sx:{display:"flex",gap:2,alignItems:"center"},children:[e.jsx(r,{sx:{width:64,height:64,backgroundColor:a.palette.primary.main}}),e.jsxs(r,{children:[e.jsx(o,{variant:"body2",sx:{fontWeight:600},children:"#0000FF"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"브랜드 색상, CTA 버튼, 링크"})]})]})]})}),e.jsx(s,{size:{xs:12,md:6},children:e.jsxs(i,{sx:{p:3},children:[e.jsx(o,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Secondary"}),e.jsxs(r,{sx:{display:"flex",gap:2,alignItems:"center"},children:[e.jsx(r,{sx:{width:64,height:64,backgroundColor:a.palette.secondary.main}}),e.jsxs(r,{children:[e.jsx(o,{variant:"body2",sx:{fontWeight:600},children:a.palette.secondary.main}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"보조 액션, 비활성 요소"})]})]})]})})]}),e.jsx(r,{sx:{mt:4,p:3,backgroundColor:"#fff3e0",borderRadius:2},children:e.jsxs(o,{variant:"body2",children:["💡 왼쪽 사이드바에서 ",e.jsx("strong",{children:"Palette"}),", ",e.jsx("strong",{children:"Semantic Tokens"}),", ",e.jsx("strong",{children:"Usage"}),"를 클릭하여 상세 내용을 확인하세요."]})})]})}},m={name:"1. Color Palette",render:()=>e.jsxs(r,{sx:{maxWidth:1200},children:[e.jsx(f,{subtitle:"MUI에서 제공하는 기본 색상 팔레트입니다. 이 색상들을 조합하여 테마를 구성합니다.",children:"Color Palette (원시 색상)"}),e.jsxs(i,{sx:{p:4,mb:4,backgroundColor:"#e8f5e9"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:600,color:"#2e7d32",mb:1},children:"💡 피그마 비유"}),e.jsxs(o,{variant:"body2",children:["피그마에서 ",e.jsx("strong",{children:"Primitives"})," 또는 ",e.jsx("strong",{children:"Base Colors"}),"로 정의하는 순수 색상값입니다. blue/500, grey/200 처럼 색상 이름과 명도 숫자로 구성됩니다."]})]}),e.jsx(x,{name:"Blue",colorObj:w,description:"Primary 색상의 기반"}),e.jsx(x,{name:"Blue Grey",colorObj:P,description:"Secondary 색상의 기반"}),e.jsx(x,{name:"Grey",colorObj:z,description:"텍스트, 배경, 보더"}),e.jsx(x,{name:"Red",colorObj:S,description:"Error 상태"}),e.jsx(x,{name:"Orange",colorObj:G,description:"Warning 상태"}),e.jsx(x,{name:"Green",colorObj:R,description:"Success 상태"}),e.jsx(x,{name:"Light Blue",colorObj:A,description:"Info 상태"}),e.jsx(j,{sx:{my:5}}),e.jsx(o,{variant:"h5",sx:{mb:3,fontWeight:600},children:"색상 스케일 사용법"}),e.jsx(i,{sx:{p:4,backgroundColor:"#fafafa"},children:e.jsxs(s,{container:!0,spacing:4,children:[e.jsxs(s,{size:{xs:12,md:6},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:600,mb:2},children:"명도 가이드"}),e.jsx(B,{children:e.jsx(k,{size:"small",children:e.jsxs(W,{children:[e.jsxs(l,{children:[e.jsx(t,{sx:{fontWeight:600},children:"50-100"}),e.jsx(t,{children:"매우 밝음 - 배경색"})]}),e.jsxs(l,{children:[e.jsx(t,{sx:{fontWeight:600},children:"200-300"}),e.jsx(t,{children:"밝음 - hover, 보더"})]}),e.jsxs(l,{children:[e.jsx(t,{sx:{fontWeight:600},children:"400-500"}),e.jsx(t,{children:"기본 - main 색상"})]}),e.jsxs(l,{children:[e.jsx(t,{sx:{fontWeight:600},children:"600-700"}),e.jsx(t,{children:"어두움 - active, dark"})]}),e.jsxs(l,{children:[e.jsx(t,{sx:{fontWeight:600},children:"800-900"}),e.jsx(t,{children:"매우 어두움 - 텍스트"})]})]})})})]}),e.jsxs(s,{size:{xs:12,md:6},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:600,mb:2},children:"코드에서 사용"}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#263238",color:"#aed581",p:2,borderRadius:1,fontSize:"12px"},children:`import { blue, grey } from '@mui/material/colors';

// 직접 사용
<Box sx={{ backgroundColor: blue[500] }} />
<Box sx={{ color: grey[700] }} />

// 테마에서 정의
palette: {
  primary: {
    main: blue[500],    // #2196f3
    light: blue[300],   // #64b5f6
    dark: blue[700],    // #1976d2
  }
}`})]})]})})]})},y={name:"2. Semantic Tokens",render:()=>{const a=v();return e.jsxs(r,{sx:{maxWidth:1200},children:[e.jsx(f,{subtitle:"색상에 의미와 역할을 부여한 토큰입니다. 컴포넌트에서 이 토큰을 참조합니다.",children:"Semantic Tokens (역할별 색상)"}),e.jsxs(i,{sx:{p:4,mb:4,backgroundColor:"#e3f2fd"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:600,color:"#1976d2",mb:1},children:"💡 피그마 비유"}),e.jsxs(o,{variant:"body2",children:["피그마의 ",e.jsx("strong",{children:"Design Tokens"})," 또는 ",e.jsx("strong",{children:"Variables"}),'와 같습니다. "Primary/Main", "Error/Light" 처럼 역할과 상태로 이름을 짓습니다. 나중에 브랜드 색상이 바뀌면 여기만 수정하면 전체에 반영됩니다.']})]}),e.jsx(o,{variant:"h5",sx:{mb:3,fontWeight:600},children:"브랜드 색상"}),e.jsxs(s,{container:!0,spacing:3,sx:{mb:5},children:[e.jsx(s,{size:{xs:12,md:6},children:e.jsxs(i,{sx:{p:3},children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2,mb:3},children:[e.jsx(n,{label:"Primary",color:"primary"}),e.jsx(o,{variant:"body2",color:"text.secondary",children:"브랜드 대표 색상"})]}),e.jsxs(s,{container:!0,spacing:2,children:[e.jsx(s,{size:4,children:e.jsx(h,{color:a.palette.primary.light,name:"Light",value:a.palette.primary.light,textColor:"#000",size:"small"})}),e.jsx(s,{size:4,children:e.jsx(h,{color:a.palette.primary.main,name:"Main",value:"#0000FF",textColor:"#fff",size:"small"})}),e.jsx(s,{size:4,children:e.jsx(h,{color:a.palette.primary.dark,name:"Dark",value:a.palette.primary.dark,textColor:"#fff",size:"small"})})]}),e.jsx(r,{sx:{mt:2,p:2,backgroundColor:"#f5f5f5",borderRadius:1},children:e.jsxs(o,{variant:"caption",color:"text.secondary",children:[e.jsx("strong",{children:"용도:"})," CTA 버튼, 링크, 선택된 상태, 브랜드 강조"]})})]})}),e.jsx(s,{size:{xs:12,md:6},children:e.jsxs(i,{sx:{p:3},children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2,mb:3},children:[e.jsx(n,{label:"Secondary",color:"secondary"}),e.jsx(o,{variant:"body2",color:"text.secondary",children:"보조 색상"})]}),e.jsxs(s,{container:!0,spacing:2,children:[e.jsx(s,{size:4,children:e.jsx(h,{color:a.palette.secondary.light,name:"Light",value:a.palette.secondary.light,textColor:"#000",size:"small"})}),e.jsx(s,{size:4,children:e.jsx(h,{color:a.palette.secondary.main,name:"Main",value:a.palette.secondary.main,textColor:"#fff",size:"small"})}),e.jsx(s,{size:4,children:e.jsx(h,{color:a.palette.secondary.dark,name:"Dark",value:a.palette.secondary.dark,textColor:"#fff",size:"small"})})]}),e.jsx(r,{sx:{mt:2,p:2,backgroundColor:"#f5f5f5",borderRadius:1},children:e.jsxs(o,{variant:"caption",color:"text.secondary",children:[e.jsx("strong",{children:"용도:"})," 보조 버튼, 태그, 덜 중요한 액션"]})})]})})]}),e.jsx(j,{sx:{my:5}}),e.jsx(o,{variant:"h5",sx:{mb:3,fontWeight:600},children:"상태 색상 (Feedback Colors)"}),e.jsx(o,{variant:"body2",color:"text.secondary",sx:{mb:3},children:"사용자에게 시스템 상태를 전달하는 색상입니다. 전 세계적으로 통용되는 의미를 가집니다."}),e.jsxs(s,{container:!0,spacing:3,sx:{mb:4},children:[e.jsx(s,{size:{xs:12,sm:6,md:3},children:e.jsxs(i,{sx:{p:3,borderTop:`4px solid ${a.palette.error.main}`},children:[e.jsx(n,{label:"Error",color:"error",size:"small",sx:{mb:2}}),e.jsxs(r,{sx:{display:"flex",gap:1,mb:2},children:[e.jsx(r,{sx:{flex:1,height:32,backgroundColor:a.palette.error.light}}),e.jsx(r,{sx:{flex:1,height:32,backgroundColor:a.palette.error.main}}),e.jsx(r,{sx:{flex:1,height:32,backgroundColor:a.palette.error.dark}})]}),e.jsxs(o,{variant:"caption",color:"text.secondary",children:[e.jsx("strong",{children:"의미:"})," 오류, 삭제, 위험",e.jsx("br",{}),e.jsx("strong",{children:"예시:"})," 유효성 오류, 삭제 버튼"]})]})}),e.jsx(s,{size:{xs:12,sm:6,md:3},children:e.jsxs(i,{sx:{p:3,borderTop:`4px solid ${a.palette.warning.main}`},children:[e.jsx(n,{label:"Warning",color:"warning",size:"small",sx:{mb:2}}),e.jsxs(r,{sx:{display:"flex",gap:1,mb:2},children:[e.jsx(r,{sx:{flex:1,height:32,backgroundColor:a.palette.warning.light}}),e.jsx(r,{sx:{flex:1,height:32,backgroundColor:a.palette.warning.main}}),e.jsx(r,{sx:{flex:1,height:32,backgroundColor:a.palette.warning.dark}})]}),e.jsxs(o,{variant:"caption",color:"text.secondary",children:[e.jsx("strong",{children:"의미:"})," 주의, 경고",e.jsx("br",{}),e.jsx("strong",{children:"예시:"})," 저장 안 됨, 만료 예정"]})]})}),e.jsx(s,{size:{xs:12,sm:6,md:3},children:e.jsxs(i,{sx:{p:3,borderTop:`4px solid ${a.palette.success.main}`},children:[e.jsx(n,{label:"Success",color:"success",size:"small",sx:{mb:2}}),e.jsxs(r,{sx:{display:"flex",gap:1,mb:2},children:[e.jsx(r,{sx:{flex:1,height:32,backgroundColor:a.palette.success.light}}),e.jsx(r,{sx:{flex:1,height:32,backgroundColor:a.palette.success.main}}),e.jsx(r,{sx:{flex:1,height:32,backgroundColor:a.palette.success.dark}})]}),e.jsxs(o,{variant:"caption",color:"text.secondary",children:[e.jsx("strong",{children:"의미:"})," 성공, 완료, 활성",e.jsx("br",{}),e.jsx("strong",{children:"예시:"})," 저장 완료, 온라인 상태"]})]})}),e.jsx(s,{size:{xs:12,sm:6,md:3},children:e.jsxs(i,{sx:{p:3,borderTop:`4px solid ${a.palette.info.main}`},children:[e.jsx(n,{label:"Info",color:"info",size:"small",sx:{mb:2}}),e.jsxs(r,{sx:{display:"flex",gap:1,mb:2},children:[e.jsx(r,{sx:{flex:1,height:32,backgroundColor:a.palette.info.light}}),e.jsx(r,{sx:{flex:1,height:32,backgroundColor:a.palette.info.main}}),e.jsx(r,{sx:{flex:1,height:32,backgroundColor:a.palette.info.dark}})]}),e.jsxs(o,{variant:"caption",color:"text.secondary",children:[e.jsx("strong",{children:"의미:"})," 정보, 안내",e.jsx("br",{}),e.jsx("strong",{children:"예시:"})," 도움말, 새 기능 안내"]})]})})]}),e.jsx(j,{sx:{my:5}}),e.jsx(o,{variant:"h5",sx:{mb:3,fontWeight:600},children:"텍스트 & 배경 색상"}),e.jsxs(s,{container:!0,spacing:3,children:[e.jsx(s,{size:{xs:12,md:6},children:e.jsxs(i,{sx:{p:3},children:[e.jsx(o,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Text Colors"}),e.jsxs(r,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(r,{sx:{width:40,height:40,backgroundColor:a.palette.text.primary,borderRadius:1}}),e.jsxs(r,{children:[e.jsx(o,{variant:"body2",sx:{fontWeight:600},children:"text.primary"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"주요 텍스트, 제목"})]})]}),e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(r,{sx:{width:40,height:40,backgroundColor:a.palette.text.secondary,borderRadius:1}}),e.jsxs(r,{children:[e.jsx(o,{variant:"body2",sx:{fontWeight:600},children:"text.secondary"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"보조 텍스트, 설명"})]})]}),e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(r,{sx:{width:40,height:40,backgroundColor:a.palette.text.disabled,borderRadius:1}}),e.jsxs(r,{children:[e.jsx(o,{variant:"body2",sx:{fontWeight:600},children:"text.disabled"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"비활성화된 텍스트"})]})]})]})]})}),e.jsx(s,{size:{xs:12,md:6},children:e.jsxs(i,{sx:{p:3},children:[e.jsx(o,{variant:"subtitle1",sx:{fontWeight:600,mb:2},children:"Background Colors"}),e.jsxs(r,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(r,{sx:{width:40,height:40,backgroundColor:a.palette.background.default,border:"1px solid #e0e0e0",borderRadius:1}}),e.jsxs(r,{children:[e.jsx(o,{variant:"body2",sx:{fontWeight:600},children:"background.default"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"페이지 배경"})]})]}),e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(r,{sx:{width:40,height:40,backgroundColor:a.palette.background.paper,border:"1px solid #e0e0e0",borderRadius:1}}),e.jsxs(r,{children:[e.jsx(o,{variant:"body2",sx:{fontWeight:600},children:"background.paper"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"카드, 모달 배경"})]})]}),e.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(r,{sx:{width:40,height:40,backgroundColor:a.palette.divider,borderRadius:1}}),e.jsxs(r,{children:[e.jsx(o,{variant:"body2",sx:{fontWeight:600},children:"divider"}),e.jsx(o,{variant:"caption",color:"text.secondary",children:"구분선, 보더"})]})]})]})]})})]}),e.jsx(j,{sx:{my:5}}),e.jsx(o,{variant:"h5",sx:{mb:3,fontWeight:600},children:"Semantic Token 전체 목록"}),e.jsx(B,{component:i,children:e.jsxs(k,{children:[e.jsx(I,{children:e.jsxs(l,{sx:{backgroundColor:"#f5f5f5"},children:[e.jsx(t,{sx:{fontWeight:700},children:"Token"}),e.jsx(t,{sx:{fontWeight:700},children:"값"}),e.jsx(t,{sx:{fontWeight:700},children:"용도"}),e.jsx(t,{sx:{fontWeight:700},children:"색상"})]})}),e.jsxs(W,{children:[e.jsxs(l,{children:[e.jsx(t,{children:e.jsx("code",{children:"primary.main"})}),e.jsx(t,{children:"#0000FF"}),e.jsx(t,{children:"CTA 버튼, 링크, 선택된 상태"}),e.jsx(t,{children:e.jsx(r,{sx:{width:24,height:24,backgroundColor:a.palette.primary.main}})})]}),e.jsxs(l,{children:[e.jsx(t,{children:e.jsx("code",{children:"secondary.main"})}),e.jsx(t,{children:a.palette.secondary.main}),e.jsx(t,{children:"보조 버튼, 태그"}),e.jsx(t,{children:e.jsx(r,{sx:{width:24,height:24,backgroundColor:a.palette.secondary.main}})})]}),e.jsxs(l,{children:[e.jsx(t,{children:e.jsx("code",{children:"error.main"})}),e.jsx(t,{children:a.palette.error.main}),e.jsx(t,{children:"오류 메시지, 삭제 버튼"}),e.jsx(t,{children:e.jsx(r,{sx:{width:24,height:24,backgroundColor:a.palette.error.main}})})]}),e.jsxs(l,{children:[e.jsx(t,{children:e.jsx("code",{children:"warning.main"})}),e.jsx(t,{children:a.palette.warning.main}),e.jsx(t,{children:"경고 메시지"}),e.jsx(t,{children:e.jsx(r,{sx:{width:24,height:24,backgroundColor:a.palette.warning.main}})})]}),e.jsxs(l,{children:[e.jsx(t,{children:e.jsx("code",{children:"success.main"})}),e.jsx(t,{children:a.palette.success.main}),e.jsx(t,{children:"성공 메시지, 완료 상태"}),e.jsx(t,{children:e.jsx(r,{sx:{width:24,height:24,backgroundColor:a.palette.success.main}})})]}),e.jsxs(l,{children:[e.jsx(t,{children:e.jsx("code",{children:"info.main"})}),e.jsx(t,{children:a.palette.info.main}),e.jsx(t,{children:"정보 메시지, 도움말"}),e.jsx(t,{children:e.jsx(r,{sx:{width:24,height:24,backgroundColor:a.palette.info.main}})})]}),e.jsxs(l,{children:[e.jsx(t,{children:e.jsx("code",{children:"text.primary"})}),e.jsx(t,{children:a.palette.text.primary}),e.jsx(t,{children:"주요 텍스트"}),e.jsx(t,{children:e.jsx(r,{sx:{width:24,height:24,backgroundColor:a.palette.text.primary}})})]}),e.jsxs(l,{children:[e.jsx(t,{children:e.jsx("code",{children:"text.secondary"})}),e.jsx(t,{children:a.palette.text.secondary}),e.jsx(t,{children:"보조 텍스트"}),e.jsx(t,{children:e.jsx(r,{sx:{width:24,height:24,backgroundColor:a.palette.text.secondary}})})]})]})]})})]})}},b={name:"3. Usage",render:()=>(v(),e.jsxs(r,{sx:{maxWidth:1200},children:[e.jsx(f,{subtitle:"Semantic Token이 실제 컴포넌트에 어떻게 적용되는지 확인합니다.",children:"컴포넌트 적용 예시"}),e.jsx(o,{variant:"h5",sx:{mb:3,fontWeight:600},children:"Button 컴포넌트"}),e.jsxs(i,{sx:{p:4,mb:5},children:[e.jsxs(o,{variant:"body2",color:"text.secondary",sx:{mb:3},children:["Button의 ",e.jsx("code",{children:"color"})," prop에 Semantic Token 이름을 전달하면 해당 색상이 적용됩니다."]}),e.jsxs(r,{sx:{display:"flex",gap:2,flexWrap:"wrap",mb:3},children:[e.jsx(p,{variant:"contained",color:"primary",children:"Primary"}),e.jsx(p,{variant:"contained",color:"secondary",children:"Secondary"}),e.jsx(p,{variant:"contained",color:"error",children:"Error"}),e.jsx(p,{variant:"contained",color:"warning",children:"Warning"}),e.jsx(p,{variant:"contained",color:"success",children:"Success"}),e.jsx(p,{variant:"contained",color:"info",children:"Info"})]}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#263238",color:"#aed581",p:2,borderRadius:1,fontSize:"12px"},children:`<Button variant="contained" color="primary">Primary</Button>
<Button variant="contained" color="error">Error</Button>
<Button variant="contained" color="success">Success</Button>`})]}),e.jsx(o,{variant:"h5",sx:{mb:3,fontWeight:600},children:"Alert 컴포넌트"}),e.jsxs(i,{sx:{p:4,mb:5},children:[e.jsxs(o,{variant:"body2",color:"text.secondary",sx:{mb:3},children:["Alert의 ",e.jsx("code",{children:"severity"})," prop으로 상태별 색상을 표현합니다."]}),e.jsxs(r,{sx:{display:"flex",flexDirection:"column",gap:2,mb:3},children:[e.jsx(u,{severity:"error",children:"Error - 오류가 발생했습니다."}),e.jsx(u,{severity:"warning",children:"Warning - 주의가 필요합니다."}),e.jsx(u,{severity:"success",children:"Success - 성공적으로 완료되었습니다."}),e.jsx(u,{severity:"info",children:"Info - 참고 정보입니다."})]}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#263238",color:"#aed581",p:2,borderRadius:1,fontSize:"12px"},children:`<Alert severity="error">오류 메시지</Alert>
<Alert severity="warning">경고 메시지</Alert>
<Alert severity="success">성공 메시지</Alert>
<Alert severity="info">정보 메시지</Alert>`})]}),e.jsx(o,{variant:"h5",sx:{mb:3,fontWeight:600},children:"Chip 컴포넌트"}),e.jsxs(i,{sx:{p:4,mb:5},children:[e.jsxs(o,{variant:"body2",color:"text.secondary",sx:{mb:3},children:["Chip의 ",e.jsx("code",{children:"color"})," prop으로 상태나 카테고리를 표현합니다."]}),e.jsxs(r,{sx:{display:"flex",gap:1,flexWrap:"wrap",mb:3},children:[e.jsx(n,{label:"Primary",color:"primary"}),e.jsx(n,{label:"Secondary",color:"secondary"}),e.jsx(n,{label:"Error",color:"error"}),e.jsx(n,{label:"Warning",color:"warning"}),e.jsx(n,{label:"Success",color:"success"}),e.jsx(n,{label:"Info",color:"info"})]}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#263238",color:"#aed581",p:2,borderRadius:1,fontSize:"12px"},children:`<Chip label="활성" color="success" />
<Chip label="대기중" color="warning" />
<Chip label="오류" color="error" />`})]}),e.jsx(j,{sx:{my:5}}),e.jsx(o,{variant:"h5",sx:{mb:3,fontWeight:600},children:"sx prop으로 직접 사용"}),e.jsxs(i,{sx:{p:4},children:[e.jsxs(o,{variant:"body2",color:"text.secondary",sx:{mb:3},children:[e.jsx("code",{children:"sx"})," prop에서 theme 값을 직접 참조할 수 있습니다."]}),e.jsxs(s,{container:!0,spacing:3,sx:{mb:3},children:[e.jsx(s,{size:{xs:12,md:4},children:e.jsx(r,{sx:{p:3,backgroundColor:"primary.light",color:"primary.dark",textAlign:"center"},children:"primary.light 배경"})}),e.jsx(s,{size:{xs:12,md:4},children:e.jsx(r,{sx:{p:3,backgroundColor:"error.main",color:"white",textAlign:"center"},children:"error.main 배경"})}),e.jsx(s,{size:{xs:12,md:4},children:e.jsx(r,{sx:{p:3,backgroundColor:"grey.100",color:"text.secondary",textAlign:"center"},children:"grey.100 배경"})})]}),e.jsx(r,{component:"pre",sx:{backgroundColor:"#263238",color:"#aed581",p:2,borderRadius:1,fontSize:"12px"},children:`// 문자열로 참조 (권장)
<Box sx={{ backgroundColor: 'primary.main' }} />
<Box sx={{ color: 'text.secondary' }} />
<Box sx={{ borderColor: 'divider' }} />

// 함수로 참조 (복잡한 계산 필요시)
<Box sx={{ backgroundColor: (theme) => theme.palette.primary.light }} />`}),e.jsxs(i,{sx:{p:3,mt:3,backgroundColor:"#e8f5e9"},children:[e.jsx(o,{variant:"subtitle2",sx:{fontWeight:600,color:"#2e7d32",mb:1},children:"💡 왜 문자열로 참조할까?"}),e.jsxs(o,{variant:"body2",children:[e.jsx("code",{children:"'primary.main'"}),"처럼 문자열로 작성하면 MUI가 자동으로 테마 값을 찾아줍니다. 나중에 테마 색상이 바뀌어도 코드 수정 없이 자동 반영됩니다."]})]})]})]}))};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const theme = useTheme();
    return <Box sx={{
      maxWidth: 1200
    }}>
        <SectionTitle subtitle="색상 시스템의 구조와 계층을 이해합니다.">
          색상 시스템 개요
        </SectionTitle>

        {/* 피그마 비유 */}
        <Paper sx={{
        p: 4,
        mb: 5,
        backgroundColor: '#e3f2fd'
      }}>
          <Typography variant="h6" sx={{
          mb: 2,
          fontWeight: 600
        }}>
            💡 피그마로 비유하면
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{
            xs: 12,
            md: 4
          }}>
              <Paper sx={{
              p: 3,
              backgroundColor: 'white',
              height: '100%'
            }}>
                <Typography variant="subtitle2" sx={{
                fontWeight: 600,
                color: 'primary.main',
                mb: 1
              }}>
                  Color Palette
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  = 피그마의 <strong>Color Styles 라이브러리</strong><br />
                  blue/500, grey/100 같은 순수 색상값
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{
            xs: 12,
            md: 4
          }}>
              <Paper sx={{
              p: 3,
              backgroundColor: 'white',
              height: '100%'
            }}>
                <Typography variant="subtitle2" sx={{
                fontWeight: 600,
                color: 'secondary.main',
                mb: 1
              }}>
                  Semantic Tokens
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  = 피그마의 <strong>Variables</strong><br />
                  Primary, Error 같은 의미 부여
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{
            xs: 12,
            md: 4
          }}>
              <Paper sx={{
              p: 3,
              backgroundColor: 'white',
              height: '100%'
            }}>
                <Typography variant="subtitle2" sx={{
                fontWeight: 600,
                color: 'success.main',
                mb: 1
              }}>
                  Component Tokens
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  = 피그마의 <strong>Component Variants</strong><br />
                  Button/Primary, Alert/Error 적용
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>

        {/* 계층 다이어그램 */}
        <Typography variant="h5" sx={{
        mb: 3,
        fontWeight: 600
      }}>
          색상 토큰 계층 구조
        </Typography>

        <Paper sx={{
        p: 4,
        backgroundColor: '#fafafa',
        mb: 5
      }}>
          <Box component="pre" sx={{
          backgroundColor: '#263238',
          color: '#80cbc4',
          p: 3,
          borderRadius: 2,
          fontSize: '12px',
          lineHeight: 1.8,
          overflow: 'auto'
        }}>
          {\`┌─────────────────────────────────────────────────────────────────────┐
│  1️⃣  Color Palette (원시 색상)                                       │
│                                                                     │
│      blue[500]  →  #2196f3                                          │
│      grey[100]  →  #f5f5f5                                          │
│      red[500]   →  #f44336                                          │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              │  의미 부여
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│  2️⃣  Semantic Tokens (역할별 색상)                                   │
│                                                                     │
│      primary.main     →  #0000FF (브랜드 색상)                       │
│      secondary.main   →  #263238 (보조 색상)                         │
│      error.main       →  #d32f2f (오류/위험)                         │
│      success.main     →  #2e7d32 (성공/완료)                         │
│      warning.main     →  #ed6c02 (주의/경고)                         │
│      info.main        →  #0288d1 (정보/안내)                         │
└─────────────────────────────────────────────────────────────────────┘
                              │
                              │  컴포넌트 적용
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│  3️⃣  Component Tokens (컴포넌트별 적용)                              │
│                                                                     │
│      <Button color="primary">   →  primary.main 배경                │
│      <Alert severity="error">   →  error.main 테두리                │
│      <Chip color="success">     →  success.main 배경                │
└─────────────────────────────────────────────────────────────────────┘\`}
          </Box>
        </Paper>

        {/* 현재 프로젝트 주요 색상 */}
        <Typography variant="h5" sx={{
        mb: 3,
        fontWeight: 600
      }}>
          현재 프로젝트 주요 색상
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{
          xs: 12,
          md: 6
        }}>
            <Paper sx={{
            p: 3
          }}>
              <Typography variant="subtitle1" sx={{
              fontWeight: 600,
              mb: 2
            }}>Primary</Typography>
              <Box sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center'
            }}>
                <Box sx={{
                width: 64,
                height: 64,
                backgroundColor: theme.palette.primary.main
              }} />
                <Box>
                  <Typography variant="body2" sx={{
                  fontWeight: 600
                }}>#0000FF</Typography>
                  <Typography variant="caption" color="text.secondary">
                    브랜드 색상, CTA 버튼, 링크
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{
          xs: 12,
          md: 6
        }}>
            <Paper sx={{
            p: 3
          }}>
              <Typography variant="subtitle1" sx={{
              fontWeight: 600,
              mb: 2
            }}>Secondary</Typography>
              <Box sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center'
            }}>
                <Box sx={{
                width: 64,
                height: 64,
                backgroundColor: theme.palette.secondary.main
              }} />
                <Box>
                  <Typography variant="body2" sx={{
                  fontWeight: 600
                }}>{theme.palette.secondary.main}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    보조 액션, 비활성 요소
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{
        mt: 4,
        p: 3,
        backgroundColor: '#fff3e0',
        borderRadius: 2
      }}>
          <Typography variant="body2">
            💡 왼쪽 사이드바에서 <strong>Palette</strong>, <strong>Semantic Tokens</strong>, <strong>Usage</strong>를 클릭하여 상세 내용을 확인하세요.
          </Typography>
        </Box>
      </Box>;
  }
}`,...g.parameters?.docs?.source},description:{story:"기본 - 전체 색상 시스템 개요",...g.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '1. Color Palette',
  render: () => <Box sx={{
    maxWidth: 1200
  }}>
      <SectionTitle subtitle="MUI에서 제공하는 기본 색상 팔레트입니다. 이 색상들을 조합하여 테마를 구성합니다.">
        Color Palette (원시 색상)
      </SectionTitle>

      <Paper sx={{
      p: 4,
      mb: 4,
      backgroundColor: '#e8f5e9'
    }}>
        <Typography variant="subtitle2" sx={{
        fontWeight: 600,
        color: '#2e7d32',
        mb: 1
      }}>
          💡 피그마 비유
        </Typography>
        <Typography variant="body2">
          피그마에서 <strong>Primitives</strong> 또는 <strong>Base Colors</strong>로 정의하는 순수 색상값입니다.
          blue/500, grey/200 처럼 색상 이름과 명도 숫자로 구성됩니다.
        </Typography>
      </Paper>

      <PaletteScale name="Blue" colorObj={blue} description="Primary 색상의 기반" />
      <PaletteScale name="Blue Grey" colorObj={blueGrey} description="Secondary 색상의 기반" />
      <PaletteScale name="Grey" colorObj={grey} description="텍스트, 배경, 보더" />
      <PaletteScale name="Red" colorObj={red} description="Error 상태" />
      <PaletteScale name="Orange" colorObj={orange} description="Warning 상태" />
      <PaletteScale name="Green" colorObj={green} description="Success 상태" />
      <PaletteScale name="Light Blue" colorObj={lightBlue} description="Info 상태" />

      <Divider sx={{
      my: 5
    }} />

      <Typography variant="h5" sx={{
      mb: 3,
      fontWeight: 600
    }}>
        색상 스케일 사용법
      </Typography>

      <Paper sx={{
      p: 4,
      backgroundColor: '#fafafa'
    }}>
        <Grid container spacing={4}>
          <Grid size={{
          xs: 12,
          md: 6
        }}>
            <Typography variant="subtitle2" sx={{
            fontWeight: 600,
            mb: 2
          }}>명도 가이드</Typography>
            <TableContainer>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell sx={{
                    fontWeight: 600
                  }}>50-100</TableCell>
                    <TableCell>매우 밝음 - 배경색</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{
                    fontWeight: 600
                  }}>200-300</TableCell>
                    <TableCell>밝음 - hover, 보더</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{
                    fontWeight: 600
                  }}>400-500</TableCell>
                    <TableCell>기본 - main 색상</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{
                    fontWeight: 600
                  }}>600-700</TableCell>
                    <TableCell>어두움 - active, dark</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{
                    fontWeight: 600
                  }}>800-900</TableCell>
                    <TableCell>매우 어두움 - 텍스트</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid size={{
          xs: 12,
          md: 6
        }}>
            <Typography variant="subtitle2" sx={{
            fontWeight: 600,
            mb: 2
          }}>코드에서 사용</Typography>
            <Box component="pre" sx={{
            backgroundColor: '#263238',
            color: '#aed581',
            p: 2,
            borderRadius: 1,
            fontSize: '12px'
          }}>
            {\`import { blue, grey } from '@mui/material/colors';

// 직접 사용
<Box sx={{ backgroundColor: blue[500] }} />
<Box sx={{ color: grey[700] }} />

// 테마에서 정의
palette: {
  primary: {
    main: blue[500],    // #2196f3
    light: blue[300],   // #64b5f6
    dark: blue[700],    // #1976d2
  }
}\`}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
}`,...m.parameters?.docs?.source},description:{story:"1. Color Palette - 원시 색상",...m.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '2. Semantic Tokens',
  render: () => {
    const theme = useTheme();
    return <Box sx={{
      maxWidth: 1200
    }}>
        <SectionTitle subtitle="색상에 의미와 역할을 부여한 토큰입니다. 컴포넌트에서 이 토큰을 참조합니다.">
          Semantic Tokens (역할별 색상)
        </SectionTitle>

        <Paper sx={{
        p: 4,
        mb: 4,
        backgroundColor: '#e3f2fd'
      }}>
          <Typography variant="subtitle2" sx={{
          fontWeight: 600,
          color: '#1976d2',
          mb: 1
        }}>
            💡 피그마 비유
          </Typography>
          <Typography variant="body2">
            피그마의 <strong>Design Tokens</strong> 또는 <strong>Variables</strong>와 같습니다.
            "Primary/Main", "Error/Light" 처럼 역할과 상태로 이름을 짓습니다.
            나중에 브랜드 색상이 바뀌면 여기만 수정하면 전체에 반영됩니다.
          </Typography>
        </Paper>

        {/* 브랜드 색상 */}
        <Typography variant="h5" sx={{
        mb: 3,
        fontWeight: 600
      }}>
          브랜드 색상
        </Typography>

        <Grid container spacing={3} sx={{
        mb: 5
      }}>
          {/* Primary */}
          <Grid size={{
          xs: 12,
          md: 6
        }}>
            <Paper sx={{
            p: 3
          }}>
              <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}>
                <Chip label="Primary" color="primary" />
                <Typography variant="body2" color="text.secondary">
                  브랜드 대표 색상
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid size={4}>
                  <ColorBox color={theme.palette.primary.light} name="Light" value={theme.palette.primary.light} textColor="#000" size="small" />
                </Grid>
                <Grid size={4}>
                  <ColorBox color={theme.palette.primary.main} name="Main" value="#0000FF" textColor="#fff" size="small" />
                </Grid>
                <Grid size={4}>
                  <ColorBox color={theme.palette.primary.dark} name="Dark" value={theme.palette.primary.dark} textColor="#fff" size="small" />
                </Grid>
              </Grid>
              <Box sx={{
              mt: 2,
              p: 2,
              backgroundColor: '#f5f5f5',
              borderRadius: 1
            }}>
                <Typography variant="caption" color="text.secondary">
                  <strong>용도:</strong> CTA 버튼, 링크, 선택된 상태, 브랜드 강조
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Secondary */}
          <Grid size={{
          xs: 12,
          md: 6
        }}>
            <Paper sx={{
            p: 3
          }}>
              <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}>
                <Chip label="Secondary" color="secondary" />
                <Typography variant="body2" color="text.secondary">
                  보조 색상
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid size={4}>
                  <ColorBox color={theme.palette.secondary.light} name="Light" value={theme.palette.secondary.light} textColor="#000" size="small" />
                </Grid>
                <Grid size={4}>
                  <ColorBox color={theme.palette.secondary.main} name="Main" value={theme.palette.secondary.main} textColor="#fff" size="small" />
                </Grid>
                <Grid size={4}>
                  <ColorBox color={theme.palette.secondary.dark} name="Dark" value={theme.palette.secondary.dark} textColor="#fff" size="small" />
                </Grid>
              </Grid>
              <Box sx={{
              mt: 2,
              p: 2,
              backgroundColor: '#f5f5f5',
              borderRadius: 1
            }}>
                <Typography variant="caption" color="text.secondary">
                  <strong>용도:</strong> 보조 버튼, 태그, 덜 중요한 액션
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{
        my: 5
      }} />

        {/* 상태 색상 */}
        <Typography variant="h5" sx={{
        mb: 3,
        fontWeight: 600
      }}>
          상태 색상 (Feedback Colors)
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{
        mb: 3
      }}>
          사용자에게 시스템 상태를 전달하는 색상입니다. 전 세계적으로 통용되는 의미를 가집니다.
        </Typography>

        <Grid container spacing={3} sx={{
        mb: 4
      }}>
          {/* Error */}
          <Grid size={{
          xs: 12,
          sm: 6,
          md: 3
        }}>
            <Paper sx={{
            p: 3,
            borderTop: \`4px solid \${theme.palette.error.main}\`
          }}>
              <Chip label="Error" color="error" size="small" sx={{
              mb: 2
            }} />
              <Box sx={{
              display: 'flex',
              gap: 1,
              mb: 2
            }}>
                <Box sx={{
                flex: 1,
                height: 32,
                backgroundColor: theme.palette.error.light
              }} />
                <Box sx={{
                flex: 1,
                height: 32,
                backgroundColor: theme.palette.error.main
              }} />
                <Box sx={{
                flex: 1,
                height: 32,
                backgroundColor: theme.palette.error.dark
              }} />
              </Box>
              <Typography variant="caption" color="text.secondary">
                <strong>의미:</strong> 오류, 삭제, 위험<br />
                <strong>예시:</strong> 유효성 오류, 삭제 버튼
              </Typography>
            </Paper>
          </Grid>

          {/* Warning */}
          <Grid size={{
          xs: 12,
          sm: 6,
          md: 3
        }}>
            <Paper sx={{
            p: 3,
            borderTop: \`4px solid \${theme.palette.warning.main}\`
          }}>
              <Chip label="Warning" color="warning" size="small" sx={{
              mb: 2
            }} />
              <Box sx={{
              display: 'flex',
              gap: 1,
              mb: 2
            }}>
                <Box sx={{
                flex: 1,
                height: 32,
                backgroundColor: theme.palette.warning.light
              }} />
                <Box sx={{
                flex: 1,
                height: 32,
                backgroundColor: theme.palette.warning.main
              }} />
                <Box sx={{
                flex: 1,
                height: 32,
                backgroundColor: theme.palette.warning.dark
              }} />
              </Box>
              <Typography variant="caption" color="text.secondary">
                <strong>의미:</strong> 주의, 경고<br />
                <strong>예시:</strong> 저장 안 됨, 만료 예정
              </Typography>
            </Paper>
          </Grid>

          {/* Success */}
          <Grid size={{
          xs: 12,
          sm: 6,
          md: 3
        }}>
            <Paper sx={{
            p: 3,
            borderTop: \`4px solid \${theme.palette.success.main}\`
          }}>
              <Chip label="Success" color="success" size="small" sx={{
              mb: 2
            }} />
              <Box sx={{
              display: 'flex',
              gap: 1,
              mb: 2
            }}>
                <Box sx={{
                flex: 1,
                height: 32,
                backgroundColor: theme.palette.success.light
              }} />
                <Box sx={{
                flex: 1,
                height: 32,
                backgroundColor: theme.palette.success.main
              }} />
                <Box sx={{
                flex: 1,
                height: 32,
                backgroundColor: theme.palette.success.dark
              }} />
              </Box>
              <Typography variant="caption" color="text.secondary">
                <strong>의미:</strong> 성공, 완료, 활성<br />
                <strong>예시:</strong> 저장 완료, 온라인 상태
              </Typography>
            </Paper>
          </Grid>

          {/* Info */}
          <Grid size={{
          xs: 12,
          sm: 6,
          md: 3
        }}>
            <Paper sx={{
            p: 3,
            borderTop: \`4px solid \${theme.palette.info.main}\`
          }}>
              <Chip label="Info" color="info" size="small" sx={{
              mb: 2
            }} />
              <Box sx={{
              display: 'flex',
              gap: 1,
              mb: 2
            }}>
                <Box sx={{
                flex: 1,
                height: 32,
                backgroundColor: theme.palette.info.light
              }} />
                <Box sx={{
                flex: 1,
                height: 32,
                backgroundColor: theme.palette.info.main
              }} />
                <Box sx={{
                flex: 1,
                height: 32,
                backgroundColor: theme.palette.info.dark
              }} />
              </Box>
              <Typography variant="caption" color="text.secondary">
                <strong>의미:</strong> 정보, 안내<br />
                <strong>예시:</strong> 도움말, 새 기능 안내
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{
        my: 5
      }} />

        {/* 텍스트 & 배경 색상 */}
        <Typography variant="h5" sx={{
        mb: 3,
        fontWeight: 600
      }}>
          텍스트 & 배경 색상
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{
          xs: 12,
          md: 6
        }}>
            <Paper sx={{
            p: 3
          }}>
              <Typography variant="subtitle1" sx={{
              fontWeight: 600,
              mb: 2
            }}>Text Colors</Typography>
              <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}>
                <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                  <Box sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: theme.palette.text.primary,
                  borderRadius: 1
                }} />
                  <Box>
                    <Typography variant="body2" sx={{
                    fontWeight: 600
                  }}>text.primary</Typography>
                    <Typography variant="caption" color="text.secondary">주요 텍스트, 제목</Typography>
                  </Box>
                </Box>
                <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                  <Box sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: theme.palette.text.secondary,
                  borderRadius: 1
                }} />
                  <Box>
                    <Typography variant="body2" sx={{
                    fontWeight: 600
                  }}>text.secondary</Typography>
                    <Typography variant="caption" color="text.secondary">보조 텍스트, 설명</Typography>
                  </Box>
                </Box>
                <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                  <Box sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: theme.palette.text.disabled,
                  borderRadius: 1
                }} />
                  <Box>
                    <Typography variant="body2" sx={{
                    fontWeight: 600
                  }}>text.disabled</Typography>
                    <Typography variant="caption" color="text.secondary">비활성화된 텍스트</Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{
          xs: 12,
          md: 6
        }}>
            <Paper sx={{
            p: 3
          }}>
              <Typography variant="subtitle1" sx={{
              fontWeight: 600,
              mb: 2
            }}>Background Colors</Typography>
              <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}>
                <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                  <Box sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: theme.palette.background.default,
                  border: '1px solid #e0e0e0',
                  borderRadius: 1
                }} />
                  <Box>
                    <Typography variant="body2" sx={{
                    fontWeight: 600
                  }}>background.default</Typography>
                    <Typography variant="caption" color="text.secondary">페이지 배경</Typography>
                  </Box>
                </Box>
                <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                  <Box sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: theme.palette.background.paper,
                  border: '1px solid #e0e0e0',
                  borderRadius: 1
                }} />
                  <Box>
                    <Typography variant="body2" sx={{
                    fontWeight: 600
                  }}>background.paper</Typography>
                    <Typography variant="caption" color="text.secondary">카드, 모달 배경</Typography>
                  </Box>
                </Box>
                <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                  <Box sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: theme.palette.divider,
                  borderRadius: 1
                }} />
                  <Box>
                    <Typography variant="body2" sx={{
                    fontWeight: 600
                  }}>divider</Typography>
                    <Typography variant="caption" color="text.secondary">구분선, 보더</Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{
        my: 5
      }} />

        {/* 토큰 참조 테이블 */}
        <Typography variant="h5" sx={{
        mb: 3,
        fontWeight: 600
      }}>
          Semantic Token 전체 목록
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{
              backgroundColor: '#f5f5f5'
            }}>
                <TableCell sx={{
                fontWeight: 700
              }}>Token</TableCell>
                <TableCell sx={{
                fontWeight: 700
              }}>값</TableCell>
                <TableCell sx={{
                fontWeight: 700
              }}>용도</TableCell>
                <TableCell sx={{
                fontWeight: 700
              }}>색상</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><code>primary.main</code></TableCell>
                <TableCell>#0000FF</TableCell>
                <TableCell>CTA 버튼, 링크, 선택된 상태</TableCell>
                <TableCell><Box sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: theme.palette.primary.main
                }} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>secondary.main</code></TableCell>
                <TableCell>{theme.palette.secondary.main}</TableCell>
                <TableCell>보조 버튼, 태그</TableCell>
                <TableCell><Box sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: theme.palette.secondary.main
                }} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>error.main</code></TableCell>
                <TableCell>{theme.palette.error.main}</TableCell>
                <TableCell>오류 메시지, 삭제 버튼</TableCell>
                <TableCell><Box sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: theme.palette.error.main
                }} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>warning.main</code></TableCell>
                <TableCell>{theme.palette.warning.main}</TableCell>
                <TableCell>경고 메시지</TableCell>
                <TableCell><Box sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: theme.palette.warning.main
                }} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>success.main</code></TableCell>
                <TableCell>{theme.palette.success.main}</TableCell>
                <TableCell>성공 메시지, 완료 상태</TableCell>
                <TableCell><Box sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: theme.palette.success.main
                }} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>info.main</code></TableCell>
                <TableCell>{theme.palette.info.main}</TableCell>
                <TableCell>정보 메시지, 도움말</TableCell>
                <TableCell><Box sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: theme.palette.info.main
                }} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>text.primary</code></TableCell>
                <TableCell>{theme.palette.text.primary}</TableCell>
                <TableCell>주요 텍스트</TableCell>
                <TableCell><Box sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: theme.palette.text.primary
                }} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>text.secondary</code></TableCell>
                <TableCell>{theme.palette.text.secondary}</TableCell>
                <TableCell>보조 텍스트</TableCell>
                <TableCell><Box sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: theme.palette.text.secondary
                }} /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>;
  }
}`,...y.parameters?.docs?.source},description:{story:"2. Semantic Tokens - 역할별 색상",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '3. Usage',
  render: () => {
    const theme = useTheme();
    return <Box sx={{
      maxWidth: 1200
    }}>
        <SectionTitle subtitle="Semantic Token이 실제 컴포넌트에 어떻게 적용되는지 확인합니다.">
          컴포넌트 적용 예시
        </SectionTitle>

        {/* Button */}
        <Typography variant="h5" sx={{
        mb: 3,
        fontWeight: 600
      }}>
          Button 컴포넌트
        </Typography>

        <Paper sx={{
        p: 4,
        mb: 5
      }}>
          <Typography variant="body2" color="text.secondary" sx={{
          mb: 3
        }}>
            Button의 <code>color</code> prop에 Semantic Token 이름을 전달하면 해당 색상이 적용됩니다.
          </Typography>

          <Box sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          mb: 3
        }}>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="error">Error</Button>
            <Button variant="contained" color="warning">Warning</Button>
            <Button variant="contained" color="success">Success</Button>
            <Button variant="contained" color="info">Info</Button>
          </Box>

          <Box component="pre" sx={{
          backgroundColor: '#263238',
          color: '#aed581',
          p: 2,
          borderRadius: 1,
          fontSize: '12px'
        }}>
          {\`<Button variant="contained" color="primary">Primary</Button>
<Button variant="contained" color="error">Error</Button>
<Button variant="contained" color="success">Success</Button>\`}
          </Box>
        </Paper>

        {/* Alert */}
        <Typography variant="h5" sx={{
        mb: 3,
        fontWeight: 600
      }}>
          Alert 컴포넌트
        </Typography>

        <Paper sx={{
        p: 4,
        mb: 5
      }}>
          <Typography variant="body2" color="text.secondary" sx={{
          mb: 3
        }}>
            Alert의 <code>severity</code> prop으로 상태별 색상을 표현합니다.
          </Typography>

          <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mb: 3
        }}>
            <Alert severity="error">Error - 오류가 발생했습니다.</Alert>
            <Alert severity="warning">Warning - 주의가 필요합니다.</Alert>
            <Alert severity="success">Success - 성공적으로 완료되었습니다.</Alert>
            <Alert severity="info">Info - 참고 정보입니다.</Alert>
          </Box>

          <Box component="pre" sx={{
          backgroundColor: '#263238',
          color: '#aed581',
          p: 2,
          borderRadius: 1,
          fontSize: '12px'
        }}>
          {\`<Alert severity="error">오류 메시지</Alert>
<Alert severity="warning">경고 메시지</Alert>
<Alert severity="success">성공 메시지</Alert>
<Alert severity="info">정보 메시지</Alert>\`}
          </Box>
        </Paper>

        {/* Chip */}
        <Typography variant="h5" sx={{
        mb: 3,
        fontWeight: 600
      }}>
          Chip 컴포넌트
        </Typography>

        <Paper sx={{
        p: 4,
        mb: 5
      }}>
          <Typography variant="body2" color="text.secondary" sx={{
          mb: 3
        }}>
            Chip의 <code>color</code> prop으로 상태나 카테고리를 표현합니다.
          </Typography>

          <Box sx={{
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap',
          mb: 3
        }}>
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Error" color="error" />
            <Chip label="Warning" color="warning" />
            <Chip label="Success" color="success" />
            <Chip label="Info" color="info" />
          </Box>

          <Box component="pre" sx={{
          backgroundColor: '#263238',
          color: '#aed581',
          p: 2,
          borderRadius: 1,
          fontSize: '12px'
        }}>
          {\`<Chip label="활성" color="success" />
<Chip label="대기중" color="warning" />
<Chip label="오류" color="error" />\`}
          </Box>
        </Paper>

        <Divider sx={{
        my: 5
      }} />

        {/* sx prop으로 직접 사용 */}
        <Typography variant="h5" sx={{
        mb: 3,
        fontWeight: 600
      }}>
          sx prop으로 직접 사용
        </Typography>

        <Paper sx={{
        p: 4
      }}>
          <Typography variant="body2" color="text.secondary" sx={{
          mb: 3
        }}>
            <code>sx</code> prop에서 theme 값을 직접 참조할 수 있습니다.
          </Typography>

          <Grid container spacing={3} sx={{
          mb: 3
        }}>
            <Grid size={{
            xs: 12,
            md: 4
          }}>
              <Box sx={{
              p: 3,
              backgroundColor: 'primary.light',
              color: 'primary.dark',
              textAlign: 'center'
            }}>
                primary.light 배경
              </Box>
            </Grid>
            <Grid size={{
            xs: 12,
            md: 4
          }}>
              <Box sx={{
              p: 3,
              backgroundColor: 'error.main',
              color: 'white',
              textAlign: 'center'
            }}>
                error.main 배경
              </Box>
            </Grid>
            <Grid size={{
            xs: 12,
            md: 4
          }}>
              <Box sx={{
              p: 3,
              backgroundColor: 'grey.100',
              color: 'text.secondary',
              textAlign: 'center'
            }}>
                grey.100 배경
              </Box>
            </Grid>
          </Grid>

          <Box component="pre" sx={{
          backgroundColor: '#263238',
          color: '#aed581',
          p: 2,
          borderRadius: 1,
          fontSize: '12px'
        }}>
          {\`// 문자열로 참조 (권장)
<Box sx={{ backgroundColor: 'primary.main' }} />
<Box sx={{ color: 'text.secondary' }} />
<Box sx={{ borderColor: 'divider' }} />

// 함수로 참조 (복잡한 계산 필요시)
<Box sx={{ backgroundColor: (theme) => theme.palette.primary.light }} />\`}
          </Box>

          <Paper sx={{
          p: 3,
          mt: 3,
          backgroundColor: '#e8f5e9'
        }}>
            <Typography variant="subtitle2" sx={{
            fontWeight: 600,
            color: '#2e7d32',
            mb: 1
          }}>
              💡 왜 문자열로 참조할까?
            </Typography>
            <Typography variant="body2">
              <code>'primary.main'</code>처럼 문자열로 작성하면 MUI가 자동으로 테마 값을 찾아줍니다.
              나중에 테마 색상이 바뀌어도 코드 수정 없이 자동 반영됩니다.
            </Typography>
          </Paper>
        </Paper>
      </Box>;
  }
}`,...b.parameters?.docs?.source},description:{story:"3. Usage - 컴포넌트에서의 활용",...b.parameters?.docs?.description}}};const ie=["Default","Palette","SemanticTokens","Usage"];export{g as Default,m as Palette,y as SemanticTokens,b as Usage,ie as __namedExportsOrder,se as default};
