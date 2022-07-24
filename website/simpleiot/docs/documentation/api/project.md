# Project

A Project is a collection of models. Each Organization may define one or more Projects.
Project names are assumed to be unique.

## Get All Projects

Returns a list of all Projects known to the system.

When issuing HTTP/HTTPS requests, the JWT authentication token has to be provided in the request header.
See [Authentication](/?http#authentication) for more  information.

`GET https://{{API_ENDPOINT}}/v1/project?all=true`

```python
import requests

url = f"{API_ENDPOINT}/v1/project?all=true"

payload={}
headers = {
  'Authorization': 'Bearer {JWT_TOKEN}'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

```javascript

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer {JWT_TOKEN}");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let server = "{API_ENDPOINT}";

fetch(server + "/v1/project?all=true", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

```

Response will return an array of Project records:

```json
[
    {
        "id": "f32a0084c6e44f4c800bbc9589b8185c",
        "name": "Sunshine",
        "models": [
            "GW5000",
            "T-65C-A2",
            "WeatherRack2",
            "TP1000",
            "TIE-LN"
        ],
        "devices": [
            "TIE-DEMO01",
            "TIE-0001",
            "TP-0001",
            "SWR-01",
            "GW-0009"
        ],
        "desc": "Sample Project for SimpleIOT demo",
        "date_created": "2021-06-23T19:10:19.627223"
    }
]

```

### Request Parameters

To get all the projects, the `?all=true` parameter is required.

| Parameter | Value |
|-------------|----------------|
| HTTP Verb |  `GET` |
| Security | `JWT Bearer Token` |
| URL | https://`API Endpoint`/v1/project?all=true|

### Headers

| Paramater | Value |
|--------------|------------------|
| Authorization | "Bearer `JWT Token`"|

### Query Parameters

|Query Parameter|Value|Description|Required|
|----------|------------|-------------------------|------|
| all | `true` |Request all projects|Yes|

### Input Schema
No input schema

### Output Schema

This request returns an array of objects of this format.

| Field | Description| Type|
|--------------|------------------|-----------|
| id | Database GUID ID| String|
| udi | (Optional) Universal Device Identifier for project| String|
| name | Project name | String|
| models | List of Model names defined in project| Array|
| devices | List of Device serial numbers| Array|
| desc | Description of project| String|
| date_created | UTC Timestamp when project was created|Date|

## Get One Project (Detail)

Returns details on a specific project, if requested by name or ID.

When issuing HTTP/HTTPS requests, the JWT authentication token has to be provided in the request header.
See [Authentication](/?http#authentication) for more  information.


`GET https://{{API_ENDPOINT}}/v1/project?name=Sunshine`

`GET https://{{API_ENDPOINT}}/v1/project?id={project-id}`

```python
import requests

url = f"{API_ENDPOINT}/v1/project?name=Sunshine"

payload={}
headers = {
  'Authorization': 'Bearer {JWT_TOKEN}'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

```javascript

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer {JWT_TOKEN}");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let server = "{API_ENDPOINT}";

fetch(server + "/v1/project?name=Sunshine", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

```

Response will return an array of *Project* records:

```json
{
    "id": "1a02e8a6b31f47f2aa64308d79f9ac1c",
    "name": "Sunshine",
    "models": [
        "T-65C-A2",
        "GW5000",
        "TP1000",
        "TIE-LN",
        "WeatherRack2"
    ],
    "devices": [
        "TIE-0001",
        "GW-0009",
        "SWR-01",
        "TIE-DEMO01",
        "TP-0001"
    ],
    "desc": "Sample Project for SimpleIOT demo",
    "date_created": "2021-09-19T21:59:32.546743"
}
```

### Request Parameters

| Parameter | Value |
|-------------|----------------|
| HTTP Verb |  `GET` |
| Security | `JWT Bearer Token` |
| URL | https://`API Endpoint`/v1/project?name={project_name}|
| URL | https://`API Endpoint`/v1/project?id={project_id}|

### Headers

| Paramater | Value |
|--------------|------------------|
| Authorization | "Bearer `JWT Token`"|

### Input Schema
| Parameter | Description| Type|
|--------------|------------------|-----------|
| id | Project ID| String|
| name | Project Name| String|

### Output Schema

| Field | Description| Type|
|--------------|------------------|-----------|
| id | Database GUID ID| String|
| udi | (Optional) Universal Device Identifier for project| String|
| name | Project name | String|
| models | List of Model names defined in project| Array|
| devices | List of Device serial numbers| Array|
| desc | Description of project| String|
| date_created | UTC Timestamp when project was created|Date|


## Add One Project

Adds a single project to the installation. Project names **MUST** be unique.
Project names are mapped to directory names in the Command-language-interface.

It is recommended using only upper and lower-case ASCII characters, numbers, or underlines in the
naming scheme.

When issuing HTTP/HTTPS requests, the JWT authentication token has to be provided in the request header.
See [Authentication](/?http#authentication) for more  information.

`POST https://{{API_ENDPOINT}}/v1/project`

```python
import requests

url = f"{API_ENDPOINT}/v1/project"

payload={
  "name": "NewProject",
  "desc": "This is a new project"
}

headers = {
  'Authorization': 'Bearer {JWT_TOKEN}'
}

response = requests.request("POST", url, headers=headers, json=payload)

print(response.text)

```

```javascript

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer {JWT_TOKEN}");

payload: {
  name: "NewProject",
  desc: "This is a new project"
}

let server = "{API_ENDPOINT}";

fetch(server + "/v1/project?all=true", {
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify(payload)
  })
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

```

If successful, response will return a single Project ID:

`{ "status": "ok", "id": "0cbc57273c4b4d66acecbb5b49f1e559" }`


A project may be created based on a **Project Template**. Passing a *template name* or *template ID*
will create a project that has pre-defined valid `Model` and `DataType` records.

```python
import requests

url = f"{API_ENDPOINT}/v1/project"

payload={
  "name": "NewProjectWithTemplate",
  "desc": "This is a new project with a template",
  "template": "DeviceTemplates"
}

headers = {
  'Authorization': 'Bearer {JWT_TOKEN}'
}

response = requests.request("POST", url, headers=headers, json=payload)

print(response.text)

```

```javascript

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer {JWT_TOKEN}");

payload: {
  name: "NewProjectWithTemplate",
  desc: "This is a new project with a template",
  template: "DeviceTemplates"
}

let server = "{API_ENDPOINT}";

fetch(server + "/v1/project?all=true", {
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify(payload)
  })
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

```

### Request Parameters

| Parameter | Value |
|-------------|----------------|
| HTTP Verb |  `POST` |
| Security | `JWT Bearer Token` |
| URL | https://`API Endpoint`/v1/project|
| body | JSON payload string|

### Headers

| Paramater | Value |
|--------------|------------------|
| Authorization | "Bearer `JWT Token`"|

### Input Schema

| Field | Description| Type|
|--------------|------------------|-----------|
| id | Database GUID ID| String|
| desc | (Optional) Description | String|
| template | (Optional) Name of template | String|
| template_id | (Optional) GUID of template | String|

### Output Schema

| Field | Description| Type|
|--------------|------------------|-----------|
| status | Status of operations | String ('ok') |
| id | GUID ID| String|

If the creation fails, the HTTP status code will be something other than 200, the output *status* value will be `error`
and an explanation message will be provided. For example:

`{ "status": "error", "message": "Project already exists" }`

| Field | Description| Type|
|--------------|------------------|-----------|
| status | Status of operations | String ('error') |
| message | Error message | String|


## Modify a Project

All attributes of a *Project* (other than the GUID value) can be modified, if needed. To modify a Project,
the GUID needs to be specified.

When issuing HTTP/HTTPS requests, the JWT authentication token has to be provided in the request header.
See [Authentication](/?http#authentication) for more  information.

`PUT https://{{API_ENDPOINT}}/v1/project?id={project GUID}&project_name={new project name}`

`PUT https://{{API_ENDPOINT}}/v1/project?id={project GUID}&desc={new description}`

| Parameter | Value |
|-------------|----------------|
| HTTP Verb |  `PUT` |
| Security | `JWT Bearer Token` |
| URL | https://`API Endpoint`/v1/project|

### Headers

| Paramater | Value |
|--------------|------------------|
| Authorization | "Bearer `JWT Token`"|

### Input Schema
| Parameter | Description| Type|
|--------------|------------------|-----------|
| id | Project ID| String|
| project_name | New Project Name| String|
| desc | New Project Description| String|

### Output Schema

| Field | Description| Type|
|--------------|------------------|-----------|
| status | Status of operations | String ('ok') |
| id | GUID ID| String|

If the modification fails, the HTTP status code will be something other than 200, the output *status* value will be `error`
and an explanation message will be provided. For example:

`{ "status": "error", "message": "Project not found" }`

| Field | Description| Type|
|--------------|------------------|-----------|
| status | Status of operations | String ('error') |
| message | Error message | String|


## Delete

:::caution
Deleting a project is a highly **destructive** operation and should only be performed with care.
This operation cascades to delete all related entities, including models, device instances, datatypes, etc.

It will also remove related resources like AWS IOT Things, certificates, and policies.
:::

@click.option('--name', help='Project name', default=None)
@click.option('--id', help='Project ID', default=None)
@click.option('--force', '-f', help='Force deletion without confirmation', default=False)


When issuing HTTP/HTTPS requests, the JWT authentication token has to be provided in the request header.
See [Authentication](/?http#authentication) for more  information.

`DELETE https://{{API_ENDPOINT}}/v1/project?project={project name}`

`DELETE https://{{API_ENDPOINT}}/v1/project?id={project GUID}`

| Parameter | Value |
|-------------|----------------|
| HTTP Verb |  `DELETE` |
| Security | `JWT Bearer Token` |
| URL | https://`API Endpoint`/v1/project|

### Headers

| Paramater | Value |
|--------------|------------------|
| Authorization | "Bearer `JWT Token`"|

### Input Schema
| Parameter | Description| Type|
|--------------|------------------|-----------|
| id | Project ID| String|
| name | Project Name| String|

### Output Schema

| Field | Description| Type|
|--------------|------------------|-----------|
| status | Status of operations | String ('ok') |
| id | GUID ID| String|

If the deletion fails, the HTTP status code will be something other than 200, the output *status* value will be `error`
and an explanation message will be provided. For example:

`{ "status": "error", "message": "Project not found" }`

| Field | Description| Type|
|--------------|------------------|-----------|
| status | Status of operations | String ('error') |
| message | Error message | String|
