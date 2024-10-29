( function ( $, elementor ) {
    "use strict";

    var Geobin = {

        init: function () {

            var widgets = {
                'xs-maps.default': Geobin.Map,
                'xs-slider.default': Geobin.Slider,
                'xs-sync-slider.default': Geobin.SyncSlider,
                'xs-partner.default': Geobin.PartnerCarousel,
                'xs-testimonial.default': Geobin.TestimonialCarousel,
                'simple-slider.default': Geobin.SimpleSlider,
                'xs-fun-fact.default': Geobin.FunFact,
                'xs-services.default': Geobin.ServiceCarousel,
            };

            $.each( widgets, function ( widget, callback ) {
                elementor.hooks.addAction( 'frontend/element_ready/' + widget, callback );
            } );

        },

     

        /*Main Slideshow*/
        Slider: function ( $scope ) {
            var carousel = $scope.find( '.tw-hero-slider' );
            if ( !carousel.length ) {
                return;
            }
             var settings = carousel.data('settings');
             var smartSpeed = settings.slider_speed;
            if(smartSpeed === undefined || smartSpeed === '' || smartSpeed === null) {
                smartSpeed = 1100;
            }

            carousel.owlCarousel( {
                items: 1,
                loop: true,
                autoplay: true,
                nav: true,
                dots: false,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
                mouseDrag: true,
                smartSpeed: smartSpeed,
                navText: [ '<i class="icon icon-left-arrow2">', '<i class="icon icon-right-arrow2">' ],
                responsive: {
                    0: {
                        mouseDrag: false,
                    },
                    600: {
                        mouseDrag: false,
                    },
                    1000: {
                        mouseDrag: true,
                    },
                },
            } );
        },

        /* Sync Slider */
        SyncSlider: function ( $scope ) {
            var carousel = $scope.find( '.tw-sync-slider');
            var carousel2 = $scope.find( '.tw-sync-slider2');
            if ( !carousel.length ) {
                return;
            }
            var settings = carousel.data('settings');
            var smartSpeed = settings.slider_speed;
            if(smartSpeed === undefined || smartSpeed === '' || smartSpeed === null) {
                smartSpeed = 1100;
            }
            var slidesPerPage = 4; 
            var syncedSecondary = true;

            carousel.owlCarousel({
                items : 1,
                slideSpeed : 2000,
                nav: true,
                autoplay: true,
                dots: true,
                loop: true,
                responsiveRefreshRate : 200,
                autoplayHoverPause: true,
                mouseDrag: true,
                smartSpeed: smartSpeed,
                responsive: {
                    0: {
                        mouseDrag: false,
                    },
                    600: {
                        mouseDrag: false,
                    },
                    1000: {
                        mouseDrag: true,
                    },
                },
                navText: [ '<i class="icon icon-arrow-left"></i><span>Previous slide</span>', '<span>Next slide</span><i class="icon icon-arrow-right">' ],
            }).on('changed.owl.carousel', syncPosition);
            

            carousel2.on('initialized.owl.carousel', function () {
                carousel2.find(".owl-item").eq(0).addClass("current");
            }).owlCarousel({
                items : slidesPerPage,
                dots: true,
                nav: false,
                smartSpeed: 200,
                loop: false,
                slideSpeed : 500,
                slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate : 100,
                responsive: {
                    0: {
                        items : 2,
                    },
                    768: {
                        items : 2,
                    },
                    992: {
                        items : 3,
                    },
                    1024: {
                        items : slidesPerPage,
                    }
                 }
            }).on('changed.owl.carousel', syncPosition2);
            function syncPosition(el) {
                //if you set loop to false, you have to restore this next line
                //var current = el.item.index;
                
                //if you disable loop you have to comment this block
                var count = el.item.count-1;
                var current = Math.round(el.item.index - (el.item.count/2) - .5);
                
                if(current < 0) {
                  current = count;
                }
                if(current > count) {
                  current = 0;
                }
                
                //end block
            
            carousel2.find(".owl-item")
                  .removeClass("current")
                  .eq(current)
                  .addClass("current");
                var onscreen = carousel2.find('.owl-item.active').length - 1;
                var start = carousel2.find('.owl-item.active').first().index();
                var end = carousel2.find('.owl-item.active').last().index();
                
                if (current > end) {
                    carousel2.data('owl.carousel').to(current, 100, true);
                }
                if (current < start) {
                    carousel2.data('owl.carousel').to(current - onscreen, 100, true);
                }
            }
              
            function syncPosition2(el) {
                if(syncedSecondary) {
                  var number = el.item.index;
                  carousel.data('owl.carousel').to(number, 100, true);
                }
            }
              
            carousel2.on("click", ".owl-item", function(e){
                e.preventDefault();
                var number = $(this).index();
                carousel.data('owl.carousel').to(number, 300, true);
            });
        },

        /* Client carousel */
        PartnerCarousel: function ( $scope ) {
            var carousel = $scope.find( '.clients-carousel' );
            if ( !carousel.length ) {
                return;
            }
            carousel.owlCarousel( {
                items: 4,
                loop: true,
                nav: false,
                dots: true,
                autoplay: true,
                responsiveClass: true,
                autoplayHoverPause: true,
                mouseDrag: true,
                smartSpeed: 900,
                responsive: {
                    0: {
                        mouseDrag: false,
                        items: 1,

                    },
                    600: {
                        mouseDrag: false,
                        items: 2,

                    },
                    1000: {
                        mouseDrag: true,
                        items: 4,

                    },
                },

            } );
        },

        /*Testimonial Slider*/
        TestimonialCarousel: function ( $scope ) {
            var carousel = $scope.find( '.tw-testimonial-carousel' );
            var carousel_box = $scope.find( '.testimonial-box-carousel' );
            var gray_carousel = $scope.find( '.testimonial-carousel-gray' );
            var carousel_sandard = $scope.find( '.testimonial-slider' );
            var carousel_classic = $scope.find( '.testimonial-slider-classic' );

            if ( carousel.length > 0 ) {
                carousel.owlCarousel( {
                    items: 1,
                    loop: true,
                    autoplay: true,
                    nav: false,
                    dots: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    mouseDrag: true,
                    smartSpeed: 900,
                    responsive: {
                        0: {
                            mouseDrag: false,
                        },
                        600: {
                            mouseDrag: false,
                        },
                        1000: {
                            mouseDrag: true,
                        },
                    },
                } );
            }
            if ( carousel_sandard.length > 0 ) {
                carousel_sandard.owlCarousel( {
                    items: 1,
                    loop: true,
                    autoplay: true,
                    nav: false,
                    dots: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    mouseDrag: true,
                    smartSpeed: 900,

                    responsive: {
                        0: {
                            mouseDrag: false,
                        },
                        600: {
                            mouseDrag: false,
                        },
                        1000: {
                            mouseDrag: false,
                        },
                    },
                } );
            }
            if ( carousel_classic.length > 0 ) {
                carousel_classic.owlCarousel( {
                    items: 1,
                    loop: true,
                    autoplay: true,
                    nav: true,
                    dots: false,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    mouseDrag: true,
                    smartSpeed: 900,
                    navText: [ '<i class="icon icon-chevron-left">', '<i class="icon icon-chevron-right">' ],

                    responsive: {
                        0: {
                            mouseDrag: false,
                            nav: false,

                        },
                        600: {
                            mouseDrag: false,
                            nav: false,

                        },
                        1000: {
                            mouseDrag: false,
                        },
                    },
                } );
            }

            /* Testimonial Box Carousel */
            if ( carousel_box.length > 0 ) {
                carousel_box.owlCarousel( {
                    items: 3,
                    margin: 20,
                    loop: true,
                    autoplay: true,
                    nav: false,
                    dots: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    mouseDrag: true,
                    responsiveClass: true,
                    smartSpeed: 900,
                    responsive: {
                        0: {
                            mouseDrag: false,
                            items: 1,

                        },
                        600: {
                            mouseDrag: false,
                            items: 2,

                        },
                        1000: {
                            mouseDrag: true,
                            items: 3,

                        },
                    },

                } );
            }
            ;


            /* Testimonial Gray carousel */
            if ( gray_carousel.length > 0 ) {
                gray_carousel.owlCarousel( {
                    items: 2,
                    margin: 20,
                    loop: true,
                    autoplay: true,
                    nav: false,
                    dots: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    mouseDrag: true,
                    smartSpeed: 900,
                    responsive: {
                        0: {
                            mouseDrag: false,
                            items: 1,
                        },
                        600: {
                            mouseDrag: false,
                        },
                        1000: {
                            mouseDrag: true,
                        },
                    },
                } );
            }
            ;

        },

        /* Our Mission Carousel */
        SimpleSlider: function ( $scope ) {
            var carousel = $scope.find( '.mission-carousel' );
            if ( !carousel.length ) {
                return;
            }

            carousel.owlCarousel( {
                items: 1,
                loop: true,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayHoverPause: true,
                mouseDrag: true,
                smartSpeed: 900,
                animateOut: 'animated slideInRight',
                animateIn: 'animated slideInRight',
                responsive: {
                    0: {
                        mouseDrag: false,
                    },
                    600: {
                        mouseDrag: false,
                    },
                    1000: {
                        mouseDrag: true,
                    },
                },
            } );
        },

        /* Pie Chart */
        FunFact: function ( $scope ) {
            var piecahrt = $scope.find( '.chart' );
            if ( !piecahrt.length ) {
                return;
            }

            piecahrt.easyPieChart( {
                //your configuration goes here
            } );

        },

        /* Service List Box Carousel */
        ServiceCarousel: function ( $scope ) {
            var service_carousel = $scope.find( '.service-list-carousel' );
            if ( !service_carousel.length ) {
                return;
            }
            service_carousel.owlCarousel( {
                items: 3,
                loop: true,
                margin: 10,
                autoplay: true,
                nav: true,
                navText: [ '<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>' ],
                dots: false,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                mouseDrag: true,
                responsiveClass: true,
                smartSpeed: 900,
                responsive: {
                    0: {
                        mouseDrag: false,
                        items: 1,
                    },
                    600: {
                        mouseDrag: false,
                        items: 2,
                    },
                    1000: {
                        mouseDrag: true,
                        items: 3,
                        margin: 5,

                    },
                },

            } );
        },

        /* Testimonial Box Carousel */

    };

    $( window ).on( 'elementor/frontend/init', Geobin.init );

}( jQuery, window.elementorFrontend ) );