# Wordpress Plugin to integrate your FAQ into your Wordpress website using the Katie API

## Installation

If you already have setup a domain/FAQ at Katie (https://ukatie.com) and you have a Wordpress website, then do the following steps

1. Create a zip file of the Plugin by running ```zip -r katie_4_faq.zip .``` inside this folder
2. Upload the Plugin to your Wordpress website and activate the Plugin
3. Configure the Plugin by clicking on the newly generated menu item "Katie Setting" and set the field domainId
4. Create a page and set the shortcode ```[katie_faq language=en]```
5. Publish the page

You should then see your FAQ and be able to search your FAQ using natural language :-)

See for example https://rockondigital.ch/frequently-asked-questions/

## Implementation Details

The Katie API calls are done by JavaScript (based on the pure JavaScript client https://github.com/wyona/katie-4-faq/tree/main/clients/katie4faq-js/src)

- cn_package/katie4faq/katie-api.js

The HTML is located at

- public/partials/katie_4_faq-public-display.php
