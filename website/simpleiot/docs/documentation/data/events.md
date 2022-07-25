---
id: events
title: Data vs. Events
---

SimpleIOT's simple key/value model allows data to be exchanged to/from the cloud in real-time across different types of devices.

<div align="center">
<img src="/simpleiot-build/img/intro/intro-diagram-03.png" width="60%"/>
</div>

<p />

Each device communicates with the cloud via one or more named **Datatype**. These Datatypes are associated with a **Model** definition of a device, each with a unique name.

<div align="center">
<img src="/simpleiot-build/img/data/model-datatype.png" width="60%"/>
</div>

When a **Device** is created (aka _instantiated_ or _provisioned_), it is based on a **Model** definition and is given a unique serial number. All its **Data** elements are also based on the corresponding **Datatypes**.

<div align="center">
<img src="/simpleiot-build/img/data/device-data.png" width="60%"/>
</div>
<p />

When setting a value, you would reference it via its **Project** > **Device** > **Data** reference. When changing the value via REST API or MQTT, events are triggered to update databases and publish monitor events.

On the device side, if the Client SDK is used, any changes in values trigger an _onDataChange_ handler. This means that the same Datatype can be used for both exchanges of data as well as sending/receiving commands!

In the above example, the data can send _temperature_ and _light_on_ status values to the cloud. Conversely, by setting the _command_ Data value to _ON_, the device will be notified and can turn on or off.

This mechanism makes it easy to pass events and data between devices and the cloud. 

:::tip
SimpleIOT does not currently set restrictions on **Datatype** names or values. However, it is recommended that names starting with punctuation symbols such as `$name` or `_name` be avoided. These are reserved for future internal use.
:::
