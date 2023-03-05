---
id: solo
title: Solo
---

# Solo Builder

:::caution
If you haven't already set up an AWS account, [**please do so now**](account). To proceed, you should have an _AWS Profile_ configured on your machine.
:::

We will be using the SimpleIOT Command-Line-Interface (CLI) to:

- Set up the back-end
- Install the Arduino-CLI toolchain.

Once done, you can proceed to create a _Hello World_ application. If you obtain a SimpleIOT Starter Kit, you will be able to proceed and build the _Sensor Demo_.

## Installation pre-requisites

For all Users:

- Latest version of Python from [https://python.org](https://python.org) (minimum 3.9+)
- Silicon Labs [CP210x USB to UART Bridge drivers](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers). Under Windows, once you plug in an M5Stack Core2 device, it should automatically install this driver. You will have to download the above driver and manually install it if it fails. Under MacOS, you will need to download and install it manually.

Additionally, to be able to install the back-end:

- Docker Desktop: [https://docs.docker.com/desktop/](https://docs.docker.com/desktop/)

Installing these may require other dependencies on Windows or Mac. Once installed, the system may need to be rebooted.

## Install SimpleIOT CLI

Once you have the above set up, installing the CLI on your system is straightforward.

Open a powershell (Windows) or terminal (Mac) terminal window, then run:

```python
pip install simpleiot-cli
```

Once installed, you can test the command-line interface:

```
% iot help
Usage: iot [OPTIONS] COMMAND [ARGS]...

Options:
 --help Show this message and exit.

Commands:
 auth User Authentication
 cloud Cloud back-end provisioning
 data Data set and retrieve
 datatype Model DataType management
 device Device provisioning
 firmware Generate sample source
 location Location management
 model Manage Models
 project Project management
 team Team management (CLI only)
 template Project Template management
 toolchain Project Template management
 twin Manage Digital 3D Twin files
 update OTA Firmware Updates
```

## Install the Back-end

You are ready to install the back-end if you have already set up your AWS Account (or added a profile to your `~/.aws` directory).

This step will download a pre-built Docker image to your system and invoke it. The image has all the pre-requisites needed to configure a SimpleIOT stack. It will ask you a few questions, then start the process.

:::tip
This step usually takes between 20-30 minutes. Please do not interrupt it, otherwise the system will be in a half-baked stage. 

If you encounter any errors, make sure you run `iot cloud uninstall` to clear out the debris before trying again.
:::

:::danger

Do NOT run the installer while on a VPN!

If this happens, the final database setup stage may freeze when trying to securely connect to the database. If this happens, Ctrl-C out, uninstall (see above), and try installing again, this time without the VPN connection.

:::


To start, open a terminal window and run:

```python
iot cloud install
```

A series of log messages from Docker will show that the container is getting downloaded. Once ready, you will be asked a few questions to bootstrap the process:

<p align="center">

<img src="/img/install/bootstrap.png" width="100%" />

</p>

:::info
None of the information you provide is sent anywhere outside your account or system. The questions are there only so you can distinguish one of your _Teams_ from another.
:::

The questions are:

- **Choose AWS profile**: 
  - If you have more than one AWS profile on your machine, you will be shown a list of profiles. Select one using the arrow keys and press ENTER.
  - If you only have a single _default_ profile, that will be used, and you will not be prompted. 
  - If you do not have ANY accounts configured, the installer will ask you to enter your AWS Secret Key and ID (from your [account setup](account)).
- **Organization Name**: Choose a name that represents your organization. If you are a solo developer, enter your name. Or if you have grand ambitions: _"{enter name} Enterprises"_ or _"Intergalactic {{enter name}}." **Go ahead, Think Big!**
- **Administrator Email**: This is your email. Make sure it's a valid one. You will be e-mailed an acknowledgment once the system is set up. The information is not transmitted anywhere outside your own account.
- **Dashboard Admin Password**: The system generates a difficult-to-guess password. You can change it if you want, but it must comply with the [Amazon Cognito](https://aws.amazon.com/cognito/) minimum password requirements. You may also want to copy and save this password someplace safe. You will need this to log in with the CLI.
- **Short Team Name**: This is the name you will use to refer to the <b>Team</b> when accessing the back-end. Even if you will only ever have a single Team, you still need to have a team name defined. The system will suggest a name based on your AWS profile (<i>default</i> if you only have one AWS account configured). 

:::danger
The name of the team will be used to create a settings directory. The name should be short, without any spaces, and consist of characters allowed as directory names. i.e., characters, numbers, and a hyphen. 

No punctuation or non-ASCII characters should be used. Seriously. Keep it boring.
:::

Once you have answered these questions, you will be asked to confirm and hit ENTER. Once the process starts, you can watch it go or take a 20-30m break. 

If the account has insufficient AIM privileges or something goes wrong, the system will try to rewind and delete what is created. However, you still have to run the following to clean out extra resources (like SSH keys, S3 buckets, etc.):

```python
iot cloud uninstall
```

### Installer stages

The installer process has three stages:

- Bootstrap
- Deploy
- Database setup

When you run the `iot cloud install` step, it runs all three back-to-back. Once done, you should see a message indicating success. If you see that, you can proceed to install the toolchain.

If you get any errors, check the _Troubleshooting_ section, uninstall, fix the problem, and start again. You can re-use the same answers as before, except when you run the installer, a new password is auto-generated.

## Installing the Toolchain

The system can be used to flash and build firmware for an M5Stack Core2 device. First, you must install the **Arduino CLI** and the ESP-32 built toolchain, along with all the necessary libraries.

A single command does all this for you:

```python
iot toolchain install
```

This command downloads and installs the **arduino-cli** command and then configures it. It installs all the necessary 3rd party components, including the [simpleiot-arduino](https://github.com/awslabs/simpleiot-arduino) library.

If you get any errors, make sure you uninstall the toolchain, fix the problem, then try again:

```python
iot toolchain uninstall
```

After installing the toolchain, you can verify that everything is set up correctly by connecting the M5Stack Core2 device via a USB-C cable. On the Mac, you should have installed the CP210x USB to UART drivers as part of the pre-requisite. On Windows, you may be prompted to locate the downloaded driver and have it installed.

To upload a pre-built binary firmware example, make sure the M5Stack Core2 device is plugged in, then run:

```python
iot firmware m5demo
```

You may be prompted to choose the USB port depending on how many USB devices you have connected to your system. If there is only one M5Stack Core2 device, that will be selected. The system will then flash the device with the demo binary. 

If you see the following, your installation is complete:

<p align="center">

<img src="/img/install/simpleiot-success.gif" width="40%" />

</p>
