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

#katie_question {
  /*background-color: yellow;*/
  margin-bottom: 10px;
}

#katie_user_email {
  margin-top: 10px;
  /*background-color: pink;*/
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
      <div><input id="katie_question" type="text" size="50" data-i18n="input_question.placeholder_label" data-i18n-attr="placeholder" placeholder="Ask a question ..." name="katie_question" value=""/></div>

      <div><input id="katie_user_email" type="text" data-i18n="input_email.placeholder_label" data-i18n-attr="placeholder" placeholder="Your email ..."/></div>

      <div class="katie_hide-privacy-policy" id="katie_privacy-policy"><input type="checkbox" id="privacy_policy_checkbox"/><a href="privacy_policy.html" target="_blank" id="privacy_policy_link_text">I have read and accept the Privacy Statement</a></div>

      <div id="send_to_expert_buttons"><button onclick="katie_sendQuestionToExpert(faqLanguage, acceptPrivacyPolicyRequired)" data-i18n="submit">Submit</button></div>

      <div id="katie_answer"></div>

    </div>

    <script type="text/javascript">
      //var domainId = "9f206aec-5223-4e03-a2fc-c16e4b885ef8";
      //var faqLanguage = "en";
      var domainId = "<?php echo $cn_form['domainId']; ?>";
      //alert("DEBUG: domainId: " + domainId);
      var faqLanguage = "<?php echo $language; ?>";

      var rememberEmail = false;
      var rememberEmailFlag = "<?php echo $cn_form['rememberEmailFlag']; ?>";
      //alert("DEBUG: rememberEmailFlag: " + rememberEmailFlag);
      if (rememberEmailFlag == "on") {
        rememberEmail = true;
      } else {
        //alert("DEBUG: rememberEmailFlag: off");
      }

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
      katie_getEmailFromLocalStorage();
    </script>

