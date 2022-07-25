"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={id:"intro",title:"Welcome"},l="Welcome to SimpleIOT",a={unversionedId:"intro",id:"intro",title:"Welcome",description:"What if you could go from this:",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/simpleiot-build/docs/intro",draft:!1,tags:[],version:"current",frontMatter:{id:"intro",title:"Welcome"},sidebar:"theSidebar",next:{title:"Basic Concepts",permalink:"/simpleiot-build/docs/concepts"}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-to-simpleiot"},"Welcome to SimpleIOT"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/simpleiot-build/img/intro/cloud-glow.png"})),(0,o.kt)("p",null,"What if you could go from this:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/simpleiot-build/img/intro/drawing-pad.png",width:"60%"})),(0,o.kt)("p",null,"To this:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/simpleiot-build/img/workshops/starter/sensordemo-color-change.jpg",width:"60%"})),(0,o.kt)("p",null,"In 30 minutes (or less)? "),(0,o.kt)("p",null,"Here's the short version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[SMASH CUT] \n\n(Open Terminal)\n\n> pip3 install simpleiot-cli\n> iot toolchain install\n(Wait 5m)\n\n> iot cloud install\n(Wait 15m)\n...\n\n> export IOT_TEAM=my-team\n> export IOT_WIFI_SSID="{your wifi SSID}"\n> export IOT_WIFI_PASSWORD="{your wifi password}"\n\niot auth login\niot project add --name=SensorDemo --template=sensordemo\niot device add --project=SensorDemo --model=SensorDemoModel --serial=SD-0001\niot firmware generate --project=SensorDemo --serial=SD-0001 --name=sensordemo\n\n(Unbox Starter Kit. Plug in sensors and wires: 5m)\n\niot firmware flash --zip=sensordemo-arduino-esp32.zip\n(Wait 5m)\n\n(Check watch. \ud83d\udc4a\ud83c\udffb)\n')),(0,o.kt)("p",null,"There are so many things you can do:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/simpleiot-build/img/intro/overview.png",width:"70%"})),(0,o.kt)("p",null,"Check your AWS account. Your cloud infrastructure should look like this:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/simpleiot-build/img/data/architecture.png",width:"100%"})),(0,o.kt)("p",null,"\ud83c\udfc6 ",(0,o.kt)("strong",{parentName:"p"},"Congratulations"),"! "),(0,o.kt)("p",null,"You just built an end-to-end, secure, connected device that can send data to the cloud in real-time. "),(0,o.kt)("p",null,"... In your own account. "),(0,o.kt)("p",null,"... Where you own all the code and data."),(0,o.kt)("p",null,"... 100% Open-Source."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Best part: since you've already installed the bits above, your next idea will take even less time.")),(0,o.kt)("p",null,"If you haven't picked up a Starter Kit yet, you can ",(0,o.kt)("a",{parentName:"p",href:"https://m5stack.com"},"purchase one here"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("br",null),(0,o.kt)("b",null,"Let's take a peek under the hood..."),(0,o.kt)("p",null),(0,o.kt)("a",{href:"/docs/concepts"},(0,o.kt)("img",{src:"/simpleiot-build/img/intro/touch-icon.png",width:"5%"}))))}u.isMDXComponent=!0}}]);