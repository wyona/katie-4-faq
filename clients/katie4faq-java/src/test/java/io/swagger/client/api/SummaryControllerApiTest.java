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
 * API tests for SummaryControllerApi
 */
@Ignore
public class SummaryControllerApiTest {

    private final SummaryControllerApi api = new SummaryControllerApi();

    
    /**
     * Generate current summary
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getCurrentSummaryUsingGETTest() throws ApiException {
        String domainId = null;
        String language = null;
        String userId = null;
        Object response = api.getCurrentSummaryUsingGET(domainId, language, userId);

        // TODO: test validations
    }
    
}
