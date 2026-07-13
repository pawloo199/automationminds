<!doctype html>
<html class="no-js" lang="pl-PL">
    <head>
        <?php wp_head(); ?>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content="<?php echo esc_attr( get_bloginfo( 'description' ) ); ?>">
        <link rel="shortcut icon" href="">
        <link rel="apple-touch-icon" href="">
        <link rel="apple-touch-icon" sizes="72x72" href="">
        <link rel="apple-touch-icon" sizes="114x114" href="">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/vendors.min.css"/>
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/icon.min.css"/>
        <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />
        <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/responsive.css"/>
    </head>
    <body <?php body_class(); ?> data-mobile-nav-style="classic">
        <header> 
            <nav class="navbar navbar-expand-lg header-transparent bg-transparent header-reverse" data-header-hover="light">
                <div class="container-fluid">
                    <div class="col-auto col-xxl-3 me-xl-0 me-auto">
                        <a class="navbar-brand" href="<?php echo home_url() ?>">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/AM-logo-white-transparent.png" data-at2x="<?php echo get_template_directory_uri(); ?>/assets/images/AM-logo-white-transparent.png" alt="" class="default-logo">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/AM-logo-color-transparent.png" data-at2x="<?php echo get_template_directory_uri(); ?>/assets/images/AM-logo-color-transparent.png" alt="" class="alt-logo">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/AM-logo-color-transparent.png" data-at2x="<?php echo get_template_directory_uri(); ?>/assets/images/AM-logo-color-transparent.png" alt="" class="mobile-logo">
                        </a>
                    </div>
                    <div class="col-auto menu-order position-static">
                        <button class="navbar-toggler float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav"> 
                            <ul class="navbar-nav">
                                <li class="nav-item"><a href="<?php echo home_url() ?>" class="nav-link">Start</a></li>
                                <li class="nav-item dropdown dropdown-with-icon-style02">
                                <a href="javascript:void(0);" class="nav-link">Usługi</a>
                                <i class="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> 
                                    <li><a href="<?php echo home_url() ?>/doractwo-i-optymalizacja-procesow-biznesowych/"><i class="bi bi-briefcase"></i>Doractwo i optymalizacja procesów biznesowych</a></li>
                                    <li><a href="<?php echo home_url() ?>/automatyzacja-dla-sprzedazy-i-marketingu/"><i class="bi bi-briefcase"></i>Automatyzacja dla sprzedaży i marketingu</a></li>
                                    <li><a href="<?php echo home_url() ?>/automatyzacja-dla-hr/"><i class="bi bi-briefcase"></i>Automatyzacja dla HR</a></li>
                                    <li><a href="<?php echo home_url() ?>/automatyzacja-dla-ksiegowosci/"><i class="bi bi-briefcase"></i>Automatyzacja dla księgowości</a></li>
                                    <li><a href="<?php echo home_url() ?>/automatyzacja-raportow/"><i class="bi bi-briefcase"></i>Automatyzacja Raportów</a></li>
                                    <li><a href="<?php echo home_url() ?>/automatyzacja-w-obsludze-klienta/"><i class="bi bi-briefcase"></i>Automatyzacja w Obsłudze Klienta</a></li>
                                    <li><a href="<?php echo home_url() ?>/automatyzacja-w-produkcji-i-uslugach/"><i class="bi bi-briefcase"></i>Automatyzacja w Produkcji i Usługach</a></li>
                                    <li><a href="<?php echo home_url() ?>/automatyzacja-dla-logistyki/"><i class="bi bi-briefcase"></i>Automatyzacja dla Logistyki</a></li>
                                    <li><a href="<?php echo home_url() ?>/automatyzacja-oraz-ai-w-nistandardowych-procesach/"><i class="bi bi-briefcase"></i>Automatyzacja oraz AI w nistandardowych procesach</a></li>
                                </ul>
                            </li>
                                <li class="nav-item"><a href="<?php echo home_url() ?>/o-nas/" class="nav-link">O nas</a></li>
                                <li class="nav-item"><a href="<?php echo home_url() ?>/kontakt/" class="nav-link">Kontakt</a></li>
                                <div class="menu-mobile-button d-none ms-15px mt-10px">
                                    <a href="tel:+48726587379" class="btn btn-large btn-transparent-white-light btn-rounded">+48 726 587 379</a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div class="col-auto col-xxl-3 text-end d-sm-flex">
                        <div class="header-icon">
                            <div class="header-button"><a href="tel:+48726587379" class="btn btn-large btn-transparent-white-light btn-rounded">+48 726 587 379</a></div>
                        </div>  
                    </div>
                </div>
            </nav>
        </header>