import{r as S,u as oe,j as e,c as $,b as He,d as we,a as Ce}from"./iframe-BWgkq3nG.js";import{T as t,a as k,b as I,c as p,d as L}from"./TableRow-Bj3wSUr6.js";import{T as H}from"./TableContainer-ij2fGYf7.js";import{P as M}from"./Paper-BPbdMq_H.js";import{C as ye}from"./Checkbox-CVdfs3ue.js";import{B as Me}from"./Box-B4QF7xQt.js";import{T as fe}from"./Typography-Crr089TM.js";import{c as je}from"./createSvgIcon-B2KGxEB9.js";import{g as ne,a as re,s as f,c as se,m as D}from"./memoTheme-wZLTRCdj.js";import{u as v}from"./useSlot-OsDyiYkB.js";import{B as We}from"./ButtonBase-BrHEvKFd.js";import{K as Ae,a as De}from"./KeyboardArrowRight-K3a6UMEd.js";import{I as ae}from"./IconButton-BlYvHqG4.js";import{I as ze,S as $e}from"./Select-vJ_dQeDl.js";import{M as Ne}from"./MenuItem-D--KqcPq.js";import{C as Se}from"./Chip-GrVheW_z.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-CPxBch2_.js";import"./SwitchBase-D25N7mk3.js";import"./utils-C3e22Fhs.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./mergeSlotProps-CAj06Lhe.js";import"./useTimeout-BL3CCW4_.js";import"./CircularProgress-CDkyS_V7.js";import"./useSlotProps-D3eyalIf.js";import"./utils-WEb9flUJ.js";import"./index-C3Q5W1AK.js";import"./index-C35CsaQh.js";import"./listItemTextClasses-B4_rjIbA.js";import"./dividerClasses-B3yZpvVG.js";function Ue(l){return ne("MuiToolbar",l)}re("MuiToolbar",["root","gutters","regular","dense"]);const Fe=l=>{const{classes:a,disableGutters:o,variant:d}=l;return se({root:["root",!o&&"gutters",d]},Ue,a)},Ve=f("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(l,a)=>{const{ownerState:o}=l;return[a.root,!o.disableGutters&&a.gutters,a[o.variant]]}})(D(({theme:l})=>({position:"relative",display:"flex",alignItems:"center",variants:[{props:({ownerState:a})=>!a.disableGutters,style:{paddingLeft:l.spacing(2),paddingRight:l.spacing(2),[l.breakpoints.up("sm")]:{paddingLeft:l.spacing(3),paddingRight:l.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:l.mixins.toolbar}]}))),Ge=S.forwardRef(function(a,o){const d=oe({props:a,name:"MuiToolbar"}),{className:g,component:r="div",disableGutters:s=!1,variant:n="regular",...i}=d,j={...d,component:r,disableGutters:s,variant:n},w=Fe(j);return e.jsx(Ve,{as:r,className:$(w.root,g),ref:o,ownerState:j,...i})}),Oe=je(e.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})),Ee=je(e.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}));function _e(l){return ne("MuiTablePaginationActions",l)}re("MuiTablePaginationActions",["root"]);const Ke=l=>{const{classes:a}=l;return se({root:["root"]},_e,a)},qe=f("div",{name:"MuiTablePaginationActions",slot:"Root"})({}),Je=S.forwardRef(function(a,o){const d=oe({props:a,name:"MuiTablePaginationActions"}),{backIconButtonProps:g,className:r,count:s,disabled:n=!1,getItemAriaLabel:i,nextIconButtonProps:j,onPageChange:w,page:b,rowsPerPage:W,showFirstButton:A,showLastButton:z,slots:m={},slotProps:c={},...y}=d,h=He(),ie=Ke(d),ce=R=>{w(R,0)},N=R=>{w(R,b-1)},Z=R=>{w(R,b+1)},de=R=>{w(R,Math.max(0,Math.ceil(s/W)-1))},C=m.firstButton??ae,T=m.lastButton??ae,u=m.nextButton??ae,ee=m.previousButton??ae,U=m.firstButtonIcon??Ee,le=m.lastButtonIcon??Oe,F=m.nextButtonIcon??Ae,te=m.previousButtonIcon??De,P=h?T:C,ge=h?u:ee,be=h?ee:u,he=h?C:T,pe=h?c.lastButton:c.firstButton,Te=h?c.nextButton:c.previousButton,me=h?c.previousButton:c.nextButton,ue=h?c.firstButton:c.lastButton;return e.jsxs(qe,{ref:o,className:$(ie.root,r),...y,children:[A&&e.jsx(P,{onClick:ce,disabled:n||b===0,"aria-label":i("first",b),title:i("first",b),...pe,children:h?e.jsx(le,{...c.lastButtonIcon}):e.jsx(U,{...c.firstButtonIcon})}),e.jsx(ge,{onClick:N,disabled:n||b===0,color:"inherit","aria-label":i("previous",b),title:i("previous",b),...Te??g,children:h?e.jsx(F,{...c.nextButtonIcon}):e.jsx(te,{...c.previousButtonIcon})}),e.jsx(be,{onClick:Z,disabled:n||(s!==-1?b>=Math.ceil(s/W)-1:!1),color:"inherit","aria-label":i("next",b),title:i("next",b),...me??j,children:h?e.jsx(te,{...c.previousButtonIcon}):e.jsx(F,{...c.nextButtonIcon})}),z&&e.jsx(he,{onClick:de,disabled:n||b>=Math.ceil(s/W)-1,"aria-label":i("last",b),title:i("last",b),...ue,children:h?e.jsx(U,{...c.firstButtonIcon}):e.jsx(le,{...c.lastButtonIcon})})]})});function Qe(l){return ne("MuiTablePagination",l)}const X=re("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);var Pe;const Xe=f(t,{name:"MuiTablePagination",slot:"Root"})(D(({theme:l})=>({overflow:"auto",color:(l.vars||l).palette.text.primary,fontSize:l.typography.pxToRem(14),"&:last-child":{padding:0}}))),Ye=f(Ge,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(l,a)=>({[`& .${X.actions}`]:a.actions,...a.toolbar})})(D(({theme:l})=>({minHeight:52,paddingRight:2,[`${l.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[l.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${X.actions}`]:{flexShrink:0,marginLeft:20}}))),Ze=f("div",{name:"MuiTablePagination",slot:"Spacer"})({flex:"1 1 100%"}),el=f("p",{name:"MuiTablePagination",slot:"SelectLabel"})(D(({theme:l})=>({...l.typography.body2,flexShrink:0}))),ll=f($e,{name:"MuiTablePagination",slot:"Select",overridesResolver:(l,a)=>({[`& .${X.selectIcon}`]:a.selectIcon,[`& .${X.select}`]:a.select,...a.input,...a.selectRoot})})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${X.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),tl=f(Ne,{name:"MuiTablePagination",slot:"MenuItem"})({}),al=f("p",{name:"MuiTablePagination",slot:"DisplayedRows"})(D(({theme:l})=>({...l.typography.body2,flexShrink:0})));function ol({from:l,to:a,count:o}){return`${l}–${a} of ${o!==-1?o:`more than ${a}`}`}function nl(l){return`Go to ${l} page`}const rl=l=>{const{classes:a}=l;return se({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},Qe,a)},sl=S.forwardRef(function(a,o){const d=oe({props:a,name:"MuiTablePagination"}),{ActionsComponent:g=Je,backIconButtonProps:r,colSpan:s,component:n=t,count:i,disabled:j=!1,getItemAriaLabel:w=nl,labelDisplayedRows:b=ol,labelRowsPerPage:W="Rows per page:",nextIconButtonProps:A,onPageChange:z,onRowsPerPageChange:m,page:c,rowsPerPage:y,rowsPerPageOptions:h=[10,25,50,100],SelectProps:Y={},showFirstButton:ie=!1,showLastButton:ce=!1,slotProps:N={},slots:Z={},...de}=d,C=d,T=rl(C),u=N?.select??Y,ee=u.native?"option":tl;let U;(n===t||n==="td")&&(U=s||1e3);const le=we(u.id),F=we(u.labelId),te=()=>i===-1?(c+1)*y:y===-1?i:Math.min(i,(c+1)*y),P={slots:Z,slotProps:N},[ge,be]=v("root",{ref:o,className:T.root,elementType:Xe,externalForwardedProps:{...P,component:n,...de},ownerState:C,additionalProps:{colSpan:U}}),[he,pe]=v("toolbar",{className:T.toolbar,elementType:Ye,externalForwardedProps:P,ownerState:C}),[Te,me]=v("spacer",{className:T.spacer,elementType:Ze,externalForwardedProps:P,ownerState:C}),[ue,R]=v("selectLabel",{className:T.selectLabel,elementType:el,externalForwardedProps:P,ownerState:C,additionalProps:{id:F}}),[Re,Be]=v("select",{className:T.select,elementType:ll,externalForwardedProps:P,ownerState:C}),[ve,ke]=v("menuItem",{className:T.menuItem,elementType:ee,externalForwardedProps:P,ownerState:C}),[Ie,Le]=v("displayedRows",{className:T.displayedRows,elementType:al,externalForwardedProps:P,ownerState:C});return e.jsx(ge,{...be,children:e.jsxs(he,{...pe,children:[e.jsx(Te,{...me}),h.length>1&&e.jsx(ue,{...R,children:W}),h.length>1&&e.jsx(Re,{variant:"standard",...!u.variant&&{input:Pe||(Pe=e.jsx(ze,{}))},value:y,onChange:m,id:le,labelId:F,...u,classes:{...u.classes,root:$(T.input,T.selectRoot,(u.classes||{}).root),select:$(T.select,(u.classes||{}).select),icon:$(T.selectIcon,(u.classes||{}).icon)},disabled:j,...Be,children:h.map(B=>S.createElement(ve,{...ke,key:B.label?B.label:B,value:B.value?B.value:B},B.label?B.label:B))}),e.jsx(Ie,{...Le,children:b({from:i===0?0:c*y+1,to:te(),count:i===-1?-1:i,page:c})}),e.jsx(g,{className:T.actions,backIconButtonProps:r,count:i,nextIconButtonProps:A,onPageChange:z,page:c,rowsPerPage:y,showFirstButton:ie,showLastButton:ce,slotProps:N.actions,slots:Z.actions,getItemAriaLabel:w,disabled:j})]})})}),il=je(e.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}));function cl(l){return ne("MuiTableSortLabel",l)}const xe=re("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc","directionDesc","directionAsc"]),dl=l=>{const{classes:a,direction:o,active:d}=l,g={root:["root",d&&"active",`direction${Ce(o)}`],icon:["icon",`iconDirection${Ce(o)}`]};return se(g,cl,a)},gl=f(We,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(l,a)=>{const{ownerState:o}=l;return[a.root,o.active&&a.active]}})(D(({theme:l})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(l.vars||l).palette.text.secondary},"&:hover":{color:(l.vars||l).palette.text.secondary,[`& .${xe.icon}`]:{opacity:.5}},[`&.${xe.active}`]:{color:(l.vars||l).palette.text.primary,[`& .${xe.icon}`]:{opacity:1,color:(l.vars||l).palette.text.secondary}}}))),bl=f("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(l,a)=>{const{ownerState:o}=l;return[a.icon,a[`iconDirection${Ce(o.direction)}`]]}})(D(({theme:l})=>({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:l.transitions.create(["opacity","transform"],{duration:l.transitions.duration.shorter}),userSelect:"none",variants:[{props:{direction:"desc"},style:{transform:"rotate(0deg)"}},{props:{direction:"asc"},style:{transform:"rotate(180deg)"}}]}))),hl=S.forwardRef(function(a,o){const d=oe({props:a,name:"MuiTableSortLabel"}),{active:g=!1,children:r,className:s,direction:n="asc",hideSortIcon:i=!1,IconComponent:j=il,slots:w={},slotProps:b={},...W}=d,A={...d,active:g,direction:n,hideSortIcon:i,IconComponent:j},z=dl(A),m={slots:w,slotProps:b},[c,y]=v("root",{elementType:gl,externalForwardedProps:m,ownerState:A,className:$(z.root,s),ref:o}),[h,Y]=v("icon",{elementType:bl,externalForwardedProps:m,ownerState:A,className:z.icon});return e.jsxs(c,{disableRipple:!0,component:"span",...y,...W,children:[r,i&&!g?null:e.jsx(h,{as:j,...Y})]})}),El={title:"Component/Table",component:k,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
## Table

데이터를 행과 열로 구성하여 표시하는 테이블 컴포넌트입니다.

### 사용 패턴

| 패턴 | 설명 | 예시 |
|------|------|------|
| Basic | 기본 테이블 | \`<Table><TableBody>...</TableBody></Table>\` |
| Dense | 밀집 테이블 | \`size="small"\` |
| Striped | 줄무늬 배경 | 홀수/짝수 행 배경색 |
| Sortable | 정렬 가능 | \`TableSortLabel\` 사용 |
| Selectable | 선택 가능 | \`Checkbox\` 포함 |
        `}}},argTypes:{size:{control:"select",options:["small","medium"],description:"테이블 셀의 크기를 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},stickyHeader:{control:"boolean",description:"테이블 헤더를 고정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},padding:{control:"select",options:["normal","checkbox","none"],description:"셀 패딩을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}}}},V=(l,a,o,d,g,r)=>({id:l,name:a,calories:o,fat:d,carbs:g,protein:r}),x=[V(1,"프로즌 요거트",159,6,24,4),V(2,"아이스크림 샌드위치",237,9,37,4.3),V(3,"에클레어",262,16,24,6),V(4,"컵케이크",305,3.7,67,4.3),V(5,"진저브레드",356,16,49,3.9)],pl=[{id:1,name:"김철수",email:"kim@example.com",role:"관리자",status:"활성"},{id:2,name:"이영희",email:"lee@example.com",role:"편집자",status:"활성"},{id:3,name:"박민수",email:"park@example.com",role:"뷰어",status:"비활성"},{id:4,name:"최수진",email:"choi@example.com",role:"편집자",status:"활성"},{id:5,name:"정대현",email:"jung@example.com",role:"뷰어",status:"대기"}],G={args:{size:"medium",stickyHeader:!1,padding:"normal"},render:l=>e.jsx(H,{component:M,sx:{maxHeight:l.stickyHeader?300:"none"},children:e.jsxs(k,{size:l.size,stickyHeader:l.stickyHeader,padding:l.padding,children:[e.jsx(I,{children:e.jsxs(p,{children:[e.jsx(t,{children:"디저트 (100g)"}),e.jsx(t,{align:"right",children:"칼로리"}),e.jsx(t,{align:"right",children:"지방 (g)"}),e.jsx(t,{align:"right",children:"탄수화물 (g)"}),e.jsx(t,{align:"right",children:"단백질 (g)"})]})}),e.jsx(L,{children:x.map(a=>e.jsxs(p,{children:[e.jsx(t,{component:"th",scope:"row",children:a.name}),e.jsx(t,{align:"right",children:a.calories}),e.jsx(t,{align:"right",children:a.fat}),e.jsx(t,{align:"right",children:a.carbs}),e.jsx(t,{align:"right",children:a.protein})]},a.id))})]})})},O={render:()=>e.jsx(H,{component:M,children:e.jsxs(k,{size:"small",children:[e.jsx(I,{children:e.jsxs(p,{children:[e.jsx(t,{children:"디저트 (100g)"}),e.jsx(t,{align:"right",children:"칼로리"}),e.jsx(t,{align:"right",children:"지방 (g)"}),e.jsx(t,{align:"right",children:"탄수화물 (g)"}),e.jsx(t,{align:"right",children:"단백질 (g)"})]})}),e.jsx(L,{children:x.map(l=>e.jsxs(p,{children:[e.jsx(t,{component:"th",scope:"row",children:l.name}),e.jsx(t,{align:"right",children:l.calories}),e.jsx(t,{align:"right",children:l.fat}),e.jsx(t,{align:"right",children:l.carbs}),e.jsx(t,{align:"right",children:l.protein})]},l.id))})]})})},E={render:()=>e.jsx(H,{component:M,children:e.jsxs(k,{children:[e.jsx(I,{children:e.jsxs(p,{sx:{backgroundColor:"primary.main"},children:[e.jsx(t,{sx:{color:"white",fontWeight:700},children:"디저트 (100g)"}),e.jsx(t,{sx:{color:"white",fontWeight:700},align:"right",children:"칼로리"}),e.jsx(t,{sx:{color:"white",fontWeight:700},align:"right",children:"지방 (g)"}),e.jsx(t,{sx:{color:"white",fontWeight:700},align:"right",children:"탄수화물 (g)"}),e.jsx(t,{sx:{color:"white",fontWeight:700},align:"right",children:"단백질 (g)"})]})}),e.jsx(L,{children:x.map((l,a)=>e.jsxs(p,{sx:{backgroundColor:a%2===0?"grey.50":"white"},children:[e.jsx(t,{component:"th",scope:"row",children:l.name}),e.jsx(t,{align:"right",children:l.calories}),e.jsx(t,{align:"right",children:l.fat}),e.jsx(t,{align:"right",children:l.carbs}),e.jsx(t,{align:"right",children:l.protein})]},l.id))})]})})},_={render:()=>{const[l,a]=S.useState([]),o=r=>{r.target.checked?a(x.map(s=>s.id)):a([])},d=r=>{const s=l.indexOf(r);let n=[];s===-1?n=[...l,r]:n=l.filter(i=>i!==r),a(n)},g=r=>l.indexOf(r)!==-1;return e.jsxs(H,{component:M,children:[e.jsxs(k,{children:[e.jsx(I,{children:e.jsxs(p,{children:[e.jsx(t,{padding:"checkbox",children:e.jsx(ye,{indeterminate:l.length>0&&l.length<x.length,checked:x.length>0&&l.length===x.length,onChange:o})}),e.jsx(t,{children:"디저트 (100g)"}),e.jsx(t,{align:"right",children:"칼로리"}),e.jsx(t,{align:"right",children:"지방 (g)"}),e.jsx(t,{align:"right",children:"탄수화물 (g)"}),e.jsx(t,{align:"right",children:"단백질 (g)"})]})}),e.jsx(L,{children:x.map(r=>{const s=g(r.id);return e.jsxs(p,{hover:!0,onClick:()=>d(r.id),selected:s,sx:{cursor:"pointer"},children:[e.jsx(t,{padding:"checkbox",children:e.jsx(ye,{checked:s})}),e.jsx(t,{component:"th",scope:"row",children:r.name}),e.jsx(t,{align:"right",children:r.calories}),e.jsx(t,{align:"right",children:r.fat}),e.jsx(t,{align:"right",children:r.carbs}),e.jsx(t,{align:"right",children:r.protein})]},r.id)})})]}),e.jsx(Me,{sx:{p:2,borderTop:1,borderColor:"divider"},children:e.jsxs(fe,{variant:"body2",color:"text.secondary",children:[l.length,"개 선택됨"]})})]})}},K={render:()=>{const[l,a]=S.useState("asc"),[o,d]=S.useState("calories"),g=n=>{a(o===n&&l==="asc"?"desc":"asc"),d(n)},r=[...x].sort((n,i)=>l==="asc"?n[o]<i[o]?-1:1:n[o]>i[o]?-1:1),s=[{id:"name",label:"디저트 (100g)",align:"left"},{id:"calories",label:"칼로리",align:"right"},{id:"fat",label:"지방 (g)",align:"right"},{id:"carbs",label:"탄수화물 (g)",align:"right"},{id:"protein",label:"단백질 (g)",align:"right"}];return e.jsx(H,{component:M,children:e.jsxs(k,{children:[e.jsx(I,{children:e.jsx(p,{children:s.map(n=>e.jsx(t,{align:n.align,sortDirection:o===n.id?l:!1,children:e.jsx(hl,{active:o===n.id,direction:o===n.id?l:"asc",onClick:()=>g(n.id),children:n.label})},n.id))})}),e.jsx(L,{children:r.map(n=>e.jsxs(p,{hover:!0,children:[e.jsx(t,{component:"th",scope:"row",children:n.name}),e.jsx(t,{align:"right",children:n.calories}),e.jsx(t,{align:"right",children:n.fat}),e.jsx(t,{align:"right",children:n.carbs}),e.jsx(t,{align:"right",children:n.protein})]},n.id))})]})})}},q={render:()=>{const[l,a]=S.useState(0),[o,d]=S.useState(2),g=(s,n)=>{a(n)},r=s=>{d(parseInt(s.target.value,10)),a(0)};return e.jsxs(M,{children:[e.jsx(H,{children:e.jsxs(k,{children:[e.jsx(I,{children:e.jsxs(p,{children:[e.jsx(t,{children:"디저트 (100g)"}),e.jsx(t,{align:"right",children:"칼로리"}),e.jsx(t,{align:"right",children:"지방 (g)"}),e.jsx(t,{align:"right",children:"탄수화물 (g)"}),e.jsx(t,{align:"right",children:"단백질 (g)"})]})}),e.jsx(L,{children:x.slice(l*o,l*o+o).map(s=>e.jsxs(p,{children:[e.jsx(t,{component:"th",scope:"row",children:s.name}),e.jsx(t,{align:"right",children:s.calories}),e.jsx(t,{align:"right",children:s.fat}),e.jsx(t,{align:"right",children:s.carbs}),e.jsx(t,{align:"right",children:s.protein})]},s.id))})]})}),e.jsx(sl,{rowsPerPageOptions:[2,3,5],component:"div",count:x.length,rowsPerPage:o,page:l,onPageChange:g,onRowsPerPageChange:r,labelRowsPerPage:"페이지당 행:"})]})}},J={render:()=>{const l=o=>{switch(o){case"활성":return"success";case"비활성":return"error";case"대기":return"warning";default:return"default"}},a=o=>{switch(o){case"관리자":return"filled";default:return"outlined"}};return e.jsx(H,{component:M,children:e.jsxs(k,{children:[e.jsx(I,{children:e.jsxs(p,{sx:{backgroundColor:"grey.100"},children:[e.jsx(t,{sx:{fontWeight:700},children:"이름"}),e.jsx(t,{sx:{fontWeight:700},children:"이메일"}),e.jsx(t,{sx:{fontWeight:700},children:"역할"}),e.jsx(t,{sx:{fontWeight:700},children:"상태"})]})}),e.jsx(L,{children:pl.map(o=>e.jsxs(p,{hover:!0,children:[e.jsx(t,{children:e.jsx(fe,{variant:"body2",sx:{fontWeight:500},children:o.name})}),e.jsx(t,{children:e.jsx(fe,{variant:"body2",color:"text.secondary",children:o.email})}),e.jsx(t,{children:e.jsx(Se,{label:o.role,size:"small",variant:a(o.role),color:o.role==="관리자"?"primary":"default"})}),e.jsx(t,{children:e.jsx(Se,{label:o.status,size:"small",color:l(o.status)})})]},o.id))})]})})}},Q={render:()=>e.jsx(M,{sx:{width:"100%",overflow:"hidden"},children:e.jsx(H,{sx:{maxHeight:200},children:e.jsxs(k,{stickyHeader:!0,children:[e.jsx(I,{children:e.jsxs(p,{children:[e.jsx(t,{sx:{fontWeight:700},children:"디저트 (100g)"}),e.jsx(t,{sx:{fontWeight:700},align:"right",children:"칼로리"}),e.jsx(t,{sx:{fontWeight:700},align:"right",children:"지방 (g)"}),e.jsx(t,{sx:{fontWeight:700},align:"right",children:"탄수화물 (g)"}),e.jsx(t,{sx:{fontWeight:700},align:"right",children:"단백질 (g)"})]})}),e.jsx(L,{children:x.map(l=>e.jsxs(p,{hover:!0,children:[e.jsx(t,{component:"th",scope:"row",children:l.name}),e.jsx(t,{align:"right",children:l.calories}),e.jsx(t,{align:"right",children:l.fat}),e.jsx(t,{align:"right",children:l.carbs}),e.jsx(t,{align:"right",children:l.protein})]},l.id))})]})})})};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    stickyHeader: false,
    padding: 'normal'
  },
  render: args => <TableContainer component={Paper} sx={{
    maxHeight: args.stickyHeader ? 300 : 'none'
  }}>
      <Table size={args.size} stickyHeader={args.stickyHeader} padding={args.padding}>
        <TableHead>
          <TableRow>
            <TableCell>디저트 (100g)</TableCell>
            <TableCell align="right">칼로리</TableCell>
            <TableCell align="right">지방 (g)</TableCell>
            <TableCell align="right">탄수화물 (g)</TableCell>
            <TableCell align="right">단백질 (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...G.parameters?.docs?.source},description:{story:"기본 테이블",...G.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>디저트 (100g)</TableCell>
            <TableCell align="right">칼로리</TableCell>
            <TableCell align="right">지방 (g)</TableCell>
            <TableCell align="right">탄수화물 (g)</TableCell>
            <TableCell align="right">단백질 (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...O.parameters?.docs?.source},description:{story:"밀집 테이블 (Dense)",...O.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{
          backgroundColor: 'primary.main'
        }}>
            <TableCell sx={{
            color: 'white',
            fontWeight: 700
          }}>디저트 (100g)</TableCell>
            <TableCell sx={{
            color: 'white',
            fontWeight: 700
          }} align="right">칼로리</TableCell>
            <TableCell sx={{
            color: 'white',
            fontWeight: 700
          }} align="right">지방 (g)</TableCell>
            <TableCell sx={{
            color: 'white',
            fontWeight: 700
          }} align="right">탄수화물 (g)</TableCell>
            <TableCell sx={{
            color: 'white',
            fontWeight: 700
          }} align="right">단백질 (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => <TableRow key={row.id} sx={{
          backgroundColor: index % 2 === 0 ? 'grey.50' : 'white'
        }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...E.parameters?.docs?.source},description:{story:"줄무늬 테이블 (Striped)",...E.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState([]);
    const handleSelectAll = event => {
      if (event.target.checked) {
        setSelected(rows.map(row => row.id));
      } else {
        setSelected([]);
      }
    };
    const handleSelect = id => {
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];
      if (selectedIndex === -1) {
        newSelected = [...selected, id];
      } else {
        newSelected = selected.filter(item => item !== id);
      }
      setSelected(newSelected);
    };
    const isSelected = id => selected.indexOf(id) !== -1;
    return <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox indeterminate={selected.length > 0 && selected.length < rows.length} checked={rows.length > 0 && selected.length === rows.length} onChange={handleSelectAll} />
              </TableCell>
              <TableCell>디저트 (100g)</TableCell>
              <TableCell align="right">칼로리</TableCell>
              <TableCell align="right">지방 (g)</TableCell>
              <TableCell align="right">탄수화물 (g)</TableCell>
              <TableCell align="right">단백질 (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
            const isItemSelected = isSelected(row.id);
            return <TableRow key={row.id} hover onClick={() => handleSelect(row.id)} selected={isItemSelected} sx={{
              cursor: 'pointer'
            }}>
                  <TableCell padding="checkbox">
                    <Checkbox checked={isItemSelected} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>;
          })}
          </TableBody>
        </Table>
        <Box sx={{
        p: 2,
        borderTop: 1,
        borderColor: 'divider'
      }}>
          <Typography variant="body2" color="text.secondary">
            {selected.length}개 선택됨
          </Typography>
        </Box>
      </TableContainer>;
  }
}`,..._.parameters?.docs?.source},description:{story:"선택 가능한 테이블",..._.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const handleSort = property => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
    const sortedRows = [...rows].sort((a, b) => {
      if (order === 'asc') {
        return a[orderBy] < b[orderBy] ? -1 : 1;
      }
      return a[orderBy] > b[orderBy] ? -1 : 1;
    });
    const headCells = [{
      id: 'name',
      label: '디저트 (100g)',
      align: 'left'
    }, {
      id: 'calories',
      label: '칼로리',
      align: 'right'
    }, {
      id: 'fat',
      label: '지방 (g)',
      align: 'right'
    }, {
      id: 'carbs',
      label: '탄수화물 (g)',
      align: 'right'
    }, {
      id: 'protein',
      label: '단백질 (g)',
      align: 'right'
    }];
    return <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map(headCell => <TableCell key={headCell.id} align={headCell.align} sortDirection={orderBy === headCell.id ? order : false}>
                  <TableSortLabel active={orderBy === headCell.id} direction={orderBy === headCell.id ? order : 'asc'} onClick={() => handleSort(headCell.id)}>
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map(row => <TableRow key={row.id} hover>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>;
  }
}`,...K.parameters?.docs?.source},description:{story:"정렬 가능한 테이블",...K.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(2);
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = event => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    return <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>디저트 (100g)</TableCell>
                <TableCell align="right">칼로리</TableCell>
                <TableCell align="right">지방 (g)</TableCell>
                <TableCell align="right">탄수화물 (g)</TableCell>
                <TableCell align="right">단백질 (g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>)}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination rowsPerPageOptions={[2, 3, 5]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} labelRowsPerPage="페이지당 행:" />
      </Paper>;
  }
}`,...q.parameters?.docs?.source},description:{story:"페이지네이션 테이블",...q.parameters?.docs?.description}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const getStatusColor = status => {
      switch (status) {
        case '활성':
          return 'success';
        case '비활성':
          return 'error';
        case '대기':
          return 'warning';
        default:
          return 'default';
      }
    };
    const getRoleVariant = role => {
      switch (role) {
        case '관리자':
          return 'filled';
        default:
          return 'outlined';
      }
    };
    return <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{
            backgroundColor: 'grey.100'
          }}>
              <TableCell sx={{
              fontWeight: 700
            }}>이름</TableCell>
              <TableCell sx={{
              fontWeight: 700
            }}>이메일</TableCell>
              <TableCell sx={{
              fontWeight: 700
            }}>역할</TableCell>
              <TableCell sx={{
              fontWeight: 700
            }}>상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userRows.map(row => <TableRow key={row.id} hover>
                <TableCell>
                  <Typography variant="body2" sx={{
                fontWeight: 500
              }}>
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    {row.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip label={row.role} size="small" variant={getRoleVariant(row.role)} color={row.role === '관리자' ? 'primary' : 'default'} />
                </TableCell>
                <TableCell>
                  <Chip label={row.status} size="small" color={getStatusColor(row.status)} />
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>;
  }
}`,...J.parameters?.docs?.source},description:{story:"실제 사용 예시 - 사용자 목록",...J.parameters?.docs?.description}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <Paper sx={{
    width: '100%',
    overflow: 'hidden'
  }}>
      <TableContainer sx={{
      maxHeight: 200
    }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{
              fontWeight: 700
            }}>디저트 (100g)</TableCell>
              <TableCell sx={{
              fontWeight: 700
            }} align="right">칼로리</TableCell>
              <TableCell sx={{
              fontWeight: 700
            }} align="right">지방 (g)</TableCell>
              <TableCell sx={{
              fontWeight: 700
            }} align="right">탄수화물 (g)</TableCell>
              <TableCell sx={{
              fontWeight: 700
            }} align="right">단백질 (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => <TableRow key={row.id} hover>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
}`,...Q.parameters?.docs?.source},description:{story:"고정 헤더 테이블",...Q.parameters?.docs?.description}}};const _l=["Default","Dense","Striped","Selectable","Sortable","WithPagination","UserList","StickyHeader"];export{G as Default,O as Dense,_ as Selectable,K as Sortable,Q as StickyHeader,E as Striped,J as UserList,q as WithPagination,_l as __namedExportsOrder,El as default};
