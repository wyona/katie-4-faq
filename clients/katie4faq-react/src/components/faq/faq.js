import styles from "./faq.module.css"
import React from "react";

/**
 *
 */
export default class Faq extends React.Component {

apiBaseURL = "https://ukatie.com/api";

domainId = "c9af3861-68cc-4872-b966-4bd19f3d4df7";
language = "de";
//domainId = "ROOT";
//language = "en";

/**
 *
 */
constructor(props) {
  super(props);

  this.state = {
    topics: [],
    loadingFAQ: true,
    query: ''
  };

  this.handleChange = this.handleChange.bind(this);
  this.keyPress = this.keyPress.bind(this);
}

/**
 *
 */
componentWillMount() {
  this.fetchFAQ();
}

/**
 *
 */
handleChange(event) {
  this.setState({query: event.target.value});
  //console.info("Handle change: " + event.target.value);
}

/**
 *
 */
keyPress(event){
  if(event.keyCode === 13){
    this.setState({query: event.target.value});
    this.fetchAnswer();
  }
}

/**
 *
 */
async fetchAnswer() {
    var question = this.state.query;
    console.info("Query: " + question);
    if (question != null && question.length > 0) {
      console.info("Get answer to question '" + question + "' ...");
    } else {
      alert("Bitte geben Sie eine Frage ein.");
      return;
    }
    var url = this.apiBaseURL + "/v1/ask?domainId=" + this.domainId + "&question=" + question;
    console.info("Get answer " + url + " ...");
    const response = await fetch(url);
    const jsonData = await response.json();
    console.info(jsonData);
    if (jsonData.answer != null) {
      document.getElementById("katie_answer").innerHTML = jsonData.answer;

      if (!document.getElementById("katie_no_answer_available").classList.contains("katie_no_answer_available--close")) {
        document.getElementById("katie_no_answer_available").classList.toggle("katie_no_answer_available--close");
      }

      if (document.getElementById("katie_answer_not_helpful").classList.contains("katie_answer_not_helpful--close")) {
        document.getElementById("katie_answer_not_helpful").classList.toggle("katie_answer_not_helpful--close");
      }
    } else {
      console.info("No Answer available.");
      document.getElementById("katie_answer").innerHTML = "";

      if (document.getElementById("katie_no_answer_available").classList.contains("katie_no_answer_available--close")) {
        document.getElementById("katie_no_answer_available").classList.toggle("katie_no_answer_available--close");
      }

      if (!document.getElementById("katie_answer_not_helpful").classList.contains("katie_answer_not_helpful--close")) {
        document.getElementById("katie_answer_not_helpful").classList.toggle("katie_answer_not_helpful--close");
      }
    }
}

/**
 * Get FAQ data from Katie
 */
fetchFAQ = async () => {
    var url = this.apiBaseURL + "/v2/faq?context=" + this.domainId + "&language=" + this.language + "&uuid-only=false";
    console.info("Loading FAQ from " + url + " ...");
    fetch(url)
      .then(response => response.json())
      .then(jsonData => {

    this.setState({topics:jsonData, loadingFAQ:false});

    console.info("Loading FAQ: " + this.state.loadingFAQ);
    console.info(typeof this.state.topics); // INFO: json is already an object and does not need to be parsed
    console.info(this.state.topics.length + " FAQ topics have been loaded.");
    console.info(this.state.topics);
    })
    .catch(error => {
      console.info("Error: " + error);
    });
}

/**
 * Toggle answer from collapsed to expanded and the other way around
 */
toggleAnswer(uuid) {
  //alert("DEBUG: Toggle answer with QnA id: " + uuid);

  if (document.getElementById("answer_" + uuid).classList.contains("katie_answer_collapsed")) {
      document.getElementById("chevron_" + uuid).classList.remove('katie_chevron_down');
      document.getElementById("chevron_" + uuid).classList.add('katie_chevron_up');

      document.getElementById("answer_" + uuid).classList.remove('katie_answer_collapsed');
      document.getElementById("answer_" + uuid).classList.add('katie_answer_expanded');
  } else {
      document.getElementById("chevron_" + uuid).classList.remove('katie_chevron_up');
      document.getElementById("chevron_" + uuid).classList.add('katie_chevron_down');

      document.getElementById("answer_" + uuid).classList.remove('katie_answer_expanded');
      document.getElementById("answer_" + uuid).classList.add('katie_answer_collapsed');
  }
}

/**
 * @param srcElementId Source element Id, e.g. "chevron_597178eb-112a-40c0-893d-b643a4f08447" or "question_text_597178eb-112a-40c0-893d-b643a4f08447"
 * @return actual id, e.g. "597178eb-112a-40c0-893d-b643a4f08447"
 */
getUuid(srcElementId) {
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

/**
 *
 */
katie_toggleSendQuestionToExpert() {
  //alert("DEBUG: Toggle overlay to send question to expert ...");
  document.getElementById("katie_send_to_expert").classList.toggle('katie_open-overlay');
}

/**
 *
 */
katie_sendQuestionToExpert() {
  document.getElementById("katie_send_to_expert").classList.toggle('katie_open-overlay');

  var question = document.getElementById("katie_question").value;
  var email = document.getElementById("katie_user_email").value;
  if (question != null && question.length > 0 && email != null && email.length > 0) {
    console.info("Send question '" + question + "' and email address of user '" + email + "' to expert ...");
  } else {
    alert("Bitte stellen Sie sicher, dass Sie eine Frage und eine gültige E-Mail-Adresse eingegeben haben.");
    return;
  }

  try {
    fetch(this.apiBaseURL + "/v1/ask?domainId=" + this.domainId + "&email=" + email + "&question=" + question).then(function(response) {
      return response.json();
    }).then(function(json) {
      let answer = json;
      console.info(answer);
      if (answer.email != null) {
        if (!document.getElementById("katie_no_answer_available").classList.contains("katie_no_answer_available--close")) {
          document.getElementById("katie_no_answer_available").classList.toggle("katie_no_answer_available--close");
        }
        if (!document.getElementById("katie_answer_not_helpful").classList.contains("katie_answer_not_helpful--close")) {
          document.getElementById("katie_answer_not_helpful").classList.toggle("katie_answer_not_helpful--close");
        }

        document.getElementById("katie_answer").innerHTML = "<p>Vielen Dank für die Eingabe Ihrer Frage! Wir werden Ihre Frage <strong>'" + question + "'</strong> sobald als möglich beantworten und eine Email an <strong>'" + email + "'</strong> senden.<p></p>";
      } else {
        document.getElementById("katie_answer").innerHTML = "Es ist ein Fehler passiert, aber wir arbeiten daran!";
      }
    });
  } catch(e) {
    console.info(e);
  }
}

/**
 *
 */
render() {
    console.info("Run Faq ...");

    return(
        <main className="header__margin">
            <div id="sticky-anchor"/>
            <article className={`${styles["article"]} grid__container mb--layout--05`}>
                <section className={`${styles["article-body"]} grid`}>
                    <h1 className="gn mt--layout--02 black uppercase tac">Questions & Answers</h1>
                    <div className="article-content first-letter-capital" >
                        <p>Hier finden Sie Antworten zu den häufigsten Fragen. Sollten Sie keine passende Antwort finden beraten wir Sie gerne.</p>

                        <div className={"mt--layout--04"} id={"katie_ask"}>
                            <label className={"gn uppercase minion"}>Please enter your question</label>
                            <div className={`${styles["search_field"]} mt--spacing--03`}>
                                <input type="text" name="katie_question" id="katie_question" onChange={this.handleChange} onKeyDown={this.keyPress}/>
                                <button className={`${styles["search-button"]} bg-light-black`} onClick={() => this.fetchAnswer()}>
                                    <img src="/search_white_24dp.svg" alt="Search icon"/>
                                </button>
                            </div>
                        </div>

                        <div id="katie_answer" className={`katie_answer`}></div>

                        <div id="katie_answer_not_helpful" className="katie_answer_not_helpful--close mt--layout--02">
                          <p className={"inline-block mr--spacing--06"}>Antwort nicht hilfreich?</p>
                          <button className="inline-block katie-text-button button button--dark gn uppercase minion hover--opacity" onClick={() => this.katie_toggleSendQuestionToExpert()}>Frage einsenden</button>
                        </div>

                        <div id="katie_no_answer_available" className="katie_no_answer_available--close">
                          <p className={"inline-block mr--spacing--06"}>Keine Antwort verfügbar.</p>
                          <button className="inline-block katie-text-button button button--dark gn uppercase minion hover--opacity" onClick={() => this.katie_toggleSendQuestionToExpert()}>Frage einsenden</button>
                        </div>

                        <div id="katie_send_to_expert" className="katie_close-overlay katie_overlay">
                            <div id="katie_overlay_content">
                                <h2 className={"gn black uppercase"}>Frage einsenden</h2>
                                <p className={"mt--layout--02"}>Bitte geben Sie Ihre Email ein und wir schicken Ihnen eine passende Antwort.</p>
                                <div className={"mt--layout--02"}>
                                    <label className={"gn uppercase minion flex flex-direction--column"}>Ihre Email</label>
                                    <input className={"mt--spacing--02"} id="katie_user_email" type="text" placeholder="wes.anderson@gmail.com"/>
                                </div>
                                <p className={"mt--spacing--04 minion"}>Der Schutz Ihrer Daten ist uns wichtig und wir verwenden die von Ihnen eingegebene Email einzig für die Zusendung der Antwort.</p>
                                <div className={"mt--layout--04"}>
                                    <button className={`button button--outline gn uppercase minion mr--spacing--04 hover--opacity`} onClick={() => this.katie_toggleSendQuestionToExpert()}>Cancel</button>
                                    <button className={`button button--dark gn uppercase minion hover--opacity`} onClick={() => this.katie_sendQuestionToExpert()}>Senden</button>
                                </div>
                            </div>
                        </div>

                        {(this.loadingFAQ) ?
                          <p>Loading FAQ ...</p>:
                          <div id="katie_faq">
                          {this.state.topics.map((topic, index) => (
                            <div className="katie_topic" key={topic.id} id={"topic_" + topic.id}>
                              <h2>{topic.title}</h2>
                              {topic.questions.map((qna, indexQnA) => (
                                <div className="katie_qna" key={qna.uuid} id={"qna_" + qna.uuid}>
                                  <div className="katie_question" id={"question_" + qna.uuid} onClick={() => this.toggleAnswer(qna.uuid)}>
                                    <span className="katie_question_text" id={"question_text_" + qna.uuid}>{qna.question}</span>
                                    <span className="katie_chevron_down" id={"chevron_" + qna.uuid}>&#160;&#160;&#160;&#160;&#160;&#160;</span>
                                  </div>
                                  <div className="katie_answer_collapsed" id={"answer_" + qna.uuid} dangerouslySetInnerHTML={{ __html: qna.answer }}></div>
                                </div>
                              ))}
                            </div>
                          ))}
                          </div>
                        }
                    </div>
                </section>
            </article>
        </main>
    )
}

}
