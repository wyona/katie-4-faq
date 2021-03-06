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
import io.swagger.client.model.Answer;
import io.swagger.client.model.Question;
import io.swagger.client.model.ResubmittedQuestion;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for QuestionControllerApi
 */
@Ignore
public class QuestionControllerApiTest {

    private final QuestionControllerApi api = new QuestionControllerApi();

    
    /**
     * Add/train a new QnA
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void addQuestionAndAnswerUsingPOSTTest() throws ApiException {
        String domainid = null;
        Answer newQnA = null;
        Object authorization = null;
        Object response = api.addQuestionAndAnswerUsingPOST(domainid, newQnA, authorization);

        // TODO: test validations
    }
    
    /**
     * Answer a particular resubmitted question
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void answerResubmittedQuestionUsingPUTTest() throws ApiException {
        ResubmittedQuestion answeredQuestion = null;
        String uuid = null;
        Object response = api.answerResubmittedQuestionUsingPUT(answeredQuestion, uuid);

        // TODO: test validations
    }
    
    /**
     * Delete a particular resubmitted question
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteResubmittedQuestionUsingDELETETest() throws ApiException {
        String uuid = null;
        Object response = api.deleteResubmittedQuestionUsingDELETE(uuid);

        // TODO: test validations
    }
    
    /**
     * Delete a particular trained QnA
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteTrainedQnAUsingDELETETest() throws ApiException {
        String domainid = null;
        String uuid = null;
        Object response = api.deleteTrainedQnAUsingDELETE(domainid, uuid);

        // TODO: test validations
    }
    
    /**
     * Get answer to resubmitted question
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRepliedAnswerUsingGETTest() throws ApiException {
        String domainid = null;
        String uuid = null;
        Object response = api.getRepliedAnswerUsingGET(domainid, uuid);

        // TODO: test validations
    }
    
    /**
     * Get a particular resubmitted question
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getResubmittedQuestionUsingGETTest() throws ApiException {
        String uuid = null;
        Object response = api.getResubmittedQuestionUsingGET(uuid);

        // TODO: test validations
    }
    
    /**
     * Get a particular trained question/answer
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getTrainedQuestionAnswerUsingGETTest() throws ApiException {
        String domainid = null;
        String uuid = null;
        Object authorization = null;
        Object response = api.getTrainedQuestionAnswerUsingGET(domainid, uuid, authorization);

        // TODO: test validations
    }
    
    /**
     * Rate replied answer of resubmitted question
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void rateRepliedAnswerUsingGETTest() throws ApiException {
        String domainid = null;
        String rating = null;
        String uuid = null;
        Object response = api.rateRepliedAnswerUsingGET(domainid, rating, uuid);

        // TODO: test validations
    }
    
    /**
     * Send answer back to user which resubmitted question
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void sendAnswerToUserWhichResubmittedQuestionUsingGETTest() throws ApiException {
        String uuid = null;
        Object response = api.sendAnswerToUserWhichResubmittedQuestionUsingGET(uuid);

        // TODO: test validations
    }
    
    /**
     * Trigger training of AI service with resubmitted question and associated answer
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void trainAIWithResubmittedQuestionAndAssociatedAnswerUsingGETTest() throws ApiException {
        String uuid = null;
        Object response = api.trainAIWithResubmittedQuestionAndAssociatedAnswerUsingGET(uuid);

        // TODO: test validations
    }
    
    /**
     * Update question of a particular resubmitted question, for example when question contains typos
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateQuestionOfResubmittedQuestionUsingPUTTest() throws ApiException {
        ResubmittedQuestion question = null;
        String uuid = null;
        Object response = api.updateQuestionOfResubmittedQuestionUsingPUT(question, uuid);

        // TODO: test validations
    }
    
    /**
     * Update a particular trained question/answer
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateTrainedAnswerUsingPUTTest() throws ApiException {
        String domainid = null;
        Answer updatedAnswer = null;
        String uuid = null;
        Object response = api.updateTrainedAnswerUsingPUT(domainid, updatedAnswer, uuid);

        // TODO: test validations
    }
    
    /**
     * Update question of a particular trained QnA
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateTrainedQuestionUsingPATCHTest() throws ApiException {
        String domainid = null;
        Question question = null;
        String uuid = null;
        Object response = api.updateTrainedQuestionUsingPATCH(domainid, question, uuid);

        // TODO: test validations
    }
    
}
