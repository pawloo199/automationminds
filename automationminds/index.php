<?php /*Template Name: Strona główna*/ ?>        
        <?php get_header(); ?>
        <section class="section-dark p-0 bg-dark-gray"> 
            <div class="swiper lg-no-parallax magic-cursor  full-screen md-h-600px sm-h-550px ipad-top-space-margin swiper-light-pagination" data-slider-options='{ "slidesPerView": 1, "loop": true, "parallax": true, "speed": 1000, "pagination": { "el": ".swiper-pagination-bullets", "clickable": true }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 4000, "disableOnInteraction": false },  "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'>
                <div class="swiper-wrapper">
                    <?php if (get_field('home-baner-img-1')) { ?>
                    <div class="swiper-slide overflow-hidden">
                        <div class="cover-background position-absolute top-0 start-0 w-100 h-100" data-swiper-parallax="500" style="background-image:url('<?php the_field('home-baner-img-1') ?>');">
                            <div class="opacity-light bg-gradient-sherpa-blue-black"></div>
                            <div class="container h-100" data-swiper-parallax="-500">
                                <div class="row align-items-center h-100">
                                    <div class="col-xl-7 col-lg-8 col-md-10 position-relative text-white text-center text-md-start" data-anime='{ "el": "childs", "translateX": [100, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                                        <div>
                                            <span class="fs-20 opacity-6 mb-25px sm-mb-15px d-inline-block fw-300"><?php the_field('home-baner-subtitle-1') ?></span>
                                        </div>
                                        <h1 class="alt-font w-90 xl-w-100 text-shadow-double-large ls-minus-2px"><?php the_field('home-baner-title-1') ?></h1>
                                        <a href="<?php the_field('home-baner-button-link-1') ?>" class="btn btn-extra-large btn-rounded with-rounded btn-base-color btn-box-shadow box-shadow-extra-large mt-20px sm-mt-0 inner-link"><?php the_field('home-baner-button-text-1') ?><span class="bg-white text-base-color"><i class="fas fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                                <div class="position-absolute bottom-minus-45px" data-anime='{ "translateY": [150, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'><span class="alt-font number text-base-color opacity-3 fs-190 fw-600 ls-minus-5px">01</span></div>
                            </div>
                        </div>
                    </div>
                    <?php } ?>
                    <?php if (get_field('home-baner-img-2')) { ?>
                    <div class="swiper-slide overflow-hidden">
                        <div class="cover-background position-absolute top-0 start-0 w-100 h-100" data-swiper-parallax="500" style="background-image:url('<?php the_field('home-baner-img-2') ?>');">
                            <div class="opacity-light bg-gradient-sherpa-blue-black"></div>
                            <div class="container h-100" data-swiper-parallax="-500">
                                <div class="row align-items-center h-100">
                                    <div class="col-xl-7 col-lg-8 col-md-10 position-relative text-white text-center text-md-start" data-anime='{ "el": "childs", "translateX": [100, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'> 
                                        <div>
                                            <span class="fs-20 opacity-6 mb-25px sm-mb-15px d-inline-block fw-300"><?php the_field('home-baner-subtitle-2') ?></span>
                                        </div>
                                        <h1 class="alt-font w-90 xl-w-100 text-shadow-double-large ls-minus-2px"><?php the_field('home-baner-title-2') ?></h1>
                                        <a href="<?php the_field('home-baner-button-link-2') ?>" class="btn btn-extra-large btn-rounded with-rounded btn-base-color btn-box-shadow box-shadow-extra-large mt-20px sm-mt-0 inner-link"><?php the_field('home-baner-button-text-2') ?><span class="bg-white text-base-color"><i class="fas fa-arrow-right"></i></span></a>
                                    </div>
                                    <div class="position-absolute bottom-minus-45px" data-anime='{ "translateY": [150, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'><span class="alt-font number text-base-color opacity-3 fs-190 fw-600 ls-minus-5px">02</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php } ?>
                    <?php if (get_field('home-baner-img-3')) { ?>
                    <div class="swiper-slide overflow-hidden">
                        <div class="cover-background position-absolute top-0 start-0 w-100 h-100" data-swiper-parallax="500" style="background-image:url('<?php the_field('home-baner-img-3') ?>');">
                            <div class="opacity-light bg-gradient-sherpa-blue-black"></div>
                            <div class="container h-100" data-swiper-parallax="-500">
                                <div class="row align-items-center h-100">
                                    <div class="col-xl-7 col-lg-8 col-md-10 position-relative text-white text-center text-md-start" data-anime='{ "el": "childs", "translateX": [100, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                                        <div>
                                            <span class="fs-20 opacity-6 mb-25px sm-mb-15px d-inline-block fw-300"><?php the_field('home-baner-subtitle-3') ?></span>
                                        </div>
                                        <h1 class="alt-font w-90 xl-w-100 text-shadow-double-large ls-minus-2px"><?php the_field('home-baner-title-3') ?></h1>
                                        <a href="<?php the_field('home-baner-button-link-3') ?>" class="btn btn-extra-large btn-rounded with-rounded btn-base-color btn-box-shadow box-shadow-extra-large mt-20px sm-mt-0 inner-link"><?php the_field('home-baner-button-text-3') ?><span class="bg-white text-base-color"><i class="fas fa-arrow-right"></i></span></a>
                                    </div>
                                    <div class="position-absolute bottom-minus-45px" data-anime='{ "translateY": [150, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'><span class="alt-font number text-base-color opacity-3 fs-190 fw-600 ls-minus-5px">03</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php } ?>
                </div>
                <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
            </div>
        </section>
        <section class="half-section"> 
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 position-relative align-self-center md-order-1" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <span class="fs-15 text-uppercase text-base-color fw-600 ls-1px mb-10px d-block"><?php the_field('home-s01-subtitle') ?></span>
                        <h2 class="section-title"><?php the_field('home-s01-title') ?></h2>
                        <?php if (get_field('home-s01-text')) { ?>
                        <p><?php the_field('home-s01-text') ?></p>
                        <?php } ?>
                        <?php
                        $liczba_punktow = get_field('home-s01-list-count');
                        for ($i = 1; $i <= $liczba_punktow; $i++) {
                            $punkt_tresc = "home-s01-list-text-" . $i;
                            $punkt_tresc_value = get_field($punkt_tresc);
                        ?>
                        
                        <div class="icon-with-text-style-08 mb-15px">
                            <div class="feature-box feature-box-left-icon-middle overflow-hidden">
                                <div class="feature-box-icon feature-box-icon-rounded w-35px h-35px bg-solitude-blue rounded-circle me-10px">
                                    <i class="fa-solid fa-check fs-14 text-base-color"></i> 
                                </div>
                                <div class="feature-box-content"> 
                                    <span class="text-dark-gray"><?php echo $punkt_tresc_value; ?></span>
                                </div>
                            </div>
                        </div>
                        <?php } ?>
                        <?php if (get_field('home-s01-button-link')) { ?>
                        <a href="<?php the_field('home-s01-button-link') ?>" class="btn btn-large btn-base-color btn-rounded mt-25px inner-link"><?php the_field('home-s01-button-text') ?></a>
                        <?php } ?>
                    </div>
                    <div class="offset-lg-1 col-lg-6 md-mb-30px" data-anime='{ "translateX": [15, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <?php echo wp_get_attachment_image( get_field('home-s01-img'), 'large', "" , array( "class" => "border-radius-8px col-img h-900px" ) ); ?>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-solitude-blue">
            <div class="container">
                <div class="row justify-content-center mb-4">
                    <div class="col-xl-8 col-lg-9 col-md-10 text-center">
                        <span class="fs-15 text-uppercase text-base-color fw-600 ls-1px mb-10px d-block" data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'><?php the_field('home-s02-subtitle') ?></span>
                        <h3 class="alt-font text-dark-gray fw-600 ls-minus-1px sm-mb-20px" data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 150, "staggervalue": 300, "easing": "easeOutQuad" }'><?php the_field('home-s02-title') ?></h3>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center" data-anime='{ "el": "childs", "willchange": "transform", "scale":[0.95,1], "opacity": [0, 1], "duration": 400, "delay": 100, "staggervalue": 200, "easing": "easeOutQuad" }'>
                    <?php
                        $liczba_kafelek = get_field('home-s02-square-count');
                        for ($i = 1; $i <= $liczba_kafelek; $i++) {
                            $kafel_ikona = "home-s02-square-icon-" . $i;
                            $kafel_ikona_value = get_field($kafel_ikona);
                            $kafel_tytul = "home-s02-square-title-" . $i;
                            $kafel_tytul_value = get_field($kafel_tytul);
                            $kafel_tresc = "home-s02-square-text-" . $i;
                            $kafel_tresc_value = get_field($kafel_tresc);
                    ?>
                    <div class="col icon-with-text-style-04 transition-inner-all mb-30px">
                        <div class="feature-box hover-box transition dark-hover bg-white border-radius-6px pt-17 pb-17 ps-14 pe-14 last-paragraph-no-margin box-shadow-quadruple-large box-shadow-hover overflow-hidden">
                            <div class="feature-box-icon">
                                <i class="<?php echo $kafel_ikona_value; ?> text-base-color icon-extra-large text-light-opacity mb-20px"></i>
                            </div>
                            <div class="feature-box-content">
                                <span class="d-inline-block alt-font text-dark-gray fw-500 fs-18 mb-5px"><?php echo $kafel_tytul_value; ?></span>
                                <p class="text-light-opacity"><?php echo $kafel_tresc_value; ?></p>
                            </div>
                            <div class="feature-box-overlay bg-base-color"></div>
                        </div>  
                    </div>
                    <?php } ?>
                </div>
                <div class="row row-cols-1 row-cols-lg-3 row-cols-sm-2 align-items-center justify-content-center mt-6 xs-mt-8" data-anime='{ "el": "childs", "translateY":[0, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 100, "easing": "easeOutQuad" }'>
                    <div class="col border-end xs-border-end-0 border-color-transparent-dark-very-light md-mb-35px">
                        <div class="d-flex align-items-center justify-content-center">
                            <div class="flex-shrink-0 me-25px sm-me-15px">
                                <span class="fs-55 mb-0 text-dark-gray fw-700 ls-minus-2px"><?php the_field('home-s02-rating') ?></span>
                            </div>
                            <div class="text-dark-gray">
                                <div class="fs-14 lh-28">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                </div>
                                <span class="fs-17 lh-26 d-block fw-500"><?php the_field('home-s02-rating-numbers') ?></span>
                            </div>
                        </div>
                    </div>
                    <div class="col border-end md-border-end-0 border-color-transparent-dark-very-light md-mb-35px">
                        <div class="d-flex align-items-center justify-content-center">
                            <div class="flex-shrink-0 me-25px sm-me-15px">
                                <span class="fs-55 mb-0 text-dark-gray fw-700 ls-minus-2px"><?php the_field('home-s02-percent') ?><sup class="fs-30">%</sup></span>
                            </div>
                            <div class="text-dark-gray">
                                <span class="fs-17 lh-26 d-block fw-500"><?php the_field('home-s02-percent-title') ?></span>
                            </div>
                        </div>
                    </div> 
                    <div class="col">
                        <div class="d-flex align-items-center justify-content-center">
                            <div class="flex-shrink-0 me-25px sm-me-15px">
                                <span class="fs-55 mb-0 text-dark-gray fw-700 ls-minus-2px"><?php the_field('home-s02-number') ?><sup class="fs-30">+</sup></span>
                            </div>
                            <div class="text-dark-gray">
                                <span class="fs-17 lh-26 d-block fw-500"><?php the_field('home-s02-number-title') ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="half-section"> 
            <div class="container">
                <div class="row">
                    <div class="col-lg-6" data-anime='{ "translateX": [-15, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <?php echo wp_get_attachment_image( get_field('home-s03-img'), 'large', "" , array( "class" => "border-radius-8px col-img md-mb-30px" ) ); ?>
                    </div>
                    <div class="col-lg-5 offset-lg-1 position-relative align-self-center" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <span class="fs-15 text-uppercase text-base-color fw-600 ls-1px mb-10px d-block"><?php the_field('home-s03-subtitle') ?></span>
                        <h2 class="section-title"><?php the_field('home-s03-title') ?></h2>
                        <p class="mb-30px"><?php the_field('home-s03-text') ?></p>
                        <a href="<?php the_field('home-s03-button-link') ?>" class="btn btn-large btn-base-color btn-rounded inner-link"><?php the_field('home-s03-button-text') ?></a>
                    </div>
                </div>
            </div>
        </section>
        <div class="bg-solitude-blue">
            <section class="half-section"> 
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 position-relative align-self-start p-sticky top-110px md-mb-30px" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                            <span class="fs-15 text-uppercase text-base-color fw-600 ls-1px mb-10px d-block"><?php the_field('home-s04-subtitle') ?></span>
                            <h2 class="section-title"><?php the_field('home-s04-title') ?></h2>
                            <p class="mb-30px"><?php the_field('home-s04-text') ?></p>
                            <a href="<?php the_field('home-s04-button-link') ?>" class="btn btn-large btn-base-color btn-rounded inner-link"><?php the_field('home-s04-button-text') ?></a>
                        </div>
                        <div class="offset-lg-1 col-lg-6" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 800, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'>
                            <?php
                                $liczba_kafelek04 = get_field('home-s04-square-count');
                                for ($i = 1; $i <= $liczba_kafelek04; $i++) {
                                    $kafel_ikona04 = "home-s04-square-icon-" . $i;
                                    $kafel_ikona04_value = get_field($kafel_ikona04);
                                    $kafel_tytul04 = "home-s04-square-title-" . $i;
                                    $kafel_tytul04_value = get_field($kafel_tytul04);
                                    $kafel_tresc04 = "home-s04-square-text-" . $i;
                                    $kafel_tresc04_value = get_field($kafel_tresc04);
                            ?>
                            <div class="review-style-05 mb-15px">
                                <div class="border-radius-6px bg-white box-shadow-quadruple-large last-paragraph-no-margin">
                                    <div class="d-flex review-style-05-box align-items-center ps-45px pe-45px pt-30px pb-30px lg-p-25px">
                                        <i class="<?php echo $kafel_ikona04_value; ?> align-middle icon-extra-large text-base-color me-25px"></i>
                                        <div>
                                            <h3><?php echo $kafel_tytul04_value; ?></h3>
                                            <p><?php echo $kafel_tresc04_value; ?></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="half-section">
            <div class="container">
                <div class="row justify-content-center mb-4">
                    <div class="col-xl-7 col-lg-9 col-md-10 text-center">
                        <span class="fs-15 text-uppercase text-base-color fw-600 ls-1px mb-10px d-block" data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'><?php the_field('home-s06-subtitle') ?></span>
                        <h3 class="alt-font text-dark-gray fw-600 ls-minus-1px" data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 150, "staggervalue": 300, "easing": "easeOutQuad" }'><?php the_field('home-s06-title') ?></h3>
                    </div>
                </div>
                <div class="row align-items-center" data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 150, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div class="col-xl-3 col-lg-4 col-md-12 tab-style-05 md-mb-30px sm-mb-20px">
                        <ul class="nav nav-tabs justify-content-center border-0 text-left fw-500 fs-18 alt-font">
                            <?php
                                $liczba_stron = get_field('home-s06-page-count');
                                for ($i = 1; $i <= $liczba_stron; $i++) {
                                    $strona_tytul = "home-s06-page-title-" . $i;
                                    $strona_tytul_value = get_field($strona_tytul);
                                    $strona_ikona = "home-s06-page-icon-" . $i;
                                    $strona_ikona_value = get_field($strona_ikona);
                            ?>
                            <li class="nav-item"><a data-bs-toggle="tab" href="#tab_four<?php echo $i; ?>" class="nav-link d-flex align-items-center<?php if($i==1){echo ' active';}?>"><i class="<?php echo $strona_ikona_value; ?> icon-extra-medium text-dark-gray"></i><span><?php echo $strona_tytul_value; ?></span></a></li>
                            <?php } ?>
                        </ul>
                    </div>
                    <div class="col-xl-9 col-lg-8 col-md-12">
                        <div class="tab-content">
                            <?php
                                $liczba_stron = get_field('home-s06-page-count');
                                for ($i = 1; $i <= $liczba_stron; $i++) {
                                    $strona_img = "home-s06-page-img-" . $i;
                                    $strona_img_value = get_field($strona_img);
                                    $strona_edytor = "home-s06-page-editor-" . $i;
                                    $strona_edytor_value = get_field($strona_edytor);
                            ?>
                            <div class="tab-pane fade in<?php if($i==1){echo ' active show';}?>" id="tab_four<?php echo $i; ?>">
                                <div class="row align-items-center">
                                    <div class="col-md-6 offset-xl-1 sm-mb-30px">
                                        <?php echo wp_get_attachment_image($strona_img_value, '', '', array("class" => "col-img border-radius-6px w-100 h-650px")); ?>
                                    </div>
                                    <div class="col-xl-4 col-md-6 offset-xl-1 text-center text-md-start">
                                        <?php echo $strona_edytor_value; ?>
                                    </div>
                                </div>
                            </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="half-section">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-12 text-center">
                        <span class="fs-15 text-uppercase text-base-color fw-600 ls-1px mb-10px d-block" data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'><?php the_field('home-s07-subtitle') ?></span>
                        <h3 class="section-title mb-0" data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 150, "staggervalue": 300, "easing": "easeOutQuad" }'><?php the_field('home-s07-title') ?></h3>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-lg-8 row-cols-md-4 row-cols-sm-3 clients-style-06 justify-content-center" data-anime='{ "el": "childs", "scale": [0,1], "opacity": [0,1], "duration": 300, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                    <?php
                        $liczba_narzedzi = get_field('home-s07-logo-count');
                        for ($i = 1; $i <= $liczba_narzedzi; $i++) {
                            $narzedzie_logo = "home-s07-logo-" . $i;
                            $narzedzie_logo_value = get_field($narzedzie_logo);
                            $narzedzie_tytul = "home-s07-logo-title-" . $i;
                            $narzedzie_tytul_value = get_field($narzedzie_tytul);
                    ?>
                    <div class="col client-box text-center pt-5 pb-5 sm-pt-8 sm-pb-8">
                        <div><?php echo wp_get_attachment_image($narzedzie_logo_value, '', '', array("class" => "")); ?></div>
                        <span class="d-block mt-5px"><?php echo $narzedzie_tytul_value; ?></span>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </section>
        <section class="hafl-section pt-0 pb-40px">
            <div class="container">
                <div class="row align-items-center" data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div class="col-12">
                        <div class="bg-solitude-blue p-9 md-p-6 xs-p-9 border-radius-6px overflow-hidden position-relative">
                            <div class="position-absolute right-70px lg-right-20px top-minus-20px w-250px sm-w-180px xs-w-150px opacity-1"><?php echo wp_get_attachment_image( get_field('home-s08-img'), 'large', "" , array( "class" => "" ) ); ?></div>
                            <span class="fs-15 text-uppercase text-base-color fw-600 ls-1px mb-10px d-block"><?php the_field('home-s08-subtitle') ?></span>
                            <h3 class="alt-font fw-600 text-dark-gray ls-minus-1px"><?php the_field('home-s08-title') ?></h3> 
                            <div class="accordion accordion-style-02" id="accordion-style-02" data-active-icon="icon-feather-minus" data-inactive-icon="icon-feather-plus">
                                <?php
                                    $liczba_pytan = get_field('home-s08-faq-count');
                                    for ($i = 1; $i <= $liczba_pytan; $i++) {
                                        $pytanie_tytul = "home-s08-faq-title-" . $i;
                                        $pytanie_tytul_value = get_field($pytanie_tytul);
                                        $pytanie_tresc = "home-s08-faq-text-" . $i;
                                        $pytanie_tresc_value = get_field($pytanie_tresc);
                                ?>
                                <div class="accordion-item active-accordion">
                                    <div class="accordion-header border-bottom border-color-transparent-dark-very-light">
                                        <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-02-0<?php echo $i; ?>" aria-expanded="true" data-bs-parent="#accordion-style-02" aria-label="accordion">
                                            <div class="accordion-title mb-0 position-relative text-dark-gray pe-30px">
                                                <i class="feather <?php if($i==1){echo ' icon-feather-minus';}else{ echo 'icon-feather-plus'; }?> fs-20"></i><span class="fw-500"><?php echo $pytanie_tytul_value; ?></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div id="accordion-style-02-0<?php echo $i; ?>" class="accordion-collapse collapse<?php if($i==1){echo ' show';}?>" data-bs-parent="#accordion-style-02">
                                        <div class="accordion-body last-paragraph-no-margin border-bottom border-color-transparent-dark-very-light">
                                            <p class="w-90 sm-w-95 xs-w-100"><?php echo $pytanie_tresc_value; ?></p>
                                        </div>
                                    </div>
                                </div>
                                <?php } ?>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        <section id="formularz" class="half-section">
            <div class="container"> 
                <div class="row g-0 justify-content-center align-items-center">
                    <div class="col-lg-6" data-anime='{ "translateX": [-15, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <span class="fs-15 text-uppercase text-base-color fw-600 ls-1px mb-10px d-block"><?php the_field('home-s09-subtitle') ?></span>
                        <h2 class="section-title"><?php the_field('home-s09-title') ?></h2>
                        <p><?php the_field('home-s09-text') ?></p>
                    </div>
                    <div class="col-lg-5 offset-lg-1">  
                        <?php echo do_shortcode( '[contact-form-7 id="5152024" title="Formularz kontaktowy"]' ); ?>
                    </div>  
                </div>
            </div>
        </section>
        <?php get_footer(); ?>