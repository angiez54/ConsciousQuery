
document.addEventListener("DOMContentLoaded", () => {
        let miles = 0;
        chrome.storage.local.get({ searchCount: 0 }, (data) => {
                const newCount = data.searchCount;
                document.getElementById("queries").textContent = newCount; 
                

                miles = newCount * 0.2;
                document.getElementById("q-emissions").textContent = miles.toFixed(1);


        });

        chrome.storage.local.get({ overviewCount: 0 }, (data) => {
                const newOCount = data.overviewCount;
                document.getElementById("overviews").textContent = newOCount;

                let num = newOCount * 4.3;

                miles = (miles + num) / 400;
                document.getElementById("yards").textContent = miles.toFixed(3);
                
                document.getElementById("ai-emissions").textContent = num.toFixed(1);

                num = newOCount / 15;
                document.getElementById("streams").textContent = num.toFixed(2);

                num = newOCount / 16;
                document.getElementById("kettle").textContent = num.toFixed(2);

                num = newOCount / 35;
                document.getElementById("water").textContent = num.toFixed(2);

                num = newOCount / 139;
                document.getElementById("laundry").textContent = num.toFixed(2);

                num = newOCount / 13227;
                document.getElementById("plane").textContent = num.toFixed(2);

                num = newOCount * 3;
                document.getElementById("watt").textContent = num;
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
        // 13,227 queries = 1 hours of flight
        // 3 watt-hours = 1 ai query
