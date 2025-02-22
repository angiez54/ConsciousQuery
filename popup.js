
document.addEventListener("DOMContentLoaded", () => {
        chrome.storage.local.get({ searchCount: 0 }, (data) => {
                const newCount = data.searchCount;
                document.getElementById("bookmarks").textContent = newCount;
        });
});
