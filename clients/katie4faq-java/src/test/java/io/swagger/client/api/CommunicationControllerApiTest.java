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
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for CommunicationControllerApi
 */
@Ignore
public class CommunicationControllerApiTest {

    private final CommunicationControllerApi api = new CommunicationControllerApi();

    
    /**
     * Process new emails associated with a particular Katie domain
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void processEmailsUsingGETTest() throws ApiException {
        String domain = null;
        Object response = api.processEmailsUsingGET(domain);

        // TODO: test validations
    }
    
}