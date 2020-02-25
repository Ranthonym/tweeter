$(document).ready(function() {
  console.log("DOM ready");

  
  $(".new-tweet textarea").on('input', function() {
    let textLength = $(this).val().length;
    let counter = $(this).siblings(".counter");
    console.log(textLength);
    let remChar = 140 - textLength;
    counter.text(remChar);
    if (remChar < 0) {
      counter.addClass("over-limit");
    } else {
      counter.removeClass("over-limit");
    }
  })

  $(".new-tweet textarea").blur(function(){
  })
  
  
});


