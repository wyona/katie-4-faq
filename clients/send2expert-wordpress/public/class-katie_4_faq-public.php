<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://github.com/wyona/katie-4-faq/tree/main/clients/katie4faq-wordpress
 * @since      1.0.0
 *
 * @package    Katie_4_faq
 * @subpackage Katie_4_faq/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Katie_4_faq
 * @subpackage Katie_4_faq/public
 * @author     Wyona <contact@wyona.com> and Shivam <ser.shivam1994@gmail.com>
 */
class Katie_4_faq_Public {

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
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/katie_4_faq-public.css', array(), $this->version, 'all' );
		wp_enqueue_style( 'cn-custom.css', plugin_dir_url( __FILE__ ) . '../cn_package/css/cn-custom.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/katie_4_faq-public.js', array( 'jquery' ), $this->version, false );
		wp_localize_script( $this->plugin_name,'cn_plugin_vars', array('ajaxurl' => admin_url('admin-ajax.php'),'plugin_url'=>Katie_4_faq_URI));

	}

	public function katie_faq($atts) {
		ob_start();
		global $wpdb;
		$cn_form=get_option('cn_form');
		$tdate=date('Y-m-d H:m:s');
		if ($atts) {
			if ($atts['language']) {
				$language=$atts['language'];
			}
		}else{
			$language='';
		}

		require_once Katie_4_faq_DIR . 'public/partials/katie_4_faq-public-display.php';
		$ReturnString = ob_get_contents(); ob_end_clean(); 
 		return $ReturnString;
	}

}
