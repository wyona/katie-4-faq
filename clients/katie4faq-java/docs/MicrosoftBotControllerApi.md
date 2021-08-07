# MicrosoftBotControllerApi

All URIs are relative to *https://ukatie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**handleEventsUsingPOST**](MicrosoftBotControllerApi.md#handleEventsUsingPOST) | **POST** /api/v1/microsoft/message | Handle Microsoft bot messages


<a name="handleEventsUsingPOST"></a>
# **handleEventsUsingPOST**
> Object handleEventsUsingPOST(message)

Handle Microsoft bot messages

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.MicrosoftBotControllerApi;


MicrosoftBotControllerApi apiInstance = new MicrosoftBotControllerApi();
MicrosoftBotMessage message = new MicrosoftBotMessage(); // MicrosoftBotMessage | message
try {
    Object result = apiInstance.handleEventsUsingPOST(message);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MicrosoftBotControllerApi#handleEventsUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | [**MicrosoftBotMessage**](MicrosoftBotMessage.md)| message |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

