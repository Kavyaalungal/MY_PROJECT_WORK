import{r as m,_ as u,e as d,a as h,c as y,P as e}from"./index-xgTitHTd.js";var x=m.forwardRef(function(a,f){var i=a.children,p=a.className,t=u(a,["children","className"]);return d.createElement("div",h({className:y("card-body",p)},t,{ref:f}),i)});x.propTypes={children:e.node,className:e.string};x.displayName="CCardBody";var b=["xxl","xl","lg","md","sm","xs"],N=m.forwardRef(function(a,f){var i=a.children,p=a.className,t=u(a,["children","className"]),s=[];return b.forEach(function(n){var r=t[n];delete t[n];var o=n==="xs"?"":"-".concat(n);(typeof r=="number"||typeof r=="string")&&s.push("col".concat(o,"-").concat(r)),typeof r=="boolean"&&s.push("col".concat(o)),r&&typeof r=="object"&&((typeof r.span=="number"||typeof r.span=="string")&&s.push("col".concat(o,"-").concat(r.span)),typeof r.span=="boolean"&&s.push("col".concat(o)),(typeof r.order=="number"||typeof r.order=="string")&&s.push("order".concat(o,"-").concat(r.order)),typeof r.offset=="number"&&s.push("offset".concat(o,"-").concat(r.offset)))}),d.createElement("div",h({className:y(s.length>0?s:"col",p)},t,{ref:f}),i)}),g=e.oneOfType([e.bool,e.number,e.string,e.oneOf(["auto"])]),c=e.oneOfType([g,e.shape({span:g,offset:e.oneOfType([e.number,e.string]),order:e.oneOfType([e.oneOf(["first","last"]),e.number,e.string])})]);N.propTypes={children:e.node,className:e.string,xs:c,sm:c,md:c,lg:c,xl:c,xxl:c};N.displayName="CCol";var T=["xxl","xl","lg","md","sm","xs"],v=m.forwardRef(function(a,f){var i=a.children,p=a.className,t=u(a,["children","className"]),s=[];return T.forEach(function(n){var r=t[n];delete t[n];var o=n==="xs"?"":"-".concat(n);typeof r=="object"&&(r.cols&&s.push("row-cols".concat(o,"-").concat(r.cols)),typeof r.gutter=="number"&&s.push("g".concat(o,"-").concat(r.gutter)),typeof r.gutterX=="number"&&s.push("gx".concat(o,"-").concat(r.gutterX)),typeof r.gutterY=="number"&&s.push("gy".concat(o,"-").concat(r.gutterY)))}),d.createElement("div",{className:y("row",s,p),ref:f},i)}),l=e.shape({cols:e.oneOfType([e.oneOf(["auto"]),e.number,e.string]),gutter:e.oneOfType([e.string,e.number]),gutterX:e.oneOfType([e.string,e.number]),gutterY:e.oneOfType([e.string,e.number])});v.propTypes={children:e.node,className:e.string,xs:l,sm:l,md:l,lg:l,xl:l,xxl:l};v.displayName="CRow";export{x as C,v as a,N as b};
