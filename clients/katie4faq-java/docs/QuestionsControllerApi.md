# QuestionsControllerApi

All URIs are relative to *https://ukatie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveAnswerOfAskedQuestionUsingGET**](QuestionsControllerApi.md#approveAnswerOfAskedQuestionUsingGET) | **GET** /api/v1/questions/asked/{qid}/approve | Approve answer of asked question
[**discardAnswerOfAskedQuestionUsingGET**](QuestionsControllerApi.md#discardAnswerOfAskedQuestionUsingGET) | **GET** /api/v1/questions/asked/{qid}/discard | Discard answer of asked question
[**getAskedQuestionUsingGET**](QuestionsControllerApi.md#getAskedQuestionUsingGET) | **GET** /api/v1/questions/asked/{qid} | Get a particular asked question
[**getAskedQuestionsUsingGET**](QuestionsControllerApi.md#getAskedQuestionsUsingGET) | **GET** /api/v1/questions/asked | Get all asked questions
[**getEmailContainingAskedQuestionUsingGET**](QuestionsControllerApi.md#getEmailContainingAskedQuestionUsingGET) | **GET** /api/v1/questions/asked/{qid}/email | Get email containing asked question
[**getResubmittedQuestionsUsingGET**](QuestionsControllerApi.md#getResubmittedQuestionsUsingGET) | **GET** /api/v1/questions/resubmitted | Get all resubmitted questions
[**getTrainedQuestionsIndexUsingGET**](QuestionsControllerApi.md#getTrainedQuestionsIndexUsingGET) | **GET** /api/v1/questions/trained/index | Get index of all trained questions/answers
[**getTrainedQuestionsUsingGET**](QuestionsControllerApi.md#getTrainedQuestionsUsingGET) | **GET** /api/v1/questions/trained | Get all trained questions/answers


<a name="approveAnswerOfAskedQuestionUsingGET"></a>
# **approveAnswerOfAskedQuestionUsingGET**
> Object approveAnswerOfAskedQuestionUsingGET(qid)

Approve answer of asked question

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionsControllerApi;


QuestionsControllerApi apiInstance = new QuestionsControllerApi();
String qid = "qid_example"; // String | UUID of question (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.approveAnswerOfAskedQuestionUsingGET(qid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionsControllerApi#approveAnswerOfAskedQuestionUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qid** | **String**| UUID of question (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="discardAnswerOfAskedQuestionUsingGET"></a>
# **discardAnswerOfAskedQuestionUsingGET**
> Object discardAnswerOfAskedQuestionUsingGET(qid)

Discard answer of asked question

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionsControllerApi;


QuestionsControllerApi apiInstance = new QuestionsControllerApi();
String qid = "qid_example"; // String | UUID of question (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.discardAnswerOfAskedQuestionUsingGET(qid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionsControllerApi#discardAnswerOfAskedQuestionUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qid** | **String**| UUID of question (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAskedQuestionUsingGET"></a>
# **getAskedQuestionUsingGET**
> Object getAskedQuestionUsingGET(qid)

Get a particular asked question

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionsControllerApi;


QuestionsControllerApi apiInstance = new QuestionsControllerApi();
String qid = "qid_example"; // String | UUID of question (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.getAskedQuestionUsingGET(qid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionsControllerApi#getAskedQuestionUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qid** | **String**| UUID of question (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAskedQuestionsUsingGET"></a>
# **getAskedQuestionsUsingGET**
> Object getAskedQuestionsUsingGET(limit, offset, contextId)

Get all asked questions

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionsControllerApi;


QuestionsControllerApi apiInstance = new QuestionsControllerApi();
Integer limit = 56; // Integer | Pagination: Limit the number of returned questions
Integer offset = 56; // Integer | Pagination: Offset indicates the start of the returned questions
String contextId = "contextId_example"; // String | Domain Id of asked questions (e.g. 'wyona' or 'ROOT')
try {
    Object result = apiInstance.getAskedQuestionsUsingGET(limit, offset, contextId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionsControllerApi#getAskedQuestionsUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Integer**| Pagination: Limit the number of returned questions |
 **offset** | **Integer**| Pagination: Offset indicates the start of the returned questions |
 **contextId** | **String**| Domain Id of asked questions (e.g. &#39;wyona&#39; or &#39;ROOT&#39;) | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEmailContainingAskedQuestionUsingGET"></a>
# **getEmailContainingAskedQuestionUsingGET**
> Object getEmailContainingAskedQuestionUsingGET(qid)

Get email containing asked question

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionsControllerApi;


QuestionsControllerApi apiInstance = new QuestionsControllerApi();
String qid = "qid_example"; // String | UUID of question (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.getEmailContainingAskedQuestionUsingGET(qid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionsControllerApi#getEmailContainingAskedQuestionUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qid** | **String**| UUID of question (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="getResubmittedQuestionsUsingGET"></a>
# **getResubmittedQuestionsUsingGET**
> Object getResubmittedQuestionsUsingGET(limit, offset, contextId, status)

Get all resubmitted questions

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionsControllerApi;


QuestionsControllerApi apiInstance = new QuestionsControllerApi();
Integer limit = 56; // Integer | Pagination: Limit the number of returned resubmitted questions
Integer offset = 56; // Integer | Pagination: Offset indicates the start of the returned resubmitted questions
String contextId = "contextId_example"; // String | Context Id of resubmitted questions (e.g. 'wyona' or 'ROOT')
String status = "status_example"; // String | Status of resubmitted questions (e.g. 'answer-pending', 'answered-and-ready-to-send', 'answer-sent', 'answer-rated', 'trained-with-answer')
try {
    Object result = apiInstance.getResubmittedQuestionsUsingGET(limit, offset, contextId, status);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionsControllerApi#getResubmittedQuestionsUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Integer**| Pagination: Limit the number of returned resubmitted questions |
 **offset** | **Integer**| Pagination: Offset indicates the start of the returned resubmitted questions |
 **contextId** | **String**| Context Id of resubmitted questions (e.g. &#39;wyona&#39; or &#39;ROOT&#39;) | [optional]
 **status** | **String**| Status of resubmitted questions (e.g. &#39;answer-pending&#39;, &#39;answered-and-ready-to-send&#39;, &#39;answer-sent&#39;, &#39;answer-rated&#39;, &#39;trained-with-answer&#39;) | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrainedQuestionsIndexUsingGET"></a>
# **getTrainedQuestionsIndexUsingGET**
> Object getTrainedQuestionsIndexUsingGET(domainId)

Get index of all trained questions/answers

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionsControllerApi;


QuestionsControllerApi apiInstance = new QuestionsControllerApi();
String domainId = "domainId_example"; // String | Domain Id of resubmitted questions (e.g. 'wyona' or 'ROOT')
try {
    Object result = apiInstance.getTrainedQuestionsIndexUsingGET(domainId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionsControllerApi#getTrainedQuestionsIndexUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | **String**| Domain Id of resubmitted questions (e.g. &#39;wyona&#39; or &#39;ROOT&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="getTrainedQuestionsUsingGET"></a>
# **getTrainedQuestionsUsingGET**
> Object getTrainedQuestionsUsingGET(domainId)

Get all trained questions/answers

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionsControllerApi;


QuestionsControllerApi apiInstance = new QuestionsControllerApi();
String domainId = "domainId_example"; // String | Domain Id of knowledge base of trained questions (e.g. 'wyona' or 'ROOT')
try {
    Object result = apiInstance.getTrainedQuestionsUsingGET(domainId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionsControllerApi#getTrainedQuestionsUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | **String**| Domain Id of knowledge base of trained questions (e.g. &#39;wyona&#39; or &#39;ROOT&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

