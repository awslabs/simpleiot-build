"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[1690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return r?o.createElement(k,l(l({ref:t},c),{},{components:r})):o.createElement(k,l({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={id:"hello-world",title:"Hello World"},l=void 0,i={unversionedId:"workshops/starter/hello-world",id:"workshops/starter/hello-world",title:"Hello World",description:"Your First SimpleIOT Project",source:"@site/docs/workshops/starter/hello-world.md",sourceDirName:"workshops/starter",slug:"/workshops/starter/hello-world",permalink:"/docs/workshops/starter/hello-world",draft:!1,tags:[],version:"current",frontMatter:{id:"hello-world",title:"Hello World"},sidebar:"theSidebar",previous:{title:"Joining the Team",permalink:"/docs/workshops/starter/team-member"},next:{title:"Fun with Sensors",permalink:"/docs/workshops/starter/sensors"}},p={},s=[{value:"Your First SimpleIOT Project",id:"your-first-simpleiot-project",level:2},{value:"Cleanup",id:"cleanup",level:2},{value:"What you learned",id:"what-you-learned",level:2},{value:"Next...",id:"next",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"your-first-simpleiot-project"},"Your First SimpleIOT Project"),(0,n.kt)("p",null,'Let\'s kick things off by deploying your first SimpleIOT Project with a traditional "Hello, World!" example. '),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Issue the following command, substituting your name (without the braces and with no spaces or special characters) where noted: ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  iot project add --name={your name}-hello --template=HelloWorldM5\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Please note that all names are case-sensitive.")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Confirm your Project now exists:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  iot project list\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"To see what model was created within the Project, type:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  iot model list --project={project} --name=HelloWorldModel --full\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Similarly for datatypes, issue the command:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"iot datatype list --project={project} --model=HelloWorldModel\n")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Set up environment variables with your network information:  ")),(0,n.kt)("p",null,"On Windows: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  $env:IOT_WIFI_SSID="{your ssid}"\n  $env:IOT_WIFI_PASSWORD="{your password}"\n')),(0,n.kt)("p",null,"On Mac: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  export IOT_WIFI_SSID="{your ssid}"\n  export IOT_WIFI_PASSWORD="{your password}"\n')),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"SimpleIOT will ",(0,n.kt)("em",{parentName:"p"},"NOT")," work over wifi if your wifi settings require secondary authentication (such as common hotel WiFi requirements to login via a browser interface). If this is the case, you will need to use a different network (e.g., on a wireless hotspot).")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Add a Device to your Project (this will also generate the certificates required):")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  iot device add --project={project} --model=HelloWorldModel --serial={your serial number}`\n")),(0,n.kt)("p",null,"Your serial number may be provided to you, or you can create a unique serial number with letters, numbers, and dash or underline characters (we advise you avoid special characters such as exclamation points, slashes, etc.). An example of a serial number is: ",(0,n.kt)("inlineCode",{parentName:"p"},"HW-001"),"."),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Now verify that your Device was registered: ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"iot device list --project={project} --serial={serial} --full\n")),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"We're ready now to generate the code for ",(0,n.kt)("em",{parentName:"li"},"HelloWorld"),". There is a full version of the command, but you can use the shortened version that uses the default value:")),(0,n.kt)("p",null,"Short version:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  iot firmware generate --project={project} --serial={serial} --name="hello-world-m5"\n')),(0,n.kt)("p",null,"Full version:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  iot firmware generate --project={project} --serial={serial} --manufacturer=espressif --processor=esp32 --os=arduino --name="hello-world-m5" --version="1.0.0"\n')),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The previous step generated a zip file called ",(0,n.kt)("em",{parentName:"p"},"hello-world-m5-arduino-esp32.zip"),". Feel free to open it and inspect the contents to see what was created by SimpleIOT. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now plug your AWS IoT EduKit into your computer using the USB-C cable.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Build and flash the code via the CLI:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"iot firmware flash --zip=hello-world-m5-arduino-esp32.zip\n")),(0,n.kt)("ol",{start:12},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If everything was installed correctly, this should begin compiling. After 2 - 3 minutes, it will begin writing to the device.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Wait until connected.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The EduKit will reboot, and the EduKit screen will display a HelloWorld ",(0,n.kt)("em",{parentName:"p"},"Connecting")," screen: "),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/workshops/starter/HelloWorld-Connecting.png",width:"60%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once connected to the AWS IoT Core generated in the AWS Account (which was created by the Administrator in the SimpleIOT Backend installation) and a secure connection is established, the EduKit screen will display the ",(0,n.kt)("em",{parentName:"p"},"Hello World!"),' message with a "blue planet and flag" icon. '),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/workshops/starter/HelloWorld-Connected.png",width:"50%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start a monitor window in the shell of your choice:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"iot device monitor --project={project} --model=HelloWorldModel --serial={serial}\n")),(0,n.kt)("ol",{start:18},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the EduKit, press each button to see the resulting change in the monitor window. "),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/workshops/starter/cli_monitor_buttons.jpg",width:"30%"})))),(0,n.kt)("p",null,"The buttons you are pressing are sending a number (1, 2, or 3) to the IoT cloud under the name ",(0,n.kt)("inlineCode",{parentName:"p"},"button"),". Each time you press the button, the message is transmitted to the cloud and broadcasts that the value has changed. "),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"iot monitor")," command is listening for all changes to the data values of this specific device, as received on the cloud."),(0,n.kt)("ol",{start:14},(0,n.kt)("li",{parentName:"ol"},"Stop the monitor by pressing ",(0,n.kt)("em",{parentName:"li"},"Ctrl-C"),".  ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you'd prefer to leave the monitor running, start another terminal window, set the ",(0,n.kt)("inlineCode",{parentName:"p"},"IOT_TEAM")," environment variable, then run the ",(0,n.kt)("inlineCode",{parentName:"p"},"iot auth login")," command as above to login into your SimpleIOT cloud account, then run the monitor command again.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"OPTIONAL: Start the monitor in raw/JSON mode by adding ",(0,n.kt)("inlineCode",{parentName:"p"},"--raw")," to the monitor command:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"iot device monitor --raw --project={project} --model=HelloWorldModel --serial={serial}\n")),(0,n.kt)("ol",{start:15},(0,n.kt)("li",{parentName:"ol"},"Send a command from the console via wifi to the SimpleIOT Backend and ultimately to the EduKit: ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"iot data set --project={project} --serial={serial} --name=color --value=red\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Values can be ",(0,n.kt)("em",{parentName:"p"},"red"),", ",(0,n.kt)("em",{parentName:"p"},"blue"),", ",(0,n.kt)("em",{parentName:"p"},"green"),", and ",(0,n.kt)("em",{parentName:"p"},"off"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"From the terminal, you are sending a data value change all the way back to the cloud, where it is transmitted in real-time to the device. The code in the device receives the ",(0,n.kt)("inlineCode",{parentName:"p"},"color: red")," event and changes the globe color accordingly."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/workshops/starter/HelloWorld-set-red.png",width:"50%"})),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/workshops/starter/cli_monitor_set.jpg",width:"30%"})))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Congratulations!!!")," "),(0,n.kt)("p",{parentName:"admonition"},"You have successfully created your first SimpleIOT Project.")),(0,n.kt)("h2",{id:"cleanup"},"Cleanup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"To delete a single Device, enter:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  iot device delete --project={project} --serial={serial}\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"To delete the entire Project: ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  iot project delete --name={project}\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"To confirm that the Project is gone: ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  iot project list\n")),(0,n.kt)("h2",{id:"what-you-learned"},"What you learned"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How to create Projects, define a device Model, and provision or register a Device in the cloud."),(0,n.kt)("li",{parentName:"ul"},"To generate basic code to authenticate securely with the cloud (open the project source and take a look at ",(0,n.kt)("inlineCode",{parentName:"li"},"iot-secrets.h"),")."),(0,n.kt)("li",{parentName:"ul"},"How to use the SimpleIOT code generator to create a template for a connected device."),(0,n.kt)("li",{parentName:"ul"},"To remotely send data from the cloud ",(0,n.kt)("em",{parentName:"li"},"back")," to a connected device.")),(0,n.kt)("h2",{id:"next"},"Next..."),(0,n.kt)("p",null,"Now you are ready to connect some sensors to the processor and send the data on the cloud."))}d.isMDXComponent=!0}}]);