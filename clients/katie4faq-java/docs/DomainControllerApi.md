# DomainControllerApi

All URIs are relative to *https://ukatie.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWebhookUsingPOST**](DomainControllerApi.md#addWebhookUsingPOST) | **POST** /api/v1/domain/{id}/webhook | Add webhook to a particular domain
[**deleteWebhookUsingDELETE**](DomainControllerApi.md#deleteWebhookUsingDELETE) | **DELETE** /api/v1/domain/{id}/webhooks/{webhook-id} | Delete a particular webhook
[**getInsightsUsingGET**](DomainControllerApi.md#getInsightsUsingGET) | **GET** /api/v1/domain/{id}/insights | Get insights of a particular domain
[**getMembersUsingGET**](DomainControllerApi.md#getMembersUsingGET) | **GET** /api/v1/domain/{id}/users | Get all members of a particular domain
[**getWebhookDeliveriesUsingGET**](DomainControllerApi.md#getWebhookDeliveriesUsingGET) | **GET** /api/v1/domain/{id}/webhooks/{webhook-id}/deliveries | Get deliveries of a particular webhook
[**getWebhooksUsingGET**](DomainControllerApi.md#getWebhooksUsingGET) | **GET** /api/v1/domain/{id}/webhooks | Get webhooks of a particular domain
[**inviteUserUsingPOST**](DomainControllerApi.md#inviteUserUsingPOST) | **POST** /api/v1/domain/{id}/invite-user | Invite user to a particular domain
[**reindexUsingGET**](DomainControllerApi.md#reindexUsingGET) | **GET** /api/v1/domain/{id}/reindex | Reindex all QnAs of a particular domain
[**toggleExpertUsingPUT**](DomainControllerApi.md#toggleExpertUsingPUT) | **PUT** /api/v1/domain/{id}/user/{username}/expert | Toggle whether a particular user is an expert
[**toggleModerationUsingPUT**](DomainControllerApi.md#toggleModerationUsingPUT) | **PUT** /api/v1/domain/{id}/moderation | Toggle whether answers must be approved / moderated
[**toggleModeratorUsingPUT**](DomainControllerApi.md#toggleModeratorUsingPUT) | **PUT** /api/v1/domain/{id}/user/{username}/moderator | Toggle whether a particular user is a moderator
[**updateIMAPConfigurationUsingPUT**](DomainControllerApi.md#updateIMAPConfigurationUsingPUT) | **PUT** /api/v1/domain/{id}/imap-configuration | Update IMAP configuration
[**updateMatchReplyToEmailAddressUsingPUT**](DomainControllerApi.md#updateMatchReplyToEmailAddressUsingPUT) | **PUT** /api/v1/domain/{id}/match-reply-to-email | Update match reply-to email address


<a name="addWebhookUsingPOST"></a>
# **addWebhookUsingPOST**
> Object addWebhookUsingPOST(id, webhook)

Add webhook to a particular domain

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DomainControllerApi;


DomainControllerApi apiInstance = new DomainControllerApi();
String id = "id_example"; // String | Domain Id
Webhook webhook = new Webhook(); // Webhook | Webhook, whereas only payloadURL required
try {
    Object result = apiInstance.addWebhookUsingPOST(id, webhook);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DomainControllerApi#addWebhookUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Domain Id |
 **webhook** | [**Webhook**](Webhook.md)| Webhook, whereas only payloadURL required |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWebhookUsingDELETE"></a>
# **deleteWebhookUsingDELETE**
> Object deleteWebhookUsingDELETE(id, webhookId)

Delete a particular webhook

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DomainControllerApi;


DomainControllerApi apiInstance = new DomainControllerApi();
String id = "id_example"; // String | Domain Id
String webhookId = "webhookId_example"; // String | Webhook Id
try {
    Object result = apiInstance.deleteWebhookUsingDELETE(id, webhookId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DomainControllerApi#deleteWebhookUsingDELETE");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Domain Id |
 **webhookId** | **String**| Webhook Id |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInsightsUsingGET"></a>
# **getInsightsUsingGET**
> Object getInsightsUsingGET(id, lastNumberOfDays)

Get insights of a particular domain

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DomainControllerApi;


DomainControllerApi apiInstance = new DomainControllerApi();
String id = "id_example"; // String | Domain Id
Integer lastNumberOfDays = 56; // Integer | Last number of days, e.g. last 30 days
try {
    Object result = apiInstance.getInsightsUsingGET(id, lastNumberOfDays);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DomainControllerApi#getInsightsUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Domain Id |
 **lastNumberOfDays** | **Integer**| Last number of days, e.g. last 30 days | [optional]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMembersUsingGET"></a>
# **getMembersUsingGET**
> Object getMembersUsingGET(id)

Get all members of a particular domain

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DomainControllerApi;


DomainControllerApi apiInstance = new DomainControllerApi();
String id = "id_example"; // String | Domain Id
try {
    Object result = apiInstance.getMembersUsingGET(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DomainControllerApi#getMembersUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Domain Id |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWebhookDeliveriesUsingGET"></a>
# **getWebhookDeliveriesUsingGET**
> Object getWebhookDeliveriesUsingGET(id, webhookId)

Get deliveries of a particular webhook

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DomainControllerApi;


DomainControllerApi apiInstance = new DomainControllerApi();
String id = "id_example"; // String | Domain Id
String webhookId = "webhookId_example"; // String | Webhook Id
try {
    Object result = apiInstance.getWebhookDeliveriesUsingGET(id, webhookId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DomainControllerApi#getWebhookDeliveriesUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Domain Id |
 **webhookId** | **String**| Webhook Id |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWebhooksUsingGET"></a>
# **getWebhooksUsingGET**
> Object getWebhooksUsingGET(id)

Get webhooks of a particular domain

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DomainControllerApi;


DomainControllerApi apiInstance = new DomainControllerApi();
String id = "id_example"; // String | Domain Id
try {
    Object result = apiInstance.getWebhooksUsingGET(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DomainControllerApi#getWebhooksUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Domain Id |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="inviteUserUsingPOST"></a>
# **inviteUserUsingPOST**
> Object inviteUserUsingPOST(email, id)

Invite user to a particular domain

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DomainControllerApi;


DomainControllerApi apiInstance = new DomainControllerApi();
String email = "email_example"; // String | Email of invited user
String id = "id_example"; // String | Domain Id
try {
    Object result = apiInstance.inviteUserUsingPOST(email, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DomainControllerApi#inviteUserUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email of invited user |
 **id** | **String**| Domain Id |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reindexUsingGET"></a>
# **reindexUsingGET**
> Object reindexUsingGET(id, impl)

Reindex all QnAs of a particular domain

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DomainControllerApi;


DomainControllerApi apiInstance = new DomainControllerApi();
String id = "id_example"; // String | Domain Id
String impl = "impl_example"; // String | Detect duplicated question implementation
try {
    Object result = apiInstance.reindexUsingGET(id, impl);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DomainControllerApi#reindexUsingGET");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Domain Id |
 **impl** | **String**| Detect duplicated question implementation | [enum: DEEP_PAVLOV, ELASTICSEARCH, MOCK, ONTOLOGY, SBERT_LUCENE, SENTENCE_BERT, UNSET]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="toggleExpertUsingPUT"></a>
# **toggleExpertUsingPUT**
> Object toggleExpertUsingPUT(id, username)

Toggle whether a particular user is an expert

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DomainControllerApi;


DomainControllerApi apiInstance = new DomainControllerApi();
String id = "id_example"; // String | Domain Id
String username = "username_example"; // String | Username
try {
    Object result = apiInstance.toggleExpertUsingPUT(id, username);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DomainControllerApi#toggleExpertUsingPUT");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Domain Id |
 **username** | **String**| Username |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toggleModerationUsingPUT"></a>
# **toggleModerationUsingPUT**
> Object toggleModerationUsingPUT(id)

Toggle whether answers must be approved / moderated

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DomainControllerApi;


DomainControllerApi apiInstance = new DomainControllerApi();
String id = "id_example"; // String | Domain Id
try {
    Object result = apiInstance.toggleModerationUsingPUT(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DomainControllerApi#toggleModerationUsingPUT");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Domain Id |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="toggleModeratorUsingPUT"></a>
# **toggleModeratorUsingPUT**
> Object toggleModeratorUsingPUT(id, username)

Toggle whether a particular user is a moderator

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DomainControllerApi;


DomainControllerApi apiInstance = new DomainControllerApi();
String id = "id_example"; // String | Domain Id
String username = "username_example"; // String | Username
try {
    Object result = apiInstance.toggleModeratorUsingPUT(id, username);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DomainControllerApi#toggleModeratorUsingPUT");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Domain Id |
 **username** | **String**| Username |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateIMAPConfigurationUsingPUT"></a>
# **updateIMAPConfigurationUsingPUT**
> Object updateIMAPConfigurationUsingPUT(id, imapConfig)

Update IMAP configuration

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DomainControllerApi;


DomainControllerApi apiInstance = new DomainControllerApi();
String id = "id_example"; // String | Domain Id
IMAPConfiguration imapConfig = new IMAPConfiguration(); // IMAPConfiguration | IMAP configuration
try {
    Object result = apiInstance.updateIMAPConfigurationUsingPUT(id, imapConfig);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DomainControllerApi#updateIMAPConfigurationUsingPUT");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Domain Id |
 **imapConfig** | [**IMAPConfiguration**](IMAPConfiguration.md)| IMAP configuration |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateMatchReplyToEmailAddressUsingPUT"></a>
# **updateMatchReplyToEmailAddressUsingPUT**
> Object updateMatchReplyToEmailAddressUsingPUT(emails, id)

Update match reply-to email address

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DomainControllerApi;


DomainControllerApi apiInstance = new DomainControllerApi();
MatchReplyToEmails emails = new MatchReplyToEmails(); // MatchReplyToEmails | Match reply-to emails
String id = "id_example"; // String | Domain Id
try {
    Object result = apiInstance.updateMatchReplyToEmailAddressUsingPUT(emails, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DomainControllerApi#updateMatchReplyToEmailAddressUsingPUT");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emails** | [**MatchReplyToEmails**](MatchReplyToEmails.md)| Match reply-to emails |
 **id** | **String**| Domain Id |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

