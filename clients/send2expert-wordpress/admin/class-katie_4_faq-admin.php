<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://github.com/wyona/katie-4-faq/tree/main/clients/katie4faq-wordpress
 * @since      1.0.0
 *
 * @package    Katie_4_faq
 * @subpackage Katie_4_faq/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Katie_4_faq
 * @subpackage Katie_4_faq/admin
 * @author     Wyona <contact@wyona.com> and Shivam <ser.shivam1994@gmail.com>
 */
class Katie_4_faq_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/katie_4_faq-admin.css', array(), $this->version, 'all' );
		wp_enqueue_style( 'cn-custom.css', plugin_dir_url( __FILE__ ) . '../cn_package/css/cn-custom.css', array(), $this->version, 'all' );
		wp_enqueue_style( 'cn-grid', plugin_dir_url( __FILE__ ) . '../cn_package/css/cn-grid.css', array(), $this->version, 'all' );
		wp_enqueue_style( 'sweet-alert.css', plugin_dir_url( __FILE__ ) . '../cn_package/node_modules/sweetalert/sweetalert/lib/sweet-alert.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/katie_4_faq-admin.js', array( 'jquery' ), $this->version, false );
		wp_enqueue_script('cn-custom.js', plugin_dir_url( __FILE__ ) . '../cn_package/js/cn-custom.js', array( 'jquery' ), $this->version, false );
		wp_enqueue_script( 'sweetalert2.all.min.js', plugin_dir_url( __FILE__ ) . '../cn_package/node_modules/sweetalert/sweetalert/lib/sweet-alert.min.js', array( 'jquery' ), $this->version, true );
		wp_localize_script( 'cn-custom.js','cn_plugin_vars', array('ajaxurl' => admin_url('admin-ajax.php'),'plugin_url'=>Katie_4_faq_URI));
	}

	public function Katie_4_faq_plugin_menu(){
		add_menu_page('Katie S2E', 'Katie S2E', 'manage_options', 'katie-setting',  array($this, 'cn_settings'),'dashicons-text-page',5);
		
	}
	public function cn_settings(){
		global $wpdb;
		$tdate=date('Y-m-d H:m:s');
		if (isset($_POST['save_settings_info'])) {
				update_option('cn_form',$_POST['cn_form']);
				?>
					<script type="text/javascript">
						jQuery(document).ready(function(){
							swal({
								type: 'success',
								title: 'Katie S2E Settings updated successfully',
								text: '',
								showConfirmButton: false,
								timer: 1600
							});
						});
					</script>
			<?php
			}
			$cn_form=get_option('cn_form');
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
}';
			}
		require_once Katie_4_faq_DIR . 'admin/partials/katie_4_faq-admin-display.php';		
	}

}
