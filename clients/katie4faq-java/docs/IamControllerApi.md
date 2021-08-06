# IamControllerApi

All URIs are relative to *https://ukatie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserUsingPOST**](IamControllerApi.md#addUserUsingPOST) | **POST** /api/v1/user | Add user, whereas username, email, role (ADMIN, USER) and password are required. Username and email can be the same.
[**getUserUsingGET1**](IamControllerApi.md#getUserUsingGET1) | **GET** /api/v1/user/{id} | Get a particular user
[**getUsersUsingGET**](IamControllerApi.md#getUsersUsingGET) | **GET** /api/v1/users | Get all users
[**resetPasswordUsingPUT**](IamControllerApi.md#resetPasswordUsingPUT) | **PUT** /api/v1/user/reset-password | Reset password
[**submitUsernameUsingPOST**](IamControllerApi.md#submitUsernameUsingPOST) | **POST** /api/v1/user/forgot-password | Submit email or username when forgot password
[**updateUserUsingPUT**](IamControllerApi.md#updateUserUsingPUT) | **PUT** /api/v1/user/{id} | Update a particular user


<a name="addUserUsingPOST"></a>
# **addUserUsingPOST**
> Object addUserUsingPOST(user)

Add user, whereas username, email, role (ADMIN, USER) and password are required. Username and email can be the same.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.IamControllerApi;


IamControllerApi apiInstance = new IamControllerApi();
User user = new User(); // User | user
try {
    Object result = apiInstance.addUserUsingPOST(user);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling IamControllerApi#addUserUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| user |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserUsingGET1"></a>
# **getUserUsingGET1**
> Object getUserUsingGET1(id)

Get a particular user

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.IamControllerApi;


IamControllerApi apiInstance = new IamControllerApi();
String id = "id_example"; // String | User Id
try {
    Object result = apiInstance.getUserUsingGET1(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling IamControllerApi#getUserUsingGET1");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User Id |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsersUsingGET"></a>
# **getUsersUsingGET**
> Object getUsersUsingGET(domainId)

Get all users

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.IamControllerApi;


IamControllerApi apiInstance = new IamControllerApi();
String domainId = "domainId_example"; // String | Domain Id, for example 'wyona', which represents a single realm containing its own users, etc.
try {
    Object result = apiInstance.getUsersUsingGET(domainId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling IamControllerApi#getUsersUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | **String**| Domain Id, for example &#39;wyona&#39;, which represents a single realm containing its own users, etc. | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="resetPasswordUsingPUT"></a>
# **resetPasswordUsingPUT**
> Object resetPasswordUsingPUT(passwordResetToken)

Reset password

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.IamControllerApi;


IamControllerApi apiInstance = new IamControllerApi();
PasswordResetToken passwordResetToken = new PasswordResetToken(); // PasswordResetToken | passwordResetToken
try {
    Object result = apiInstance.resetPasswordUsingPUT(passwordResetToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling IamControllerApi#resetPasswordUsingPUT");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordResetToken** | [**PasswordResetToken**](PasswordResetToken.md)| passwordResetToken |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="submitUsernameUsingPOST"></a>
# **submitUsernameUsingPOST**
> Object submitUsernameUsingPOST(username)

Submit email or username when forgot password

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.IamControllerApi;


IamControllerApi apiInstance = new IamControllerApi();
String username = "username_example"; // String | Email or username
try {
    Object result = apiInstance.submitUsernameUsingPOST(username);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling IamControllerApi#submitUsernameUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Email or username |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateUserUsingPUT"></a>
# **updateUserUsingPUT**
> Object updateUserUsingPUT(id, user)

Update a particular user

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.IamControllerApi;


IamControllerApi apiInstance = new IamControllerApi();
String id = "id_example"; // String | User Id
User user = new User(); // User | user
try {
    Object result = apiInstance.updateUserUsingPUT(id, user);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling IamControllerApi#updateUserUsingPUT");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| User Id |
 **user** | [**User**](User.md)| user |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

