---
id: preload
title: DB Preloading
---

During [installation](/docs/install/intro), the system goes through three phases:

1. **Bootstrap**: where core security credentials are created, and the user is asked for Team information. It writes a file with the values of responses to the questions in `~/.simpleiot/{team-name}/bootstrap.json`.
2. **Deploy**: where the answers provided are passed to a [CDK](https://aws.amazon.com/cdk/) script. This will create the entire back-end infrastructure. The contents of the `bootstrap.json` file are passed to the script. The CDK outputs values for whatever services it provisioned in `~/.simpleiot/{team-name}/cdkoutput.json`. The contents of `boostrap.json`, this file, and the system defaults in `simpleiot/iotapi/iotcdk/installer/defaults.json` are merged to create a single configuration JSON file located at `~/.simpleiot/{team-name}/config.json. 
3. **Database Setup**: a local script is run to access the database, create the database structure, and pre-load it with some test data loaded from `simpleiot/iotapi/db/dbdata.json`.

This last step creates the following elements:

- **Projects**: the demo project is called _Sunshine_
- **Models**: demo model definitions.
- **Devices**: these are 'mock devices' in that they are not actual devices with IOT certificates registered with AWS IOT. They are registered in the SQL database and can be interacted with using the `iot device` CLI commands.
- **Access roles**: these are placeholders for future fine-grain roles.
- **Users**: Administrator users created in the Cognito user pool. The password generated during the installation phase will be assigned to the administrative user. This username/password can be used to log in to the system using the `iot auth login` CLI command.
- **Templates**: Templates allow definition of common Project/Model/Datatype structures. A JSON structure defines the behavior. It can be expanded to allow custom projects.
- **Generators**: Generators are templates for code projects. They can be used at runtime to create a firmware package with the certificates and project credentials filled in. The _HelloWorld_ and _SensorDemo_ projects are installed as generators and can be used by the `iot firmware generate` command to create a starter project quickly.
- **System Settings**: System settings are Team-wide settings stored in the database. These can be used to provide dynamic values to the lambdas at runtime.

Once this step is concluded, the system is configured and ready for use.

All three steps and pre-requisites are packaged inside a compiled Docker container image at [https://hub.docker.com/r/amazon/simpleiot-installer](https://hub.docker.com/r/amazon/simpleiot-installer). 

The [SimpleIOT CLI package](https://pypi.org/project/simpleiot-cli/) when invoked with the [iot cloud install](/docs/documentation/cli/cloud) command will download the Docker image and invoke it. The image will run through the above three stages to configure the installation on the cloud. The Docker image is set up to access the `~/.aws` and `~/.simpleiot` directories on the local device so configuration data can be read and written onto the local system's disk.

To create a custom installer or provide custom settings, you will want to download the open-source to the [SimpleIOT installer](https://github.com/awslabs/simpleiot), and install the necessary pre-requisites, and use the provided scripts to _bootstrap_, _deploy_, and run _dbsetup_.