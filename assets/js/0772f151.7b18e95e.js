"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[9247],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>k});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=p(r),k=i,h=d["".concat(l,".").concat(k)]||d[k]||u[k]||o;return r?n.createElement(h,s(s({ref:e},c),{},{components:r})):n.createElement(h,s({ref:e},c))}));function k(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a.mdxType="string"==typeof t?t:i,s[1]=a;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8467:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={id:"unboxing",title:"Unboxing the Equipment"},s=void 0,a={unversionedId:"workshops/starter/unboxing",id:"workshops/starter/unboxing",title:"Unboxing the Equipment",description:"AWS IoT EduKit",source:"@site/docs/workshops/starter/unboxing.md",sourceDirName:"workshops/starter",slug:"/workshops/starter/unboxing",permalink:"/docs/workshops/starter/unboxing",draft:!1,tags:[],version:"current",frontMatter:{id:"unboxing",title:"Unboxing the Equipment"},sidebar:"theSidebar",previous:{title:"Basic Concepts",permalink:"/docs/workshops/starter/concepts"},next:{title:"Administrators and Team Members",permalink:"/docs/workshops/starter/adminteam"}},l={},p=[{value:"AWS IoT EduKit",id:"aws-iot-edukit",level:2},{value:"The Basics",id:"the-basics",level:3},{value:"EduKit visual overview",id:"edukit-visual-overview",level:3},{value:"Additional components",id:"additional-components",level:3},{value:"GPS unit",id:"gps-unit",level:4},{value:"Grove connector cables",id:"grove-connector-cables",level:4},{value:"3:1 Hub",id:"31-hub",level:4},{value:"Encoder and ENV III Sensors",id:"encoder-and-env-iii-sensors",level:4}],c={toc:p};function u(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"aws-iot-edukit"},"AWS IoT EduKit"),(0,i.kt)("p",null,"First, take a quick look at the overview of the ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/iot/edukit/"},"AWS IoT EduKit"),"."),(0,i.kt)("h3",{id:"the-basics"},"The Basics"),(0,i.kt)("p",null,"Here's a couple of views of the box itself: "),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/workshops/starter/EduKit-Unbox-1.png",width:"30%"})),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/workshops/starter/EduKit-Unbox-2.png",width:"30%"})),(0,i.kt)("p",null,"Go ahead and open the box and take out the EduKit:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/workshops/starter/EduKit-Unbox-3.png",width:"40%"})),(0,i.kt)("p",null,"Remove the USB-C cable and insert the USB-C end into the EduKit as shown:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/workshops/starter/EduKit-USB-Plugin.png",width:"40%"})),(0,i.kt)("h3",{id:"edukit-visual-overview"},"EduKit visual overview"),(0,i.kt)("p",null,"Familiarize yourself with the EduKit ports, buttons, and additional features as shown below."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/workshops/starter/edukit-front.png",width:"60%"}),(0,i.kt)("p",null),(0,i.kt)("hr",{width:"60%"}),(0,i.kt)("p",null),(0,i.kt)("img",{src:"/img/workshops/starter/edukit-left.png",width:"60%"}),(0,i.kt)("p",null),(0,i.kt)("hr",{width:"60%"}),(0,i.kt)("p",null),(0,i.kt)("img",{src:"/img/workshops/starter/edukit-right.png",width:"60%"}),(0,i.kt)("p",null),(0,i.kt)("hr",{width:"60%"}),(0,i.kt)("p",null),(0,i.kt)("img",{src:"/img/workshops/starter/edukit-back.png",width:"60%"}),(0,i.kt)("p",null),(0,i.kt)("hr",{width:"60%"}),(0,i.kt)("p",null),(0,i.kt)("img",{src:"/img/workshops/starter/edukit-top.png",width:"60%"}),(0,i.kt)("p",null),(0,i.kt)("hr",{width:"60%"}),(0,i.kt)("p",null),(0,i.kt)("img",{src:"/img/workshops/starter/edukit-bottom.png",width:"60%"}),(0,i.kt)("p",null),(0,i.kt)("hr",{width:"60%"}),(0,i.kt)("p",null)),(0,i.kt)("h3",{id:"additional-components"},"Additional components"),(0,i.kt)("p",null,"Below are some additional components that connect to AWS IoT EduKit and will be used in the workshop . "),(0,i.kt)("h4",{id:"gps-unit"},"GPS unit"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/workshops/starter/GPS.png",width:"50%"})),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/workshops/starter/GPS-back.png",width:"30%"})),(0,i.kt)("h4",{id:"grove-connector-cables"},"Grove connector cables"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/workshops/starter/edukit-connector.png",width:"80%"})),(0,i.kt)("h4",{id:"31-hub"},"3:1 Hub"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/workshops/starter/Sensor-Wiring.png",width:"60%"})),(0,i.kt)("h4",{id:"encoder-and-env-iii-sensors"},"Encoder and ENV III Sensors"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/workshops/starter/Encoder_and_Env.png",width:"40%"})))}u.isMDXComponent=!0}}]);