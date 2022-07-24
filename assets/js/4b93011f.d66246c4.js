"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[4915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const l={id:"solo",title:"Solo"},i="Solo Builder",r={unversionedId:"install/solo",id:"install/solo",title:"Solo",description:"If you haven't already set up an AWS account, please do so now. To proceed, you should have an AWS Profile configured on your machine.",source:"@site/docs/install/solo.md",sourceDirName:"install",slug:"/install/solo",permalink:"/docs/install/solo",draft:!1,tags:[],version:"current",frontMatter:{id:"solo",title:"Solo"},sidebar:"theSidebar",previous:{title:"Configuring an AWS account",permalink:"/docs/install/account"},next:{title:"Administrator",permalink:"/docs/install/admin"}},s={},u=[{value:"Installation pre-requisites",id:"installation-pre-requisites",level:2},{value:"Install SimpleIOT CLI",id:"install-simpleiot-cli",level:2},{value:"Install the Back-end",id:"install-the-back-end",level:2},{value:"Installer stages",id:"installer-stages",level:3},{value:"Installing the Toolchain",id:"installing-the-toolchain",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"solo-builder"},"Solo Builder"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you haven't already set up an AWS account, ",(0,o.kt)("a",{parentName:"p",href:"account"},(0,o.kt)("strong",{parentName:"a"},"please do so now")),". To proceed, you should have an ",(0,o.kt)("em",{parentName:"p"},"AWS Profile")," configured on your machine.")),(0,o.kt)("p",null,"We will be using the SimpleIOT Command-Line-Interface (CLI) to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set up the back-end"),(0,o.kt)("li",{parentName:"ul"},"Install the Arduino-CLI toolchain."),(0,o.kt)("li",{parentName:"ul"},"Flash the demo firmware on an AWS EduKit device (optional)")),(0,o.kt)("p",null,"Once done, you can proceed to create a ",(0,o.kt)("em",{parentName:"p"},"Hello World")," application. If you obtain a SimpleIOT Starter Kit, you will be able to proceed and build the ",(0,o.kt)("em",{parentName:"p"},"Sensor Demo"),"."),(0,o.kt)("h2",{id:"installation-pre-requisites"},"Installation pre-requisites"),(0,o.kt)("p",null,"For all Users:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Latest version of Python from ",(0,o.kt)("a",{parentName:"li",href:"https://python.org"},"https://python.org")," (minimum 3.9+)"),(0,o.kt)("li",{parentName:"ul"},"Silicon Labs ",(0,o.kt)("a",{parentName:"li",href:"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers"},"CP210x USB to UART Bridge drivers"),". Under Windows, once you plug in an AWS EduKit device, it should automatically install this driver. You will have to download the above driver and manually install it if it fails. Under MacOS, you will need to download and install it manually.")),(0,o.kt)("p",null,"Additionally, to be able to install the back-end:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker Desktop: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/"},"https://docs.docker.com/desktop/"))),(0,o.kt)("p",null,"Installing these may require other dependencies on Windows or Mac. Once installed, the system may need to be rebooted."),(0,o.kt)("h2",{id:"install-simpleiot-cli"},"Install SimpleIOT CLI"),(0,o.kt)("p",null,"Once you have the above set up, installing the CLI on your system is straightforward."),(0,o.kt)("p",null,"Open a powershell (Windows) or terminal (Mac) terminal window, then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install simpleiot-cli\n")),(0,o.kt)("p",null,"Once installed, you can test the command-line interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"% iot help\nUsage: iot [OPTIONS] COMMAND [ARGS]...\n\nOptions:\n --help Show this message and exit.\n\nCommands:\n auth User Authentication\n cloud Cloud back-end provisioning\n data Data set and retrieve\n datatype Model DataType management\n device Device provisioning\n firmware Generate sample source\n location Location management\n model Manage Models\n project Project management\n team Team management (CLI only)\n template Project Template management\n toolchain Project Template management\n twin Manage Digital 3D Twin files\n update OTA Firmware Updates\n")),(0,o.kt)("h2",{id:"install-the-back-end"},"Install the Back-end"),(0,o.kt)("p",null,"You are ready to install the back-end if you have already set up your AWS Account (or added a profile to your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.aws")," directory)."),(0,o.kt)("p",null,"This step will download a pre-built Docker image to your system and invoke it. The image has all the pre-requisites needed to configure a SimpleIOT stack. It will ask you a few questions, then start the process."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This step usually takes between 20-30 minutes. Please do not interrupt it, otherwise the system will be in a half-baked stage. "),(0,o.kt)("p",{parentName:"admonition"},"If you encounter any errors, make sure you run ",(0,o.kt)("inlineCode",{parentName:"p"},"iot cloud uninstall")," to clear out the debris before trying again.")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Do NOT run the installer while on a VPN!"),(0,o.kt)("p",{parentName:"admonition"},"If this happens, the final database setup stage may freeze when trying to securely connect to the database. If this happens, Ctrl-C out, uninstall (see above), and try installing again, this time without the VPN connection.")),(0,o.kt)("p",null,"To start, open a terminal window and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"iot cloud install\n")),(0,o.kt)("p",null,"A series of log messages from Docker will show that the container is getting downloaded. Once ready, you will be asked a few questions to bootstrap the process:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/install/bootstrap.png",width:"100%"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"None of the information you provide is sent anywhere outside your account or system. The questions are there only so you can distinguish one of your ",(0,o.kt)("em",{parentName:"p"},"Teams")," from another.")),(0,o.kt)("p",null,"The questions are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Choose AWS profile"),": ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you have more than one AWS profile on your machine, you will be shown a list of profiles. Select one using the arrow keys and press ENTER."),(0,o.kt)("li",{parentName:"ul"},"If you only have a single ",(0,o.kt)("em",{parentName:"li"},"default")," profile, that will be used, and you will not be prompted. "),(0,o.kt)("li",{parentName:"ul"},"If you do not have ANY accounts configured, the installer will ask you to enter your AWS Secret Key and ID (from your ",(0,o.kt)("a",{parentName:"li",href:"account"},"account setup"),")."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Organization Name"),": Choose a name that represents your organization. If you are a solo developer, enter your name. Or if you have grand ambitions: ",(0,o.kt)("em",{parentName:"li"},'"{enter name} Enterprises"'),' or _"Intergalactic {{enter name}}." ',(0,o.kt)("strong",{parentName:"li"},"Go ahead, Think Big!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Administrator Email"),": This is your email. Make sure it's a valid one. You will be e-mailed an acknowledgment once the system is set up. The information is not transmitted anywhere outside your own account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dashboard Admin Password"),": The system generates a difficult-to-guess password. You can change it if you want, but it must comply with the ",(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cognito/"},"Amazon Cognito")," minimum password requirements. You may also want to copy and save this password someplace safe. You will need this to log in with the CLI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Short Team Name"),": This is the name you will use to refer to the ",(0,o.kt)("b",null,"Team")," when accessing the back-end. Even if you will only ever have a single Team, you still need to have a team name defined. The system will suggest a name based on your AWS profile (",(0,o.kt)("i",null,"default")," if you only have one AWS account configured). ")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The name of the team will be used to create a settings directory. The name should be short, without any spaces, and consist of characters allowed as directory names. i.e., characters, numbers, and a hyphen. "),(0,o.kt)("p",{parentName:"admonition"},"No punctuation or non-ASCII characters should be used. Seriously. Keep it boring.")),(0,o.kt)("p",null,"Once you have answered these questions, you will be asked to confirm and hit ENTER. Once the process starts, you can watch it go or take a 20-30m break. "),(0,o.kt)("p",null,"If the account has insufficient AIM privileges or something goes wrong, the system will try to rewind and delete what is created. However, you still have to run the following to clean out extra resources (like SSH keys, S3 buckets, etc.):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"iot cloud uninstall\n")),(0,o.kt)("h3",{id:"installer-stages"},"Installer stages"),(0,o.kt)("p",null,"The installer process has three stages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bootstrap"),(0,o.kt)("li",{parentName:"ul"},"Deploy"),(0,o.kt)("li",{parentName:"ul"},"Database setup")),(0,o.kt)("p",null,"When you run the ",(0,o.kt)("inlineCode",{parentName:"p"},"iot cloud install")," step, it runs all three back-to-back. Once done, you should see a message indicating success. If you see that, you can proceed to install the toolchain."),(0,o.kt)("p",null,"If you get any errors, check the ",(0,o.kt)("em",{parentName:"p"},"Troubleshooting")," section, uninstall, fix the problem, and start again. You can re-use the same answers as before, except when you run the installer, a new password is auto-generated."),(0,o.kt)("h2",{id:"installing-the-toolchain"},"Installing the Toolchain"),(0,o.kt)("p",null,"The system can be used to flash and build firmware for an AWS IOT Edukit device. First, you must install the ",(0,o.kt)("strong",{parentName:"p"},"Arduino CLI")," and the ESP-32 built toolchain, along with all the necessary libraries."),(0,o.kt)("p",null,"A single command does all this for you:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"iot toolchain install\n")),(0,o.kt)("p",null,"This command downloads and installs the ",(0,o.kt)("strong",{parentName:"p"},"arduino-cli")," command and then configures it. It installs all the necessary 3rd party components, including the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/awslabs/simpleiot-arduino"},"simpleiot-srduino")," library."),(0,o.kt)("p",null,"If you get any errors, make sure you uninstall the toolchain, fix the problem, then try again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"iot toolchain uninstall\n")),(0,o.kt)("p",null,"After installing the toolchain, you can verify that everything is set up correctly by connecting the ",(0,o.kt)("em",{parentName:"p"},"AWS IoT EduKit")," device via a USB-C cable. On the Mac, you should have installed the CP210x USB to UART drivers as part of the pre-requisite. On Windows, you may be prompted to locate the downloaded driver and have it installed."),(0,o.kt)("p",null,"To upload a pre-built binary firmware example, make sure the EduKit device is plugged in, then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"iot firmware m5demo\n")),(0,o.kt)("p",null,"You may be prompted to choose the USB port depending on how many USB devices you have connected to your system. If there is only one EduKit device, that will be selected. The system will then flash the EduKit with the demo binary. "),(0,o.kt)("p",null,"If you see the following, your installation is complete:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/install/simpleiot-success.gif",width:"40%"})))}c.isMDXComponent=!0}}]);