        <footer class="p-0 fs-16 border-top border-color-extra-medium-gray">
            <div class="container"> 
                <div class="row justify-content-center pt-50px pb-50px sm-pt-40px sm-pb-40px">
                    <div class="col-12 col-lg-10">
                        <p class="mb-0 text-center fs-12 lh-18">Administratorem danych wprowadzonych do formularza jest firma Automation Minds. Dane osobowe będą przetwarzane w celu nawiązania kontaktu i udzielenia odpowiedzi na pytania. Więcej informacji o przysługujących prawach i zasadach przetwarzania danych, dostępne jest w polityce prywatności.</p>
                    </div>
                </div>
            </div> 
        </footer>
        <div class="scroll-progress d-none d-xxl-block">
            <a href="#" class="scroll-top" aria-label="scroll">
                <span class="scroll-text">Scroll</span><span class="scroll-line"><span class="scroll-point"></span></span>
            </a>
        </div>
        
        <!-- CONTACT FORM -->
        <div id="contact-form" class="container p-0 contact-form-style-01 position-relative text-center mfp-hide">
            <div class="row g-0">
                <div class="col-lg-12">
                    <div class="p-10 bg-white border-radius-6px">
                        <span class="fs-18 mb-10px">Looking for a finance agent?</span>
                        <h3 class="fw-600 text-dark-gray mb-40px ls-minus-1px">How we can help you?</h3>
                        <form action="email-templates/contact-form.php" method="post">
                            <div class="position-relative form-group mb-20px">
                                <span class="form-icon"><i class="bi bi-emoji-smile"></i></span>
                                <input type="text" name="name" class="form-control required" placeholder="Enter your name*" />
                            </div>
                            <div class="position-relative form-group mb-20px">
                                <span class="form-icon"><i class="bi bi-envelope"></i></span>
                                <input type="email" name="email" class="form-control required" placeholder="Enter your email*" />
                            </div>
                            <div class="position-relative form-group mb-20px">
                                <span class="form-icon"><i class="bi bi-telephone-outbound"></i></span>
                                <input type="tel" name="phone" class="form-control" placeholder="Enter your phone" />
                            </div>
                            <div class="position-relative form-group form-textarea">
                                <span class="form-icon"><i class="bi bi-chat-square-dots"></i></span>
                                <textarea placeholder="Your message" name="comment" class="form-control" rows="3"></textarea>
                                <input type="hidden" name="redirect" value="">
                                <button class="btn btn-medium btn-base-color btn-box-shadow btn-rounded w-100 mt-20px submit" type="submit">Send message</button>
                                <div class="form-results mt-20px d-none"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <?php wp_footer(); ?>
        <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/jquery.js"></script>
        <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/vendors.min.js"></script>
        <!--<script type="text/javascript" src="assets/js/vendors/bootstrap.bundle.js"></script>
        <script type="text/javascript" src="assets/js/vendors/anime.min.js"></script>
        <script type="text/javascript" src="assets/js/vendors/imagesloaded.pkgd.js"></script>
        <script type="text/javascript" src="assets/js/vendors/jquery.appear.js"></script>
        <script type="text/javascript" src="assets/js/vendors/jquery.mcustomscrollbar.concat.min.js"></script>
        <script type="text/javascript" src="assets/js/vendors/smooth-scroll.js"></script>-->
        <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/main.js"></script>
    </body>
</html>