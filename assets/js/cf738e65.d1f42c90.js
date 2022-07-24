"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[7014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,v=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={id:"events",title:"Data vs. Events"},i=void 0,s={unversionedId:"documentation/data/events",id:"documentation/data/events",title:"Data vs. Events",description:"SimpleIOT's simple key/value model allows data to be exchanged to/from the cloud in real-time across different types of devices.",source:"@site/docs/documentation/data/events.md",sourceDirName:"documentation/data",slug:"/documentation/data/events",permalink:"/simpleiot-build/docs/documentation/data/events",draft:!1,tags:[],version:"current",frontMatter:{id:"events",title:"Data vs. Events"},sidebar:"theSidebar",previous:{title:"Common Interfaces and APIs",permalink:"/simpleiot-build/docs/documentation/data/common"},next:{title:"Digital Twins",permalink:"/simpleiot-build/docs/documentation/data/twin"}},l={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SimpleIOT's simple key/value model allows data to be exchanged to/from the cloud in real-time across different types of devices."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/img/intro/intro-diagram-03.png",width:"60%"})),(0,r.kt)("p",null),(0,r.kt)("p",null,"Each device communicates with the cloud via one or more named ",(0,r.kt)("strong",{parentName:"p"},"Datatype"),". These Datatypes are associated with a ",(0,r.kt)("strong",{parentName:"p"},"Model")," definition of a device, each with a unique name."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/img/data/model-datatype.png",width:"60%"})),(0,r.kt)("p",null,"When a ",(0,r.kt)("strong",{parentName:"p"},"Device")," is created (aka ",(0,r.kt)("em",{parentName:"p"},"instantiated")," or ",(0,r.kt)("em",{parentName:"p"},"provisioned"),"), it is based on a ",(0,r.kt)("strong",{parentName:"p"},"Model")," definition and is given a unique serial number. All its ",(0,r.kt)("strong",{parentName:"p"},"Data")," elements are also based on the corresponding ",(0,r.kt)("strong",{parentName:"p"},"Datatypes"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/img/data/device-data.png",width:"60%"})),(0,r.kt)("p",null),(0,r.kt)("p",null,"When setting a value, you would reference it via its ",(0,r.kt)("strong",{parentName:"p"},"Project")," > ",(0,r.kt)("strong",{parentName:"p"},"Device")," > ",(0,r.kt)("strong",{parentName:"p"},"Data")," reference. When changing the value via REST API or MQTT, events are triggered to update databases and publish monitor events."),(0,r.kt)("p",null,"On the device side, if the Client SDK is used, any changes in values trigger an ",(0,r.kt)("em",{parentName:"p"},"onDataChange")," handler. This means that the same Datatype can be used for both exchanges of data as well as sending/receiving commands!"),(0,r.kt)("p",null,"In the above example, the data can send ",(0,r.kt)("em",{parentName:"p"},"temperature")," and ",(0,r.kt)("em",{parentName:"p"},"light_on")," status values to the cloud. Conversely, by setting the ",(0,r.kt)("em",{parentName:"p"},"command")," Data value to ",(0,r.kt)("em",{parentName:"p"},"ON"),", the device will be notified and can turn on or off."),(0,r.kt)("p",null,"This mechanism makes it easy to pass events and data between devices and the cloud. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"SimpleIOT does not currently set restrictions on ",(0,r.kt)("strong",{parentName:"p"},"Datatype")," names or values. However, it is recommended that names starting with punctuation symbols such as ",(0,r.kt)("inlineCode",{parentName:"p"},"$name")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"_name")," be avoided. These are reserved for future internal use.")))}d.isMDXComponent=!0}}]);