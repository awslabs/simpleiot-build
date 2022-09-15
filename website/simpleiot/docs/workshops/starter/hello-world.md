---
id: hello-world
title: Hello World
---

## Your First SimpleIOT Project

Let's kick things off by deploying your first SimpleIOT Project with a traditional "Hello, World!" example. 

1. Issue the following command, substituting your name (without the braces and with no spaces or special characters) where noted: 
```
  iot project add --name={your name}-hello --template=HelloWorldM5
```
*Please note that all names are case-sensitive.*

2. Confirm your Project now exists:
```
  iot project list
```

3. To see what model was created within the Project, type:
```
  iot model list --project={project} --name=HelloWorldModel --full
```

4. Similarly for datatypes, issue the command:
```
iot datatype list --project={project} --model=HelloWorldModel
```

5. Set up environment variables with your network information:  

On Windows: 
```
  $env:IOT_WIFI_SSID="{your ssid}"
  $env:IOT_WIFI_PASSWORD="{your password}"
```
On Mac: 
```
  export IOT_WIFI_SSID="{your ssid}"
  export IOT_WIFI_PASSWORD="{your password}"
```

:::danger
SimpleIOT will *NOT* work over wifi if your wifi settings require secondary authentication (such as common hotel WiFi requirements to login via a browser interface). If this is the case, you will need to use a different network (e.g., on a wireless hotspot).
:::

6. Add a Device to your Project (this will also generate the certificates required):
```
  iot device add --project={project} --model=HelloWorldModel --serial={your serial number}`
```

Your serial number may be provided to you, or you can create a unique serial number with letters, numbers, and dash or underline characters (we advise you avoid special characters such as exclamation points, slashes, etc.). An example of a serial number is: `HW-001`.


7. Now verify that your Device was registered: 
```
iot device list --project={project} --serial={serial} --full
```

8. We're ready now to generate the code for *HelloWorld*. There is a full version of the command, but you can use the shortened version that uses the default value:

Short version:
```
  iot firmware generate --project={project} --serial={serial} --name="hello-world-m5"
```

Full version:
```
  iot firmware generate --project={project} --serial={serial} --manufacturer=espressif --processor=esp32 --os=arduino --name="hello-world-m5" --version="1.0.0"
```


9. The previous step generated a zip file called _hello-world-m5-arduino-esp32.zip_. Feel free to open it and inspect the contents to see what was created by SimpleIOT. 

10. Now plug your AWS IoT EduKit into your computer using the USB-C cable.

11. Build and flash the code via the CLI:
```
iot firmware flash --zip=hello-world-m5-arduino-esp32.zip
```

12. If everything was installed correctly, this should begin compiling. After 2 - 3 minutes, it will begin writing to the device.

13. Wait until connected.

14. The EduKit will reboot, and the EduKit screen will display a HelloWorld _Connecting_ screen: 

   <p align="center">
   <img src="/img/workshops/starter/HelloWorld-Connecting.png" width="60%" />
   </p>

16. Once connected to the AWS IoT Core generated in the AWS Account (which was created by the Administrator in the SimpleIOT Backend installation) and a secure connection is established, the EduKit screen will display the _Hello World!_ message with a "blue planet and flag" icon. 
   
   <p align="center">
   <img src="/img/workshops/starter/HelloWorld-Connected.png" width="50%" />
   </p>

17. Start a monitor window in the shell of your choice:
```
iot device monitor --project={project} --model=HelloWorldModel --serial={serial}
```

18. On the EduKit, press each button to see the resulting change in the monitor window. 

 <p align="center">
   <img src="/img/workshops/starter/cli_monitor_buttons.jpg" width="30%" />
   </p>

The buttons you are pressing are sending a number (1, 2, or 3) to the IoT cloud under the name `button`. Each time you press the button, the message is transmitted to the cloud and broadcasts that the value has changed. 

The `iot monitor` command is listening for all changes to the data values of this specific device, as received on the cloud.

14. Stop the monitor by pressing *Ctrl-C*.  
   - If you'd prefer to leave the monitor running, start another terminal window, set the `IOT_TEAM` environment variable, then run the `iot auth login` command as above to login into your SimpleIOT cloud account, then run the monitor command again.

   - OPTIONAL: Start the monitor in raw/JSON mode by adding `--raw` to the monitor command:
```
iot device monitor --raw --project={project} --model=HelloWorldModel --serial={serial}
```

15. Send a command from the console via wifi to the SimpleIOT Backend and ultimately to the EduKit: 
```
iot data set --project={project} --serial={serial} --name=color --value=red
```

   - Values can be *red*, *blue*, *green*, and *off*.
   - From the terminal, you are sending a data value change all the way back to the cloud, where it is transmitted in real-time to the device. The code in the device receives the `color: red` event and changes the globe color accordingly.

   <p align="center">
   <img src="/img/workshops/starter/HelloWorld-set-red.png" width="50%" />
   </p>

   <p align="center">
   <img src="/img/workshops/starter/cli_monitor_set.jpg" width="30%" />
   </p>

:::note

**Congratulations!!!** 

You have successfully created your first SimpleIOT Project.

:::

## Cleanup

1. To delete a single Device, enter:

```
  iot device delete --project={project} --serial={serial}
```

2. To delete the entire Project: 
 
```
  iot project delete --name={project}
```

3. To confirm that the Project is gone: 

```
  iot project list
```

## What you learned

- How to create Projects, define a device Model, and provision or register a Device in the cloud.
- To generate basic code to authenticate securely with the cloud (open the project source and take a look at `iot-secrets.h`).
- How to use the SimpleIOT code generator to create a template for a connected device.
- To remotely send data from the cloud *back* to a connected device.

## Next...

Now you are ready to connect some sensors to the processor and send the data on the cloud. 