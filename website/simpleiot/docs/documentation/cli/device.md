---
id: device
title: Device
---

```
iot device add 
    --project=project-name
    --model=model-name
    --serial=unique-serial-number
    [--team="team-name"] 
    [--name=device-nickname]
    [--desc="description"]
    [--position=device-position-string]
    [--latitude=device-install-latitude]
    [--longitude=device-install-longitude]
    [--altitude=device-install-altitude]
    [--status=device-status]
    [-error=device-error-string]

iot device list 
    --project=project-name 
    --model=model-name 
    --serial=unique-serial-number
    [--team="team-name"] 
    [--id=device-id]
    [--location=location-name]
    [--location_id=location-unique-id]
    [--full]

iot device update 
    [--team="team-name"] 
    [--project=project-name]
    [--serial=unique-serial-number]
    [--id=device-id]
    [--name=device-nickname] 
    [--desc="description"] 
    [--position=device-position-string]
    [--latitude=device-install-latitude] 
    [--longitude=device-install-longitude]
    [--altitude=device-install-altitude]
    [--status=device-status] 
    [-error=device-error-string]

iot device delete 
    [--team="team-name"] 
    [--project=project-name]
    [--serial=unique-serial-number]
    [--id=device-id]

iot device attach
    [--team="team-name"] 
    [--project=project-name]
    [--serial=unique-serial-number]
    [--from_id=device-id]
    [--to=gateway-serial] 
    [--gateway=gateway-serial] 
    [--to_id=gateway-device-id]

iot device detach 
    [--team="team-name"]
    [--project=project-name]
    [--serial=unique-serial-number]
    [--from_id=device-id]
    [--to_id=gateway-device-id]

iot device place 
    [--team="team-name"] 
    [--project=project-name]
    [--serial=unique-serial-number]
    [--at=location-name]
    [--location=location-name]
    [--location_id=location-unique-id]

iot device remove 
    [--team="team-name"] 
    [--project=project-name]
    [--serial=unique-serial-number]

iot device monitor 
    [--team="team-name"] 
    [--project=project-name]
    [--serial=unique-serial-number]
    [--id=device-id]
    [--raw]
    [--stop]
```
<br />
A Device is an instance of a Model. The only information you need to provide when creating a Device is the type of Model and a unique serial number.

The type of device created will depend on the settings defined in the Model. If:

- *type* is set to `device` (default)
- *security* is set to `device` (default)
- *connection* is set to `direct` (default)

Then the Device is assumed to be an end-node that requires direct connectivity to the cloud and per-device security certificates for access to AWS IOT.

This means that each time you create an instance of that device, unique certificates will be generated and downloaded for that device.

However, if the *security* field is set to `model`, all devices of this model will share the same certificate. In that case, the first time a device of this *Model* is created, the certificate is also generated. After that, any subsequent instances will receive the same credentials.

Conversely, if a device is deleted, if *security* is set to `device`, the corresponding certificates and policies are cleaned-up as well. But if *security* is set to `model`, the certificates will be kept until the very last device of this model is deleted.

## iot device add
```
iot device add 
    --project=project-name
    --model=model-name
    --serial=unique-serial-number
    [--team="team-name"] 
    [--name=device-nickname]
    [--desc="description"]
    [--position=device-position-string]
    [--latitude=device-install-latitude]
    [--longitude=device-install-longitude]
    [--altitude=device-install-altitude]
    [--status=device-status]
    [-error=device-error-string]
```
<br />

Adds/Provisions a single Device. A Model and a unique Serial Number have to be specified. Depending on the type of Model, this command will generate certificates and policies for the device. In AWS IOT parlance, such a device will be registered as a *Thing*.

The same certificates will be created if the *type* field is set to `gateway`. However, in AWS IOT parlance, a *Greengrass v2 Core* item will be created, along with a *Greengrass v2 Device Group*.

Devices of the type `device` can be attached or detached from a `gateway`. In AWS IOT parlance, a Thing is attached to a Greengrass Core's device group. This allows the end device to perform runtime gateway discovery.


### Parameters

