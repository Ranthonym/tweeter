//handles new tweet submission and displays appropriate error messages

$(document).ready(function() {
  console.log("DOM ready");
  $(".new-tweet textarea").on('input', function() {
    let textLength = $(this).val().trim().length;
    let counter = $(this).siblings(".counter");
    let remChar = 140 - textLength;
    counter.text(remChar);
    if (remChar < 0) {
      counter.addClass("over-limit");
      $(".error-msg").text("Character limit exceeded");
    } else {
      counter.removeClass("over-limit");
      $(".error-msg").text("");
    }
  });

  $(".new-tweet textarea").blur(function() {
  });
});


