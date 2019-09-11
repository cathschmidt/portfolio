$(document).ready(function(){
    // declaring our variable
    var scrollPos;
    // all scrolling animation has to be triggered by the scrolling of the window
    var header = $("#header").offset().top;
    console.log("var header ="+ header);

    // $("#content").css({opacity: 0});

    $("#content").hide();

    var up = false;


    $(window).scroll(function(){
      // assigning a value to scrollPos— the distance from the body to
      // the top of the screen
      scrollPos = $('body').scrollTop();
      // logging what scrollPos is to the console
      console.log("Scroll Position is "+ scrollPos);

      if ((scrollPos > header) && (up == false)) {

        console.log("header if");

        $('#header').css({
            position: 'fixed', 
            top: 0, 
            textAlign: 'center', 
            width: "calc(100% - 8rem)"           
        }).removeClass("header-top");

        
        $('#footer').fadeOut(200, function(){
          $(this).css({
            position: 'fixed', 
            bottom: 0, 
            textAlign: 'center', 
            width: 'calc(100% - 8rem)'
          });
          $(this).fadeIn(200);
        });

        // i want to create more of a delay here
        $("#content").fadeIn(600);

        up = true;


      } else {

        console.log("header else");

      }

   

      
    });
});
