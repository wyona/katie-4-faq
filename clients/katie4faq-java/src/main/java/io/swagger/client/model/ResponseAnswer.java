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
import org.threeten.bp.OffsetDateTime;

/**
 * ResponseAnswer
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-08-06T08:37:37.081Z")
public class ResponseAnswer {
  @SerializedName("answer")
  private String answer = null;

  @SerializedName("answerClientSideEncryptionAlgorithm")
  private String answerClientSideEncryptionAlgorithm = null;

  @SerializedName("dateOriginalQuestion")
  private Long dateOriginalQuestion = null;

  @SerializedName("dateSubmittedQuestion")
  private OffsetDateTime dateSubmittedQuestion = null;

  @SerializedName("email")
  private String email = null;

  @SerializedName("originalQuestion")
  private String originalQuestion = null;

  /**
   * Gets or Sets permissionStatus
   */
  @JsonAdapter(PermissionStatusEnum.Adapter.class)
  public enum PermissionStatusEnum {
    IS_PUBLIC("IS_PUBLIC"),
    
    MEMBER_AUTHORIZED_TO_READ_ANSWER("MEMBER_AUTHORIZED_TO_READ_ANSWER"),
    
    NOT_SUFFICIENT_PERMISSIONS_TO_READ_ANSWER("NOT_SUFFICIENT_PERMISSIONS_TO_READ_ANSWER"),
    
    PERMISSION_DENIED("PERMISSION_DENIED"),
    
    UNKNOWN("UNKNOWN"),
    
    USER_AUTHORIZED_TO_READ_ANSWER("USER_AUTHORIZED_TO_READ_ANSWER");

    private String value;

    PermissionStatusEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static PermissionStatusEnum fromValue(String text) {
      for (PermissionStatusEnum b : PermissionStatusEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<PermissionStatusEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final PermissionStatusEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public PermissionStatusEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return PermissionStatusEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("permissionStatus")
  private PermissionStatusEnum permissionStatus = null;

  @SerializedName("submittedQuestion")
  private String submittedQuestion = null;

  @SerializedName("uuid")
  private String uuid = null;

  public ResponseAnswer answer(String answer) {
    this.answer = answer;
    return this;
  }

   /**
   * Get answer
   * @return answer
  **/
  @ApiModelProperty(value = "")
  public String getAnswer() {
    return answer;
  }

  public void setAnswer(String answer) {
    this.answer = answer;
  }

  public ResponseAnswer answerClientSideEncryptionAlgorithm(String answerClientSideEncryptionAlgorithm) {
    this.answerClientSideEncryptionAlgorithm = answerClientSideEncryptionAlgorithm;
    return this;
  }

   /**
   * Get answerClientSideEncryptionAlgorithm
   * @return answerClientSideEncryptionAlgorithm
  **/
  @ApiModelProperty(value = "")
  public String getAnswerClientSideEncryptionAlgorithm() {
    return answerClientSideEncryptionAlgorithm;
  }

  public void setAnswerClientSideEncryptionAlgorithm(String answerClientSideEncryptionAlgorithm) {
    this.answerClientSideEncryptionAlgorithm = answerClientSideEncryptionAlgorithm;
  }

  public ResponseAnswer dateOriginalQuestion(Long dateOriginalQuestion) {
    this.dateOriginalQuestion = dateOriginalQuestion;
    return this;
  }

   /**
   * Get dateOriginalQuestion
   * @return dateOriginalQuestion
  **/
  @ApiModelProperty(value = "")
  public Long getDateOriginalQuestion() {
    return dateOriginalQuestion;
  }

  public void setDateOriginalQuestion(Long dateOriginalQuestion) {
    this.dateOriginalQuestion = dateOriginalQuestion;
  }

  public ResponseAnswer dateSubmittedQuestion(OffsetDateTime dateSubmittedQuestion) {
    this.dateSubmittedQuestion = dateSubmittedQuestion;
    return this;
  }

   /**
   * Get dateSubmittedQuestion
   * @return dateSubmittedQuestion
  **/
  @ApiModelProperty(value = "")
  public OffsetDateTime getDateSubmittedQuestion() {
    return dateSubmittedQuestion;
  }

  public void setDateSubmittedQuestion(OffsetDateTime dateSubmittedQuestion) {
    this.dateSubmittedQuestion = dateSubmittedQuestion;
  }

  public ResponseAnswer email(String email) {
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

  public ResponseAnswer originalQuestion(String originalQuestion) {
    this.originalQuestion = originalQuestion;
    return this;
  }

   /**
   * Get originalQuestion
   * @return originalQuestion
  **/
  @ApiModelProperty(value = "")
  public String getOriginalQuestion() {
    return originalQuestion;
  }

  public void setOriginalQuestion(String originalQuestion) {
    this.originalQuestion = originalQuestion;
  }

  public ResponseAnswer permissionStatus(PermissionStatusEnum permissionStatus) {
    this.permissionStatus = permissionStatus;
    return this;
  }

   /**
   * Get permissionStatus
   * @return permissionStatus
  **/
  @ApiModelProperty(value = "")
  public PermissionStatusEnum getPermissionStatus() {
    return permissionStatus;
  }

  public void setPermissionStatus(PermissionStatusEnum permissionStatus) {
    this.permissionStatus = permissionStatus;
  }

  public ResponseAnswer submittedQuestion(String submittedQuestion) {
    this.submittedQuestion = submittedQuestion;
    return this;
  }

   /**
   * Get submittedQuestion
   * @return submittedQuestion
  **/
  @ApiModelProperty(value = "")
  public String getSubmittedQuestion() {
    return submittedQuestion;
  }

  public void setSubmittedQuestion(String submittedQuestion) {
    this.submittedQuestion = submittedQuestion;
  }

  public ResponseAnswer uuid(String uuid) {
    this.uuid = uuid;
    return this;
  }

   /**
   * Get uuid
   * @return uuid
  **/
  @ApiModelProperty(value = "")
  public String getUuid() {
    return uuid;
  }

  public void setUuid(String uuid) {
    this.uuid = uuid;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ResponseAnswer responseAnswer = (ResponseAnswer) o;
    return Objects.equals(this.answer, responseAnswer.answer) &&
        Objects.equals(this.answerClientSideEncryptionAlgorithm, responseAnswer.answerClientSideEncryptionAlgorithm) &&
        Objects.equals(this.dateOriginalQuestion, responseAnswer.dateOriginalQuestion) &&
        Objects.equals(this.dateSubmittedQuestion, responseAnswer.dateSubmittedQuestion) &&
        Objects.equals(this.email, responseAnswer.email) &&
        Objects.equals(this.originalQuestion, responseAnswer.originalQuestion) &&
        Objects.equals(this.permissionStatus, responseAnswer.permissionStatus) &&
        Objects.equals(this.submittedQuestion, responseAnswer.submittedQuestion) &&
        Objects.equals(this.uuid, responseAnswer.uuid);
  }

  @Override
  public int hashCode() {
    return Objects.hash(answer, answerClientSideEncryptionAlgorithm, dateOriginalQuestion, dateSubmittedQuestion, email, originalQuestion, permissionStatus, submittedQuestion, uuid);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ResponseAnswer {\n");
    
    sb.append("    answer: ").append(toIndentedString(answer)).append("\n");
    sb.append("    answerClientSideEncryptionAlgorithm: ").append(toIndentedString(answerClientSideEncryptionAlgorithm)).append("\n");
    sb.append("    dateOriginalQuestion: ").append(toIndentedString(dateOriginalQuestion)).append("\n");
    sb.append("    dateSubmittedQuestion: ").append(toIndentedString(dateSubmittedQuestion)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    originalQuestion: ").append(toIndentedString(originalQuestion)).append("\n");
    sb.append("    permissionStatus: ").append(toIndentedString(permissionStatus)).append("\n");
    sb.append("    submittedQuestion: ").append(toIndentedString(submittedQuestion)).append("\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
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

