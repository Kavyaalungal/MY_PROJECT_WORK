import{r as n,j as s}from"./index-xgTitHTd.js";import{A as re,Q as qt,B as Ee,a as Fe}from"./ReactToastify-BKhybkjg.js";import{C as Ut}from"./CCard-YahajSUz.js";import{C as Zt}from"./CCardHeader-C9fe41NW.js";import{B as Qt,F as Xt,a as B,C as T}from"./FormGroup-DYNXHCrH.js";import{C as ae}from"./CButton-k_dDLWZG.js";import{C as Jt,G as o,T as ke,M as c}from"./MenuItem-o_PAA3lI.js";import{P as es,T as i,F as we,I as ct,S as It}from"./TextField-BD6bapqu.js";import"./DefaultLayout-Dbf0WSVx.js";import"./icon-logo-Dx6WCeXd.js";const _s=()=>{const[oe,ie]=n.useState(""),[de,xt]=n.useState(""),[ts,vt]=n.useState(""),[ue,ft]=n.useState(""),[ss,_t]=n.useState(null),[De,Oe]=n.useState(""),[Ke,Ge]=n.useState(""),[f,he]=n.useState(""),[R,me]=n.useState(""),[P,z]=n.useState(""),[N,A]=n.useState(""),[L,W]=n.useState(""),[E,F]=n.useState(""),[k,pe]=n.useState(""),[ls,gt]=n.useState(""),[ce,yt]=n.useState(""),[_,Ie]=n.useState(""),[g,xe]=n.useState(""),[y,ve]=n.useState(""),[w,fe]=n.useState(""),[D,_e]=n.useState(""),[O,S]=n.useState(""),[K,ge]=n.useState(""),[G,ye]=n.useState(""),[$,Se]=n.useState(""),[Ce,C]=n.useState(""),[I,be]=n.useState(""),[Y,je]=n.useState(""),[V,Me]=n.useState(""),[H,b]=n.useState(""),[q,j]=n.useState(""),[u,Be]=n.useState({personally:!1,courier:!1,phone:!1,email:!1,sms:!1}),[Te,$e]=n.useState(""),[ns,St]=n.useState({urgentwork:!1}),[U,Re]=n.useState(""),[t,Ye]=n.useState(null),[Ve,He]=n.useState(null),[qe,Z]=n.useState(""),[Ct,bt]=n.useState(!1),[Ue,Ze]=n.useState(!0),[Qe,Xe]=n.useState(!0),[Je,et]=n.useState(!0),[Q,Pe]=n.useState(""),[ze,Ne]=n.useState(""),[X,Ae]=n.useState(""),[Le,We]=n.useState(""),[tt,J]=n.useState([]),[st,ee]=n.useState([]),[lt,te]=n.useState([]),[nt,se]=n.useState([]),[rt,jt]=n.useState(null),[at,Mt]=n.useState(null),[ot,Bt]=n.useState(null),[it,Tt]=n.useState(null),[rs,dt]=n.useState(""),[as,ut]=n.useState(""),[os,ht]=n.useState(""),[is,mt]=n.useState(""),[le,m]=n.useState({Inv_DrId:(t==null?void 0:t.Inv_DrId)||0,Inv_CltnID:(t==null?void 0:t.Inv_CltnID)||0,Inv_CollModeId:(t==null?void 0:t.Inv_CollModeId)||0,Inv_BrId:(t==null?void 0:t.Inv_BrId)||0});n.useEffect(()=>{ue!==null&&_t(ue)},[ue]),n.useEffect(()=>{bt(f!==((t==null?void 0:t.Inv_Tittle)||"")||R!==((t==null?void 0:t.Inv_name)||"")||P!==((t==null?void 0:t.Inv_ageDD)||"")||N!==((t==null?void 0:t.Inv_ageMM)||"")||L!==((t==null?void 0:t.Inv_ageYY)||"")||E!==((t==null?void 0:t.Inv_Gender)||"")||k!==((t==null?void 0:t.Inv_Dob)||"")||g!==((t==null?void 0:t.Inv_phno)||"")||y!==((t==null?void 0:t.Inv_Mob)||"")||_!==((t==null?void 0:t.Inv_Email)||"")||w!==((t==null?void 0:t.Inv_Nationality)||"")||K!==((t==null?void 0:t.Inv_OutDr)||"")||G!==((t==null?void 0:t.Inv_Passport)||"")||$!==((t==null?void 0:t.Inv_SRFno)||"")||I!==((t==null?void 0:t.Inv_Aadhaar)||"")||O!==((t==null?void 0:t.Inv_RefBy)||"")||Ce!==((t==null?void 0:t.Branch)||"")||q!==((t==null?void 0:t.Inv_CollBy)||"")||H!==((t==null?void 0:t.Inv_CollMode)||"")||Y!==((t==null?void 0:t.Inv_Ward)||"")||V!==((t==null?void 0:t.Inv_RsltNO)||"")||Q!==((t==null?void 0:t.SmplDate)||"")||ze!==((t==null?void 0:t.Inv_SmplDate)||"")||X!==((t==null?void 0:t.RepTime)||"")||Le!==((t==null?void 0:t.Inv_RepTime)||"")||U!==((t==null?void 0:t.Inv_Comment)||"")||ce!==((t==null?void 0:t.Inv_WardId)||"")||u.personally!==((t==null?void 0:t.Inv_RepThrPersonal)||!1)||u.courier!==((t==null?void 0:t.Inv_RepThrCourier)||!1)||u.phone!==((t==null?void 0:t.Inv_RepThrPhone)||!1)||u.sms!==((t==null?void 0:t.Inv_RepThrSms)||!1)||u.email!==((t==null?void 0:t.Inv_RepThrEmail)||!1)||D!==((t==null?void 0:t.Inv_Address)||"")||De!==((t==null?void 0:t.Inv_Date)||"")||Ke!==((t==null?void 0:t.Inv_time)||"")||de!==((t==null?void 0:t.Inv_No)||""))},[f,R,P,N,L,E,k,g,y,_,w,D,K,G,$,Y,V,I,O,Ce,q,H,X,U,u,De,Ke,de,Q,ce,Le,ze,t]),n.useEffect(()=>{F({Mr:"M",Mrs:"F",Ms:"F",Miss:"F"}[f]||"")},[f]);const Rt=l=>{const e=l.target.value;be(e),/^\d{12}$/.test(e)?Z(""):Z("Aadhar number must be 12 digits")},Pt=()=>{/^\d{12}$/.test(I)||(Z("Aadhar number must be 12 digits"),Ee.error("Aadhar number must be 12 digits"))},zt=l=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l),pt=l=>/^[0-9]{10}$/.test(l),Nt=async()=>{try{const e=(await Fe.get("http://172.16.16.10:8082/api/EditInvoice",{params:{LabNo:oe,YearId:2425,BranchId:2}})).data.invoiceDtls;Ye(e);const r=e.Inv_RefBy||"";S(r),J(r?[{AhMst_pName:r}]:[]);const a=e.Inv_CollBy||"";j(a),ee(a?[{AhMst_pName:a}]:[]);const d=e.Inv_CollMode||"";b(d),se(d?[{Mstr_Desc:d}]:[]);const h=e.Branch||"";C(h),te(h?[{BrMst_Name:h}]:[]),m({Inv_DrId:(e==null?void 0:e.Inv_DrId)||0,Inv_CltnID:(e==null?void 0:e.Inv_CltnID)||0,Inv_CollModeId:(e==null?void 0:e.Inv_CollModeId)||0,Inv_BrId:(e==null?void 0:e.Inv_BrId)||0}),xt((e==null?void 0:e.Inv_No)||""),he(["","Mr","Mrs","Ms","Miss"].includes(e.Inv_Tittle)?e.Inv_Tittle:""),me(e.Inv_name||""),z(e.Inv_ageDD!==null&&e.Inv_ageDD!==void 0?e.Inv_ageDD:""),A(e.Inv_ageMM||""),W(e.Inv_ageYY||""),pe(e.Inv_Dob||""),F(["","M","F","O"].includes(e.Inv_Gender)?e.Inv_Gender:""),Ie(e.Inv_Email||""),xe(e.Inv_phno||""),ve(e.Inv_Mob||""),fe(e.Inv_Nationality||""),_e(e.Inv_Address||""),Re(e.Inv_Comment||""),ge(e.Inv_OutDr||""),Se(e.Inv_SRFno!==null&&e.Inv_SRFno!==void 0?e.Inv_SRFno:""),S(e.Inv_RefBy||""),J([e.Inv_RefBy]),C(e.Branch||""),b(e.Inv_CollMode||""),yt(e.Inv_WardId||""),te([e.Branch]),j(e.Inv_CollBy||""),ee([e.Inv_CollBy]),se([e.Inv_CollMode]),ye(e.Inv_Passport||""),be(e.Inv_Aadhaar||""),Me(e.Inv_RsltNO||""),je(e.Inv_Ward||""),Be({personally:e.Inv_RepThrPersonal||!1,courier:e.Inv_RepThrCourier||!1,phone:e.Inv_RepThrPhone||!1,email:e.Inv_RepThrEmail||!1,sms:e.Inv_RepThrSms||!1}),Pe(e.SmplDate||""),Ae(e.RepTime||""),We(e.Inv_RepTime||""),Oe(e.Inv_Date||""),Ge(e.Inv_time||""),Ne(e.Inv_SmplDate)}catch(l){He(l.message)}},At=l=>{const e=l.target.value;Pe(e),new Date().toISOString().split("T")[0];const r=`${e}:00.000Z`;Ne(r)},Lt=l=>{const e=l.target.value;Ae(e),new Date().toISOString().split("T")[0];const r=`${e}:00.000Z`;We(r)};n.useEffect(()=>{if(t){const l=t.Inv_RepTime||"",e=t.Inv_SmplDate||"";Ae(l),Pe(e);const r=e.slice(11,16),a=l.slice(11,16);We(a+":00.000Z"),Ne(r+":00.000z")}},[t]);const Wt=l=>{let[e,r]=l.split(":");const a=r.slice(0,2),d=r.slice(3).toUpperCase();return e=parseInt(e,10),d==="PM"&&e<12?e+=12:d==="AM"&&e===12&&(e=0),`${e.toString().padStart(2,"0")}:${a}`},Et=(l,e)=>`${l}T${e}`;n.useEffect(()=>{if(t){const l=Wt(t.Inv_time),e=Et(t.Inv_Date.slice(0,10),l);$e(e)}},[t]);const Ft=l=>{const e=l.target.value;$e(e)},kt=l=>{let[e,r]=l.split(":").map(Number);const a=e>=12?"PM":"AM";return e>12&&(e-=12),e===0&&(e=12),`${e}:${r.toString().padStart(2,"0")} ${a}`},wt=()=>{if(console.log("Aadhar state:",I),!I||!/^\d{12}$/.test(I)){Z("Aadhar number must be 12 digits");return}if(_&&!zt(_)){Ze(!1);return}if(g&&!pt(g)){Xe(!1);return}if(y&&!pt(y)){et(!1);return}const l={...t,Inv_No:de,Inv_Tittle:f,Inv_name:R,Inv_ageDD:P,Inv_ageMM:N,Inv_ageYY:L,Inv_Gender:E,Inv_Dob:k,Inv_Email:_,Inv_phno:g,Inv_Mob:y,Inv_Nationality:w,Inv_Address:D,Inv_Aadhaar:I,Inv_OutDr:K,Inv_Passport:G,Inv_RsltNO:V,Inv_SRFno:$,Inv_Ward:Y,Inv_CollBy:q,Inv_CollMode:H,Inv_RefBy:O,Inv_DrId:le.Inv_DrId,Inv_CltnID:le.Inv_CltnID,Inv_CollModeId:le.Inv_CollModeId,Inv_BrId:le.Inv_BrId,Inv_WardId:ce||null,SmplDate:Q,Inv_SmplDate:ze,RepTime:X,Inv_RepTime:Le,Inv_RepThrPersonal:u.personally,Inv_RepThrCourier:u.courier,Inv_RepThrPhone:u.phone,Inv_RepThrEmail:u.email,Inv_RepThrSms:u.sms,Inv_Comment:U,Inv_Date:Te.slice(0,10),Inv_time:kt(Te.slice(11,16))};console.log("Payload to be sent to API:",l),Fe.post("http://172.16.16.10:8082/api/EditInvSave",l).then(e=>{console.log("Data saved successfully: ",e.data),Ee.success("Data updated successfully!")}).catch(e=>{console.error("Error saving data:",e),Ee.error("Error saving data.")})},Dt=l=>{if(l){const e=new Date(l),r=new Date;let a=r.getFullYear()-e.getFullYear(),d=r.getMonth()-e.getMonth(),h=r.getDate()-e.getDate();(d<0||d===0&&r.getDate()<e.getDate())&&(a--,d+=12),h<0&&(h=new Date(r.getFullYear(),r.getMonth(),0).getDate()-e.getDate()+r.getDate(),d--),W(a.toString()),A(d.toString()),z(h.toString()),gt(a.toString())}},Ot=async(l,e)=>{try{return(await Fe.get("http://172.16.16.10:8082/api/SearchMaster",{params:{SrchItem:l,SrchVal:e}})).data}catch(r){throw new Error(r.response.data.message||"Failed to fetch search results")}},ne=async(l,e,r,a)=>{try{const d=await Ot(l,e);switch(l){case"RefBy":d.refByDetails.sort((h,p)=>{const x=h.AhMst_pName.trim().toLowerCase(),v=p.AhMst_pName.trim().toLowerCase();return x.localeCompare(v)}),r(d.refByDetails),a(null);break;case"CollBy":d.collByDetails.sort((h,p)=>{const x=h.AhMst_pName.trim().toLowerCase(),v=p.AhMst_pName.trim().toLowerCase();return x.localeCompare(v)}),r(d.collByDetails),a(null);break;case"Branch":d.brnchDetails.sort((h,p)=>{const x=h.BrMst_Name.trim().toLowerCase(),v=p.BrMst_Name.trim().toLowerCase();return x.localeCompare(v)}),r(d.brnchDetails),console.log(d.brnchDetails),a(null);break;case"CollMode":d.mastrDetails.sort((h,p)=>{const x=h.Mstr_Desc.trim().toLowerCase(),v=p.Mstr_Desc.trim().toLowerCase();return x.localeCompare(v)}),r(d.mastrDetails),console.log(d.mastrDetails),a(null);break;default:break}}catch(d){a(d.message)}},Kt=(l,e)=>{if(e){const r=tt.find(a=>a.AhMst_pName===e);r&&(dt(r.AhMst_Key),S(e),m(a=>({...a,Inv_DrId:r.AhMst_Key})))}else dt(""),S(""),m(r=>({...r,Inv_DrId:0}))},Gt=(l,e)=>{if(e){const r=st.find(a=>a.AhMst_pName===e);r&&(ut(r.AhMst_Key),j(e),m(a=>({...a,Inv_CltnID:r.AhMst_Key})))}else ut(""),j(""),m(r=>({...r,Inv_CltnID:0}))},$t=(l,e)=>{if(e){const r=lt.find(a=>a.BrMst_Name===e);r&&(ht(r.BrMst_Key),C(e),m(a=>({...a,Inv_BrId:r.BrMst_Key})))}else ht(""),C(""),m(r=>({...r,Inv_BrId:0}))},Yt=(l,e)=>{if(e){const r=nt.find(a=>a.Mstr_Desc===e);r&&(mt(r.Mstr_Key),b(e),m(a=>({...a,Inv_CollModeId:r.Mstr_Key})))}else mt(""),b(""),m(r=>({...r,Inv_CollModeId:0}))},M=l=>{const{name:e,checked:r}=l.target;Be(a=>({...a,[e]:r}))},Vt=()=>{ie(""),vt(""),ft(""),Ye(null),He(null),Oe(""),Ge(""),he(""),me(""),z(""),A(""),W(""),F(""),pe(""),xe(""),ve(""),Ie(""),fe(""),_e(""),S(""),ge(""),ye(""),Se(""),C(""),be(""),je(""),Me(""),b(""),j(""),Be({personally:!1,courier:!1,email:!1,sms:!1,phone:!1}),St({urgentwork:!1}),Re("")},Ht=()=>{Vt()};return s.jsx(s.Fragment,{children:s.jsxs(Ut,{className:"mb-4",children:[s.jsxs(Zt,{children:[s.jsx("strong",{style:{fontSize:"2rem",color:"#523885",fontWeight:"bold"},children:"EDIT INVOICE"}),s.jsxs(Qt,{sx:{display:"flex",justifyContent:"flex-end",gap:"16px"},children:[s.jsx(ae,{color:"secondary",onClick:Ht,children:"NEW"}),s.jsx(ae,{color:"primary",onClick:wt,disabled:!Ct,children:"SAVE"}),s.jsx(ae,{color:"secondary",children:"EXIT"})]})]}),s.jsxs("div",{style:{minHeight:"100vh",padding:"20px"},children:[s.jsx(Jt,{component:"main",maxWidth:"md",children:s.jsxs(es,{elevation:3,style:{padding:"16px",borderRadius:"15px"},children:[s.jsxs(o,{container:!0,spacing:2,children:[s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(i,{id:"labno",label:"Lab No",variant:"outlined",size:"small",fullWidth:!0,value:oe,onChange:l=>ie(l.target.value),InputLabelProps:{style:{fontSize:"16px"}},style:{marginBottom:"10px"}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(ae,{color:"primary",onClick:Nt,style:{marginBottom:"5px"},children:"SEARCH"})})]}),s.jsxs(o,{container:!0,spacing:2,children:[Ve&&s.jsx(ke,{variant:"body2",color:"error",children:Ve}),t&&s.jsxs(s.Fragment,{children:[s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(i,{id:"labno",label:"Lab No",variant:"outlined",size:"small",fullWidth:!0,value:oe,onChange:l=>ie(l.target.value),InputLabelProps:{style:{fontSize:"16px"}},style:{marginTop:"10px"}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(i,{id:"invDateTime",label:"Date",variant:"outlined",size:"small",fullWidth:!0,type:"datetime-local",value:Te,onChange:Ft,InputLabelProps:{shrink:!0},style:{marginTop:"10px"}})}),s.jsx(o,{item:!0,xs:12,sm:2,children:s.jsxs(we,{fullWidth:!0,variant:"outlined",sx:{width:"100%",height:"100%"},children:[s.jsx(ct,{sx:{fontSize:"1rem",color:"rgba(0, 0, 0, 0.6)",marginTop:"-1px"},children:"Prefix"}),s.jsxs(It,{name:"prefix",value:f,onChange:l=>he(l.target.value),label:"Prefix",sx:{width:"100%",height:"75%"},children:[s.jsx(c,{value:"",children:s.jsx("em",{children:"None"})}),s.jsx(c,{value:"Mr",children:"Mr"}),s.jsx(c,{value:"Mrs",children:"Mrs"}),s.jsx(c,{value:"Ms",children:"Ms"}),s.jsx(c,{value:"Miss",children:"Miss"})]})]})}),s.jsx(o,{item:!0,xs:12,sm:10,children:s.jsx(i,{id:"name",label:"Name",variant:"outlined",size:"small",fullWidth:!0,value:R,onChange:l=>me(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:1,children:s.jsx(ke,{variant:"body1",gutterBottom:!0,sx:{fontWeight:"bold",color:"rgba(0, 0, 0, 0.7)",fontSize:"16px",marginTop:"8px",textAlign:"left"},children:"Age"})}),s.jsxs(o,{item:!0,container:!0,xs:12,sm:7,spacing:1,children:[s.jsx(o,{item:!0,xs:3,children:s.jsx(i,{id:"dd",label:"Day",variant:"outlined",size:"small",fullWidth:!0,value:P,onChange:l=>z(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:3,children:s.jsx(i,{id:"mm",label:"Month",variant:"outlined",size:"small",fullWidth:!0,value:N,onChange:l=>A(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:3,children:s.jsx(i,{id:"yyyy",label:"Year",variant:"outlined",size:"small",fullWidth:!0,value:L,onChange:l=>W(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:3,children:s.jsxs(we,{variant:"outlined",size:"small",fullWidth:!0,children:[s.jsx(ct,{id:"genderLabel",sx:{fontSize:"1rem",color:"rgba(0, 0, 0, 0.6)",marginTop:"-1px"},children:"Gender"}),s.jsxs(It,{labelId:"genderLabel",id:"gender",value:E,onChange:l=>F(l.target.value),label:"Gender",children:[s.jsx(c,{value:"",children:s.jsx("em",{children:"None"})}),s.jsx(c,{value:"M",children:"Male"}),s.jsx(c,{value:"F",children:"Female"}),s.jsx(c,{value:"O",children:"Other"})]})]})})]}),s.jsx(o,{item:!0,xs:12,sm:4,children:s.jsx(i,{id:"dob",label:"Date of Birth",type:"date",variant:"outlined",size:"small",fullWidth:!0,value:k,onChange:l=>{pe(l.target.value),Dt(l.target.value)},InputLabelProps:{shrink:!0,style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:4,children:s.jsx(i,{id:"phone1",label:"Phone1",variant:"outlined",size:"small",fullWidth:!0,value:g,onChange:l=>{xe(l.target.value),Xe(!0)},InputLabelProps:{style:{fontSize:"16px"}},error:!Qe,helperText:Qe?"":"Invalid Phone number"})}),s.jsx(o,{item:!0,xs:12,sm:4,children:s.jsx(i,{id:"phone2",label:"Phone2",variant:"outlined",size:"small",fullWidth:!0,value:y,onChange:l=>{ve(l.target.value),et(!0)},InputLabelProps:{style:{fontSize:"16px"}},error:!Je,helperText:Je?"":"Invalid Phone number"})}),s.jsx(o,{item:!0,xs:12,sm:4,children:s.jsx(i,{id:"email",label:"Email",variant:"outlined",size:"small",fullWidth:!0,value:_,onChange:l=>{Ie(l.target.value),Ze(!0)},InputLabelProps:{style:{fontSize:"16px"}},error:!Ue,helperText:Ue?"":"Invalid email address"})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(i,{id:"nationality",label:"Nationality",variant:"outlined",size:"small",fullWidth:!0,value:w,onChange:l=>fe(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(i,{id:"address",label:"Address",variant:"outlined",size:"small",fullWidth:!0,value:D,onChange:l=>_e(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(re,{freeSolo:!0,options:tt.map(l=>l?l.AhMst_pName:""),value:O,onInputChange:(l,e)=>ne("RefBy",e,J,jt),onChange:Kt,renderInput:l=>s.jsx(i,{...l,id:"refBy",label:"Ref By",variant:"outlined",size:"small",fullWidth:!0,error:!!rt,helperText:rt,InputLabelProps:{style:{fontSize:"16px"}}})})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(i,{id:"outdr",label:"Out Dr",variant:"outlined",size:"small",fullWidth:!0,value:K,onChange:l=>ge(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(i,{id:"passport",label:"Passport",variant:"outlined",size:"small",fullWidth:!0,value:G,onChange:l=>ye(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(i,{id:"srfno",label:"SRF No.",variant:"outlined",size:"small",fullWidth:!0,value:$,onChange:l=>Se(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(re,{freeSolo:!0,options:lt.map(l=>l?l.BrMst_Name:""),value:Ce,onInputChange:(l,e)=>ne("Branch",e,te,Bt),onChange:$t,renderInput:l=>s.jsx(i,{...l,id:"branch",label:"Branch",variant:"outlined",size:"small",fullWidth:!0,error:!!ot,helperText:ot,InputLabelProps:{style:{fontSize:"16px"}}})})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(i,{id:"aadhar",label:"Aadhar",variant:"outlined",size:"small",fullWidth:!0,value:I,onChange:Rt,onBlur:Pt,InputLabelProps:{style:{fontSize:"16px"}},error:!!qe,helperText:qe})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(i,{id:"wardno",label:"Ward No",variant:"outlined",size:"small",fullWidth:!0,value:Y,onChange:l=>je(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(i,{id:"ipopno",label:"IP/OP NO",variant:"outlined",size:"small",fullWidth:!0,value:V,onChange:l=>Me(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(re,{freeSolo:!0,options:nt.filter(l=>l).map(l=>l.Mstr_Desc||""),value:H,onInputChange:(l,e)=>ne("CollMode",e,se,Tt),onChange:Yt,renderInput:l=>s.jsx(i,{...l,id:"collMode",label:"Coll Mode",variant:"outlined",size:"small",fullWidth:!0,error:!!it,helperText:it,InputLabelProps:{style:{fontSize:"16px"}}})})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(re,{freeSolo:!0,options:st.map(l=>l?l.AhMst_pName:""),value:q,onInputChange:(l,e)=>ne("CollBy",e,ee,Mt),onChange:Gt,renderInput:l=>s.jsx(i,{...l,id:"collBy",label:"Coll By",variant:"outlined",size:"small",fullWidth:!0,error:!!at,helperText:at,InputLabelProps:{style:{fontSize:"16px"}}})})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(i,{id:"sampleOn",label:"Sample On",type:"datetime-local",variant:"outlined",size:"small",fullWidth:!0,value:Q,onChange:At,InputLabelProps:{shrink:!0,style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,sm:6,children:s.jsx(i,{id:"reportTime",label:"Report Time",type:"datetime-local",variant:"outlined",size:"small",fullWidth:!0,value:X,onChange:Lt,InputLabelProps:{shrink:!0,style:{fontSize:"16px"}}})}),s.jsx(o,{item:!0,xs:12,children:s.jsxs(we,{component:"fieldset",children:[s.jsx(ke,{variant:"body1",gutterBottom:!0,children:"Report Requested Through"}),s.jsxs(Xt,{row:!0,children:[s.jsx(B,{control:s.jsx(T,{checked:u.personally,onChange:M,name:"personally"}),label:"Personally"}),s.jsx(B,{control:s.jsx(T,{checked:u.courier,onChange:M,name:"courier"}),label:"Courier"}),s.jsx(B,{control:s.jsx(T,{checked:u.phone,onChange:M,name:"phone"}),label:"phone"}),s.jsx(B,{control:s.jsx(T,{checked:u.email,onChange:M,name:"email"}),label:"Email"}),s.jsx(B,{control:s.jsx(T,{checked:u.sms,onChange:M,name:"sms"}),label:"SMS"})]})]})}),s.jsx(o,{item:!0,xs:12,sm:12,children:s.jsx(i,{id:"notes",label:"Notes",variant:"outlined",size:"small",fullWidth:!0,value:U,onChange:l=>Re(l.target.value),InputLabelProps:{style:{fontSize:"16px"}}})})]})]})]})}),s.jsx(qt,{})]})]})})};export{_s as default};
