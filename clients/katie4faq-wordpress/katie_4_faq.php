<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://wyona.com
 * @since             1.0.0
 * @package           Katie_4_faq
 *
 * @wordpress-plugin
 * Plugin Name:       Katie 4 FAQ
 * Plugin URI:        https://github.com/wyona/katie-4-faq/tree/main/clients/katie4faq-wordpress
 * Description:       Manage FAQ with Katie (https://katie.qa).
 * Version:           1.3.0
 * Author:            Wyona <contact@wyona.com> and Shivam <ser.shivam1994@gmail.com>
 * Author URI:        https://wyona.com
 * License:           Apache License 2.0
 * License URI:       https://www.apache.org/licenses/LICENSE-2.0
 * Text Domain:       katie_4_faq
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'KATIE_4_FAQ_VERSION', '1.2.0' );
$path_array  = wp_upload_dir();
$upload_url=$path_array['baseurl'];
$upload_dir=$path_array['basedir'];
define('Katie_4_faq_DIR', plugin_dir_path( __FILE__ ) );
define('Katie_4_faq_URI', plugin_dir_url( __FILE__ ) );
define('Katie_4_faq_UPLOAD_URI', $upload_url);
define('Katie_4_faq_UPLOAD_DIR', $upload_dir);

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-katie_4_faq-activator.php
 */
function activate_katie_4_faq() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-katie_4_faq-activator.php';
	Katie_4_faq_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-katie_4_faq-deactivator.php
 */
function deactivate_katie_4_faq() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-katie_4_faq-deactivator.php';
	Katie_4_faq_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_katie_4_faq' );
register_deactivation_hook( __FILE__, 'deactivate_katie_4_faq' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-katie_4_faq.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_katie_4_faq() {

	$plugin = new Katie_4_faq();
	$plugin->run();

}
run_katie_4_faq();
