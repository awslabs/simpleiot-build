---
id: firmware
title: Firmware
---

```
iot firmware generate
    [--team="team-name"] 
    --project=project-name 
    --serial=unique-serial-number
    -name=generator=name
    [--manufacturer=manufacturer-name]
    [--processor=processor-name]
    [--os=os-name]
    [--version=version-number]
    [--wifi_ssid=name] 
    [--wifi_password=password]

iot firmware flash
    [--team="team-name"] 
    [--manufacturer=manufacturer-name]
    [--processor=processor-name]
    [--os=os-name]
    --zip=generated-zip-file
    --dir=source-dir-path
    --port=usb-port

iot firmware m5demo 
    [--demo=directory]
    [--port=usb-port]
```
<br />

The `firmware` command is used to perform alternate capabilities such as code-generation firmware for specific
chips or compiling and flashing to a test device (in case the toolchain is installed).

## iot firmware generate
```
iot firmware generate
    [--team="team-name"] 
    --project=project-name 
    --serial=unique-serial-number
    -name=generator=name
    [--manufacturer=manufacturer-name]
    [--processor=processor-name]
    [--os=os-name]
    [--version=version-number]
    [--wifi_ssid=name] 
    [--wifi_password=password]
```
<br />

The `generate` command creates a ready-to-use firmware skeleton based on an available code template. The first release includes *HelloWorld* and *SensorDemo* templates targeted for the M5 demo devices.

The `generate` command takes a pre-packaged template, downloads and unzips it on the cloud, then runs through each file through a template processor ([Jinja](https://jinja.palletsprojects.com/)). Jinja replaces placeholder values with actual values, including WiFi SSID and password, device certificates, and data associated with *Model* and *Datatypes*. Finally, a zipped archive with replacement runtime values is downloaded to the current directory.

The system supports different generators based on `manufacturer`, `processor`, `os`, and `version` values. The values default to settings appropriate for the SimpleIOT hardware bundle.

The archive file can be unzipped, monitored, and built using the development toolchain appropriate for the template. However, if the compiler toolchain is installed on the local machine, the `firmware flash` command can be used to build and flash the device automatically.

The `--version` value will be passed to the template processor and can be used to embed a firmware version string in the code.

If the `--wifi_ssid` or `--wifi_password` parameters are specified, the values will be passed to the template processor to allow the local WiFi to be pre-built into the firmware. Optionally, the environment variables `IOT_WIFI_SSID` and `IOT_WIFI_PASSWORD` may be
specified.

### Parameters

| Parameter                                                                | Value               | Definition                                                                                                         |
|--------------------------------------------------------------------------|---------------------|--------------------------------------------------------------------------------------------------------------------|
| `--project`                                                              | Project Name        | name of the project. Alternately, define an environment variable `IOT_PROJECT` with the project's name.           |
| `--serial`                                                               | Serial Number       | (Required) Unique serial number attached with the device. This must be unique within all devices of a given Project. |
| `--name`                                                                 | Generator Name      | name of a generator to use.                                                                                          |
| `--manufacturer`                                                         | device manufacturer | Target manufacturer name                                                                                           |
| `--processor`                                                            | processor name      | Target processor name                                                                                              |
| `--os`                                                                   | OS name             | Target OS name                                                                                                     |
| `--version`                                                              | Firmware Version    | Defaults to `1.0.0` in SemVer format                                                                               |
| `--wifi_ssid`                                                            | SSID string         | WiFi SSID name to embed in code. May also be provided via `IOT_WIFI_SSID` environment variable                     |
| `--wifi_password` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Password string     | WiFi password to embed in code. May also be provided via `IOT_WIFI_PASSWORD` environment variable                  |

Basic example:

```
> iot firmware generate --project=my-project --serial=SN-00001 --version=1.2.0 --wifi_ssid=my-router --wifi_password=my-password
```

## iot firmware flash
```
iot firmware flash
    [--team="team-name"] 
    [--manufacturer=manufacturer-name]
    [--processor=processor-name]
    [--os=os-name]
    --zip=generated-zip-file
    --dir=source-dir-path
    --port=usb-port
```
<br />
This command will compile and flash firmware to a target device via USB. It assumes the toolchain appropriate for the target device is installed on the local machine. Next, it scans for the USB ID associated with the device and uses that to upload the firmware. If more than one device of that type is seen, it will ask the user to select one.

The command assumes the USB to serial drivers are installed for the target device, and the device is plugged in.

Currently, only the [M5Go IOT Starter Kit](https://shop.m5stack.com/products/m5go-iot-starter-kit-stem-education?variant=16804754260058) is supported. 

### Parameters

| Parameter                                                                                                                                             | Value               | Definition                                                                                                                                                                                                                                |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--manufacturer` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | device manufacturer | Target manufacturer name                                                                                                                                                                                                                  |
| `--processor`                                                                                                                                         | processor name      | Target processor name                                                                                                                                                                                                                     |
| `--os`                                                                                                                                                | OS name             | Target OS name                                                                                                                                                                                                                            | `--zip` |  Generated Zip file | (Required) Name of zip file in current directory. Assumed to be the file generated by the `generate` command. |
| `--port`                                                                                                                                              | USB Port            | (Optional) USB port to be used for flashing. If not specified, a list of devices matching the supported USB IDs is shown. If more than one device is found, the list will be presented, and the user will be prompted to pick the right port. ] |

## iot firmware m5demo

```
iot firmware m5demo 
    [--demo=directory]
    [--port=usb-port]
```

The `m5demo` command flashes a pre-rendered Arduino image to an M5Stack device. 

### Parameters

| Parameter | Value    | Definition                                                                                                                                                                                                                                |
|-----------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--demo`  | Path     | Path to demo source                                                                                                                                                                                                                       |
| `--port`  | USB Port | (Optional) USB port to be used for flashing. If not specified, a list of devices matching the supported USB IDs is presented. If more than one device is found, the list will be presented, and the user will be prompted to pick the right port. ] |
