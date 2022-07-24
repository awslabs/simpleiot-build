---
id: cloud
title: Cloud
---

```
iot cloud install

iot cloud uninstall 
    [--team="team-name"] 
```

In the early days of SimpleIOT, installing the back-end required setting up a range of dependent tools, obtaining the source to the installer, and stepping through the process, one at a time. Not exactly _simple_.

In the current incarnation, the installer process is packaged inside a Docker container, [available on DockerHub](https://hub.docker.com/r/amazon/simpleiot-installer). This allows the installation without going through all the above steps.

Instead, you only need to install the CLI and [Docker Desktop](https://www.docker.com/products/docker-desktop/). Once set up, you can invoke the entire installer back-end with a simple command:

```
iot cloud install
```

This command will download the Docker image (if needed) and invoke the interactive installer process. First, you will be asked to choose an AWS profile (skipped if all you have is the _default_ profile), then name your team, select an administrator password, and off it goes.

The installer uses the answers to invoke an [AWS CDK](https://aws.amazon.com/cdk/) session to provision the back-end and wire up all the serverless components together. The process typically takes anywhere from 15-30 minutes. Next, a directory will be created in `~/.simpleiot` (inside your home directory). The generated settings and values for the specific team will be saved here. You can view these by looking at `~/.simpleiot/config.json` (but please don't modify the file).

The converse of the process is to delete the back-end cloud infrastructure via:

```
iot cloud uninstall --team={team-name}
```

This command will load the installer Docker image and invoke the operation to clean the back-end. Note that this will also delete the directory in the `~/.simpleiot` folder. 

:::danger

The `uninstall` operation is not reversible. All databases, AWS Lambda functions, and settings will be permanently deleted.

However, if you have created IOT device instances at runtime, those will NOT be deleted and must be manually removed.
:::


## iot cloud install

Used to create the cloud back-end infrastructure. You will be prompted to enter questions specific to your team installation.

<p align="center">

<img src="/img/install/bootstrap.png" width="80%" />

</p>


## iot cloud uninstall

Used to clean out the back-end infrastructure.

### Parameters

| Parameter &nbsp;&nbsp;&nbsp;&nbsp;  | Value     | Definition                            |
|-------------------------------------|-----------|---------------------------------------|
| `--team`                            | team name | Name of team to clear out and remove. |
