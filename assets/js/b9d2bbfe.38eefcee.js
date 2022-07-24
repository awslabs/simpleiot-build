"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[4673],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4679:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={id:"mqtt",title:"MQTT Topics"},r=void 0,l={unversionedId:"documentation/data/mqtt",id:"documentation/data/mqtt",title:"MQTT Topics",description:"PubSub",source:"@site/docs/documentation/data/mqtt.md",sourceDirName:"documentation/data",slug:"/documentation/data/mqtt",permalink:"/docs/documentation/data/mqtt",draft:!1,tags:[],version:"current",frontMatter:{id:"mqtt",title:"MQTT Topics"},sidebar:"theSidebar",previous:{title:"Digital Twins",permalink:"/docs/documentation/data/twin"},next:{title:"Data Lake",permalink:"/docs/documentation/data/datalake"}},s={},p=[{value:"PubSub",id:"pubsub",level:2},{value:"Topics",id:"topics",level:3},{value:"Payload",id:"payload",level:3},{value:"PubSub modes",id:"pubsub-modes",level:3},{value:"SimpleIOT and MQTT",id:"simpleiot-and-mqtt",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pubsub"},"PubSub"),(0,o.kt)("p",null,"SimpleIOT connects to AWS IoT Core via the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html"},"MQTT protocol"),". "),(0,o.kt)("p",null,"MQTT works on the principle of a central hub called a ",(0,o.kt)("em",{parentName:"p"},"broker")," and one or more Publishers and Subscribers. This is also known as a ",(0,o.kt)("em",{parentName:"p"},"PubSub System"),", meaning that one or more entities connected to the service can ",(0,o.kt)("em",{parentName:"p"},"Publish")," data onto it, and one or more of those interested in receiving the data can ",(0,o.kt)("em",{parentName:"p"},"Subscribe")," to receive notifications when the data arrives."),(0,o.kt)("p",null,"The simplest form is a single publisher, a broker, and a single subscriber:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/img/data/mqtt-pub-sub-1-1.png",width:"80%"})),(0,o.kt)("p",null),(0,o.kt)("p",null,"When publishing to MQTT, you can specify two things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Topic"),": this is a string indicating a named ",(0,o.kt)("em",{parentName:"li"},"slot")," or ",(0,o.kt)("em",{parentName:"li"},"channel")," into which data is sent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payload"),": the content of the data to be put into that slot or channel. This is often a JSON data structure, but it can be whatever you want.")),(0,o.kt)("h3",{id:"topics"},"Topics"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Topics")," typically take the form of a series of names, separated by slashes. This allows you to create an arbitrary naming hierarchy. For example, data from a thermometer with the name TM-1 can be sent to the channel:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tm-1\n")),(0,o.kt)("p",null,"But if the thermometer is installed in a room numbered r101, you may want to send the data to a topic named:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"r101/tm-1\n")),(0,o.kt)("p",null,"And if you had a light sensor and a switch and a window shade in the same room, data coming and going to each device could each be sent to their own channel:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"r101/tm-1\nr101/ls-1\nr101/sw-1\nr101/ws-1\n")),(0,o.kt)("p",null,"When ",(0,o.kt)("em",{parentName:"p"},"subscribing")," to a channel, if you were interested in ONLY the temperature sensor in room r101, you would be subscribing to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"r101/tm-1\n")),(0,o.kt)("p",null,"But if you want to be notified of ALL temperature sensors, you could use a wild-card and subscribe to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"*/tm-1\n")),(0,o.kt)("p",null,"If you were interested in ALL devices in room r101 you may want to subscribe to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"r101/*\n")),(0,o.kt)("p",null,"If room r101 is in building b2, you may want to use a topic hierarchy that allows for more granularity. For example, maybe you want to be able to look for data on a single floor, and since room r101 is on the 8th floor, your topic for data from the thermometer may look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"b2/f8/r101/tm-1\n")),(0,o.kt)("p",null,"Think of this as a hierarchy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  b2 +\n     |\n     + f8 +\n          |\n          + r101 +\n                 |\n                 + tm -1\n")),(0,o.kt)("p",null,"MQTT also has a concept of single and multiple levels of wildcards with ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," characters. For example, you can subscribe to ",(0,o.kt)("inlineCode",{parentName:"p"},"#/f8/#/#")," to subscribe to all devices from any room and device on the 8th floor of any building. "),(0,o.kt)("h3",{id:"payload"},"Payload"),(0,o.kt)("p",null,"The payload is the data written into that named ",(0,o.kt)("em",{parentName:"p"},"slot")," or ",(0,o.kt)("em",{parentName:"p"},"channel"),". This could be anything you want but is often structured into a JSON packet for easier debugging and legibility."),(0,o.kt)("p",null,"For example, a temperature sensor may want to send the current temperature reading into its own channel:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Topic: b2/f8/r101/tm-1\nPayload: {\n         "temp": 78.3,\n         "units": "F",\n         "timestamp": 3221188\n         }\n')),(0,o.kt)("p",null,"The recipient listening to this channel would then be given the content of the ",(0,o.kt)("em",{parentName:"p"},"payload"),", to do with as they please."),(0,o.kt)("p",null,"Note that you could just as well put the data that you might otherwise put in the topic in the payload itself: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Topic: mydata\nPayload: {\n         "building": "b2",\n         "floor": "f8",\n         "room": "r101",\n         "device": "tm-1",\n         "temp": 78.3,\n         "units": "F",\n         "timestamp": 3221188\n         }\n')),(0,o.kt)("p",null,"However, you would no longer be able to do wildcard filtering based on the topic hierarchy. This is a design choice you would have to make."),(0,o.kt)("p",null,"Again, the payload can be whatever you want. How the topic naming hierarchy is designed is up to you. In AWS IoT, the design of the topic and the payload is an important part of the design of an overall system, meriting its own whitepaper and best practices: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/whitepapers/latest/designing-mqtt-topics-aws-iot-core/designing-mqtt-topics-aws-iot-core.html"},"Designing MQTT Topics for AWS IoT Core"),"."),(0,o.kt)("h3",{id:"pubsub-modes"},"PubSub modes"),(0,o.kt)("p",null,"We showed above a notion of a single publisher, a broker, and a subscriber. This is considered a one-to-one model."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/img/data/mqtt-pub-sub-1-1.png",width:"80%"})),(0,o.kt)("p",null),(0,o.kt)("p",null,"MQTT also supports the notion of many publishers (i.e., many devices sending data to the cloud):"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/img/data/mqtt-pub-sub-many-1.png",width:"80%"})),(0,o.kt)("p",null),(0,o.kt)("p",null,"Also, one publisher and many subscribers (i.e., one device sending data and multiple listeners -- for example, a logging system, a dashboard, a command-line interface, a mobile app, etc.)"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/img/data/mqtt-pub-sub-1-many.png",width:"80%"})),(0,o.kt)("p",null),(0,o.kt)("p",null,"And, of course, many publishers and many subscribers:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/img/data/mqtt-pub-sub-many-many.png",width:"80%"})),(0,o.kt)("p",null),(0,o.kt)("h3",{id:"simpleiot-and-mqtt"},"SimpleIOT and MQTT"),(0,o.kt)("p",null,"SimpleIOT is an ",(0,o.kt)("em",{parentName:"p"},"opinionated")," framework, meaning it has taken a common design pattern and embedded it with so-called ",(0,o.kt)("em",{parentName:"p"},"sane defaults"),". "),(0,o.kt)("p",null,"The benefit is out-of-the-box, you do not have to worry about designing your own MQTT topics and payloads. However, if you want full control over those issues and create your own topics, you can add those without disrupting the system's core functionality."),(0,o.kt)("p",null,"If you are unfamiliar with the basic Project / Model taxonomy, it is highly recommended that you read the ",(0,o.kt)("a",{parentName:"p",href:"/docs/intro"},"Basic Concept")," introductory section."),(0,o.kt)("p",null,"Here is what a typical SimpleIOT topic and payload look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Topic: simpleiot_v1/app/set/proj-01/model-ABC/SN-4387\nPayload: {\n        "action": "set",\n        "project": "proj-01",\n        "model": "model-ABC",\n        "serial": "SN-4387",\n        "name": "temperature",\n        "value": "78.2"\n}\n')),(0,o.kt)("p",null,"If the data has geographic/GPS data associated with it, it will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Topic: simpleiot_v1/app/set/proj-01/model-ABC/SN-4387\nPayload: {\n        "action": "set",\n        "project": "proj-01",\n        "model": "model-ABC",\n        "serial": "SN-4387",\n        "name": "temperature",\n        "value": "78.2",\n        "geo_lat": "22.23423",\n        "goe_lng": "-122.4323"\n}\n')),(0,o.kt)("p",null,"The SimpleIOT MQTT topic hierarchy is designed as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"simpleiot_v1"),": This is a prefix with the protocol version embedded in it. This means your application topics should never interfere with SimpleIOT data. It also allows you to filter messages sent by SimpleIOT from other types of applications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"app"),": SimpleIOT separates data sent to/from a device into several streams, depending on the domain. In this case, these could be:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"/hw"),": hardware level operations, like voltages, calibrations, RAM levels, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"/sys"),": operating system or firmware level operations, like versions, manufacturer IDs, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"/adm"),": Administrative operation involving device registry, provisioning, ownership, location placement, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"/app"),": Application level values, for example, whether an application has run, what the sensor values are, what button has been pressed, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"/user"),": Userlevel values. They may contain Personally-Identifiable-Information (PII), like user IDs or usernames. This allows user data on the broker side to be filtered and sent to separate data repositories to comply with regulatory rules. If a device supports multiple user profiles, this mechanism can also be used to signal to switch between users."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"action"),": An operation to be performed on individual data elements. The most common are ",(0,o.kt)("em",{parentName:"li"},"set"),", ",(0,o.kt)("em",{parentName:"li"},"get"),", and ",(0,o.kt)("em",{parentName:"li"},"monitor"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"project name"),": Name of the SimpleIOT Project."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"model name"),": Model name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"serial number"),": Device serial number of this specific device."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),": Name of the Datatype for which we send a value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"value"),": Value of the Data element for this specific device associated with that ",(0,o.kt)("em",{parentName:"li"},"name"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"action"),", ",(0,o.kt)("em",{parentName:"p"},"project"),", ",(0,o.kt)("em",{parentName:"p"},"model"),", and ",(0,o.kt)("em",{parentName:"p"},"serial")," values are replicated in the body. This is so that mechanisms along the way that filter for MQTT topics (such as AWS IoT Rules) can redirect the data to proper targets. But once the data is sent to a downstream data repository or analytics service, the topic data will no longer be available. The payload contains the same information so that analytics can be performed based on the values in the payload."),(0,o.kt)("p",null,"By default, the payload is sent to a Lambda function that then re-distributes it to a variety of destinations (see the ",(0,o.kt)("a",{parentName:"p",href:"flow"},"Data Flow")," section for more on this). However, you can redirect the data to other AWS services based on your needs by filtering the MQTT topic in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html"},"IoT Core rules"),"."),(0,o.kt)("p",null,"All data sent from a device is received by a lambda, which checks to see if the ",(0,o.kt)("em",{parentName:"p"},"name")," field is valid (if not, it discards the data). If valid, it sends the data to DynamoDB, RDS, and Timestream databases, and if the ",(0,o.kt)("inlineCode",{parentName:"p"},"show_on_twin")," attribute of the Datatype is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", it re-publishes the data to the following topic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"simpleiot_v1/app/monitor/{project}/{model}/{device-serial-number}\n")),(0,o.kt)("p",null,"This allows subscribers to monitor changes in data, such as the ",(0,o.kt)("a",{parentName:"p",href:"/docs/documentation/cli/device#iot-device-monitor"},"iot device monitor")," command or GUI dashboards or application logging systems to present changes in data in real-time."))}d.isMDXComponent=!0}}]);