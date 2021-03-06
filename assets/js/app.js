$(document).ready(function () {
    /*
    // Splash effect intro
    */
    $("#splash").fadeIn(2000).fadeOut(1000);
    /*
    //Dropdown menu search bar
    
    $('.search-panel .dropdown-menu').find('a').click(function (e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

    /*
    // mouseover effect
    */
    var photo = $(".thumb");
    var name = $(".name");
    /*
    $(photo).mouseover(function () {
        $(this).fadeTo(100, 0.5);
 
    });
    $(photo).mouseleave(function () {
        $(this).fadeTo(100, 1);
    });
*/
        $(photo).mouseover(function () {
            $(this).children(".name").show();
        });
        $(photo).mouseout(function () {
            $(this).children(".name").hide();
        });

        $(".filter-button").click(function () {
            var value = $(this).attr('data-filter');

            if (value == "all") {
                //$('.filter').removeClass('hidden');
                $('.filter').show('1000');
            }
            else {
                //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
                //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.' + value).hide('3000');
                $('.filter').filter('.' + value).show('3000');
            }
        });

        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");

        

});
