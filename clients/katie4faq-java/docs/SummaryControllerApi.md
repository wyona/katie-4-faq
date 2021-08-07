# SummaryControllerApi

All URIs are relative to *https://ukatie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrentSummaryUsingGET**](SummaryControllerApi.md#getCurrentSummaryUsingGET) | **GET** /api/v1/summary/current | Generate current summary


<a name="getCurrentSummaryUsingGET"></a>
# **getCurrentSummaryUsingGET**
> Object getCurrentSummaryUsingGET(domainId, language, userId)

Generate current summary

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.SummaryControllerApi;


SummaryControllerApi apiInstance = new SummaryControllerApi();
String domainId = "domainId_example"; // String | Context, for example 'wyona', which represents a single realm containing its own summary.
String language = "language_example"; // String | Language of summary, e.g. 'de' or 'en'
String userId = "userId_example"; // String | User ID.
try {
    Object result = apiInstance.getCurrentSummaryUsingGET(domainId, language, userId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SummaryControllerApi#getCurrentSummaryUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | **String**| Context, for example &#39;wyona&#39;, which represents a single realm containing its own summary. | [optional]
 **language** | **String**| Language of summary, e.g. &#39;de&#39; or &#39;en&#39; | [optional]
 **userId** | **String**| User ID. | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html;charset=UTF-8

