import{r as T,u as xe,D as fe,c as G,j as t}from"./iframe-BWgkq3nG.js";import{u as N}from"./useTheme-CPxBch2_.js";import{B as r}from"./Box-B4QF7xQt.js";import{T as p}from"./Typography-Crr089TM.js";import{P as Q}from"./Paper-BPbdMq_H.js";import{g as be,a as ve,s as L,c as ke,m as Se}from"./memoTheme-wZLTRCdj.js";import{T as we,g as J}from"./utils-WEb9flUJ.js";import{u as D}from"./useSlot-OsDyiYkB.js";import{a as ze,u as je}from"./useTimeout-BL3CCW4_.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-C3Q5W1AK.js";import"./index-C35CsaQh.js";function Te(e){return be("MuiCollapse",e)}ve("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const We=e=>{const{orientation:o,classes:n}=e,i={root:["root",`${o}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${o}`],wrapperInner:["wrapperInner",`${o}`]};return ke(i,Te,n)},Ce=L("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.orientation],n.state==="entered"&&o.entered,n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&o.hidden]}})(Se(({theme:e})=>({height:0,overflow:"hidden",transition:e.transitions.create("height"),variants:[{props:{orientation:"horizontal"},style:{height:"auto",width:0,transition:e.transitions.create("width")}},{props:{state:"entered"},style:{height:"auto",overflow:"visible"}},{props:{state:"entered",orientation:"horizontal"},style:{width:"auto"}},{props:({ownerState:o})=>o.state==="exited"&&!o.in&&o.collapsedSize==="0px",style:{visibility:"hidden"}}]}))),Be=L("div",{name:"MuiCollapse",slot:"Wrapper"})({display:"flex",width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),Re=L("div",{name:"MuiCollapse",slot:"WrapperInner"})({width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),V=T.forwardRef(function(o,n){const i=xe({props:o,name:"MuiCollapse"}),{addEndListener:y,children:f,className:I,collapsedSize:m="0px",component:l,easing:b,in:W,onEnter:C,onEntered:s,onEntering:B,onExit:M,onExited:Y,onExiting:H,orientation:U="vertical",slots:Z={},slotProps:ee={},style:O,timeout:g=fe.standard,TransitionComponent:te=we,...oe}=i,v={...i,orientation:U,collapsedSize:m},k=We(v),_=N(),ae=ze(),u=T.useRef(null),$=T.useRef(),R=typeof m=="number"?`${m}px`:m,S=U==="horizontal",w=S?"width":"height",E=T.useRef(null),ne=je(n,E),x=a=>h=>{if(a){const d=E.current;h===void 0?a(d):a(d,h)}},P=()=>u.current?u.current[S?"clientWidth":"clientHeight"]:0,re=x((a,h)=>{u.current&&S&&(u.current.style.position="absolute"),a.style[w]=R,C&&C(a,h)}),ie=x((a,h)=>{const d=P();u.current&&S&&(u.current.style.position="");const{duration:c,easing:F}=J({style:O,timeout:g,easing:b},{mode:"enter"});if(g==="auto"){const q=_.transitions.getAutoHeightDuration(d);a.style.transitionDuration=`${q}ms`,$.current=q}else a.style.transitionDuration=typeof c=="string"?c:`${c}ms`;a.style[w]=`${d}px`,a.style.transitionTimingFunction=F,B&&B(a,h)}),se=x((a,h)=>{a.style[w]="auto",s&&s(a,h)}),pe=x(a=>{a.style[w]=`${P()}px`,M&&M(a)}),le=x(Y),he=x(a=>{const h=P(),{duration:d,easing:c}=J({style:O,timeout:g,easing:b},{mode:"exit"});if(g==="auto"){const F=_.transitions.getAutoHeightDuration(h);a.style.transitionDuration=`${F}ms`,$.current=F}else a.style.transitionDuration=typeof d=="string"?d:`${d}ms`;a.style[w]=R,a.style.transitionTimingFunction=c,H&&H(a)}),de=a=>{g==="auto"&&ae.start($.current||0,a),y&&y(E.current,a)},A={slots:Z,slotProps:ee,component:l},[ce,K]=D("root",{ref:ne,className:G(k.root,I),elementType:Ce,externalForwardedProps:A,ownerState:v,additionalProps:{style:{[S?"minWidth":"minHeight"]:R,...O}}}),[ye,me]=D("wrapper",{ref:u,className:k.wrapper,elementType:Be,externalForwardedProps:A,ownerState:v}),[ge,ue]=D("wrapperInner",{className:k.wrapperInner,elementType:Re,externalForwardedProps:A,ownerState:v});return t.jsx(te,{in:W,onEnter:re,onEntered:se,onEntering:ie,onExit:pe,onExited:le,onExiting:he,addEndListener:de,nodeRef:E,timeout:g==="auto"?null:g,...oe,children:(a,{ownerState:h,...d})=>{const c={...v,state:a};return t.jsx(ce,{...K,className:G(K.className,{entered:k.entered,exited:!W&&R==="0px"&&k.hidden}[a]),ownerState:c,...d,children:t.jsx(ye,{...me,ownerState:c,children:t.jsx(ge,{...ue,ownerState:c,children:f})})})}})});V&&(V.muiSupportAuto=!0);const Ue={title:"Style/Overview",parameters:{layout:"padded",docs:{description:{component:`
## Theme 구조

\`src/styles/theme.js\`의 전체 구조를 트리 형태로 탐색합니다.

키를 클릭하면 하위 구조를 펼치거나 접을 수 있습니다.
        `}}}},X=({keyName:e,value:o,depth:n=0,defaultOpen:i=!1})=>{const[y,f]=T.useState(i),I=typeof o=="object"&&o!==null&&!Array.isArray(o),m=Array.isArray(o),l=I||m,b=l?Object.keys(o).length:0,W=typeof o=="string"&&(o.startsWith("#")||o.startsWith("rgb")||o.startsWith("rgba")),C=s=>typeof s=="string"?`"${s}"`:typeof s=="number"?s:typeof s=="boolean"?s?"true":"false":typeof s=="function"?"ƒ()":s===null?"null":s===void 0?"undefined":String(s);return t.jsxs(r,{sx:{ml:n>0?2:0},children:[t.jsxs(r,{onClick:()=>l&&f(!y),sx:{display:"flex",alignItems:"center",gap:1,py:.5,px:1,cursor:l?"pointer":"default",borderRadius:1,"&:hover":l?{backgroundColor:"action.hover"}:{},borderLeft:n>0?"1px solid":"none",borderColor:"divider"},children:[l?t.jsx(p,{component:"span",sx:{width:16,color:"text.secondary",fontSize:"12px",fontFamily:"monospace",userSelect:"none"},children:y?"▼":"▶"}):t.jsx(r,{sx:{width:16}}),t.jsx(p,{component:"span",sx:{color:l?"primary.main":"secondary.main",fontFamily:"monospace",fontSize:"13px",fontWeight:l?600:400},children:e}),t.jsx(p,{component:"span",sx:{color:"text.secondary",fontSize:"13px"},children:":"}),l?t.jsx(p,{component:"span",sx:{color:"text.secondary",fontSize:"12px",fontFamily:"monospace"},children:m?`Array[${b}]`:`{${b}}`}):t.jsxs(r,{sx:{display:"flex",alignItems:"center",gap:1},children:[W&&t.jsx(r,{sx:{width:14,height:14,backgroundColor:o,border:"1px solid",borderColor:"divider",borderRadius:"2px",flexShrink:0}}),t.jsx(p,{component:"span",sx:{color:typeof o=="string"?"success.dark":typeof o=="number"?"warning.dark":"text.primary",fontFamily:"monospace",fontSize:"12px",maxWidth:400,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:C(o)})]})]}),l&&t.jsx(V,{in:y,children:t.jsx(r,{children:Object.entries(o).map(([s,B])=>t.jsx(X,{keyName:s,value:B,depth:n+1},s))})})]})},z={render:()=>{const e=N(),o={palette:{primary:e.palette.primary,secondary:e.palette.secondary,error:e.palette.error,warning:e.palette.warning,success:e.palette.success,info:e.palette.info,text:e.palette.text,background:e.palette.background,action:e.palette.action,divider:e.palette.divider,grey:e.palette.grey},typography:{fontFamily:e.typography.fontFamily,fontSize:e.typography.fontSize,htmlFontSize:e.typography.htmlFontSize,fontWeightLight:e.typography.fontWeightLight,fontWeightRegular:e.typography.fontWeightRegular,fontWeightMedium:e.typography.fontWeightMedium,fontWeightBold:e.typography.fontWeightBold,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,body1:e.typography.body1,body2:e.typography.body2,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,button:e.typography.button,caption:e.typography.caption,overline:e.typography.overline},spacing:{unit:8,"spacing(1)":e.spacing(1),"spacing(2)":e.spacing(2),"spacing(3)":e.spacing(3),"spacing(4)":e.spacing(4),"spacing(5)":e.spacing(5),"spacing(6)":e.spacing(6),"spacing(8)":e.spacing(8)},shape:e.shape,breakpoints:{values:e.breakpoints.values},zIndex:e.zIndex,transitions:{duration:e.transitions.duration,easing:e.transitions.easing},shadows:{elevation0:e.shadows[0],elevation1:e.shadows[1],elevation2:e.shadows[2],elevation3:e.shadows[3],elevation4:e.shadows[4],elevation8:e.shadows[8],elevation16:e.shadows[16],elevation24:e.shadows[24]}};return t.jsxs(r,{sx:{maxWidth:900},children:[t.jsx(p,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Theme Structure"}),t.jsxs(p,{variant:"body2",color:"text.secondary",sx:{mb:3},children:["클릭하여 펼치기/접기 | ",t.jsx("code",{children:"src/styles/theme.js"})]}),t.jsx(Q,{sx:{p:2,backgroundColor:"#fafafa"},children:t.jsx(r,{sx:{fontFamily:"monospace"},children:Object.entries(o).map(([n,i])=>t.jsx(X,{keyName:n,value:i,depth:0,defaultOpen:!1},n))})}),t.jsx(r,{sx:{mt:3,p:2,backgroundColor:"#e3f2fd",borderRadius:1},children:t.jsxs(p,{variant:"body2",children:["💡 ",t.jsx("strong",{children:"피그마 비유:"})," 이 구조는 피그마의 Local Variables 패널과 같습니다. 각 카테고리(palette, typography 등)가 Variable Collection이고, 그 안의 값들이 개별 Variable입니다."]})})]})}},j={name:"Table View",render:()=>{const e=N(),o=[{title:"palette",description:"색상 토큰",data:[{key:"primary.main",value:e.palette.primary.main},{key:"primary.light",value:e.palette.primary.light},{key:"primary.dark",value:e.palette.primary.dark},{key:"secondary.main",value:e.palette.secondary.main},{key:"error.main",value:e.palette.error.main},{key:"warning.main",value:e.palette.warning.main},{key:"success.main",value:e.palette.success.main},{key:"info.main",value:e.palette.info.main},{key:"text.primary",value:e.palette.text.primary},{key:"text.secondary",value:e.palette.text.secondary},{key:"background.default",value:e.palette.background.default},{key:"background.paper",value:e.palette.background.paper},{key:"divider",value:e.palette.divider}]},{title:"typography",description:"타이포그래피 토큰",data:[{key:"fontSize",value:e.typography.fontSize},{key:"h1.fontSize",value:e.typography.h1.fontSize},{key:"h2.fontSize",value:e.typography.h2.fontSize},{key:"h3.fontSize",value:e.typography.h3.fontSize},{key:"h4.fontSize",value:e.typography.h4.fontSize},{key:"h5.fontSize",value:e.typography.h5.fontSize},{key:"h6.fontSize",value:e.typography.h6.fontSize},{key:"body1.fontSize",value:e.typography.body1.fontSize},{key:"body2.fontSize",value:e.typography.body2.fontSize},{key:"caption.fontSize",value:e.typography.caption.fontSize}]},{title:"spacing",description:"간격 토큰 (8px 기반)",data:[{key:"spacing(1)",value:e.spacing(1)},{key:"spacing(2)",value:e.spacing(2)},{key:"spacing(3)",value:e.spacing(3)},{key:"spacing(4)",value:e.spacing(4)},{key:"spacing(6)",value:e.spacing(6)},{key:"spacing(8)",value:e.spacing(8)}]},{title:"shape",description:"모양 토큰",data:[{key:"borderRadius",value:`${e.shape.borderRadius}px`}]},{title:"breakpoints",description:"반응형 분기점",data:Object.entries(e.breakpoints.values).map(([n,i])=>({key:n,value:`${i}px`}))},{title:"zIndex",description:"레이어 순서",data:Object.entries(e.zIndex).map(([n,i])=>({key:n,value:i}))}];return t.jsxs(r,{sx:{maxWidth:800},children:[t.jsx(p,{variant:"h4",sx:{fontWeight:700,mb:1},children:"Token Tables"}),t.jsx(p,{variant:"body2",color:"text.secondary",sx:{mb:4},children:"주요 토큰을 테이블 형태로 확인합니다."}),o.map(n=>t.jsxs(r,{sx:{mb:4},children:[t.jsx(p,{variant:"h6",sx:{fontWeight:600,mb:.5},children:n.title}),t.jsx(p,{variant:"caption",color:"text.secondary",sx:{display:"block",mb:1},children:n.description}),t.jsx(Q,{sx:{overflow:"hidden"},children:t.jsxs(r,{component:"table",sx:{width:"100%",borderCollapse:"collapse",fontSize:"13px",fontFamily:"monospace"},children:[t.jsx(r,{component:"thead",sx:{backgroundColor:"#f5f5f5"},children:t.jsxs(r,{component:"tr",children:[t.jsx(r,{component:"th",sx:{p:1.5,textAlign:"left",fontWeight:600},children:"Key"}),t.jsx(r,{component:"th",sx:{p:1.5,textAlign:"left",fontWeight:600},children:"Value"})]})}),t.jsx(r,{component:"tbody",children:n.data.map((i,y)=>{const f=typeof i.value=="string"&&(i.value.startsWith("#")||i.value.startsWith("rgb"));return t.jsxs(r,{component:"tr",sx:{borderTop:"1px solid",borderColor:"divider","&:hover":{backgroundColor:"action.hover"}},children:[t.jsx(r,{component:"td",sx:{p:1.5,color:"primary.main"},children:i.key}),t.jsxs(r,{component:"td",sx:{p:1.5,display:"flex",alignItems:"center",gap:1},children:[f&&t.jsx(r,{sx:{width:16,height:16,backgroundColor:i.value,border:"1px solid",borderColor:"divider",borderRadius:"2px"}}),t.jsx("span",{children:i.value})]})]},i.key)})})]})})]},n.title))]})}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
        grey: theme.palette.grey
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
        overline: theme.typography.overline
      },
      spacing: {
        unit: 8,
        'spacing(1)': theme.spacing(1),
        'spacing(2)': theme.spacing(2),
        'spacing(3)': theme.spacing(3),
        'spacing(4)': theme.spacing(4),
        'spacing(5)': theme.spacing(5),
        'spacing(6)': theme.spacing(6),
        'spacing(8)': theme.spacing(8)
      },
      shape: theme.shape,
      breakpoints: {
        values: theme.breakpoints.values
      },
      zIndex: theme.zIndex,
      transitions: {
        duration: theme.transitions.duration,
        easing: theme.transitions.easing
      },
      shadows: {
        'elevation0': theme.shadows[0],
        'elevation1': theme.shadows[1],
        'elevation2': theme.shadows[2],
        'elevation3': theme.shadows[3],
        'elevation4': theme.shadows[4],
        'elevation8': theme.shadows[8],
        'elevation16': theme.shadows[16],
        'elevation24': theme.shadows[24]
      }
    };
    return <Box sx={{
      maxWidth: 900
    }}>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          Theme Structure
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mb: 3
      }}>
          클릭하여 펼치기/접기 | <code>src/styles/theme.js</code>
        </Typography>

        <Paper sx={{
        p: 2,
        backgroundColor: '#fafafa'
      }}>
          <Box sx={{
          fontFamily: 'monospace'
        }}>
            {Object.entries(themeStructure).map(([key, value]) => <TreeNode key={key} keyName={key} value={value} depth={0} defaultOpen={false} />)}
          </Box>
        </Paper>

        <Box sx={{
        mt: 3,
        p: 2,
        backgroundColor: '#e3f2fd',
        borderRadius: 1
      }}>
          <Typography variant="body2">
            💡 <strong>피그마 비유:</strong> 이 구조는 피그마의 Local Variables 패널과 같습니다.
            각 카테고리(palette, typography 등)가 Variable Collection이고,
            그 안의 값들이 개별 Variable입니다.
          </Typography>
        </Box>
      </Box>;
  }
}`,...z.parameters?.docs?.source},description:{story:"기본 - Theme 트리 탐색기",...z.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Table View',
  render: () => {
    const theme = useTheme();
    const tables = [{
      title: 'palette',
      description: '색상 토큰',
      data: [{
        key: 'primary.main',
        value: theme.palette.primary.main
      }, {
        key: 'primary.light',
        value: theme.palette.primary.light
      }, {
        key: 'primary.dark',
        value: theme.palette.primary.dark
      }, {
        key: 'secondary.main',
        value: theme.palette.secondary.main
      }, {
        key: 'error.main',
        value: theme.palette.error.main
      }, {
        key: 'warning.main',
        value: theme.palette.warning.main
      }, {
        key: 'success.main',
        value: theme.palette.success.main
      }, {
        key: 'info.main',
        value: theme.palette.info.main
      }, {
        key: 'text.primary',
        value: theme.palette.text.primary
      }, {
        key: 'text.secondary',
        value: theme.palette.text.secondary
      }, {
        key: 'background.default',
        value: theme.palette.background.default
      }, {
        key: 'background.paper',
        value: theme.palette.background.paper
      }, {
        key: 'divider',
        value: theme.palette.divider
      }]
    }, {
      title: 'typography',
      description: '타이포그래피 토큰',
      data: [{
        key: 'fontSize',
        value: theme.typography.fontSize
      }, {
        key: 'h1.fontSize',
        value: theme.typography.h1.fontSize
      }, {
        key: 'h2.fontSize',
        value: theme.typography.h2.fontSize
      }, {
        key: 'h3.fontSize',
        value: theme.typography.h3.fontSize
      }, {
        key: 'h4.fontSize',
        value: theme.typography.h4.fontSize
      }, {
        key: 'h5.fontSize',
        value: theme.typography.h5.fontSize
      }, {
        key: 'h6.fontSize',
        value: theme.typography.h6.fontSize
      }, {
        key: 'body1.fontSize',
        value: theme.typography.body1.fontSize
      }, {
        key: 'body2.fontSize',
        value: theme.typography.body2.fontSize
      }, {
        key: 'caption.fontSize',
        value: theme.typography.caption.fontSize
      }]
    }, {
      title: 'spacing',
      description: '간격 토큰 (8px 기반)',
      data: [{
        key: 'spacing(1)',
        value: theme.spacing(1)
      }, {
        key: 'spacing(2)',
        value: theme.spacing(2)
      }, {
        key: 'spacing(3)',
        value: theme.spacing(3)
      }, {
        key: 'spacing(4)',
        value: theme.spacing(4)
      }, {
        key: 'spacing(6)',
        value: theme.spacing(6)
      }, {
        key: 'spacing(8)',
        value: theme.spacing(8)
      }]
    }, {
      title: 'shape',
      description: '모양 토큰',
      data: [{
        key: 'borderRadius',
        value: \`\${theme.shape.borderRadius}px\`
      }]
    }, {
      title: 'breakpoints',
      description: '반응형 분기점',
      data: Object.entries(theme.breakpoints.values).map(([key, value]) => ({
        key,
        value: \`\${value}px\`
      }))
    }, {
      title: 'zIndex',
      description: '레이어 순서',
      data: Object.entries(theme.zIndex).map(([key, value]) => ({
        key,
        value
      }))
    }];
    return <Box sx={{
      maxWidth: 800
    }}>
        <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          Token Tables
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mb: 4
      }}>
          주요 토큰을 테이블 형태로 확인합니다.
        </Typography>

        {tables.map(table => <Box key={table.title} sx={{
        mb: 4
      }}>
            <Typography variant="h6" sx={{
          fontWeight: 600,
          mb: 0.5
        }}>
              {table.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{
          display: 'block',
          mb: 1
        }}>
              {table.description}
            </Typography>

            <Paper sx={{
          overflow: 'hidden'
        }}>
              <Box component="table" sx={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '13px',
            fontFamily: 'monospace'
          }}>
                <Box component="thead" sx={{
              backgroundColor: '#f5f5f5'
            }}>
                  <Box component="tr">
                    <Box component="th" sx={{
                  p: 1.5,
                  textAlign: 'left',
                  fontWeight: 600
                }}>Key</Box>
                    <Box component="th" sx={{
                  p: 1.5,
                  textAlign: 'left',
                  fontWeight: 600
                }}>Value</Box>
                  </Box>
                </Box>
                <Box component="tbody">
                  {table.data.map((row, index) => {
                const isColor = typeof row.value === 'string' && (row.value.startsWith('#') || row.value.startsWith('rgb'));
                return <Box component="tr" key={row.key} sx={{
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    backgroundColor: 'action.hover'
                  }
                }}>
                        <Box component="td" sx={{
                    p: 1.5,
                    color: 'primary.main'
                  }}>
                          {row.key}
                        </Box>
                        <Box component="td" sx={{
                    p: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                          {isColor && <Box sx={{
                      width: 16,
                      height: 16,
                      backgroundColor: row.value,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: '2px'
                    }} />}
                          <span>{row.value}</span>
                        </Box>
                      </Box>;
              })}
                </Box>
              </Box>
            </Paper>
          </Box>)}
      </Box>;
  }
}`,...j.parameters?.docs?.source},description:{story:"테이블 뷰 - 주요 토큰 요약",...j.parameters?.docs?.description}}};const _e=["Default","TableView"];export{z as Default,j as TableView,_e as __namedExportsOrder,Ue as default};
