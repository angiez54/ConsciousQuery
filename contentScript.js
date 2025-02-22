// contentScript.js

// A simple function to increment our stored counter
function incrementSearchCount() {
    // Get current count, default to 0 if not yet set
    chrome.storage.local.get({ searchCount: 0 }, (data) => {
      const currentCount = data.searchCount;
      const newCount = currentCount + 1;
  
      // Store the updated count
      chrome.storage.local.set({ searchCount: newCount }, () => {
        console.log(`Google searches so far: ${newCount}`);
      });
    });
  }
  
  // Check if the page is indeed a search results page by looking at the query string
  // (This helps avoid counting non-search pages like Google's home page)
  if (window.location.href.includes("/search")) {
    incrementSearchCount();
  }
  