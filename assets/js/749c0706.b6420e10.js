"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[194],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=o(a),k=l,y=s["".concat(p,".").concat(k)]||s[k]||u[k]||r;return a?n.createElement(y,i(i({ref:t},m),{},{components:a})):n.createElement(y,i({ref:t},m))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:l,i[1]=d;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));const r={id:"datatype",title:"DataType"},i=void 0,d={unversionedId:"documentation/cli/datatype",id:"documentation/cli/datatype",title:"DataType",description:"A Datatype is a definition of a single item that can be exchanged with the cloud. The values can go both ways (from device to cloud and vice versa). Datatypes are associated with Models. Once a single instance of a Model is created, and values are set, a single Data record is created for each device, with attributes derived from the DataType.",source:"@site/docs/documentation/cli/datatype.md",sourceDirName:"documentation/cli",slug:"/documentation/cli/datatype",permalink:"/simpleiot-build/docs/documentation/cli/datatype",draft:!1,tags:[],version:"current",frontMatter:{id:"datatype",title:"DataType"},sidebar:"theSidebar",previous:{title:"Data",permalink:"/simpleiot-build/docs/documentation/cli/data"},next:{title:"Device",permalink:"/simpleiot-build/docs/documentation/cli/device"}},p={},o=[{value:"iot datatype add",id:"iot-datatype-add",level:2},{value:"Parameters",id:"parameters",level:3},{value:"iot datatype list",id:"iot-datatype-list",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"iot datatype update",id:"iot-datatype-update",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"iot datatype delete",id:"iot-datatype-delete",level:2},{value:"Parameters",id:"parameters-3",level:3}],m={toc:o};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'iot datatype add \n    [--team="team-name"] \n    --project=project-name\n    --model=model-name \n    --name=datatype-name\n    [--desc="description"] \n    [--type=type-name]\n    [--data_type=type-name]\n    [--units=type-units-name]\n    [--show_on_twin=true|false]\n    [--data_position=3d-position-on-twin]\n    [--data_normal=3d-normal-on-twin]\n    [--label_template=label-template-string]\n\niot datatype list\n    [--team="team-name"] \n    [--project=project-name]\n    [--model=model-name]\n    [--name=datatype-name]\n    [--id=datatype-id]\n    [--full]\n\niot datatype update \n    [--team="team-name"] \n    [--project=project-name]\n    [--model=model-name]\n    [--name=datatype-name]\n    [--id=datatype-id]\n    [--desc="description"]\n    [--type=type-name]\n    [--data_type=type-name]\n    [--units=type-units-name]\n    [--show_on_twin=true|false]\n    [--data_position=3d-position-on-twin]\n    [--data_normal=3d-normal-on-twin]\n    [--label_template=label-template-string]\n\niot datatype delete \n    [--team="team-name"] \n    [--project=project-name] \n    [--model=model-name]\n    [--name=datatype-name]\n    [--id=datatype-id]\n')),(0,l.kt)("br",null),"A **Datatype** is a definition of a single item that can be exchanged with the cloud. The values can go both ways (from device to cloud and vice versa). Datatypes are associated with Models. Once a single instance of a Model is created, and values are set, a single `Data` record is created for each device, with attributes derived from the DataType.",(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can avoid having to enter the ",(0,l.kt)("inlineCode",{parentName:"p"},"--team"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--project"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"--model")," parameter for every command by defining a corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"IOT_TEAM"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"IOT_PROJECT"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"IOT_MODEL")," environment variables."),(0,l.kt)("p",{parentName:"admonition"},"In the following examples, it is assumed that the IOT_TEAM variable is set ahead of time so it will not be repeated for each command.")),(0,l.kt)("p",null,"On the Mac:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'> export IOT_TEAM="my-team-name"\n> export IOT_PROJECT="my-project"\n> export IOT_MODEL="my-model"\n\n> iot datatype list\n')),(0,l.kt)("p",null,"On Windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'> $env:IOT_TEAM="my-team-name"\n> $env:IOT_PROJECT="my-project"\n> $env:IOT_MODEL="my-model"\n\n> iot datatype list\n')),(0,l.kt)("h2",{id:"iot-datatype-add"},"iot datatype add"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'iot datatype add \n    [--team="team-name"] \n    --project=project-name\n    --model=model-name \n    --name=datatype-name\n    [--desc="description"] \n    [--type=type-name]\n    [--data_type=type-name]\n    [--units=type-units-name]\n    [--show_on_twin=true|false]\n    [--data_position=3d-position-on-twin]\n    [--data_normal=3d-normal-on-twin]\n    [--label_template=label-template-string]\n')),(0,l.kt)("br",null),"Adds a single DataType to a Model. DataType values are mostly coerced to strings for storage and transmittal.",(0,l.kt)("p",null,"However, type hints can be passed via the ",(0,l.kt)("inlineCode",{parentName:"p"},"--type")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--data_type")," parameters. Clients can use these to coerce the value to a known type."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--project")),(0,l.kt)("td",{parentName:"tr",align:null},"Project Name"),(0,l.kt)("td",{parentName:"tr",align:null},"(Required) Name of the project. Alternately, define an environment variable ",(0,l.kt)("inlineCode",{parentName:"td"},"IOT_PROJECT")," with the project's name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--model")),(0,l.kt)("td",{parentName:"tr",align:null},"Model Name"),(0,l.kt)("td",{parentName:"tr",align:null},"(Required) Name of the model. Alternately, define an environment variable ",(0,l.kt)("inlineCode",{parentName:"td"},"IOT_MODEL")," with the model's name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--name")),(0,l.kt)("td",{parentName:"tr",align:null},"DataType Name"),(0,l.kt)("td",{parentName:"tr",align:null},"(Required) name of datatype to create. Must be unique within the Model.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--desc")),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) description attached to datatype.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--type")),(0,l.kt)("td",{parentName:"tr",align:null},"DataType name"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) type hint. Examples: ",(0,l.kt)("em",{parentName:"td"},"integer"),", ",(0,l.kt)("em",{parentName:"td"},"string"),", ",(0,l.kt)("em",{parentName:"td"},"float"),". Defaults to ",(0,l.kt)("em",{parentName:"td"},"integer"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--data_type")),(0,l.kt)("td",{parentName:"tr",align:null},"DataType name"),(0,l.kt)("td",{parentName:"tr",align:null},"Alias for ",(0,l.kt)("em",{parentName:"td"},"--type"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--units")),(0,l.kt)("td",{parentName:"tr",align:null},"DataType units"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) not enforced. suffix indicating the type of value. Examples: ",(0,l.kt)("em",{parentName:"td"},"psi"),", ",(0,l.kt)("em",{parentName:"td"},"lbs"),". Used for displaying units.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--show_on_twin")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Whether value will be shown on digital twin. It also determines whether a change in value is broadcast back in the ",(0,l.kt)("em",{parentName:"td"},"monitor")," topic. If set to ",(0,l.kt)("em",{parentName:"td"},"false"),", values will not be shown in applications that display data in real-time. Default is ",(0,l.kt)("em",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--data_position")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'(Optional) 3D position of label on digital twin. In the form "X, Y, Z" expected by ',(0,l.kt)("a",{parentName:"td",href:"https://modelviewer.dev/"},"ModelViewer"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--data_normal")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) 3D normal of label on digital twin. In the form expected by ",(0,l.kt)("a",{parentName:"td",href:"https://modelviewer.dev/"},"ModelViewer"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--label_template")," ","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"DataType label template"),(0,l.kt)("td",{parentName:"tr",align:null},'(Optional) Formatted string that will be evaluated and returned. for each value. The string is a template where other values can be substituted at runtime. For example, the value can be "{name}: {value} {units}" and at runtime, this label will evaluate to, say, "pressure: 12 psi"')))),(0,l.kt)("p",null,"Basic example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> iot datatype add --project=my-project --model=my-model --name=my_datatype_name\n")),(0,l.kt)("h2",{id:"iot-datatype-list"},"iot datatype list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'iot datatype list\n    [--team="team-name"] \n    [--project=project-name]\n    [--model=model-name]\n    [--name=datatype-name]\n    [--id=datatype-id]\n    [--full]\n')),(0,l.kt)("br",null),"Use the' list' command to get a list of all Datatypes. You can request specific Datatypes by name or ID. Add the'- full' flag to get detailed information on a single Datatype.",(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--project")," ","\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"Project Name"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) name of 'project' to create. Alternately, define an environment variable ",(0,l.kt)("inlineCode",{parentName:"td"},"IOT_PROJECT")," with the project's name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--model")),(0,l.kt)("td",{parentName:"tr",align:null},"Model Name"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) name of 'model'.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--name")),(0,l.kt)("td",{parentName:"tr",align:null},"DataType Name"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) name of ",(0,l.kt)("inlineCode",{parentName:"td"},"Datatype")," to list.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--id")),(0,l.kt)("td",{parentName:"tr",align:null},"DataType ID"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) ID of DataType to show. You can use either Project/Model/Name or the unique ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--full")),(0,l.kt)("td",{parentName:"tr",align:null},"Flag"),(0,l.kt)("td",{parentName:"tr",align:null},"If specified, it will display full information on a single DataType.")))),(0,l.kt)("p",null,"To get a list of all DataTypes in a Model:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> iot datatype list --project=my-project-name --model=my-model-name\n")),(0,l.kt)("p",null,"To get information on a single datatype by name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> iot datatype list --project=my-project-name --model=my-model-name --name=my-datatype-name\n")),(0,l.kt)("p",null,"To get information on a single datatype by ID:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> iot datatype list --id=datatype-id\n")),(0,l.kt)("p",null,"To get complete information on a single DataType, specify either project/model/name or ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," and a ",(0,l.kt)("inlineCode",{parentName:"p"},"--full")," flag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> iot datatype list --project=my-project-name --model=my-model-name --name=my-datatype-name --full\n")),(0,l.kt)("p",null,"Or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> iot datatype list --id=my-datatype-id --full\n")),(0,l.kt)("h2",{id:"iot-datatype-update"},"iot datatype update"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'iot datatype update \n    [--team="team-name"] \n    [--project=project-name]\n    [--model=model-name]\n    [--name=datatype-name]\n    [--id=datatype-id]\n    [--desc="description"]\n    [--type=type-name]\n    [--data_type=type-name]\n    [--units=type-units-name]\n    [--show_on_twin=true|false]\n    [--data_position=3d-position-on-twin]\n    [--data_normal=3d-normal-on-twin]\n    [--label_template=label-template-string]\n')),(0,l.kt)("br",null),(0,l.kt)("p",null,"Most attributes of a ",(0,l.kt)("em",{parentName:"p"},"DataType")," (other than the ID value, Project, Model, and Name) can be modified if needed. To alter a DataType's name, the ID needs to be specified. If Project or Model names are specified, they are used to look up the specific record."),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--project")),(0,l.kt)("td",{parentName:"tr",align:null},"Project Name"),(0,l.kt)("td",{parentName:"tr",align:null},"name of the project. Alternately, define an environment variable ",(0,l.kt)("inlineCode",{parentName:"td"},"IOT_PROJECT")," with the project's name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--model")),(0,l.kt)("td",{parentName:"tr",align:null},"Model Name"),(0,l.kt)("td",{parentName:"tr",align:null},"name of the model. Alternately, define an environment variable ",(0,l.kt)("inlineCode",{parentName:"td"},"IOT_MODEL")," with the model's name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--name")),(0,l.kt)("td",{parentName:"tr",align:null},"DataType Name"),(0,l.kt)("td",{parentName:"tr",align:null},"name of datatype to create. Must be unique within the Model.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--id")),(0,l.kt)("td",{parentName:"tr",align:null},"DataType ID"),(0,l.kt)("td",{parentName:"tr",align:null},"Instead of project/model/name, you can specify the unique ID assigned to the datatype")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--desc")),(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) description attached to datatype.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--type")),(0,l.kt)("td",{parentName:"tr",align:null},"DataType name"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) type hint. Examples: ",(0,l.kt)("em",{parentName:"td"},"integer"),", ",(0,l.kt)("em",{parentName:"td"},"string"),", ",(0,l.kt)("em",{parentName:"td"},"float"),". Defaults to ",(0,l.kt)("em",{parentName:"td"},"integer"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--data_type")),(0,l.kt)("td",{parentName:"tr",align:null},"DataType name"),(0,l.kt)("td",{parentName:"tr",align:null},"Alias for ",(0,l.kt)("em",{parentName:"td"},"--type"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--units")),(0,l.kt)("td",{parentName:"tr",align:null},"DataType units"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) not enforced. suffix indicating the type of value. Examples: ",(0,l.kt)("em",{parentName:"td"},"psi"),", ",(0,l.kt)("em",{parentName:"td"},"lbs"),". Used for displaying units.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--show_on_twin")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Whether value will be shown on digital twin. It also determines whether a change in value is broadcast back in the ",(0,l.kt)("em",{parentName:"td"},"monitor")," topic. If set to ",(0,l.kt)("em",{parentName:"td"},"false"),", values can not be shown in display applications in real-time. Default is ",(0,l.kt)("em",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--data_position")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},'(Optional) 3D position of label on digital twin. In the form "X, Y, Z" expected by ',(0,l.kt)("a",{parentName:"td",href:"https://modelviewer.dev/"},"ModelViewer"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--data_normal")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) 3D normal of label on digital twin. In the form expected by ",(0,l.kt)("a",{parentName:"td",href:"https://modelviewer.dev/"},"ModelViewer"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--label_template")," ","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"DataType label template"),(0,l.kt)("td",{parentName:"tr",align:null},'(Optional) Formatted string that will be evaluated and returned. for each value. The string is a template where other values can be substituted at runtime. For example, the value can be "{name}: {value} {units}" and at runtime, this label will evaluate to, say, "pressure: 12 psi"')))),(0,l.kt)("h2",{id:"iot-datatype-delete"},"iot datatype delete"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'iot datatype delete \n    [--team="team-name"] \n    [--project=project-name] \n    [--model=model-name]\n    [--name=datatype-name]\n    [--id=datatype-id]\n')),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Deleting or adding a Datatype for a model AFTER a device of this type has been created may cause unexpected results if existing data records are referenced.")),(0,l.kt)("h3",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--project")," ","\xa0","\xa0","\xa0","\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"Project Name"),(0,l.kt)("td",{parentName:"tr",align:null},"name of project. Alternately, define an environment variable ",(0,l.kt)("inlineCode",{parentName:"td"},"IOT_PROJECT")," with the project's name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--model")),(0,l.kt)("td",{parentName:"tr",align:null},"Model Name"),(0,l.kt)("td",{parentName:"tr",align:null},"name of the model. Alternately, define an environment variable ",(0,l.kt)("inlineCode",{parentName:"td"},"IOT_MODEL")," with the model's name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--name")),(0,l.kt)("td",{parentName:"tr",align:null},"DataType Name"),(0,l.kt)("td",{parentName:"tr",align:null},"name of datatype to create. Must be unique within the Model.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--id")),(0,l.kt)("td",{parentName:"tr",align:null},"DataType ID"),(0,l.kt)("td",{parentName:"tr",align:null},"Instead of project/model/name, you can specify the unique ID assigned to the datatype")))),(0,l.kt)("p",null,"To delete a datatype, use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> iot datatype delete --project=my-project-name --model=my-model-name --name=my-datatype-name\n")),(0,l.kt)("p",null,"Or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> iot datatype delete --id=my-datatype-id\n")))}u.isMDXComponent=!0}}]);