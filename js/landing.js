$(window).scroll(function() {

 // if ($(this).scrollTop()>0)
 //  {
 //     $('#topbar').fadeOut();
 //     $('#bottombar').fadeOut();
 //     $("body").css('background-color', '#FDFBFB');
 //  }
 // else
 //  {
 //   $('#topbar').fadeIn();
 //   $('#bottombar').fadeIn();
 //   $("body").css('background-color', '#27262C');
 //
 //  }

  if ($(this).scrollTop()>screen.height/1.8)
   {
      $('#topbar').fadeOut();
      $('#bottombar').fadeOut();
      $("body").addClass("scrolled");


   }
  else
   {
    $('#topbar').fadeIn();
    $('#bottombar').fadeIn();
    $("body").removeClass("scrolled");

   }
});

function adjustSideHeader() {

//check if the headline is visible
  if($('p.rotate').length > 0)
  {
    var headline = $('p.rotate')[0];
    var stringLength = rotate.textContent.length;
    //add style tag to support media queries
    document.querySelector('style').textContent +=
       "p.rotate { margin-top: " + (stringLength*23.5) + "px; -webkit-transition: margin-top 2s; transition: margin-top 2s;}"
  }
}

// fire it when document is loaded
$(document).ready(setTimeout(adjustSideHeader, 300));
