---
id: intro
title: Introduction
---
<div align="center">
<img src="/img/cli/Slide0.png" width="100%"/>
</div>

Welcome to **SimpleIOT**, a framework for creating and managing cloud-connected devices.

Here you will find documentation for the Command-Language-API (CLI) that allows you to interact with the system using a terminal or scripting tools. The CLI relies on the SimpleIOT Application Programming Interface (API) services. However, it also performs additional services, like back-end installation, local certificate management, firmware generation, and
compilation and flashing to a device.

You can obtain help on all the available options by issuing the `iot --help` command:

<div align="center">
<img src="/img/cli/cli-help.png" width="70%"/>
</div>
<br />
Help on individual commands can be obtained by issuing the command name followed by `--help`:
<p />
<div align="center">
<img src="/img/cli/cli-auth-help.png" width="70%"/>
</div>
<p />

:::info
Throughout this site, shell commands to be entered will be shown prefixed by `>` to disambiguate them from what is displayed. When entering commands in a terminal program, make sure you omit those.

For example, if shown:

```
> iot project list
```

Enter into Terminal/Powershell:
```
iot project list
```
:::


## Installation


There are two ways to install the CLI:

1. Install from `pip`. This is the latest mainstream version and the recommended method. To install:

```
> pip install simpleiot-cli
```
2. Install from source. This is b if you are curious to see how the system works and are comfortable with Python development.

To download, clone [the GitHub source repository](https://github.com/awslabs/simpleiot-cli), then install from there:

```
> git clone https://github.com/awslabs/simpleiot-cli.git
> pip install .
```

## Concepts

Please review the [Welcome to SimpleIOT](/docs/intro) section for a tour of the basic concepts. 

## Interaction with the system

The CLI takes commands issued from a terminal or script, transmits them to the server, performs any local operation that needs to be performed, and displays the result.

For most operations, you can invoke similar functionality using the API. However, certain commands (such as those having to do with the toolchain or firmware compilation) only operate on the local system and do not use the back-end API.

### Teams

The SimpleIOT system supports the concept of a **Team**, where one or more people may work on the same project. As a project administrator, you will be asked to select a *team name*when installing the back-end system. Please review the [installation section](/docs/install/intro) for more information.

The result of the answers to the installer step is saved under the team name inside the `~/.simpleiot` directory. This is why choosing a team name that contains only upper, and lowercase ASCII characters and numbers is important.

Once a team name is created by the person installing the system, they can invite others to join the team. More information in the [iot team invite](/docs/documentation/cli/team#iot-team-invite) section.

:::caution
You can avoid having to enter the `--team` parameter for every command by defining the `IOT_TEAM` environment variable. This is highly recommended. For example:

On Mac:
```
> export IOT_TEAM="my-team-name"
> iot auth login
```

On Windows:
```
> $env:IOT_TEAM="my-team-name"
> iot auth login
```
:::

If you are managing multiple installations (for example, *dev* vs. *prod*), you can switch teams easily by providing its name in the environment variable or on each command as a parameter for
the `iot` command, i.e.:

```
> iot project list --team=team-dev 
> iot project list --team=team-prod
```

These will each refer to different installations of SimpleIOT.
