

$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({left: '250px'});
    });

    $("#banniere").hide()
    $("#gauche").hide()
    $("#logo_transformer").mouseover(function() {
        $(this).fadeOut("slow", function() {
            $("#banniere").fadeIn("slow", function() {
                $("#gauche").fadeIn("slow");
            });
            
        });
    })
});

