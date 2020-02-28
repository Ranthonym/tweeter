# Tweeter Project

Tweeter is a simple, single-page Twitter clone built using HTML, CSS, JS, jQuery and AJAX on the front-end, and Node, Express and MongoDB on back-end.

This project implements a stretch goal of adding a scroll to top button that dynamically becomes visible on the bottom right area of the page when the user scrolls down a certain distance. Upon clicking the button, the page will automatically scroll to the top of the page and show the "Compose new Tweet" box.

## Screenshots

!["Screenshot of desktop layout with compose new tweet feature"](https://raw.githubusercontent.com/Ranthonym/tweeter/master/public/images/Desktop%20layout.png)
!["Screenshot of desktop layout with tweet log scroll top button"](https://raw.githubusercontent.com/Ranthonym/tweeter/master/public/images/Desktop%20Layout%20with%20scroll%20top%20button.png)
!["Screenshot of mobile layout with no text error message"](https://raw.githubusercontent.com/Ranthonym/tweeter/master/public/images/Mobile%20layout%20with%20empty%20text%20error%20msg.png)
!["Screenshot of mobile layout with character over limit error message"](https://raw.githubusercontent.com/Ranthonym/tweeter/master/public/images/Mobile%20layout%20with%20over%20limit%20error%20msg.png)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Body Parser
- Chance
- md5
- Node 5.10.x or above
