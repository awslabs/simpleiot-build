---
id: project
title: Project
---
```
iot project add 
   --name=project-name
   [--team="team-name"]
   [--desc="description"]
   [--template=template-name]
   [--template_id=template-id]

iot project list
    [--team="team-name"]  
    [--name=project-name]
    [--id=project-id]
    [--full]

iot project update
    [--team="team-name"]  
    [--name=project-name]
    [--id=project-id]
    [--desc="description"]

iot project delete 
    [--team="team-name"] 
    [--name=project-name]
    [--id=project-id]
    [--force"]
```
<br />

A single installation can have one or more *Projects* and are used to group device models together. Project names must be unique within the installation and mapped to directory names in the Command-language interface. It is recommended to use only upper and
lower-case ASCII characters, numbers, or underlines in the naming scheme.

:::tip
You can avoid having to enter the '--team' parameter for every command by defining the IOT_TEAM environment
variable. This is highly recommended. In the following examples, it is assumed that the IOT_TEAM variable
 is set ahead of time so it will not be repeated for each command.

 For example:

Mac;
```
> export IOT_TEAM="my-team-name"
> iot project list
```

Windows;
```
> $env:IOT_TEAM="my-team-name"
> iot project list
```

:::

## iot project add

```
iot project add 
   --name=project-name
   [--team="team-name"]
   [--desc="description"]
   [--template=template-name]
   [--template_id=template-id]
```
<br />

This command adds a single project to the installation. Project names **MUST** be unique.
Project names are mapped to directory names in the Command-language-interface.

It is recommended to use only upper and lower-case ASCII characters, numbers, or underlines in the
naming scheme.

### Parameters:

| Parameter       | Value         | Definition                                                |
|-----------------|---------------|-----------------------------------------------------------|
| `--name`        | Project Name  | (Required) name of 'project' to create.                   |
| `--desc`        | Description   | Optional description to attach to project.                |
| `--template`    | Template Name | Optional name of a template to use when creating a project. |
| `--template_id` | Template ID   | Optional ID of template to use when creating a project.   |

The simplest way to create a project is to provide a name:

```
> iot project add --name=my_project_name
```

You can also create a project using a [Template](#template). Templates pre-define one or more models
and one or more Datatypes associated with each model. This allows you to create a project with
all the necessary definitions with a single command line.

```
> iot project add --name=my_project_name --template=my_template
```

An alternative way to specify a template is to use its `template_id`:

```
> iot project add --name=my_project_name --template_id=0234234242...
```

Template ID is a better choice if a specific instance of a template has to be used, whereas the name will
be better when used across different projects or installations.

## iot project list

```
iot project list
    [--team="team-name"]  
    [--name=project-name]
    [--id=project-id]
    [--full]
```
<br />

Use the `list` command to get a list of all projects. You can request specific projects by name or ID,
and whether to get detailed information about a single project.

### Parameters:

| Parameter | Value        | Definition                                                       |
|-----------|--------------|------------------------------------------------------------------|
| `--name`  | Project Name | Name of an existing project to list.                             |
| -`-id`    | Project ID   | ID of the project to list.                                           |
| `--full`  | Flag         | If specified, it will display complete information on a single project. |


To get a list of all projects in an installation:

```
> iot project list
```

To get information on a single project by name:

```
> iot project list --name=my-project-name
```

To get information on a single project ID:

```
> iot project list --id=project-id
```

To get complete information on a single project, specify either `name` or `id` and a `--full` flag:

```
> iot project list --name=my-project-name --full
```

## iot project update

```
iot project update
    [--team="team-name"]  
    [--name=project-name]
    [--id=project-id]
    [--desc="description"]
```
<br />

All attributes of a *Project* (other than the ID value) can be modified if needed. To alter a Project, the ID needs to be specified.

### Parameters:

| Parameter | Value        | Definition                        |
|-----------|--------------|-----------------------------------|
| `--id`    | Project ID   | ID of the project to update.          |
| `--name`  | Project Name | New name for an existing project. |
| `--desc`  | Description  | Updated description for project.  |


## iot project delete

```
iot project delete 
    [--team="team-name"] 
    [--name=project-name]
    [--id=project-id]
    [--force"]
```
:::caution
Deleting a project is a highly **destructive** operation and should only be performed with care.
This operation cascades to delete all related entities, including models, device instances, datatypes, etc.

It will also remove related resources like AWS IOT Things, certificates, and policies.
:::

### Parameters

| Parameter | Value        | Definition                                                                                                                           |
|-----------|--------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `--id`    | Project ID   | ID of the project to delete.                                                                                                             |
| `--name`  | Project Name | Name of an existing project to delete.                                                                                               |
| `--force` | None         | Ordinarily, the user is asked for a confirmation. This flag will force deletion without confirmation (can be used in a shell script) |

To delete a project, invoke:

```
> iot project delete --name=my-project-name
```
Or

```
> iot project delete --id=project-id
```