| Parameter                                                | Value                  | Definition                                                                                                                          |
|----------------------------------------------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `--project`                                              | Project Name           | (Required) Name of the project. Alternately, define an environment variable `IOT_PROJECT` with the project's name.                 |
| `--model`                                                | Model Name             | (Required) Name of the model. Alternately, define an environment variable `IOT_MODEL` with the model's name.                       |
| `--serial`                                               | Serial Number          | (Required) Unique serial number attached with the device. This must be unique within all devices of a given Project.                  |
| `--name`                                                 | Device Nickname        | (Optional) user-friendly name that can be assigned to a device. |
| `--desc`                                                 | Description            | (Optional) description attached to device instance.                                                                                 |
| `--position`                                             | Position string        | (Optional) free-form string assigning an installation location to a device. Could be human-readable or GeoJSON                      |
| `--latitude`                                             | Installation Latitude  | (Optional) GPS latitude where the device is deployed.                                                                                   |
| `--longitude` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Installation Longitude | (Optional) GPS longitude where device is deployed.                                                                                  |
| `--altitude`                                             | Installation Altitude  | (Optional) GPS altitude where the device is deployed.                                                                                   |
| `--status`                                               | Device Status          | (Optional) Field where device status is loaded. The device may overwrite this.                                              |
| `--error`                                                | Device Error           | (Optional) Field where device error code is loaded. The device may overwrite this.                                          |

Basic example:
```
> iot device add --project=my-project --model=my-model --serial=SN-00001
```

## iot device list
```
iot device list 
    --project=project-name 
    --model=model-name 
    --serial=unique-serial-number
    [--team="team-name"] 
    [--id=device-id]
    [--location=location-name]
    [--location_id=location-unique-id]
    [--full]
```
<br />

Use this command to get information on a single registered device. A device can be identified either with a *Project name* and *Serial number*, or a *Unique ID*.

For example:

```
> iot device list --project=my-project --serial=SN-00001
```
Or

```
> iot device list --id=0432233...
```
<br />

Add a `--full` flag to display detailed information at the end.

```
> iot device list --project=my-project --serial=SN-00001 --full
```

## iot device update
```
iot device update 
    [--team="team-name"] 
    [--project=project-name]
    [--serial=unique-serial-number]
    [--id=device-id]
    [--name=device-nickname] 
    [--desc="description"] 
    [--position=device-position-string]
    [--latitude=device-install-latitude] 
    [--longitude=device-install-longitude]
    [--altitude=device-install-altitude]
    [--status=device-status] 
    [-error=device-error-string]
```
<br />

Most Device attributes (other than the ID value, Project, and Model) can be modified if needed.

### Parameters

| Parameter                                                      | Value                  | Definition                                                                                                                          |
|----------------------------------------------------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `--project`                                                    | Project Name           | (Optional) Name of the project. Alternately, define an environment variable `IOT_PROJECT` with the project's name.                 |
| `--model`                                                      | Model Name             | (Optional) Name of model. Alternately, define an environment variable `IOT_MODEL` with the model's name.                       |
| `--serial`                                                     | Serial Number          | (Optional) Unique serial number attached with the device. This must be unique within all devices of a given Model.                  |
| `--id`                                                         | Device ID              | (Optional) Device unique ID, generated when a device has been created.                                                              |
| `--name`                                                       | Device Nickname        | (Optional) user-friendly name that can be assigned to a device. |
| `--desc`                                                       | Description            | (Optional) description attached to device instance.                                                                                 |
| `--position`                                                   | Position string        | (Optional) free-form string assigning an installation location to a device. Could be human-readable or GeoJSON                      |
| `--latitude`                                                   | Installation Latitude  | (Optional) GPS latitude where the device is deployed.                                                                                   |
| `--longitude` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Installation Longitude | (Optional) GPS longitude where device is deployed.                                                                                  |
| `--altitude`                                                   | Installation Altitude  | (Optional) GPS altitude where the device is deployed.                                                                                   |
| `--status`                                                     | Device Status          | (Optional) Field where device status is loaded. The device may overwrite this.                                              |
| `--error`                                                      | Device Error           | (Optional) Field where device error code is loaded. The device may overwrite this.                                          |

## iot device delete
```
iot device delete 
    [--team="team-name"] 
    [--project=project-name]
    [--serial=unique-serial-number]
    [--id=device-id]
```
<p />
Deletes an instance of a device. This will also remove all AWS IOT resources associated with this device.
<p />

:::caution
Deleting a Device may delete the underlying *IOT Thing* or *IOT Greengrass Core* object along with their generated certificates and policies. This can NOT be reversed.
:::

### Parameters

| Parameter                            | Value         | Definition                                                                                                          |
|--------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------|
| `--project` &nbsp;&nbsp;&nbsp;&nbsp; | Project Name  | (Optional) Name of project. Alternately, define an environment variable `IOT_PROJECT` with the project's name. |
| `--serial`                           | Serial Number | (Optional) Unique serial number attached with the device. This must be unique within all devices of a given Model.  |
| `--id`                               | Device ID     | (Optional) Device unique ID, generated when a device has been created.                                              |

