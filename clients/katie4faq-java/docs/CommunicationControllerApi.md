# CommunicationControllerApi

All URIs are relative to *https://ukatie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**processEmailsUsingGET**](CommunicationControllerApi.md#processEmailsUsingGET) | **GET** /api/v1/communication/process-emails | Process new emails associated with a particular Katie domain


<a name="processEmailsUsingGET"></a>
# **processEmailsUsingGET**
> Object processEmailsUsingGET(domain)

Process new emails associated with a particular Katie domain

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.CommunicationControllerApi;


CommunicationControllerApi apiInstance = new CommunicationControllerApi();
String domain = "domain_example"; // String | Domain Id
try {
    Object result = apiInstance.processEmailsUsingGET(domain);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CommunicationControllerApi#processEmailsUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| Domain Id | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

