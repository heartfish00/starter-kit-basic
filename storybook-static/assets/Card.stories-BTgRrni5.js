import{r as _,u as L,j as t,c as Y}from"./iframe-BWgkq3nG.js";import{C as s,a as i}from"./CardContent-D992YUE6.js";import{T as e,t as Q}from"./Typography-Crr089TM.js";import{g as J,a as K,s as j,c as V}from"./memoTheme-wZLTRCdj.js";import{B as x}from"./Button-DjpYfm2Y.js";import{u as C}from"./useSlot-OsDyiYkB.js";import{I as $}from"./IconButton-BlYvHqG4.js";import{B as c}from"./Box-B4QF7xQt.js";import{A as q}from"./Avatar-BPH86LN6.js";import{S as O}from"./Stack-BlXiqy8W.js";import{C as v}from"./Chip-GrVheW_z.js";import{G as X}from"./Grid-Cw9YSzFF.js";import"./preload-helper-PPVm8Dsz.js";import"./Paper-BPbdMq_H.js";import"./useTheme-CPxBch2_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BrHEvKFd.js";import"./useTimeout-BL3CCW4_.js";import"./CircularProgress-CDkyS_V7.js";import"./createSvgIcon-B2KGxEB9.js";import"./useThemeProps-BQFY9YMS.js";import"./isMuiElement-Dnj352N-.js";function pt(r){return J("MuiCardActions",r)}K("MuiCardActions",["root","spacing"]);const ht=r=>{const{classes:a,disableSpacing:o}=r;return V({root:["root",!o&&"spacing"]},pt,a)},mt=j("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:o}=r;return[a.root,!o.disableSpacing&&a.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),b=_.forwardRef(function(a,o){const n=L({props:a,name:"MuiCardActions"}),{disableSpacing:l=!1,className:h,...p}=n,d={...n,disableSpacing:l},f=ht(d);return t.jsx(mt,{className:Y(f.root,h),ownerState:d,ref:o,...p})});function xt(r){return J("MuiCardHeader",r)}const D=K("MuiCardHeader",["root","avatar","action","content","title","subheader"]),yt=r=>{const{classes:a}=r;return V({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},xt,a)},gt=j("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(r,a)=>[{[`& .${D.title}`]:a.title},{[`& .${D.subheader}`]:a.subheader},a.root]})({display:"flex",alignItems:"center",padding:16}),ut=j("div",{name:"MuiCardHeader",slot:"Avatar"})({display:"flex",flex:"0 0 auto",marginRight:16}),Ct=j("div",{name:"MuiCardHeader",slot:"Action"})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),vt=j("div",{name:"MuiCardHeader",slot:"Content"})({flex:"1 1 auto",[`.${Q.root}:where(& .${D.title})`]:{display:"block"},[`.${Q.root}:where(& .${D.subheader})`]:{display:"block"}}),jt=_.forwardRef(function(a,o){const n=L({props:a,name:"MuiCardHeader"}),{action:l,avatar:h,component:p="div",disableTypography:d=!1,subheader:f,subheaderTypographyProps:N,title:U,titleTypographyProps:y,slots:G={},slotProps:E={},...F}=n,m={...n,component:p,disableTypography:d},g=yt(m),u={slots:G,slotProps:{title:y,subheader:N,...E}};let T=U;const[Z,tt]=C("title",{className:g.title,elementType:e,externalForwardedProps:u,ownerState:m,additionalProps:{variant:h?"body2":"h5",component:"span"}});T!=null&&T.type!==e&&!d&&(T=t.jsx(Z,{...tt,children:T}));let S=f;const[et,rt]=C("subheader",{className:g.subheader,elementType:e,externalForwardedProps:u,ownerState:m,additionalProps:{variant:h?"body2":"body1",color:"textSecondary",component:"span"}});S!=null&&S.type!==e&&!d&&(S=t.jsx(et,{...rt,children:S}));const[at,ot]=C("root",{ref:o,className:g.root,elementType:gt,externalForwardedProps:{...u,...F,component:p},ownerState:m}),[nt,st]=C("avatar",{className:g.avatar,elementType:ut,externalForwardedProps:u,ownerState:m}),[it,dt]=C("content",{className:g.content,elementType:vt,externalForwardedProps:u,ownerState:m}),[ct,lt]=C("action",{className:g.action,elementType:Ct,externalForwardedProps:u,ownerState:m});return t.jsxs(at,{...ot,children:[h&&t.jsx(nt,{...st,children:h}),t.jsxs(it,{...dt,children:[T,S]}),l&&t.jsx(ct,{...lt,children:l})]})});function bt(r){return J("MuiCardMedia",r)}K("MuiCardMedia",["root","media","img"]);const ft=r=>{const{classes:a,isMediaComponent:o,isImageComponent:n}=r;return V({root:["root",o&&"media",n&&"img"]},bt,a)},Tt=j("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:o}=r,{isMediaComponent:n,isImageComponent:l}=o;return[a.root,n&&a.media,l&&a.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),St=["video","audio","picture","iframe","img"],Bt=["picture","img"],H=_.forwardRef(function(a,o){const n=L({props:a,name:"MuiCardMedia"}),{children:l,className:h,component:p="div",image:d,src:f,style:N,...U}=n,y=St.includes(p),G=!y&&d?{backgroundImage:`url("${d}")`,...N}:N,E={...n,component:p,isMediaComponent:y,isImageComponent:Bt.includes(p)},F=ft(E);return t.jsx(Tt,{className:Y(F.root,h),as:p,role:!y&&d?"img":void 0,ref:o,style:G,ownerState:E,src:y?d||f:void 0,...U,children:l})}),Vt={title:"Component/Card",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## Card

관련 콘텐츠를 그룹화하여 표시하는 카드 컴포넌트입니다.

### 구성 요소

| 컴포넌트 | 설명 | 예시 |
|----------|------|------|
| Card | 카드 컨테이너 | \`<Card>...</Card>\` |
| CardHeader | 제목, 부제목, 아바타 | 작성자 정보 |
| CardMedia | 이미지, 비디오 | 썸네일 |
| CardContent | 주요 콘텐츠 | 텍스트, 설명 |
| CardActions | 액션 버튼 | 좋아요, 공유 |
        `}}},argTypes:{elevation:{control:{type:"range",min:0,max:24},description:"카드의 그림자 깊이를 설정합니다.",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},variant:{control:"select",options:["elevation","outlined"],description:"카드의 스타일 변형을 설정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"elevation"}}}}},B={args:{elevation:1,variant:"elevation"},render:r=>t.jsxs(s,{sx:{maxWidth:345},elevation:r.elevation,variant:r.variant,children:[t.jsxs(i,{children:[t.jsx(e,{variant:"h5",component:"div",gutterBottom:!0,children:"카드 제목"}),t.jsx(e,{variant:"body2",color:"text.secondary",children:"카드는 관련된 콘텐츠를 그룹화하여 표시하는 컴포넌트입니다. 다양한 정보를 구조화된 형태로 보여줄 수 있습니다."})]}),t.jsxs(b,{children:[t.jsx(x,{size:"small",children:"더 보기"}),t.jsx(x,{size:"small",children:"공유"})]})]})},W={render:()=>t.jsxs(s,{sx:{maxWidth:345},children:[t.jsx(H,{component:"img",height:"140",image:"https://picsum.photos/seed/card1/345/140",alt:"카드 이미지"}),t.jsxs(i,{children:[t.jsx(e,{variant:"h6",gutterBottom:!0,children:"이미지 카드"}),t.jsx(e,{variant:"body2",color:"text.secondary",children:"CardMedia 컴포넌트를 사용하여 이미지를 표시할 수 있습니다."})]}),t.jsx(b,{children:t.jsx(x,{size:"small",color:"primary",children:"자세히 보기"})})]})},M={render:()=>t.jsxs(s,{sx:{maxWidth:345},children:[t.jsx(jt,{avatar:t.jsx(q,{sx:{bgcolor:"primary.main"},children:"K"}),action:t.jsx($,{children:t.jsx(c,{component:"span",sx:{fontSize:20},children:"⋮"})}),title:"김철수",subheader:"2024년 1월 15일"}),t.jsx(H,{component:"img",height:"194",image:"https://picsum.photos/seed/card2/345/194",alt:"게시물 이미지"}),t.jsx(i,{children:t.jsx(e,{variant:"body2",color:"text.secondary",children:"오늘 멋진 경험을 했습니다. 새로운 프로젝트를 시작하게 되어 정말 기쁩니다."})}),t.jsxs(b,{disableSpacing:!0,children:[t.jsx($,{children:t.jsx(c,{component:"span",sx:{fontSize:20},children:"♡"})}),t.jsx($,{children:t.jsx(c,{component:"span",sx:{fontSize:20},children:"💬"})}),t.jsx($,{children:t.jsx(c,{component:"span",sx:{fontSize:20},children:"↗"})})]})]})},A={render:()=>t.jsxs(s,{variant:"outlined",sx:{maxWidth:345},children:[t.jsxs(i,{children:[t.jsx(e,{variant:"overline",color:"text.secondary",children:"OUTLINED"}),t.jsx(e,{variant:"h5",component:"div",sx:{mb:1.5},children:"Outlined 카드"}),t.jsx(e,{variant:"body2",color:"text.secondary",children:'variant="outlined"를 사용하면 테두리만 있는 카드를 만들 수 있습니다. 그림자 대신 보더로 영역을 구분합니다.'})]}),t.jsx(b,{children:t.jsx(x,{size:"small",children:"확인"})})]})},z={render:()=>t.jsx(O,{direction:"row",spacing:2,flexWrap:"wrap",useFlexGap:!0,children:[0,1,2,3,4].map(r=>t.jsx(s,{elevation:r,sx:{width:120,height:80},children:t.jsxs(i,{children:[t.jsx(e,{variant:"caption",color:"text.secondary",children:"elevation"}),t.jsx(e,{variant:"h6",children:r})]})},r))})},w={render:()=>t.jsxs(s,{sx:{maxWidth:280},children:[t.jsx(H,{component:"img",height:"200",image:"https://picsum.photos/seed/product1/280/200",alt:"상품 이미지"}),t.jsxs(i,{children:[t.jsxs(c,{sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",mb:1},children:[t.jsx(e,{variant:"subtitle1",sx:{fontWeight:600},children:"프리미엄 무선 이어폰"}),t.jsx(v,{label:"NEW",size:"small",color:"primary"})]}),t.jsx(e,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"고품질 사운드와 편안한 착용감"}),t.jsxs(c,{sx:{display:"flex",alignItems:"baseline",gap:1},children:[t.jsx(e,{variant:"h6",color:"primary",sx:{fontWeight:700},children:"₩89,000"}),t.jsx(e,{variant:"body2",color:"text.secondary",sx:{textDecoration:"line-through"},children:"₩120,000"})]})]}),t.jsx(b,{children:t.jsx(x,{variant:"contained",fullWidth:!0,children:"장바구니 담기"})})]})},I={render:()=>t.jsxs(s,{sx:{maxWidth:400},children:[t.jsx(H,{component:"img",height:"180",image:"https://picsum.photos/seed/blog1/400/180",alt:"블로그 썸네일"}),t.jsxs(i,{children:[t.jsxs(O,{direction:"row",spacing:1,sx:{mb:1},children:[t.jsx(v,{label:"React",size:"small",variant:"outlined"}),t.jsx(v,{label:"TypeScript",size:"small",variant:"outlined"})]}),t.jsx(e,{variant:"h6",gutterBottom:!0,sx:{fontWeight:600},children:"React 19의 새로운 기능 살펴보기"}),t.jsx(e,{variant:"body2",color:"text.secondary",sx:{mb:2},children:"React 19에서 추가된 새로운 기능들과 성능 개선 사항에 대해 알아봅니다. Actions, use(), 그리고 새로운 훅들..."}),t.jsxs(c,{sx:{display:"flex",alignItems:"center",gap:2},children:[t.jsx(q,{sx:{width:32,height:32,bgcolor:"secondary.main"},children:"D"}),t.jsxs(c,{children:[t.jsx(e,{variant:"caption",sx:{fontWeight:500},children:"개발자 김"}),t.jsx(e,{variant:"caption",color:"text.secondary",display:"block",children:"2024.01.15 · 5분 읽기"})]})]})]})]})},P={render:()=>t.jsxs(s,{sx:{maxWidth:300,textAlign:"center"},children:[t.jsx(c,{sx:{pt:3},children:t.jsx(q,{sx:{width:80,height:80,mx:"auto",bgcolor:"primary.main",fontSize:"2rem"},children:"JS"})}),t.jsxs(i,{children:[t.jsx(e,{variant:"h6",sx:{fontWeight:600},children:"정수민"}),t.jsx(e,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:"Frontend Developer"}),t.jsxs(O,{direction:"row",spacing:1,justifyContent:"center",sx:{mt:2},children:[t.jsx(v,{label:"React",size:"small"}),t.jsx(v,{label:"TypeScript",size:"small"}),t.jsx(v,{label:"MUI",size:"small"})]})]}),t.jsxs(b,{sx:{justifyContent:"center",pb:2},children:[t.jsx(x,{variant:"outlined",size:"small",children:"프로필 보기"}),t.jsx(x,{variant:"contained",size:"small",children:"팔로우"})]})]})},R={render:()=>t.jsxs(O,{direction:"row",spacing:2,children:[t.jsx(s,{sx:{minWidth:180},children:t.jsxs(i,{children:[t.jsx(e,{variant:"overline",color:"text.secondary",children:"총 방문자"}),t.jsx(e,{variant:"h4",sx:{fontWeight:700},children:"12,543"}),t.jsx(e,{variant:"caption",color:"success.main",children:"+12.5% 지난 주 대비"})]})}),t.jsx(s,{sx:{minWidth:180},children:t.jsxs(i,{children:[t.jsx(e,{variant:"overline",color:"text.secondary",children:"신규 가입"}),t.jsx(e,{variant:"h4",sx:{fontWeight:700},children:"847"}),t.jsx(e,{variant:"caption",color:"error.main",children:"-3.2% 지난 주 대비"})]})}),t.jsx(s,{sx:{minWidth:180},children:t.jsxs(i,{children:[t.jsx(e,{variant:"overline",color:"text.secondary",children:"전환율"}),t.jsx(e,{variant:"h4",sx:{fontWeight:700},children:"4.8%"}),t.jsx(e,{variant:"caption",color:"success.main",children:"+0.8% 지난 주 대비"})]})})]})},k={render:()=>t.jsx(c,{sx:{width:800},children:t.jsx(X,{container:!0,spacing:3,children:[1,2,3,4,5,6].map(r=>t.jsx(X,{size:{xs:12,sm:6,md:4},children:t.jsxs(s,{children:[t.jsx(H,{component:"img",height:"120",image:`https://picsum.photos/seed/grid${r}/300/120`,alt:`이미지 ${r}`}),t.jsxs(i,{children:[t.jsxs(e,{variant:"subtitle1",sx:{fontWeight:600},children:["카드 제목 ",r]}),t.jsx(e,{variant:"body2",color:"text.secondary",children:"카드 설명 텍스트입니다."})]})]})},r))})})};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    elevation: 1,
    variant: 'elevation'
  },
  render: args => <Card sx={{
    maxWidth: 345
  }} elevation={args.elevation} variant={args.variant}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          카드 제목
        </Typography>
        <Typography variant="body2" color="text.secondary">
          카드는 관련된 콘텐츠를 그룹화하여 표시하는 컴포넌트입니다.
          다양한 정보를 구조화된 형태로 보여줄 수 있습니다.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">더 보기</Button>
        <Button size="small">공유</Button>
      </CardActions>
    </Card>
}`,...B.parameters?.docs?.source},description:{story:"기본 카드",...B.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 345
  }}>
      <CardMedia component="img" height="140" image="https://picsum.photos/seed/card1/345/140" alt="카드 이미지" />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          이미지 카드
        </Typography>
        <Typography variant="body2" color="text.secondary">
          CardMedia 컴포넌트를 사용하여 이미지를 표시할 수 있습니다.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          자세히 보기
        </Button>
      </CardActions>
    </Card>
}`,...W.parameters?.docs?.source},description:{story:"이미지가 있는 카드",...W.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 345
  }}>
      <CardHeader avatar={<Avatar sx={{
      bgcolor: 'primary.main'
    }}>
            K
          </Avatar>} action={<IconButton>
            <Box component="span" sx={{
        fontSize: 20
      }}>⋮</Box>
          </IconButton>} title="김철수" subheader="2024년 1월 15일" />
      <CardMedia component="img" height="194" image="https://picsum.photos/seed/card2/345/194" alt="게시물 이미지" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          오늘 멋진 경험을 했습니다. 새로운 프로젝트를 시작하게 되어 정말 기쁩니다.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Box component="span" sx={{
          fontSize: 20
        }}>♡</Box>
        </IconButton>
        <IconButton>
          <Box component="span" sx={{
          fontSize: 20
        }}>💬</Box>
        </IconButton>
        <IconButton>
          <Box component="span" sx={{
          fontSize: 20
        }}>↗</Box>
        </IconButton>
      </CardActions>
    </Card>
}`,...M.parameters?.docs?.source},description:{story:"헤더가 있는 카드",...M.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="outlined" sx={{
    maxWidth: 345
  }}>
      <CardContent>
        <Typography variant="overline" color="text.secondary">
          OUTLINED
        </Typography>
        <Typography variant="h5" component="div" sx={{
        mb: 1.5
      }}>
          Outlined 카드
        </Typography>
        <Typography variant="body2" color="text.secondary">
          variant="outlined"를 사용하면 테두리만 있는 카드를 만들 수 있습니다.
          그림자 대신 보더로 영역을 구분합니다.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">확인</Button>
      </CardActions>
    </Card>
}`,...A.parameters?.docs?.source},description:{story:"Outlined 카드",...A.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      {[0, 1, 2, 3, 4].map(elevation => <Card key={elevation} elevation={elevation} sx={{
      width: 120,
      height: 80
    }}>
          <CardContent>
            <Typography variant="caption" color="text.secondary">
              elevation
            </Typography>
            <Typography variant="h6">{elevation}</Typography>
          </CardContent>
        </Card>)}
    </Stack>
}`,...z.parameters?.docs?.source},description:{story:"Elevation 비교",...z.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 280
  }}>
      <CardMedia component="img" height="200" image="https://picsum.photos/seed/product1/280/200" alt="상품 이미지" />
      <CardContent>
        <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        mb: 1
      }}>
          <Typography variant="subtitle1" sx={{
          fontWeight: 600
        }}>
            프리미엄 무선 이어폰
          </Typography>
          <Chip label="NEW" size="small" color="primary" />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{
        mb: 2
      }}>
          고품질 사운드와 편안한 착용감
        </Typography>
        <Box sx={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 1
      }}>
          <Typography variant="h6" color="primary" sx={{
          fontWeight: 700
        }}>
            ₩89,000
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{
          textDecoration: 'line-through'
        }}>
            ₩120,000
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="contained" fullWidth>
          장바구니 담기
        </Button>
      </CardActions>
    </Card>
}`,...w.parameters?.docs?.source},description:{story:"상품 카드",...w.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 400
  }}>
      <CardMedia component="img" height="180" image="https://picsum.photos/seed/blog1/400/180" alt="블로그 썸네일" />
      <CardContent>
        <Stack direction="row" spacing={1} sx={{
        mb: 1
      }}>
          <Chip label="React" size="small" variant="outlined" />
          <Chip label="TypeScript" size="small" variant="outlined" />
        </Stack>
        <Typography variant="h6" gutterBottom sx={{
        fontWeight: 600
      }}>
          React 19의 새로운 기능 살펴보기
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
        mb: 2
      }}>
          React 19에서 추가된 새로운 기능들과 성능 개선 사항에 대해 알아봅니다.
          Actions, use(), 그리고 새로운 훅들...
        </Typography>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
          <Avatar sx={{
          width: 32,
          height: 32,
          bgcolor: 'secondary.main'
        }}>D</Avatar>
          <Box>
            <Typography variant="caption" sx={{
            fontWeight: 500
          }}>
              개발자 김
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block">
              2024.01.15 · 5분 읽기
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
}`,...I.parameters?.docs?.source},description:{story:"블로그 포스트 카드",...I.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Card sx={{
    maxWidth: 300,
    textAlign: 'center'
  }}>
      <Box sx={{
      pt: 3
    }}>
        <Avatar sx={{
        width: 80,
        height: 80,
        mx: 'auto',
        bgcolor: 'primary.main',
        fontSize: '2rem'
      }}>
          JS
        </Avatar>
      </Box>
      <CardContent>
        <Typography variant="h6" sx={{
        fontWeight: 600
      }}>
          정수민
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Frontend Developer
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" sx={{
        mt: 2
      }}>
          <Chip label="React" size="small" />
          <Chip label="TypeScript" size="small" />
          <Chip label="MUI" size="small" />
        </Stack>
      </CardContent>
      <CardActions sx={{
      justifyContent: 'center',
      pb: 2
    }}>
        <Button variant="outlined" size="small">
          프로필 보기
        </Button>
        <Button variant="contained" size="small">
          팔로우
        </Button>
      </CardActions>
    </Card>
}`,...P.parameters?.docs?.source},description:{story:"프로필 카드",...P.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      <Card sx={{
      minWidth: 180
    }}>
        <CardContent>
          <Typography variant="overline" color="text.secondary">
            총 방문자
          </Typography>
          <Typography variant="h4" sx={{
          fontWeight: 700
        }}>
            12,543
          </Typography>
          <Typography variant="caption" color="success.main">
            +12.5% 지난 주 대비
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{
      minWidth: 180
    }}>
        <CardContent>
          <Typography variant="overline" color="text.secondary">
            신규 가입
          </Typography>
          <Typography variant="h4" sx={{
          fontWeight: 700
        }}>
            847
          </Typography>
          <Typography variant="caption" color="error.main">
            -3.2% 지난 주 대비
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{
      minWidth: 180
    }}>
        <CardContent>
          <Typography variant="overline" color="text.secondary">
            전환율
          </Typography>
          <Typography variant="h4" sx={{
          fontWeight: 700
        }}>
            4.8%
          </Typography>
          <Typography variant="caption" color="success.main">
            +0.8% 지난 주 대비
          </Typography>
        </CardContent>
      </Card>
    </Stack>
}`,...R.parameters?.docs?.source},description:{story:"통계 카드",...R.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 800
  }}>
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6].map(item => <Grid size={{
        xs: 12,
        sm: 6,
        md: 4
      }} key={item}>
            <Card>
              <CardMedia component="img" height="120" image={\`https://picsum.photos/seed/grid\${item}/300/120\`} alt={\`이미지 \${item}\`} />
              <CardContent>
                <Typography variant="subtitle1" sx={{
              fontWeight: 600
            }}>
                  카드 제목 {item}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  카드 설명 텍스트입니다.
                </Typography>
              </CardContent>
            </Card>
          </Grid>)}
      </Grid>
    </Box>
}`,...k.parameters?.docs?.source},description:{story:"카드 그리드",...k.parameters?.docs?.description}}};const qt=["Default","WithMedia","WithHeader","Outlined","Elevations","ProductCard","BlogPostCard","ProfileCard","StatCard","CardGrid"];export{I as BlogPostCard,k as CardGrid,B as Default,z as Elevations,A as Outlined,w as ProductCard,P as ProfileCard,R as StatCard,M as WithHeader,W as WithMedia,qt as __namedExportsOrder,Vt as default};
