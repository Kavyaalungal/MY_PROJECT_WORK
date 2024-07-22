import{r as v,f as M,e as r,P as n,_ as y,a as o,c as E,t as V}from"./index-DqIQyVV6.js";import{C as I}from"./Bill-Dgp8HSlF.js";import{a as D,u as B,g as A}from"./DefaultLayout-QHfuYiWz.js";import{C as S}from"./CButton-BSZMSOW-.js";var j=function(e){return e?typeof e=="function"?e():e:document.body},k=function(e){var t=e.children,l=e.container,a=e.portal,i=v.useState(null),c=i[0],d=i[1];return v.useEffect(function(){a&&d(j(l)||document.body)},[l,a]),typeof window<"u"&&a&&c?M.createPortal(t,c):r.createElement(r.Fragment,null,t)};k.propTypes={children:n.node,container:n.any,portal:n.bool};k.displayName="CConditionalPortal";var x=v.forwardRef(function(e,t){var l=e.children,a=e.as,i=a===void 0?"a":a,c=e.className,d=y(e,["children","as","className"]);return r.createElement(I,o({className:E("dropdown-item",c),as:i},d,{ref:t}),l)});x.propTypes={as:n.elementType,children:n.node,className:n.string};x.displayName="CDropdownItem";var R=v.forwardRef(function(e,t){var l=e.children,a=e.as,i=a===void 0?"ul":a,c=e.className,d=y(e,["children","as","className"]),s=v.useContext(D),C=s.alignment,b=s.container,m=s.dark,w=s.dropdownMenuRef,u=s.popper,p=s.portal,N=s.visible,f=B(t,w);return r.createElement(k,{container:b,portal:p??!1},r.createElement(i,o({className:E("dropdown-menu",{show:N},C&&A(C),c),ref:f,role:"menu","aria-hidden":!N},!u&&{"data-coreui-popper":"static"},m&&{"data-coreui-theme":"dark"},d),i==="ul"?r.Children.map(l,function(g,h){if(r.isValidElement(g))return r.createElement("li",{key:h},r.cloneElement(g))}):l))});R.propTypes={as:n.elementType,children:n.node,className:n.string};R.displayName="CDropdownMenu";var P=function(e){var t=e.children,l=e.caret,a=l===void 0?!0:l,i=e.custom,c=e.className,d=e.navLink,s=d===void 0?!0:d,C=e.split,b=e.trigger,m=b===void 0?"click":b,w=y(e,["children","caret","custom","className","navLink","split","trigger"]),u=v.useContext(D),p=u.dropdownToggleRef,N=u.variant,f=u.visible,g=u.setVisible,h=o(o({},(m==="click"||m.includes("click"))&&{onClick:function(L){L.preventDefault(),g(!f)}}),(m==="focus"||m.includes("focus"))&&{onFocus:function(){return g(!0)},onBlur:function(){return g(!1)}}),T=o({className:E({"nav-link":N==="nav-item"&&s,"dropdown-toggle":a,"dropdown-toggle-split":C,show:f},c),"aria-expanded":f},!w.disabled&&o({},h)),F=function(){return i&&r.isValidElement(t)?r.createElement(r.Fragment,null,r.cloneElement(t,o(o({"aria-expanded":f},!w.disabled&&o({},h)),{ref:p}))):N==="nav-item"&&s?r.createElement("a",o({href:"#"},T,{role:"button",ref:p}),t):r.createElement(S,o({},T,{tabIndex:0},w,{ref:p}),t,C&&r.createElement("span",{className:"visually-hidden"},"Toggle Dropdown"))};return r.createElement(F,null)};P.propTypes={caret:n.bool,children:n.node,className:n.string,custom:n.bool,split:n.bool,trigger:V};P.displayName="CDropdownToggle";export{P as C,R as a,x as b};
