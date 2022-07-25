---
id: twin
title: Digital Twins
---

Ask different people what _Digital Twin_ means to them, and you will likely hear a range of (possibly contradictory) definitions.

In the SimpleIOT universe, the definition is intentionally kept lightweight and simple. A _Digital Twin_ is an instance of a device that mirrors the state of a physical one. For example, assume we have a **Model** called `Lightbulb`.

When a physical Lightbulb is seen for the first time on the system, it is assigned a **Project**, a **Model**, and a unique serial number to help disambiguate it from other instances.

<div align="center">
<img src="/simpleiot-build/img/data/model-twin.png" width="60%"/>
</div>
<p />

For each instance of a **Device**, a record is maintained in the SimpleIOT database. Likewise, for each **Datatype** defined for the **Model**, a corresponding **Data** record is also created. This record will maintain the last-known value of that element.

Applications can GET these values via REST calls and, if subscribed to that **Data** element, will receive events indicating the value has changed (either from the device itself or via the REST APIs).

Conversely, applications can SET those values via REST calls. Then, if a device is on and connected to the cloud, it will receive the change in that value in real-time and act accordingly.

Under this definition, the instance of the **Device** is a live Digital Twin. Therefore, you can query it and receive the last-known value, update it and have the physical device update in real-time.

You can retrieve a log of all settings and activities for each device from the DynamoDB database and the Timestream time-series feed. 

<div align="center">
<img src="/simpleiot-build/img/data/dynamodb-console.png" width="90%"/>
</div>
<p />

The last-known value is always kept in the RDS database, accessible via a simple GET call via the REST API.

:::tip
The Digital Twin can also help visualize the actual device in dashboards, mobile apps, or AR/VR applications.
:::
