<?php /*Template Name: Kontakt*/ ?>
        <?php get_header(); ?>
        <section class="page-title-big-typography bg-dark-gray ipad-top-space-margin" data-parallax-background-ratio="0.5" style="background-image: url(<?php the_field('subpage-baner-img-1') ?>)">
            <div class="opacity-extra-medium bg-dark-slate-blue"></div>
            <div class="container">
                <div class="row align-items-center justify-content-center extra-small-screen">
                    <div class="col-12 position-relative text-center page-title-extra-large">
                        <h1 class="m-auto text-white text-shadow-double-large fw-500 ls-minus-3px xs-ls-minus-2px" data-anime='{ "translateY": [15, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'><?php the_field('subpage-baner-title-1') ?></h1>
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
        <section id="down-section" class="overflow-hidden">
            <div class="container"> 
                <div class="row g-0 justify-content-center">
                    <div class="col-lg-3 col-md-6" data-anime='{ "translateX": [-15, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <div class="h-100 sm-h-500px xs-h-400px cover-background" style="background-image: url(<?php the_field('contact-img') ?>)"></div>
                    </div>
                    <div class="col-lg-4 col-md-6" data-anime='{ "translateX": [15, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <div class="bg-base-color p-18 lg-p-15 h-100"> 
                            <?php the_field('contact-editor') ?>  
                        </div>
                    </div>
                    <div class="col-lg-4 offset-lg-1">  
                        <div class="pt-5 md-pt-45px contact-form-style-01" data-anime='{ "translateX": [0, 0], "opacity": [0,1], "duration": 600, "delay": 300, "staggervalue": 300, "easing": "easeOutQuad" }'>
                            <h2 class="section-title d-inline-block alt-font text-dark-gray"><?php the_field('contact-form-title') ?></h2>
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