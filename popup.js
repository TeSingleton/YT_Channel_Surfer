document.getElementById("auth-button").addEventListener("click", authenticate);
document
  .getElementById("start-surfing-button")
  .addEventListener("click", startSurfing);

function authenticate() {
  // Replace 'YOUR_CLIENT_ID' with your actual client ID
  const clientId = "YOUR_CLIENT_ID.apps.googleusercontent.com";
  const redirectUri = chrome.identity.getRedirectURL();
  const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=https://www.googleapis.com/auth/youtube.readonly`;

  chrome.identity.launchWebAuthFlow(
    { url: authUrl, interactive: true },
    function (redirectUrl) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      } else {
        const accessToken = new URL(redirectUrl).hash
          .split("&")
          .filter((param) => param.startsWith("#access_token="))[0]
          .split("=")[1];
        chrome.storage.local.set({ accessToken: accessToken }, function () {
          document.getElementById("auth-button").style.display = "none";
          document.getElementById("start-surfing-button").style.display =
            "block";
        });
      }
    }
  );
}

function startSurfing() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "startSurfing" });
  });
}
