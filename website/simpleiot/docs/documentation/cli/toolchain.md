---
id: toolchain
title: Toolchain
---

```
iot toolchain available

iot toolchain install
    [--base="alternate-toolchain-base-path"]
    [--alias="toolchain-short-alias"]
    [--manufacturer="manufacturer-name"]
    [--processor="processor-type"]
    [--os="operating-system-name"]
    [--version="toolchain-version"]
    [--location="install-location-type"]

iot toolchain uninstall
    [--base="alternate-toolchain-base-path"]
    [--alias="toolchain-short-alias"]
    [--manufacturer="manufacturer-name"]
    [--processor="processor-type"]
    [--os="operating-system-name"]
    [--version="toolchain-version"]
    [--location="install-location-type"]

iot toolchain reset
    [--base="alternate-toolchain-base-path"]
    [--alias="toolchain-short-alias"]
    [--manufacturer="manufacturer-name"]
    [--processor="processor-type"]
    [--os="operating-system-name"]
    [--version="toolchain-version"]
    [--location="install-location-type"]
```

The CLI can download and install a toolchain for compiling, linking, and flashing firmware to a device. The toolchain support is modularized so that additional toolchains can be added in the future. At the time of this release, there is support for the [Arduino-CLI](https://www.arduino.cc/pro/cli) targeted at the Espressif ESP-32.

This is to support the [AWS IOT EduKit](https://aws.amazon.com/iot/edukit/), which is at the core of the SimpleIOT Startup Bundle.

The toolkit and all its dependencies are installed in `~/.simpleiot/_toolchain` directory (unless the path is over-ridden). The mechanism supports multiple versions of the same toolchain to support backward compatibility. 

The `location` parameter specifies whether the toolchain is installed locally on the current device or remotely. Only `LOCAL` is supported in the initial release.

## iot toolchain available
```
iot toolchain available`
```

This command prints out a list of toolchains registered with the system.

<p align="center">
<img src="/img/cli/toolchain-available.png" width="100%" />
</p>


## iot toolchain install

```
iot toolchain install
    [--base="alternate-toolchain-base-path"]
    [--alias="toolchain-short-alias"]
    [--manufacturer="manufacturer-name"]
    [--processor="processor-type"]
    [--os="operating-system-name"]
    [--version="toolchain-version"]
    [--location="install-location-type"]
```

This command can download and install the toolchain (if marked as LOCAL). The system may also configure toolchain libraries to work with the designated device.

Once installed, the toolchain may be used as part of the [iot firmware flash](/docs/documentation/cli/firmware#flash) command to compile, link, and flash a device.


### Parameters:

| Parameter                                                                                 | Value  | Definition                                                                                                                                               |
|-------------------------------------------------------------------------------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--base`                                                                                  | Path   | Alternate directory to install the toolchain. Defaults to `~/.simpleiot/_toolchain`                                                                          |
| `--alias`                                                                                 | String | Shorthand alias for the toolchain (shown in `toolchain available` command                                                                                |
| `--manufacturer` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | String | Name of manufacturer. Defaults to `espressif`.                                                                                                           |
| `--processor`                                                                             | String | Name of the processor. Defaults to `esp32`                                                                                                                   |
| `--os`                                                                                    | String | Name of the operating system. Defaults to `arduino`.                                                                                                         |
| `--version`                                                                               | String | Version number of the toolchain. Defaults to Arduino-CLI version at the time of release (3.3.0)                                                                  |
| `--location`                                                                              | Token  | Location of toolchain installation. Options are `local`, `local_container`, `cloud_container`, and `cloud_server`. Currently, only `local` is supported. |

## iot toolchain uninstall

```
iot toolchain uninstall
    [--base="alternate-toolchain-base-path"]
    [--alias="toolchain-short-alias"]
    [--manufacturer="manufacturer-name"]
    [--processor="processor-type"]
    [--os="operating-system-name"]
    [--version="toolchain-version"]
    [--location="install-location-type"]
```

This command removes the toolchain from the current system. 

:::caution
Any changes made to global settings or environment variables after the toolchain has been installed will have to be removed manually.
:::

### Parameters:

| Parameter                                                                                 | Value  | Definition                                                                                                                                               |
|-------------------------------------------------------------------------------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--base`                                                                                  | Path   | Alternate directory to install the toolchain. Defaults to `~/.simpleiot/_toolchain`                                                                          |
| `--alias`                                                                                 | String | Shorthand alias for the toolchain (shown in `toolchain available` command                                                                                |
| `--manufacturer` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | String | Name of manufacturer. Defaults to `espressif`.                                                                                                           |
| `--processor`                                                                             | String | Name of the processor. Defaults to `esp32`                                                                                                                   |
| `--os`                                                                                    | String | Name of the operating system. Defaults to `arduino`.                                                                                                         |
| `--version`                                                                               | String | Version number of the toolchain. Defaults to Arduino-CLI version at the time of release (3.3.0)                                                                  |
| `--location`                                                                              | Token  | Location of toolchain installation. Options are `local`, `local_container`, `cloud_container`, and `cloud_server`. Currently, only `local` is supported. |

## iot toolchain reset

```
iot toolchain reset
    [--base="alternate-toolchain-base-path"]
    [--alias="toolchain-short-alias"]
    [--manufacturer="manufacturer-name"]
    [--processor="processor-type"]
    [--os="operating-system-name"]
    [--version="toolchain-version"]
    [--location="install-location-type"]
```

This command resets the toolchain settings back to factory versions. This can be used to return the toolchain to a known 'factory version.'

:::caution
Any changes made to global settings or environment variables after the toolchain has been installed will have to be removed manually.
:::

### Parameters:

| Parameter                                                                                 | Value  | Definition                                                                                                                                               |
|-------------------------------------------------------------------------------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--base`                                                                                  | Path   | Alternate directory to install the toolchain. Defaults to `~/.simpleiot/_toolchain`                                                                          |
| `--alias`                                                                                 | String | Shorthand alias for the toolchain (shown in `toolchain available` command                                                                                |
| `--manufacturer` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | String | Name of manufacturer. Defaults to `espressif`.                                                                                                           |
| `--processor`                                                                             | String | Name of the processor. Defaults to `esp32`                                                                                                                   |
| `--os`                                                                                    | String | Name of the operating system. Defaults to `arduino`.                                                                                                         |
| `--version`                                                                               | String | Version number of the toolchain. Defaults to Arduino-CLI version at the time of release (3.3.0)                                                                  |
| `--location`                                                                              | Token  | Location of toolchain installation. Options are `local`, `local_container`, `cloud_container`, and `cloud_server`. Currently, only `local` is supported. |
