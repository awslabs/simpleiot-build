---
id: datatype
title: DataType
---
```
iot datatype add 
    [--team="team-name"] 
    --project=project-name
    --model=model-name 
    --name=datatype-name
    [--desc="description"] 
    [--type=type-name]
    [--data_type=type-name]
    [--units=type-units-name]
    [--show_on_twin=true|false]
    [--data_position=3d-position-on-twin]
    [--data_normal=3d-normal-on-twin]
    [--label_template=label-template-string]

iot datatype list
    [--team="team-name"] 
    [--project=project-name]
    [--model=model-name]
    [--name=datatype-name]
    [--id=datatype-id]
    [--full]

iot datatype update 
    [--team="team-name"] 
    [--project=project-name]
    [--model=model-name]
    [--name=datatype-name]
    [--id=datatype-id]
    [--desc="description"]
    [--type=type-name]
    [--data_type=type-name]
    [--units=type-units-name]
    [--show_on_twin=true|false]
    [--data_position=3d-position-on-twin]
    [--data_normal=3d-normal-on-twin]
    [--label_template=label-template-string]

iot datatype delete 
    [--team="team-name"] 
    [--project=project-name] 
    [--model=model-name]
    [--name=datatype-name]
    [--id=datatype-id]
```
<br />
A **Datatype** is a definition of a single item that can be exchanged with the cloud. The values can go both ways (from device to cloud and vice versa). Datatypes are associated with Models. Once a single instance of a Model is created, and values are set, a single `Data` record is created for each device, with attributes derived from the DataType.

:::tip
You can avoid having to enter the `--team`, `--project`, or `--model` parameter for every command by defining a corresponding `IOT_TEAM`, `IOT_PROJECT`, or `IOT_MODEL` environment variables.

In the following examples, it is assumed that the IOT_TEAM variable is set ahead of time so it will not be repeated for each command.
:::

On the Mac:
```
> export IOT_TEAM="my-team-name"
> export IOT_PROJECT="my-project"
> export IOT_MODEL="my-model"

> iot datatype list
```
On Windows:
```
> $env:IOT_TEAM="my-team-name"
> $env:IOT_PROJECT="my-project"
> $env:IOT_MODEL="my-model"

> iot datatype list
```

## iot datatype add
```
iot datatype add 
    [--team="team-name"] 
    --project=project-name
    --model=model-name 
    --name=datatype-name
    [--desc="description"] 
    [--type=type-name]
    [--data_type=type-name]
    [--units=type-units-name]
    [--show_on_twin=true|false]
    [--data_position=3d-position-on-twin]
    [--data_normal=3d-normal-on-twin]
    [--label_template=label-template-string]
```
<br />
Adds a single DataType to a Model. DataType values are mostly coerced to strings for storage and transmittal.

However, type hints can be passed via the `--type` or `--data_type` parameters. Clients can use these to coerce the value to a known type.


### Parameters

| Parameter                                                                                                                                                                 | Value                   | Definition                                                                                                                                                                                                                                                                               |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--project`                                                                                                                                                               | Project Name            | (Required) Name of the project. Alternately, define an environment variable `IOT_PROJECT` with the project's name.                                                                                                                                                                      |
| `--model`                                                                                                                                                                 | Model Name              | (Required) Name of the model. Alternately, define an environment variable `IOT_MODEL` with the model's name.                                                                                                                                                                            |
| `--name`                                                                                                                                                                  | DataType Name           | (Required) name of datatype to create. Must be unique within the Model.                                                                                                                                                                                                                      |
| `--desc`                                                                                                                                                                  | Description             | (Optional) description attached to datatype.                                                                                                                                                                                                                                             |
| `--type`                                                                                                                                                                  | DataType name           | (Optional) type hint. Examples: *integer*, *string*, *float*. Defaults to *integer*.                                                                                                                                                                                                     |
| `--data_type`                                                                                                                                                             | DataType name           | Alias for *--type*.                                                                                                                                                                                                                                                                      |
| `--units`                                                                                                                                                                 | DataType units          | (Optional) not enforced. suffix indicating the type of value. Examples: *psi*, *lbs*. Used for displaying units.                                                                                                                                                                      |
| `--show_on_twin`                                                                                                                                                          | Boolean                 | (Optional) Whether value will be shown on digital twin. It also determines whether a change in value is broadcast back in the *monitor* topic. If set to *false*, values will not be shown in applications that display data in real-time. Default is *true*.                                                     |
| `--data_position`                                                                                                                                                         | String                  | (Optional) 3D position of label on digital twin. In the form "X, Y, Z" expected by [ModelViewer](https://modelviewer.dev/)                                                                                                                                                               |
| `--data_normal`                                                                                                                                                           | String                  | (Optional) 3D normal of label on digital twin. In the form expected by [ModelViewer](https://modelviewer.dev/)                                                                                                                                                                           |
| `--label_template` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | DataType label template | (Optional) Formatted string that will be evaluated and returned. for each value. The string is a template where other values can be substituted at runtime. For example, the value can be "{name}: {value} {units}" and at runtime, this label will evaluate to, say, "pressure: 12 psi" |

Basic example:
```
> iot datatype add --project=my-project --model=my-model --name=my_datatype_name
```


## iot datatype list
```
iot datatype list
    [--team="team-name"] 
    [--project=project-name]
    [--model=model-name]
    [--name=datatype-name]
    [--id=datatype-id]
    [--full]
