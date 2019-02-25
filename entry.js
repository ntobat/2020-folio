$(function(){

    $('#twoCol').click(function(){
        $('.page').css("grid-template-columns", "260px 1fr");
        $('.title').css("width", "calc(100% - 290px");
        $(this).css("background-image", "url('assets/2col.svg");
        $("#oneCol").css("background-image", "url('assets/1colOL.svg");
        setTimeout(function(){
            $('.navbar').css("transform", "scaleX(1)");
            $('.navbar .navi').css("transition", "all 500ms ease");
            
        }, 100);
    });
    $('#oneCol').click(function(){
        $('.navbar').css("transform", "scaleX(0)");
        $('.navbar .navi').css("transition", "all 0s ease");
        $(this).css("background-image", "url('assets/1col.svg");
        $("#twoCol").css("background-image", "url('assets/2colOL.svg");
        setTimeout(function(){
            $('.page').css("grid-template-columns", "0px 1fr");
            $('.title').css("width", "calc(100% - 30px");
        }, 200);
    });

    /* scrollTo animation */
    var navi = navi = $('.navigator');
    
    $('.jump, .navTitle').click(function(event) {
            
        event.preventDefault();
     
        var full_url = this.href,
            parts = full_url.split('#'),
            trgt = parts[1],
            target_offset = $('#'+trgt).offset(),
            target_top = target_offset.top + 1;
            
        $('html, body').animate({scrollTop:target_top}, 500);
        
        /* Remove active class on any li when an anchor is clicked */
        navi.children().removeClass('active');
        
        /* Add active class to clicked anchor */
        $(this).addClass('active');
    });

    $('#navTitle').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 500);
        navi.children().removeClass();
    });


    // progress bar
    
    $(window).bind("load", function() {
        var winHeight = $(window).innerHeight(),
        docHeight = $(document).height(),
        max = docHeight - winHeight,
        value,
        indicator = $("#progress");

        value = $(window).scrollTop() / max;
        indicator.css('width', value * 100 + '%');
            
        $(document).on('scroll', function(){
            value = $(window).scrollTop() / max;
            indicator.css('width', value * 100 + '%');
        });
    });
    
/*
value = distance scrolled
percent = value / max value



*/

    /* open menu animation */
    $('.menu').click(function(event) {

        event.preventDefault();

        if( $(".navi").hasClass('hidden') ){
            $(".siteNav").addClass('hidden');
            setTimeout(function(){
                $(".navi").removeClass('hidden');
            },150);
        } else {
            $(".navi").addClass('hidden');
            setTimeout(function(){
                $(".siteNav").removeClass('hidden');
            },150);
        };

        if( $("#menu").hasClass('menuClosed') ){
            $("#menu").fadeTo(250, 0);
            setTimeout(function(){
                $("#menu").replaceWith("<img id='menu' class='' src='assets/menuWordClose.svg' />").fadeTo(250, 1);
            }, 250);
        } else {
            $("#menu").fadeTo(250, 0);
            setTimeout(function(){
                $("#menu").replaceWith("<img id='menu' class='menuClosed' src='assets/siteMenu.svg' />").fadeTo(250, 1);
            }, 250);
        };
    });

