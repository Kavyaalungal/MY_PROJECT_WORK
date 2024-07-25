import{r as n,j as e}from"./index-C_WHkTZ7.js";import{a as r,b as P,U as u,a6 as i,a3 as a,a4 as h,a5 as m}from"./TextField-b2Ght7tv.js";import{C as W,a as D,b as T,c as M,d as k,B as j,G as l,T as x,M as t,F as N,e as E,f as F}from"./DefaultLayout-DTxvZ7bO.js";import{T as B,a as O,b as A,c as f,d as s,e as G}from"./TableRow-DIhBa3OT.js";const U=()=>{const[g,z]=n.useState(!1),[y,S]=n.useState(!1);n.useState(!1);const[o,w]=n.useState(""),[c,R]=n.useState(!1),[p,v]=n.useState(""),[I,b]=n.useState(""),L=d=>{R(d.target.checked)};n.useEffect(()=>{b({Mr:"M",Mrs:"F",Ms:"F",Miss:"F"}[p]||"")},[p]);const C=[{id:1,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4",col5:"Data 5",col6:"Data 6",col7:"Data 7"},{id:2,col1:"Data 8",col2:"Data 9",col3:"Data 10",col4:"Data 11",col5:"Data 12",col6:"Data 13",col7:"Data 14"},{id:3,col1:"Data 15",col2:"Data 16",col3:"Data 17",col4:"Data 18",col5:"Data 19",col6:"Data 20",col7:"Data 21"},{id:4,col1:"Data 22",col2:"Data 23",col3:"Data 24",col4:"Data 25",col5:"Data 26",col6:"Data 27",col7:"Data 28"}];return e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"primary",onClick:()=>z(!g),children:"PENDING COLLECTION"}),e.jsx(r,{color:"primary",onClick:()=>S(!y),children:"Large modal"}),e.jsxs(W,{size:"xl",visible:g,onClose:()=>z(!1),"aria-labelledby":"OptionalSizesExample1",children:[e.jsx(D,{children:e.jsx(T,{id:"OptionalSizesExample1",children:"PENDING COLLECTION"})}),e.jsx(M,{children:e.jsx(P,{className:"mb-4",children:e.jsxs(k,{children:[e.jsx(j,{sx:{padding:2},children:e.jsxs(l,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(l,{item:!0,xs:12,md:8,children:e.jsx(x,{variant:"h6",sx:{margin:0,fontSize:"24px",fontWeight:"bold",color:" #599eb4 "},children:"CANCEL INVOICE"})}),e.jsx(l,{item:!0,xs:12,md:4,children:e.jsxs(j,{sx:{display:"flex",justifyContent:{xs:"center",md:"flex-end"},gap:"16px"},children:[e.jsx(r,{color:"primary",style:{width:"100%",maxWidth:{xs:"100%",sm:"auto"}},children:"NEW"}),e.jsx(r,{color:"primary",style:{width:"100%",maxWidth:{xs:"100%",sm:"auto"}},children:"SAVE"}),e.jsx(r,{color:"primary",style:{width:"100%",maxWidth:{xs:"100%",sm:"auto"}},children:"EXIT"})]})})]})}),e.jsx("hr",{}),e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(u,{elevation:3,style:{padding:"16px",borderRadius:"15px"},children:e.jsxs(l,{container:!0,spacing:2,children:[o&&e.jsx(l,{item:!0,xs:12,children:e.jsx(x,{variant:"body2",color:"error",children:o})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"labno",label:"Lab No",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"dateTime",label:"Date/Time",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:3,children:e.jsxs(a,{fullWidth:!0,variant:"outlined",sx:{width:"100%",height:"100%"},children:[e.jsx(h,{sx:{fontSize:"1.2rem",color:"rgba(0, 0, 0, 0.6)",marginTop:"-6px"},children:"Prefix"}),e.jsxs(m,{name:"prefix",value:p,onChange:d=>v(d.target.value),label:"Prefix",sx:{width:"100%",height:"75%"},children:[e.jsx(t,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(t,{value:"Mr",children:"Mr"}),e.jsx(t,{value:"Mrs",children:"Mrs"}),e.jsx(t,{value:"Ms",children:"Ms"}),e.jsx(t,{value:"Miss",children:"Miss"})]})]})}),e.jsx(l,{item:!0,xs:12,sm:9,children:e.jsx(i,{id:"name",label:"Name",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:2,children:e.jsx(x,{variant:"body1",gutterBottom:!0,sx:{fontWeight:"bold",color:"rgba(0, 0, 0, 0.7)",fontSize:"16px",marginTop:"8px",textAlign:"left"},children:"Age"})}),e.jsx(l,{item:!0,xs:2,children:e.jsx(i,{id:"dd",label:"Day",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:2,children:e.jsx(i,{id:"mm",label:"Month",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:2,children:e.jsx(i,{id:"yyyy",label:"Year",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:4,children:e.jsxs(a,{fullWidth:!0,variant:"outlined",sx:{width:"100%",height:"100%"},children:[e.jsx(h,{sx:{fontSize:"1.2rem",color:"rgba(0, 0, 0, 0.6)",marginTop:"-6px"},children:"Gender"}),e.jsxs(m,{name:"gender",value:I,onChange:d=>b(d.target.value),label:"Gender",sx:{width:"100%",height:"75%"},children:[e.jsx(t,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(t,{value:"M",children:"Male"}),e.jsx(t,{value:"F",children:"Female"}),e.jsx(t,{value:"O",children:"Other"})]})]})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"phone1",label:"Phone1",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"email",label:"Email",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"paymode",label:"Pay Mode",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"cardno",label:"Card No",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(i,{id:"bank",label:"Bank",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"invamount",label:"Inv.Amount",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"curbalance",label:"Cur.Balance",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"collamount",label:"Coll.Amount",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"colldatetime",label:"Coll.DateTime",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:12,children:e.jsx(i,{id:"notes",label:"Notes",variant:"outlined",size:"small",fullWidth:!0,multiline:!0,rows:2,InputLabelProps:{style:{fontSize:"18px"}}})})]})})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(u,{elevation:3,style:{padding:"16px",borderRadius:"15px",height:"100%"},children:e.jsxs(l,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(l,{item:!0,xs:12,sm:4,children:e.jsx(i,{id:"dateFrom",label:"From",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:4,children:e.jsx(i,{id:"dateTo",label:"To",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsxs(l,{item:!0,xs:12,sm:4,container:!0,alignItems:"center",justifyContent:"flex-start",spacing:1,children:[e.jsx(l,{item:!0,children:e.jsx(r,{color:"primary",children:"REFRESH"})}),e.jsx(l,{item:!0,children:e.jsx(r,{color:"secondary",children:"PRINT"})})]}),e.jsx(l,{container:!0,spacing:2,children:e.jsx(l,{item:!0,xs:12,children:e.jsx(a,{component:"fieldset",fullWidth:!0,children:e.jsxs(N,{row:!0,children:[e.jsx(E,{label:"Corporate",labelPlacement:"start",control:e.jsx(F,{checked:c,onChange:L,name:"corporate"})}),c&&e.jsx(l,{item:!0,children:e.jsx(i,{label:"Input",variant:"outlined",size:"small",InputLabelProps:{style:{fontSize:"18px"}},style:{marginTop:"8px",marginLeft:"6px"}})})]})})})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(B,{style:{maxHeight:"calc(100vh - 400px)",overflowY:"auto"},children:e.jsxs(O,{stickyHeader:!0,"aria-label":"sticky table",children:[e.jsx(A,{children:e.jsxs(f,{children:[e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"SlNo"}),e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Lab"}),e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Date"}),e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Name"}),e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Balance"}),e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Corporate"}),e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"User"}),e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"View"})]})}),e.jsx(G,{children:C.map(d=>e.jsxs(f,{children:[e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.id}),e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.col1}),e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.col2}),e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.col3}),e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.col4}),e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.col5}),e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.col6}),e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.col7})]},d.id))})]})})})]})})})]})]})})})]}),e.jsxs(W,{size:"lg",visible:y,onClose:()=>S(!1),"aria-labelledby":"OptionalSizesExample2",children:[e.jsx(D,{children:e.jsx(T,{id:"OptionalSizesExample2",children:"Large modal"})}),e.jsxs(M,{children:[" ",e.jsx(P,{className:"mb-4",children:e.jsxs(k,{children:[e.jsx(j,{sx:{padding:2},children:e.jsxs(l,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(l,{item:!0,xs:12,md:8,children:e.jsx(x,{variant:"h6",sx:{margin:0,fontSize:"24px",fontWeight:"bold",color:" #599eb4 "},children:"CANCEL INVOICE"})}),e.jsx(l,{item:!0,xs:12,md:4,children:e.jsxs(j,{sx:{display:"flex",justifyContent:{xs:"center",md:"flex-end"},gap:"16px"},children:[e.jsx(r,{color:"primary",style:{width:"100%",maxWidth:{xs:"100%",sm:"auto"}},children:"NEW"}),e.jsx(r,{color:"primary",style:{width:"100%",maxWidth:{xs:"100%",sm:"auto"}},children:"SAVE"}),e.jsx(r,{color:"primary",style:{width:"100%",maxWidth:{xs:"100%",sm:"auto"}},children:"EXIT"})]})})]})}),e.jsx("hr",{}),e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(u,{elevation:3,style:{padding:"16px",borderRadius:"15px"},children:e.jsxs(l,{container:!0,spacing:2,children:[o&&e.jsx(l,{item:!0,xs:12,children:e.jsx(x,{variant:"body2",color:"error",children:o})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"labno",label:"Lab No",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"dateTime",label:"Date/Time",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:3,children:e.jsxs(a,{fullWidth:!0,variant:"outlined",sx:{width:"100%",height:"100%"},children:[e.jsx(h,{sx:{fontSize:"1.2rem",color:"rgba(0, 0, 0, 0.6)",marginTop:"-6px"},children:"Prefix"}),e.jsxs(m,{name:"prefix",value:p,onChange:d=>v(d.target.value),label:"Prefix",sx:{width:"100%",height:"75%"},children:[e.jsx(t,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(t,{value:"Mr",children:"Mr"}),e.jsx(t,{value:"Mrs",children:"Mrs"}),e.jsx(t,{value:"Ms",children:"Ms"}),e.jsx(t,{value:"Miss",children:"Miss"})]})]})}),e.jsx(l,{item:!0,xs:12,sm:9,children:e.jsx(i,{id:"name",label:"Name",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:2,children:e.jsx(x,{variant:"body1",gutterBottom:!0,sx:{fontWeight:"bold",color:"rgba(0, 0, 0, 0.7)",fontSize:"16px",marginTop:"8px",textAlign:"left"},children:"Age"})}),e.jsx(l,{item:!0,xs:2,children:e.jsx(i,{id:"dd",label:"Day",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:2,children:e.jsx(i,{id:"mm",label:"Month",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:2,children:e.jsx(i,{id:"yyyy",label:"Year",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:4,children:e.jsxs(a,{fullWidth:!0,variant:"outlined",sx:{width:"100%",height:"100%"},children:[e.jsx(h,{sx:{fontSize:"1.2rem",color:"rgba(0, 0, 0, 0.6)",marginTop:"-6px"},children:"Gender"}),e.jsxs(m,{name:"gender",value:I,onChange:d=>b(d.target.value),label:"Gender",sx:{width:"100%",height:"75%"},children:[e.jsx(t,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(t,{value:"M",children:"Male"}),e.jsx(t,{value:"F",children:"Female"}),e.jsx(t,{value:"O",children:"Other"})]})]})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"phone1",label:"Phone1",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"email",label:"Email",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"paymode",label:"Pay Mode",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"cardno",label:"Card No",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(i,{id:"bank",label:"Bank",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"invamount",label:"Inv.Amount",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"curbalance",label:"Cur.Balance",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"collamount",label:"Coll.Amount",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"colldatetime",label:"Coll.DateTime",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:12,children:e.jsx(i,{id:"notes",label:"Notes",variant:"outlined",size:"small",fullWidth:!0,multiline:!0,rows:2,InputLabelProps:{style:{fontSize:"18px"}}})})]})})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsx(u,{elevation:3,style:{padding:"16px",borderRadius:"15px",height:"100%"},children:e.jsxs(l,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(l,{item:!0,xs:12,sm:4,children:e.jsx(i,{id:"dateFrom",label:"From",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsx(l,{item:!0,xs:12,sm:4,children:e.jsx(i,{id:"dateTo",label:"To",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"18px"}}})}),e.jsxs(l,{item:!0,xs:12,sm:4,container:!0,alignItems:"center",justifyContent:"flex-start",spacing:1,children:[e.jsx(l,{item:!0,children:e.jsx(r,{color:"primary",children:"REFRESH"})}),e.jsx(l,{item:!0,children:e.jsx(r,{color:"secondary",children:"PRINT"})})]}),e.jsx(l,{container:!0,spacing:2,children:e.jsx(l,{item:!0,xs:12,children:e.jsx(a,{component:"fieldset",fullWidth:!0,children:e.jsxs(N,{row:!0,children:[e.jsx(E,{label:"Corporate",labelPlacement:"start",control:e.jsx(F,{checked:c,onChange:L,name:"corporate"})}),c&&e.jsx(l,{item:!0,children:e.jsx(i,{label:"Input",variant:"outlined",size:"small",InputLabelProps:{style:{fontSize:"18px"}},style:{marginTop:"8px",marginLeft:"6px"}})})]})})})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(B,{style:{maxHeight:"calc(100vh - 400px)",overflowY:"auto"},children:e.jsxs(O,{stickyHeader:!0,"aria-label":"sticky table",children:[e.jsx(A,{children:e.jsxs(f,{children:[e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"SlNo"}),e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Lab"}),e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Date"}),e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Name"}),e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Balance"}),e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Corporate"}),e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"User"}),e.jsx(s,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"View"})]})}),e.jsx(G,{children:C.map(d=>e.jsxs(f,{children:[e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.id}),e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.col1}),e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.col2}),e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.col3}),e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.col4}),e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.col5}),e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.col6}),e.jsx(s,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:d.col7})]},d.id))})]})})})]})})})]})]})})]})]})]})};export{U as default};