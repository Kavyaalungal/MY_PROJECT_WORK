import{r as n,j as s}from"./index-BXx8luc_.js";import{A as ae,Q as qt,B as Fe,a as ke}from"./ReactToastify-C7wwpaJ_.js";import{C as Ut}from"./CCard-D-Y3fOok.js";import{C as Zt}from"./CCardHeader-CuBEVR94.js";import{B as Qt,F as Xt,a as R,C as P}from"./FormGroup-CwBSYm1Z.js";import{C as oe}from"./CButton-vTXBZAWw.js";import{C as Jt,G as o,T as we,M as c}from"./MenuItem-BOJOPpjJ.js";import{P as es,T as d,F as De,I as pt,S as ct}from"./TextField-DuK3Q-WV.js";import"./DefaultLayout-BGGq_p-o.js";import"./icon-logo-BhSL7PO9.js";const gs=()=>{const[de,ie]=n.useState(""),[ue,It]=n.useState(""),[ts,xt]=n.useState(""),[he,vt]=n.useState(""),[ss,ft]=n.useState(null),[Oe,Ke]=n.useState(""),[Ge,$e]=n.useState(""),[f,me]=n.useState(""),[z,pe]=n.useState(""),[N,A]=n.useState(""),[L,W]=n.useState(""),[E,F]=n.useState(""),[k,w]=n.useState(""),[D,ce]=n.useState(""),[ls,_t]=n.useState(""),[Ie,gt]=n.useState(""),[_,xe]=n.useState(""),[g,ve]=n.useState(""),[y,fe]=n.useState(""),[O,_e]=n.useState(""),[K,ge]=n.useState(""),[C,S]=n.useState(""),[b,G]=n.useState(""),[$,ye]=n.useState(""),[Y,Se]=n.useState(""),[Ce,j]=n.useState(""),[I,be]=n.useState(""),[V,je]=n.useState(""),[H,Me]=n.useState(""),[q,M]=n.useState(""),[U,B]=n.useState(""),[u,Be]=n.useState({personally:!1,courier:!1,phone:!1,email:!1,sms:!1}),[Te,Ye]=n.useState(""),[ns,yt]=n.useState({urgentwork:!1}),[Z,Re]=n.useState(""),[t,Ve]=n.useState(null),[He,Pe]=n.useState(null),[qe,Q]=n.useState(""),[St,Ct]=n.useState(!1),[Ue,Ze]=n.useState(!0),[Qe,Xe]=n.useState(!0),[Je,et]=n.useState(!0),[X,ze]=n.useState(""),[Ne,Ae]=n.useState(""),[J,Le]=n.useState(""),[We,Ee]=n.useState(""),[tt,ee]=n.useState([]),[st,te]=n.useState([]),[lt,se]=n.useState([]),[nt,le]=n.useState([]),[rs,bt]=n.useState(null),[rt,jt]=n.useState(null),[at,Mt]=n.useState(null),[ot,Bt]=n.useState(null),[as,dt]=n.useState(""),[os,it]=n.useState(""),[ds,ut]=n.useState(""),[is,ht]=n.useState(""),[ne,m]=n.useState({Inv_DrId:(t==null?void 0:t.Inv_DrId)||0,Inv_CltnID:(t==null?void 0:t.Inv_CltnID)||0,Inv_CollModeId:(t==null?void 0:t.Inv_CollModeId)||0,Inv_BrId:(t==null?void 0:t.Inv_BrId)||0});n.useEffect(()=>{he!==null&&ft(he)},[he]),n.useEffect(()=>{Ct(f!==((t==null?void 0:t.Inv_Tittle)||"")||z!==((t==null?void 0:t.Inv_name)||"")||N!==((t==null?void 0:t.Inv_ageDD)||"")||L!==((t==null?void 0:t.Inv_ageMM)||"")||E!==((t==null?void 0:t.Inv_ageYY)||"")||k!==((t==null?void 0:t.Inv_Gender)||"")||D!==((t==null?void 0:t.Inv_Dob)||"")||g!==((t==null?void 0:t.Inv_phno)||"")||y!==((t==null?void 0:t.Inv_Mob)||"")||_!==((t==null?void 0:t.Inv_Email)||"")||O!==((t==null?void 0:t.Inv_Nationality)||"")||b!==((t==null?void 0:t.Inv_OutDr)||"")||$!==((t==null?void 0:t.Inv_Passport)||"")||Y!==((t==null?void 0:t.Inv_SRFno)||"")||I!==((t==null?void 0:t.Inv_Aadhaar)||"")||C!==((t==null?void 0:t.Inv_RefBy)||"")||Ce!==((t==null?void 0:t.Branch)||"")||U!==((t==null?void 0:t.Inv_CollBy)||"")||q!==((t==null?void 0:t.Inv_CollMode)||"")||V!==((t==null?void 0:t.Inv_Ward)||"")||H!==((t==null?void 0:t.Inv_RsltNO)||"")||X!==((t==null?void 0:t.SmplDate)||"")||Ne!==((t==null?void 0:t.Inv_SmplDate)||"")||J!==((t==null?void 0:t.RepTime)||"")||We!==((t==null?void 0:t.Inv_RepTime)||"")||Z!==((t==null?void 0:t.Inv_Comment)||"")||Ie!==((t==null?void 0:t.Inv_WardId)||"")||u.personally!==((t==null?void 0:t.Inv_RepThrPersonal)||!1)||u.courier!==((t==null?void 0:t.Inv_RepThrCourier)||!1)||u.phone!==((t==null?void 0:t.Inv_RepThrPhone)||!1)||u.sms!==((t==null?void 0:t.Inv_RepThrSms)||!1)||u.email!==((t==null?void 0:t.Inv_RepThrEmail)||!1)||K!==((t==null?void 0:t.Inv_Address)||"")||Oe!==((t==null?void 0:t.Inv_Date)||"")||Ge!==((t==null?void 0:t.Inv_time)||"")||ue!==((t==null?void 0:t.Inv_No)||""))},[f,z,N,L,E,k,D,g,y,_,O,K,b,$,Y,V,H,I,C,Ce,U,q,J,Z,u,Oe,Ge,ue,X,Ie,We,Ne,t]),n.useEffect(()=>{w({Mr:"M",Mrs:"F",Ms:"F",Miss:"F"}[f]||"")},[f]);const Tt=l=>{const e=l.target.value;be(e),/^\d{12}$/.test(e)?Q(""):Q("Aadhar number must be 12 digits")},Rt=()=>{/^\d{12}$/.test(I)||(Q("Aadhar number must be 12 digits"),Fe.error("Aadhar number must be 12 digits"))},Pt=l=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l),mt=l=>/^[0-9]{10}$/.test(l),zt=async()=>{try{const e=(await ke.get("http://172.16.16.10:8082/api/EditInvoice",{params:{LabNo:de,YearId:2425,BranchId:2}})).data.invoiceDtls;Ve(e);const r=e.Inv_RefBy||"";S(r),ee(r?[{AhMst_pName:r}]:[]);const a=e.Inv_CollBy||"";B(a),te(a?[{AhMst_pName:a}]:[]);const i=e.Inv_CollMode||"";M(i),le(i?[{Mstr_Desc:i}]:[]);const h=e.Branch||"";j(h),se(h?[{BrMst_Name:h}]:[]),m({Inv_DrId:(e==null?void 0:e.Inv_DrId)||0,Inv_CltnID:(e==null?void 0:e.Inv_CltnID)||0,Inv_CollModeId:(e==null?void 0:e.Inv_CollModeId)||0,Inv_BrId:(e==null?void 0:e.Inv_BrId)||0}),It((e==null?void 0:e.Inv_No)||""),me(["","Mr","Mrs","Ms","Miss"].includes(e.Inv_Tittle)?e.Inv_Tittle:""),pe(e.Inv_name||""),A(e.Inv_ageDD!==null&&e.Inv_ageDD!==void 0?e.Inv_ageDD:""),W(e.Inv_ageMM||""),F(e.Inv_ageYY||""),ce(e.Inv_Dob||""),w(["","M","F","O"].includes(e.Inv_Gender)?e.Inv_Gender:""),xe(e.Inv_Email||""),ve(e.Inv_phno||""),fe(e.Inv_Mob||""),_e(e.Inv_Nationality||""),ge(e.Inv_Address||""),Re(e.Inv_Comment||""),G(e.Inv_OutDr||""),Se(e.Inv_SRFno!==null&&e.Inv_SRFno!==void 0?e.Inv_SRFno:""),S(e.Inv_RefBy||""),ee([e.Inv_RefBy]),j(e.Branch||""),M(e.Inv_CollMode||""),gt(e.Inv_WardId||""),se([e.Branch]),B(e.Inv_CollBy||""),te([e.Inv_CollBy]),le([e.Inv_CollMode]),ye(e.Inv_Passport||""),be(e.Inv_Aadhaar||""),Me(e.Inv_RsltNO||""),je(e.Inv_Ward||""),Be({personally:e.Inv_RepThrPersonal||!1,courier:e.Inv_RepThrCourier||!1,phone:e.Inv_RepThrPhone||!1,email:e.Inv_RepThrEmail||!1,sms:e.Inv_RepThrSms||!1}),ze(e.SmplDate||""),Le(e.RepTime||""),Ee(e.Inv_RepTime||""),Ke(e.Inv_Date||""),$e(e.Inv_time||""),Ae(e.Inv_SmplDate),Pe("")}catch(l){console.log(l.message),Pe(l.message)}},Nt=l=>{const e=l.target.value;ze(e),new Date().toISOString().split("T")[0];const r=`${e}:00.000Z`;Ae(r)},At=l=>{const e=l.target.value;Le(e),new Date().toISOString().split("T")[0];const r=`${e}:00.000Z`;Ee(r)};n.useEffect(()=>{if(t){const l=t.Inv_RepTime||"",e=t.Inv_SmplDate||"";Le(l),ze(e);const r=e.slice(11,16),a=l.slice(11,16);Ee(a+":00.000Z"),Ae(r+":00.000z")}},[t]);const Lt=l=>{let[e,r]=l.split(":");const a=r.slice(0,2),i=r.slice(3).toUpperCase();return e=parseInt(e,10),i==="PM"&&e<12?e+=12:i==="AM"&&e===12&&(e=0),`${e.toString().padStart(2,"0")}:${a}`},Wt=(l,e)=>`${l}T${e}`;n.useEffect(()=>{if(t){const l=Lt(t.Inv_time),e=Wt(t.Inv_Date.slice(0,10),l);Ye(e)}},[t]);const Et=l=>{const e=l.target.value;Ye(e)},Ft=l=>{let[e,r]=l.split(":").map(Number);const a=e>=12?"PM":"AM";return e>12&&(e-=12),e===0&&(e=12),`${e}:${r.toString().padStart(2,"0")} ${a}`},kt=()=>{if(console.log("Aadhar state:",I),!I||!/^\d{12}$/.test(I)){Q("Aadhar number must be 12 digits");return}if(_&&!Pt(_)){Ze(!1);return}if(g&&!mt(g)){Xe(!1);return}if(y&&!mt(y)){et(!1);return}const l={...t,Inv_No:ue,Inv_Tittle:f,Inv_name:z,Inv_ageDD:N,Inv_ageMM:L,Inv_ageYY:E,Inv_Gender:k,Inv_Dob:D,Inv_Email:_,Inv_phno:g,Inv_Mob:y,Inv_Nationality:O,Inv_Address:K,Inv_Aadhaar:I,Inv_OutDr:b,Inv_Passport:$,Inv_RsltNO:H,Inv_SRFno:Y,Inv_Ward:V,Inv_CollBy:U,Inv_CollMode:q,Inv_RefBy:C,Inv_DrId:ne.Inv_DrId,Inv_CltnID:ne.Inv_CltnID,Inv_CollModeId:ne.Inv_CollModeId,Inv_BrId:ne.Inv_BrId,Inv_WardId:Ie||null,SmplDate:X,Inv_SmplDate:Ne,RepTime:J,Inv_RepTime:We,Inv_RepThrPersonal:u.personally,Inv_RepThrCourier:u.courier,Inv_RepThrPhone:u.phone,Inv_RepThrEmail:u.email,Inv_RepThrSms:u.sms,Inv_Comment:Z,Inv_Date:Te.slice(0,10),Inv_time:Ft(Te.slice(11,16))};console.log("Payload to be sent to API:",l),ke.post("http://172.16.16.10:8082/api/EditInvSave",l).then(e=>{console.log("Data saved successfully: ",e.data),Fe.success("Data updated successfully!")}).catch(e=>{console.error("Error saving data:",e),Fe.error("Error saving data.")})},wt=l=>{if(l){const e=new Date(l),r=new Date;let a=r.getFullYear()-e.getFullYear(),i=r.getMonth()-e.getMonth(),h=r.getDate()-e.getDate();(i<0||i===0&&r.getDate()<e.getDate())&&(a--,i+=12),h<0&&(h=new Date(r.getFullYear(),r.getMonth(),0).getDate()-e.getDate()+r.getDate(),i--),F(a.toString()),W(i.toString()),A(h.toString()),_t(a.toString())}},Dt=async(l,e)=>{try{return(await ke.get("http://172.16.16.10:8082/api/SearchMaster",{params:{SrchItem:l,SrchVal:e}})).data}catch(r){throw new Error(r.response.data.message||"Failed to fetch search results")}},re=async(l,e,r,a)=>{try{const i=await Dt(l,e);switch(l){case"RefBy":i.refByDetails.sort((h,p)=>{const x=h.AhMst_pName.trim().toLowerCase(),v=p.AhMst_pName.trim().toLowerCase();return x.localeCompare(v)}),r(i.refByDetails),a(null);break;case"CollBy":i.collByDetails.sort((h,p)=>{const x=h.AhMst_pName.trim().toLowerCase(),v=p.AhMst_pName.trim().toLowerCase();return x.localeCompare(v)}),r(i.collByDetails),a(null);break;case"Branch":i.brnchDetails.sort((h,p)=>{const x=h.BrMst_Name.trim().toLowerCase(),v=p.BrMst_Name.trim().toLowerCase();return x.localeCompare(v)}),r(i.brnchDetails),console.log(i.brnchDetails),a(null);break;case"CollMode":i.mastrDetails.sort((h,p)=>{const x=h.Mstr_Desc.trim().toLowerCase(),v=p.Mstr_Desc.trim().toLowerCase();return x.localeCompare(v)}),r(i.mastrDetails),console.log(i.mastrDetails),a(null);break;default:break}}catch(i){a(i.message)}},Ot=(l,e)=>{if(e){const r=tt.find(a=>a.AhMst_pName===e);r&&(dt(r.AhMst_Key),S(e),m(a=>({...a,Inv_DrId:r.AhMst_Key})),G(""))}else dt(""),S(""),m(r=>({...r,Inv_DrId:0}))},Kt=l=>{G(l.target.value),S("")},Gt=(l,e)=>{if(e){const r=st.find(a=>a.AhMst_pName===e);r&&(it(r.AhMst_Key),B(e),m(a=>({...a,Inv_CltnID:r.AhMst_Key})))}else it(""),B(""),m(r=>({...r,Inv_CltnID:0}))},$t=(l,e)=>{if(e){const r=lt.find(a=>a.BrMst_Name===e);r&&(ut(r.BrMst_Key),j(e),m(a=>({...a,Inv_BrId:r.BrMst_Key})))}else ut(""),j(""),m(r=>({...r,Inv_BrId:0}))},Yt=(l,e)=>{if(e){const r=nt.find(a=>a.Mstr_Desc===e);r&&(ht(r.Mstr_Key),M(e),m(a=>({...a,Inv_CollModeId:r.Mstr_Key})))}else ht(""),M(""),m(r=>({...r,Inv_CollModeId:0}))},T=l=>{const{name:e,checked:r}=l.target;Be(a=>({...a,[e]:r}))},Vt=()=>{ie(""),xt(""),vt(""),Ve(null),Pe(null),Ke(""),$e(""),me(""),pe(""),A(""),W(""),F(""),w(""),ce(""),ve(""),fe(""),xe(""),_e(""),ge(""),S(""),G(""),ye(""),Se(""),j(""),be(""),je(""),Me(""),M(""),B(""),Be({personally:!1,courier:!1,email:!1,sms:!1,phone:!1}),yt({urgentwork:!1}),Re("")},Ht=()=>{Vt()};return s.jsx(s.Fragment,{children:s.jsxs(Ut,{className:"mb-4",children:[s.jsxs(Zt,{children:[s.jsx("strong",{style:{fontSize:"2rem",color:"#523885",fontWeight:"bold"},children:"EDIT INVOICE"}),s.jsxs(Qt,{sx:{display:"flex",justifyContent:"flex-end",gap:"16px"},children:[s.jsx(oe,{color:"secondary",onClick:Ht,children:"NEW"}),s.jsx(oe,{color:"primary",onClick:kt,disabled:!St,children:"SAVE"}),s.jsx(oe,{color:"secondary",children:"EXIT"})]})]}),s.jsxs("div",{style:{minHeight:"100vh",padding:"20px"},children:[s.jsx(Jt,{component:"main",maxWidth:"md",children:s.jsxs(es,{elevation:3,style:{padding:"16px",borderRadius:"15px"},children:[s.jsxs(o,{container:!0,spacing:2,children:[s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(d,{id:"labno",label:"Lab No",variant:"outlined",size:"small",fullWidth:!0,value:de,onChange:l=>ie(l.target.value),InputLabelProps:{style:{fontSize:"16px"}},style:{marginBottom:"10px"}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(oe,{color:"primary",onClick:zt,style:{marginBottom:"5px"},children:"SEARCH"})})]}),s.jsxs(o,{container:!0,spacing:2,children:[He&&s.jsx(we,{variant:"body2",color:"error",children:He}),t&&s.jsxs(s.Fragment,{children:[s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(d,{id:"labno",label:"Lab No",variant:"outlined",size:"small",fullWidth:!0,value:de,onChange:l=>ie(l.target.value),InputLabelProps:{style:{fontSize:"16px"}},style:{marginTop:"10px"}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(d,{id:"invDateTime",label:"Date",variant:"outlined",size:"small",fullWidth:!0,type:"datetime-local",value:Te,onChange:Et,InputLabelProps:{shrink:!0},style:{marginTop:"10px"}})}),s.jsx(o,{item:!0,xs:12,sm:2,children:s.jsxs(De,{fullWidth:!0,variant:"outlined",sx:{width:"100%",height:"100%"},children:[s.jsx(pt,{sx:{fontSize:"1rem",color:"rgba(0, 0, 0, 0.6)",marginTop:"-1px"},children:"Prefix"}),s.jsxs(ct,{name:"prefix",value:f,onChange:l=>me(l.target.value),label:"Prefix",sx:{width:"100%",height:"75%"},children:[s.jsx(c,{value:"",children:s.jsx("em",{children:"None"})}),s.jsx(c,{value:"Mr",children:"Mr"}),s.jsx(c,{value:"Mrs",children:"Mrs"}),s.jsx(c,{value:"Ms",children:"Ms"}),s.jsx(c,{value:"Miss",children:"Miss"})]})]})}),s.jsx(o,{item:!0,xs:12,sm:10,children:s.jsx(d,{id:"name",label:"Name",variant:"outlined",size:"small",fullWidth:!0,value:z,onChange:l=>pe(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:1,children:s.jsx(we,{variant:"body1",gutterBottom:!0,sx:{fontWeight:"bold",color:"rgba(0, 0, 0, 0.7)",fontSize:"16px",marginTop:"8px",textAlign:"left"},children:"Age"})}),s.jsxs(o,{item:!0,container:!0,xs:12,sm:7,spacing:1,children:[s.jsx(o,{item:!0,xs:3,children:s.jsx(d,{id:"dd",label:"Day",variant:"outlined",size:"small",fullWidth:!0,value:N,onChange:l=>A(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:3,children:s.jsx(d,{id:"mm",label:"Month",variant:"outlined",size:"small",fullWidth:!0,value:L,onChange:l=>W(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:3,children:s.jsx(d,{id:"yyyy",label:"Year",variant:"outlined",size:"small",fullWidth:!0,value:E,onChange:l=>F(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:3,children:s.jsxs(De,{variant:"outlined",size:"small",fullWidth:!0,children:[s.jsx(pt,{id:"genderLabel",sx:{fontSize:"1rem",color:"rgba(0, 0, 0, 0.6)",marginTop:"-1px"},children:"Gender"}),s.jsxs(ct,{labelId:"genderLabel",id:"gender",value:k,onChange:l=>w(l.target.value),label:"Gender",children:[s.jsx(c,{value:"",children:s.jsx("em",{children:"None"})}),s.jsx(c,{value:"M",children:"Male"}),s.jsx(c,{value:"F",children:"Female"}),s.jsx(c,{value:"O",children:"Other"})]})]})})]}),s.jsx(o,{item:!0,xs:12,sm:4,children:s.jsx(d,{id:"dob",label:"Date of Birth",type:"date",variant:"outlined",size:"small",fullWidth:!0,value:D,onChange:l=>{ce(l.target.value),wt(l.target.value)},InputLabelProps:{shrink:!0,style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:4,children:s.jsx(d,{id:"phone1",label:"Phone1",variant:"outlined",size:"small",fullWidth:!0,value:g,onChange:l=>{ve(l.target.value),Xe(!0)},InputLabelProps:{style:{fontSize:"16px"}},error:!Qe,helperText:Qe?"":"Invalid Phone number"})}),s.jsx(o,{item:!0,xs:12,sm:4,children:s.jsx(d,{id:"phone2",label:"Phone2",variant:"outlined",size:"small",fullWidth:!0,value:y,onChange:l=>{fe(l.target.value),et(!0)},InputLabelProps:{style:{fontSize:"16px"}},error:!Je,helperText:Je?"":"Invalid Phone number"})}),s.jsx(o,{item:!0,xs:12,sm:4,children:s.jsx(d,{id:"email",label:"Email",variant:"outlined",size:"small",fullWidth:!0,value:_,onChange:l=>{xe(l.target.value),Ze(!0)},InputLabelProps:{style:{fontSize:"16px"}},error:!Ue,helperText:Ue?"":"Invalid email address"})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(d,{id:"nationality",label:"Nationality",variant:"outlined",size:"small",fullWidth:!0,value:O,onChange:l=>_e(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(d,{id:"address",label:"Address",variant:"outlined",size:"small",fullWidth:!0,value:K,onChange:l=>ge(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(ae,{freeSolo:!0,options:tt.map(l=>l?l.AhMst_pName:""),value:C,onInputChange:(l,e)=>re("RefBy",e,ee,bt),onChange:Ot,renderInput:l=>s.jsx(d,{...l,id:"refBy",label:"Ref By",variant:"outlined",size:"small",fullWidth:!0,disabled:!!b,InputLabelProps:{style:{fontSize:"14px"}}})})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(d,{id:"outDr",label:"Out Dr",variant:"outlined",size:"small",fullWidth:!0,value:b,onChange:Kt,disabled:!!C,InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(d,{id:"passport",label:"Passport",variant:"outlined",size:"small",fullWidth:!0,value:$,onChange:l=>ye(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(d,{id:"srfno",label:"SRF No.",variant:"outlined",size:"small",fullWidth:!0,value:Y,onChange:l=>Se(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(ae,{freeSolo:!0,options:lt.map(l=>l?l.BrMst_Name:""),value:Ce,onInputChange:(l,e)=>re("Branch",e,se,Mt),onChange:$t,renderInput:l=>s.jsx(d,{...l,id:"branch",label:"Branch",variant:"outlined",size:"small",fullWidth:!0,error:!!at,helperText:at,InputLabelProps:{style:{fontSize:"16px"}}})})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(d,{id:"aadhar",label:"Aadhar",variant:"outlined",size:"small",fullWidth:!0,value:I,onChange:Tt,onBlur:Rt,InputLabelProps:{style:{fontSize:"16px"}},error:!!qe,helperText:qe})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(d,{id:"wardno",label:"Ward No",variant:"outlined",size:"small",fullWidth:!0,value:V,onChange:l=>je(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(d,{id:"ipopno",label:"IP/OP NO",variant:"outlined",size:"small",fullWidth:!0,value:H,onChange:l=>Me(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(ae,{freeSolo:!0,options:nt.filter(l=>l).map(l=>l.Mstr_Desc||""),value:q,onInputChange:(l,e)=>re("CollMode",e,le,Bt),onChange:Yt,renderInput:l=>s.jsx(d,{...l,id:"collMode",label:"Coll Mode",variant:"outlined",size:"small",fullWidth:!0,error:!!ot,helperText:ot,InputLabelProps:{style:{fontSize:"16px"}}})})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(ae,{freeSolo:!0,options:st.map(l=>l?l.AhMst_pName:""),value:U,onInputChange:(l,e)=>re("CollBy",e,te,jt),onChange:Gt,renderInput:l=>s.jsx(d,{...l,id:"collBy",label:"Coll By",variant:"outlined",size:"small",fullWidth:!0,error:!!rt,helperText:rt,InputLabelProps:{style:{fontSize:"16px"}}})})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(d,{id:"sampleOn",label:"Sample On",type:"datetime-local",variant:"outlined",size:"small",fullWidth:!0,value:X,onChange:Nt,InputLabelProps:{shrink:!0,style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(d,{id:"reportTime",label:"Report Time",type:"datetime-local",variant:"outlined",size:"small",fullWidth:!0,value:J,onChange:At,InputLabelProps:{shrink:!0,style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,children:s.jsxs(De,{component:"fieldset",children:[s.jsx(we,{variant:"body1",gutterBottom:!0,children:"Report Requested Through"}),s.jsxs(Xt,{row:!0,children:[s.jsx(R,{control:s.jsx(P,{checked:u.personally,onChange:T,name:"personally"}),label:"Personally"}),s.jsx(R,{control:s.jsx(P,{checked:u.courier,onChange:T,name:"courier"}),label:"Courier"}),s.jsx(R,{control:s.jsx(P,{checked:u.phone,onChange:T,name:"phone"}),label:"phone"}),s.jsx(R,{control:s.jsx(P,{checked:u.email,onChange:T,name:"email"}),label:"Email"}),s.jsx(R,{control:s.jsx(P,{checked:u.sms,onChange:T,name:"sms"}),label:"SMS"})]})]})}),s.jsx(o,{item:!0,xs:12,sm:12,children:s.jsx(d,{id:"notes",label:"Notes",variant:"outlined",size:"small",fullWidth:!0,value:Z,onChange:l=>Re(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})})]})]})]})}),s.jsx(qt,{})]})]})})};export{gs as default};
