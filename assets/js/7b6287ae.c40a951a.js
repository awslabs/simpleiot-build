"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[5632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return n?o.createElement(k,i(i({ref:t},m),{},{components:n})):o.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={id:"sensors",title:"Fun with Sensors"},i=void 0,l={unversionedId:"workshops/starter/sensors",id:"workshops/starter/sensors",title:"Fun with Sensors",description:"Putting the Pieces Together",source:"@site/docs/workshops/starter/sensors.md",sourceDirName:"workshops/starter",slug:"/workshops/starter/sensors",permalink:"/simpleiot-build/docs/workshops/starter/sensors",draft:!1,tags:[],version:"current",frontMatter:{id:"sensors",title:"Fun with Sensors"},sidebar:"theSidebar",previous:{title:"Hello World",permalink:"/simpleiot-build/docs/workshops/starter/hello-world"},next:{title:"Next Steps",permalink:"/simpleiot-build/docs/workshops/starter/next"}},s={},p=[{value:"Putting the Pieces Together",id:"putting-the-pieces-together",level:3},{value:"Setting Up Your Sensor Demo Project",id:"setting-up-your-sensor-demo-project",level:3},{value:"Cleanup",id:"cleanup",level:2},{value:"What you learned",id:"what-you-learned",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"putting-the-pieces-together"},"Putting the Pieces Together"),(0,r.kt)("p",null,"Here is a diagram of how all the pieces connect: "),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/simpleiot-build/img/workshops/starter/sensor-connection.png"})),(0,r.kt)("p",null,"And here's what the actual sensors look like:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/simpleiot-build/img/workshops/starter/GPS.png",width:"50%"})),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/simpleiot-build/img/workshops/starter/edukit-connector.png",width:"80%"})),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/simpleiot-build/img/workshops/starter/Encoder_and_Env.png",width:"50%"})),(0,r.kt)("p",null,"Now that you know the parts involved, let's connect everything we'll need to the AWS IoT EduKit:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Insert the wire on the GPS Unit into Port C on the EduKit as shown below.")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/simpleiot-build/img/workshops/starter/GPS_to_EduKit.png",width:"50%"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Insert the wires from the Encoder and the ENV III into the Grove Connector hub as shown. ")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/simpleiot-build/img/workshops/starter/Sensor-Wiring.png",width:"50%"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Insert the wire from the Grove Connector hub into Port A on the EduKit (keep in mind that Port A is next to the USB-C port and is the only port that is NOT labeled).")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/simpleiot-build/img/workshops/starter/Sensor_to_EduKit.png",width:"50%"})),(0,r.kt)("h3",{id:"setting-up-your-sensor-demo-project"},"Setting Up Your Sensor Demo Project"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a Project with the SensorDemo template, making sure to use a unique name for the Project that does not match any other Team member's: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  iot project add \u2013-name=Sensor-{your name}  --template=SensorDemo\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"List the components installed:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  iot project list --name={project} --full \n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Pro Tip"),": Set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"IOT_PROJECT")," to the name of your project and you can leave out the ",(0,r.kt)("inlineCode",{parentName:"p"},"--project={project}")," in all subsequent commands. Check out ",(0,r.kt)("a",{parentName:"p",href:"team-member"},"Joining the Team")," to see how if you haven't already done so. We'll be doing this going forward!"),(0,r.kt)("p",{parentName:"admonition"},"On the Mac Terminal or iTerm:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},' export IOT_PROJECT="my-project"\n')),(0,r.kt)("p",{parentName:"admonition"},"On Windows Powershell:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},' $env:IOT_PROJECT="my-project"\n'))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"List the Model information:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," iot model list --name=SensorModel --full\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Yet Another Pro Tip")),(0,r.kt)("p",{parentName:"admonition"},"You can also set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"IOT_MODEL")," to the name of your project and then leave out the ",(0,r.kt)("inlineCode",{parentName:"p"},"--model=SensorModel")," in all subsequent commands. Again, check out ",(0,r.kt)("a",{parentName:"p",href:"team-member"},"Joining the Team")," to see how. We'll be doing this going forward as well. "),(0,r.kt)("p",{parentName:"admonition"},"On the Mac Terminal or iTerm:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},' export IOT_MODEL="SensorModel"\n')),(0,r.kt)("p",{parentName:"admonition"},"On Windows Powershell:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},' $env:IOT_MODEL="SensorModel"\n'))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"If you followed the two Pro Tips above, enter:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iot datatype list\n")),(0,r.kt)("p",null,"If you didn't set the evironment variables, enter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iot datatype list --project={project} --model=SensorModel\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"As detailed in the ",(0,r.kt)("a",{parentName:"li",href:"hello-world"},"Hello World")," instructions, make sure your WiFi credentials are set appropriately:")),(0,r.kt)("p",null,"On Windows: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  $env:IOT_WIFI_SSID="{your ssid}"\n  $env:IOT_WIFI_PASSWORD="{your password}"\n')),(0,r.kt)("p",null,"On Mac: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  export IOT_WIFI_SSID="{your ssid}"\n  export IOT_WIFI_PASSWORD="{your password}"\n')),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Add a device instance with a unique serial number of your choosing (assuming ",(0,r.kt)("inlineCode",{parentName:"li"},"IOT_PROJECT")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"IOT_MODEL")," environment variables were set):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iot device add --serial={unique serial number}\n")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Generate the code:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iot firmware generate --serial={serial number}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"(Optional) Expand the zip file that has been generated in your directory and inspect the contents that were generated. "),(0,r.kt)("p",{parentName:"admonition"},"The file will be named ",(0,r.kt)("em",{parentName:"p"},"sensor-demo-m5-arduino-esp32.zip"),".")),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"With your EduKit connected to your computer via the USB-C cable, build and flash the firmware: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iot firmware flash --zip=sensor-demo-m5-arduino-esp32.zip\n")),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"Open the monitor in your terminal screen via:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iot device monitor --serial={serial}\n")),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"Wait until the device is connected to the cloud. Once connected, you should see data on the screen.")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/simpleiot-build/img/workshops/starter/sensordemo-screen-01.jpg",width:"50%"})),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/simpleiot-build/img/workshops/starter/sensordemo-screen-02.jpg",width:"50%"})),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/simpleiot-build/img/workshops/starter/sensordemo-screen-03.jpg",width:"50%"})),"13. Rotate the knob on the Encoder, then look at the monitor window to see what is being sent.",(0,r.kt)("ol",{start:14},(0,r.kt)("li",{parentName:"ol"},"Breathe on the ENV III sensor, and the humidity should go up as noted in the monitor.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Data is not sent unless it goes past a certain delta threshold. This is to avoid flooding your AWS Account with irrelevant or unnecessary sensor data.")),(0,r.kt)("ol",{start:15},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Place the GPS Unit component (still attached to the EduKit, naturally) against a window to get a GPS signal. After a few minutes, you should see the EduKit screen icons change and will also see raw data that is being sent to the cloud displayed on your monitor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("em",{parentName:"p"},"CTRL-C")," to get out of your monitor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Send a command from the console to your EduKit, as you did in ",(0,r.kt)("em",{parentName:"p"},"Hello World")," example. Similar to that example, values can be ",(0,r.kt)("em",{parentName:"p"},"red"),"/",(0,r.kt)("em",{parentName:"p"},"green"),"/",(0,r.kt)("em",{parentName:"p"},"blue"),"/",(0,r.kt)("em",{parentName:"p"},"off"),", but this command changes the colors of the light bars on the side of the EduKit: "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iot data set --project={project} --serial={serial} --name=color --value=red\n")),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/simpleiot-build/img/workshops/starter/sensordemo-color-change.jpg",width:"70%"})),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/simpleiot-build/img/workshops/starter/sensordemo-led-color.jpg",width:"70%"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Congratulations!!!")," "),(0,r.kt)("p",{parentName:"admonition"},"You have successfully mastered setting up and demonstrating the various sensors. ")),(0,r.kt)("h2",{id:"cleanup"},"Cleanup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To delete a single Device, enter:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iot device delete --project={project} --serial={serial}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"To delete the entire Project:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iot project delete --name={project}\n")),(0,r.kt)("p",null,"3To confirm that the Project is gone: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iot project list\n")),(0,r.kt)("h2",{id:"what-you-learned"},"What you learned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to connect wired sensors to the EduKit."),(0,r.kt)("li",{parentName:"ul"},"To generate code to communicate with sensors and send data securely to/from the cloud."),(0,r.kt)("li",{parentName:"ul"},"To send environmental, location-based/GPS, and user-controlled (rotary knob) data to the cloud."),(0,r.kt)("li",{parentName:"ul"},"How to send real-time commands from the cloud ",(0,r.kt)("em",{parentName:"li"},"back")," to a hardware component (the LED bars).")))}d.isMDXComponent=!0}}]);