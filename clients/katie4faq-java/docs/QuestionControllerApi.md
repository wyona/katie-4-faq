# QuestionControllerApi

All URIs are relative to *https://ukatie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addQuestionAndAnswerUsingPOST**](QuestionControllerApi.md#addQuestionAndAnswerUsingPOST) | **POST** /api/v1/question/trained/{domainid} | Add/train a new QnA
[**answerResubmittedQuestionUsingPUT**](QuestionControllerApi.md#answerResubmittedQuestionUsingPUT) | **PUT** /api/v1/question/resubmitted/{uuid} | Answer a particular resubmitted question
[**deleteResubmittedQuestionUsingDELETE**](QuestionControllerApi.md#deleteResubmittedQuestionUsingDELETE) | **DELETE** /api/v1/question/resubmitted/{uuid} | Delete a particular resubmitted question
[**deleteTrainedQnAUsingDELETE**](QuestionControllerApi.md#deleteTrainedQnAUsingDELETE) | **DELETE** /api/v1/question/trained/{domainid}/{uuid} | Delete a particular trained QnA
[**getRepliedAnswerUsingGET**](QuestionControllerApi.md#getRepliedAnswerUsingGET) | **GET** /api/v1/question/resubmitted/{domainid}/{uuid}/answer | Get answer to resubmitted question
[**getResubmittedQuestionUsingGET**](QuestionControllerApi.md#getResubmittedQuestionUsingGET) | **GET** /api/v1/question/resubmitted/{uuid} | Get a particular resubmitted question
[**getTrainedQuestionAnswerUsingGET**](QuestionControllerApi.md#getTrainedQuestionAnswerUsingGET) | **GET** /api/v1/question/trained/{domainid}/{uuid} | Get a particular trained question/answer
[**rateRepliedAnswerUsingGET**](QuestionControllerApi.md#rateRepliedAnswerUsingGET) | **GET** /api/v1/question/resubmitted/{domainid}/{uuid}/rateAnswer | Rate replied answer of resubmitted question
[**sendAnswerToUserWhichResubmittedQuestionUsingGET**](QuestionControllerApi.md#sendAnswerToUserWhichResubmittedQuestionUsingGET) | **GET** /api/v1/question/resubmitted/{uuid}/sendAnswer | Send answer back to user which resubmitted question
[**trainAIWithResubmittedQuestionAndAssociatedAnswerUsingGET**](QuestionControllerApi.md#trainAIWithResubmittedQuestionAndAssociatedAnswerUsingGET) | **GET** /api/v1/question/resubmitted/{uuid}/train | Trigger training of AI service with resubmitted question and associated answer
[**updateQuestionOfResubmittedQuestionUsingPUT**](QuestionControllerApi.md#updateQuestionOfResubmittedQuestionUsingPUT) | **PUT** /api/v1/question/resubmitted/{uuid}/question | Update question of a particular resubmitted question, for example when question contains typos
[**updateTrainedAnswerUsingPUT**](QuestionControllerApi.md#updateTrainedAnswerUsingPUT) | **PUT** /api/v1/question/trained/{domainid}/{uuid} | Update a particular trained question/answer
[**updateTrainedQuestionUsingPATCH**](QuestionControllerApi.md#updateTrainedQuestionUsingPATCH) | **PATCH** /api/v1/question/trained/{domainid}/{uuid}/question | Update question of a particular trained QnA


<a name="addQuestionAndAnswerUsingPOST"></a>
# **addQuestionAndAnswerUsingPOST**
> Object addQuestionAndAnswerUsingPOST(domainid, newQnA, authorization)

Add/train a new QnA

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionControllerApi;


QuestionControllerApi apiInstance = new QuestionControllerApi();
String domainid = "domainid_example"; // String | Domain Id trained question/answer is associated with (e.g. 'ROOT' or 'df9f42a1-5697-47f0-909d-3f4b88d9baf6')
Answer newQnA = new Answer(); // Answer | Only needs to contain originalQuestion and answer
Object authorization = null; // Object | Bearer JWT
try {
    Object result = apiInstance.addQuestionAndAnswerUsingPOST(domainid, newQnA, authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionControllerApi#addQuestionAndAnswerUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainid** | **String**| Domain Id trained question/answer is associated with (e.g. &#39;ROOT&#39; or &#39;df9f42a1-5697-47f0-909d-3f4b88d9baf6&#39;) |
 **newQnA** | [**Answer**](Answer.md)| Only needs to contain originalQuestion and answer |
 **authorization** | [**Object**](.md)| Bearer JWT | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="answerResubmittedQuestionUsingPUT"></a>
# **answerResubmittedQuestionUsingPUT**
> Object answerResubmittedQuestionUsingPUT(answeredQuestion, uuid)

Answer a particular resubmitted question

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionControllerApi;


QuestionControllerApi apiInstance = new QuestionControllerApi();
ResubmittedQuestion answeredQuestion = new ResubmittedQuestion(); // ResubmittedQuestion | Only needs to contain answer
String uuid = "uuid_example"; // String | UUID of resubmitted question (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.answerResubmittedQuestionUsingPUT(answeredQuestion, uuid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionControllerApi#answerResubmittedQuestionUsingPUT");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **answeredQuestion** | [**ResubmittedQuestion**](ResubmittedQuestion.md)| Only needs to contain answer |
 **uuid** | **String**| UUID of resubmitted question (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteResubmittedQuestionUsingDELETE"></a>
# **deleteResubmittedQuestionUsingDELETE**
> Object deleteResubmittedQuestionUsingDELETE(uuid)

Delete a particular resubmitted question

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionControllerApi;


QuestionControllerApi apiInstance = new QuestionControllerApi();
String uuid = "uuid_example"; // String | UUID of resubmitted question (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.deleteResubmittedQuestionUsingDELETE(uuid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionControllerApi#deleteResubmittedQuestionUsingDELETE");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| UUID of resubmitted question (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTrainedQnAUsingDELETE"></a>
# **deleteTrainedQnAUsingDELETE**
> Object deleteTrainedQnAUsingDELETE(domainid, uuid)

Delete a particular trained QnA

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionControllerApi;


QuestionControllerApi apiInstance = new QuestionControllerApi();
String domainid = "domainid_example"; // String | Domain Id trained QnA is associated with (e.g. 'ROOT' or 'df9f42a1-5697-47f0-909d-3f4b88d9baf6')
String uuid = "uuid_example"; // String | UUID of trained QnA (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.deleteTrainedQnAUsingDELETE(domainid, uuid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionControllerApi#deleteTrainedQnAUsingDELETE");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainid** | **String**| Domain Id trained QnA is associated with (e.g. &#39;ROOT&#39; or &#39;df9f42a1-5697-47f0-909d-3f4b88d9baf6&#39;) |
 **uuid** | **String**| UUID of trained QnA (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRepliedAnswerUsingGET"></a>
# **getRepliedAnswerUsingGET**
> Object getRepliedAnswerUsingGET(domainid, uuid)

Get answer to resubmitted question

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionControllerApi;


QuestionControllerApi apiInstance = new QuestionControllerApi();
String domainid = "domainid_example"; // String | Domain Id resubmitted question is associated with (e.g. 'ROOT' or 'df9f42a1-5697-47f0-909d-3f4b88d9baf6')
String uuid = "uuid_example"; // String | UUID of resubmitted question (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.getRepliedAnswerUsingGET(domainid, uuid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionControllerApi#getRepliedAnswerUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainid** | **String**| Domain Id resubmitted question is associated with (e.g. &#39;ROOT&#39; or &#39;df9f42a1-5697-47f0-909d-3f4b88d9baf6&#39;) |
 **uuid** | **String**| UUID of resubmitted question (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getResubmittedQuestionUsingGET"></a>
# **getResubmittedQuestionUsingGET**
> Object getResubmittedQuestionUsingGET(uuid)

Get a particular resubmitted question

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionControllerApi;


QuestionControllerApi apiInstance = new QuestionControllerApi();
String uuid = "uuid_example"; // String | UUID of resubmitted question (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.getResubmittedQuestionUsingGET(uuid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionControllerApi#getResubmittedQuestionUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| UUID of resubmitted question (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrainedQuestionAnswerUsingGET"></a>
# **getTrainedQuestionAnswerUsingGET**
> Object getTrainedQuestionAnswerUsingGET(domainid, uuid, authorization)

Get a particular trained question/answer

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionControllerApi;


QuestionControllerApi apiInstance = new QuestionControllerApi();
String domainid = "domainid_example"; // String | Domain Id trained question/answer is associated with (e.g. 'ROOT' or 'df9f42a1-5697-47f0-909d-3f4b88d9baf6')
String uuid = "uuid_example"; // String | UUID of trained question/answer (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
Object authorization = null; // Object | Bearer JWT
try {
    Object result = apiInstance.getTrainedQuestionAnswerUsingGET(domainid, uuid, authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionControllerApi#getTrainedQuestionAnswerUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainid** | **String**| Domain Id trained question/answer is associated with (e.g. &#39;ROOT&#39; or &#39;df9f42a1-5697-47f0-909d-3f4b88d9baf6&#39;) |
 **uuid** | **String**| UUID of trained question/answer (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |
 **authorization** | [**Object**](.md)| Bearer JWT | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rateRepliedAnswerUsingGET"></a>
# **rateRepliedAnswerUsingGET**
> Object rateRepliedAnswerUsingGET(domainid, rating, uuid)

Rate replied answer of resubmitted question

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionControllerApi;


QuestionControllerApi apiInstance = new QuestionControllerApi();
String domainid = "domainid_example"; // String | Domain Id resubmitted question is associated with (e.g. 'ROOT' or 'df9f42a1-5697-47f0-909d-3f4b88d9baf6')
String rating = "rating_example"; // String | User rating of replied answer, between 0 and 10, whereas 0 means not helpful and 10 means very helpful
String uuid = "uuid_example"; // String | UUID of resubmitted question (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.rateRepliedAnswerUsingGET(domainid, rating, uuid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionControllerApi#rateRepliedAnswerUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainid** | **String**| Domain Id resubmitted question is associated with (e.g. &#39;ROOT&#39; or &#39;df9f42a1-5697-47f0-909d-3f4b88d9baf6&#39;) |
 **rating** | **String**| User rating of replied answer, between 0 and 10, whereas 0 means not helpful and 10 means very helpful |
 **uuid** | **String**| UUID of resubmitted question (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sendAnswerToUserWhichResubmittedQuestionUsingGET"></a>
# **sendAnswerToUserWhichResubmittedQuestionUsingGET**
> Object sendAnswerToUserWhichResubmittedQuestionUsingGET(uuid)

Send answer back to user which resubmitted question

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionControllerApi;


QuestionControllerApi apiInstance = new QuestionControllerApi();
String uuid = "uuid_example"; // String | UUID of resubmitted question (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.sendAnswerToUserWhichResubmittedQuestionUsingGET(uuid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionControllerApi#sendAnswerToUserWhichResubmittedQuestionUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| UUID of resubmitted question (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="trainAIWithResubmittedQuestionAndAssociatedAnswerUsingGET"></a>
# **trainAIWithResubmittedQuestionAndAssociatedAnswerUsingGET**
> Object trainAIWithResubmittedQuestionAndAssociatedAnswerUsingGET(uuid)

Trigger training of AI service with resubmitted question and associated answer

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionControllerApi;


QuestionControllerApi apiInstance = new QuestionControllerApi();
String uuid = "uuid_example"; // String | UUID of resubmitted question (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.trainAIWithResubmittedQuestionAndAssociatedAnswerUsingGET(uuid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionControllerApi#trainAIWithResubmittedQuestionAndAssociatedAnswerUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| UUID of resubmitted question (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateQuestionOfResubmittedQuestionUsingPUT"></a>
# **updateQuestionOfResubmittedQuestionUsingPUT**
> Object updateQuestionOfResubmittedQuestionUsingPUT(question, uuid)

Update question of a particular resubmitted question, for example when question contains typos

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionControllerApi;


QuestionControllerApi apiInstance = new QuestionControllerApi();
ResubmittedQuestion question = new ResubmittedQuestion(); // ResubmittedQuestion | Only needs to contain question
String uuid = "uuid_example"; // String | UUID of resubmitted question (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.updateQuestionOfResubmittedQuestionUsingPUT(question, uuid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionControllerApi#updateQuestionOfResubmittedQuestionUsingPUT");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **question** | [**ResubmittedQuestion**](ResubmittedQuestion.md)| Only needs to contain question |
 **uuid** | **String**| UUID of resubmitted question (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTrainedAnswerUsingPUT"></a>
# **updateTrainedAnswerUsingPUT**
> Object updateTrainedAnswerUsingPUT(domainid, updatedAnswer, uuid)

Update a particular trained question/answer

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionControllerApi;


QuestionControllerApi apiInstance = new QuestionControllerApi();
String domainid = "domainid_example"; // String | Domain Id trained question/answer is associated with (e.g. 'ROOT' or 'df9f42a1-5697-47f0-909d-3f4b88d9baf6')
Answer updatedAnswer = new Answer(); // Answer | Only needs to contain answer
String uuid = "uuid_example"; // String | UUID of trained question/answer (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.updateTrainedAnswerUsingPUT(domainid, updatedAnswer, uuid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionControllerApi#updateTrainedAnswerUsingPUT");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainid** | **String**| Domain Id trained question/answer is associated with (e.g. &#39;ROOT&#39; or &#39;df9f42a1-5697-47f0-909d-3f4b88d9baf6&#39;) |
 **updatedAnswer** | [**Answer**](Answer.md)| Only needs to contain answer |
 **uuid** | **String**| UUID of trained question/answer (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTrainedQuestionUsingPATCH"></a>
# **updateTrainedQuestionUsingPATCH**
> Object updateTrainedQuestionUsingPATCH(domainid, question, uuid)

Update question of a particular trained QnA

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.QuestionControllerApi;


QuestionControllerApi apiInstance = new QuestionControllerApi();
String domainid = "domainid_example"; // String | Domain Id trained question/answer is associated with (e.g. 'ROOT' or 'df9f42a1-5697-47f0-909d-3f4b88d9baf6')
Question question = new Question(); // Question | Updated question
String uuid = "uuid_example"; // String | UUID of trained question/answer (e.g. '194b6cf3-bad2-48e6-a8d2-8c55eb33f027')
try {
    Object result = apiInstance.updateTrainedQuestionUsingPATCH(domainid, question, uuid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling QuestionControllerApi#updateTrainedQuestionUsingPATCH");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainid** | **String**| Domain Id trained question/answer is associated with (e.g. &#39;ROOT&#39; or &#39;df9f42a1-5697-47f0-909d-3f4b88d9baf6&#39;) |
 **question** | [**Question**](Question.md)| Updated question |
 **uuid** | **String**| UUID of trained question/answer (e.g. &#39;194b6cf3-bad2-48e6-a8d2-8c55eb33f027&#39;) |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

