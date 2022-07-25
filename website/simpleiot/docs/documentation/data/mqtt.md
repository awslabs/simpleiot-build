---
id: mqtt
title: MQTT Topics
---

## PubSub

SimpleIOT connects to AWS IoT Core via the [MQTT protocol](https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html). 

MQTT works on the principle of a central hub called a _broker_ and one or more Publishers and Subscribers. This is also known as a _PubSub System_, meaning that one or more entities connected to the service can _Publish_ data onto it, and one or more of those interested in receiving the data can _Subscribe_ to receive notifications when the data arrives.

The simplest form is a single publisher, a broker, and a single subscriber:

<div align="center">
<img src="/simpleiot-build/img/data/mqtt-pub-sub-1-1.png" width="80%"/>
</div>
<p />

When publishing to MQTT, you can specify two things:

- **Topic**: this is a string indicating a named _slot_ or _channel_ into which data is sent.
- **Payload**: the content of the data to be put into that slot or channel. This is often a JSON data structure, but it can be whatever you want.

### Topics

_Topics_ typically take the form of a series of names, separated by slashes. This allows you to create an arbitrary naming hierarchy. For example, data from a thermometer with the name TM-1 can be sent to the channel:

```
tm-1
```

But if the thermometer is installed in a room numbered r101, you may want to send the data to a topic named:

```
r101/tm-1
```

And if you had a light sensor and a switch and a window shade in the same room, data coming and going to each device could each be sent to their own channel:

```
r101/tm-1
r101/ls-1
r101/sw-1
r101/ws-1
```

When _subscribing_ to a channel, if you were interested in ONLY the temperature sensor in room r101, you would be subscribing to:

```
r101/tm-1
```

But if you want to be notified of ALL temperature sensors, you could use a wild-card and subscribe to:

```
*/tm-1
```

If you were interested in ALL devices in room r101 you may want to subscribe to:

```
r101/*
```

If room r101 is in building b2, you may want to use a topic hierarchy that allows for more granularity. For example, maybe you want to be able to look for data on a single floor, and since room r101 is on the 8th floor, your topic for data from the thermometer may look like this:

```
b2/f8/r101/tm-1
```

Think of this as a hierarchy:

```
  b2 +
     |
     + f8 +
          |
          + r101 +
                 |
                 + tm -1
```

MQTT also has a concept of single and multiple levels of wildcards with `#` and `*` characters. For example, you can subscribe to `#/f8/#/#` to subscribe to all devices from any room and device on the 8th floor of any building. 

### Payload

The payload is the data written into that named _slot_ or _channel_. This could be anything you want but is often structured into a JSON packet for easier debugging and legibility.

For example, a temperature sensor may want to send the current temperature reading into its own channel:

```
Topic: b2/f8/r101/tm-1
Payload: {
         "temp": 78.3,
         "units": "F",
         "timestamp": 3221188
         }
```

The recipient listening to this channel would then be given the content of the _payload_, to do with as they please.


Note that you could just as well put the data that you might otherwise put in the topic in the payload itself: 

```
Topic: mydata
Payload: {
         "building": "b2",
         "floor": "f8",
         "room": "r101",
         "device": "tm-1",
         "temp": 78.3,
         "units": "F",
         "timestamp": 3221188
         }
```

However, you would no longer be able to do wildcard filtering based on the topic hierarchy. This is a design choice you would have to make.

