$(document).ready(function(){
    // declaring our variable
    var scrollPos;
    // all scrolling animation has to be triggered by the scrolling of the window
    var header = $("#header").offset().top;
    console.log("var header ="+ header);

    var p1 = $("#project-1").offset().top;
    console.log("var p1 ="+ p1);

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
            width: "calc(100% - 20rem)"           
        }).removeClass("header-top");

        
        $('#footer').fadeOut(200, function(){
          $(this).css({
            position: 'fixed', 
            bottom: 0, 
            textAlign: 'center', 
            width: 'calc(100% - 20rem)'
          });
          $(this).fadeIn(200);
        });

        // i want to create more of a delay here
        $("#content").fadeIn(600);

        up = true;


      } else {

        console.log("header else");

      }

      if ((scrollPos > p1) && (up == true)) {

        console.log("p1 if");


      } else {
        console.log("p1 else");
      }

      
    });

    $("#pro-1").click(function() {
      $('html, body').animate({
        scrollTop: $("#project-1").offset().top
      }, 800);
    }); 
    $("#pro-2").click(function() {
      $('html, body').animate({
        scrollTop: $("#project-2").offset().top
      }, 800);
    }); 
    $("#pro-3").click(function() {
      $('html, body').animate({
        scrollTop: $("#project-3").offset().top
      }, 800);
    }); 
    $("#pro-4").click(function() {
      $('html, body').animate({
        scrollTop: $("#project-4").offset().top
      }, 800);
    }); 
    $("#pro-5").click(function() {
      $('html, body').animate({
        scrollTop: $("#project-5").offset().top
      }, 800);
    }); 

});
