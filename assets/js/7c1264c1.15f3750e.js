"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[6135],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=o(a),s=r,N=k["".concat(d,".").concat(s)]||k[s]||u[s]||l;return a?n.createElement(N,p(p({ref:e},m),{},{components:a})):n.createElement(N,p({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3476:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={},p="Model",i={unversionedId:"documentation/api/model",id:"documentation/api/model",title:"Model",description:"A Model provides a definition of a single connected-device and its capabilities. One or more Models may be defined",source:"@site/docs/documentation/api/model.md",sourceDirName:"documentation/api",slug:"/documentation/api/model",permalink:"/docs/documentation/api/model",draft:!1,tags:[],version:"current",frontMatter:{}},d={},o=[{value:"Get All Models",id:"get-all-models",level:2},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Input Schema",id:"input-schema",level:3},{value:"Output Schema",id:"output-schema",level:3},{value:"Get One Project (Detail)",id:"get-one-project-detail",level:2},{value:"Request Parameters",id:"request-parameters-1",level:3},{value:"Headers",id:"headers-1",level:3},{value:"Input Schema",id:"input-schema-1",level:3},{value:"Output Schema",id:"output-schema-1",level:3},{value:"Add One Project",id:"add-one-project",level:2},{value:"Request Parameters",id:"request-parameters-2",level:3},{value:"Headers",id:"headers-2",level:3},{value:"Input Schema",id:"input-schema-2",level:3},{value:"Output Schema",id:"output-schema-2",level:3},{value:"Modify a Project",id:"modify-a-project",level:2},{value:"Headers",id:"headers-3",level:3},{value:"Input Schema",id:"input-schema-3",level:3},{value:"Output Schema",id:"output-schema-3",level:3},{value:"Delete One Project",id:"delete-one-project",level:2},{value:"Headers",id:"headers-4",level:3},{value:"Input Schema",id:"input-schema-4",level:3},{value:"Output Schema",id:"output-schema-4",level:3},{value:"Get All Models",id:"get-all-models-1",level:2},{value:"Get One Model",id:"get-one-model",level:2},{value:"Add Model",id:"add-model",level:2},{value:"Delete Model",id:"delete-model",level:2},{value:"Update Model",id:"update-model",level:2}],m={toc:o};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"model"},"Model"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"Model")," provides a definition of a single connected-device and its capabilities. One or more ",(0,r.kt)("em",{parentName:"p"},"Models")," may be defined\ninside a single ",(0,r.kt)("a",{parentName:"p",href:"/?http#project"},"Project"),"."),(0,r.kt)("p",null,"Model names have to be unique within the project and are mapped to directory names in the Command-language-interface. It is recommended using only upper and\nlower-case ASCII characters, numbers, or underlines in the naming scheme."),(0,r.kt)("h2",{id:"get-all-models"},"Get All Models"),(0,r.kt)("p",null,"Returns a list of all Models inside a given ",(0,r.kt)("em",{parentName:"p"},"Project"),"."),(0,r.kt)("p",null,"When issuing HTTP/HTTPS requests, the JWT authentication token has to be provided in the request header.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/?http#authentication"},"Authentication")," for more  information."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://{{API_ENDPOINT}}/v1/model?project={project-name}&all=true")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nurl = f\"{API_ENDPOINT}/v1/model?project={project-name}&all=true\"\n\npayload={}\nheaders = {\n  'Authorization': 'Bearer {JWT_TOKEN}'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data=payload)\n\nprint(response.text)\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nvar myHeaders = new Headers();\nmyHeaders.append("Authorization", "Bearer {JWT_TOKEN}");\n\nvar requestOptions = {\n  method: \'GET\',\n  headers: myHeaders,\n  redirect: \'follow\'\n};\n\nlet server = "{API_ENDPOINT}";\n\nfetch(server + "/v1/model?project={project-name}&all=true", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n\n')),(0,r.kt)("p",null,"Response will return an array of Model records:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"TBD\n")),(0,r.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("p",null,"To get all the Models, the  project name and",(0,r.kt)("inlineCode",{parentName:"p"},"all=true")," parameter is required."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Verb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Security"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JWT Bearer Token"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"https://",(0,r.kt)("inlineCode",{parentName:"td"},"API Endpoint"),"/v1/model?project={project-name}&all=true")))),(0,r.kt)("h3",{id:"headers"},"Headers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Paramater"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,r.kt)("td",{parentName:"tr",align:null},'"Bearer ',(0,r.kt)("inlineCode",{parentName:"td"},"JWT Token"),'"')))),(0,r.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Query Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project"),(0,r.kt)("td",{parentName:"tr",align:null},"project-name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of project"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project_id"),(0,r.kt)("td",{parentName:"tr",align:null},"project-GUID"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of project"),(0,r.kt)("td",{parentName:"tr",align:null},"(either name or ID must be provided)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Request all projects"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h3",{id:"input-schema"},"Input Schema"),(0,r.kt)("p",null,"No input schema"),(0,r.kt)("h3",{id:"output-schema"},"Output Schema"),(0,r.kt)("p",null,"This request returns an array of objects of this format."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Database GUID ID"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"udi"),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Universal Device Identifier for project"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Project name"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"models"),(0,r.kt)("td",{parentName:"tr",align:null},"List of Model names defined in project"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"devices"),(0,r.kt)("td",{parentName:"tr",align:null},"List of Device serial numbers"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"desc"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of project"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date_created"),(0,r.kt)("td",{parentName:"tr",align:null},"UTC Timestamp when project was created"),(0,r.kt)("td",{parentName:"tr",align:null},"Date")))),(0,r.kt)("h2",{id:"get-one-project-detail"},"Get One Project (Detail)"),(0,r.kt)("p",null,"Returns details on a specific project, if requested by name or ID."),(0,r.kt)("p",null,"When issuing HTTP/HTTPS requests, the JWT authentication token has to be provided in the request header.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/?http#authentication"},"Authentication")," for more  information."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://{{API_ENDPOINT}}/v1/project?name=Sunshine")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://{{API_ENDPOINT}}/v1/project?id={project-id}")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nurl = f\"{API_ENDPOINT}/v1/project?name=Sunshine\"\n\npayload={}\nheaders = {\n  'Authorization': 'Bearer {JWT_TOKEN}'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data=payload)\n\nprint(response.text)\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nvar myHeaders = new Headers();\nmyHeaders.append("Authorization", "Bearer {JWT_TOKEN}");\n\nvar requestOptions = {\n  method: \'GET\',\n  headers: myHeaders,\n  redirect: \'follow\'\n};\n\nlet server = "{API_ENDPOINT}";\n\nfetch(server + "/v1/project?name=Sunshine", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n\n')),(0,r.kt)("p",null,"Response will return an array of ",(0,r.kt)("em",{parentName:"p"},"Project")," records:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "1a02e8a6b31f47f2aa64308d79f9ac1c",\n    "name": "Sunshine",\n    "models": [\n        "T-65C-A2",\n        "GW5000",\n        "TP1000",\n        "TIE-LN",\n        "WeatherRack2"\n    ],\n    "devices": [\n        "TIE-0001",\n        "GW-0009",\n        "SWR-01",\n        "TIE-DEMO01",\n        "TP-0001"\n    ],\n    "desc": "Sample Project for SimpleIOT demo",\n    "date_created": "2021-09-19T21:59:32.546743"\n}\n')),(0,r.kt)("h3",{id:"request-parameters-1"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Verb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Security"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JWT Bearer Token"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"https://",(0,r.kt)("inlineCode",{parentName:"td"},"API Endpoint"),"/v1/project?name={project_name}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"https://",(0,r.kt)("inlineCode",{parentName:"td"},"API Endpoint"),"/v1/project?id={project_id}")))),(0,r.kt)("h3",{id:"headers-1"},"Headers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Paramater"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,r.kt)("td",{parentName:"tr",align:null},'"Bearer ',(0,r.kt)("inlineCode",{parentName:"td"},"JWT Token"),'"')))),(0,r.kt)("h3",{id:"input-schema-1"},"Input Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Project ID"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Project Name"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("h3",{id:"output-schema-1"},"Output Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Database GUID ID"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"udi"),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Universal Device Identifier for project"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Project name"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"models"),(0,r.kt)("td",{parentName:"tr",align:null},"List of Model names defined in project"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"devices"),(0,r.kt)("td",{parentName:"tr",align:null},"List of Device serial numbers"),(0,r.kt)("td",{parentName:"tr",align:null},"Array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"desc"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of project"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date_created"),(0,r.kt)("td",{parentName:"tr",align:null},"UTC Timestamp when project was created"),(0,r.kt)("td",{parentName:"tr",align:null},"Date")))),(0,r.kt)("h2",{id:"add-one-project"},"Add One Project"),(0,r.kt)("p",null,"Adds a single project to the installation. Project names ",(0,r.kt)("strong",{parentName:"p"},"MUST")," be unique.\nProject names are mapped to directory names in the Command-language-interface."),(0,r.kt)("p",null,"It is recommended using only upper and lower-case ASCII characters, numbers, or underlines in the\nnaming scheme."),(0,r.kt)("p",null,"When issuing HTTP/HTTPS requests, the JWT authentication token has to be provided in the request header.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/?http#authentication"},"Authentication")," for more  information."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://{{API_ENDPOINT}}/v1/project")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\nurl = f"{API_ENDPOINT}/v1/project"\n\npayload={\n  "name": "NewProject",\n  "desc": "This is a new project"\n}\n\nheaders = {\n  \'Authorization\': \'Bearer {JWT_TOKEN}\'\n}\n\nresponse = requests.request("POST", url, headers=headers, json=payload)\n\nprint(response.text)\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nvar myHeaders = new Headers();\nmyHeaders.append("Authorization", "Bearer {JWT_TOKEN}");\n\npayload: {\n  name: "NewProject",\n  desc: "This is a new project"\n}\n\nlet server = "{API_ENDPOINT}";\n\nfetch(server + "/v1/project?all=true", {\n  method: \'POST\',\n  headers: myHeaders,\n  body: JSON.stringify(payload)\n  })\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n\n')),(0,r.kt)("p",null,"If successful, response will return a single Project ID:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "status": "ok", "id": "0cbc57273c4b4d66acecbb5b49f1e559" }')),(0,r.kt)("p",null,"A project may be created based on a ",(0,r.kt)("strong",{parentName:"p"},"Project Template"),". Passing a ",(0,r.kt)("em",{parentName:"p"},"template name")," or ",(0,r.kt)("em",{parentName:"p"},"template ID"),"\nwill create a project that has pre-defined valid ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DataType")," records."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\nurl = f"{API_ENDPOINT}/v1/project"\n\npayload={\n  "name": "NewProjectWithTemplate",\n  "desc": "This is a new project with a template",\n  "template": "DeviceTemplates"\n}\n\nheaders = {\n  \'Authorization\': \'Bearer {JWT_TOKEN}\'\n}\n\nresponse = requests.request("POST", url, headers=headers, json=payload)\n\nprint(response.text)\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nvar myHeaders = new Headers();\nmyHeaders.append("Authorization", "Bearer {JWT_TOKEN}");\n\npayload: {\n  name: "NewProjectWithTemplate",\n  desc: "This is a new project with a template",\n  template: "DeviceTemplates"\n}\n\nlet server = "{API_ENDPOINT}";\n\nfetch(server + "/v1/project?all=true", {\n  method: \'POST\',\n  headers: myHeaders,\n  body: JSON.stringify(payload)\n  })\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n\n')),(0,r.kt)("h3",{id:"request-parameters-2"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Verb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"POST"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Security"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JWT Bearer Token"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"https://",(0,r.kt)("inlineCode",{parentName:"td"},"API Endpoint"),"/v1/project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON payload string")))),(0,r.kt)("h3",{id:"headers-2"},"Headers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Paramater"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,r.kt)("td",{parentName:"tr",align:null},'"Bearer ',(0,r.kt)("inlineCode",{parentName:"td"},"JWT Token"),'"')))),(0,r.kt)("h3",{id:"input-schema-2"},"Input Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Database GUID ID"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"desc"),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Description"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"template"),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Name of template"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"template_id"),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) GUID of template"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("h3",{id:"output-schema-2"},"Output Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of operations"),(0,r.kt)("td",{parentName:"tr",align:null},"String ('ok')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"GUID ID"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("p",null,"If the creation fails, the HTTP status code will be something other than 200, the output ",(0,r.kt)("em",{parentName:"p"},"status")," value will be ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"\nand an explanation message will be provided. For example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "status": "error", "message": "Project already exists" }')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of operations"),(0,r.kt)("td",{parentName:"tr",align:null},"String ('error')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"Error message"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("h2",{id:"modify-a-project"},"Modify a Project"),(0,r.kt)("p",null,"All attributes of a ",(0,r.kt)("em",{parentName:"p"},"Project")," (other than the GUID value) can be modified, if needed. To modify a Project,\nthe GUID needs to be specified."),(0,r.kt)("p",null,"When issuing HTTP/HTTPS requests, the JWT authentication token has to be provided in the request header.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/?http#authentication"},"Authentication")," for more  information."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PUT https://{{API_ENDPOINT}}/v1/project?id={project GUID}&project_name={new project name}")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PUT https://{{API_ENDPOINT}}/v1/project?id={project GUID}&desc={new description}")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Verb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PUT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Security"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JWT Bearer Token"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"https://",(0,r.kt)("inlineCode",{parentName:"td"},"API Endpoint"),"/v1/project")))),(0,r.kt)("h3",{id:"headers-3"},"Headers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Paramater"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,r.kt)("td",{parentName:"tr",align:null},'"Bearer ',(0,r.kt)("inlineCode",{parentName:"td"},"JWT Token"),'"')))),(0,r.kt)("h3",{id:"input-schema-3"},"Input Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Project ID"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project_name"),(0,r.kt)("td",{parentName:"tr",align:null},"New Project Name"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"desc"),(0,r.kt)("td",{parentName:"tr",align:null},"New Project Description"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("h3",{id:"output-schema-3"},"Output Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of operations"),(0,r.kt)("td",{parentName:"tr",align:null},"String ('ok')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"GUID ID"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("p",null,"If the modification fails, the HTTP status code will be something other than 200, the output ",(0,r.kt)("em",{parentName:"p"},"status")," value will be ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"\nand an explanation message will be provided. For example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "status": "error", "message": "Project not found" }')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of operations"),(0,r.kt)("td",{parentName:"tr",align:null},"String ('error')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"Error message"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("h2",{id:"delete-one-project"},"Delete One Project"),(0,r.kt)("p",null,"Deleting a project is a highly ",(0,r.kt)("strong",{parentName:"p"},"destructuve")," operation and should only be performed with care.\nThis operation cascades to delete all related entities, including models, device instances, datatypes, etc."),(0,r.kt)("p",null,"It will also remove related resources like AWS IOT Things, certificates, and policies."),(0,r.kt)("p",null,"When issuing HTTP/HTTPS requests, the JWT authentication token has to be provided in the request header.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/?http#authentication"},"Authentication")," for more  information."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DELETE https://{{API_ENDPOINT}}/v1/project?project={project name}")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DELETE https://{{API_ENDPOINT}}/v1/project?id={project GUID}")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Verb"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DELETE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Security"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JWT Bearer Token"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"https://",(0,r.kt)("inlineCode",{parentName:"td"},"API Endpoint"),"/v1/project")))),(0,r.kt)("h3",{id:"headers-4"},"Headers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Paramater"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,r.kt)("td",{parentName:"tr",align:null},'"Bearer ',(0,r.kt)("inlineCode",{parentName:"td"},"JWT Token"),'"')))),(0,r.kt)("h3",{id:"input-schema-4"},"Input Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Project ID"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Project Name"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("h3",{id:"output-schema-4"},"Output Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of operations"),(0,r.kt)("td",{parentName:"tr",align:null},"String ('ok')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"GUID ID"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("p",null,"If the deletion fails, the HTTP status code will be something other than 200, the output ",(0,r.kt)("em",{parentName:"p"},"status")," value will be ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"\nand an explanation message will be provided. For example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "status": "error", "message": "Project not found" }')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status of operations"),(0,r.kt)("td",{parentName:"tr",align:null},"String ('error')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"Error message"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("h2",{id:"get-all-models-1"},"Get All Models"),(0,r.kt)("h2",{id:"get-one-model"},"Get One Model"),(0,r.kt)("h2",{id:"add-model"},"Add Model"),(0,r.kt)("h2",{id:"delete-model"},"Delete Model"),(0,r.kt)("h2",{id:"update-model"},"Update Model"))}u.isMDXComponent=!0}}]);