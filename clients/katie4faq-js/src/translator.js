// Translator (inspired by https://codeburst.io/translating-your-website-in-pure-javascript-98b9fa4ce427, https://github.com/andreasremdt/simple-translator)

var germanTranslation = {
  my_faq: "Meine häufig gestellten Fragen",
  ask: "Fragen",
  cancel: "Abbrechen",
  submit: "Absenden",
  input: {
    placeholder_label: "Eine Frage stellen ..."
  },
  input_email: {
    placeholder_label: "Ihre E-Mail ..."
  },
  modal: {
    answer_not_helpful: "Antwort nicht hilfreich?",
    please_enter_email: "Bitte geben Sie Ihre E-Mail-Adresse ein, und wir werden Ihnen so schnell wie möglich eine bessere Antwort zukommen lassen."
  }
};

var englishTranslation = {
  my_faq: "My Frequently Asked Questions",
  ask: "Ask",
  cancel: "Cancel",
  submit: "Submit",
  input: {
    placeholder_label: "Ask a question ..."
  },
  input_email: {
    placeholder_label: "Your email ..."
  },
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
 * Replace text, e.g. <h1 data-i18n="my_faq">My Frequently Asked Questions</h1> or <input data-i18n="input.placeholder_label input.title_label" data-i18n-attr="placeholder title" placeholder="Ask a question ..." title="Question"/>
 * @param language Language, e.g. "de" or "en"
 */
function katie_replace(element, language) {
  console.info("Replace text of element using language '" + language + "' ...");

  var keys = element.getAttribute('data-i18n')?.split(/\s/g);

  const attributes = element?.getAttribute('data-i18n-attr')?.split(/\s/g);
  if (attributes) {
    if (attributes && keys.length != attributes.length) {
      alert("ERROR: Mismatching nummber of i18n attributes and keys! " + attributes.length + ", " + keys.length);
    }
  }

  keys.forEach((key, index) => {
    const text = katie_getTextFromTranslationJSON(key, language);
    //alert("DEBUG: Translation text: " + katie_getTextFromTranslationJSON(key, language));
    const attr = attributes ? attributes[index] : 'innerHTML';

    if (text) {
      //element.innerHTML = text;
      if (attr == 'innerHTML') {
        element[attr] = text;
      } else {
        element.setAttribute(attr, text);
      }
    } else {
      alert("No translation text available!");
    }
  });
}

/**
 * Get translation text for a particular key and language
 * @param language Language, e.g. "de" or "en"
 */
function katie_getTextFromTranslationJSON(key, language) {
  if (language == "de") {
    return key.split('.').reduce((obj, i) => (obj ? obj[i] : null), germanTranslation);
  } else {
    return key.split('.').reduce((obj, i) => (obj ? obj[i] : null), englishTranslation);
  }
}
