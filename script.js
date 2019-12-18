
$(document).ready(function () {

    // navigation dropdown
    $(".nav-link").on('click', function (event) {
        $(this).parent().toggleClass('open').siblings().removeClass('open'); 
        event.stopPropagation();    
    });
    
    // on anywhere click
    $('body').click(function (event) {
        //Hide the sub menus if visible if it'sd anywhere except the li elements
        if (event.target.className !== 'sub-item' && event.target.localName !== 'li'){
            //console.log(event.target);
            $('li').removeClass('open');
        };
    });

    // slick carousel initiation
    $('.carousel').slick({
        slidesToShow: 3,
        dots: false,
        centerMode: true,
    });

    /******** background video logic *********/

    //play and pause the video on click or scroll

    //on click
    var video = $('.fullscreen-bg__video');
    var videoControls = $(".fullscreen-bg__playPause i");
    video.parent().click(function () {
        if (!$(this).children(".fullscreen-bg__video").get(0).paused) {
            $(this).children(".fullscreen-bg__video").get(0).pause();
            videoControls.removeClass('fa-pause').addClass('fa-play');
        } else {
            $(this).children(".fullscreen-bg__video").get(0).play();
            videoControls.removeClass('fa-play').addClass('fa-pause');
        }
    });

    //on scroll
    var bgVideo = video[0];
    $(window).scroll(function () {
        //check to see if the video is manually paused don't play it back on scroll to top
        if (videoControls.hasClass('fa-pause')) {
            var scroll = $(this).scrollTop();
            scroll > 300 ? bgVideo.pause() : bgVideo.play();
            
        }

        //darkening the navbar background on scroll
        if ($(window).scrollTop() > $('body').height() / 4) {
            $('#header').addClass('dark');
        }else{
            $('#header').removeClass('dark');
        }

    });
 
    //Check if video can play, and play it
    video.oncanplay = function () {
        video.play();
    };
   
   
});

