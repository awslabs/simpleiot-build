---
id: flow
title: Data Flow
---

## Architecture

Each time the [SimpleIOT Installer](/docs/install/intro) is run, the following set of services are created and stitched together:

<div align="center">
<img src="/simpleiot-build/img/data/architecture.png" width="100%"/>
</div>

The system is designed to accept data from devices (via [MQTT](https://mqtt.org/)) as well as programmatically via REST APIs.

The default system maintains three different data storage mechanisms:

1. [Amazon RDS/Postgres](https://aws.amazon.com/rds/postgresql/): A SQL-based database for storing information about Projects, Models, DataTypes, and the last known value of each Data element. It also acts as a repository for the registration of device instances and metadata.
2. [Amazon DynamoDB](https://aws.amazon.com/dynamodb): A NoSQL database where individual IoT data transactions are stored. You can retrieve every data item sent via MQTT or API into the system.
3. [Amazon Timestream](https://aws.amazon.com/timestream/): A scalable, serverless time series database.
<p />
<div align="center">
<img src="/simpleiot-build/img/data/dataflow.png" width="70%"/>
</div>

AWS IOT Core has a built-in rule-based system, where incoming MQTT messages can be filtered based on a SQL-like syntax:

<div align="center">
<img src="/simpleiot-build/img/data/iot-core-sql.png" width="70%"/>
</div>

Messages can then be routed to a variety of destinations:

<div align="center">
<img src="/simpleiot-build/img/data/iot-target-list.png" width="70%"/>
</div>

## Common Data Pathway

In SimpleIOT, all messages are routed to a Lambda function (called _iot_dev_api_data_). Here, the data is transformed and modified before being sent by the function to the above destinations. Finally, the lambda validates that the data name matches a defined **Datatype** in a **Model** and only allows the data to be saved.

However, you can add your own IOT Rules and send copies of the payload to other locations.

This architecture allows REST API calls via API Gateway to the same Lambda function. This way, REST API calls, and MQTT data go through the same code path. This facilitates supporting a _Digital Twin_ for physical data. 

The same API is invoked by the [SimpleIOT Command Line Interface (CLI)](/docs/documentation/cli/intro), allowing command-line interactions with the twin and remote physical devices.

This way, data may be sent, viewed, or modified, from a variety of sources:

<div align="center">
<img src="/simpleiot-build/img/data/source-flow.png" width="90%"/>
</div>

## Monitoring Live Data

Whenever this lambda receives a data element, if the Datatype element is marked so it should be shown on a Digital Twin, an MQTT message is broadcast on a pre-defined 'monitor' MQTT topic. This is useful for monitoring traffic on the system during development and is used by the [iot data monitor](/docs/documentation/cli/device#iot-device-monitor) to display the state change of a single data element on a device.

All data changes (whether MQTT or REST) go through the same lambda function. This lambda does the re-publishing of the data change to the monitor topic. This means that any call to REST API calls (i.e., via the CLI) will invoke an MQTT monitor message which will update in real-time.

You can disable this behavior by modifying an individual [Datatype](/docs/documentation/cli/datatype) and setting `show_on_twin` to `false`.


## Data Visualization

<div align="center">
<img src="/simpleiot-build/img/data/data-visualization.png" width="60%"/>
<p />
</div>
Once the data has made it to the cloud side, you can make use of the data in a variety of ways:
<p />

- [Grafana](https://grafana.com/grafana/). Easy way to build a graphic dashboard. You can take advantage of the fully-managed version with a built-in Timestream connector: [Amazon Managed Grafana](https://aws.amazon.com/grafana) - [[Timestream instructions]](https://docs.aws.amazon.com/timestream/latest/developerguide/Grafana.html)
- [Amazon QuickSight](https://docs.aws.amazon.com/timestream/latest/developerguide/Quicksight.html): Serverless BI platform - [[Timestream instructions]](https://docs.aws.amazon.com/timestream/latest/developerguide/Quicksight.html)
- [Amazon SageMaker](https://aws.amazon.com/pm/sagemaker/): fully-managed AI/ML platform - [[Timestream instructions]](https://docs.aws.amazon.com/timestream/latest/developerguide/Sagemaker.html)

As mentioned above, you can also route all IoT traffic to other services or trigger events via IoT Core rules:

- [AWS IoT Analytics](https://docs.aws.amazon.com/iotanalytics/latest/userguide/data-visualization.html): managed IoT analytics platform - [[Instructions]](https://docs.aws.amazon.com/iotanalytics/latest/userguide/quickstart.html)

:::caution
Only MQTT data routed through IoT Core will be sent to other destinations. However, if you want to send both MQTT and REST data, you can modify the _iot_dev_api_data_ lambda function and redirect the data from there.
:::
