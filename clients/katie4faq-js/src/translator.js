// Translator (inspired by https://codeburst.io/translating-your-website-in-pure-javascript-98b9fa4ce427, https://github.com/andreasremdt/simple-translator)

var germanTranslation = {
  my_faq: "Meine häufig gestellten Fragen",
  modal: {
    answer_not_helpful: "Antwort nicht hilfreich?",
    please_enter_email: "Bitte geben Sie Ihre E-Mail-Adresse ein, und wir werden Ihnen so schnell wie möglich eine bessere Antwort zukommen lassen."
  }
};

var englishTranslation = {
  my_faq: "My Frequently Asked Questions",
  modal: {
    answer_not_helpful: "Answer not helpful?",
    please_enter_email: "Please enter your email and we will send you a better answer as soon as possible."
  }
};

/**
 * @param language Language, e.g. "de" or "en"
 */
function katie_translate(language) {
  //alert("DEBUG: Translate ...");
  console.info("Translate using language '" + language + "' ...");

  elements = document.querySelectorAll("[data-i18n]");

  if (elements.length && elements.length > 0) {
    console.info(elements.length + " elements found to be translated");
    elements.forEach((element) => katie_replace(element, language));
  }
}

/**
 * Replace text
 */
function katie_replace(element, language) {
  console.info("Replace ...");

  var keys = element.dataset.i18n.split(".");

  var text = null;
  if (language == "de") {
    text = keys.reduce((obj, i) => obj[i], germanTranslation);
  } else {
    text = keys.reduce((obj, i) => obj[i], englishTranslation);
  }

  if (text) {
    element.innerHTML = text;
  }
}
