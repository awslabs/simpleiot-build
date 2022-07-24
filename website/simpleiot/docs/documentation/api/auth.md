# Authentication

Access to all API methods require authentication using [JWT tokens](https://jwt.io/). The built-in way to
obtain these is by logging into [Cognito Userpools](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html)
created by default when the system is installed.

[Check here](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html) for
details on how to obtain these tokens.

## Obtaining ID Tokens

This is the easiest way to obtain a JWT token for use in making a request in Python. To start, you will need to pass
along the *Cognito Client ID*, obtained when the system is first installed and stored in the project *config.json*
file.

```python
import boto3

...
  cognito = boto3.client('cognito-idp')

  response = cognito.initiate_auth(
      ClientId=client_id,
      AuthFlow='USER_PASSWORD_AUTH',
      AuthParameters={
          "USERNAME": username,
          "PASSWORD": password
      }
  )
  id_token = resp['AuthenticationResult']['IdToken']

```

The simplest way to achieve the same result in Javascript is by using [AWS SDK for Javascript](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html)
or [Amplify Authentication component
libraries](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/#create-authentication-service).

NOTE that if you have installed the **SimpleIOT** back-end, you do not need to install the Amplify CLI and back-end services and can
jump ahead to [Create or re-use existing back-end: Configure your application](https://docs.amplify.aws/lib/auth/start/q/platform/js/#configure-your-application).


```javascript

var AWS  = require("aws-sdk");
var jwtToken;

// You need to provide COGNITO_USER_POOL, COGNITO_CLIENT_ID, and COGNITO_POOL_REGION
// These are all in the config.json file after a SimpleIOT installation.

  const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
  const poolData = {
    UserPoolId: COGNITO_USER_POOL,
    ClientId: COGNITO_CLIENT_ID,
  };
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  const cognitoUser = userPool.getCurrentUser();
  if (cognitoUser != null) {
    cognitoUser.getSession(function (err, result) {
      if (result) {
        jwtToken = result.getIdToken().getJwtToken(); // use this later to make REST calls
        ...
      }
    })
  }

```

## Using ID Tokens

To make use of the ID token using the popular requests package:

```python
import requests

...

  headers = {
      "Authorization": id_token
  }

  response = requests.request(method, url, headers=headers, **kwargs)

...
```

```javascript
...

var AWS  = require("aws-sdk");

var headers = new Headers();
headers.append("Authorization", "Bearer " + jwtToken); // Note single-space after 'Bearer'

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};


fetch(url, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

```
