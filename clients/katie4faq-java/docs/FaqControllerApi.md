# FaqControllerApi

All URIs are relative to *https://ukatie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFAQUsingGET**](FaqControllerApi.md#getFAQUsingGET) | **GET** /api/v1/faq | Get Frequently Asked Questions


<a name="getFAQUsingGET"></a>
# **getFAQUsingGET**
> Object getFAQUsingGET(language, context)

Get Frequently Asked Questions

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.FaqControllerApi;


FaqControllerApi apiInstance = new FaqControllerApi();
String language = "language_example"; // String | Language of FAQ, e.g. 'de' or 'en'
String context = "context_example"; // String | Context, for example 'wyona', which represents a single realm containing its own set of FAQ, etc.
try {
    Object result = apiInstance.getFAQUsingGET(language, context);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FaqControllerApi#getFAQUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **String**| Language of FAQ, e.g. &#39;de&#39; or &#39;en&#39; |
 **context** | **String**| Context, for example &#39;wyona&#39;, which represents a single realm containing its own set of FAQ, etc. | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

