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
 * User
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-08-06T08:37:37.081Z")
public class User {
  @SerializedName("email")
  private String email = null;

  @SerializedName("firstname")
  private String firstname = null;

  @SerializedName("id")
  private String id = null;

  @SerializedName("isExpert")
  private Boolean isExpert = null;

  @SerializedName("isModerator")
  private Boolean isModerator = null;

  @SerializedName("jwtToken")
  private String jwtToken = null;

  @SerializedName("lastname")
  private String lastname = null;

  @SerializedName("password")
  private String password = null;

  @SerializedName("passwordEncoding")
  private String passwordEncoding = null;

  /**
   * Gets or Sets role
   */
  @JsonAdapter(RoleEnum.Adapter.class)
  public enum RoleEnum {
    ADMIN("ADMIN"),
    
    USER("USER");

    private String value;

    RoleEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static RoleEnum fromValue(String text) {
      for (RoleEnum b : RoleEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<RoleEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final RoleEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public RoleEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return RoleEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("role")
  private RoleEnum role = null;

  @SerializedName("username")
  private String username = null;

  public User email(String email) {
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

  public User firstname(String firstname) {
    this.firstname = firstname;
    return this;
  }

   /**
   * Get firstname
   * @return firstname
  **/
  @ApiModelProperty(value = "")
  public String getFirstname() {
    return firstname;
  }

  public void setFirstname(String firstname) {
    this.firstname = firstname;
  }

  public User id(String id) {
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

  public User isExpert(Boolean isExpert) {
    this.isExpert = isExpert;
    return this;
  }

   /**
   * Get isExpert
   * @return isExpert
  **/
  @ApiModelProperty(value = "")
  public Boolean isIsExpert() {
    return isExpert;
  }

  public void setIsExpert(Boolean isExpert) {
    this.isExpert = isExpert;
  }

  public User isModerator(Boolean isModerator) {
    this.isModerator = isModerator;
    return this;
  }

   /**
   * Get isModerator
   * @return isModerator
  **/
  @ApiModelProperty(value = "")
  public Boolean isIsModerator() {
    return isModerator;
  }

  public void setIsModerator(Boolean isModerator) {
    this.isModerator = isModerator;
  }

  public User jwtToken(String jwtToken) {
    this.jwtToken = jwtToken;
    return this;
  }

   /**
   * Get jwtToken
   * @return jwtToken
  **/
  @ApiModelProperty(value = "")
  public String getJwtToken() {
    return jwtToken;
  }

  public void setJwtToken(String jwtToken) {
    this.jwtToken = jwtToken;
  }

  public User lastname(String lastname) {
    this.lastname = lastname;
    return this;
  }

   /**
   * Get lastname
   * @return lastname
  **/
  @ApiModelProperty(value = "")
  public String getLastname() {
    return lastname;
  }

  public void setLastname(String lastname) {
    this.lastname = lastname;
  }

  public User password(String password) {
    this.password = password;
    return this;
  }

   /**
   * Get password
   * @return password
  **/
  @ApiModelProperty(value = "")
  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public User passwordEncoding(String passwordEncoding) {
    this.passwordEncoding = passwordEncoding;
    return this;
  }

   /**
   * Get passwordEncoding
   * @return passwordEncoding
  **/
  @ApiModelProperty(value = "")
  public String getPasswordEncoding() {
    return passwordEncoding;
  }

  public void setPasswordEncoding(String passwordEncoding) {
    this.passwordEncoding = passwordEncoding;
  }

  public User role(RoleEnum role) {
    this.role = role;
    return this;
  }

   /**
   * Get role
   * @return role
  **/
  @ApiModelProperty(value = "")
  public RoleEnum getRole() {
    return role;
  }

  public void setRole(RoleEnum role) {
    this.role = role;
  }

  public User username(String username) {
    this.username = username;
    return this;
  }

   /**
   * Get username
   * @return username
  **/
  @ApiModelProperty(value = "")
  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    User user = (User) o;
    return Objects.equals(this.email, user.email) &&
        Objects.equals(this.firstname, user.firstname) &&
        Objects.equals(this.id, user.id) &&
        Objects.equals(this.isExpert, user.isExpert) &&
        Objects.equals(this.isModerator, user.isModerator) &&
        Objects.equals(this.jwtToken, user.jwtToken) &&
        Objects.equals(this.lastname, user.lastname) &&
        Objects.equals(this.password, user.password) &&
        Objects.equals(this.passwordEncoding, user.passwordEncoding) &&
        Objects.equals(this.role, user.role) &&
        Objects.equals(this.username, user.username);
  }

  @Override
  public int hashCode() {
    return Objects.hash(email, firstname, id, isExpert, isModerator, jwtToken, lastname, password, passwordEncoding, role, username);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class User {\n");
    
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    firstname: ").append(toIndentedString(firstname)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    isExpert: ").append(toIndentedString(isExpert)).append("\n");
    sb.append("    isModerator: ").append(toIndentedString(isModerator)).append("\n");
    sb.append("    jwtToken: ").append(toIndentedString(jwtToken)).append("\n");
    sb.append("    lastname: ").append(toIndentedString(lastname)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    passwordEncoding: ").append(toIndentedString(passwordEncoding)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
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

