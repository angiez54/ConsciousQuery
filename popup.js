
document.addEventListener("DOMContentLoaded", () => {
        chrome.storage.local.get({ searchCount: 0 }, (data) => {
                const newCount = data.searchCount;
                document.getElementById("queries").textContent = "Queries: " + newCount;
                let num = (newCount * 1.09);
                if (num < 5280) {
                        document.getElementById("yards").textContent = "Yards Traveled: " + num.toFixed(2); 
                } else {
                        num = num / 5280;
                        document.getElementById("yards").textContent = "Miles Traveld: " + num.toFixed(3); 
                }
        });

        chrome.storage.local.get({ overviewCount: 0 }, (data) => {
                const newOCount = data.overviewCount;
                document.getElementById("overviews").textContent = "Gemini Overviews: " + newOCount;
        });
});


// 1 searchCount = 1 searchCount
// 1 yard = 1.09 searchCount
// 0.2 grams of CO2 per Google search
// 4.3 grams of CO2 per Google AI overview
        // 15 queries = watching one hour of videos
        // 16 queries = boiling one kettle
        // 35 queries = 500 mL of water
        // 139 queries = one load of laundry
        // 92,593 queries = round-trip flight SF to SEA
// 3 watt-hours = 1 searchCount
// 
