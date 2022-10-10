$(document).ready(function() {

    $('#start').click(function() {
        let i = 0;
        while (i < 10) {
            if ((parseInt($('#lane1').css('top')) < -10) || (parseInt($('#lane1').css('top')) > 470)) {
                $('#car1').fadeOut();
                // $('#lane1').fadeOut();
                // $('#lane1').animate({
                //     left: '0px',
                //     top: '0px'
                // }, 1000);
                // $('#car1').fadeIn(1);
                i = 11;

            } else {
                if ((Math.floor(Math.random() * (2 - 1) + 1)) == 1) {
                    $('#lane1').animate({
                        left: '+=' + Math.floor(Math.random() * (250 - 1) + 1) + 'px',
                        top: '+=' + Math.floor(Math.random() * (100 - 1) + 1) + 'px',

                    }, 500);
                } else {
                    $('#lane1').animate({
                        left: '+=' + Math.floor(Math.random() * (250 - 1) + 1) + 'px',
                        top: '-=' + Math.floor(Math.random() * (100 - 1) + 1) + 'px'

                    }, 500);
                }
                // alert($('#lane1').css('top'))
            }

            if ((parseInt($('#lane2').css('top')) < -10) || (parseInt($('#lane2').css('top')) > 470)) {
                $('#car2').fadeOut();
                // $('#lane1').fadeOut();
                // $('#lane1').animate({
                //     left: '0px',
                //     top: '0px'
                // }, 1000);
                // $('#car1').fadeIn(1);
                i = 11;

            } else {
                if ((Math.floor(Math.random() * (2 - 1) + 1)) == 1) {
                    $('#lane2').animate({
                        left: '+=' + Math.floor(Math.random() * (250 - 1) + 1) + 'px',
                        top: '+=' + Math.floor(Math.random() * (100 - 1) + 1) + 'px',

                    }, 500);
                } else {
                    $('#lane2').animate({
                        left: '+=' + Math.floor(Math.random() * (250 - 1) + 1) + 'px',
                        top: '-=' + Math.floor(Math.random() * (100 - 1) + 1) + 'px'

                    }, 500);
                }
                // alert($('#lane1').css('top'))
            }

            if ((parseInt($('#lane3').css('top')) < -10) || (parseInt($('#lane3').css('top')) > 470)) {
                $('#car3').fadeOut();
                // $('#lane1').fadeOut();
                // $('#lane1').animate({
                //     left: '0px',
                //     top: '0px'
                // }, 1000);
                // $('#car1').fadeIn(1);
                i = 11;

            } else {
                if ((Math.floor(Math.random() * (2 - 1) + 1)) == 1) {
                    $('#lane3').animate({
                        left: '+=' + Math.floor(Math.random() * (250 - 1) + 1) + 'px',
                        top: '+=' + Math.floor(Math.random() * (100 - 1) + 1) + 'px',

                    }, 500);
                } else {
                    $('#lane3').animate({
                        left: '+=' + Math.floor(Math.random() * (250 - 1) + 1) + 'px',
                        top: '-=' + Math.floor(Math.random() * (100 - 1) + 1) + 'px'

                    }, 500);
                }
                // alert($('#lane1').css('top'))
            }

            if ((parseInt($('#lane4').css('top')) < -10) || (parseInt($('#lane4').css('top')) > 470)) {
                $('#car4').fadeOut();
                // $('#lane1').fadeOut();
                // $('#lane1').animate({
                //     left: '0px',
                //     top: '0px'
                // }, 1000);
                // $('#car1').fadeIn(1);
                i = 11;

            } else {
                if ((Math.floor(Math.random() * (2 - 1) + 1)) == 1) {
                    $('#lane4').animate({
                        left: '+=' + Math.floor(Math.random() * (250 - 1) + 1) + 'px',
                        top: '+=' + Math.floor(Math.random() * (100 - 1) + 1) + 'px',

                    }, 500);
                } else {
                    $('#lane4').animate({
                        left: '+=' + Math.floor(Math.random() * (250 - 1) + 1) + 'px',
                        top: '-=' + Math.floor(Math.random() * (100 - 1) + 1) + 'px'

                    }, 500);
                }
                // alert($('#lane1').css('top'))
            }

            i += 1;
        }
        // $('#car1').animate({
        //     top: '+=5' + 'px'
        // }, 200)
    })


    $("#f").click(function() {
        $("#inp").append("<input type='text' id='i1' value='Hello'> <br><br>");
    })

    $("#input").click(function() {
        // let data = prompt("Enter Content: ");
        data = 'dynamic';
        $("#i1").val(data);
    })

    $("#at").click(function() {
        $("#txt").append(" <b>Appended text</b>.");
    });

    $("#al").click(function() {
        $("#lst").append("<li class='list-group-item'>Appended Item</li>");
    });

    $("#pt").click(function() {
        $("#txt").prepend(" <b>Prepended text</b>.");
    });

    $("#pl").click(function() {
        $("#lst").prepend("<li class='list-group-item'>Prepended Item</li>");
    });
    $("#rl").click(function() {
        location.reload(true);
    });

    $("#gc").click(function() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var color = "#" + randomColor;
        $(".trapezoid").css("border-bottom-color", color);
    });

    $("#bc").click(function() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var color = "#" + randomColor;
        $(".rectangle").css("background-color", color);
    });

    $("#ti").click(function() {
        $(".circle").css("width", "+=10");
        $(".circle").css("height", "+=10");
    });

    $("#td").click(function() {
        $(".circle").css("width", "-=10");
        $(".circle").css("height", "-=10");
    });
    $("#rl1").click(function() {
        location.reload(true);
    });
})