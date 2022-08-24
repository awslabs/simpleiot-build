"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[3365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={id:"concepts",title:"Basic Concepts"},i=void 0,p={unversionedId:"concepts",id:"concepts",title:"Basic Concepts",description:"There are some easy-to-understand concepts behind SimpleIOT. This short section will help lay the foundation.",source:"@site/docs/concepts.md",sourceDirName:".",slug:"/concepts",permalink:"/docs/concepts",draft:!1,tags:[],version:"current",frontMatter:{id:"concepts",title:"Basic Concepts"},sidebar:"theSidebar",previous:{title:"Welcome",permalink:"/docs/intro"},next:{title:"How to Install",permalink:"/docs/install/intro"}},s={},l=[{value:"Background",id:"background",level:2},{value:"Taxonomy",id:"taxonomy",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"There are some easy-to-understand concepts behind SimpleIOT. This short section will help lay the foundation."),(0,r.kt)("p",{parentName:"admonition"},"But if you're into skipping to the last page of a detective story (no spoilers!) and the following diagram makes sense, feel free to ",(0,r.kt)("a",{parentName:"p",href:"install/intro"},"jump ahead. ",(0,r.kt)("img",{src:"/img/circle-arrow-right-solid.svg",width:"20",height:"20"}))),(0,r.kt)("p",{parentName:"admonition"},"Otherwise, read on...")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/intro/intro-diagram-09.png",width:"70%"})),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"SimpleIOT allows you to connect a variety of devices to the cloud. The data can go in both directions if needed."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/intro/intro-diagram-01.png"})),(0,r.kt)("p",null,"All services and data are owned by you and maintained in your private AWS account. You can have one or more accounts to keep the Data separate."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/intro/intro-diagram-02.png"})),(0,r.kt)("p",null,"Each account is associated with a single ",(0,r.kt)("strong",{parentName:"p"},"Team")," which you can name to distinguish them from each other. Each ",(0,r.kt)("em",{parentName:"p"},"Team")," maintains its own stack of services, users, devices, and data. "),(0,r.kt)("p",null,"It depends on how you like to organize your projects. In the beginning, one ",(0,r.kt)("strong",{parentName:"p"},"Team")," is good enough. But as you go along, you may want to have, for example, separate ",(0,r.kt)("strong",{parentName:"p"},"dev"),", ",(0,r.kt)("strong",{parentName:"p"},"test"),", and ",(0,r.kt)("strong",{parentName:"p"},"production")," Teams."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/intro/intro-diagram-03.png"})),(0,r.kt)("p",null,"Note that a single Team can handle many different types of devices. But the main association to keep in mind is:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"One AWS Account ","<","=",">"," One Team"),".")),(0,r.kt)("p",null,"If you want to access different Teams from a single desktop or laptop, you can toggle back and forth between them easily from the command line."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/intro/intro-diagram-04.png"})),(0,r.kt)("p",null,"Each ",(0,r.kt)("strong",{parentName:"p"},"Team")," maintains its list of users, databases, logs, APIs, device certificates, etc."),(0,r.kt)("h2",{id:"taxonomy"},"Taxonomy"),(0,r.kt)("p",null,"SimpleIOT has a basic notion of how it organizes the data."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/intro/intro-diagram-05.png",width:"70%"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each ",(0,r.kt)("strong",{parentName:"li"},"Team")," can have one or more ",(0,r.kt)("strong",{parentName:"li"},"Projects"),". "),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"Project")," allows you to define one or more ",(0,r.kt)("strong",{parentName:"li"},"Models"),"."),(0,r.kt)("li",{parentName:"ul"},"Each ",(0,r.kt)("strong",{parentName:"li"},"Model")," describes a single type of device. "),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"model")," can have one or more ",(0,r.kt)("strong",{parentName:"li"},"Datatypes"),". A ",(0,r.kt)("strong",{parentName:"li"},"Datatype")," is a named value for each piece of information you want to exchange with the device.")),(0,r.kt)("p",null,"For example, you can create a ",(0,r.kt)("strong",{parentName:"p"},"Project")," to build a variety of hand-held thermometers. For the first one, you define a ",(0,r.kt)("strong",{parentName:"p"},"Model")," and give it a name. That model will be exchanging three attributes or ",(0,r.kt)("strong",{parentName:"p"},"Datatypes")," with the cloud:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/intro/intro-diagram-06.png",width:"60%"})),(0,r.kt)("p",null,"In the above example, your project is named ",(0,r.kt)("strong",{parentName:"p"},"HeatMeasure"),", and a model in that project is called ",(0,r.kt)("strong",{parentName:"p"},"Therm-01"),". The device wants to exchange three values with the cloud: ",(0,r.kt)("strong",{parentName:"p"},"status"),", ",(0,r.kt)("strong",{parentName:"p"},"temperature"),", and ",(0,r.kt)("strong",{parentName:"p"},"battery"),". In the future, you can have a ",(0,r.kt)("em",{parentName:"p"},"Therm-02"),", ",(0,r.kt)("em",{parentName:"p"},"Therm-03"),", etc. "),(0,r.kt)("p",null,"Once you've defined your ",(0,r.kt)("em",{parentName:"p"},"Model")," and ",(0,r.kt)("em",{parentName:"p"},"Datatype"),", you can now virtually stamp out one or more instances. An instance of a ",(0,r.kt)("em",{parentName:"p"},"Model")," is called a ",(0,r.kt)("strong",{parentName:"p"},"Device"),". Each ",(0,r.kt)("em",{parentName:"p"},"Device")," needs to have its own unique ",(0,r.kt)("strong",{parentName:"p"},"serial number")," so you can tell multiple ",(0,r.kt)("em",{parentName:"p"},"Devices")," apart."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/intro/intro-diagram-07.png",width:"60%"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In object-oriented parlance, a ",(0,r.kt)("strong",{parentName:"p"},"Model")," is a ",(0,r.kt)("em",{parentName:"p"},"class"),". Each time you ",(0,r.kt)("em",{parentName:"p"},"instantiate")," a Model, you're creating a ",(0,r.kt)("strong",{parentName:"p"},"device"),", which is an ",(0,r.kt)("em",{parentName:"p"},"instance")," of that class.")),(0,r.kt)("p",null,"Remember how each ",(0,r.kt)("em",{parentName:"p"},"Model")," had one or more ",(0,r.kt)("em",{parentName:"p"},"Datatypes"),"? Each ",(0,r.kt)("em",{parentName:"p"},"Device")," will also have its own instance of those, called ",(0,r.kt)("strong",{parentName:"p"},"Data"),". "),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/intro/intro-diagram-08.png",width:"60%"})),(0,r.kt)("p",null,"You can reference each data element of each unique device by its:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,"Project (name) - Model (name) - Device (serial number) - Data (name)")),(0,r.kt)("p",null,"Putting it all together:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/intro/intro-diagram-09.png",width:"70%"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations"),": You now have a foundation of how SimpleIOT works. Let's move on to installing it."))}m.isMDXComponent=!0}}]);