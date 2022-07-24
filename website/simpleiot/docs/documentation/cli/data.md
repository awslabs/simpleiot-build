---
id: data
title: Data
---
```
iot data set 
    --project=project-name 
    --serial=unique-serial-number
    [--team="team-name"] 
    [--desc="description"] 
    [--name=datatype-name]
    [--value=data-value]
    [--data=data-series]
    [--position=data-position-lat-long-alt]

iot data get 
    [--team="team-name"] 
    --project=project-name 
    --serial=unique-serial-number
    [--name=datatype-name]
    [--full]
```
<br />

*Data* records are created the first time a value is received either via a *set* command, an API *POST* command, or an MQTT message received from a device.

A *Data* value is an instance of a *DataType* but attached to each *Device* instance. Whereas *DataTypes* define what values
a *Model* can take, each *Device* is an instance of a *Model*, so each *Data* is an instance of a *DataType*, attached to
the individual *Device*.

The last received value is saved in the database. Ongoing data changes are also sent to an Amazon DynamoDB database for individual record logging and an Amazon Timestream database for time-based logging. If needed, they can also be routed to an S3 bucket or any other processing service.

## iot data set
```
iot data set 
    --project=project-name 
    --serial=unique-serial-number
    [--team="team-name"] 
    [--desc="description"] 
    [--name=datatype-name]
    [--value=data-value]
    [--data=data-series]
    [--position=data-position-lat-long-alt]
```
<br />

You can use this command to adjust a data value directly. Note that all **Datatype** settings are bi-directional so you can set/get them from either the device side or the cloud side.

### Parameters

| Parameter                                                           | Value         | Definition                                                                                                                                                                                                                   |
|---------------------------------------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--project`  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Project Name  | name of project. Alternately, define an environment variable `IOT_PROJECT` with the project's name.                                                                                                                     |
| `--serial`                                                          | Serial Number | (Required) Unique serial number attached with the device. The serial number must be unique for all devices in a single Project.                                                                                                           |
| `--desc`                                                            | Description   | (Optional) description attached to data instance.                                                                                                                                                                            |
| `--name`                                                            | DataType Name | name of data item to set.                                                                                                                                                                                                    |
| `--value`                                                           | Value         | value to set for name.                                                                                                                                                                                                       |
| `--data`                                                            | Data string   | Instead of a single `--name` and `--value` setting, you can set multiple values at once using this command. The parameter is assumed to be a string of form: `name1=value1,name2=value2,etc.` Any invalid names are ignored. |
| `--position`                                                        | Lat/Long/Alt  | Comma-separated list of latitude, longitude, and altitude values for this item.                                                                                                                                                  |

To set a single data value, use:

```
> iot data set --project=my-project-name --serial=serial-number --name=my-data --value=my-value
```
To set multiple values in one transaction:

```
> iot data set --project=my-project-name --serial=serial-number --data="temperature=20,pressure=50.2,count=3"
```
:::tip
A reminder that if `IOT_TEAM` and `IOT_PROJECT` environment variables are set, you can skip the `--team` and `--project` flags.

:::
## iot data get
```
iot data get 
    [--team="team-name"] 
    --project=project-name 
    --serial=unique-serial-number
    [--name=datatype-name]
    [--full]
```
:::caution
This command returns the last known state of a value in the cloud database. An error may be returned if the value has not been set yet. The system currently uses data values stored in the RDS database. 
:::

Return the last known value for data received for a single device.

### Parameters

| Parameter                            | Value         | Definition                                                                                                         |
|--------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------|
| `--project` &nbsp;&nbsp;&nbsp;&nbsp; | Project Name  | name of project. Alternately, define an environment variable `IOT_PROJECT` with the project's name.           |
| `--serial`                           | Serial Number | (Required) Unique serial number attached with the device. It must be unique within all devices of a given Project. |
| `--name`                             | DataType Name | name of data element.                                                                                              |
| `--full`                             | Flag          | If specified, it will display full information on a single data item (including the timestamp).                           |

To get a data value, use:

```
> iot data get --project=my-project-name --serial=serial-number --name=my-data
```
<br />
Or

```
> iot data get --project=my-project-name --serial=serial-number --name=my-data --full
```
<br />
to get a full listing.
