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
 * API tests for MatrixControllerApi
 */
@Ignore
public class MatrixControllerApiTest {

    private final MatrixControllerApi api = new MatrixControllerApi();

    
    /**
     * Synchronise Katie&#39;s state with the latest state on the Matrix homeserver
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void syncUsingGETTest() throws ApiException {
        Object response = api.syncUsingGET();

        // TODO: test validations
    }
    
}
