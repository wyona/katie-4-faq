<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       https://github.com/wyona/katie-4-faq/tree/main/clients/katie4faq-wordpress
 * @since      1.0.0
 *
 * @package    Katie_4_faq
 * @subpackage Katie_4_faq/public/partials
 */
?>

<!-- This file should primarily consist of HTML with a little bit of PHP. -->
<style type="text/css">
  <?php

  if ($cn_form['css']=='') {
        $cn_form['css']='/* Katie specific style */

#katie_ask {
  margin-top: 20px;
}

#katie_answer {
  font-size: 0.8em;
  font-weight: normal;
  margin-top: 20px;
  margin-bottom: 20px;
  /*background-color: pink;*/
}

#katie_faq {
  font-size: 0.8em;
  font-weight: normal;
  /*background-color: pink;*/
}

.katie_topic h2 {
  /*background-color: pink;*/
}

.katie_qna {
  /*background-color: yellow;*/
  margin-bottom: 20px;
}

.katie_question {
  /*background-color: yellow;*/
  margin-bottom: 10px;
}

.katie_question_text {
  /*background-color: yellow;*/
  margin-right: 20px;
}

.katie_chevron_down {
  
  background-repeat: no-repeat;
  /*background-color: pink;*/
      background-position: center;
      cursor: pointer;
}

.katie_chevron_up {
  
  background-repeat: no-repeat;
  /*background-color: yellow;*/
  background-position: center;
  cursor: pointer;
}

.katie_answer_collapsed {
  display: none;
}

.katie_answer_expanded {
  background-color: #f6f7fa;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.katie_answer_expanded li {
  /*background-color: lightblue;*/
  list-style-type: circle;
}

.katie-text-button {
  font-size: 1em;
  font-weight: normal;
  font-family: Arial, sans-serif;
  color: blue;
  background:none;
  border:none;
  margin:0;
  padding:0;
  cursor: pointer;
  transition: opacity .5s;
}

.katie-text-button:hover {
  opacity: .6;
}

#katie_answer_not_helpful {
  /*background-color: pink;*/
  margin-top: 20px;
  margin-bottom: 20px;
}

#katie_send_to_expert {
}

/* The Modal (background) */
.katie_overlay {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

#katie_overlay_content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

#katie_overlay_content h2 {
  /*background-color: pink;*/
  font-size: 1.2em;
}

#katie_overlay_content p {
  /*background-color: yellow;*/
  font-size: 0.8em;
}

#katie_overlay_content input {
  /*background-color: green;*/
  max-width: 35rem;
  width: 100%;
}

.katie_close-overlay {
  display: none;
  opacity: 0;
}

.katie_open-overlay {
  display: flex;
  opacity: 1;
}

.katie_question_text {
    cursor: pointer;
}


div#katie_eroor {
    color: red;
    text-align: center;
}

div#katie_overlay_content {
    width: 400px;
    text-align: center;
    border-radius: 15px;
}
.cn_cancel{
  float: left;
}
.cn_submit{
  float: right;
}

#send_to_expert_buttons {
  margin-top: 20px;
}

#katie_privacy-policy {
  /*background-color: yellow;*/
  margin-top: 20px;
  margin-bottom: 20px;
}

#katie_privacy-policy input {
  width: 20px;
}

/*
#privacy_policy_checkbox {
}
*/

#privacy_policy_link_text {
  /*background-color: pink;*/
}

.katie_hide-privacy-policy {
  display: none;
  opacity: 0;
}

.katie_show-privacy-policy {
  display: flex;
  opacity: 1;
}';
      }

   echo $cn_form['css']; ?>
