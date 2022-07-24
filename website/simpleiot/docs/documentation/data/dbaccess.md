---
id: dbaccess
title: RDS Database Access
---

:::danger
This section is focused on the administration of the low-level database. Most administrators or end-users will not need to deal with these issues. 

It is designed to ensure that your SimpleIOT infrastructure is not accessible to anyone not authorized to access the underlying system.
:::

### Background

When the [back-end is installed](/docs/install/admin#install-the-back-end), it deploys a set of services on AWS:

<div align="center">
<img src="/img/data/architecture.png" width="100%"/>
</div>

Databases such as DynamoDB and Timestream collect runtime information on each device. The RDS/Postgres back-end, however, contains information on **Projects**, **Models**, **Datatypes**, and individual **Devices**.

To maintain security, the RDS database is deployed inside a logically isolated virtual network, also known as [Amazon Virtual Private Cloud](https://aws.amazon.com/vpc/). Access to resources inside the VPC is restricted by network access rules called [Security Groups](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html).

By default, SimpleIOT does not provide access to the RDS database from the outside world. The only way to reach the database is [via secure SSH](https://aws.amazon.com/premiumsupport/knowledge-center/rds-mysql-ssh-workbench-connect-ec2/).

Another method is to use a separate Amazon EC2 instance called a _bastion host_. [More info here](https://aws.amazon.com/premiumsupport/knowledge-center/rds-connect-ec2-bastion-host/). The administrator can connect to the bastion host, allowing proxy-SSH access to the RDS/Postgres instance.

To enable this, there are two items to consider:

1. To gain SSH access to the bastion host, you need secure encryption key files to allow a secure SSH tunnel to be created.

2. The bastion host has its own access rules, which limit SSH access from the IP address where the system was installed. If your ISP changes your outbound IP address or you are on a company VPN that changes your IP address, the EC2 instance will refuse access.

### SSH keys

During the back-end installation process, an SSH key pair is created, and the file is downloaded to the installer's local system.

This file is saved in:

```
~/.simpleiot/{project}/certa/simpleiot-bastion-keypair.pem
```

:::danger
The SSH bastion keypair file needs to be stored in a secure place. If it is accidentally deleted, you will not be able to access the back-end RDS database from the outside world. 

If it falls into unauthorized hands, a second level of security prohibits access to the database from any IP address not matching the device on which the system was installed.

Please note that the SimpleIOT system will continue to function, and you can access the database from the RDS Console. However, resetting data and monitoring it from third-party applications will no longer be possible.
:::

### Bastion Host Access

The bastion host is a _t2.micro_ instance of EC2 created in the same region as the account. It is named `iot_dev_db_bastion_host` and can be accessed via the AWS Console under _EC2_ > _Instances_.

Once the back-end is installed, if you do not anticipate needing to access the database or reset it, you may stop or terminate the instance by going into the console EC2 > Instance State and selecting _Stop Instance_ or _Teminate Instance_. 

However, if you think you need access to the underlying database in the future, you may want to keep the instance running.

To ensure authorized access to the database, the bastion host is protected by _Security Groups_, which define inbound SSH access rules.

If there is a chance your administrator desktop or laptop IP address has changed since the installation, login to the console, and click on the Security Group ID (blue link) next to the security group named `iot_dev_bastion_ssh_sg`:

<div align="center">
<img src="/img/data/dbaccess-bastion-sg.png" width="90%"/>
</div>

After clicking on the link, you will be shown details on the Security Group. 

<div align="center">
<img src="/img/data/dbaccess-bastion-edit-sg.png" width="90%"/>
</div>

Select the _Security Group Rule_ under _Inbound Rules_, make sure the SSH rule is selected, and click on _Edit Inbound rules_:

<div align="center">
<img src="/img/data/dbaccess-bastion-edit-sg-detail.png" width="100%"/>
</div>

The IP address listed is what was automatically detected at install time. If your external IP address has changed, you will need to update this record by clicking on the _Source_ popup and  selecting **My IP**:

<div align="center">
<img src="/img/data/dbaccess-bastion-edit-sg-myip.png" width="70%"/>
</div>
<p />

Once done, click on the **Save rules** button.

Once done, you have all the elements you need to connect to the database from your local device remotely.

### Database Browsing

The RDS database is based on the Postgres engine and can be browsed using any third-party application.

To configure a database browsing application for SSH tunnel access, you will need the following information:

- SSH Bastion DNS address: in `~/.simpleiot/{team-name}/config.sys` look for the key named  `bastionHostSSHDns`. The same information can be found in the console under EC2 > Instances > Details under the _Public IPv2 DNS_ label.
- Database endpoint DNS address: in `~/.simpleiot/{team-name}/config.sys look for the key named `dbHostname`. This information can also be found in the console under RDS > Databases and by clicking on the PostgresSQL DB Identifier. Once there, you can find the DNS address under the _Endpoint_ label. The default Postgres port is 5432. This information will also be shown on the database secrets page (below).
- The SSH Key file: Located in `~/.simpleiot/{team-name}/certs/simpleiot-bastion-keypair.pem`.
- Database administrative login and password: This value is generated dynamically at install time and is intentionally not stored or shown anywhere. To obtain the value, you will need to access the AWS Console under [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)  

<div align="center">
<img src="/img/data/dbaccess-secretsmanager.png" width="60%"/>
</div>
<p />

- Click on the Secret Name link to get to the Secret Details page.

<div align="center">
<img src="/img/data/dbaccess-secretsmanager-detail.png" width="60%"/>
</div>
<p />

- Click the **Retrieve secret value** button to get to the actual password.

<div align="center">
<img src="/img/data/dbaccess-secretsmanager-retrieve.png" width="60%"/>
</div>
<p />

- You will be shown the database username, password, hostname, and database name:

<div align="center">
<img src="/img/data/dbaccess-secretsmanager-secrets.png" width="80%"/>
</div>
<p />

At this point, you have all the information you need to configure a Postgres database browsing tool to access the database and the underlying infrastructure remotely.

If you would like to develop tools or scripts to access the database directly, you will need to create an SSH tunnel to the bastion host, then access the database using standard Postgres drivers. An example of this can be found in the [dbloader.py](https://github.com/awslabs/simpleiot/sources/iotapi/db/dbloader.py) python script. The script makes use of the [shtunnel](https://pypi.org/project/sshtunnel/), and [psycopg2](https://pypi.org/project/psycopg2/) or [psycopg-binary](https://pypi.org/project/psycopg-binary/) Postgres access libraries.

The database schema is defined in the [dbschema.py](https://github.com/awslabs/simpleiot/sources/iotapi/db/dbloader.py) file using [Pony ORM](https://ponyorm.org/) syntax.

:::danger

The above may seem daunting and complex, going against the simple credo of **SimpleIOT**.

This is intentional.

Access to the database and underlying data is a potentially catastrophic security violation. The database and direct access to it are placed behind a variety of layers of security and access control to prevent unauthorized access to the most valuable data in the SimpleIOT data infrastructure.

All data at rest and in transit is encrypted to maintain device-to-cloud end-to-end security. But once the data is on the cloud, it must be protected.

Access to what is listed above should be restricted to only those with a need-to-know basis. Security is only as strong as the weakest link in the chain. You should be cautious about who is given access to this information.
:::
