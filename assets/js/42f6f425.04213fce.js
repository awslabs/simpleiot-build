"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[7845],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>h});var o=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=o.createContext({}),u=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),c=u(r),h=n,p=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return r?o.createElement(p,i(i({ref:e},m),{},{components:r})):o.createElement(p,i({ref:e},m))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2925:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={id:"adminteam",title:"Administrators and Team Members"},i="Who are you (in this workshop setting)?",s={unversionedId:"workshops/starter/adminteam",id:"workshops/starter/adminteam",title:"Administrators and Team Members",description:"Before starting this workshop, the first question to answer is:",source:"@site/docs/workshops/starter/adminteam.md",sourceDirName:"workshops/starter",slug:"/workshops/starter/adminteam",permalink:"/docs/workshops/starter/adminteam",draft:!1,tags:[],version:"current",frontMatter:{id:"adminteam",title:"Administrators and Team Members"},sidebar:"theSidebar",previous:{title:"Unboxing the Equipment",permalink:"/docs/workshops/starter/unboxing"},next:{title:"Joining the Team",permalink:"/docs/workshops/starter/team-member"}},l={},u=[],m={toc:u};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"who-are-you-in-this-workshop-setting"},"Who are you (in this workshop setting)?"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/install/install-diagram-01.png",width:"80%"})),(0,n.kt)("p",null,"Before starting this workshop, the first question to answer is:"),(0,n.kt)("p",{align:"center"},(0,n.kt)("h2",null,"What is your role?")),(0,n.kt)("p",null,"There are three possible options for roles:"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("td",{width:"10%"},(0,n.kt)("img",{src:"/img/install/solo-icon.png"})),(0,n.kt)("td",{width:"20%"},(0,n.kt)("a",{href:"../../install/solo"},"Solo")),(0,n.kt)("td",null,"You are a rugged individualist. You eat hardware, software, and cloud for lunch. A jack of all trades! This is for you.")),(0,n.kt)("tr",null,(0,n.kt)("td",{width:"10%"},(0,n.kt)("img",{src:"/img/install/admin-icon.png"})),(0,n.kt)("td",{width:"20%"},(0,n.kt)("a",{href:"../../install/admin"},"Admin")),(0,n.kt)("td",null,"You are the grown-up administrator responsible for making things work smoothly. You do not suffer fools. You may also do some tinkering yourself (you really should). But your day job is care and feeding of the cloud infrastructure. Once done, you may invite others to come join the fun.")),(0,n.kt)("tr",null,(0,n.kt)("td",{width:"10%"},(0,n.kt)("img",{src:"/img/install/team-member-icon.png"})),(0,n.kt)("td",{width:"20%"},(0,n.kt)("a",{href:"../../install/team-member"},"Team Member")),(0,n.kt)("td",null,"You are a builder who has no time for that back-end stuff. You just want to get things done. Fast! You have been invited to join an existing team by your friendly neighborhood administrator."))),(0,n.kt)("p",null,"These are not hard and fast definitions. For example, a Solo can invite others to join their Team."),(0,n.kt)("p",null,"The general rule is:  if you have administrative access to your AWS account, you can be any of the above. But if you do ",(0,n.kt)("em",{parentName:"p"},"not")," have access to the AWS Console as an administrator, you will not be able to install the back-end. "),(0,n.kt)("p",null,"In this workshop, there has to be ",(0,n.kt)("em",{parentName:"p"},"AT LEAST ONE (1)")," Administrator (or Solo). That is, there must be one individual with administrator access in an AWS account who follows the instructions related to being an Administrator (or Solo). That individual will provision the SimpleIOT backend in their account and will then be able to invite Team Members to join the Team that has been created. Keep in mind this should be done a few hours ahead of time to allow for the time it takes for the SimpleIOT back-end to build out."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you are an Administrator or going Solo, you must first ",(0,n.kt)("a",{parentName:"p",href:"../../install/account"},(0,n.kt)("em",{parentName:"a"},"configure your AWS account and set up the AWS CLI"))," before going any further. ")),(0,n.kt)("p",null,"So choose your own adventure! Read the documentation in the appropriate link above related to your role, then come back here to get started with the workshop. "),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you're following the Solo or Team Member instructions, skip the \"Installing the Toolchain\" section and everything after that. We'll be covering that as part of this workshop.")))}d.isMDXComponent=!0}}]);