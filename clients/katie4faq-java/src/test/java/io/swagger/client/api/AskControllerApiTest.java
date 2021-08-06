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


package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.model.AskQuestionBody;
import io.swagger.client.model.Error;
import io.swagger.client.model.ResponseAnswer;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for AskControllerApi
 */
@Ignore
public class AskControllerApiTest {

    private final AskControllerApi api = new AskControllerApi();

    
    /**
     * Ask question and get answer of a previously asked duplicated question. If no answer is available, then the uuid and answer field of the response body will be null.
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getAnswerUsingGETTest() throws ApiException {
        String question = null;
        String answerLinkType = null;
        Object authorization = null;
        String domainId = null;
        String email = null;
        String fcmToken = null;
        String webhookEchoContent = null;
        ResponseAnswer response = api.getAnswerUsingGET(question, answerLinkType, authorization, domainId, email, fcmToken, webhookEchoContent);

        // TODO: test validations
    }
    
    /**
     * Ask question and get answer of a previously asked duplicated question. If no answer is available, then the uuid and answer field of the response body will be null.
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void postQuestionUsingPOSTTest() throws ApiException {
        String domainId = null;
        AskQuestionBody questionAndContactInfo = null;
        Object authorization = null;
        ResponseAnswer response = api.postQuestionUsingPOST(domainId, questionAndContactInfo, authorization);

        // TODO: test validations
    }
    
    /**
     * Submit question (when signed in) to expert
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void submitQuestionToExpertUsingGETTest() throws ApiException {
        String question = null;
        Object authorization = null;
        String domainId = null;
        Object response = api.submitQuestionToExpertUsingGET(question, authorization, domainId);

        // TODO: test validations
    }
    
}