# AskControllerApi

All URIs are relative to *https://ukatie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAnswerUsingGET**](AskControllerApi.md#getAnswerUsingGET) | **GET** /api/v1/ask | Ask question and get answer of a previously asked duplicated question. If no answer is available, then the uuid and answer field of the response body will be null.
[**postQuestionUsingPOST**](AskControllerApi.md#postQuestionUsingPOST) | **POST** /api/v1/ask/{domain-id} | Ask question and get answer of a previously asked duplicated question. If no answer is available, then the uuid and answer field of the response body will be null.
[**submitQuestionToExpertUsingGET**](AskControllerApi.md#submitQuestionToExpertUsingGET) | **GET** /api/v1/submitQuestionToExpert | Submit question (when signed in) to expert


<a name="getAnswerUsingGET"></a>
# **getAnswerUsingGET**
> ResponseAnswer getAnswerUsingGET(question, answerLinkType, authorization, domainId, email, fcmToken, webhookEchoContent)

Ask question and get answer of a previously asked duplicated question. If no answer is available, then the uuid and answer field of the response body will be null.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AskControllerApi;


AskControllerApi apiInstance = new AskControllerApi();
String question = "question_example"; // String | Question, e.g. 'What is the highest mountain of the world?'
String answerLinkType = "answerLinkType_example"; // String | Answer link type. When value is set to 'deeplink' and as soon as expert will have answered question, then email or push notification to questioner will contain a deep link to answer, such that mobile app is opened and answer can be read within mobile app
Object authorization = null; // Object | Bearer JWT
String domainId = "domainId_example"; // String | Domain Id, for example 'wyona', which represents a single realm containing its own set of questions/answers. When no domain Id is set, then the ROOT domain Id will be used.
String email = "email_example"; // String | Email address of user asking question (e.g. 'louise@wyona.com'), such that user can be notified by email when an expert has answered the question
String fcmToken = "fcmToken_example"; // String | Firebase Cloud Messaging token associated with mobile device of user asking question, such that a push notification can be sent when an expert has answered the question
String webhookEchoContent = "webhookEchoContent_example"; // String | Content which is echoed back by webhook(s), in case webhook(s) configured for the given domain Id 
try {
    ResponseAnswer result = apiInstance.getAnswerUsingGET(question, answerLinkType, authorization, domainId, email, fcmToken, webhookEchoContent);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AskControllerApi#getAnswerUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **question** | **String**| Question, e.g. &#39;What is the highest mountain of the world?&#39; |
 **answerLinkType** | **String**| Answer link type. When value is set to &#39;deeplink&#39; and as soon as expert will have answered question, then email or push notification to questioner will contain a deep link to answer, such that mobile app is opened and answer can be read within mobile app | [optional]
 **authorization** | [**Object**](.md)| Bearer JWT | [optional]
 **domainId** | **String**| Domain Id, for example &#39;wyona&#39;, which represents a single realm containing its own set of questions/answers. When no domain Id is set, then the ROOT domain Id will be used. | [optional]
 **email** | **String**| Email address of user asking question (e.g. &#39;louise@wyona.com&#39;), such that user can be notified by email when an expert has answered the question | [optional]
 **fcmToken** | **String**| Firebase Cloud Messaging token associated with mobile device of user asking question, such that a push notification can be sent when an expert has answered the question | [optional]
 **webhookEchoContent** | **String**| Content which is echoed back by webhook(s), in case webhook(s) configured for the given domain Id  | [optional]

### Return type

[**ResponseAnswer**](ResponseAnswer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postQuestionUsingPOST"></a>
# **postQuestionUsingPOST**
> ResponseAnswer postQuestionUsingPOST(domainId, questionAndContactInfo, authorization)

Ask question and get answer of a previously asked duplicated question. If no answer is available, then the uuid and answer field of the response body will be null.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AskControllerApi;


AskControllerApi apiInstance = new AskControllerApi();
String domainId = "domainId_example"; // String | Domain Id of knowledge base, for example 'b3158772-ac8f-4ec1-a9d7-bd0d3887fd9b', which contains its own set of questions/answers
AskQuestionBody questionAndContactInfo = new AskQuestionBody(); // AskQuestionBody | Question and optional contact information in case Katie does not know the answer and a human expert can send an answer to questioner
Object authorization = null; // Object | Bearer JWT
try {
    ResponseAnswer result = apiInstance.postQuestionUsingPOST(domainId, questionAndContactInfo, authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AskControllerApi#postQuestionUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | **String**| Domain Id of knowledge base, for example &#39;b3158772-ac8f-4ec1-a9d7-bd0d3887fd9b&#39;, which contains its own set of questions/answers |
 **questionAndContactInfo** | [**AskQuestionBody**](AskQuestionBody.md)| Question and optional contact information in case Katie does not know the answer and a human expert can send an answer to questioner |
 **authorization** | [**Object**](.md)| Bearer JWT | [optional]

### Return type

[**ResponseAnswer**](ResponseAnswer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitQuestionToExpertUsingGET"></a>
# **submitQuestionToExpertUsingGET**
> Object submitQuestionToExpertUsingGET(question, authorization, domainId)

Submit question (when signed in) to expert

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.AskControllerApi;


AskControllerApi apiInstance = new AskControllerApi();
String question = "question_example"; // String | Question, e.g. 'What is the highest mountain of the world?'
Object authorization = null; // Object | Bearer JWT
String domainId = "domainId_example"; // String | Domain Id, for example 'wyona', which represents a single realm containing its own set of questions/answers, etc.
try {
    Object result = apiInstance.submitQuestionToExpertUsingGET(question, authorization, domainId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AskControllerApi#submitQuestionToExpertUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **question** | **String**| Question, e.g. &#39;What is the highest mountain of the world?&#39; |
 **authorization** | [**Object**](.md)| Bearer JWT | [optional]
 **domainId** | **String**| Domain Id, for example &#39;wyona&#39;, which represents a single realm containing its own set of questions/answers, etc. | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

