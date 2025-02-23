/****************************
  content-script.js
****************************/

// We'll keep a local copy of the user's message count
// let promptCount = 0;

// // 1) Create a floating badge to display the count
// const badge = document.createElement('div');
// badge.id = 'chatgpt-prompt-count-badge';
// // Some basic styling
// Object.assign(badge.style, {
//   position: 'fixed',
//   bottom: '20px',
//   right: '20px',
//   padding: '8px 12px',
//   background: 'rgba(0, 0, 0, 0.7)',
//   color: '#fff',
//   fontSize: '14px',
//   borderRadius: '6px',
//   zIndex: '999999',
//   cursor: 'move'
// });
// badge.textContent = 'Prompts: 0';
// document.body.appendChild(badge);

// // 2) Load existing count from storage (so we remember across page reloads)
// chrome.storage.local.get(['promptCount'], (res) => {
//   if (res.promptCount) {
//     promptCount = res.promptCount;
//     updateBadge();
//   }
// });

// // 3) Helper to update the badge text & persist the new value
// function updateBadge() {
//   badge.textContent = `Prompts: ${promptCount}`;
//   chrome.storage.local.set({ promptCount });
// }

// // 4) Set up a MutationObserver to detect new user messages
// //    We'll look for <h5 class="sr-only">You said:</h5>
// const observer = new MutationObserver((mutations) => {
//   console.log("entered observer"); 
//   for (const mutation of mutations) {
//     // Iterate over all new nodes
//     for (const addedNode of mutation.addedNodes) {
//       // We only care about element nodes
//       if (addedNode.nodeType === Node.ELEMENT_NODE) {
//         // Option A: The new node itself might be the <h5 class="sr-only">You said:</h5>
//         // Option B: The new node might contain such an element

//         // 4a) Check if the newly added node *is* the h5 element
//         if (
//           addedNode.matches?.('h5.sr-only') &&
//           addedNode.textContent.trim() === 'You said:'
//         ) {
//           promptCount++;
//           updateBadge();
//           console.log('[ChatGPT Extension] New user message detected (direct match).');
//         } else {
//           // 4b) Check if the newly added node *contains* the h5 element
//           const srHeading = addedNode.querySelector?.('h5.sr-only');
//           if (srHeading && srHeading.textContent.trim() === 'You said:') {
//             promptCount++;
//             updateBadge();
//             console.log('[ChatGPT Extension] New user message detected (descendant).');
//           }
//         }
//       }
//     }
//   }

// });

// // 5) Start observing the entire document body
// observer.observe(document.body, { childList: true, subtree: true });

// // 6) (Optional) Let the user drag the badge around
// let isDragging = false;
// let offsetX = 0;
// let offsetY = 0;

// badge.addEventListener('mousedown', (e) => {
//   isDragging = true;
//   offsetX = e.offsetX;
//   offsetY = e.offsetY;
// });

// document.addEventListener('mousemove', (e) => {
//   if (isDragging) {
//     badge.style.left = (e.pageX - offsetX) + 'px';
//     badge.style.top = (e.pageY - offsetY) + 'px';
//     badge.style.right = 'auto'; // Reset to allow free positioning
//     badge.style.bottom = 'auto';
//   }
// });

// document.addEventListener('mouseup', () => {
//   isDragging = false;
// });



function incrementSearchCount() {
    chrome.storage.local.get({ searchCount: 0}, (data) => {
        const currentCount = data.searchCount;
        const newCount = currentCount + 1; 

        //store the updated count
        chrome.storage.local.set({searchCount: newCount}, () => {
        console.log(`Google searches so far: ${newCount}`); 
        
        });
    }); 
}

if (window.location.href.includes("/search")) {
    incrementSearchCount();
}


// contentScript.js

// 1) Utility function to check if the AI Overview is displayed
function isAiOverviewDisplayed() {
  // Query the div with the known classes
  const aiContainer = document.querySelector('div.Fzsovc.cwYVJe.RJPOee');
  if (!aiContainer) return false;

  // Check for the <strong> element with text "AI Overview"
  const strongElement = aiContainer.querySelector('strong');
  return strongElement && strongElement.textContent.trim() === 'AI Overview';
}

// 2) The callback for MutationObserver
function onMutations(mutations, observer) {
  if (isAiOverviewDisplayed()) {
    console.log('AI Overview is displayed.');

    // Stop observing further changes
    observer.disconnect();
  }
}

// 3) Create and start observing
const observer = new MutationObserver(onMutations);

// Optional: do an initial check right away,
// so if the AI overview is *already* visible on page load,
// you can disconnect immediately.
if (isAiOverviewDisplayed()) {
  console.log('AI Overview was already visible on page load.');
  // No need to observe further
} else {
  observer.observe(document.body, { childList: true, subtree: true });
}
