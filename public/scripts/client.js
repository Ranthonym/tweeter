
 // helper function that converts elapsed milliseconds to readable format
const timeConvert = function(time) {
  let years, months, days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;
  
  total_seconds = parseInt(Math.floor(time / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  days = parseInt(Math.floor(total_hours / 24));
  months = parseInt(Math.floor(days / 30));
  years = parseInt(Math.floor(days / 365));

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);

  if (years > 2) {
    return (`${years} years ago`);
  } else if (years > 1 && years < 2) {
      return (`1 year ago`);
    }

  if (months > 2) {
    return (`${months} months ago`);
  } else if (months > 1 && months < 2) {
      return (`1 month ago`);
    }
    
  if (days > 2) {
    return (`${days} days ago`);
  } else if (days > 1 && days < 2) {
      return (`1 day ago`);
    }

  if (hours > 2) {
    return (`${hours} hours ago`);
  } else if (days > 1 && days < 2) {
      return (`1 hour ago`)
    }

  if ( minutes > 2) {
    return (`${minutes} minutes ago`);
  } else if (days > 1 && days < 2) {
      return (`1 minute ago`)
    }

  if (seconds > 2) {
    return (`${seconds} seconds ago`);
  } else if (days > 1 && days < 2) {
      return (`1 moment ago`)
    }
};

// helper function that escapes input string
const escape = (string) => {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(string));
  return div.innerHTML;
}

//function to send new tweet form data to server
const sendFormDataToServer = () => {
  $(".new-tweet form").on('submit', function(event) {
    event.preventDefault(); //prevent default action 
    const form_data = $(this).serialize(); //Encode form elements for submission
    const textLength = $('.new-tweet textarea').val().length;
    if (!textLength) {
      $(".error-msg").text("No text present");
      return;
    } else if (textLength > 140) {
      $(".error-msg").text("Character limit exceeded");
      return;
    } 
     $.ajax({
        url : '/tweets',
        type: 'POST',
        data : form_data
      }).then(response => {
        loadTweets();
      });
  });
};


// creates new tweet content in html structure
const createTweetElement = function(tweet) {
  let elapsedTime = Date.now() - tweet.created_at;

 let markup = `<article class="tweet">
        <header>
         <img src=${tweet.user.avatars}>
          <span class="name">${tweet.user.name}</span>
          <span class="handle">${tweet.user.handle}</span>
        </header>
       <p>${escape(tweet.content.text)} </p>
          <footer>
            <span class="time">${timeConvert(elapsedTime)}</span>
            <div class="icon">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
            </div>
          </footer> 
        </article>`
    return markup;

};

// function that loops over tweet posts and renders them
const renderTweets = function(tweetArray) {
  tweetArray.forEach(tweet => $('#tweets-container').prepend(createTweetElement(tweet))); 
};

// reads new tweet post
const loadTweets = () => {
  $.ajax({
    url: `/tweets`,
    type: "GET",
    dataType: "JSON"
  })
    .then(response => {
      renderTweets(response);
      console.log("success");
    })
    .catch(() => {
      console.log("error triggered");
    });
};



// loading DOM
$(document).ready(function() {
  console.log("DOM ready");
  sendFormDataToServer();
  loadTweets();

  // bouncing arror idle animation
  $( ".new-tweet-btn" ).click(function() {
    $( ".new-tweet" ).slideToggle( "fast")
  });

  // scroll top detection function
  $(window).scroll(function() {
    console.log('scrolling...')
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > 400) {
        $('#scroll-top').fadeIn(200);
    } else {
        $('#scroll-top').fadeOut(200);
    }
});

// Animate the scroll to top
$('#scroll-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
})

});





