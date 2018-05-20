<?php

add_theme_support( 'post-thumbnails' );



function method() {

	wp_enqueue_style('style', get_stylesheet_uri());

}
add_action( 'wp_enqueue_scripts', 'method' );

function scriptMethod() {

	wp_enqueue_script('newscript', get_template_directory_uri() . '/js/script.js' );
	wp_enqueue_script( 'google_map_api', "//maps.googleapis.com/maps/api/js?key=AIzaSyAp5mlqCS-xpbLCsp1xB11GNL9fvjfV27w&callback=initMap" );
}
add_action( 'wp_footer', 'scriptMethod' );


?>