</style>

    <script type="text/javascript" src="<?php echo Katie_4_faq_URI ?>cn_package/katie4faq/katie-api.js"></script>
    <script type="text/javascript" src="<?php echo Katie_4_faq_URI ?>cn_package/katie4faq/translator.js"></script>

    <!-- <link rel="stylesheet" href="<?php echo Katie_4_faq_URI ?>cn_package/katie4faq/katie-style.css"/> -->

   
   
  
    <div id="katie_eroor"></div>
    
    <div id="katie_ask">
      <div style="text-align: center;">
        <input style="width: 90%; float: left;" type="text" size="50" data-i18n="input_question.placeholder_label" data-i18n-attr="placeholder" placeholder="Ask a question ..." id="katie_question" name="katie_question" class="cn-form-control" value=""/>
        <button onclick="katie_askQuestion(katie_question.value, domainId, faqLanguage);" id="katie_ask-button" class="btn button" data-i18n="ask">Ask</button>
      </div>
       <script>
    var input = document.getElementById("katie_question");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       document.getElementById("katie_ask-button").click();
      }
    });
    </script>


      <div id="katie_answer"></div>

      <div id="katie_send_to_expert" class="katie_close-overlay katie_overlay">
        <div id="katie_overlay_content">
          <h2 data-i18n="modal.answer_not_helpful">Answer not helpful?</h2>
          <p data-i18n="modal.please_enter_email">Please enter your email and we will send you a better answer as soon as possible.</p>
          <div class="cn-form-group"><input style="max-width: unset;" class="cn-form-control" id="katie_user_email" type="text" data-i18n="input_email.placeholder_label" data-i18n-attr="placeholder" placeholder="Your email ..."/></div>
          <div class="katie_hide-privacy-policy" id="katie_privacy-policy"><input type="checkbox" id="privacy_policy_checkbox"/><a href="privacy_policy.html" target="_blank" id="privacy_policy_link_text">I have read and accept the Privacy Statement</a></div>
          <div class="cn-form-group"><button onclick="katie_send_to_expert.classList.toggle('katie_open-overlay')" class="button btn cn_cancel" data-i18n="cancel">Cancel</button>&#160;<button onclick="katie_sendQuestionToExpert(faqLanguage, acceptPrivacyPolicyRequired)" class="button btn cn_submit" data-i18n="submit">Submit</button></div>
        </div>
      </div>
    </div>

    <hr/>

   
    <div id="katie_faq"></div>

    <script type="text/javascript">
      //var domainId = "9f206aec-5223-4e03-a2fc-c16e4b885ef8";
      //var faqLanguage = "en";
      var domainId = "<?php echo $cn_form['domainId']; ?>";
      //alert("DEBUG: domainId: " + domainId);
      var faqLanguage = "<?php echo $language; ?>";

      var acceptPrivacyPolicyRequired = false;
      var acceptPrivacyPolicyRequiredFlag = "<?php echo $cn_form['acceptPrivacyPolicyRequiredFlag']; ?>";
      //alert("DEBUG: acceptPrivacyPolicyRequiredFlag: " + acceptPrivacyPolicyRequiredFlag);
      if (acceptPrivacyPolicyRequiredFlag == "on") {
        acceptPrivacyPolicyRequired = true;
      } else {
        //alert("DEBUG: acceptPrivacyPolicyRequiredFlag: off");
      }

      //var ppEnURL = "https://wyona.com/privacy-policy";
      var ppEnURL = "<?php echo $cn_form['ppEnURL']; ?>";

      //var ppDeURL = "https://wyona.com/datenschutzrichtlinie";
      var ppDeURL = "<?php echo $cn_form['ppDeURL']; ?>";

      //var ppEnText = "I have read and accept the WYONA Privacy Statement";
      var ppEnText = "<?php echo $cn_form['ppEnText']; ?>";

      //var ppDeText = "Ich habe die Datenschutzrichtlinie von WYONA gelesen und stimme zu";
      var ppDeText = "<?php echo $cn_form['ppDeText']; ?>";

      katie_translate(faqLanguage);
      katie_setPrivacyPolicy(acceptPrivacyPolicyRequired, faqLanguage, ppDeURL, ppDeText, ppEnURL, ppEnText);
      katie_getFAQ(domainId, faqLanguage);
    </script>

