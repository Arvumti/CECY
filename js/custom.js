jQuery(document).ready(function ($) {
    "use strict";
    //Validacion pretty foto
    $('a[data-rel]').each(function () {
        $(this).attr('rel', $(this).data('rel'));
    });

    //Función Login
    $('.navigation-area a.inicio_sesion').click(function () {
        if ($(this).attr('id') == 'active-btn') {
            $(this).attr('id', 'no-active-btn');
            $('.caja_busqueda').animate({
                top: '-300px',

            });
        } else {
            $(this).attr('id', 'active-btn');
            $('.caja_busqueda').animate({
                top: '53px',

            });
        }
    });

    //Header Login
    $('.head-topbar a.inicio_sesion').click(function () {
        if ($(this).attr('id') == 'active-btn') {
            $(this).attr('id', 'no-active-btn');
            $('.caja_busqueda').animate({
                top: '-100px',

            });
        } else {
            $(this).attr('id', 'active-btn');
            $('.caja_busqueda').animate({
                top: '41px',

            });
        }
    });

    //Search Click Function For Footer Menu
    $('.header-nav').click(function () {
        if ($(this).attr('id') == 'bottom-active-btn') {
            $(this).attr('id', 'no-bottom-active-btn');
            $('.footer-menu').animate({
                left: '416px',
            });
        } else {
            $(this).attr('id', 'bottom-active-btn');
            $('.footer-menu').animate({
                left: '0px',

            });
        }
    });

    //Noticias timer
    if ($('.defaultCountdown').length) {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('.defaultCountdown').countdown({
            until: austDay
        });
        $('#year').text(austDay.getFullYear());
    }

    //Por venir Slider
    if ($('#upcoming-news-slider').length) {
        $('#upcoming-news-slider').bxSlider({
            infiniteLoop: false,
            hideControlOnEnd: true,
            default: 4000
        });
    }

    //Twitter Footer Fade Slider
    if ($('#twitter-fade').length) {
        $('#twitter-fade').bxSlider({
            mode: 'fade',
            captions: true,
            auto: true
        });
    }

    //Inicio funcion Banner 
    if ($('#banner_inicio').length) {
        $('#banner_inicio').bxSlider({
            infiniteLoop: false,
            hideControlOnEnd: true,
            default: 4000
        });
    }

    //Blog Post Slider
    if ($('#blog-post').length) {
        $('#blog-post').bxSlider({
            infiniteLoop: false,
            hideControlOnEnd: true,
            default: 4000
        });
    }

    //Project Detail Slider
    if ($('#noticia_slider').length) {
        $('#noticia_slider').bxSlider({
            infiniteLoop: false,
            hideControlOnEnd: true,
            default: 4000
        });
    }

    //Linea dek tiempo
    if ($('#timeline-project').length) {
        $('#timeline-project').bxSlider({
            infiniteLoop: false,
            hideControlOnEnd: true,
            default: 4000
        });
    }

    //Shortcodes Testimonials Slider
    if ($('#testimonials').length) {
        $('#testimonials').bxSlider({
            infiniteLoop: false,
            hideControlOnEnd: true,
            default: 4000
        });
    }

    //Shortcodes Testimonials 2 Slider
    if ($('#testimonials-2').length) {
        $('#testimonials-2').bxSlider({
            mode: 'fade',
            auto: true,
            captions: true
        });
    }

    //Flexslider Evento
    if ($('#flexiselDemo1').length) {
        $("#flexiselDemo1").flexisel({
            visibleItems: 5,
            animationSpeed: 1000,
            autoPlay: false,
            autoPlaySpeed: 3000,
            pauseOnHover: true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: {
                portrait: {
                    changePoint: 480,
                    visibleItems: 1
                },
                landscape: {
                    changePoint: 640,
                    visibleItems: 2
                },
                tablet: {
                    changePoint: 768,
                    visibleItems: 3
                }
            }
        });
    }

    //Tab Active Function
    if ($('.accordion-body').length) {
        $('.accordion-body').on('show',
            function (e) {
                $(e.currentTarget).parent().find('.accordion-heading').addClass('active')
            }
        )

        $('.accordion-body').on('hide',
            function (e) {
                $(e.currentTarget).parent().find('.accordion-heading').removeClass('active')
            }
        )
    }

    //Filtro
    if ($('#obras_lista').length) {
	jQuery(window).load(function() {
        var filter_container = jQuery('#obras_lista');

        filter_container.children().css('position', 'absolute');
        filter_container.masonry({
            singleMode: true,
            itemSelector: '.obras_item:not(.hide)',
            animate: true,
            animationOptions: {
                duration: 800,
                queue: false
            }
        });
        jQuery(window).resize(function () {
            var temp_width = filter_container.children().filter(':first').width();
            filter_container.masonry({
                columnWidth: temp_width,
                singleMode: true,
                itemSelector: '.obras_item:not(.hide)',
                animate: true,
                animationOptions: {
                    duration: 800,
                    queue: false
                }
            });
        });
        jQuery('ul#filtro_items a').click(function () {

            jQuery(this).addClass("active");
            jQuery(this).parents("li").siblings().children("a").removeClass("active");
            //e.preventDefault();

            var select_filter = jQuery(this).attr('data-value');

            if (select_filter == "All" || jQuery(this).parent().index() == 0) {
                filter_container.children().each(function () {
                    if (jQuery(this).hasClass('hide')) {
                        jQuery(this).removeClass('hide');
                        jQuery(this).fadeIn();
                    }
                });
            } else {
                filter_container.children().not('.' + select_filter).each(function () {
                    if (!jQuery(this).hasClass('hide')) {
                        jQuery(this).addClass('hide');
                        jQuery(this).fadeOut();
                    }
                });
                filter_container.children('.' + select_filter).each(function () {
                    if (jQuery(this).hasClass('hide')) {
                        jQuery(this).removeClass('hide');
                        jQuery(this).fadeIn();
                    }
                });
            }

            filter_container.masonry();

        });
	});	
    }

    //Tab Function
    if ($('#myTab').length) {
        $('#myTab a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        })
    }


    //Google Map on Contact Page
    if ($('#map_contact_1').length) {
        var map;
        var myLatLng = new google.maps.LatLng(24.0277202, -104.65317590000001);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                stylers: [{
                    hue: '#ba131a'
                }, {
                    saturation: -30
                }, {
                    lightness: 10
                }]
            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_1'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
        //End marker

        //Set info window
        var infowindow = new google.maps.InfoWindow({
            content: '',
            position: myLatLng
        });
        infowindow.open(map);
    }

    //Google Map on Event Detail Page
    if ($('#map_contact_2').length) {
        var map;
        var myLatLng = new google.maps.LatLng(24.0277202, -104.65317590000001);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                saturation: -100,
                lightness: 10

            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_2'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
        //End marker

        //Set info window
        var infowindow = new google.maps.InfoWindow({
            content: '',
            position: myLatLng
        });
        infowindow.open(map);
    }

    //Google Map on Event Page
    if ($('#map_contact_3').length) {
        var map;
        var myLatLng = new google.maps.LatLng(24.0277202, -104.65317590000001);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                saturation: -100,
                lightness: 10

            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_3'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
        //End marker

        //Set info window
        var infowindow = new google.maps.InfoWindow({
            content: '',
            position: myLatLng
        });
        infowindow.open(map);
    }

    //Google Map on Event Page
    if ($('#map_contact_4').length) {
        var map;
        var myLatLng = new google.maps.LatLng(24.0277202, -104.65317590000001);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                stylers: [{
                    hue: '#ba131a'
                }, {
                    saturation: -30
                }, {
                    lightness: 10
                }]
            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_4'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
        //End marker

        //Set info window
        var infowindow = new google.maps.InfoWindow({
            content: '',
            position: myLatLng
        });
        infowindow.open(map);
    }

    //Google Map on Event Page
    if ($('#map_contact_5').length) {
        var map;
        var myLatLng = new google.maps.LatLng(24.0277202, -104.65317590000001);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                saturation: -100,
                lightness: 10

            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_5'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
        //End marker

        //Set info window
        var infowindow = new google.maps.InfoWindow({
            content: '',
            position: myLatLng
        });
        infowindow.open(map);
    }

    //Google Map on Event Page
    if ($('#map_contact_6').length) {
        var map;
        var myLatLng = new google.maps.LatLng(24.0277202, -104.65317590000001);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                stylers: [{
                    hue: '#00FF55'
                }, {
                    saturation: -30
                }, {
                    lightness: 10
                }]
            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_6'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
        //End marker

        //Set info window
        var infowindow = new google.maps.InfoWindow({
            content: '',
            position: myLatLng
        });
        infowindow.open(map);
    }

    //Google Map on Event Page
    if ($('#map_contact_7').length) {
        var map;
        var myLatLng = new google.maps.LatLng(24.0277202, -104.65317590000001);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                saturation: -100,
                lightness: 10

            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_7'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
        //End marker

        //Set info window
        var infowindow = new google.maps.InfoWindow({
            content: '',
            position: myLatLng
        });
        infowindow.open(map);
    }

    //Google Map on Event Page
    if ($('#map_contact_8').length) {
        var map;
        var myLatLng = new google.maps.LatLng(24.0277202, -104.65317590000001);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                stylers: [{
                    hue: '#0073FF'
                }, {
                    saturation: -30
                }, {
                    lightness: 10
                }]
            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_8'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
        //End marker

        //Set info window
        var infowindow = new google.maps.InfoWindow({
            content: '',
            position: myLatLng
        });
        infowindow.open(map);
    }

    //Google Map on Event Page
    if ($('#map_contact_9').length) {
        var map;
        var myLatLng = new google.maps.LatLng(24.0277202, -104.65317590000001);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                saturation: -100,
                lightness: 10

            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_9'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
        //End marker

        //Set info window
        var infowindow = new google.maps.InfoWindow({
            content: '',
            position: myLatLng
        });
        infowindow.open(map);
    }

    //Google Map on Header 2 Page in Detail
    if ($('#map_contact_01').length) {
        var map;
        var myLatLng = new google.maps.LatLng(24.0277202, -104.65317590000001);
        //Initialize MAP
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                saturation: -100,
                lightness: 10

            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_01'), myOptions);
        //End Initialize MAP
        //Set Marker
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
        //End marker

        //Set info window
        var infowindow = new google.maps.InfoWindow({
            content: '',
            position: myLatLng
        });
        infowindow.open(map);
    }


    //Pretty Photo foto guapa
   if ($('.gallery').length) {
        $(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'normal',
            theme: 'light_square',
            slideshow: 3000,
            autoplay_slideshow: true
        });
        $(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'fast',
            slideshow: 10000,
            hideflash: true
        });
    }

    //Galeria 
    if ($('#container').length) {
        $('#container').BlocksIt({
            numOfCol: 4,
            offsetX: 15,
            offsetY: 15
        });
    }

   //Mapa de planteles

});








