// Katie4FAQ

/**
 *
 */
var apiBaseURL = "https://ukatie.com/api";
//var apiBaseURL = "http://localhost:8080/api";

/**
 * Get answer from Katie and add to DOM
 * @param question Question asked by user
 * @param domainId Domain Id of Katie containing knowledge base
 */
function katie_askQuestion(question, domainId) {
   //alert("DEBUG: Submit question to Katie: " + question);
   if (question != null && question.length > 0) {
     fetchAnswer(question, domainId);
   } else {
        document.getElementById("katie_answer").innerHTML = "Please enter a question.";
   }
}

/**
 * Get answer from Katie and add to DOM
 */
async function fetchAnswer(question, domainId) {
  try {
    fetch(apiBaseURL + "/v1/ask?domainId=" + domainId + "&question=" + question).then(function(response) {
      return response.json();
    }).then(function(json) {
      let answer = json;
      console.info(answer);
      if (answer.answer != null) {
        document.getElementById("katie_answer").innerHTML = answer.answer + "<div id='katie_answer_not_helpful'>Answer not helpful? <button class='katie-text-button' onclick='katie_toggleSendQuestionToExpert()'>Send question to expert ...</button></div>";
      } else {
        document.getElementById("katie_answer").innerHTML = "No answer available. <button class='katie-text-button' onclick='katie_toggleSendQuestionToExpert()'>Send question to expert ...</button>";
      }
    });
  } catch(e) {
    console.info(e);
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
 *
 */
function katie_sendQuestionToExpert() {
  document.getElementById("katie_send_to_expert").classList.toggle('katie_open-overlay');

  var question = document.getElementById("katie_question").value;
  var email = document.getElementById("katie_user_email").value;
  //alert("DEBUG: Send question '" + question + "' and email address of user '" + email + "' to expert ...");

  try {
    fetch(apiBaseURL + "/v1/ask?domainId=" + domainId + "&email=" + email + "&question=" + question).then(function(response) {
      return response.json();
    }).then(function(json) {
      let answer = json;
      console.info(answer);
      if (answer.email != null) {
        document.getElementById("katie_answer").innerHTML = "Thanks for resubmitting your question! We will try to answer your question <strong>'" + question + "'</strong> as soon as possible and will send you an email to <strong>'" + email + "'</strong>.";
      } else {
        document.getElementById("katie_answer").innerHTML = "TODO: Something went wrong!";
      }
    });
  } catch(e) {
    console.info(e);
  }
}

/**
 * Get FAQ from Katie and add to DOM
 * @param domainId Id of your domain at Katie, e.g. "c9af3861-68nc-4872-z374-4bm12f3d4df7"
 * @param language Language of FAQs, e.g. "en" or "de"
 */
function katie_getFAQ(domainId, language) {
   //alert("DEBUG: Get FAQ for domain Id '" + domainId + "' and language '" + language + "' ...");
   fetchFAQ(domainId, language);
}

/**
 * Get FAQ from Katie and add to DOM
 */
async function fetchFAQ(domainId, language) {
  try {
    fetch(apiBaseURL + "/v2/faq?context=" + domainId + "&language=" + language + "&uuid-only=false").then(function(response) {
      return response.json();
    }).then(function(json) {
      let topics = json;
      //console.info(typeof topics); // INFO: json is already an object and does not need to be parsed
      console.info(topics);

      for (topic of topics) {
        //console.info("Topic: " + topic.title);

        var newTopic = document.createElement("div");
        newTopic.setAttribute("class", "katie_topic");
        document.getElementById("katie_faq").appendChild(newTopic);

        var newTopicTitle = document.createElement("h2");
        newTopicTitle.innerHTML = topic.title;
        newTopic.appendChild(newTopicTitle);

        for (qna of topic.questions) {
          //console.info("QnA: " + qna.question);

          var newQnA = document.createElement("div");
          newQnA.setAttribute("id", "qna_" + qna.uuid);
          newQnA.setAttribute("class", "katie_qna");
          newTopic.appendChild(newQnA);

          var newQuestion = document.createElement("div");
          newQuestion.setAttribute("id", "question_" + qna.uuid);
          newQuestion.setAttribute("class", "katie_question");
          newQuestion.addEventListener("click", function(){toggleAnswer();});
          newQnA.appendChild(newQuestion);

          var newQuestionText = document.createElement("span");
          newQuestionText.setAttribute("id", "question_text_" + qna.uuid);
          newQuestionText.setAttribute("class", "katie_question_text");
          newQuestionText.innerHTML = qna.question;
          newQuestion.appendChild(newQuestionText);

          var newChevron = document.createElement("span");
          newChevron.setAttribute("id", "chevron_" + qna.uuid);
          newChevron.setAttribute("class", "katie_chevron_down");
          newChevron.innerHTML = "&#160;&#160;&#160;&#160;&#160;&#160;";
          newQuestion.appendChild(newChevron);

          var newAnswer = document.createElement("div");
          newAnswer.setAttribute("id", "answer_" + qna.uuid);
          newAnswer.setAttribute("class", "katie_answer_collapsed");
          newAnswer.innerHTML = qna.answer;
          newQnA.appendChild(newAnswer);
        }
      }
    });
  } catch(e) {
    console.info(e);
  }
}

/**
 * Toggle answer from collapsed to expanded and the other way around
 */
function toggleAnswer() {
  var uuid = getUuid(event.srcElement.id);
  //alert("DEBUG: Toggle answer with QnA id: " + uuid);

  if (this.document.getElementById("answer_" + uuid).classList.contains("katie_answer_collapsed")) {
      this.document.getElementById("chevron_" + uuid).classList.remove('katie_chevron_down');
      this.document.getElementById("chevron_" + uuid).classList.add('katie_chevron_up');

      this.document.getElementById("answer_" + uuid).classList.remove('katie_answer_collapsed');
      this.document.getElementById("answer_" + uuid).classList.add('katie_answer_expanded');
  } else {
      this.document.getElementById("chevron_" + uuid).classList.remove('katie_chevron_up');
      this.document.getElementById("chevron_" + uuid).classList.add('katie_chevron_down');

      this.document.getElementById("answer_" + uuid).classList.remove('katie_answer_expanded');
      this.document.getElementById("answer_" + uuid).classList.add('katie_answer_collapsed');
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
