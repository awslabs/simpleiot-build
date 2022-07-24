---
id: model
title: Model
---

```
iot model add 
      --name=model-name 
      --project=project-name
      [--team="team-name"]
      [--desc=model-description] 
      [--revision=model-revision-name]
      [--display-name=model-display-name] 
      [--display-order=model-display-order]
      [--image=model-image-url] 
      [--icon=model-image-icon]
      [--require_position=model-require-position] 
      [--type=model-type]
      [--security=model-security] 
      [--type=model-type]
      [--storage=model-storage] 
      [--protocol=model-protocol]
      [--connection=model-connection] 
      [--ml=model-ml]
      [--hw_version=hardware-version]
      [--template=model-template-name] 
      [--template_id=model-template-id]

iot model list 
      [--team="team-name"] 
      [--project=project-name]
      [--name=model-name] 
      [--id=model-id]
      [--full]

iot model update 
      --project=project-name 
      --name=model-name
      [--team="team-name"] 
      [--desc=model-description] 
      [--revision=model-revision-name]
      [--display-name=model-display-name] 
      [--display-order=model-display-order]
      [--image=model-image-url] 
      [--icon=model-image-icon]
      [--require_position=model-require-position] 
      [--type=model-type]
      [--security=model-security] 
      [--type=model-type]
      [--storage=model-storage] 
      [--protocol=model-protocol]
      [--connection=model-connection] 
      [--ml=model-ml]
      [--hw_version=hardware-version]

iot model delete 
      [--team="team-name"] 
      [--project=project-name]
      [--name=model-name] 
      [--id=project-id]
```
<br />

