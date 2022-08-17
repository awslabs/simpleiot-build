"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[7974],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5794:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={id:"preload",title:"DB Preloading"},i=void 0,s={unversionedId:"documentation/data/preload",id:"documentation/data/preload",title:"DB Preloading",description:"During installation, the system goes through three phases:",source:"@site/docs/documentation/data/preload.md",sourceDirName:"documentation/data",slug:"/documentation/data/preload",permalink:"/simpleiot-build/docs/documentation/data/preload",draft:!1,tags:[],version:"current",frontMatter:{id:"preload",title:"DB Preloading"},sidebar:"theSidebar",previous:{title:"RDS Database Access",permalink:"/simpleiot-build/docs/documentation/data/dbaccess"},next:{title:"Contributing",permalink:"/simpleiot-build/docs/contributing"}},l={},p=[],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"During ",(0,r.kt)("a",{parentName:"p",href:"/docs/install/intro"},"installation"),", the system goes through three phases:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Bootstrap"),": where core security credentials are created, and the user is asked for Team information. It writes a file with the values of responses to the questions in ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.simpleiot/{team-name}/bootstrap.json"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Deploy"),": where the answers provided are passed to a ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cdk/"},"CDK")," script. This will create the entire back-end infrastructure. The contents of the ",(0,r.kt)("inlineCode",{parentName:"li"},"bootstrap.json")," file are passed to the script. The CDK outputs values for whatever services it provisioned in ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.simpleiot/{team-name}/cdkoutput.json"),". The contents of ",(0,r.kt)("inlineCode",{parentName:"li"},"boostrap.json"),", this file, and the system defaults in ",(0,r.kt)("inlineCode",{parentName:"li"},"simpleiot/iotapi/iotcdk/installer/defaults.json")," are merged to create a single configuration JSON file located at `~/.simpleiot/{team-name}/config.json. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Database Setup"),": a local script is run to access the database, create the database structure, and pre-load it with some test data loaded from ",(0,r.kt)("inlineCode",{parentName:"li"},"simpleiot/iotapi/db/dbdata.json"),".")),(0,r.kt)("p",null,"This last step creates the following elements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Projects"),": the demo project is called ",(0,r.kt)("em",{parentName:"li"},"Sunshine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Models"),": demo model definitions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Devices"),": these are 'mock devices' in that they are not actual devices with IOT certificates registered with AWS IOT. They are registered in the SQL database and can be interacted with using the ",(0,r.kt)("inlineCode",{parentName:"li"},"iot device")," CLI commands."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access roles"),": these are placeholders for future fine-grain roles."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Users"),": Administrator users created in the Cognito user pool. The password generated during the installation phase will be assigned to the administrative user. This username/password can be used to log in to the system using the ",(0,r.kt)("inlineCode",{parentName:"li"},"iot auth login")," CLI command."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Templates"),": Templates allow definition of common Project/Model/Datatype structures. A JSON structure defines the behavior. It can be expanded to allow custom projects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generators"),": Generators are templates for code projects. They can be used at runtime to create a firmware package with the certificates and project credentials filled in. The ",(0,r.kt)("em",{parentName:"li"},"HelloWorld")," and ",(0,r.kt)("em",{parentName:"li"},"SensorDemo")," projects are installed as generators and can be used by the ",(0,r.kt)("inlineCode",{parentName:"li"},"iot firmware generate")," command to create a starter project quickly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"System Settings"),": System settings are Team-wide settings stored in the database. These can be used to provide dynamic values to the lambdas at runtime.")),(0,r.kt)("p",null,"Once this step is concluded, the system is configured and ready for use."),(0,r.kt)("p",null,"All three steps and pre-requisites are packaged inside a compiled Docker container image at ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/amazon/simpleiot-installer"},"https://hub.docker.com/r/amazon/simpleiot-installer"),". "),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/simpleiot-cli/"},"SimpleIOT CLI package")," when invoked with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/documentation/cli/cloud"},"iot cloud install")," command will download the Docker image and invoke it. The image will run through the above three stages to configure the installation on the cloud. The Docker image is set up to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.aws")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.simpleiot")," directories on the local device so configuration data can be read and written onto the local system's disk."),(0,r.kt)("p",null,"To create a custom installer or provide custom settings, you will want to download the open-source to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/awslabs/simpleiot"},"SimpleIOT installer"),", and install the necessary pre-requisites, and use the provided scripts to ",(0,r.kt)("em",{parentName:"p"},"bootstrap"),", ",(0,r.kt)("em",{parentName:"p"},"deploy"),", and run ",(0,r.kt)("em",{parentName:"p"},"dbsetup"),"."))}d.isMDXComponent=!0}}]);