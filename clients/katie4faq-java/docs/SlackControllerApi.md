# SlackControllerApi

All URIs are relative to *https://ukatie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commandKatieUsingPOST**](SlackControllerApi.md#commandKatieUsingPOST) | **POST** /api/v1/slack/command/katie | Handle &#39;/katie&#39; command
[**handleEventsUsingPOST1**](SlackControllerApi.md#handleEventsUsingPOST1) | **POST** /api/v1/slack/events | Handle Slack events
[**handleInteractionsUsingPOST**](SlackControllerApi.md#handleInteractionsUsingPOST) | **POST** /api/v1/slack/interactivity | Handle Slack interactions
[**oauth2CallbackSlackUsingGET**](SlackControllerApi.md#oauth2CallbackSlackUsingGET) | **GET** /api/v1/slack/oauth2-callback | OAuth2 callback for Slack


<a name="commandKatieUsingPOST"></a>
# **commandKatieUsingPOST**
> Object commandKatieUsingPOST(payload)

Handle &#39;/katie&#39; command

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.SlackControllerApi;


SlackControllerApi apiInstance = new SlackControllerApi();
String payload = "payload_example"; // String | payload
try {
    Object result = apiInstance.commandKatieUsingPOST(payload);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SlackControllerApi#commandKatieUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | **String**| payload |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="handleEventsUsingPOST1"></a>
# **handleEventsUsingPOST1**
> Object handleEventsUsingPOST1(event)

Handle Slack events

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.SlackControllerApi;


SlackControllerApi apiInstance = new SlackControllerApi();
SlackEventWrapper event = new SlackEventWrapper(); // SlackEventWrapper | event
try {
    Object result = apiInstance.handleEventsUsingPOST1(event);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SlackControllerApi#handleEventsUsingPOST1");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event** | [**SlackEventWrapper**](SlackEventWrapper.md)| event |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="handleInteractionsUsingPOST"></a>
# **handleInteractionsUsingPOST**
> Object handleInteractionsUsingPOST(payload)

Handle Slack interactions

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.SlackControllerApi;


SlackControllerApi apiInstance = new SlackControllerApi();
String payload = "payload_example"; // String | payload
try {
    Object result = apiInstance.handleInteractionsUsingPOST(payload);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SlackControllerApi#handleInteractionsUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | **String**| payload |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="oauth2CallbackSlackUsingGET"></a>
# **oauth2CallbackSlackUsingGET**
> Object oauth2CallbackSlackUsingGET(code, state)

OAuth2 callback for Slack

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.SlackControllerApi;


SlackControllerApi apiInstance = new SlackControllerApi();
String code = "code_example"; // String | Temporary authorization code in order to exchange for an access token
String state = "state_example"; // String | Allows you to prevent an attack by confirming that the state value coming from the response matches the one you sent.
try {
    Object result = apiInstance.oauth2CallbackSlackUsingGET(code, state);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SlackControllerApi#oauth2CallbackSlackUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Temporary authorization code in order to exchange for an access token |
 **state** | **String**| Allows you to prevent an attack by confirming that the state value coming from the response matches the one you sent. | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

