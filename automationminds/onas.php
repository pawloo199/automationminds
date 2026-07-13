 <?php /*Template Name: O nas */ ?>        
        <?php get_header(); ?>       
        <section class="page-title-big-typography bg-dark-gray ipad-top-space-margin" data-parallax-background-ratio="0.5" style="background-image: url(<?php the_field('subpage-baner-img-1') ?>)">
            <div class="opacity-extra-medium bg-dark-slate-blue"></div>
            <div class="container">
                <div class="row align-items-center justify-content-center extra-small-screen">
                    <div class="col-12 position-relative text-center page-title-extra-large">
                        <h1 class="m-auto text-white fw-500 ls-minus-3px xs-ls-minus-2px" data-anime='{ "translateY": [15, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'><?php the_field('subpage-baner-title-1') ?></h1>
                    </div>
                    <div class="down-section text-center" data-anime='{ "translateY": [-15, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <a href="#down-section" aria-label="scroll down" class="section-link">
                            <div class="d-flex justify-content-center align-items-center mx-auto rounded-circle fs-30 text-white">
                                <i class="feather icon-feather-chevron-down"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="half-section" id="down-section"> 
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 position-relative align-self-center md-order-1" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <span class="fs-15 text-uppercase text-base-color fw-600 ls-1px mb-10px d-block"><?php the_field('home-s01-subtitle') ?></span>
                        <h1 class="section-title"><?php the_field('home-s01-title') ?></h1>
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
                        <a href="<?php the_field('home-s01-button-link') ?>" class="btn btn-large btn-base-color btn-rounded popup-with-form"><?php the_field('home-s01-button-text') ?></a>
                        <?php } ?>
                    </div>
                    <div class="offset-lg-1 col-lg-6 md-mb-30px" data-anime='{ "translateX": [15, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <?php echo wp_get_attachment_image( get_field('home-s01-img'), 'large', "" , array( "class" => "border-radius-8px col-img h-650px" ) ); ?>
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
                                <h2 class="mb-0 text-dark-gray fw-700 ls-minus-2px"><?php the_field('home-s02-rating') ?></h2>
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
                                <h2 class="mb-0 text-dark-gray fw-700 ls-minus-2px"><?php the_field('home-s02-percent') ?><sup class="fs-30">%</sup></h2>
                            </div>
                            <div class="text-dark-gray">
                                <span class="fs-17 lh-26 d-block fw-500"><?php the_field('home-s02-percent-title') ?></span>
                            </div>
                        </div>
                    </div> 
                    <div class="col">
                        <div class="d-flex align-items-center justify-content-center">
                            <div class="flex-shrink-0 me-25px sm-me-15px">
                                <h2 class="mb-0 text-dark-gray fw-700 ls-minus-2px"><?php the_field('home-s02-number') ?><sup class="fs-30">+</sup></h2>
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
                        <?php if (get_field('home-s01-button-link')) { ?>
                        <a href="<?php the_field('home-s03-button-link') ?>" class="btn btn-large btn-base-color btn-rounded popup-with-form"><?php the_field('home-s03-button-text') ?></a>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </section>
<?php get_footer(); ?>