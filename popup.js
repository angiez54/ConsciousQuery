
document.addEventListener("DOMContentLoaded", () => {
        chrome.storage.local.get({ promptCount: 0 }, (data) => {
                const newCount = data.promptCount;
                document.getElementById("bookmarks").textContent = newCount;
        });
});
