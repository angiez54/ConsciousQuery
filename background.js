// background.js (service worker in Manifest V3)

// 1) We'll keep track of the last known search URL for each tab
//    so we can detect when the user is refreshing vs. doing a new query.
const lastUrlByTab = {};  

// 2) Listen for tab updates:
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // If there's no new URL, ignore (the user might be changing title, status, etc.)
  if (!changeInfo.url) return;

  // We only care about google.com/search pages
  if (!changeInfo.url.includes('://www.google.com/search')) return;

  // Parse the URL for the query parameter
  const urlObj = new URL(changeInfo.url);
  const newQuery = urlObj.searchParams.get('q') || '';

  // If there's no actual query string, skip
  if (!newQuery) return;

  // Decide if it's a "new" query or the same query (i.e. page refresh).
  // We'll compare this URL to the last known URL for this tab.
  // If the entire search URL is the same, we consider it a refresh (or same query).
  const lastUrl = lastUrlByTab[tabId];

  if (lastUrl === changeInfo.url) {
    // This is *literally* the same URL as before → likely a refresh or revisit
    // If you want to *decrement* the stored count on refresh, do it here:
    decrementQueryCount();
    console.log(`[Tab ${tabId}] Same URL => Decrementing or ignoring.`);
  } else {
    // It's a new or different URL in this tab → likely a new query
    incrementQueryCount();
    console.log(`[Tab ${tabId}] New URL => Query incremented.`);
  }

  // Update the last known URL for this tab
  lastUrlByTab[tabId] = changeInfo.url;
});

// 3) If the tab closes, clean up to prevent the object from growing unbounded
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  delete lastUrlByTab[tabId];
});

// Helper: increment the search count
function incrementQueryCount() {
  chrome.storage.local.get({ searchCount: 0 }, (data) => {
    const newCount = data.searchCount + 1;
    chrome.storage.local.set({ searchCount: newCount }, () => {
      console.log(`Google searches so far: ${newCount}`);
    });
  });
}

// Helper: decrement the search count
function decrementQueryCount() {
  chrome.storage.local.get({ searchCount: 0 }, (data) => {
    const currentCount = data.searchCount;
    // Don’t go below zero, just in case
    const newCount = Math.max(0, currentCount - 1);
    chrome.storage.local.set({ searchCount: newCount }, () => {
      console.log(`Search count decremented; total is now: ${newCount}`);
    });
  });
}

  