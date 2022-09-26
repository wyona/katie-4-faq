// Katie "Ask our experts ..."

/**
 *
 */
var apiBaseURL = "https://ukatie.com/api";
//var apiBaseURL = "http://localhost:7070/api";

/**
 * @param required If true, then privacy policy needs to be accepted, otherwise checkbox re privacy policy is hidden
 * @param language Language of FAQ
 * @param urlDE Link to german version of privacy policy
 * @param textDE German hint re privacy policy
 * @param urlEN Link to english version of privacy policy
 * @param textEN English hint re privacy policy
 */
function katie_setPrivacyPolicy(required, language, urlDE, textDE, urlEN, textEN) {
  if (required) {
    //alert("DEBUG: Set privacy policy for language '" + language + "' ...");
    console.info("Set privacy policy for language '" + language + "' ...");
    if (language == "de") {
      document.getElementById("privacy_policy_link_text").innerHTML = textDE;
      document.getElementById("privacy_policy_link_text").setAttribute("href", urlDE);
    } else {
      document.getElementById("privacy_policy_link_text").innerHTML = textEN;
      document.getElementById("privacy_policy_link_text").setAttribute("href", urlEN);
    }
    document.getElementById("katie_privacy-policy").classList.toggle('katie_show-privacy-policy');
  } else {
    //alert("DEBUG: Keep privacy policy hidden ...");
  }
}

/**
 *
 */
function katie_toggleSendQuestionToExpert() {
  //alert("DEBUG: Toggle overlay to send question to expert ...");
  document.getElementById("katie_send_to_expert").classList.toggle('katie_open-overlay');
}

/**
 * Get user email from local storage and insert into input field
 */
function katie_getEmailFromLocalStorage() {
  const LOCAL_STORAGE_ITEM_ID=domainId;
  const storageData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM_ID));
  if (storageData != null && rememberEmail) {
    document.getElementById("katie_user_email").value = storageData.email;
  }
}

/**
 * Add user email to local storage
 */
function addEmailToLocalStorage(email) {
  const LOCAL_STORAGE_ITEM_ID=domainId;
  localStorage.setItem(LOCAL_STORAGE_ITEM_ID, JSON.stringify({email}));
}

/**
 * Send question to expert
 */
function katie_sendQuestionToExpert(language, acceptPrivacyPolicyRequired) {
  //document.getElementById("katie_send_to_expert").classList.toggle('katie_open-overlay');

  var question = document.getElementById("katie_question").value;
  var email = document.getElementById("katie_user_email").value;

  if (email == null || email.length == 0) {
    if (language == "de") {
      alert("WARNUNG: Bitte geben Sie eine gültige E-Mail Adresse ein!");
    } else {
      alert("WARNING: Please enter a valid email address!");
    }
    return;
  }

  if (acceptPrivacyPolicyRequired) {
    var accepted = document.getElementById("privacy_policy_checkbox").checked;
    //alert("DEBUG: Privacy policy accepted: " + accepted);
    if (!accepted) {
      if (language == "de") {
        alert("WARNUNG: Bitte lesen und akzeptieren Sie die Datenschutzrichtlinie!");
      } else {
        alert("WARNING: Please read and accept the privacy statement!");
      }
      return;
    } else {
      console.info("User has accepted privacy policy.");
    }
  }

  //alert("DEBUG: Send question '" + question + "' and email address of user '" + email + "' to expert ...");




  try {
    fetch(apiBaseURL + "/v1/ask?domainId=" + domainId + "&email=" + email + "&questionerLanguage=" + language + "&question=" + question).then(function(response) {
      return response.json();
    }).then(function(json) {
      let answer = json;
      console.info(answer);
      if (answer.email != null) {
        addEmailToLocalStorage(answer.email);
        
        if (language == "de") {
          document.getElementById("katie_answer").innerHTML = "Vielen Dank, dass Sie Ihre Frage eingereicht haben! Wir probieren Ihre Frage <strong>'" + question + "'</strong> so schnell wie möglich zu beantworten und werden Ihnen eine E-Mail schicken an <strong>'" + email + "'</strong>.";
        } else {
          document.getElementById("katie_answer").innerHTML = "Thanks for resubmitting your question! We will try to answer your question <strong>'" + question + "'</strong> as soon as possible and will send you an email to <strong>'" + email + "'</strong>.";
        }
      } else {
        document.getElementById("katie_answer").innerHTML = "WARNING: Something went wrong while sending question to expert!";
      }
    });
  } catch(e) {
    console.info(e);
  }
}

/**
 * Get user email
 */
function katie_getEmail() {
  try {
    fetch(apiBaseURL + "/v1/auth/email").then(function(response) {
      return response.json();
    }).then(function(json) {
      let email = json;
      console.info(email);
    });
  } catch(e) {
    console.info(e);
  }
}

/**
 * @param srcElementId Source element Id, e.g. "chevron_597178eb-112a-40c0-893d-b643a4f08447" or "question_text_597178eb-112a-40c0-893d-b643a4f08447"
 * @return actual id, e.g. "597178eb-112a-40c0-893d-b643a4f08447"
 */
function getUuid(srcElementId) {
  //alert("DEBUG: Source element id: " + srcElementId);
  if (srcElementId.startsWith("chevron_")) {
    return srcElementId.substring(8);
  } else if (srcElementId.startsWith("question_text_")) {
    return srcElementId.substring(14);
  } else if (srcElementId.startsWith("question_")) {
    return srcElementId.substring(9);
  } else {
    alert("ERROR: Prefix of source element id not supported: " + srcElementId);
    return srcElementId;
  }
}