```
<br />
Use the' list' command to get a list of all Datatypes. You can request specific Datatypes by name or ID. Add the'- full' flag to get detailed information on a single Datatype.

### Parameters

| Parameter                            | Value         | Definition                                                                                                                      |
|--------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------|
| `--project` &nbsp;&nbsp;&nbsp;&nbsp; | Project Name  | (Optional) name of 'project' to create. Alternately, define an environment variable `IOT_PROJECT` with the project's name. |
| `--model`                            | Model Name    | (Optional) name of 'model'.                                                                                                     |
| `--name`                             | DataType Name | (Optional) name of `Datatype` to list.                                                                                          |
| `--id`                               | DataType ID   | (Optional) ID of DataType to show. You can use either Project/Model/Name or the unique ID                                       |
| `--full`                             | Flag          | If specified, it will display full information on a single DataType.                                                               |


To get a list of all DataTypes in a Model:

```
> iot datatype list --project=my-project-name --model=my-model-name
```

To get information on a single datatype by name:

```
> iot datatype list --project=my-project-name --model=my-model-name --name=my-datatype-name
```

To get information on a single datatype by ID:

```
> iot datatype list --id=datatype-id
```

To get complete information on a single DataType, specify either project/model/name or `id` and a `--full` flag:

```
> iot datatype list --project=my-project-name --model=my-model-name --name=my-datatype-name --full
```

Or

```
> iot datatype list --id=my-datatype-id --full
```

## iot datatype update
```
iot datatype update 
    [--team="team-name"] 
    [--project=project-name]
    [--model=model-name]
    [--name=datatype-name]
    [--id=datatype-id]
    [--desc="description"]
    [--type=type-name]
    [--data_type=type-name]
    [--units=type-units-name]
    [--show_on_twin=true|false]
    [--data_position=3d-position-on-twin]
    [--data_normal=3d-normal-on-twin]
    [--label_template=label-template-string]
```
<br />

Most attributes of a *DataType* (other than the ID value, Project, Model, and Name) can be modified if needed. To alter a DataType's name, the ID needs to be specified. If Project or Model names are specified, they are used to look up the specific record.

### Parameters

| Parameter                                                                                                                                                                                         | Value                   | Definition                                                                                                                                                                                                                                                                               |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--project`                                                                                                                                                                                       | Project Name            | name of the project. Alternately, define an environment variable `IOT_PROJECT` with the project's name.                                                                                                                                                                                 |
| `--model`                                                                                                                                                                                         | Model Name              | name of the model. Alternately, define an environment variable `IOT_MODEL` with the model's name.                                                                                                                                                                                       |
| `--name`                                                                                                                                                                                          | DataType Name           | name of datatype to create. Must be unique within the Model.                                                                                                                                                                                                                                 |
| `--id`                                                                                                                                                                                            | DataType ID             | Instead of project/model/name, you can specify the unique ID assigned to the datatype                                                                                                                                                                                                    |
| `--desc`                                                                                                                                                                                          | Description             | (Optional) description attached to datatype.                                                                                                                                                                                                                                             |
| `--type`                                                                                                                                                                                          | DataType name           | (Optional) type hint. Examples: *integer*, *string*, *float*. Defaults to *integer*.                                                                                                                                                                                                     |
| `--data_type`                                                                                                                                                                                     | DataType name           | Alias for *--type*.                                                                                                                                                                                                                                                                      |
| `--units`                                                                                                                                                                                         | DataType units          | (Optional) not enforced. suffix indicating the type of value. Examples: *psi*, *lbs*. Used for displaying units.                                                                                                                                                                      |
| `--show_on_twin`                                                                                                                                                                                  | Boolean                 | (Optional) Whether value will be shown on digital twin. It also determines whether a change in value is broadcast back in the *monitor* topic. If set to *false*, values can not be shown in display applications in real-time. Default is *true*                                                     |
| `--data_position`                                                                                                                                                                                 | String                  | (Optional) 3D position of label on digital twin. In the form "X, Y, Z" expected by [ModelViewer](https://modelviewer.dev/)                                                                                                                                                               |
| `--data_normal`                                                                                                                                                                                   | String                  | (Optional) 3D normal of label on digital twin. In the form expected by [ModelViewer](https://modelviewer.dev/)                                                                                                                                                                           |
| `--label_template` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | DataType label template | (Optional) Formatted string that will be evaluated and returned. for each value. The string is a template where other values can be substituted at runtime. For example, the value can be "{name}: {value} {units}" and at runtime, this label will evaluate to, say, "pressure: 12 psi" |

## iot datatype delete
```
iot datatype delete 
    [--team="team-name"] 
    [--project=project-name] 
    [--model=model-name]
    [--name=datatype-name]
    [--id=datatype-id]
```
<br />

:::caution
Deleting or adding a Datatype for a model AFTER a device of this type has been created may cause unexpected results if existing data records are referenced.
:::

### Parameters

| Parameter                            | Value         | Definition                                                                                               |
|--------------------------------------|---------------|----------------------------------------------------------------------------------------------------------|
| `--project` &nbsp;&nbsp;&nbsp;&nbsp; | Project Name  | name of project. Alternately, define an environment variable `IOT_PROJECT` with the project's name. |
| `--model`                            | Model Name    | name of the model. Alternately, define an environment variable `IOT_MODEL` with the model's name.       |
| `--name`                             | DataType Name | name of datatype to create. Must be unique within the Model.                                                 |
| `--id`                               | DataType ID   | Instead of project/model/name, you can specify the unique ID assigned to the datatype                    |

To delete a datatype, use:

```
> iot datatype delete --project=my-project-name --model=my-model-name --name=my-datatype-name
```
Or

```
> iot datatype delete --id=my-datatype-id
```

