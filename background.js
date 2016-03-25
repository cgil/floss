chrome.webNavigation.onCompleted.addListener(function(data) {
    chrome.tabs.executeScript(data.tabId, {file: 'inject_content.js'});
});
