---
id: sensors
title: Fun with Sensors
---

### Putting the Pieces Together

Here is a diagram of how all the pieces connect: 

<p align="center">
<img src="/simpleiot/img/workshops/starter/sensor-connection.png" />
</p>


And here's what the actual sensors look like:

<p align="center">
<img src="/simpleiot/img/workshops/starter/GPS.png" width="50%" />
</p>

<p align="center">
<img src="/simpleiot/img/workshops/starter/edukit-connector.png" width="80%" />
</p>

<p align="center">
<img src="/simpleiot/img/workshops/starter/Encoder_and_Env.png" width="50%" />
</p>

Now that you know the parts involved, let's connect everything we'll need to the AWS IoT EduKit:


1. Insert the wire on the GPS Unit into Port C on the EduKit as shown below.

<p align="center">
<img src="/simpleiot/img/workshops/starter/GPS_to_EduKit.png" width="50%" />
</p>

2. Insert the wires from the Encoder and the ENV III into the Grove Connector hub as shown. 

<p align="center">
<img src="/simpleiot/img/workshops/starter/Sensor-Wiring.png" width="50%" />
</p>

3. Insert the wire from the Grove Connector hub into Port A on the EduKit (keep in mind that Port A is next to the USB-C port and is the only port that is NOT labeled).

<p align="center">
<img src="/simpleiot/img/workshops/starter/Sensor_to_EduKit.png" width="50%" />
</p>

### Setting Up Your Sensor Demo Project

1. Create a Project with the SensorDemo template, making sure to use a unique name for the Project that does not match any other Team member's: 
```
  iot project add –-name=Sensor-{your name}  --template=SensorDemo
```

3. List the components installed:
```
  iot project list --name={project} --full 
```

:::tip
**Pro Tip**: Set the environment variable `IOT_PROJECT` to the name of your project and you can leave out the `--project={project}` in all subsequent commands. Check out [Joining the Team](team-member) to see how if you haven't already done so. We'll be doing this going forward!

On the Mac Terminal or iTerm:
```
 export IOT_PROJECT="my-project"
```
On Windows Powershell:
```
 $env:IOT_PROJECT="my-project"
```
:::

3. List the Model information:

```
 iot model list --name=SensorModel --full
```

:::tip

**Yet Another Pro Tip**

You can also set the environment variable `IOT_MODEL` to the name of your project and then leave out the `--model=SensorModel` in all subsequent commands. Again, check out [Joining the Team](team-member) to see how. We'll be doing this going forward as well. 

On the Mac Terminal or iTerm:
```
 export IOT_MODEL="SensorModel"
```
On Windows Powershell:
```
 $env:IOT_MODEL="SensorModel"
```

:::

4. If you followed the two Pro Tips above, enter:
```
iot datatype list
```
If you didn't set the evironment variables, enter:
```
iot datatype list --project={project} --model=SensorModel
``` 

7. As detailed in the [Hello World](hello-world) instructions, make sure your WiFi credentials are set appropriately:

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


8. Add a device instance with a unique serial number of your choosing (assuming `IOT_PROJECT` and `IOT_MODEL` environment variables were set):
```
iot device add --serial={unique serial number}
```

9. Generate the code:
```
iot firmware generate --serial={serial number}
```

:::tip
(Optional) Expand the zip file that has been generated in your directory and inspect the contents that were generated. 

The file will be named *sensor-demo-m5-arduino-esp32.zip*.
:::

10. With your EduKit connected to your computer via the USB-C cable, build and flash the firmware: 
```
iot firmware flash --zip=sensor-demo-m5-arduino-esp32.zip
```

11. Open the monitor in your terminal screen via:
```
iot device monitor --serial={serial}
```

12. Wait until the device is connected to the cloud. Once connected, you should see data on the screen.

<p align="center">
<img src="/simpleiot/img/workshops/starter/sensordemo-screen-01.jpg" width="50%" />
</p>

<p align="center">
<img src="/simpleiot/img/workshops/starter/sensordemo-screen-02.jpg" width="50%" />
</p>

<p align="center">
<img src="/simpleiot/img/workshops/starter/sensordemo-screen-03.jpg" width="50%" />
</p>
   
13. Rotate the knob on the Encoder, then look at the monitor window to see what is being sent.

14. Breathe on the ENV III sensor, and the humidity should go up as noted in the monitor.

:::note
Data is not sent unless it goes past a certain delta threshold. This is to avoid flooding your AWS Account with irrelevant or unnecessary sensor data.
:::

15. Place the GPS Unit component (still attached to the EduKit, naturally) against a window to get a GPS signal. After a few minutes, you should see the EduKit screen icons change and will also see raw data that is being sent to the cloud displayed on your monitor.

16. Use *CTRL-C* to get out of your monitor.

17. Send a command from the console to your EduKit, as you did in *Hello World* example. Similar to that example, values can be _red_/_green_/_blue_/_off_, but this command changes the colors of the light bars on the side of the EduKit: 
```
iot data set --project={project} --serial={serial} --name=color --value=red
```

<p align="center">
<img src="/simpleiot/img/workshops/starter/sensordemo-color-change.jpg" width="70%" />
</p>


<p align="center">
<img src="/simpleiot/img/workshops/starter/sensordemo-led-color.jpg" width="70%" />
</p>

:::tip

**Congratulations!!!** 

You have successfully mastered setting up and demonstrating the various sensors. 
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

3To confirm that the Project is gone: 
```
iot project list
```

## What you learned

- How to connect wired sensors to the EduKit.
- To generate code to communicate with sensors and send data securely to/from the cloud.
- To send environmental, location-based/GPS, and user-controlled (rotary knob) data to the cloud.
- How to send real-time commands from the cloud *back* to a hardware component (the LED bars).


