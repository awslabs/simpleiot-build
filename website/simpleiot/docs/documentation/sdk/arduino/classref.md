---
id: classref
title: Class Reference
---

# Introduction

To communicate with the SimpleIOT back-end, you can install and use the SimpleIOT Client SDK. The full source for the SDK can be [found on Github](https://github.com/awslabs/simpleiot-arduino).

To install and use, you can search for `simpleiot` in the Arduino Library Manager.

Once installed, you will need to include the header in your Sketch:

```
#include <SimpleIOT.h>
```

You will then need to:

- Create a global instance of the `SimpleIOT` object.
- Initialize and configure it in the `setup()` function.
- Obtain data and send it to the cloud using the `iot->set()` function.
- Periodically call the `iot->loop()` function to give the SDK some time to do work.

## Enums

This section covers the `enum` values defined in the SDK.

### SimpleIOTMessageType

This enum defines the types of message being sent to the system. These may be:

- **MESSAGE_APP**: Application-level messages
- **MESSAGE_ADM**: Administrative messages
- **MESSAGE_SYS**: Internal system messages

The private `_sendMessage` function takes one of these. It defaults to `MESSAGE_APP`. User-level applications would not need to use any of these.

### SimpleIOTUpdateType

_Reserved_: Parameters that may be received from the cloud when an OTA update is received.

These may be:

- **UPDATE_FIRMWARE**: Firmware binaries.
- **UPDATE_CONFIG**: Configuration data.
- **UPDATE_FILE**: Fixed assets or files.
- **UPDATE_TEST**: Test/diagnostic payloads.

### SimpleIOTType

Type hints (if defined in the Model) are passed when data is received from the cloud. Values may be:

- **IOT_INT**: Integer
- **IOT_FLOAT**: Float
- **IOT_DOUBLE**: Double
- **IOT_STRING**: String
- **IOT_BOOLEAN**: Boolean


## Callback Handlers

The following signatures are for callback handlers. You can name these functions anything you want, as long as they comply with the parameter formats. 

### SimpleIOTReadyCallback

```
typedef void (*SimpleIOTReadyCallback)(SimpleIOT *iot,
                    int status,
                    String message);
```

This function is called once all connection setup actions have been completed. The process of establishing a secure connection involves:

- Connecting to WiFi using the provided wifi credentials.
- Establishing a secure TLS connection with the server.
- Opening an MQTT connection to the right AWS IOT endpoint.
- Obtaining confirmation that the connection is active.

If any of these steps fail, the connection will not be established.

These operations are performed asynchronously. It is recommended that no data be sent to the cloud until this callback has been called successfully.

#### Parameters

| Name      | Type         | Definition                     |
|-----------|--------------|--------------------------------|
| `iot`     | `SimpleIOT*` | Instance of SimpleIOT object   |
| `status`  | `int`        | Status code. If successful = 0 |
| `message` | `String`     | Error string message           |


#### Example

```
void onConnectionReady(SimpleIOT *iot, int status, String message)
{
  Serial.print("SimpleIOT: ");
  Serial.print(message);
}

...

SimpleIOT* iot = NULL; // global singleton

...

void setup() {

  /* 
   * Initialize and configure a SimpleIOT instance.
   */
  iot = SimpleIOT::create(WIFI_SSID, WIFI_PASSWORD, SIMPLEIOT_IOT_ENDPOINT, 
                          SIMPLE_IOT_ROOT_CA, SIMPLE_IOT_DEVICE_CERT, SIMPLE_IOT_DEVICE_PRIVATE_KEY);
                     
  iot->config(IOT_PROJECT, IOT_MODEL, IOT_SERIAL, IOT_FW_VERSION, onConnectionReady, onDataFromCloud);

  Serial.println("Config started");
}
```

### SimpleIOTDataCallback

```
typedef void (*SimpleIOTDataCallback)(SimpleIOT *iot,
                    String name,
                    String value,
                    SimpleIOTType type);
```

This callback is invoked (if provided) when data is received from the cloud. The message payload is parsed, and the callback is invoked, passing the data to be handled inside the application. All data is in the form of name/value pairs.

Only `name` values specified in the _Model_ definition are passed back.

#### Parameters

| Name    | Type                            | Definition                                                                                        |
|---------|---------------------------------|---------------------------------------------------------------------------------------------------|
| `iot`   | `SimpleIOT*`                    | Instance of SimpleIOT object                                                                      |
| `name`  | `String`                        | Name of Datatype                                                                                  |
| `value` | `String`                        | Value of data                                                                                     |
| `type`  | [SimpleIOTType](#simpleiottype) | Type hint (if defined on Model definition). Can be used to convert the string to the desired type |

#### Example

Declaration as a global C function in the sketch:
```
void onDataFromCloud(SimpleIOT *iot, String name, String value, SimpleIOTType type) {
  ...
}
```

Pass to `config` at runtime:

```
  iot->config(IOT_PROJECT, IOT_MODEL, IOT_SERIAL, IOT_FW_VERSION, onConnectionReady, onDataFromCloud);
```

At runtime:
```
void onDataFromCloud(SimpleIOT *iot, String name, String value, SimpleIOTType type)
{
  if (name.equalsIgnoreCase("color")) {
    if (value.equalsIgnoreCase("red")) {
      setCurrentColor(PLANET_RED);
    }
  ...
}
```

Using the CLI to send data from the cloud to a specific device:
```
> iot data set --team=MyTeam --project=HelloProject --serial=HW-0001 --name=color --value=red
```

### SimpleIOTTriggerUpdateCallback

```
typedef void (*SimpleIOTTriggerUpdateCallback)(SimpleIOT *iot,
                    String version,
                    String downloadUrl,
                    SimpleIOTUpdateType updateType);

```
When an update request is received, this function is called with the version, URL, or payload and an optional update type.

The caller is expected to match the version number against the current firmware version and then request a download of the actual update from the provided URL via the [performOTA](#performota) call.

For processors other than ESP32, downloading the payload and application of the update will need to be managed manually.

#### Parameters

| Name          | Type                                        | Definition                                                                                        |
|---------------|---------------------------------------------|---------------------------------------------------------------------------------------------------|
| `iot`         | `SimpleIOT*`                                | Instance of SimpleIOT object                                                                      |
| `version`     | `String`                                    | New update version, in [SemVer](https://semver.org/) format.                                      |
| `downloadUrl` | `String`                                    | URL of update. Can be passed to `performOTA` function or downloaded manually                      |
| `updateType`  | [SimpleIOTUpdateType](#simpleiotupdatetype) | Optional update type. It could be firmware, configuration data, files, or test/diagnostics payloads. |

### SimpleIOTOTACallback
```
typedef void (*SimpleIOTOTACallback)(int currentDownload,
                    int totalDownload,
                    int percent);
```
This callback is invoked if passed to the [performOTA](#performota) method. It will be called with periodic updates so a user interface can be updated.

#### Parameters

| Name              | Type      | Definition                  |
|:------------------|-----------|-----------------------------|
| `currentDownload` | `int`     | Number of bytes downloaded  |
| `totalDownload`   | `int`     | Total size of download      |
| `percent`         | `int`     | Download percent complete   |

### SimpleIOTDiagCallback

```
typedef const char* (*SimpleIOTDiagCallback)(SimpleIOT *iot,
                    String diagId,
                    String data,
                    SimpleIOTDiagType diagType);
```
This callback is invoked when a remote diagnostic is initiated from the cloud. This is a placeholder for upcoming remote diagnostics.

#### Parameters

| Name       | Type                                    | Definition                           |
|------------|-----------------------------------------|--------------------------------------|
| `iot`      | `SimpleIOT*`                            | Instance of SimpleIOT object         |
| `diagId`   | `String`                                | Name of Diagnostic                   |
| `data`     | `String`                                | Data to be passed to Diagnostic test |
| `diagType` | [SimpleIOTDiagType](#simpleiotdiagtype) | Type of diagnostic                   |

## Methods

### create

:::danger
The default constructor `SimpleIOT()` could not be used to create an instance. Instead, the `create` static method should be used since it creates a singleton instance.
:::

```
static SimpleIOT* create(const char* wifiSSID,
                         const char* wifiPassword,
                         const char* iotEndpoint,
                         const char* caPem,
                         const char* certPem,
                         const char* keyPem,
                         bool withGateway=false);

```

This class static method is used to create a singleton instance of the `SimpleIOT` object. Use this to create the instance. The `init` method could then be used to initialize and pass project settings.

The data to be passed here are considered static to an application. They include values like the IOT endpoint, wifi settings, and security credentials.

#### Parameters

| Name           | Type      | Definition                                               |
|----------------|-----------|----------------------------------------------------------|
| `wifiSSID`     | `String*` | WiFi router SSID name                                    |
| `wifiPassword` | `String`  | WiFi router password                                     |
| `iotEndpoint`  | `String`  | URL of AWS IoT endpoint                                  |
| `caPem`        | `String`  | Certificate Authority text in PEM format                 |
| `certPem`      | `String`  | Device Certificate text in PEM format                    |
| `keyPem`       | `String`  | Device Private Key text in PEM format                    |
| `withGateway`  | `bool`    | false: standalone device. true: Connect via GGv2 gateway |

The `wifiSSID` and `wifiPassword` parameters are string values for the WiFi router the device should connect to get access to the cloud.

There are multiple ways to obtain and store WiFi credentials. This document on [WiFi Provisioning](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/provisioning/wifi_provisioning.html) provides several methods defined by the ESP32 processor. The mechanism will be different for each manufacturer.

For development, embedding WiFi passwords is the easiest method to be up and running quickly. For production systems, however, the on-boarding/provisioning and credential caching flows should be carefully designed. 

When installed, the `iotEndpoint` URL is generated by the SimpleIOT back-end. You can obtain it from the Team administrator or by looking in the file `~/.simpleiot/{team}/config.sys` file under the `iot_endpoint` key. This will typically look something like:

```
auq76k34ipflj-ats.iot.us-west-2.amazonaws.com"
```

For every **Team** installation, this will be different. The certificates generated for each device will only work with this end-point and can not be shared.

The certificates are generated automatically when a device is added and downloaded to the local machine. The files' contents can be copy/pasted into String values and passed to the `create` function.

A template file called `iot-secrets.h` is part of the examples with `#define` expressions. You can paste the values from the generated certificate files, then include the file in your main sketch.

#### Example

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

```
...
SimpleIOT* iot = NULL; // global instance
...

void setup() {
... // other initializations

  iot = SimpleIOT::create(WIFI_SSID, WIFI_PASSWORD, SIMPLEIOT_IOT_ENDPOINT, 
                          SIMPLE_IOT_ROOT_CA, SIMPLE_IOT_DEVICE_CERT, SIMPLE_IOT_DEVICE_PRIVATE_KEY);
...
}
```

### config

```
void config(const char* project,
            const char* model,
            const char* serialNumber,
            const char* fwVersion = "1.0.0",
            SimpleIOTReadyCallback onReady = NULL,
            SimpleIOTDataCallback onData = NULL,
            SimpleIOTTriggerUpdateCallback onTriggerUpdate = NULL,
            SimpleIOTDiagCallback onDiag = NULL);
```

The `config` method is used to configure the values for the device's current state and configure callbacks invoked when the firmware needs to be notified of external events.

In most cases, the [create](#create) and `config` method are called one after the other. But there may be times that specific settings need to be configured before the `config` command is called, so they are kept separate.

The parameters passed down are related to the current SimpleIOT project. For a production run, it is assumed that the device will have a place (such as a secure TPM or an EEPROM) where the individual serial numbers are stored. If so, those should be retrieved and passed to the `config` call.

The firmware version also needs to be obtained and passed on. Then, the version can be checked against the latest version available on the cloud. This could be hard-coded into the firmware or obtained from an external source.

The `config` command initializes the asynchronous remote connection calls. The [onReady](#simpleiotreadycallback) function will be invoked when the connection setup has concluded.

#### Parameters

| Name              | Type                                                              | Definition                                |
|-------------------|-------------------------------------------------------------------|-------------------------------------------|
| `project`         | `String*`                                                         | SimpleIOT Project name                    |
| `model`           | `String`                                                          | SimpleIOT Model name                      |
| `serialNumber`    | `String`                                                          | SimpleIOT Device serial number            |
| `fwVersion`       | `String`                                                          | Current firmware version in SemVer format |
| `certPem`         | `String`                                                          | Device Certificate text in PEM format     |
| `onReady`         | [SimpleIOTReadyCallback](#simpleiotreadycallback)                 | Connection callback handler               |
| `onData`          | [SimpleIOTDataCallback](#simpleiotdatacallback)                   | Cloud data callback handler               |
| `onTriggerUpdate` | [SimpleIOTTriggerUpdateCallback](#simpleiottriggerupdatecallback) | Cloud data callback handler               |
| `onDiag`          | [SimpleIOTDiagCallback](#simpleiotdiagcallback)                   | Diagnostic command callback handler       |

#### Example

With the `iot-secrets.h` and `wifi-settings.h` file contents (shown above):

```
...
SimpleIOT* iot = NULL; // global instance
...

void setup() {
...

  iot->config(IOT_PROJECT, IOT_MODEL, IOT_SERIAL, IOT_FW_VERSION, 
              onConnectionReady, 
              onDataFromCloud);
}
...
```

### set

```
int set(const char* name, const char* value);
int set(const char* name, int value);
int set(const char* name, float value);
int set(const char* name, double value);
int set(const char* name, bool value);

int set(const char* name, const char* value, float latitude, float longitude);
int set(const char* name, int value, float latitude, float longitude);
int set(const char* name, float value, float latitude, float longitude);
int set(const char* name, double value, float latitude, float longitude);
int set(const char* name, bool value, float latitude, float longitude);    
```

The `set` family of methods allows sending data to the cloud by providing a name and a value. There are two classes of methods.

1. Without GPS data
2. With GPS data

If the device has access to location data, you can send `latitude` and `longitude` values along with each telemetry setting. This will be sent to the back-end, and if the system is configured with a tracker through [Amazon Location Service](https://aws.amazon.com/location/), the data will also be sent there to enable GIS/mapping functionality.

:::info
All values sent to the cloud are coerced into string format for uniform handling. The values are ignored if the provided `name` values are not defined as a `Datatype`.
:::

#### Parameters

| Name        | Type      | Definition                             |
|-------------|-----------|----------------------------------------|
| `name`      | `String*` | Name of attribute to send to the cloud |
| `value`     | `variant` | Value of attribute                     |
| `latitude`  | `float`   | GPS latitude of observed value         |
| `longitude` | `float`   | GPS longitude of observed value        |

#### Example

An instance of SimpleIOT should have been created via the [create](#create) call and initialized via the [config](#config) call. 

:::caution
The callback handler [onReady](#simpleiotreadycallback) should have been received successfully before these methods should be called.
:::

```
int button;
float pressure;
bool light_on = false;
...
 // retrieve values and sensor data
 
   iot->set("button", button);
   iot->set("pressure", pressure);
   iot->set("light", light_on);
```

If GPS values are available:

```
bool satellite_valid;
float pressure;
float last_lat;
float last_lng;

...

  satellite_valid = gps.location.isValid();

  if (satellite_valid) {
    last_lat = gps.location.lat();
    last_lng = gps.location.lng();
    iot->set("pressure", pressure, last_lat, last_lng);
  }
```

### loop

```
    void loop(float delayMs=200);
```

To give the networking layer time to operate, the sketch has to call the `iot->loop()` method periodically inside its own `loop` method. 

The `delayMs` parameter indicates how much time to delay and yield before returning to the main sketch. The longer the duration, the more time is given to send the data. The duration should be set based on how often the sensors should be checked. Internally, the Arduino [delay()](https://www.arduino.cc/reference/en/language/functions/time/delay/) method is called.

#### Parameters

| Name      | Type  | Definition                                                 |
|-----------|-------|------------------------------------------------------------|
| `delayMs` | `int` | Number of millliseconds to pass to the `delay()` function. |

#### Example

The `iot->loop` method should be called inside the Arduino `loop` function:

```
void loop() 
{
  // Retrieve sensor data or detect user input
  
  iot->send("temperature", temperature);
  ...
  
  // This needs to be called to let SimpleIOT and MQTT send and receive data. 
  // The delay is how many milliseconds you want to wait between each call. 
  // A smaller number will yield more accurate delta values, but could overload the I2C bus.
  //
  iot->loop(200);
}
```

### wifi

```
  WiFiClientSecure* wifi = iot->wifi();
```
This function provides access to the underlying [WiFiClientSecure](https://github.com/espressif/arduino-esp32/tree/master/libraries/WiFiClientSecure) object. You can use this to obtain information about the underlying connection.

### performOTA
```
void performOTA(const char* url, SimpleIOTOTACallback otaCallback = NULL);
```

This method can be invoked with the URL of the remote firmware update. The URL is sent in the 
[SimpleIOTTriggerUpdateCallback](#simpleiottriggerupdatecallback) callback. The method is specific to the ESP-32 system since it internally uses the [Espressif Over The Air Updates (OTA)](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/ota.html) mechanism.


### checkForUpdate
```
void checkForUpdate(bool force = false);
```



[//]: # (    void checkForUpdate&#40;bool force = false&#41;;)

[//]: # (    void updateInstalled&#40;&#41;;)
