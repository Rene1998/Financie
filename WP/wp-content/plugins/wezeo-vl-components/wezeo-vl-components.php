<?php

/**
 * Plugin Name:       Wezeo vue layout components
 * Plugin URI:        https://www.wezeo.com
 * Description:       Wezeo vue layout components
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Wezeo
 * Author URI:        https://www.wezeo.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wezeo-vue-layout-components
 * Domain Path:       /languages
 */

function enqueue_my_scripts(){
    foreach( glob(plugin_dir_path( __FILE__ ). 'assets/*.js') as $file ) {
        $filename = substr($file, strrpos($file, '/') + 1);
        // $file contains the name and extension of the file
        wp_enqueue_script( $file, plugin_dir_url(__FILE__).'/assets/'.$filename);
    }
//    wp_enqueue_script('vue', 'https://unpkg.com/vue');
//    wp_enqueue_script('w-vl-script', plugin_dir_url(__FILE__) . '/assets/js/vl-textcards.js');
}

add_action('wp_enqueue_scripts', 'enqueue_my_scripts', 18);
//wp_enqueue_style( 'w-style', plugin_dir_url( __FILE__ ) . '/assets/css/style.css',false,'1.1','all');

