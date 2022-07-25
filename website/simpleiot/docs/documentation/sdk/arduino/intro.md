---
id: intro
title: Introduction
---

# Basic Concepts

The basic concepts behind the SimpleIOT platform are defined in the [introduction](/docs/intro).

Under the Arduino system, the configuration will look like this:

<div align="center">
<img src="/simpleiot-build/img/arduino/arduino-app.png" width="60%"/>
</div>
<br />

The Sketch will include SimpleIOT as an additional library and provide certain items (detailed below) to configure and provision the device. Once compiled and flashed, the sketch will securely connect to AWS IOT and allow send/receive of data to the cloud.

The type of information that can be exchanged is totally up to you. You can define key/values in the description of the [Model](/docs/documentation/cli/model) and send data to the cloud via a call like:

```
  iot->set("temperature", 78.9);
```


# Installation

Installing SimpleIOT SDK can either be done using the [Arduino Classic App](https://www.arduino.cc/en/software), the [Arduino IDE 2.0](https://www.arduino.cc/en/software) or the [Arduino Command-Line-Interface](https://www.arduino.cc/pro/cli).

## Arduino Classic

Go into the Library Manager, search for `simpleiot`, and install it from there: 

<div align="center">
<img src="/simpleiot-build/img/arduino/manage-library-app.png" width="90%"/>
</div>
<br />

<div align="center">
<img src="/simpleiot-build/img/arduino/manage-library-app-install.png" width="80%"/>
</div>
<br />

## Arduino IDE 2.0

Click on the Library Manager Icon, search for 'simpleiot', and click on Install:

<div align="center">
<img src="/simpleiot-build/img/arduino/manage-library-ide.png" width="80%"/>
</div>
<br />

## Arduino CLI

If using the Command Line Interface, you can use this command:

```
> arduino-cli lib install simpleiot
```

If you prefer to install the latest version of the SDK from the [Github repository](https://github.com/awslabs/simpleiot-arduino), you can use:

```
> arduino-cli lib install --git-url https://github.com/awslabs/simpleiot-arduino.git
```

## Board Manager

The code has been tested with ESP32-based devices. To add support for these, you may need to add them to your development tool manually. Instructions from Espressif [are provided here](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html).

## Dependencies

The SimpleIOT SDK and its examples and demos rely on the following SDKs. The IDEs and CLIs should automatically install these. The CLI will install these if it is installed via the `iot toolchain install` command.

```
arduino-cli config set board_manager.additional_urls https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
arduino-cli config set library.enable_unsafe_install true
arduino-cli core update-index
arduino-cli core install esp32:esp32
arduino-cli lib install ArduinoJson
arduino-cli lib install ArduinoMqttClient
arduino-cli lib install FastLED
arduino-cli lib install TinyGPSPlus-ESP32
arduino-cli lib install --git-url https://github.com/m5stack/M5Core2.git
arduino-cli lib install --git-url https://github.com/m5stack/UNIT_ENV.git
arduino-cli lib install --git-url https://github.com/m5stack/UNIT_ENCODER.git
arduino-cli lib install --git-url https://github.com/aws-samples/arduino-aws-greengrass-iot.git
arduino-cli lib install --git-url https://github.com/awslabs/simpleiot-arduino.git
```

## Next Steps

Once installed, you can create a *HelloWorld* and a *SensorDemo* project from the IDE's SimpleIOT `Examples` menu. These examples are designed to work with the [M5Stack Core2 ESP32](https://shop.m5stack.com/products/m5stack-core2-esp32-iot-development-kit) or [AWS IOT EduKit](https://aws.amazon.com/iot/edukit/) devices.

Alternately, you can purchase the [SimpleIOT Starter Kit](https://m5stack.com), which contains all the devices and sensors to build the sensor demo example.



## Device Provisioning

Each **Device** in the SimpleIOT universe must be registered in the system. This is done by using the [iot device add](/docs/documentation/cli/device#iot-device-add) command in the SimpleIOT CLI and providing a unique serial number, as well as the associated Model, Project, and Team values. For example:

```
> iot device add --team="{team-name} --project="{my-project}" --model="{my-model}" --serial="unique-serial"
```

Behind the scenes, this command creates and provisions the certificates, policies, and roles needed by AWS IOT and downloads the certificates to the local development machine. 

The command then outputs two critical pieces of information:

1. The directory where the certificate files are stored on the local machine.
2. The IOT endpoint URL for this back-end.

This information will be needed in the next section.

## Connecting to the cloud

You will need the following information to connect your firmware to the cloud. It may seem daunting, but once you've provisioned a device (above), you already have all the necessary information.

### IOT Endpoint

When you create a back-end instance of SimpleIOT, the IOT subsystem sets up a URL where connections specific to the installation can be made. This URL is generated during installation and is saved in the `~/.simpleiot/{team-name}/config.json` file under the `iot_endpoint` key. 

All client device firmware will need to pass this URL to the SDK to be able to connect to the proper IOT endpoint.

### Security Certificates

AWS IOT supports two types of security:

1. Secure Enclave chip
2. Embedded Certificates

The former assumes the hardware has a supported embedded security chip on board, properly connected so the firmware can communicate with it directly.

However, there are many devices and designs that do not have the hardware. The certificates can be embedded inside the firmware and presented as needed. SimpleIOT SDK aims to work with a wide range of products and assumes the target device does not have an additional security chip. 

However, if designing your hardware from scratch, you may want to consider including an embedded security chip made by vendors like [Microchip](https://www.microchip.com/en-us/products/security/security-ics/cryptoauthentication-family/use-case-archives/aws-iot-atecc608a), [Infineon](https://www.infineon.com/cms/en/about-infineon/press/market-news/2019/INFDSS201905-070.html), or [ST](https://newsroom.st.com/media-center/press-item.html/t4445.html).

AWS IOT uses [X.509 private/public key certificates](https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html) to authenticate devices. This means that only devices registered to connect to AWS are allowed to send data to the cloud. In addition, all data coming and going to the device will be end-to-end encrypted via [TLS 1.2](https://docs.aws.amazon.com/iot/latest/developerguide/transport-security.html).

Three separate files are generated each time a single device is registered for the authentication system to work. These are:

- Root Certificate of Authority
- Device Certificate
- Device Private Key

If a device is created using the `iot device add` command, all registration is automatically performed, and the certificates are downloaded into the following local directory path:

```
~/.simpleiot
   {team-name}
      projects
        {project-naem}
           models
             {model-name}
               devices
                 {device-serial-number}
                 
~/.simpleiot/{team}/projects/{project}/models/{model}/devices/{device-serial}
```

Inside this directory, there will be several files, each prefixed with the serial number of the device:

- `{serial-number}_rootca.pem`: Root Certificate file.
- `{serial-number}_cert.pem`: Device Certificate file.
- `{serial-number}_private.pem`: Private key file.

:::caution
Please make sure these files are kept secure. Any device with access to these files can connect to your AWS IOT instance and send and receive data.
:::

These files are in a text [PEM format](https://knowledge.digicert.com/quovadis/ssl-certificates/ssl-general-topics/what-is-pem-format.html#:~:text=PEM%20or%20Privacy%20Enhanced%20Mail,very%20distinct%20headers%20and%20footers.). They can be opened with a text editor and copy/pasted into the sketch source.

For example, the Root Certificate looks something like this (truncated):

```
-----BEGIN CERTIFICATE-----
MIIDQTCCAingAwIBAgITBmyfz5m/jAo54vB4ikPmljZbyjANBgkqhkiG9w0BAQsF
ADA5MQsaCQYDVQQGEwJVUzEPMA0GA1UEChMGQW1hem9uMRkwFwYDVQQDExBBbWF6
b24gUm9vdCBDQSAxMB4XDTE1MDUyNjAwMDAwMFoXDTM4MDExNzAwMDAwMFowOTEL
MAkGA1UEBhMCVVMxDzANBgNVBAoTBkFtYXpvbjEZMBcGA1UEAxMQQW1hem9uIFJv
b3QgQ0EgMTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALJ4gHHKeNXj
ca9HgFB0fW7Y14h29Jlo91ghYPl0hAEvrAIthtOgQ3pOsqTQNroBvo3bSMgHFzZM
...
U5PMCCjjmCXPI6T53iHTfIUJrU6adTrCC2qJeHZERxhlbI1Bjjt/msv0tadQ1wUs
N+gDS63pYaACbvXy8MWy7Vu33PqUXHeeE6V/Uq2V8viTO96LXFvKWlJbYK8U90vv
o/ufQJVtMVT8QtPHRh8jrdkPSHCa2XV4cdFyQzR1bldZwgJcJmApzyMZFo6IQ6XU
5MsI+yMRQ+hDKXJioaldXgjUkK642M4UwtBV8ob2xJN5d2ZhwLnoQdeXeGADbkpy
rqXRfboQnoZsG4q5WTP468SQvvP5
-----END CERTIFICATE-----
```

The Device Certificate might look like this (truncated):

```
-----BEGIN CERTIFICATE-----
MIIDWTCCAkGgAwIBAgIUa8AkrtBf1rxI77Be6vanfIaeZNkwDQYJKoZIhvcNAQEL
BQAwTTFLMEkGA1UECwxCQW1hem9uIFdlYiBTZXJ2aWNlcyBPPUFtYXpvbi5jb20g
SW5jLiBMPVNlYXR0bGUgU1Q9V2FzaGluZ3RvbiBDPVVTMB4XDTIxMDkxNzAwMjUw
M9oXDTQ5MTIzMTIzNTk1OVowHjEcMBoGA1UEAwwTQAdTIElvVCBDZXJ0aWZpY2F0
ZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOg7PHKq0SnDF123L5Uj
54dBPgwQWoq8hoXEGygn+KBZ4O+5q+737wgFR/Olke2sbN1+Fn+o6YhDvA21jq04
...
Oy2LCRPDoorhXDuCndOF4xih4ljGKC5R1fvWlzixyx6Cv/9LPlXx4YdpXQR4rzde
UL+kkUmakdxbzoeovba1SDTvFe1ontNYflJ+ZtpCY86eaYbfwVk8W9/8WBd0K6JM
1xghOMg3oYYONPjJ/ZJHXY/fwdOBgXsAY3E++m4pAilTx4bpXuNK4jSx9IyCcY6H
+UJqFs5PesRk3AYLUHhm5qJpQfEG62NaZMkDDBGhBiZlwHriqJOWMyKJ0ru=
-----END CERTIFICATE-----
```

The Private Certificate may look like this (truncated):

```
-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCXQEA6Ds8cqrRKcMXXbcvlSPnh0E+DBBairyGhcQbKCf4oFng77mr
7vfvCAVH86WR7axs3X4Wf6jpiEO8DbWOrThQr43uz5/CMJGz+P+5GgZvcdeMKVnC
w9Bflbx82jTItYcroiiBxZD1/qs3zb+M1yzyXyJkHqE7Lcn+G8M9kZxktxjnMwwL
Pd/txDqmkyup/fQFER8Sw5rc9Rf33MOZhaWDPHkhHCW+1tnotEqs/ITOgVrcU9OX
y7JY4zQ7nfh2S4Pco0UXdMHgNsYS5tVcRxFkHULDYuDwSRTYJTqGeLoYHBptlbKw
r/hxfuFnvFKrixCN2xrWqZQC2AhFtHR7Q5APAwIDAQABAoIBACe7wtrnqQPZMk1B
...
jV9I0Fc0RmHrkQrhNvIuCj65tB7uIjJX/SzhAIjKPjRyOTv+iqHD/ojBaWkmQNjF
c5jHCwNCr9CcvOWlbnuxQQKBgDmKrEZh7ss/F1xBx2cZbrBECc+f4aycTpy/ibxO
tGDB2LQRIF+1X0zP2MspS/Gihyk8IYl5TKk4rKY5cOgGgQX1t7F2DTfsOI3v9a4S
JQz/dqQT4eRaI1k/NK6eXp/XFNjA11rquABl0btrV4XSWElywXudkPBPsXI5TXh+
s98hAoGAbkEeEcy0rf0Zn2Z8Bsq23trIBdYvpxK9X8a6dQVgnECLOQVz4AzGFPGb
f5icLV+lkFSQ18piTbXR5LZQCei1vUrl56174awDp5pdHIWTLhRf2WwuxMudleaA
YL/tpz7br/7RTQFZXOO2sQITRv3/Y6PR7QTtQpUE2j1e7gvQAS8=
-----END RSA PRIVATE KEY-----
```

### SimpleIOT Settings

For each device provisioned, you will also need to provide the following names:

- Project
- Model, and 
- Device (serial number)
- Firmware version number in Semantic Version format. When in doubt, use `1.0.0`.

You define these using the [iot cli](/docs/documentation/cli/intro) by creating a **Project**, a **Model**, and a **Device**.

### Wifi Settings

A connected device needs to be able to connect to the internet via local Wi-Fi or Cellular modems.

The subject of provisioning at runtime and establishing network credentials is beyond the scope of this tutorial. However, to get the firmware to connect, you need to connect to your local WiFi router using *WiFi SSID name* and *WIFI SSID password* credentials. These must be passed on to the initialization routine to establish a connection.

There are several other WiFi Provisioning schemes [covered here](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/provisioning/wifi_provisioning.html). 

## Assembling the parts

To summarize, you will need the following items:

- IOT Endpoint URL
- Root Certificate of Authority
- Device Certificate
- Device Private Key
- Project name
- Model name
- Device serial number
- Firmware version
- WiFi router SSID name
- WiFi router SSID password

<div align="center">
<img src="/simpleiot-build/img/arduino/basic-layout.png" width="80%"/>
</div>
<br />

In the example apps, the files are configured as follows:

| Name                          | Value           | Definition                                                                  |
|-------------------------------|-----------------|-----------------------------------------------------------------------------|
| Arduino Sketch Name Directory | Sketch Name     | The IDE and CLI both assume a sketch is inside a directory of the same name |
| Sketch file                   | .ino file       | Source to the Sketch (in C++)                                               |
| iot-secrets.h                 | .h include file | Contains the IOT endpoint and sources to certificates                       |
| wifi-settings.h               | .h include file | Contains the WiFi SSID and password        \                                |


The directory layout will typically look like this:
```
  {arduino-sketch-name-directory}
      |
      +-- {arduino-sketch-name}.ino
      +-- iot-secrets.h
      +-- wifi-settings.h
      +-- {miscellaneous files}
```

There are provided template files for both the `iot-secrets.h` and `wifi-settings.h` files. You can copy/paste the values you've collected above into these files, then compile and flash the binary to the device.

When the device boots up, it executes the `setup()` function to set up any devices/connections, then repeatedly calls the `loop()` function. The loop function can obtain values from sensors, then send them to the cloud. 

Under the SimpleIOT SDK, you may also provide a callback handler that is called when there is data transmitted from the cloud. 

More on this later...

The `iot-secrets.h` template looks like this:

```
/*
 * © 2022 Amazon Web Services, Inc. or its affiliates. All Rights Reserved.
 * 
 * These are AWS IOT credentials. This is for the SimpleIOT demo program.
 * Not for production use.
 */

#ifndef __SIMPLEIOT_SECRETS__
#define __SIMPLEIOT_SECRETS__

#include <pgmspace.h>

// Not really a secret, but all project-dependent values can be defined here.
//
#define SIMPLEIOT_IOT_ENDPOINT "{{ iot_endpoint }}"


// Root CA file
//
static const char SIMPLE_IOT_ROOT_CA[] PROGMEM = R"EOF(
{{ simpleiot_root_ca }}
)EOF";

// Device Certificate
//
static const char SIMPLE_IOT_DEVICE_CERT[] PROGMEM = R"KEY(
{{ simpleiot_device_cert }}
)KEY";

// Device Private Key
//
static const char SIMPLE_IOT_DEVICE_PRIVATE_KEY[] PROGMEM = R"KEY(
{{ simpleiot_device_private_key }}
)KEY";

#endif /* __SIMPLEIOT_SECRETS__ */
```
You can copy-paste the IOT endpoint, Root Certificate, Device Certificate, and Private key values in place of the elements marked in between the `{{` `}}` brackets.

For `wifi-settings.h`:

```
/*
 * © 2022 Amazon Web Services, Inc. or its affiliates. All Rights Reserved.
 * 
 * Update these with your own WiFi credentials
 */

#ifndef __SIMPLEIOT_WIFI_SETTINGS__
#define __SIMPLEIOT_WIFI_SETTINGS__


const char WIFI_SSID[]="{{ wifi_ssid }}";
const char WIFI_PASSWORD[]="{{ wifi_password }}";


#endif /* __SIMPLEIOT_WIFI_SETTINGS__ */
```

You can insert your own Wifi SSID and Password in place of the fields surrounded by `{{` and `}}` brackets.

Inside your Arduino sketch file, you can now include and set the following values near the top of the file, where global settings are placed.

```

#include "iot-secrets.h"
#include "wifi-settings.h"
#include <SimpleIOT.h>

#define IOT_PROJECT "{my-project}"
#define IOT_MODEL   "{my-model}"
#define IOT_SERIAL  "{my-device-serial}"
#define IOT_FW_VERSION "{firmware-version}"
```
As you can see, the `#include` directives import the values from inside the `.h` files. By using `#define` C/C++ directives, you can make the code more readable and modular.

By now, you have used all the data items assembled above. Next, let us look at the part where we connect to the cloud and initialize SimpleIOT.

## Initialization

If you have set up your `.ino` sketch files like above, you can now create an instance of a SimpleIOT object and initialize it inside the `setup()` function. The SimpleIOT object should be a global singleton value so all functions can access it.

```
...
SimpleIOT* iot = NULL; // global instance
...

void setup() {
... // other initializations

  iot = SimpleIOT::create(WIFI_SSID, WIFI_PASSWORD, SIMPLEIOT_IOT_ENDPOINT, 
                          SIMPLE_IOT_ROOT_CA, SIMPLE_IOT_DEVICE_CERT, SIMPLE_IOT_DEVICE_PRIVATE_KEY);
  iot->config(IOT_PROJECT, IOT_MODEL, IOT_SERIAL, IOT_FW_VERSION, 
              onConnectionReady, 
              onDataFromCloud);

  Serial.println("SimpleIOT configuration initialized");
}
...
```

In the above section, the `SimpleIOT::create` function creates a singleton instance of the SimpleIOT object. You pass to it the `#define` values defined inside the `.h` files:

- Wifi SSID
- Wifi Password
- IOT Endpoint URL
- Text of Root Certificate
- Text of Device Certificate
- Text of Device Private Key

The next call, `iot->config`, starts the configuration of the SimpleIOT subsystem to work with this specific project/model/device.

The process is asynchronous since WiFi connection and establishing credentials may take a few seconds. The SDK provides a way for you to get notified when the configuration has been completed.

Notice the two extra parameters `onConnectionReady` and `onDataFromCloud`? When an event occurs, these callback handlers are called. `onConnectionReady` is called once the 
secure connection to the cloud has been established. You can use this as a signal that the connection is open and data can be sent/received from the cloud.

:::warning
You should not attempt any cloud interactions until the `onConnectionReady` callback has been invoked with a successful status. 

Any other status indicates a problem. For example, an invalid Wifi configuration or wrong security credentials. In these cases, the firmware should signal a problem to the user (if possible) and stop all connection/networking operations.
:::

The `onDataFromCloud` callback is invoked if data is received from the cloud. These could be sent via API calls or the SimpleIOT CLI `iot data set` command.

### onConnectionReady

The `onConnectionReady` function expects the following parameters:

```
  void onConnectionReady(int status, String message) {
  
    ...
  
  }
```

The `status` value will be `0` if everything works, otherwise, it will return a code and an optional string `message.`

### onDataFromCloud

When data is sent from the cloud, the SDK will receive the notification and a payload. Then, the SDK extracts the relevant information to the application and passes it on to this callback.

The format of the handler is:

```

void onDataFromCloud(SimpleIOT *iot, String name, String value, SimpleIOTType type) {

   ...

}
```
Notice that the `value` is assumed to be String. Behind the scenes, SimpleIOT coerces all data values into a common string format for easier debugging and storage. When defining a Datatype, you can indicate the actual value. That type is passed on to the callback handler so you can decide how to convert the value best.

The `type` value can be one of:

- IOT_INT
- IOT_FLOAT
- IOT_DOUBLE
- IOT_STRING
- IOT_BOOLEAN

What the `name` and `value` return is entirely up to you. But it is assumed to be defined as **DataType** fields in a **Model**.

For example, in the terminal, you can remotely set the value:

```
> iot data set --project=HelloProject --serial=HW5-0001 --name=color --value=red
```

The device with serial number `HW5-0001` will receive a live notification with the following settings:

```
void onDataFromCloud(SimpleIOT *iot, String name, String value, SimpleIOTType type)
{
  if (name.equalsIgnoreCase("color")) {
    if (value.equalsIgnoreCase("red")) {
      setCurrentColor(PLANET_RED);
    } else
    if (value.equalsIgnoreCase("green")) {
      setCurrentColor(PLANET_GREEN);
    } else
    if (value.equalsIgnoreCase("blue")) {
      setCurrentColor(PLANET_BLUE);
    } else
    if (value.equalsIgnoreCase("off")) {
        setCurrentColor(PLANET_ORIGINAL);
    }
    updateDisplay(currentButton);
  }
}
```

Both items are wrapped in Arduino [String](https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/) objects for easier conversion and processing.

:::tip
Behind the scenes, certain callbacks will be reserved for future internal SDK use. The ones with data values will be passed to the `onDataFromCloud` function so the application can process them as needed.
:::

# Examples

You can use the _Examples_ provided by SimpleIOT SDK in the Arduino IDEs and create a basic *HelloWorld* and *SensorDemo* example.

But the easiest way to see the SDK with completed parameters is to use the CLI code generator and create a fully-functional sketch. To do this, please visit the [Workshops](/docs/workshops/) section.

The versions of *HelloWorld* and *SensorDemo* generated there will come with filled-out certificates, WiFi settings, and project attributes.
