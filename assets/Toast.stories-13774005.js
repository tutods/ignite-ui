import{j as o}from"./jsx-runtime-fc9fa0e1.js";import{r as f}from"./index-a99a8bc6.js";import{a as g,B as w}from"./index-b8e633b5.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";const W={component:g,title:"Data Display/Toast",args:{title:"Event scheduled!",description:"Friday, October 23 at 4PM"},parameters:{layout:"centered"},decorators:[s=>o.jsx("div",{style:{minWidth:"800px",height:350,display:"flex",alignItems:"center",justifyContent:"center"},children:s()})]},a=s=>{const[x,n]=f.useState(!1);return o.jsx(g,{...s,isOpen:x,setIsOpen:n,children:o.jsx(w,{onClick:()=>n(!0),children:"Schedule"})})},e={render:a},t={render:a,name:"Toast with timeout (5s)",args:{timeout:5e3}},r={render:a,name:"Toast withhout close button",args:{timeout:5e3,showClose:!1}};var i,c,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: ToastRender
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: ToastRender,
  name: 'Toast with timeout (5s)',
  args: {
    timeout: 5000
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var l,h,T;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ToastRender,
  name: 'Toast withhout close button',
  args: {
    timeout: 5000,
    showClose: false
  }
}`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const B=["Primary","WithTimeout","WithoutCloseButton"];export{e as Primary,t as WithTimeout,r as WithoutCloseButton,B as __namedExportsOrder,W as default};
//# sourceMappingURL=Toast.stories-13774005.js.map
