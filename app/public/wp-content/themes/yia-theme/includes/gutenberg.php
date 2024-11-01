<?php

/**
 * Custom Gutenberg functions
 */

 function yiaadd_gutenberg_default_colors() {

    add_theme_support(
        'editor-color-palett', 
        array(
            'name' => 'White',
            'slug' => 'slug',
            'color' => '#c39a55'
    ));
 }

 add_action( 'init', 'yiaadd_gutenberg_default_colors');

 function yiaadd_gutenberg_blocks() {

    wp_register_script( 'custom-cta-js', get_template_directory_uri() . '/js/gutenberg-cta-block.js', array(
        'wp-blocks'
    ));
    
    
    register_block_type( 'yiablock/custom-cta', array(
        'editor_script' => 'custom-cta-js'
    ));
 }
 add_action( 'init', 'yiaadd_gutenberg_blocks');