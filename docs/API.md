# API Documentation

## Authentication

### Register

`POST domain/api/auth/register`

Endpoint used to create an account.

#### Parameters

- `firstName` (string, required)
- `lastName` (string, required)
- `email` (string, required)
- `password` (string, required)
- `birthDate` (string, required, ISO format date)
- `gender` (string, required, "male" | "female")

Password requirements:

- at least 8 characters long
- should contain a combination of uppercase and lowercase letters, numbers, and special characters

#### Response

- Status codes:
  - `201` User registered successfully
  - `409` Email is taken
  - `400` Missing required fields, Invalid data type, User input is invalid
  - `500` Internal Server Error

- Response body (Successful sign up):

  ```json
  {
    "message": "User registered successfully"
  }
  ```

- Response body (Error, e.g. User input is invalid):

  ```json
  {
    "error": "User input is invalid"
  }
  ```

#### Example

```js
async function request() {
  const data = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@test.com",
    password: "TestPass1@",
    birthDate: "2001-01-01",
    gender: "male",
  }
  
  const response = await fetch(
    "http://localhost/api/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data),
    })
    
  return await response.json()
}
```

### Login

`POST domain/api/auth/login`

Endpoint used to receive the session cookie.

#### Parameters

- `email` (string, required)
- `password` (string, required)

Password requirements:

- at least 8 characters long
- should contain a combination of uppercase and lowercase letters, numbers, and special characters

#### Response

- Status codes:
  - `200` Authenticated successfully
  - `400` Missing required fields, Invalid data types, Credentials are invalid, Already authenticated

- Response body (Successful login):
  
  ```json
  {
    "message": "Authenticated successfully"
  }
  ```

- Response body (Error e.g. Invalid data types):
  
  ```json
  {
    "error": "Invalid data types"
  }
  ```

- Cookie (e.g):

  ```text
  sid=s%3A9wuBtp74TSWmVFNoZTdjRBB6Ii0nuLaX.rW3D%2FhF2WoylNDpc%2F7uQUFHWtVHbNI0AO89PGhBEk1I
  ```

#### Example

```js
async function request() {
  const data = {
    email: "example@test.com",
    password: "TestPass1@",
  }
  
  const response = await fetch(
    "http://localhost/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data)
    })
    return await response.json()
}
```

### Logout

`POST domain/api/auth/logout`

Endpoint used to destroy session cookie.

#### Parameters

- Session cookie

#### Response

- Status codes:
  - `200` Authenticated successfully
  - `400` Missing required fields, Invalid data types, Credentials are invalid, Already authenticated

- Response body (Successful login):
  
  ```json
  {
    "message": "Authenticated successfully"
  }
  ```

- Response body (Error e.g. Invalid data types):
  
  ```json
  {
    "error": "Invalid data types"
  }
  ```

#### Example

```js
async function request() {
  const response = await fetch(
    "http://localhost/api/auth/logout",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    return await response.json()
}
```

### Me

`POST domain/api/auth/me`

Endpoint used to check if the session cookie has not expired.

#### Parameters

- Session cookie

#### Response

- Response codes:
  - `200` Authenticated
  - `401` Unauthenticated
  - `500` Internal Server Error
  
- Response body (User is logged in):
  
  ```json
  {
    "message": "Authenticated"
  }
  ```

- Response body (Error e.g. Unauthenticated):
  
  ```json
  {
    "error": "Unauthenticated"
  }
  ```

#### Example

```js
async function request() {
  const response = await fetch(
    "http://localhost/api/auth/me",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    return await response.json()
}
```
