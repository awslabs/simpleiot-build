---
id: account
title: Configuring an AWS account
---

# Signing up

To install and access SimpleIOT, you need an AWS account. This section is an overview of setting up an AWS account and configuring it for use from the command line.

:::tip
This is only needed if you are going to be installing the back-end either as a [Solo](solo) or [Admin](admin) user. You DO NOT need an AWS account to join a team.

You can skip this section if you have already configured an account on your system using `aws configure`.
:::

AWS Documentation provides step-by-step guides for a variety of tasks:

- [How do I create and activate a new AWS account?](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)

- [Creating an AWS account](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-creating.html)

- YouTube series: [Getting Started - Setup AWS Account](https://www.youtube.com/playlist?list=PLIUhw5xEbE-UIt62T_qb8l-sf3eft5M4F)

- [AWS account root user credentials and IAM user credentials](https://docs.aws.amazon.com/general/latest/gr/root-vs-iam.html) 

- Hands-on lab: [Level 100: AWS Account Setup](https://www.wellarchitectedlabs.com/cost/100_labs/100_1_aws_account_setup/).

- [AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)

- [Configuration Basics](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)

- If you plan on working with multiple Teams, create an [AWS Named Profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html) for each account. Make sure the names are descriptive. During SimpleIOT installation, you will be prompted to choose from those names.

:::caution
It is highly recommended you create an IAM user and give it administrator access instead of using the _root_ user.
:::

When creating an IAM user, you will be assigning a role to it. This determines what that user is allowed to perform in that account. When creating a production-quality system, you will want to assign the least amount of privilege to that account. For this demonstration system, however, we will assign _Administrative_ privileges to that user.

