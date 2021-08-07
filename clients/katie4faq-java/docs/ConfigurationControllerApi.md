# ConfigurationControllerApi

All URIs are relative to *https://ukatie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDomainUsingPOST**](ConfigurationControllerApi.md#createDomainUsingPOST) | **POST** /api/v1/configuration/domain | Create a new domain
[**cspViolationReportUsingPOST**](ConfigurationControllerApi.md#cspViolationReportUsingPOST) | **POST** /api/v1/configuration/csp-violation-report | Process Content Security Policy violation report
[**deleteDomainUsingDELETE**](ConfigurationControllerApi.md#deleteDomainUsingDELETE) | **DELETE** /api/v1/configuration/domain/{id} | Delete domain configuration
[**getConfigurationUsingGET**](ConfigurationControllerApi.md#getConfigurationUsingGET) | **GET** /api/v1/configuration | Get server configuration
[**getContextConfigurationUsingGET**](ConfigurationControllerApi.md#getContextConfigurationUsingGET) | **GET** /api/v1/configuration/context/{id} | Get domain configuration
[**getContextConfigurationUsingGET1**](ConfigurationControllerApi.md#getContextConfigurationUsingGET1) | **GET** /api/v1/configuration/context | Get all domain configurations which signed in user has access to
[**getDomainDisplayInformationUsingGET**](ConfigurationControllerApi.md#getDomainDisplayInformationUsingGET) | **GET** /api/v1/configuration/domain/{id}/display-information | Get domain configuration
[**getVersionUsingGET**](ConfigurationControllerApi.md#getVersionUsingGET) | **GET** /api/v1/configuration/version | Get server configuration
[**updateMessageBodyHostnameUsingPUT**](ConfigurationControllerApi.md#updateMessageBodyHostnameUsingPUT) | **PUT** /api/v1/configuration/domain/{id}/message-body-hostname | Update the hostname used inside mail/message body


<a name="createDomainUsingPOST"></a>
# **createDomainUsingPOST**
> Object createDomainUsingPOST(answersGenerallyProtected, mailSubjectTag, name)

Create a new domain

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ConfigurationControllerApi;


ConfigurationControllerApi apiInstance = new ConfigurationControllerApi();
Boolean answersGenerallyProtected = true; // Boolean | When true, then answers are generally protected
String mailSubjectTag = "mailSubjectTag_example"; // String | E-Mail subject tag (e.g. 'Katie of Wyona')
String name = "name_example"; // String | Name of domain (e.g. 'Wyona Research & Development')
try {
    Object result = apiInstance.createDomainUsingPOST(answersGenerallyProtected, mailSubjectTag, name);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConfigurationControllerApi#createDomainUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **answersGenerallyProtected** | **Boolean**| When true, then answers are generally protected |
 **mailSubjectTag** | **String**| E-Mail subject tag (e.g. &#39;Katie of Wyona&#39;) |
 **name** | **String**| Name of domain (e.g. &#39;Wyona Research &amp; Development&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cspViolationReportUsingPOST"></a>
# **cspViolationReportUsingPOST**
> Object cspViolationReportUsingPOST()

Process Content Security Policy violation report

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ConfigurationControllerApi;


ConfigurationControllerApi apiInstance = new ConfigurationControllerApi();
try {
    Object result = apiInstance.cspViolationReportUsingPOST();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConfigurationControllerApi#cspViolationReportUsingPOST");
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDomainUsingDELETE"></a>
# **deleteDomainUsingDELETE**
> Object deleteDomainUsingDELETE(id)

Delete domain configuration

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ConfigurationControllerApi;


ConfigurationControllerApi apiInstance = new ConfigurationControllerApi();
String id = "id_example"; // String | Id of domain (e.g. 'ROOT' or 'jmeter')
try {
    Object result = apiInstance.deleteDomainUsingDELETE(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConfigurationControllerApi#deleteDomainUsingDELETE");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of domain (e.g. &#39;ROOT&#39; or &#39;jmeter&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getConfigurationUsingGET"></a>
# **getConfigurationUsingGET**
> Object getConfigurationUsingGET()

Get server configuration

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ConfigurationControllerApi;


ConfigurationControllerApi apiInstance = new ConfigurationControllerApi();
try {
    Object result = apiInstance.getConfigurationUsingGET();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConfigurationControllerApi#getConfigurationUsingGET");
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

<a name="getContextConfigurationUsingGET"></a>
# **getContextConfigurationUsingGET**
> Object getContextConfigurationUsingGET(id)

Get domain configuration

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ConfigurationControllerApi;


ConfigurationControllerApi apiInstance = new ConfigurationControllerApi();
String id = "id_example"; // String | Id of domain (e.g. 'ROOT' or 'jmeter')
try {
    Object result = apiInstance.getContextConfigurationUsingGET(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConfigurationControllerApi#getContextConfigurationUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of domain (e.g. &#39;ROOT&#39; or &#39;jmeter&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getContextConfigurationUsingGET1"></a>
# **getContextConfigurationUsingGET1**
> Object getContextConfigurationUsingGET1()

Get all domain configurations which signed in user has access to

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ConfigurationControllerApi;


ConfigurationControllerApi apiInstance = new ConfigurationControllerApi();
try {
    Object result = apiInstance.getContextConfigurationUsingGET1();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConfigurationControllerApi#getContextConfigurationUsingGET1");
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

<a name="getDomainDisplayInformationUsingGET"></a>
# **getDomainDisplayInformationUsingGET**
> Object getDomainDisplayInformationUsingGET(id)

Get domain configuration

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ConfigurationControllerApi;


ConfigurationControllerApi apiInstance = new ConfigurationControllerApi();
String id = "id_example"; // String | Id of domain (e.g. 'ROOT' or 'jmeter')
try {
    Object result = apiInstance.getDomainDisplayInformationUsingGET(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConfigurationControllerApi#getDomainDisplayInformationUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of domain (e.g. &#39;ROOT&#39; or &#39;jmeter&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVersionUsingGET"></a>
# **getVersionUsingGET**
> Object getVersionUsingGET()

Get server configuration

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ConfigurationControllerApi;


ConfigurationControllerApi apiInstance = new ConfigurationControllerApi();
try {
    Object result = apiInstance.getVersionUsingGET();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConfigurationControllerApi#getVersionUsingGET");
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

<a name="updateMessageBodyHostnameUsingPUT"></a>
# **updateMessageBodyHostnameUsingPUT**
> Object updateMessageBodyHostnameUsingPUT(hostname, id)

Update the hostname used inside mail/message body

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ConfigurationControllerApi;


ConfigurationControllerApi apiInstance = new ConfigurationControllerApi();
Hostname hostname = new Hostname(); // Hostname | Mail/message body hostname
String id = "id_example"; // String | Id of domain (e.g. 'ROOT' or 'jmeter')
try {
    Object result = apiInstance.updateMessageBodyHostnameUsingPUT(hostname, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConfigurationControllerApi#updateMessageBodyHostnameUsingPUT");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hostname** | [**Hostname**](Hostname.md)| Mail/message body hostname |
 **id** | **String**| Id of domain (e.g. &#39;ROOT&#39; or &#39;jmeter&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

