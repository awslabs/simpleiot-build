---
id: common
title: Common Interfaces and APIs
---

<div align="center">
<img src="/img/intro/intro-diagram-03.png" width="60%"/>
</div>

SimpleIOT offers a common, lightweight model for sending and receiving data from the cloud. Each **Model** can have any number of more **Datatypes**, which are key/values. 

<div align="center">
<img src="/img/data/common-data.png" width="40%"/>
</div>

<p />

SimpleIOT's dynamic data abstraction supports a wide variety of devices:

<div align="center">
<img src="/img/data/common-data-projects.png" width="40%"/>
</div>

<p />

The system was intentionally designed to be easy to understand. This also makes the systems easier to debug and monitor.

What unites all these devices is a common API and MQTT topics and data formats. The underlying system was also designed to be secure, with end-to-end encryption of all data in transit and at rest. Authentication is provided via X.509 certificates or [JWT tokens](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-the-id-token.html) via [Amazon Cognito](https://aws.amazon.com/cognito).

## Common Tooling

A common data format means that companies making a range of products can maintain separation of data (each division can install their own instance of SimpleIOT) while maintaining the same tooling, monitoring, and data analytics services. 

The REST API can be used to dynamically obtain all the Datatypes associated with a single model and provide read/write access. This opens up the possibility of having a single web, desktop, or mobile app be used as the interface to many kinds of devices. 

<div align="center">
<img src="/img/data/common-data-ui.png" width="50%"/>
</div>
<p/>

Conversely, a single 'pane of glass' could be used to monitor and analyze a variety of devices.

<div align="center">
<img src="/img/data/common-data-monitor.png" width="50%"/>
</div>
<p/>

The most important consideration is that ALL the code and data are kept in the device manufacturer's own AWS account, built on top of the scalable AWS serverless architecture. 

And with the built-in support for SimpleIOT **Teams**, the same 'pane of glass' can be used to monitor multiple SimpleIOT installations.

<div align="center">
<img src="/img/data/common-data-teams.png" width="40%"/>
</div>
