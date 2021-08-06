
# ResponseAnswer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | **String** |  |  [optional]
**answerClientSideEncryptionAlgorithm** | **String** |  |  [optional]
**dateOriginalQuestion** | **Long** |  |  [optional]
**dateSubmittedQuestion** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**email** | **String** |  |  [optional]
**originalQuestion** | **String** |  |  [optional]
**permissionStatus** | [**PermissionStatusEnum**](#PermissionStatusEnum) |  |  [optional]
**submittedQuestion** | **String** |  |  [optional]
**uuid** | **String** |  |  [optional]


<a name="PermissionStatusEnum"></a>
## Enum: PermissionStatusEnum
Name | Value
---- | -----
IS_PUBLIC | &quot;IS_PUBLIC&quot;
MEMBER_AUTHORIZED_TO_READ_ANSWER | &quot;MEMBER_AUTHORIZED_TO_READ_ANSWER&quot;
NOT_SUFFICIENT_PERMISSIONS_TO_READ_ANSWER | &quot;NOT_SUFFICIENT_PERMISSIONS_TO_READ_ANSWER&quot;
PERMISSION_DENIED | &quot;PERMISSION_DENIED&quot;
UNKNOWN | &quot;UNKNOWN&quot;
USER_AUTHORIZED_TO_READ_ANSWER | &quot;USER_AUTHORIZED_TO_READ_ANSWER&quot;



