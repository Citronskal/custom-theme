<?php

/**
 * Custom Gutenberg functions
 */



 function yiaadd_gutenberg_blocks() {

    wp_register_script(
        'custom-cta-js',
        get_template_directory_uri() . '/js/gutenberg-cta-block.js',
        array('wp-blocks', 'wp-element', 'wp-editor'),
        filemtime(get_template_directory() . '/js/gutenberg-cta-block.js') // Adds cache busting for updates
    );
    
    
    
    register_block_type( 'yiablock/custom-cta', array(
        'editor_script' => 'custom-cta-js'
    ));
 }
 add_action( 'init', 'yiaadd_gutenberg_blocks');