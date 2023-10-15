function clickSkipButton(tabId) {
    console.log('Script initialized')
    const button = document.querySelector('button.ytp-ad-skip-button.ytp-button');
    if (button) {
      button.click();
      console.log('Button found and clicked.');
    } else {
      console.log('Button not found. Retrying...');
      setTimeout(() => clickSkipButton(tabId), 1000); // Repeats every second
    }
  }
  
  firefox.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url && tab.url.includes("youtube.com/watch")) {
      setTimeout(() => clickSkipButton(tabId), 5000); // Waits 5 seconds
    }
  });
  