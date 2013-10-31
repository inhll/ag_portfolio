/*
 * Arthur Gerstenfeld Portfolio Main JS V.1.0
 * Copyright 2013, @cdeng
 * AUTHOR: Cheng Deng // https://github.com/cdeng
 * DATE: 10/15/2013

*/

/*=================================================
 1 - MAIN INIT FUNCTIONS
 =================================================*/

function initAG() {
    'use strict';

    // swap thumbnail picture out with larger one
    $('.thumbnail').click(function(){

        $('.thumbnail').removeClass('active');
        $(this).addClass('active');

        // find image url and replace it with higher resolution version
        var imgURL = $(this).find('img').attr("src").replace('135_100', '500_500');
        $('.imageHolder').find('img').attr("src", imgURL);
    });

    // settings for single page navigation
    $('.single-page-nav').singlePageNav({
        offset: $('.single-page-nav').outerHeight(),
        speed: 480
    });

};

/*=================================================
 2 - DOCUMENT READY TRIGGER
 =================================================*/

jQuery(document).ready(function(){

    initAG();

});