Again, the payload can be whatever you want. How the topic naming hierarchy is designed is up to you. In AWS IoT, the design of the topic and the payload is an important part of the design of an overall system, meriting its own whitepaper and best practices: [Designing MQTT Topics for AWS IoT Core](https://docs.aws.amazon.com/whitepapers/latest/designing-mqtt-topics-aws-iot-core/designing-mqtt-topics-aws-iot-core.html).

### PubSub modes

We showed above a notion of a single publisher, a broker, and a subscriber. This is considered a one-to-one model.

<div align="center">
<img src="/simpleiot-build/img/data/mqtt-pub-sub-1-1.png" width="80%"/>
</div>
<p />

MQTT also supports the notion of many publishers (i.e., many devices sending data to the cloud):

<div align="center">
<img src="/simpleiot-build/img/data/mqtt-pub-sub-many-1.png" width="80%"/>
</div>
<p />

Also, one publisher and many subscribers (i.e., one device sending data and multiple listeners -- for example, a logging system, a dashboard, a command-line interface, a mobile app, etc.)

<div align="center">
<img src="/simpleiot-build/img/data/mqtt-pub-sub-1-many.png" width="80%"/>
</div>
<p />

And, of course, many publishers and many subscribers:

<div align="center">
<img src="/simpleiot-build/img/data/mqtt-pub-sub-many-many.png" width="80%"/>
</div>
<p />

### SimpleIOT and MQTT

SimpleIOT is an _opinionated_ framework, meaning it has taken a common design pattern and embedded it with so-called _sane defaults_. 

The benefit is out-of-the-box, you do not have to worry about designing your own MQTT topics and payloads. However, if you want full control over those issues and create your own topics, you can add those without disrupting the system's core functionality.

If you are unfamiliar with the basic Project / Model taxonomy, it is highly recommended that you read the [Basic Concept](/docs/intro) introductory section.

Here is what a typical SimpleIOT topic and payload look like:

```
Topic: simpleiot_v1/app/set/proj-01/model-ABC/SN-4387
Payload: {
        "action": "set",
        "project": "proj-01",
        "model": "model-ABC",
        "serial": "SN-4387",
        "name": "temperature",
        "value": "78.2"
}
```

If the data has geographic/GPS data associated with it, it will look like this:

```
Topic: simpleiot_v1/app/set/proj-01/model-ABC/SN-4387
Payload: {
        "action": "set",
        "project": "proj-01",
        "model": "model-ABC",
        "serial": "SN-4387",
        "name": "temperature",
        "value": "78.2",
        "geo_lat": "22.23423",
        "goe_lng": "-122.4323"
}
```

The SimpleIOT MQTT topic hierarchy is designed as follows:

- **simpleiot_v1**: This is a prefix with the protocol version embedded in it. This means your application topics should never interfere with SimpleIOT data. It also allows you to filter messages sent by SimpleIOT from other types of applications.
- **app**: SimpleIOT separates data sent to/from a device into several streams, depending on the domain. In this case, these could be:
  - **/hw**: hardware level operations, like voltages, calibrations, RAM levels, etc.
  - **/sys**: operating system or firmware level operations, like versions, manufacturer IDs, etc.
  - **/adm**: Administrative operation involving device registry, provisioning, ownership, location placement, etc.
  - **/app**: Application level values, for example, whether an application has run, what the sensor values are, what button has been pressed, etc.
  - **/user**: Userlevel values. They may contain Personally-Identifiable-Information (PII), like user IDs or usernames. This allows user data on the broker side to be filtered and sent to separate data repositories to comply with regulatory rules. If a device supports multiple user profiles, this mechanism can also be used to signal to switch between users.
- **action**: An operation to be performed on individual data elements. The most common are _set_, _get_, and _monitor_.
- **project name**: Name of the SimpleIOT Project.
- **model name**: Model name.
- **serial number**: Device serial number of this specific device.
- **name**: Name of the Datatype for which we send a value.
- **value**: Value of the Data element for this specific device associated with that _name_.

The _action_, _project_, _model_, and _serial_ values are replicated in the body. This is so that mechanisms along the way that filter for MQTT topics (such as AWS IoT Rules) can redirect the data to proper targets. But once the data is sent to a downstream data repository or analytics service, the topic data will no longer be available. The payload contains the same information so that analytics can be performed based on the values in the payload.

By default, the payload is sent to a Lambda function that then re-distributes it to a variety of destinations (see the [Data Flow](flow) section for more on this). However, you can redirect the data to other AWS services based on your needs by filtering the MQTT topic in [IoT Core rules](https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html).

All data sent from a device is received by a lambda, which checks to see if the _name_ field is valid (if not, it discards the data). If valid, it sends the data to DynamoDB, RDS, and Timestream databases, and if the `show_on_twin` attribute of the Datatype is set to `true`, it re-publishes the data to the following topic:

```
simpleiot_v1/app/monitor/{project}/{model}/{device-serial-number}
```

This allows subscribers to monitor changes in data, such as the [iot device monitor](/docs/documentation/cli/device#iot-device-monitor) command or GUI dashboards or application logging systems to present changes in data in real-time.
