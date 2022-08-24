---
id: concepts
title: Basic Concepts
---
<p align="center">
<img src="/img/intro/intro-diagram-09.png" width="70%" />
</p>

## Background

SimpleIOT allows you to connect a variety of devices to the cloud. The data can go in both directions if needed.

<p align="center">
<img src="/img/intro/intro-diagram-01.png" />
</p>

All services and data are owned by you and maintained in your private AWS account. You can have one or more accounts to keep the Data separate.

<p align="center">
<img src="/img/intro/intro-diagram-02.png" />
</p>

Each account is associated with a single **Team** which you can name to distinguish them from each other. Each _Team_ maintains its own stack of services, users, devices, and data. 

Depends on how you like to organize your projects. If just starting out, one **Team** is good enough. But as you go along, you may want to have, for example, separate **dev**, **test**, and **production** Teams.

<p align="center">
<img src="/img/intro/intro-diagram-03.png" />
</p>

Note that a single Team can handle many different types of devices. But the main association to keep in mind is:

<p align="center">

**One AWS Account &lt;=&gt; One Team**.

</p>

If you want to access different Teams from a single desktop or laptop, you can toggle back and forth between them easily from the command line.

<p align="center">
<img src="/img/intro/intro-diagram-04.png" />
</p>

Each **Team** maintains its own list of users, databases, logs, APIs, device certificates, etc.

## Taxonomy

SimpleIOT has a basic notion of how it organizes the data.

<p align="center">

<img src="/img/intro/intro-diagram-05.png" width="70%" />

</p>

- Each **Team** can have one or more **Projects**. 
- A **Project** allows you to define one or more **Models**.
- Each **Model** describes a single type of device. 
- A **model** can have one or more **Datatypes**. A **Datatype** is a named value for each piece of information you want to exchange with the device.

For example, you can create a **Project** to build a variety of hand-held thermometers. For the first one, you define a **Model** and give it a name. That model will be exchanging three attributes or **Datatypes** with the cloud:

<p align="center">

<img src="/img/intro/intro-diagram-06.png" width="60%" />

</p>

In the above example, your project is named **HeatMeasure**, and a model in that project is called **Therm-01**. The device wants to exchange three values with the cloud: **status**, **temperature**, and **battery**. In the future, you can have a _Therm-02_, _Therm-03_, etc. 

Once you've defined your _Model_ and _Datatype_, you can now virtually stamp out one or more instances. An instance of a _Model_ is called a **Device**. Each _Device_ needs to have its own unique **serial number** so you can tell multiple _Devices_ apart.

<p align="center">

<img src="/img/intro/intro-diagram-07.png" width="60%" />

</p>

:::tip

In object-oriented parlance, a **Model** is a _class_. Each time you _instantiate_ a Model, you're creating a **device**, which is an _instance_ of that class.

:::

Remember how each _Model_ had one or more _Datatypes_? Each _Device_ will also have its own instance of those, called **Data**. 

<p align="center">

<img src="/img/intro/intro-diagram-08.png" width="60%" />

</p>

You can reference each data element of each unique device by its:

<p align="center">

Project (name) - Model (name) - Device (serial number) - Data (name)

</p>

Putting it all together:

<p align="center">

<img src="/img/intro/intro-diagram-09.png" width="70%" />

</p>

**Congratulations**: You should now have a foundation of how SimpleIOT works. Let's move on to installing it.