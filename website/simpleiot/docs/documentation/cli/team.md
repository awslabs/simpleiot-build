---
id: team
title: Team
---

```
iot team list
    [--team="team-name"] 

iot team invite
    --team="team-name"
    --username="new-member-username"
    --email="new-member-email"
    [--path="output-path-for-invite"]
    
iot team bulkinvite
    [--team="team-name"]
    [--invite="input-csv-file"]
    [--alias="invite-team-alias"]
    [--mailconf="email-config.file"]
    [--via="mailing-service-name"]
    
iot team join
    [--invite="path-to-invite-file
    [--key="invite-key"]
    [--password="user-chosen-password"]
    [--alias="team-name-override"]

iot team leave
    [--username="username-to-drop"]

```
<br />

Each back-end instance of SimpleIOT is assigned a **Team** name during the installation process. The name can be anything you want, although it should only consist of upper/lowercase ASCII and hyphen and dash characters. This is because a directory with that name is created under `~/.simpleiot` home directory.

Each Team name maps to an AWS *profile*, which itself defines account access credentials and region. The following diagram illustrates how Team names are mapped to AWS credentials.

<p align="center">

<img src="/img/team-credentials.png" width="80%" />

</p>

The administrator creates a team by running the installer via `iot cloud install` and providing the team name. Once installed, the `~/.simpleiot/{team-name}/config.sys` contains all the generated credentials and the information needed to associate the Team name with the AWS profiles.

