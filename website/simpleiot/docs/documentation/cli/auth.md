---
id: auth
title: Authentication
---

```
iot auth login 
    [--team="team-name"]
    [--username={username}] 
    [--password={password}] 
    [--clear]
    
iot auth logout 
    [--team="team-name"] 
    [--clear]
```
<br />
Access to the back-end is protected with [JWT tokens](https://jwt.io/). However, for security reasons, JWT tokens typically
expire after a short time (default is one hour). To issue any CLI commands, you must first log in.

:::tip

You can avoid having to enter the `--team` parameter for every command by defining the `IOT_TEAM` environment variable. This is **highly** recommended to prevent inadvertently accessing and modifying settings on a different team. The following examples assume that the `IOT_TEAM` variable is defined, so it will not be shown for each command.

For example, on the Mac;
```
> export IOT_TEAM="my-team-name"
> iot auth login
```
And on Windows:

```
> $env:IOT_TEAM="my-team-name"
> iot auth login
```

:::

## First Login

When the back-end is first installed, an administrative user (`admin`) is created, and a random password is assigned for that user.
In v0.1 of the system, there is only support for a single user. Therefore, you will want to use the password generated during installation. If you need to retrieve the password, you can log in to the console for your account and view that password inside Systems Manager/Parameter Store, saved as a secure key.

To log in, you can use the `auth login` command. There are several ways to pass the username to the command
line:

1. **Command line parameters**:

```
> iot --team={team} --username={username} --password={password} --clear
```

2. **Interactive**: You will be prompted to enter the username and password:

```
> iot --team=myteam auth login
Enter username: admin
Enter password: *******
```

3. **Environment variable**: Set the username and password in the `IOT_USERNAME` and
`IOT_PASSWORD` environment variables:

```
> iot auth login
```

If the values are accepted, you will see a successful message:

```
> iot --team=myteam auth login
Enter username: admin
Enter password: *******
Logged in as user: admin.
```

If you get an error message, it is likely one of:

- Invalid username or password.
- Failing to pass a valid `team-name` either on the command line or set as an environment variable.
- An issue with your Amazon Cognito User Pool settings.

If the `--clear` flag is specified, past login credentials for this user for this team will be erased before creating new credentials.

The `--team` parameter can be avoided if the environment variable `IOT_TEAM` is set.

Note that you can have multiple logins, one for each team. The keychain stores login credentials based on individual team names. Keychain caching of multiple user credentials per team is not supported.

## Subsequent logins

Once logged in, you can use the subsequent CLI commands. All commands are sent securely to the server, and the results are shown in the terminal.

The login with parameters will only be needed the first time you log in. After that, the *username* and *password* will be saved in your secure system keychain. Subsequent times, you do not need to re-enter the username password.

If you go away and come back sometime later, you can refresh your login token as follows (on Mac):
```
> export IOT_TEAM="myteam"
> iot auth login
```

And on Windows:
```
> $env:IOT_TEAM="myteam"
> iot auth login
```

## Logout

If you want to remove the current token, you can issue the `logout` command:

```
> iot auth logout
```

To remove the cached credentials in the keychain, you can also add a ``--clear`` flag:

```
> iot auth logout --clear
```


## iot auth login

Used to log in using the Amazon Cognito credentials provider.

### Parameters

| Parameter &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Value               | Definition                                                                                    |
|------------------------------------------------------------|---------------------|-----------------------------------------------------------------------------------------------|
| `--team`                                                   | SimpleIOT Team Name | (Required) name of 'team' to access. Defaults to the value of *IOT_TEAM* environment variable.    |
| `--username`                                               | Username            | Name to login with. If `IOT_USERNAME` environment variable is defined, that will be used.     |
| `--password`                                               | Password            | Password for login. If `IOT_PASSWORD` environment variable is defined, that will be used.     |
| `--clear`                                                  | None                | Clear credentials in keychain before setting them. Used to reset if credentials are mixed up. |

## iot auth logout

Used to log out and (optionally) clear cached credentials.login

### Parameters

| Parameter &nbsp;&nbsp;&nbsp;&nbsp; | Value | Definition                             |
|------------------------------------|-------|----------------------------------------|
| `--clear`                          | None  | Clears credentials cached in keychain. |

