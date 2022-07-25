---
id: adminteam
title: Administrators and Team Members
---


# Who are you (in this workshop setting)?

<p align="center">

<img src="/simpleiot-build/img/install/install-diagram-01.png" width="80%" />

</p>

Before starting this workshop, the first question to answer is:

<p align="center">

<h2>What is your role?</h2>

</p>

There are three possible options for roles:

<table>
<tr>
<td width="10%"><img src="/simpleiot-build/img/install/solo-icon.png" /></td>
<td width="20%"><a href="../../install/solo">Solo</a></td>
<td>You are a rugged individualist. You eat hardware, software, and cloud for lunch. A jack of all trades! This is for you.</td>
</tr>
<tr>
<td width="10%"><img src="/simpleiot-build/img/install/admin-icon.png" /></td>
<td width="20%"><a href="../../install/admin">Admin</a></td>
<td>You are the grown-up administrator responsible for making things work smoothly. You do not suffer fools. You may also do some tinkering yourself (you really should). But your day job is care and feeding of the cloud infrastructure. Once done, you may invite others to come join the fun.</td>
</tr>
<tr>
<td width="10%"><img src="/simpleiot-build/img/install/team-member-icon.png" /></td>
<td width="20%"><a href="../../install/team-member">Team Member</a></td>
<td>You are a builder who has no time for that back-end stuff. You just want to get things done. Fast! You have been invited to join an existing team by your friendly neighborhood administrator.</td>
</tr>
</table>

These are not hard and fast definitions. For example, a Solo can invite others to join their Team.

The general rule is:  if you have administrative access to your AWS account, you can be any of the above. But if you do _not_ have access to the AWS Console as an administrator, you will not be able to install the back-end. 

In this workshop, there has to be *AT LEAST ONE (1)* Administrator (or Solo). That is, there must be one individual with administrator access in an AWS account who follows the instructions related to being an Administrator (or Solo). That individual will provision the SimpleIOT backend in their account and will then be able to invite Team Members to join the Team that has been created. Keep in mind this should be done a few hours ahead of time to allow for the time it takes for the SimpleIOT back-end to build out.

:::tip
If you are an Administrator or going Solo, you must first [*configure your AWS account and set up the AWS CLI*](../../install/account) before going any further. 
:::

So choose your own adventure! Read the documentation in the appropriate link above related to your role, then come back here to get started with the workshop. 

:::note
If you're following the Solo or Team Member instructions, skip the "Installing the Toolchain" section and everything after that. We'll be covering that as part of this workshop.
:::