The administrator can then invite others to the team. The process is described in the [Installation Administrator](/docs/install/admin#inviting-team-members) section.

The process involves the administrator issuing `iot team invite` to create an invitation. This consists of an invitation file and a secret key. These can be sent to the user, who will then use the `iot team join` command along with the invitation file and key to accept the invitation and choose their own password.

The invitation file contains a smaller version of the `config.sys` file with the minimum amount of information needed to connect to the SimpleIOT back-end. It is encrypted, and the file itself and the key can be used to decrypt the file on receipt.

The user can then select their own password for their account, then use those credentials to log in to SimpleIOT.

:::tip
You can avoid having to enter the `--team`, the `--project`, or the `--model` parameter for every command
by defining the `IOT_TEAM`, `IOT_PROJECT`, or `IOT_MODEL` environment variables.
The following examples assume that the `IOT_TEAM` variable is set ahead of time, so it will not be repeated for each command.
:::

On the Mac:
```
> export IOT_TEAM="my-team-name"
> export IOT_PROJECT="my-project"
> export IOT_MODEL="my-model"

> iot datatype list
```
On Windows:
```
> $env:IOT_TEAM="my-team-name"
> $env:IOT_PROJECT="my-project"
> $env:IOT_MODEL="my-model"

> iot datatype list
```
Instead of:
```
> iot datatype list --team="my-team-name" --project="my-project" --model="my-model"
```
## iot team list

```
iot team list
    [--team="team-name"] 
```
This command lists all the Teams known to this system. It searches for them in the `~/.simpleiot` directory.

Specifying the `--team` parameter with a team's name will print out more detailed information on the team.

![SimpleIOT Header](/img/cli/team-list.png)


## iot team invite
```
iot team invite
    --team="team-name"
    --username="new-member-username"
    --email="new-member-email"
    [--path="output-path-for-invite"]
```
Invite others to join this Team. The administrator can only invoke this command. The administrator is the one who has a fully-defined `config.sys` file on their system since they are the ones who ran the installer.

To invite someone, you must assign them a unique username and provide their email address. These are used to register a temporary user account inside Cognito. The command will generate a `{name}.simpleiot` invitation file and a secret key.

![SimpleIOT Header](/img/install/team-invite-screenshot.png)

The administrator must securely transmit this information to the recipient in whatever way they choose.

The file will be written into the current directory unless a `--path` parameter is provided.


### Parameters:

| Parameter    | Value       | Definition                                 |
|--------------|-------------|--------------------------------------------|
| `--team`     | Team Name   | Team to which the user is added.           |
| `--username` | Username    | Username to assign to the invitee.         |
| `--email`    | Email       | Email address assigned to the user in Cognito. |
| `--path`     | Output path | Where the invitation file will be written. |

## iot team bulkinvite
```
iot team bulkinvite
    [--team="team-name"]
    [--invite="input-csv-file"]
    [--alias="invite-team-alias"]
    [--mailconf="email-config.file"]
    [--via="mailing-service-name"]
 ```

The `bulkinvite` command is designed for situations where a large number of invites have to be generated and sent at the same time. For example, in support of a workshop or a class. To use this command, you must configure an SMTP service provider and provide those access credentials. There are several such providers, including:

- [Amazon Simple Email Service](https://aws.amazon.com/ses/)
- [PostMark](https://postmarkapp.com/)
- [Sendgrid](https://sendgrid.com/)
- [SendInBlue](https://www.sendinblue.com/)
- [SparkPost](https://www.sparkpost.com/)
- etc.

Once signed up, you will need to obtain the following information from each provider:

- SMTP Server address
- SMTP Username
- SMTP Password
- SMTP Port (default is 587)

In addition, you will need to decide what 'From' address will be used in the email. Some providers require that the 'From' address be verified to avoid marking messages as spam.

Once you have this information, create a file called `simpleiotmail.conf` (you can call it whatever you want, but the CLI looks for that file by default). [Here's a template](https://github.com/awslabs/simpleiot-cli/blob/main/simpleiot/simpleiotmail.template) for one such file.

The file consists of one or more mail provider configuration sections, each with a unique name and in this format:
```
[mail-provider]
smtp_server={replace with DNS of SMTP server}
smtp_username={SMTP username provided by email service}
smtp_password={SMTP password provided by email service}
from_email={email address to use in the 'from' field of invites}
smtp_port=587
```

For `mail-provider` specify a short, descriptive name, for example: `mailgrid`. You can select which provider to use on the command line.

Make sure to fill out the values for the `smtp_server`, `smtp_username`, `smtp_password`, and `from_email` parameters and make sure they are valid. 

The second step is to create a simple comma-separated-value (CSV) file with a list of username/email addresses for invitees. [Here's a link](https://github.com/awslabs/simpleiot-cli/blob/main/simpleiot/invite.csv.template) to an example.

The file should look something like this:

```
email, username
jdoe@example.com, jdoe
ramin@example.com, ramin
```

Enter as many items as you need, then save the file. You can call it whatever you want, but the CLI defaults to a file called `invite.csv`.

To invoke the bulk-invitation command:

```
> iot team bulkinvite --team="myteam" --via="email-provider"
```

If you named your files something other than `simpleiotmail.conf` and `invite.csv` you can provide them on the command line:
```
> iot team bulkinvite --team="myteam" --via="email-provider" --mailconf="{mail-conf}" --input="{csv file}"
```

The bulk invite system runs through each provided invitee, generates an invitation file/key for them, generates a custom email with the attachments, and sends an email to them via the email provider.

:::caution
The content of the email is currently fixed inside the CLI `team.py` command. Please file a GitHub issue if you prefer this to be kept in a separate, customizable file.
:::

The text of the message reads as follows:

```
You have been invited to join the '{team}' SimpleIOT Team!

To join, you will need to:

1) Install the SimpleIOT command-line interface. Instructions are at: http://simpleiot.net.
2) Save the attached invitation file to your local file system.
3) Copy/paste the temporary key below. You will be asked for it in the next step.

   {key}

4) Invoke the command:

   iot join --invite={{path-to-invite-file}} --key='{key}'
   
5) You will be asked to enter a password for your account. It should contain upper and lower case digits and a special character.
6) If successful, you will be shown your team name and the link to your team's web dashboard.
7) You can log in to the dashboard with your username '{invite_username}' and your chosen password.
8) For command-line access, please login with:

   iot login --team={team_as} --username={invite_username}
   
You will be prompted for your chosen password.

Congratulations! Now you are ready to use the SimpleIOT system.

Please proceed with the workshop or tutorial to see how easy it is to create a cloud-connected device.
"""
```

Unlike the single invite mechanism, no files are saved to the local disk.

:::caution
If there is a problem with the SMTP transmission mechanism, the username/emails will have been already registered in Cognito. The system has no way to tell if the email was not received.

If you encounter a problem, please remove the invitee's record from Cognito before trying again, otherwise the invite generation mechanism will issue an error indicating the user is already registered.

User records can be deleted via the Cognito console or the `iot team leave` command.
:::

### Parameters:
| Parameter                                         | Value         | Definition                                                                                                                   |
|---------------------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------|
| `--team`                                          | Team Name     | Team to which the user is added.                                                                                             |
| `--invite`                                        | Path          | Path to CSV file with a list of invitees. Defaults to `invite.csv`.                                                            |
| `--alias`                                         | Team name     | Alias for the team name to use inside the invite file. If you do not want the invitee to use the same team name on their system. |
| `--mailconf` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Path          | Path to email sender configuration file. Defaults to  `simpleiotmail.conf`.                                                  |
| `--via`                                           | Mail provider | Configuration setting name in the mail configuration file. Defaults to `ses`.                                                | 


## iot team join
```
iot team join
    [--invite="path-to-invite-file
    [--key="invite-key"]
    [--password="user-chosen-password"]
    [--alias="team-name-override"]
```

The recipient of an invite can join the team if they provide the invite file and key generated by an administrator.

To do so, they will have installed Python and the [SimpleIOT CLI](https://pypi.org/project/simpleiot-cli/).

To join, they will need to save the invite file to their local disk, then run the following command:

```
> iot team join --invite="{invite file path}" --key="{invite key in message}"
```

At this point, if the key and the invite file match, they will be prompted to enter a unique password for their account. The password should comply with Cognito uniqueness rules (at least eight characters, upper and lower case, a number, and a symbol). 

The user can override the team name assigned by the administrator. Instead, they can choose a different name using the `--alias` parameter. 

However, that name has to comply with local filesystem rules (characters, numbers, hyphen, or underline). If they choose a different name, that will be the name they will use for all their subsequent interactions as the `--team` parameter value or defined for the `IOT_TEAM` environment variable.

Once successful, the [user can now login for the first time](http://localhost:3000/docs/documentation/cli/auth#first-login) using the `iot auth login` command and providing their assigned username and chosen password.


### Parameters:
| Parameter                                   | Value     | Definition                                                                            |
|---------------------------------------------|-----------|---------------------------------------------------------------------------------------|
| `--invite`                                  | Path      | Path to invite file sent by the administrator.                                            |
| `--key`                                     | String    | Key secret sent by the administrator as part of the invitation.                               |
| `--password` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Password  | Password to use for first login. If not specified, the user will be prompted to enter it. |
| `--alias`                                   | Team name | Alias for the team name to use instead of the one in the invite file.                     |

## iot team leave

```
iot team leave
    [--username="username-to-drop"]
```

The administrator can only use this command. It permanently removes the user from the Cognito username pool.

:::danger
Be careful when using this command on an active user. 

Once removed, the user can no longer log into the SimpleIOT system. All the files stored on their own machine, as well as projects, models, and devices they have created, will remain untouched. But they will no longer be able to log in via the CLI to manage them.

You will need to send them a new Team invitation to allow them to log in again.
:::

### Parameters:
| Parameter    | Value     | Definition                                     |
|--------------|-----------|------------------------------------------------|
| `--username` | User name | Name of the user to drop from the Cognito user pool | 

