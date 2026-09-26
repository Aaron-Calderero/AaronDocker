<?php

add_theme_support('post-thumbnails');
function tema_plaiaundi_estilos() {

    wp_enqueue_style(
        'tema-plaiaundi-style',
        get_stylesheet_uri()
    );

}

add_action('wp_enqueue_scripts', 'tema_plaiaundi_estilos');
register_nav_menus(
    array(
        'menu-principal' => 'Menú principal'
    )
);