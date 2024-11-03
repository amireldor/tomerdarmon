(function ($) {
  
  "use strict";

    // AOS ANIMATIONS
    AOS.init();

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
  
    // Lightbox functionality
    document.addEventListener('DOMContentLoaded', function () {
        const lightboxLinks = document.querySelectorAll('.lightbox');

        lightboxLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                
                const existingLightbox = document.querySelector('.lightbox-overlay');
                if (existingLightbox) {
                    existingLightbox.remove();
                }
                
                const lightboxOverlay = document.createElement('div');
                lightboxOverlay.classList.add('lightbox-overlay', 'active');

                const img = document.createElement('img');
                img.src = this.href;
                img.classList.add('lightbox-image');
                lightboxOverlay.appendChild(img);

                document.body.appendChild(lightboxOverlay);

                lightboxOverlay.addEventListener('click', function () {
                    lightboxOverlay.remove();
                });
            });
        });
    });

    // NEWS IMAGE RESIZE
    function NewsImageResize() {
        // בדוק אם האלמנט עם class 'navbar' קיים
        if ($(".navbar").length) {
            $(".navbar").scrollspy({ offset: -76 });
        } else {
            console.warn('Navbar element not found!');
        }

        // בדוק אם האלמנט עם class 'large-news-image' קיים
        var largeImageElement = $('.large-news-image');
        if (largeImageElement.length) {
            var LargeImage = largeImageElement.height();
            var MinusHeight = LargeImage - 6;

            // בדוק אם האלמנט עם class 'news-two-column' קיים
            var newsTwoColumnElement = $('.news-two-column');
            if (newsTwoColumnElement.length) {
                newsTwoColumnElement.css({'height': (MinusHeight - LargeImage / 2) + 'px'});
            } else {
                console.warn('News two-column element not found!');
            }
        } 
    }

    // הפעלת הפונקציה על resize ועל ready
    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

    // אנימציית גלילה
    $('a[href*="#"]').click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 66
                }, 400);
            }
        }
    });
    
})(window.jQuery);
