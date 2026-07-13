<?php /*Template Name: Podstrony - Usługi */ ?>        
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
                        <a href="<?php the_field('home-s01-button-link') ?>" class="btn btn-large btn-base-color btn-rounded popup-with-form"><?php the_field('home-s01-button-text') ?></a>
                        <?php } ?>
                    </div>
                    <div class="offset-lg-1 col-lg-6 md-mb-30px" data-anime='{ "translateX": [15, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <?php echo wp_get_attachment_image( get_field('home-s01-img'), 'large', "" , array( "class" => "border-radius-8px col-img h-650px" ) ); ?>
                    </div>
                </div>
            </div>
        </section>
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
        <section class="half-section"> 
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 position-relative align-self-center mb-30px" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <span class="fs-15 text-uppercase text-base-color fw-600 ls-1px mb-10px d-block text-center"><?php the_field('subpage-schema-subtitle') ?></span>
                        <h3 class="section-title text-center"><?php the_field('subpage-schema-title') ?></h3>
                        <p><?php the_field('subpage-schema-text') ?></p>
                    </div>
                    <div class="col-xl-10">
                        <div class="process-steps-col" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 800, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'>
                            <div class="step arrow-right box-shadow-quadruple-large">
                                <i class="<?php the_field('subpage-schema-icon-1') ?> align-middle icon-large text-base-color me-25px"></i>
                                <?php the_field('subpage-schema-text-1') ?>
                            </div>
                            <div class="step arrow-down box-shadow-quadruple-large">
                                <i class="<?php the_field('subpage-schema-icon-2') ?> align-middle icon-large text-base-color me-25px"></i>
                                <?php the_field('subpage-schema-text-2') ?>
                            </div>
                            <div class="step arrow-left order-1 sm-order-0 box-shadow-quadruple-large">
                                <i class="<?php the_field('subpage-schema-icon-3') ?> align-middle icon-large text-base-color me-25px"></i>
                                <?php the_field('subpage-schema-text-3') ?>
                            </div>
                            <div class="step arrow-down box-shadow-quadruple-large">
                                <i class="<?php the_field('subpage-schema-icon-4') ?> align-middle icon-large text-base-color me-25px"></i>
                                <?php the_field('subpage-schema-text-4') ?>
                            </div>
                            <div class="step arrow-right order-2 sm-order-0 box-shadow-quadruple-large">
                                <i class="<?php the_field('subpage-schema-icon-5') ?> align-middle icon-large text-base-color me-25px"></i>
                                <?php the_field('subpage-schema-text-5') ?>
                            </div>
                            <div class="step arrow-up order-3 sm-order-0 box-shadow-quadruple-large">
                                <i class="<?php the_field('subpage-schema-icon-6') ?> align-middle icon-large text-base-color me-25px"></i>
                                <?php the_field('subpage-schema-text-6') ?>
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
                        <p class="mb-30px"><?php echo get_field('home-s03-text') ?></p>
                        <?php if (get_field('home-s03-button-link')) { ?>
                        <a href="<?php the_field('home-s03-button-link') ?>" class="btn btn-large btn-base-color btn-rounded popup-with-form"><?php the_field('home-s03-button-text') ?></a>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </section>
        <section class="half-section">
            <div class="container"> 
                <div class="row g-0 justify-content-center align-items-center">
                    <div class="col-lg-6" data-anime='{ "translateX": [-15, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <span class="fs-15 text-uppercase text-base-color fw-600 ls-1px mb-10px d-block"><?php the_field('home-s09-subtitle') ?></span>
                        <h2 class="section-title"><?php the_field('home-s09-title') ?></h2>
                        <p><?php the_field('home-s09-text') ?></p>
                    </div>
                    <div class="col-lg-5 offset-lg-1">  
                        <div class="pt-5 md-pt-15px contact-form-style-01" data-anime='{ "translateX": [0, 0], "opacity": [0,1], "duration": 600, "delay": 300, "staggervalue": 300, "easing": "easeOutQuad" }'>
                            <form action="" method="post">
                                <div class="position-relative form-group mb-20px">
                                    <input type="email" name="email" class="form-control required" placeholder="Email*">
                                </div> 
                                <div class="position-relative form-group mb-20px">
                                    <input type="phone" name="phone" class="form-control required" placeholder="Telefon*">
                                </div> 
                                <div class="position-relative form-group form-textarea">
                                    <textarea placeholder="Treść zapytania" name="comment" class="form-control" rows="3"></textarea>
                                    <div class="g-recaptcha mt-20px" data-sitekey=""></div>
                                    <input type="hidden" name="redirect" value="">
                                    <button class="btn btn-large btn-base-color btn-rounded mt-20px m-auto submit" type="submit">Wyślij zapytanie</button>
                                    <div class="form-results mt-20px d-none"></div>
                                </div>
                            </form>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
        <?php get_footer(); ?>