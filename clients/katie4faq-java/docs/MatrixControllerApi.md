# MatrixControllerApi

All URIs are relative to *https://ukatie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**syncUsingGET**](MatrixControllerApi.md#syncUsingGET) | **GET** /api/v1/matrix/sync | Synchronise Katie&#39;s state with the latest state on the Matrix homeserver


<a name="syncUsingGET"></a>
# **syncUsingGET**
> Object syncUsingGET()

Synchronise Katie&#39;s state with the latest state on the Matrix homeserver

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.MatrixControllerApi;


MatrixControllerApi apiInstance = new MatrixControllerApi();
try {
    Object result = apiInstance.syncUsingGET();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling MatrixControllerApi#syncUsingGET");
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

