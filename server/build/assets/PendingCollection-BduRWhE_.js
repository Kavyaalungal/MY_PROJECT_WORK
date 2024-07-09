import{r as x,j as e}from"./index-kFrCmAcx.js";import{C as Q}from"./CCard-BQMvX3eY.js";import{C as Z}from"./CCardHeader-4DYf0xau.js";import{C as ee,G as o,T as F,M as f}from"./MenuItem-6vBS58r1.js";import{B as te,F as se,a as ae,C as oe}from"./FormGroup-Dy13Y4E6.js";import{C as P}from"./CButton-axxuFct_.js";import{g as y,a as v,s as C,_ as h,u as z,b as T,c as S,d as M,e as j,l as le,f as N,h as re,P as A,T as p,F as L,I as _,S as E}from"./TextField-DUc_A6Pv.js";import"./icon-logo-_VccAdZT.js";const q=x.createContext();function ie(t){return y("MuiTable",t)}v("MuiTable",["root","stickyHeader"]);const ne=["className","component","padding","size","stickyHeader"],de=t=>{const{classes:s,stickyHeader:a}=t;return M({root:["root",a&&"stickyHeader"]},ie,s)},ce=C("table",{name:"MuiTable",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:a}=t;return[s.root,a.stickyHeader&&s.stickyHeader]}})(({theme:t,ownerState:s})=>h({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":h({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},s.stickyHeader&&{borderCollapse:"separate"})),O="table",pe=x.forwardRef(function(s,a){const l=z({props:s,name:"MuiTable"}),{className:d,component:r=O,padding:c="normal",size:n="medium",stickyHeader:m=!1}=l,b=T(l,ne),i=h({},l,{component:r,padding:c,size:n,stickyHeader:m}),k=de(i),$=x.useMemo(()=>({padding:c,size:n,stickyHeader:m}),[c,n,m]);return e.jsx(q.Provider,{value:$,children:e.jsx(ce,h({as:r,role:r===O?null:"table",ref:a,className:S(k.root,d),ownerState:i},b))})}),H=x.createContext();function xe(t){return y("MuiTableBody",t)}v("MuiTableBody",["root"]);const ue=["className","component"],me=t=>{const{classes:s}=t;return M({root:["root"]},xe,s)},he=C("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(t,s)=>s.root})({display:"table-row-group"}),be={variant:"body"},G="tbody",fe=x.forwardRef(function(s,a){const l=z({props:s,name:"MuiTableBody"}),{className:d,component:r=G}=l,c=T(l,ue),n=h({},l,{component:r}),m=me(n);return e.jsx(H.Provider,{value:be,children:e.jsx(he,h({className:S(m.root,d),as:r,ref:a,role:r===G?null:"rowgroup",ownerState:n},c))})});function ge(t){return y("MuiTableCell",t)}const je=v("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),ye=["align","className","component","padding","scope","size","sortDirection","variant"],ve=t=>{const{classes:s,variant:a,align:l,padding:d,size:r,stickyHeader:c}=t,n={root:["root",a,c&&"stickyHeader",l!=="inherit"&&`align${j(l)}`,d!=="normal"&&`padding${j(d)}`,`size${j(r)}`]};return M(n,ge,s)},Ce=C("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:a}=t;return[s.root,s[a.variant],s[`size${j(a.size)}`],a.padding!=="normal"&&s[`padding${j(a.padding)}`],a.align!=="inherit"&&s[`align${j(a.align)}`],a.stickyHeader&&s.stickyHeader]}})(({theme:t,ownerState:s})=>h({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?`1px solid ${t.vars.palette.TableCell.border}`:`1px solid
    ${t.palette.mode==="light"?le(N(t.palette.divider,1),.88):re(N(t.palette.divider,1),.68)}`,textAlign:"left",padding:16},s.variant==="head"&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},s.variant==="body"&&{color:(t.vars||t).palette.text.primary},s.variant==="footer"&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},s.size==="small"&&{padding:"6px 16px",[`&.${je.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},s.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},s.padding==="none"&&{padding:0},s.align==="left"&&{textAlign:"left"},s.align==="center"&&{textAlign:"center"},s.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},s.align==="justify"&&{textAlign:"justify"},s.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})),u=x.forwardRef(function(s,a){const l=z({props:s,name:"MuiTableCell"}),{align:d="inherit",className:r,component:c,padding:n,scope:m,size:b,sortDirection:i,variant:k}=l,$=T(l,ye),g=x.useContext(q),D=x.useContext(H),W=D&&D.variant==="head";let R;c?R=c:R=W?"th":"td";let I=m;R==="td"?I=void 0:!I&&W&&(I="col");const w=k||D&&D.variant,B=h({},l,{align:d,component:R,padding:n||(g&&g.padding?g.padding:"normal"),size:b||(g&&g.size?g.size:"medium"),sortDirection:i,stickyHeader:w==="head"&&g&&g.stickyHeader,variant:w}),K=ve(B);let U=null;return i&&(U=i==="asc"?"ascending":"descending"),e.jsx(Ce,h({as:R,ref:a,className:S(K.root,r),"aria-sort":U,scope:I,ownerState:B},$))});function ze(t){return y("MuiTableContainer",t)}v("MuiTableContainer",["root"]);const Te=["className","component"],Se=t=>{const{classes:s}=t;return M({root:["root"]},ze,s)},Me=C("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,s)=>s.root})({width:"100%",overflowX:"auto"}),ke=x.forwardRef(function(s,a){const l=z({props:s,name:"MuiTableContainer"}),{className:d,component:r="div"}=l,c=T(l,Te),n=h({},l,{component:r}),m=Se(n);return e.jsx(Me,h({ref:a,as:r,className:S(m.root,d),ownerState:n},c))});function Re(t){return y("MuiTableHead",t)}v("MuiTableHead",["root"]);const Pe=["className","component"],De=t=>{const{classes:s}=t;return M({root:["root"]},Re,s)},Ie=C("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(t,s)=>s.root})({display:"table-header-group"}),Ne={variant:"head"},V="thead",He=x.forwardRef(function(s,a){const l=z({props:s,name:"MuiTableHead"}),{className:d,component:r=V}=l,c=T(l,Pe),n=h({},l,{component:r}),m=De(n);return e.jsx(H.Provider,{value:Ne,children:e.jsx(Ie,h({as:r,className:S(m.root,d),ref:a,role:r===V?null:"rowgroup",ownerState:n},c))})});function $e(t){return y("MuiTableRow",t)}const X=v("MuiTableRow",["root","selected","hover","head","footer"]),Le=["className","component","hover","selected"],We=t=>{const{classes:s,selected:a,hover:l,head:d,footer:r}=t;return M({root:["root",a&&"selected",l&&"hover",d&&"head",r&&"footer"]},$e,s)},we=C("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:a}=t;return[s.root,a.head&&s.head,a.footer&&s.footer]}})(({theme:t})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${X.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${X.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:N(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:N(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}})),Y="tr",J=x.forwardRef(function(s,a){const l=z({props:s,name:"MuiTableRow"}),{className:d,component:r=Y,hover:c=!1,selected:n=!1}=l,m=T(l,Le),b=x.useContext(H),i=h({},l,{component:r,hover:c,selected:n,head:b&&b.variant==="head",footer:b&&b.variant==="footer"}),k=We(i);return e.jsx(we,h({as:r,ref:a,className:S(k.root,d),role:r===Y?null:"row",ownerState:i},m))}),Ve=()=>{const[t,s]=x.useState(""),[a,l]=x.useState(!1),[d,r]=x.useState(""),[c,n]=x.useState(""),m=i=>{l(i.target.checked)};x.useEffect(()=>{n({Mr:"M",Mrs:"F",Ms:"F",Miss:"F"}[d]||"")},[d]);const b=[{id:1,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4",col5:"Data 5",col6:"Data 6",col7:"Data 7"},{id:2,col1:"Data 8",col2:"Data 9",col3:"Data 10",col4:"Data 11",col5:"Data 12",col6:"Data 13",col7:"Data 14"},{id:3,col1:"Data 15",col2:"Data 16",col3:"Data 17",col4:"Data 18",col5:"Data 19",col6:"Data 20",col7:"Data 21"},{id:4,col1:"Data 22",col2:"Data 23",col3:"Data 24",col4:"Data 25",col5:"Data 26",col6:"Data 27",col7:"Data 28"}];return e.jsxs(Q,{className:"mb-4",children:[e.jsx(Z,{children:e.jsx("strong",{style:{fontSize:"2rem",color:"#523885",fontWeight:"bold"},children:"PENDING COLLECTION"})}),e.jsx("div",{style:{minHeight:"100vh",padding:"20px"},children:e.jsxs(ee,{maxWidth:"lg",children:[e.jsx(o,{container:!0,alignItems:"center",spacing:2,style:{marginBottom:"20px"},children:e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsxs(te,{sx:{display:"flex",justifyContent:"flex-start",gap:"16px",flexWrap:"wrap"},children:[e.jsx(P,{color:"primary",children:"PRINT"}),e.jsx(P,{color:"secondary",children:"SAVE"}),e.jsx(P,{color:"primary",children:"EXIT"})]})})}),e.jsxs(o,{container:!0,spacing:2,children:[e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(A,{elevation:3,style:{padding:"16px",borderRadius:"15px"},children:e.jsxs(o,{container:!0,spacing:2,children:[t&&e.jsx(o,{item:!0,xs:12,children:e.jsx(F,{variant:"body2",color:"error",children:t})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(p,{id:"labno",label:"Lab No",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(p,{id:"dateTime",label:"Date/Time",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:12,sm:3,children:e.jsxs(L,{fullWidth:!0,variant:"outlined",sx:{width:"100%",height:"100%"},children:[e.jsx(_,{sx:{fontSize:"1.2rem",color:"rgba(0, 0, 0, 0.6)",marginTop:"-6px"},children:"Prefix"}),e.jsxs(E,{name:"prefix",value:d,onChange:i=>r(i.target.value),label:"Prefix",sx:{width:"100%",height:"75%"},children:[e.jsx(f,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(f,{value:"Mr",children:"Mr"}),e.jsx(f,{value:"Mrs",children:"Mrs"}),e.jsx(f,{value:"Ms",children:"Ms"}),e.jsx(f,{value:"Miss",children:"Miss"})]})]})}),e.jsx(o,{item:!0,xs:12,sm:9,children:e.jsx(p,{id:"name",label:"Name",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:12,sm:2,children:e.jsx(F,{variant:"body1",gutterBottom:!0,sx:{fontWeight:"bold",color:"rgba(0, 0, 0, 0.7)",fontSize:"16px",marginTop:"8px",textAlign:"left"},children:"Age"})}),e.jsx(o,{item:!0,xs:2,children:e.jsx(p,{id:"dd",label:"Day",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:2,children:e.jsx(p,{id:"mm",label:"Month",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:2,children:e.jsx(p,{id:"yyyy",label:"Year",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsxs(L,{fullWidth:!0,variant:"outlined",sx:{width:"100%",height:"100%"},children:[e.jsx(_,{sx:{fontSize:"1.2rem",color:"rgba(0, 0, 0, 0.6)",marginTop:"-6px"},children:"Gender"}),e.jsxs(E,{name:"gender",value:c,onChange:i=>n(i.target.value),label:"Gender",sx:{width:"100%",height:"75%"},children:[e.jsx(f,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(f,{value:"M",children:"Male"}),e.jsx(f,{value:"F",children:"Female"}),e.jsx(f,{value:"O",children:"Other"})]})]})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(p,{id:"phone1",label:"Phone1",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(p,{id:"email",label:"Email",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(p,{id:"paymode",label:"Pay Mode",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(p,{id:"cardno",label:"Card No",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:12,children:e.jsx(p,{id:"bank",label:"Bank",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(p,{id:"invamount",label:"Inv.Amount",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(p,{id:"curbalance",label:"Cur.Balance",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(p,{id:"collamount",label:"Coll.Amount",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(p,{id:"colldatetime",label:"Coll.DateTime",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:12,sm:12,children:e.jsx(p,{id:"notes",label:"Notes",variant:"outlined",size:"small",fullWidth:!0,multiline:!0,rows:2,InputLabelProps:{style:{fontSize:"18px"}}})})]})})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(A,{elevation:3,style:{padding:"16px",borderRadius:"15px",height:"100%"},children:e.jsxs(o,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(p,{id:"dateFrom",label:"From",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(o,{item:!0,xs:12,sm:4,children:e.jsx(p,{id:"dateTo",label:"To",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsxs(o,{item:!0,xs:12,sm:4,container:!0,alignItems:"center",justifyContent:"flex-start",spacing:1,children:[e.jsx(o,{item:!0,children:e.jsx(P,{color:"primary",children:"REFRESH"})}),e.jsx(o,{item:!0,children:e.jsx(P,{color:"secondary",children:"PRINT"})})]}),e.jsx(o,{container:!0,spacing:2,children:e.jsx(o,{item:!0,xs:12,children:e.jsx(L,{component:"fieldset",fullWidth:!0,children:e.jsxs(se,{row:!0,children:[e.jsx(ae,{label:"Corporate",labelPlacement:"start",control:e.jsx(oe,{checked:a,onChange:m,name:"corporate"})}),a&&e.jsx(o,{item:!0,children:e.jsx(p,{label:"Input",variant:"outlined",size:"small",InputLabelProps:{style:{fontSize:"18px"}},style:{marginTop:"8px",marginLeft:"6px"}})})]})})})}),e.jsx(o,{item:!0,xs:12,children:e.jsx(ke,{style:{maxHeight:"calc(100vh - 400px)",overflowY:"auto"},children:e.jsxs(pe,{stickyHeader:!0,"aria-label":"sticky table",children:[e.jsx(He,{children:e.jsxs(J,{children:[e.jsx(u,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"SlNo"}),e.jsx(u,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Lab"}),e.jsx(u,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Date"}),e.jsx(u,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Name"}),e.jsx(u,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Balance"}),e.jsx(u,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Corporate"}),e.jsx(u,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"User"}),e.jsx(u,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"View"})]})}),e.jsx(fe,{children:b.map(i=>e.jsxs(J,{children:[e.jsx(u,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:i.id}),e.jsx(u,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:i.col1}),e.jsx(u,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:i.col2}),e.jsx(u,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:i.col3}),e.jsx(u,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:i.col4}),e.jsx(u,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:i.col5}),e.jsx(u,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:i.col6}),e.jsx(u,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:i.col7})]},i.id))})]})})})]})})})]})]})})]})};export{Ve as default};