A *Model* defines a single connected device and its capabilities. One or more *Models* may be defined
inside a single [Project](/?http#project).

Model names must be unique within the project and mapped to directory names in the Command-language interface. Using only upper and lower-case ASCII characters, numbers, or underlines in the naming scheme is recommended.

:::tip
You can avoid having to enter the `--team` parameter for every command by defining the `IOT_TEAM` environment
variable. This is highly recommended. The following examples assume that the `IOT_TEAM` variable is set ahead of time, so it will not be needed for each command.

You can skip entering every project name by specifying the environment variable `IOT_PROJECT`.
:::

On Mac:
```
> export IOT_TEAM="my-team-name"
> export IOT_PROJECT="my-project"
> iot model list
```
On Windows:
```
> $env:IOT_TEAM="my-team-name"
> $env:IOT_PROJECT="my-project"
> iot model list
```

## iot model add

```
iot model add 
      --name=model-name 
      --project=project-name
      [--team="team-name"]
      [--desc=model-description] 
      [--revision=model-revision-name]
      [--display-name=model-display-name] 
      [--display-order=model-display-order]
      [--image=model-image-url] 
      [--icon=model-image-icon]
      [--require_position=model-require-position] 
      [--type=model-type]
      [--security=model-security] 
      [--type=model-type]
      [--storage=model-storage] 
      [--protocol=model-protocol]
      [--connection=model-connection] 
      [--ml=model-ml]
      [--hw_version=hardware-version]
      [--template=model-template-name] 
      [--template_id=model-template-id]
```
<br />

Adds a single Model to a Project. Model names **MUST** be unique within the project.
Model names are mapped to directory names in the Command-language-interface.

Using only upper- and lower-case ASCII characters, numbers, or underlines in the naming scheme is recommended.


### Parameters:

| Parameter                                                             | Value                | Definition                                                                                                                      |
|-----------------------------------------------------------------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------|
| `--project`                                                           | Project Name         | (Required) name of 'project' to create. Alternately, define an environment variable `IOT_PROJECT` with the project's name. |
| `--name`                                                              | Model Name           | (Required) name of 'model' to create.                                                                                           |
| `--desc`                                                              | Description          | Optional description to attach to model.                                                                                        |
| `--revision`                                                          | Revision Name        | Optional Model revision. Recommend using SemVer triple format (i.e. 1.0.3)                                                      |
| `--display_name`                                                      | Model Display Name   | Optional human-readable name of model.                                                                                          |
| `--display_order`                                                     | Model Display Order  | Optional integer value to list Models in a given sequence.                                                     |
| `--image`                                                             | Model Image URL      | Optional URL where to download a public image for the model.                                                           |
| `--icon`                                                              | Model Icon Image URL | Optional URL where a small icon for the model can be downloaded publicly.                                                       |
| `--require_position` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Require Position     | Optional - Model Requires Position Data to be specified.                                                                        |
| `--type`                                                              | Model Type           | Defaults to 'device' -- see section on [Model Types](#model_types).                                                             |
| `--security`                                                          | Model Security       | Defaults to 'device' -- see section on [Model Security](#model_security).                                                       |
| `--storage`                                                           | Model Storage        | Defaults to 'none' -- see section on [Model Storage](#model_storage).                                                           |
| `--protocol`                                                          | Model Protocol       | Defaults to 'mqtt' -- see section on [Model Protocol](#model_protocol).                                                         |
| `--connection`                                                        | Model Connection     | Defaults to 'direct' -- see section on [Model Connection](#model_connection).                                                   |
| `--ml`                                                                | Model ML             | Defaults to 'none' -- see section on [Model ML](#model_ml).                                                                     |
| `--hw_version`                                                        | Hardware Version     | Model hardware version (in SemVer format).                                                                                      |
| `--template`                                                          | Model Template Name  | Optionally create a model based on a model template.                                                                            |
| `--template_id`                                                       | Model Template ID    | Optionally create a model based on a model template ID.                                                                         |


The simplest way to create a Model is to provide a name and a project:

```
> iot add --project=my-project --name=my_model_name
```

You can also create a model based on a [Template](#template). Templates pre-define the model and one or more associated Datatypes. This allows you to create a model with all the necessary definitions with a single command line.

```
> iot add model --project=my_project_name --model=my_model_name --template=my_model_template
```

An alternative way to specify a template is to use its `template_id`:

```
> iot add model --project=my_project_name --model=my_model_name --template_id=0234234242...
```


## iot model list
```
iot model list 
      [--team="team-name"] 
      [--project=project-name]
      [--name=model-name] 
      [--id=model-id]
      [--full]
```
<br />

Use the `list` command to get a list of all models. You can request specific models by name or ID and whether to get detailed information about a single model. Add the `-- full` flag to get detailed information on a single project.

### Parameters:

| Parameter                                  | Value        | Definition                                                                                                                      |
|--------------------------------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------|
| `--project` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Project Name | (Required) name of 'project' to create. Alternately, define an environment variable `IOT_PROJECT` with the project's name. |
| `--name`                                   | Model Name   | (Required) name of 'model' to create.                                                                                           |
| `--id`                                     | Model ID     | ID of the model to list.                                                                                                            |
| `--full`                                   | Flag         | If specified, it will display full information on a single model.                                                                  |


To get a list of all models in a project:

```
> iot model list --project=my-project-name
```

To get information on a single model by name:

```
> iot model list --project=my-project-name --name=my-model-name
```

To get information on a single model by ID:

```
> iot model list --id=model-id
```

To get complete information on a single model, specify either `name` or `id` and a `--full` flag:

```
> iot model list --project=my-project-name --name=my-model-name --full
```

Or

```
> iot model list --id=my-model-id --full
```

## iot model update
```
iot [--team="team-name"] model update --project=project-name --name=model-name
      [--desc=model-description] [--revision=model-revision-name]
      [--display-name=model-display-name] [--display-order=model-display-order]
      [--image=model-image-url] [--icon=model-image-icon]
      [--require_position=model-require-position] [--type=model-type]
      [--security=model-security] [--type=model-type]
      [--storage=model-storage] [--protocol=model-protocol]
      [--connection=model-connection] [--ml=model-ml]
      [--hw_version=hardware-version]
```
<br />

Most attributes of a *Model* (other than the ID value and templates used to create) can be modified if needed. To alter a Model name, the ID needs to be specified.

### Parameters:

| Parameter                                                                         | Value                | Definition                                                                                                                      |
|-----------------------------------------------------------------------------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------|
| `--project`                                                                       | Project Name         | (Required) name of 'project' to update. Alternately, define an environment variable `IOT_PROJECT` with the project's name. |
| `--name`                                                                          | Model Name           | (Required) name of 'model' to update.                                                                                           |
| `--desc`                                                                          | Description          | Optional description to attach to model.                                                                                        |
| `--revision`                                                                      | Revision Name        | Optional Model revision. Recommend using SemVer triple format (i.e. 1.0.3)                                                      |
| `--display_name`                                                                  | Model Display Name   | Optional human-readable name of model.                                                                                          |
| `--display_order`                                                                 | Model Display Order  | Optional integer value that can be used to list Models in a given sequence.                                                     |
| `--image`                                                                         | Model Image URL      | Optional URL where an image for the model can be downloaded publicly.                                                           |
| `--icon`                                                                          | Model Icon Image URL | Optional URL where a small icon for the model can be downloaded publicly.                                                       |
| `--require_position` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Require Position     | Optional - Model Requires Position Data to be specified.                                                                        |
| `--type`                                                                          | Model Type           | Defaults to 'device' -- see section on [Model Types](#model_types).                                                             |
| `--security`                                                                      | Model Security       | Defaults to 'device' -- see section on [Model Security](#model_security).                                                       |
| `--storage`                                                                       | Model Storage        | Defaults to 'none' -- see section on [Model Storage](#model_storage).                                                           |
| `--protocol`                                                                      | Model Protocol       | Defaults to 'mqtt' -- see section on [Model Protocol](#model_protocol).                                                         |
| `--connection`                                                                    | Model Connection     | Defaults to 'direct' -- see section on [Model Connection](#model_connection).                                                   |
| `--ml`                                                                            | Model ML             | Defaults to 'none' -- see section on [Model ML](#model_ml).                                                                     |
| `--hw_version`                                                                    | Hardware Version     | Model hardware version (in SemVer format).                                                                                      |


## iot model delete
```
iot model delete 
      [--team="team-name"] 
      [--project=project-name]
      [--name=model-name] 
      [--id=project-id]
```

:::caution
WARNING: deleting a model is a highly **destructive** operation and should only be performed with care.
This operation cascades to delete all related entities, including device instances, datatypes, etc.

If applicable, it will also remove related resources like AWS IOT Things, certificates, and policies.
:::

### Parameters

| Parameter                            | Value        | Definition                                                                                                            |
|--------------------------------------|--------------|-----------------------------------------------------------------------------------------------------------------------|
| `--project` &nbsp;&nbsp;&nbsp;&nbsp; | Project Name | (Required) name of *project*. Alternately, define an environment variable `IOT_PROJECT` with the project's name. |
| `--id`                               | Model ID     | ID of the model to delete.                                                                                                |
| `--name`                             | Model Name   | Name of an existing model to delete.                                                                                  |

To delete a model, use:

```
> iot model delete --project=my-project-name --name=my-model-name
```
Or

```
> iot model delete --id=my-model-id
```
