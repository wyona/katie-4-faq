<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://github.com/wyona/katie-4-faq/tree/main/clients/katie4faq-wordpress
 * @since      1.0.0
 *
 * @package    Katie_4_faq
 * @subpackage Katie_4_faq/admin/partials
 */
?>

<!-- This file should primarily consist of HTML with a little bit of PHP. -->
<?php
wp_enqueue_media();
?>
<div class="cn_col-md-12">
      <div class="cn_col-md-12">
        <div class="cn_card">
             <div class="cn_card-header" style="font-size: 15px;">
              <strong>Katie 'Send to Expert' Settings</strong>
            </div>
          <div class="cn_card-body">
              <form class="form-horizontal" action="" method="post">
                <div class="cn-form-group">
                  <div class="row">
                    <div class="cn_col-md-6">
                      <label class="control-label" for="">Katie domain Id:</label>
                      <input type="text" name="cn_form[domainId]" class="cn-form-control" value="<?php echo $cn_form['domainId'] ?>">
                    </div>
                  </div>
                </div>
                <div class="cn-form-group">
                  <div class="row">
                    <div class="cn_col-md-6">
                      <label class="control-label" for="">Flag whether user email should be remembered:</label>
                      <input type="checkbox" name="cn_form[rememberEmailFlag]" class="cn-form-control" <?php if($cn_form['rememberEmailFlag'] == "on") echo "checked" ?>>
                    </div>
                  </div>
                </div>
                <div class="cn-form-group">
                  <div class="row">
                    <div class="cn_col-md-6">
                      <label class="control-label" for="">Flag whether a privacy policy should be displayed and needs to be accepted:</label>
                      <input type="checkbox" name="cn_form[acceptPrivacyPolicyRequiredFlag]" class="cn-form-control" <?php if($cn_form['acceptPrivacyPolicyRequiredFlag'] == "on") echo "checked" ?>>
                    </div>
                  </div>
                </div>
                <div class="cn-form-group">
                  <div class="row">
                    <div class="cn_col-md-6">
                      <label class="control-label" for="">Link/URL to Privacy Policy in English:</label>
                      <input type="text" name="cn_form[ppEnURL]" class="cn-form-control" value="<?php echo $cn_form['ppEnURL'] ?>">
                    </div>
                  </div>
                </div>
                <div class="cn-form-group">
                  <div class="row">
                    <div class="cn_col-md-6">
                      <label class="control-label" for="">Link text in English re Privacy Policy:</label>
                      <input type="text" name="cn_form[ppEnText]" class="cn-form-control" value="<?php echo $cn_form['ppEnText'] ?>">
                    </div>
                  </div>
                </div>
                <div class="cn-form-group">
                  <div class="row">
                    <div class="cn_col-md-6">
                      <label class="control-label" for="">Link/URL to Privacy Policy in German:</label>
                      <input type="text" name="cn_form[ppDeURL]" class="cn-form-control" value="<?php echo $cn_form['ppDeURL'] ?>">
                    </div>
                  </div>
                </div>
                <div class="cn-form-group">
                  <div class="row">
                    <div class="cn_col-md-6">
                      <label class="control-label" for="">Link text in German re Privacy Policy:</label>
                      <input type="text" name="cn_form[ppDeText]" class="cn-form-control" value="<?php echo $cn_form['ppDeText'] ?>">
                    </div>
                  </div>
                </div>
                <div class="cn-form-group">
                  <div class="row">
                    <div class="cn_col-md-12">
                      <label class="control-label" for="">CSS:</label>
                      <textarea name="cn_form[css]" rows="15"  class="cn-form-control"><?php echo $cn_form['css'] ?></textarea>
                    </div>
                  </div>
                </div>
  
                <div class="form-group">
                  <hr>
                </div>
                <div class="form-group"> 
                  <div class="cn_col-sm-8">
                  <button type="submit" name="save_settings_info" class="button button-primary button-large">Submit</button>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
</div>
