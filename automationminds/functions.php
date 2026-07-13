<?php
add_filter( 'show_admin_bar', '__return_false' );

remove_action('wp_head', 'wp_generator');

function automationstheme_setup(){
    add_theme_support('post-thumbnails');
    add_theme_support( 'title-tag' );
    add_theme_support( 'custom-logo' );
}
add_action('after_setup_theme', 'automationstheme_setup');

function remove_description_from_title_tag( $title ) {
    if ( is_home() || is_front_page() ) {
        $site_name = get_bloginfo( 'name', 'display' );
        return $site_name;
    }
    return $title;
}
add_filter( 'pre_get_document_title', 'remove_description_from_title_tag', 9999 );

//Disable the emoji's
function disable_emojis() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );	
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );	
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	
	// Remove from TinyMCE
	add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
}
add_action( 'init', 'disable_emojis' );

// Filter out the tinymce emoji plugin.
function disable_emojis_tinymce( $plugins ) {
	if ( is_array( $plugins ) ) {
		return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
		return array();
	}
}

//Remove Gutenberg Block Library CSS from loading on the frontend
function smartwp_remove_wp_block_library_css(){
 wp_dequeue_style( 'wp-block-library' );
 wp_dequeue_style( 'wp-block-library-theme' );
 wp_dequeue_style( 'wc-blocks-style' ); // Remove WooCommerce block CSS
} 
add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css', 100 );

remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
remove_action( 'wp_footer', 'wp_enqueue_global_styles', 1 );

//WYŁĄCZONE WYSZUKIWANIA Z DATĄ
function redirect_to_home_if_archive( $query ){
   if( is_category() || is_tag() || is_author() || is_archive() ) {
       wp_redirect( home_url() );
       exit;
   }
}
add_action( 'parse_query', 'redirect_to_home_if_archive' );