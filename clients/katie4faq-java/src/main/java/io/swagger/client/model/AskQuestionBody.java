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
import io.swagger.client.model.AskQuestionContactInfo;
import java.io.IOException;

/**
 * AskQuestionBody
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-08-06T08:37:37.081Z")
public class AskQuestionBody {
  @SerializedName("optionalContactInfo")
  private AskQuestionContactInfo optionalContactInfo = null;

  @SerializedName("question")
  private String question = null;

  public AskQuestionBody optionalContactInfo(AskQuestionContactInfo optionalContactInfo) {
    this.optionalContactInfo = optionalContactInfo;
    return this;
  }

   /**
   * Get optionalContactInfo
   * @return optionalContactInfo
  **/
  @ApiModelProperty(value = "")
  public AskQuestionContactInfo getOptionalContactInfo() {
    return optionalContactInfo;
  }

  public void setOptionalContactInfo(AskQuestionContactInfo optionalContactInfo) {
    this.optionalContactInfo = optionalContactInfo;
  }

  public AskQuestionBody question(String question) {
    this.question = question;
    return this;
  }

   /**
   * Get question
   * @return question
  **/
  @ApiModelProperty(value = "")
  public String getQuestion() {
    return question;
  }

  public void setQuestion(String question) {
    this.question = question;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AskQuestionBody askQuestionBody = (AskQuestionBody) o;
    return Objects.equals(this.optionalContactInfo, askQuestionBody.optionalContactInfo) &&
        Objects.equals(this.question, askQuestionBody.question);
  }

  @Override
  public int hashCode() {
    return Objects.hash(optionalContactInfo, question);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AskQuestionBody {\n");
    
    sb.append("    optionalContactInfo: ").append(toIndentedString(optionalContactInfo)).append("\n");
    sb.append("    question: ").append(toIndentedString(question)).append("\n");
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

