# AuthenticationControllerApi

All URIs are relative to *https://ukatie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**doLoginUsingPOST**](AuthenticationControllerApi.md#doLoginUsingPOST) | **POST** /api/v1/auth/login | Login with username/password or JWT token
[**doLogoutUsingGET**](AuthenticationControllerApi.md#doLogoutUsingGET) | **GET** /api/v1/auth/logout | Logout
[**generateGenericJWTUsingPOST**](AuthenticationControllerApi.md#generateGenericJWTUsingPOST) | **POST** /api/v1/auth/token/generic | Create generic JWT token
[**generateJWTUsingPOST**](AuthenticationControllerApi.md#generateJWTUsingPOST) | **POST** /api/v1/auth/token/katie | Create Katie specific JWT token for a particular user which exists inside the IAM of Katie
[**getJWTPublicKeyUsingGET**](AuthenticationControllerApi.md#getJWTPublicKeyUsingGET) | **GET** /api/v1/auth/token-public-key | Get public key (in PEM format) to validate JWT token
[**getUserUsingGET**](AuthenticationControllerApi.md#getUserUsingGET) | **GET** /api/v1/auth/user | Get user information of signed in user
[**getUsernameUsingGET**](AuthenticationControllerApi.md#getUsernameUsingGET) | **GET** /api/v1/auth/username | Get username of signed in user


<a name="doLoginUsingPOST"></a>
# **doLoginUsingPOST**
> Object doLoginUsingPOST(authorization, credentials, rememberMe)

Login with username/password or JWT token

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AuthenticationControllerApi;


AuthenticationControllerApi apiInstance = new AuthenticationControllerApi();
Object authorization = null; // Object | Bearer JWT
Credentials credentials = new Credentials(); // Credentials | credentials
Boolean rememberMe = true; // Boolean | True when user wants to stay logged in and false otherwise
try {
    Object result = apiInstance.doLoginUsingPOST(authorization, credentials, rememberMe);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AuthenticationControllerApi#doLoginUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**Object**](.md)| Bearer JWT | [optional]
 **credentials** | [**Credentials**](Credentials.md)| credentials | [optional]
 **rememberMe** | **Boolean**| True when user wants to stay logged in and false otherwise | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="doLogoutUsingGET"></a>
# **doLogoutUsingGET**
> Object doLogoutUsingGET()

Logout

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AuthenticationControllerApi;


AuthenticationControllerApi apiInstance = new AuthenticationControllerApi();
try {
    Object result = apiInstance.doLogoutUsingGET();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AuthenticationControllerApi#doLogoutUsingGET");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="generateGenericJWTUsingPOST"></a>
# **generateGenericJWTUsingPOST**
> Object generateGenericJWTUsingPOST(payload, seconds)

Create generic JWT token

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AuthenticationControllerApi;


AuthenticationControllerApi apiInstance = new AuthenticationControllerApi();
JWTPayload payload = new JWTPayload(); // JWTPayload | payload
Long seconds = 789L; // Long | Token validity in seconds, e.g. 3600 (60 minutes)
try {
    Object result = apiInstance.generateGenericJWTUsingPOST(payload, seconds);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AuthenticationControllerApi#generateGenericJWTUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**JWTPayload**](JWTPayload.md)| payload |
 **seconds** | **Long**| Token validity in seconds, e.g. 3600 (60 minutes) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateJWTUsingPOST"></a>
# **generateJWTUsingPOST**
> Object generateJWTUsingPOST(addProfile, seconds, username)

Create Katie specific JWT token for a particular user which exists inside the IAM of Katie

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AuthenticationControllerApi;


AuthenticationControllerApi apiInstance = new AuthenticationControllerApi();
Boolean addProfile = true; // Boolean | When true, then user profile information is added to the token, like for example date of birth or selfie as Base64
Long seconds = 789L; // Long | Token validity in seconds, e.g. 3600 (60 minutes)
String username = "username_example"; // String | Username (e.g. 'louise@wyona.com' or 'lawrence')
try {
    Object result = apiInstance.generateJWTUsingPOST(addProfile, seconds, username);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AuthenticationControllerApi#generateJWTUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addProfile** | **Boolean**| When true, then user profile information is added to the token, like for example date of birth or selfie as Base64 |
 **seconds** | **Long**| Token validity in seconds, e.g. 3600 (60 minutes) |
 **username** | **String**| Username (e.g. &#39;louise@wyona.com&#39; or &#39;lawrence&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getJWTPublicKeyUsingGET"></a>
# **getJWTPublicKeyUsingGET**
> Object getJWTPublicKeyUsingGET()

Get public key (in PEM format) to validate JWT token

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AuthenticationControllerApi;


AuthenticationControllerApi apiInstance = new AuthenticationControllerApi();
try {
    Object result = apiInstance.getJWTPublicKeyUsingGET();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AuthenticationControllerApi#getJWTPublicKeyUsingGET");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="getUserUsingGET"></a>
# **getUserUsingGET**
> Object getUserUsingGET()

Get user information of signed in user

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AuthenticationControllerApi;


AuthenticationControllerApi apiInstance = new AuthenticationControllerApi();
try {
    Object result = apiInstance.getUserUsingGET();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AuthenticationControllerApi#getUserUsingGET");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsernameUsingGET"></a>
# **getUsernameUsingGET**
> Object getUsernameUsingGET()

Get username of signed in user

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AuthenticationControllerApi;


AuthenticationControllerApi apiInstance = new AuthenticationControllerApi();
try {
    Object result = apiInstance.getUsernameUsingGET();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AuthenticationControllerApi#getUsernameUsingGET");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

