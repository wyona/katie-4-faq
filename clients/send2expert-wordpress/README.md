# Wordpress Plugin to integrate your FAQ into your Wordpress website using the Katie API

## Installation

If you already have setup a domain/FAQ at Katie (https://ukatie.com) and you have a Wordpress website, then do the following steps

1. Create a zip file of the Plugin by running ```zip -r send_2_expert.zip .``` inside this folder
2. Upload the Plugin to your Wordpress website and activate the Plugin
3. Configure the Plugin by clicking on the newly generated menu item "Katie Settings" and set the field "Katie domain Id" (e.g. a805c9bc-5e53-42e3-b987-99bf46f587f9)
4. Create a page and set the shortcode ```[katie_faq language=en]```
5. Publish the page

You should then see your FAQ and be able to search your FAQ using natural language :-)

See for example https://rockondigital.ch/frequently-asked-questions/ or https://cyclix.ch/ask-cyclix/

## Enabling/Disabling "Please accept Privacy Policy" when forwarding question to expert

1. Click on the menu item "Katie Settings"
2. Select the checkbox "Flag whether a privacy policy should be displayed and needs to be accepted"
3. Enter your custom URL and text
4. Save settings
5. Reload page where Katie is used, enter a question, submit question to expert and verify that privacy policy text and URL are correct

## Implementation Details

The Katie API calls are done by JavaScript (based on the pure JavaScript client https://github.com/wyona/katie-4-faq/tree/main/clients/katie4faq-js/src)

- cn_package/katie4faq/katie-api.js

The HTML is located at

- public/partials/katie_4_faq-public-display.php
