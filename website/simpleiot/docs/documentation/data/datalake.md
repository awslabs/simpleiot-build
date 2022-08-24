---
id: datalake
title: Data Lake
---

_Data Lakes_ are repositories of data from a variety of sources that can be stored in structured or unstructured format. These can be analyzed to gain insights into the operations of a system.

AWS Cloud offers a variety of ways to store and process this data. How this data is handled varies depending on business needs. The main concern is to capture all the data and place it in a common format in an inexpensive storage medium.

In AWS, the common denominator is storage in S3 as CSV data.

When raw data arrives from devices, it is redirected to several structured data sources:

- **RDS**: The latest value for any given device is stored as a named **Data** record, associated with a single **Device** element.
- **DynamoDB**: Each data payload is parsed and saved to DynamoDB, along with a timestamp.
- **Timestream**: Each data record is also saved as a time-based series so BI and data visualization applications can easily analyze it.

The same data can easily be directed into a Data Lake by sending the data to S3 via [IoT Core rules](https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html). By default, SimpleIOT does not send the data to an S3 data lake. This was a design choice to avoid incurring an unnecessary cost for customers who do not need this functionality.

However, doing so is relatively straightforward. The easiest way is to log into the console and add an IoT Rule to redirect all data to S3.

- Log in to the AWS Console, navigate to AWS IoT > Message Routine > Rules, and then click on the _Create Rule_ button.

<div align="center">
<img src="/img/data/iot-rule-create.png" width="90%"/>
</div>

- Create a rule where messages are routed. For example, you can provide a custom SQL statement to filter only specific messages (based on their [MQTT topic](mqtt), or select all messages to be saved.

<div align="center">
<img src="/img/data/iot-core-sql.png" width="90%"/>
</div>

To save everything, specify:

```
SELECT * FROM *
```

- In the Rule actions section, you can select an "S3 bucket" and specify the parameters needed:

<div align="center">
<img src="/img/data/iot-rule-s3.png" width="90%"/>
</div>

The _S3 URL_ is the URL of an existing S3 bucket. You can create one and select it using the _Browse_ button.

The _Key_ field can be blank, in which case all data files are saved to the top level of the S3 bucket. For example, if you set the key to a _/prefix_, the files will be saved to a sub-directory inside the bucket.

The _Canned ACL_ determines whether the data is meant to be public or private. For most cases, _private_ is a good choice. 

The _IAM Role_ defines AWS IoT's privileges to access your S3 bucket. If in doubt, click on the `Create new role` bucket and define a role such as `access_s3_from_iot_role`. IOT will create all the policies needed to allow it to write data to your S3 bucket.

Once defined, all data published to the [MQTT topic](mqtt) will be automatically routed to S3 and populate your data lake.

### Amazon Kinesis Firehose

An alternative method is to route the IoT data to [Amazon Kinesis Firehose](https://aws.amazon.com/kinesis/data-firehose/), which would then allow you to collect the data in bulk format, then specify how often it is pushed out to an S3 bucket. This method allows bulk data to be cached by Firehose and then saved to the data lake. It offers cost savings over per-record transaction data saved to S3.

Once the data is on S3, you can initiate processing triggers via [S3 Event Notifications](https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html). For example, you can kick off lambdas [further processing lambdas](https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example.html) or send the data via [AWS Glue ETL pipelines](https://aws.amazon.com/glue/) or [Amazon Athena](https://aws.amazon.com/athena/) interactive data query service.

### What to do with the data

Ultimately, what you do with the data is driven by your application needs. What SimpleIOT provides is a lightweight, universal data exchange mechanism for any type of device to send any data to the cloud.

The data can be used to:

- Decide what user-interface elements or application features are used the most (or least). This can help drive product design decisions for the next generation of products.
- Detect defects in the manufacturing process or specific hardware components.
- Perform predictive analytics to send repair personnel or parts _before_ a device fails. This improves device reliability and up-time.
- Track device usage metrics. This can be used to enable new business models based on device usage, subscriptions, or replenishing consumables.
- Track geo-data on conditions of products as they are transported across the globe.
- Enable track-and-trace applications to locate assets via GPS data.
- Signal personnel when devices go off-line or data values are out-of-range. For example, food or medical supplies in cold-chain storage.
- Collect data on moving objects such as cars, boats, or airplanes.
- Perform analytics on entire families of products and get insight into how customers use them.

If these are features you would like to implement, SimpleIOT unlocks these capabilities and allows you to focus on your application and business needs instead of the undifferentiated heavy lifting of designing protocols, data formats, and dealing with scalability issues.
