import{r as u,j as e}from"./index-C_WHkTZ7.js";import{d as I,B as a,G as d,T as n,F as y,e as r,f as v,M as t,Q as A}from"./DefaultLayout-DTxvZ7bO.js";import{b as N,a as x,a3 as o,a4 as m,a5 as h,a6 as i}from"./TextField-b2Ght7tv.js";import{R as T,a as p}from"./RadioGroup-Ca_t9i0-.js";import{T as L,a as M,b as P,c as f,d as l,e as E}from"./TableRow-DIhBa3OT.js";const H=()=>{u.useState("Bill View");const[j,b]=u.useState("lab"),g=[{slNo:1,labNo:5749,name:"KRISHNA A S",age:22,gender:"F",date:"26-Jun-2024",collectedAt:"",reference:"N Mohanan BSc MBBS MS",tests:["COMPLETE HAEMOGRAM +","HBsAg","HIV-DUO (Ivth GENERATION T","Anti HCV","HAEMOGLOBIN (HB)"],specimen:"EDTA WHOLE ...",total:1860,pendingAmt:0},{slNo:2,labNo:5748,name:"RABESHNA",age:36,gender:"F",date:"26-Jun-2024",collectedAt:"",reference:"Vineetha S MBBS DGO FMAS",tests:["HAEMOGLOBIN (HB)","ANTI MULLARIAN HORMONE","THYROID STIMULATING HORM..."],specimen:"SERUM",total:1510,pendingAmt:0},{slNo:3,labNo:5747,name:"JAYAN N P",age:57,gender:"M",date:"26-Jun-2024",collectedAt:"",reference:"",tests:["CREATININE"],specimen:"SERUM",total:140,pendingAmt:0},{slNo:4,labNo:5746,name:"JOHN",age:30,gender:"M",date:"26-Jun-2024",collectedAt:"",reference:"",tests:["CREATININE","GLUCOSE PLASMA FASTING"],specimen:"PLASMA(fasti...",total:1500,pendingAmt:0}],S=["Result Issued","On Processing","Time Over","Cancelled Invoice","Half Verified","Time Over Reminder"],c=["#0073e6","#ff9900","#4caf50","#f44336","#9c27b0","#ffc107"];return e.jsx(e.Fragment,{children:e.jsx(N,{className:"mb-4",children:e.jsxs(I,{children:[e.jsx(a,{sx:{padding:2},children:e.jsxs(d,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(d,{item:!0,xs:12,md:8,children:e.jsx(n,{variant:"h6",sx:{margin:0,fontSize:"24px",fontWeight:"bold",color:" #599eb4 "},children:"PATIENT VIEWS"})}),e.jsx(d,{item:!0,xs:12,md:4,children:e.jsxs(a,{sx:{display:"flex",justifyContent:{xs:"center",md:"flex-end"},gap:"16px"},children:[e.jsx(x,{color:"primary",style:{width:"100%",maxWidth:{xs:"100%",sm:"auto"}},children:"NEW"}),e.jsx(x,{color:"primary",style:{width:"100%",maxWidth:{xs:"100%",sm:"auto"}},children:"SAVE"}),e.jsx(x,{color:"primary",style:{width:"100%",maxWidth:{xs:"100%",sm:"auto"}},children:"EXIT"})]})})]})}),e.jsx("hr",{}),e.jsxs(a,{p:2,children:[e.jsx(d,{container:!0,spacing:1,alignItems:"center",children:e.jsxs(d,{item:!0,xs:12,children:[e.jsx(d,{item:!0,xs:12,children:e.jsx(y,{row:!0,style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:S.map((s,z)=>e.jsx(r,{control:e.jsx(v,{sx:{color:c[z%c.length]},size:"small"}),label:s,style:{marginRight:"10px"}},s))})}),e.jsxs(d,{container:!0,spacing:1,alignItems:"center",style:{marginTop:"10px"},children:[e.jsx(d,{item:!0,children:e.jsx(o,{component:"fieldset",children:e.jsxs(T,{row:!0,value:j,onChange:s=>b(s.target.value),children:[e.jsx(r,{value:"lab",control:e.jsx(p,{size:"small"}),label:e.jsx(n,{variant:"body2",children:"Bill View"}),sx:{"& .MuiSvgIcon-root":{fontSize:12}}}),e.jsx(r,{value:"purchase",control:e.jsx(p,{size:"small"}),label:e.jsx(n,{variant:"body2",children:"Result view"}),sx:{"& .MuiSvgIcon-root":{fontSize:12}}}),e.jsx(r,{value:"pharmacy",control:e.jsx(p,{size:"small"}),label:e.jsx(n,{variant:"body2",children:"Track"}),sx:{"& .MuiSvgIcon-root":{fontSize:12}}})]})})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsxs(o,{variant:"outlined",size:"small",fullWidth:!0,children:[e.jsx(m,{id:"genderLabel"}),e.jsxs(h,{labelId:"genderLabel",id:"gender",label:"Gender",children:[e.jsx(t,{value:"M",children:"Male"}),e.jsx(t,{value:"F",children:"Female"}),e.jsx(t,{value:"O",children:"Other"})]})]})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsxs(o,{variant:"outlined",size:"small",fullWidth:!0,children:[e.jsx(m,{id:"genderLabel"}),e.jsxs(h,{labelId:"genderLabel",id:"gender",label:"Gender",children:[e.jsx(t,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(t,{value:"M",children:"Male"}),e.jsx(t,{value:"F",children:"Female"}),e.jsx(t,{value:"O",children:"Other"})]})]})}),e.jsx(d,{item:!0,xs:12,md:2,children:e.jsx(i,{id:"from",label:"FromDate",type:"date",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0,style:{fontSize:"14px"}}})}),e.jsx(d,{item:!0,xs:12,md:2,children:e.jsx(i,{id:"to",label:"ToDate",type:"date",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0,style:{fontSize:"14px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"area",label:"Area",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"corporate",label:"Corporate",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"phoneno",label:"PhoneNo",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"referral",label:"Referral",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"sampleid",label:"Sample Id",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"department",label:"Department",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"ipop",label:"IPOP",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:3,children:e.jsx(i,{id:"specimen",label:"Specimen",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:3,children:e.jsx(i,{id:"email",label:"Email",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"labno",label:"LabNo",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"name",label:"Name",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:2,children:e.jsx(i,{id:"payment",label:"Payment",variant:"outlined",size:"small",fullWidth:!0,InputLbelProps:{style:{fontSize:"16px"}}})}),e.jsx(d,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"tests",label:"Tests",variant:"outlined",size:"small",fullWidth:!0,InputLabelProps:{style:{fontSize:"16px"}}})})]})]})}),e.jsx(d,{item:!0,xs:12,children:e.jsx(L,{style:{maxHeight:"calc(100vh - 400px)",overflowY:"auto"},children:e.jsxs(M,{stickyHeader:!0,"aria-label":"sticky table",sx:{marginTop:"20px"},children:[e.jsx(P,{children:e.jsxs(f,{children:[e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"SlNo"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Lab No"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Name"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Date"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"collected At"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Reference"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Tests"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Specimen"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"Total"}),e.jsx(l,{sx:{border:"1px solid #dddddd",background:"#f2f2f2",fontSize:"12px",padding:"8px"},children:"PendAmt"})]})}),e.jsx(E,{children:g.map(s=>e.jsxs(f,{children:[e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"18px"},children:s.slNo}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.labNo}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.name}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.date}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.collectedAt}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.reference}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.tests}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.specimen}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.total}),e.jsx(l,{sx:{border:"1px solid #dddddd",fontSize:"12px",padding:"8px"},children:s.pendingAmt})]},s.id))})]})})}),e.jsx(A,{})]})]})})})};export{H as default};
