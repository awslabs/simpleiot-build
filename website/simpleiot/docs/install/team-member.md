---
id: team-member
title: Team Member
---

## Installation pre-requisites

For all users:

- Latest version of Python from [https://python.org](https://python.org) (minimum 3.9+)
- Silicon Labs [CP210x USB to UART Bridge drivers](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers). Under Windows, once you plug in an AWS EduKit device, it should automatically install this driver. You will have to download the above driver and manually install it if it fails. Under MacOS, you will need to download and install it manually.

Installing these may require other dependencies on Windows or Mac. Also, depending on your system's security settings, the system may need to be rebooted.

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
 cloud Cloud backend provisioning
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

## Installing the Toolchain

The system can be used to flash and build firmware for an AWS IOT Edukit device. First, you must install the **Arduino CLI** and the ESP-32 built toolchain, along with all the necessary libraries.

A single command does all this for you:

```python
iot toolchain install
```

This command downloads and installs the **arduino-cli** command and then configures it. It installs all the necessary 3rd party components, including the [simpleiot-srduino](https://github.com/awslabs/simpleiot-arduino) library.

If you get any errors, make sure you uninstall the toolchain, fix the problem, then try again:

```python
iot toolchain uninstall
```

After the toolchain is installed, you can verify that everything is set up correctly by connecting the _AWS IoT EduKit_ device via a USB-C cable. On the Mac, you should have installed as part of the pre-requisite the Silicon Labs [CP210x USB to UART Bridge drivers](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers). You may be prompted to find the downloaded driver and install it on Windows.

To upload a pre-built binary firmware example, make sure the EduKit device is plugged in, then run:

```python
iot firmware m5demo
```

You may be prompted to choose the USB port depending on how many USB devices you have connected to your system. If there is only one EduKit device, that will be selected. The system will then flash the EduKit with the demo binary. 

If you see the following, your installation is complete:

<p align="center">

<img src="/img/install/simpleiot-success.gif" width="40%" />

</p>


# Joining a Team

You can access **Projects**, **Models**, and **Devices** in an existing **Team** once invited by the Administrator of that team. Once you receive the invitation and attached credentials, you have to accept the invitation and `join` the team. This allows you to choose your own password for the account.

From an administrator's point of view, an invitation is a **three-step** process:

<br />

<p align="center">
<img src="/img/install/team-invite-step.png" width="70%" />
</p>

1. The administrator generates an invitation with the invitee's unique username and email address. This generates a secure _invitation file_ and a _private key_. The administrator then sends these to the recipient (via email, text, or any other messaging app).
<br />
<p align="center">
<img src="/img/install/team-join-step.png" width="70%" />
</p>

2. The recipient (you) will use the _invitation file_ and the _key_ to accept and join the team. You will be prompted to enter a password of your own choosing for that account.
<br />
<p align="center">
<img src="/img/install/team-login-step.png" width="50%" />
</p>

3. You can now log in with your own username and password.

## The invitation

You can join as many **Teams** as you want. However, each should have a unique name. 

<p align="center">
<img src="/img/intro/intro-diagram-04.png" />
</p>

The team administrator will invite you by sending you an email or message with an encrypted  _Invitation File_ (ending in `.simpleiot`) and a unique key (in the form of a string, like: `ZkJLQlJVR1p3VFZvY0lGMS1weUdpTF95UlhCd3BDLU00SjZFTkQ2S2JUaz0=`).

To join the team, save the attached invitation file on your system, then use the SimpleIOT CLI and join as follows:

```python
iot team join --invite={path-to-invite-file} --key='{key-string}' --password='your password'
```

Your password should be difficult to guess and consist of lower and uppercase letters, numbers, and digits. We recommend having at least 8 characters.

If you do not enter the `--password` parameter, you will be prompted to enter it. Once joined, your team name will be displayed.

Once accepted, you are ready to log in to SimpleIOT under the team.

## Managing Teams and Environment Variables

SimpleIOT CLI commands expect the name of the **Team** to be present on the command line with a `--team={team-name}` parameter.

If you know you will only be dealing with a single **Team**, add the team name as an environment variable and skip having to add `--team` to every command.

On Macs:
```bash
export IOT_TEAM="{team-name}"
```
This will only take effect for the duration of your terminal session. To make it permanent, add the above line to your `.bashrc` or `.zshrc` file, then restart the terminal.

On Windows Powershell:
```powershell
$env:IOT_TEAM="{team-name}"
```

To make it permanent, use the following command in Powershell (all on one line):

```powershell
[System.Environment]::SetEnvironmentVariable('IOT_TEAM','{team-name}',[System.EnvironmentVariableTarget]::User)
```

Close the Powershell window and restart it then to verify that it was accepted:

```
dir env:
```

Note the `:` colon at the end of the line. This will print out all the environment variables for the current user. Make sure `IOT_TEAM` is present.

## Logging in

To login into the system, you will use the `auth login` command and provide your user credentials:

```python
iot auth login --username=admin --password='{password}}' --team='{team-name}'
```

If you have specified the `IOT_TEAM` environment variable, you can skip the `--team` part. 

:::tip
For all subsequent commands, we will assume the environment variable has been set and omit the `--team` parameter from the listed examples.
:::

```python
iot auth login --username=admin --password='{password}}'
```

If you omit the `--username` or `--password` parameters, you will be prompted to enter them.

These will be saved to your system inside the secure keychain. After the first time, you can log in to the system by entering:

```python
iot auth login
```

To clear the cached credentials from the keychain, you can logout:

```python
iot logout
```

To permanently erase the credentials from the keychain: 

```python
iot logout --clear
```

For security reasons, login tokens are valid for only an hour. If you try to execute any command and the login has expired, you will receive an error message. Instead, invoke `iot auth login` to refresh the token using your cached login credentials for that team, then continue.

## Shared Environment

:::caution
The SimpleIOT back-end is an open, shared environment designed for development and collaboration. This means all registered users can access all projects, models, and provisioned devices.

It is recommended that each person create a project prefixed with a unique name or initials to prevent accidentally accessing someone else's work.
:::

## Next Steps

Congratulations! 

Now that you are logged in, you can proceed to create an example connected device example. The _Starter Workshop_ will show you how to use the _SimpleIOT EduKit Starter Kit_.

[ ENTER LINKS TO WORKSHOP AND STARTER KIT ]
