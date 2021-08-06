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
 * MicrosoftConversation
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-08-06T08:37:37.081Z")
public class MicrosoftConversation {
  @SerializedName("conversationType")
  private String conversationType = null;

  @SerializedName("id")
  private String id = null;

  @SerializedName("name")
  private String name = null;

  public MicrosoftConversation conversationType(String conversationType) {
    this.conversationType = conversationType;
    return this;
  }

   /**
   * Get conversationType
   * @return conversationType
  **/
  @ApiModelProperty(value = "")
  public String getConversationType() {
    return conversationType;
  }

  public void setConversationType(String conversationType) {
    this.conversationType = conversationType;
  }

  public MicrosoftConversation id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(value = "")
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public MicrosoftConversation name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(value = "")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MicrosoftConversation microsoftConversation = (MicrosoftConversation) o;
    return Objects.equals(this.conversationType, microsoftConversation.conversationType) &&
        Objects.equals(this.id, microsoftConversation.id) &&
        Objects.equals(this.name, microsoftConversation.name);
  }

  @Override
  public int hashCode() {
    return Objects.hash(conversationType, id, name);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MicrosoftConversation {\n");
    
    sb.append("    conversationType: ").append(toIndentedString(conversationType)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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

