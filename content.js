require('dotenv').config()
console.log(process.env)

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "startSurfing") {
    // Add code to retrieve subscriptions, play videos, and implement the channel surfing logic

    //fetch user data

    //retrieve most recent video from each subscribed channel

    //fetch video metadata

    //store the videos in an array and shuffle it

    //play the first video in shuffled array at a random timestamp
  }
});


/* chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getOAuthToken') {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      sendResponse({ token });
    });
    return true;
  }
});
*/


/* chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'startSurfing') {
    startSurfing();
  }
});

function startSurfing() {
  // Implement the logic for injecting the "Surf" tab, fetching the user's subscriptions,
  // and handling video playback, following the user story and acceptance criteria.
}
*/