## iot device attach
```

iot device attach
    [--team="team-name"] 
    [--project=project-name]
    [--serial=unique-serial-number]
    [--from_id=device-id]
    [--to=gateway-serial] 
    [--gateway=gateway-serial] 
    [--to_id=gateway-device-id]
```
<br />

This command assigns an end-node device to a gateway device. This allows the end node to route all communication through a gateway device.

Behind the scenes, it takes advantage of AWS IOT Things, Greengrass v2, Device Groups, and auto-discovery.

### Parameters

| Parameter                      | Value          | Definition                                                                                                          |
|--------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------|
| `--project`                    | Project Name   | (Optional) Name of the project. Alternately, define an environment variable `IOT_PROJECT` with the project's name. |
| `--serial`                     | Serial Number  | (Optional) Unique serial number attached with the device. This must be unique within all devices of a given Project.  |
| `--from_id` &nbsp;&nbsp;&nbsp; | Device ID      | (Optional) End node Device unique ID, generated when a device has been created.                                     |
| `--to`                         | Gateway Serial | (Optional) Gateway serial number. Must be in the same Project                                                           |
| `--gateway`                    | Gateway Serial | (Optional) Alias for `to`                                                                                           |
| `--to_id`                      | Gateway ID     | (Optional) Gateway UUID. Must be in the same Project                                                                    |

## iot device detach
```
iot device detach 
    [--team="team-name"]
    [--project=project-name]
    [--serial=unique-serial-number]
    [--from_id=device-id]
    [--to_id=gateway-device-id]
```
<br />

This detaches a device that has already been attached from a gateway.

### Parameters:

| Parameter                                  | Value         | Definition                                                                                                          |
|--------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------|
| `--project` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Project Name  | (Optional) Name of project. Alternately, define an environment variable `IOT_PROJECT` with the project's name. |
| `--serial`                                 | Serial Number | (Optional) Unique serial number attached with the device. This must be unique within all devices of a given Project.  |
| `--from_id`                                | Device ID     | (Optional) End node Device unique ID, generated when a device has been created.                                     |
| `--to_id`                                  | Gateway ID    | (Optional) Gateway UUID. Must be in the same Project                                                                    |


## iot device place
```
iot device place 
    [--team="team-name"] 
    [--project=project-name]
    [--serial=unique-serial-number]
    [--at=location-name]
    [--location=location-name]
    [--location_id=location-unique-id]
```
<br />

This command associate this device with a *Location* record. Devices placed at locations can be discovered and grouped based on a given address.

### Parameters

| Parameter                                                  | Value              | Definition                                                                                                          |
|------------------------------------------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------|
| `--project`                                                | Project Name       | (Optional) Name of the project. Alternately, define an environment variable `IOT_PROJECT` with the project's name. |
| `--serial`                                                 | Serial Number      | (Optional) Unique serial number attached with the device. This must be unique within all devices of a given Project.  |
| `--at`                                                     | Location Name      | (Optional) *Location* record name.                                                                                  |
| `--location`                                               | Location Name      | (Optional) *Location* record name.                                                                                  |
| `--location_id` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Location Unique ID | (Optional) *Location* UUID record id.                                                                               |


## iot device remove
```
iot device remove 
    [--team="team-name"] 
    [--project=project-name]
    [--serial=unique-serial-number]
```
<br />

This is the opposite of a `place` command. It removes a device from an assigned location.

### Parameters

| Parameter   | Value         | Definition                                                                                                          |
|-------------|---------------|---------------------------------------------------------------------------------------------------------------------|
| `--project` | Project Name  | (Optional) Name of the project. Alternately, define an environment variable `IOT_PROJECT` with the project's name. |
| `--serial`  | Serial Number | (Optional) Unique serial number for the device. This must be unique within all devices of a given Project.            |
| `--id`      | Device ID     | (Optional) Device unique user ID.                                                                                   |

## iot device monitor
```
iot device monitor 
    [--team="team-name"] 
    [--project=project-name]
    [--serial=unique-serial-number]
    [--id=device-id]
    [--raw]
    [--stop]
```
<br />

Monitoring a device transmitting MQTT messages can be done by going to the console and adding a subscriber topic or using a third-party MQTT monitoring tool and pointing to the certificate files.

This is an easier way to monitor and verify what information gets sent back and forth on the monitoring topic. All you need to do is pass the *device project* and *serial number* OR the device *id*. Once connected, the monitoring topic will be watched for any changes in data. Only *DataTypes* marked as `show_on_twin` set to `True` will be reflected on the monitoring topic.

To escape out of monitoring mode, press Control-C on the keyboard to exit or pass `--stop` to automatically end after a single value has been received.

To view the underlying JSON data, you can pass a `--raw` flag to the command.
