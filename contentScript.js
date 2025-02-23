/****************************
  contentScript.js
****************************/

////////////////////////
// 1) Detect AI Overview
////////////////////////

// Utility to find the AI Overview container and <strong>AI Overview</strong>
function isAiOverviewDisplayed() {
  const aiContainer = document.querySelector('div.Fzsovc');
  if (!aiContainer) return false;

  const strongElement = aiContainer.querySelector('strong');
  return strongElement && strongElement.textContent.trim() === 'AI Overview';
}

///////////////////////
// 2) Handle Counting
///////////////////////

// A) Parse the current query from the URL
function getCurrentSearchQuery() {
  const urlObj = new URL(window.location.href);
  return urlObj.searchParams.get('q') || '';
}

// B) Increment the AI overview count
function incrementAICount(callback) {
  chrome.storage.local.get({ overviewCount: 0 }, (data) => {
    const newCount = data.overviewCount + 1;
    chrome.storage.local.set({ overviewCount: newCount }, () => {
      console.log(`Overviews so far: ${newCount}`);
      if (typeof callback === 'function') callback();
    });
  });
}

// C) Only increment if it's a brand-new query
function handleAiOverviewIfNew() {
  const currentQuery = getCurrentSearchQuery();
  if (!currentQuery) return; // If there's no q= param, skip

  // Retrieve the last query we incremented for AI
  chrome.storage.local.get({ lastAiOverviewQuery: '' }, (res) => {
    const lastQuery = res.lastAiOverviewQuery;

    // If it's the same as last time, we're probably on a refresh => skip
    if (lastQuery === currentQuery) {
      console.log('[AI Overview] Same query => skipping increment on refresh.');
      return;
    }

    // If it's different, increment once and record this query
    incrementAICount(() => {
      chrome.storage.local.set({ lastAiOverviewQuery: currentQuery }, () => {
        console.log(`[AI Overview] Incremented for new query: "${currentQuery}".`);
      });
    });
  });
}

////////////////////////////////////////////
// 3) Observe DOM to detect AI Overview
////////////////////////////////////////////

const observer = new MutationObserver(() => {
  if (isAiOverviewDisplayed()) {
    console.log('AI Overview is displayed!');
    handleAiOverviewIfNew();

    // Stop observing further changes (so we only do this once per page load)
    observer.disconnect();
  }
});

// On page load, if the AI Overview is already visible, handle it immediately
if (isAiOverviewDisplayed()) {
  console.log('AI Overview is already visible on page load.');
  handleAiOverviewIfNew();
} else {
  // Otherwise, watch for it to appear
  observer.observe(document.body, { childList: true, subtree: true });
}
