/*
 * API
 * Documentation API V1
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * AskQuestionContactInfo
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-08-06T08:37:37.081Z")
public class AskQuestionContactInfo {
  @SerializedName("answerLinkType")
  private String answerLinkType = null;

  @SerializedName("email")
  private String email = null;

  @SerializedName("fcmToken")
  private String fcmToken = null;

  @SerializedName("webhookEchoData")
  private String webhookEchoData = null;

  public AskQuestionContactInfo answerLinkType(String answerLinkType) {
    this.answerLinkType = answerLinkType;
    return this;
  }

   /**
   * Get answerLinkType
   * @return answerLinkType
  **/
  @ApiModelProperty(value = "")
  public String getAnswerLinkType() {
    return answerLinkType;
  }

  public void setAnswerLinkType(String answerLinkType) {
    this.answerLinkType = answerLinkType;
  }

  public AskQuestionContactInfo email(String email) {
    this.email = email;
    return this;
  }

   /**
   * Get email
   * @return email
  **/
  @ApiModelProperty(value = "")
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public AskQuestionContactInfo fcmToken(String fcmToken) {
    this.fcmToken = fcmToken;
    return this;
  }

   /**
   * Get fcmToken
   * @return fcmToken
  **/
  @ApiModelProperty(value = "")
  public String getFcmToken() {
    return fcmToken;
  }

  public void setFcmToken(String fcmToken) {
    this.fcmToken = fcmToken;
  }

  public AskQuestionContactInfo webhookEchoData(String webhookEchoData) {
    this.webhookEchoData = webhookEchoData;
    return this;
  }

   /**
   * Get webhookEchoData
   * @return webhookEchoData
  **/
  @ApiModelProperty(value = "")
  public String getWebhookEchoData() {
    return webhookEchoData;
  }

  public void setWebhookEchoData(String webhookEchoData) {
    this.webhookEchoData = webhookEchoData;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AskQuestionContactInfo askQuestionContactInfo = (AskQuestionContactInfo) o;
    return Objects.equals(this.answerLinkType, askQuestionContactInfo.answerLinkType) &&
        Objects.equals(this.email, askQuestionContactInfo.email) &&
        Objects.equals(this.fcmToken, askQuestionContactInfo.fcmToken) &&
        Objects.equals(this.webhookEchoData, askQuestionContactInfo.webhookEchoData);
  }

  @Override
  public int hashCode() {
    return Objects.hash(answerLinkType, email, fcmToken, webhookEchoData);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AskQuestionContactInfo {\n");
    
    sb.append("    answerLinkType: ").append(toIndentedString(answerLinkType)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    fcmToken: ").append(toIndentedString(fcmToken)).append("\n");
    sb.append("    webhookEchoData: ").append(toIndentedString(webhookEchoData)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

