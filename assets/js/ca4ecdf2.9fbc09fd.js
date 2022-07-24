"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[6739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={id:"cloud",title:"Cloud"},l=void 0,i={unversionedId:"documentation/cli/cloud",id:"documentation/cli/cloud",title:"Cloud",description:"In the early days of SimpleIOT, installing the back-end required setting up a range of dependent tools, obtaining the source to the installer, and stepping through the process, one at a time. Not exactly simple.",source:"@site/docs/documentation/cli/cloud.md",sourceDirName:"documentation/cli",slug:"/documentation/cli/cloud",permalink:"/simpleiot-build/docs/documentation/cli/cloud",draft:!1,tags:[],version:"current",frontMatter:{id:"cloud",title:"Cloud"},sidebar:"theSidebar",previous:{title:"Authentication",permalink:"/simpleiot-build/docs/documentation/cli/auth"},next:{title:"Data",permalink:"/simpleiot-build/docs/documentation/cli/data"}},s={},c=[{value:"iot cloud install",id:"iot-cloud-install",level:2},{value:"iot cloud uninstall",id:"iot-cloud-uninstall",level:2},{value:"Parameters",id:"parameters",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'iot cloud install\n\niot cloud uninstall \n    [--team="team-name"] \n')),(0,o.kt)("p",null,"In the early days of SimpleIOT, installing the back-end required setting up a range of dependent tools, obtaining the source to the installer, and stepping through the process, one at a time. Not exactly ",(0,o.kt)("em",{parentName:"p"},"simple"),"."),(0,o.kt)("p",null,"In the current incarnation, the installer process is packaged inside a Docker container, ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/amazon/simpleiot-installer"},"available on DockerHub"),". This allows the installation without going through all the above steps."),(0,o.kt)("p",null,"Instead, you only need to install the CLI and ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop"),". Once set up, you can invoke the entire installer back-end with a simple command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iot cloud install\n")),(0,o.kt)("p",null,"This command will download the Docker image (if needed) and invoke the interactive installer process. First, you will be asked to choose an AWS profile (skipped if all you have is the ",(0,o.kt)("em",{parentName:"p"},"default")," profile), then name your team, select an administrator password, and off it goes."),(0,o.kt)("p",null,"The installer uses the answers to invoke an ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cdk/"},"AWS CDK")," session to provision the back-end and wire up all the serverless components together. The process typically takes anywhere from 15-30 minutes. Next, a directory will be created in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.simpleiot")," (inside your home directory). The generated settings and values for the specific team will be saved here. You can view these by looking at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.simpleiot/config.json")," (but please don't modify the file)."),(0,o.kt)("p",null,"The converse of the process is to delete the back-end cloud infrastructure via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"iot cloud uninstall --team={team-name}\n")),(0,o.kt)("p",null,"This command will load the installer Docker image and invoke the operation to clean the back-end. Note that this will also delete the directory in the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.simpleiot")," folder. "),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"uninstall")," operation is not reversible. All databases, AWS Lambda functions, and settings will be permanently deleted."),(0,o.kt)("p",{parentName:"admonition"},"However, if you have created IOT device instances at runtime, those will NOT be deleted and must be manually removed.")),(0,o.kt)("h2",{id:"iot-cloud-install"},"iot cloud install"),(0,o.kt)("p",null,"Used to create the cloud back-end infrastructure. You will be prompted to enter questions specific to your team installation."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/install/bootstrap.png",width:"80%"})),(0,o.kt)("h2",{id:"iot-cloud-uninstall"},"iot cloud uninstall"),(0,o.kt)("p",null,"Used to clean out the back-end infrastructure."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter ","\xa0","\xa0","\xa0","\xa0"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--team")),(0,o.kt)("td",{parentName:"tr",align:null},"team name"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of team to clear out and remove.")))))}p.isMDXComponent=!0}}]);