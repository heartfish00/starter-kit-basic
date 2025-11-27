import{r as l,w as Te,_ as ve,R as H,c as x,j as N,u as re,B as Q}from"./iframe-BWgkq3nG.js";import{a as ae,s as Z,g as Pe,c as Ve}from"./memoTheme-wZLTRCdj.js";import{b as Be,_ as Se,c as we,T as oe,a as De,u as se}from"./useTimeout-BL3CCW4_.js";function _(e){const t=l.useRef(e);return Te(()=>{t.current=e}),l.useRef((...n)=>(0,t.current)(...n)).current}function ie(e){try{return e.matches(":focus-visible")}catch{}return!1}class G{static create(){return new G}static use(){const t=Be(G.create).current,[n,a]=l.useState(!1);return t.shouldMount=n,t.setShouldMount=a,l.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=je(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function Le(){return G.use()}function je(){let e,t;const n=new Promise((a,o)=>{e=a,t=o});return n.resolve=e,n.reject=t,n}function ke(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(e,t){var n=function(s){return t&&l.isValidElement(s)?t(s):s},a=Object.create(null);return e&&l.Children.map(e,function(o){return o}).forEach(function(o){a[o.key]=n(o)}),a}function Ne(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var a=Object.create(null),o=[];for(var s in e)s in t?o.length&&(a[s]=o,o=[]):o.push(s);var i,c={};for(var u in t){if(a[u])for(i=0;i<a[u].length;i++){var p=a[u][i];c[a[u][i]]=n(p)}c[u]=n(u)}for(i=0;i<o.length;i++)c[o[i]]=n(o[i]);return c}function k(e,t,n){return n[t]!=null?n[t]:e.props[t]}function $e(e,t){return ee(e.children,function(n){return l.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:k(n,"appear",e),enter:k(n,"enter",e),exit:k(n,"exit",e)})})}function Fe(e,t,n){var a=ee(e.children),o=Ne(t,a);return Object.keys(o).forEach(function(s){var i=o[s];if(l.isValidElement(i)){var c=s in t,u=s in a,p=t[s],d=l.isValidElement(p)&&!p.props.in;u&&(!c||d)?o[s]=l.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:k(i,"exit",e),enter:k(i,"enter",e)}):!u&&c&&!d?o[s]=l.cloneElement(i,{in:!1}):u&&c&&l.isValidElement(p)&&(o[s]=l.cloneElement(i,{onExited:n.bind(null,i),in:p.props.in,exit:k(i,"exit",e),enter:k(i,"enter",e)}))}}),o}var Ie=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Ue={component:"div",childFactory:function(t){return t}},te=(function(e){Se(t,e);function t(a,o){var s;s=e.call(this,a,o)||this;var i=s.handleExited.bind(ke(s));return s.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},s}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,s){var i=s.children,c=s.handleExited,u=s.firstRender;return{children:u?$e(o,c):Fe(o,i,c),firstRender:!1}},n.handleExited=function(o,s){var i=ee(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(s),this.mounted&&this.setState(function(c){var u=ve({},c.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,s=o.component,i=o.childFactory,c=we(o,["component","childFactory"]),u=this.state.contextValue,p=Ie(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,s===null?H.createElement(oe.Provider,{value:u},p):H.createElement(oe.Provider,{value:u},H.createElement(s,c,p))},t})(H.Component);te.propTypes={};te.defaultProps=Ue;function ze(e){const{className:t,classes:n,pulsate:a=!1,rippleX:o,rippleY:s,rippleSize:i,in:c,onExited:u,timeout:p}=e,[d,h]=l.useState(!1),M=x(t,n.ripple,n.rippleVisible,a&&n.ripplePulsate),P={width:i,height:i,top:-(i/2)+s,left:-(i/2)+o},b=x(n.child,d&&n.childLeaving,a&&n.childPulsate);return!c&&!d&&h(!0),l.useEffect(()=>{if(!c&&u!=null){const w=setTimeout(u,p);return()=>{clearTimeout(w)}}},[u,c,p]),N.jsx("span",{className:M,style:P,children:N.jsx("span",{className:b})})}const g=ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Oe=80,Ae=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Xe=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Ye=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Ke=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),We=Z(ze,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ae};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${Xe};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Ye};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,He=l.forwardRef(function(t,n){const a=re({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:s={},className:i,...c}=a,[u,p]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),P=De(),b=l.useRef(null),w=l.useRef(null),C=l.useCallback(f=>{const{pulsate:E,rippleX:R,rippleY:I,rippleSize:D,cb:U}=f;p(y=>[...y,N.jsx(We,{classes:{ripple:x(s.ripple,g.ripple),rippleVisible:x(s.rippleVisible,g.rippleVisible),ripplePulsate:x(s.ripplePulsate,g.ripplePulsate),child:x(s.child,g.child),childLeaving:x(s.childLeaving,g.childLeaving),childPulsate:x(s.childPulsate,g.childPulsate)},timeout:J,pulsate:E,rippleX:R,rippleY:I,rippleSize:D},d.current)]),d.current+=1,h.current=U},[s]),$=l.useCallback((f={},E={},R=()=>{})=>{const{pulsate:I=!1,center:D=o||E.pulsate,fakeElement:U=!1}=E;if(f?.type==="mousedown"&&M.current){M.current=!1;return}f?.type==="touchstart"&&(M.current=!0);const y=U?null:w.current,V=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,T,S;if(D||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)B=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:z,clientY:L}=f.touches&&f.touches.length>0?f.touches[0]:f;B=Math.round(z-V.left),T=Math.round(L-V.top)}if(D)S=Math.sqrt((2*V.width**2+V.height**2)/3),S%2===0&&(S+=1);else{const z=Math.max(Math.abs((y?y.clientWidth:0)-B),B)*2+2,L=Math.max(Math.abs((y?y.clientHeight:0)-T),T)*2+2;S=Math.sqrt(z**2+L**2)}f?.touches?b.current===null&&(b.current=()=>{C({pulsate:I,rippleX:B,rippleY:T,rippleSize:S,cb:R})},P.start(Oe,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:I,rippleX:B,rippleY:T,rippleSize:S,cb:R})},[o,C,P]),Y=l.useCallback(()=>{$({},{pulsate:!0})},[$]),F=l.useCallback((f,E)=>{if(P.clear(),f?.type==="touchend"&&b.current){b.current(),b.current=null,P.start(0,()=>{F(f,E)});return}b.current=null,p(R=>R.length>0?R.slice(1):R),h.current=E},[P]);return l.useImperativeHandle(n,()=>({pulsate:Y,start:$,stop:F}),[Y,$,F]),N.jsx(Ke,{className:x(g.root,s.root,i),ref:w,...c,children:N.jsx(te,{component:null,exit:!0,children:u})})});function _e(e){return Pe("MuiButtonBase",e)}const Ge=ae("MuiButtonBase",["root","disabled","focusVisible"]),qe=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:a,classes:o}=e,i=Ve({root:["root",t&&"disabled",n&&"focusVisible"]},_e,o);return n&&a&&(i.root+=` ${a}`),i},Je=Z("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ge.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),tt=l.forwardRef(function(t,n){const a=re({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:s=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:P,LinkComponent:b="a",onBlur:w,onClick:C,onContextMenu:$,onDragLeave:Y,onFocus:F,onFocusVisible:f,onKeyDown:E,onKeyUp:R,onMouseDown:I,onMouseLeave:D,onMouseUp:U,onTouchEnd:y,onTouchMove:V,onTouchStart:B,tabIndex:T=0,TouchRippleProps:S,touchRippleRef:z,type:L,...O}=a,A=l.useRef(null),m=Le(),le=se(m.ref,z),[j,K]=l.useState(!1);p&&j&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const ue=m.shouldMount&&!d&&!p;l.useEffect(()=>{j&&M&&!d&&m.pulsate()},[d,M,j,m]);const ce=v(m,"start",I,h),pe=v(m,"stop",$,h),fe=v(m,"stop",Y,h),de=v(m,"stop",U,h),he=v(m,"stop",r=>{j&&r.preventDefault(),D&&D(r)},h),me=v(m,"start",B,h),be=v(m,"stop",y,h),ge=v(m,"stop",V,h),Me=v(m,"stop",r=>{ie(r.target)||K(!1),w&&w(r)},!1),Re=_(r=>{A.current||(A.current=r.currentTarget),ie(r.target)&&(K(!0),f&&f(r)),F&&F(r)}),q=()=>{const r=A.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Ee=_(r=>{M&&!r.repeat&&j&&r.key===" "&&m.stop(r,()=>{m.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),E&&E(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!p&&(r.preventDefault(),C&&C(r))}),ye=_(r=>{M&&r.key===" "&&j&&!r.defaultPrevented&&m.stop(r,()=>{m.pulsate(r)}),R&&R(r),C&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&C(r)});let W=u;W==="button"&&(O.href||O.to)&&(W=b);const X={};W==="button"?(X.type=L===void 0?"button":L,X.disabled=p):(!O.href&&!O.to&&(X.role="button"),p&&(X["aria-disabled"]=p));const xe=se(n,A),ne={...a,centerRipple:s,component:u,disabled:p,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:j},Ce=qe(ne);return N.jsxs(Je,{as:W,className:x(Ce.root,c),ownerState:ne,onBlur:Me,onClick:C,onContextMenu:pe,onFocus:Re,onKeyDown:Ee,onKeyUp:ye,onMouseDown:ce,onMouseLeave:he,onMouseUp:de,onDragLeave:fe,onTouchEnd:be,onTouchMove:ge,onTouchStart:me,ref:xe,tabIndex:p?-1:T,type:L,...X,...O,children:[i,ue?N.jsx(He,{ref:le,center:s,...S}):null]})});function v(e,t,n,a=!1){return _(o=>(n&&n(o),a||e[t](o),!0))}export{tt as B,_ as u};
