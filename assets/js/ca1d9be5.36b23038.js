"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[2772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={id:"roles",title:"Roles"},a="Who are you?",l={unversionedId:"install/roles",id:"install/roles",title:"Roles",description:"Before setting up SimpleIOT, the first question to answer is:",source:"@site/docs/install/roles.md",sourceDirName:"install",slug:"/install/roles",permalink:"/docs/install/roles",draft:!1,tags:[],version:"current",frontMatter:{id:"roles",title:"Roles"},sidebar:"theSidebar",previous:{title:"How to Install",permalink:"/docs/install/intro"},next:{title:"Configuring an AWS account",permalink:"/docs/install/account"}},s={},u=[],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"who-are-you"},"Who are you?"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/install/install-diagram-01.png",width:"80%"})),(0,o.kt)("p",null,"Before setting up SimpleIOT, the first question to answer is:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("h2",null,"What is your role?")),(0,o.kt)("p",null,"There are three possible options:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",{width:"10%"},(0,o.kt)("img",{src:"/img/install/solo-icon.png"})),(0,o.kt)("td",{width:"20%"},(0,o.kt)("a",{href:"solo"},"Solo")),(0,o.kt)("td",null,"You are a rugged individualist. You eat hardware, software, and cloud for lunch. A jack of all trades! This is for you.")),(0,o.kt)("tr",null,(0,o.kt)("td",{width:"10%"},(0,o.kt)("img",{src:"/img/install/admin-icon.png"})),(0,o.kt)("td",{width:"20%"},(0,o.kt)("a",{href:"admin"},"Admin")),(0,o.kt)("td",null,"You are the grown-up administrator responsible for making things work smoothly. You do not suffer fools. You may also do some tinkering yourself (you really should). But your day job is care and feeding of the cloud infrastructure. Once done, you may invite others to come join the fun.")),(0,o.kt)("tr",null,(0,o.kt)("td",{width:"10%"},(0,o.kt)("img",{src:"/img/install/team-member-icon.png"})),(0,o.kt)("td",{width:"20%"},(0,o.kt)("a",{href:"team-member"},"Team Member")),(0,o.kt)("td",null,"You are a builder who has no time for that back-end stuff. You just want to get things done. Fast! You have been invited to join an existing team by your friendly neighborhood administrator."))),(0,o.kt)("p",null,"These are not hard and fast definitions. For example, a Solo can invite others to join their Team. In the following sections, we'll try to show you information and steps appropriate to each role. If in doubt, ",(0,o.kt)("a",{href:"solo"},"Go Solo"),"."),(0,o.kt)("p",null,"The general rule is:  if you have administrative access to your AWS account, you can be any of the above. But if you do ",(0,o.kt)("em",{parentName:"p"},"not")," have access to the AWS Console as an administrator, you will not be able to install the back-end. "),(0,o.kt)("p",null,"The ",(0,o.kt)("b",null,"Team Member")," track will avoid overloading you with unnecessary instructions."))}d.isMDXComponent=!0}}]);