/*
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();


/*        function getTarget( jumps ){

        var jumps = $("a.jump").toArray();
        var ids = [],
            offsets = [],
            distances = [],
            heights = [],
            scrollTop = $(window).scrollTop();
        for (var i = 0; i < jumps.length; i++) {
            
                

/*                ids.push( jumps[i].data('id') ); 
                offsets.push( jumps[i].offset().top );
                distances.push( (offsets[i] - scrollTop) );
                heights.push( (0 - (offsets[i + 1] - offsets[i]) ) );

                if ( (0 >= distances[i]) && (distances[i] >= heights[i]) ){
                    $('.jump[id$="' + ids[i] + '"').addClass('active');
                } else {
                    $('.jump[id$="' + ids[i] + '"').removeClass('active');
                };
            };
        };
        

/*        getTarget( $("a.jump").toArray() );
    }); */


    /* menu highlight scroll function */
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();

        var anchor1 = $("#anchor1").offset().top;
        var anchor1Distance = (anchor1 - scrollTop);
        var anchor1Height = 0 - ( ($("#anchor2").offset().top) - ($("#anchor1").offset().top) );
        if( (0 >= anchor1Distance) && (anchor1Distance >= anchor1Height) ){
            $('.jump[href$="anchor1"]').addClass('active');
        } else {
            $('.jump[href$="anchor1"]').removeClass('active');
        };

        var anchor2 = $("#anchor2").offset().top;
        var anchor2Distance = (anchor2 - scrollTop);
        var anchor2Height = 0 - (($("#anchor3").offset().top) - ($("#anchor2").offset().top));
        if( (0 >= anchor2Distance) && (anchor2Distance >= anchor2Height) ){
            $('.jump[href$="anchor2"]').addClass('active');
        } else {
            $('.jump[href$="anchor2"]').removeClass('active');
        };

        var anchor3 = $("#anchor3").offset().top;
        var anchor3Distance = (anchor3 - scrollTop);
        var anchor3Height = 0 - (($("#anchor4").offset().top) - ($("#anchor3").offset().top));
        if( (0 >= anchor3Distance) && (anchor3Distance >= anchor3Height) ){
            $('.jump[href$="anchor3"]').addClass('active');
        } else {
            $('.jump[href$="anchor3"]').removeClass('active');
        };

        var anchor4 = $("#anchor4").offset().top;
        var anchor4Distance = (anchor4 - scrollTop);
        var anchor4Height = 0 - (($("#anchor5").offset().top) - ($("#anchor4").offset().top));
        if( (0 >= anchor4Distance) && (anchor4Distance >= anchor4Height) ){
            $('.jump[href$="anchor4"]').addClass('active');
        } else {
            $('.jump[href$="anchor4"]').removeClass('active');
        };

        var anchor5 = $("#anchor5").offset().top;
        var anchor5Distance = (anchor5 - scrollTop);
        var anchor5Height = 0 - (($("#anchor6").offset().top) - ($("#anchor5").offset().top));
        if( (0 >= anchor5Distance) && (anchor5Distance >= anchor5Height) ){
            $('.jump[href$="anchor5"]').addClass('active');
        } else {
            $('.jump[href$="anchor5"]').removeClass('active');
        };

        var anchor6 = $("#anchor6").offset().top;
        var anchor6Distance = (anchor6 - scrollTop);
        var anchor6Height = 0 - (($("#anchor7").offset().top) - ($("#anchor6").offset().top));
        if( (0 >= anchor6Distance) && (anchor6Distance >= anchor6Height) ){
            $('.jump[href$="anchor6"]').addClass('active');
        } else {
            $('.jump[href$="anchor6"]').removeClass('active');
        };

        var anchor7 = $("#anchor7").offset().top;
        var anchor7Distance = (anchor7 - scrollTop);
        var anchor7Height = 0 - (($("#anchor8").offset().top) - ($("#anchor7").offset().top));
        if( (0 >= anchor7Distance) && (anchor7Distance >= anchor7Height) ){
            $('.jump[href$="anchor7"]').addClass('active');
        } else {
            $('.jump[href$="anchor7"]').removeClass('active');
        };

        var anchor8 = $("#anchor8").offset().top;
        var anchor8Distance = (anchor8 - scrollTop);
        var anchor8Height = 0 - (($("#anchor9").offset().top) - ($("#anchor8").offset().top));
        if( (0 >= anchor8Distance) && (anchor8Distance >= anchor8Height) ){
            $('.jump[href$="anchor8"]').addClass('active');
        } else {
            $('.jump[href$="anchor8"]').removeClass('active');
        };

        var anchor9 = $("#anchor9").offset().top;
        var anchor9Distance = (anchor9 - scrollTop);
        var anchor9Height = 0 - (($("#anchor10").offset().top) - ($("#anchor9").offset().top));
        if( (0 >= anchor9Distance) && (anchor9Distance >= anchor9Height) ){
            $('.jump[href$="anchor9"]').addClass('active');
        } else {
            $('.jump[href$="anchor9"]').removeClass('active');
        };

        var anchor10 = $("#anchor10").offset().top;
        var anchor10Distance = (anchor10 - scrollTop);
        var anchor10Height = 0 - (($("#anchor11").offset().top) - ($("#anchor10").offset().top));
        if( (0 >= anchor10Distance) && (anchor10Distance >= anchor10Height) ){
            $('.jump[href$="anchor10"]').addClass('active');
        } else {
            $('.jump[href$="anchor10"]').removeClass('active');
        };

        var anchor11 = $("#anchor11").offset().top;
        var anchor11Distance = (anchor11 - scrollTop);
        var anchor11Height = 0 - (($("#anchor12").offset().top) - ($("#anchor11").offset().top));
        if( (0 >= anchor11Distance) && (anchor11Distance >= anchor11Height) ){
            $('.jump[href$="anchor11"]').addClass('active');
        } else {
            $('.jump[href$="anchor11"]').removeClass('active');
        };

        var anchor12 = $("#anchor12").offset().top;
        var anchor12Distance = (anchor12 - scrollTop);
        var anchor12Height = 0 - (($("#anchor13").offset().top) - ($("#anchor12").offset().top));
        if( (0 >= anchor12Distance) && (anchor12Distance >= anchor12Height) ){
            $('.jump[href$="anchor12"]').addClass('active');
        } else {
            $('.jump[href$="anchor12"]').removeClass('active');
        };

/*        var anchor13 = $("#anchor10").offset().top;
        var anchor13Distance = (anchor10 - scrollTop);
        var anchor13Height = 0 - (($("#anchor1").offset().top) - ($("#anchor13").offset().top));
        if( (0 >= anchor13Distance) && (anchor13Distance >= anchor13Height) ){
            $('.jump[href$="anchor13"]').addClass('active');
        } else {
            $('.jump[href$="anchor13"]').removeClass('active');
        };

*/
    });


});





