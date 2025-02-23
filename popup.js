
document.addEventListener("DOMContentLoaded", () => {
        chrome.storage.local.get({ searchCount: 0 }, (data) => {
                const newCount = data.searchCount;
                document.getElementById("queries").textContent = "Queries: " + newCount;
                let num = newCount * 1.09;
                if (num < 5280) {
                        document.getElementById("yards").textContent = "Yards Traveled: " + num.toFixed(2); 
                } else {
                        num = num / 5280;
                        document.getElementById("yards").textContent = "Miles Traveled: " + num.toFixed(3); 
                }

                // num = newCount * 0.2;
                // if (num < 1000) {
                //         document.getElementById("q-emissions").textContent = "Query Emissions: " + num.toFixed(3) + "gs";
                // } else {
                //         num = num / 1000;
                //         document.getElementById("q-emissions").textContent = "Query Emissions: " + num.toFixed(3) + "kgs";
                // }


        });

        chrome.storage.local.get({ overviewCount: 0 }, (data) => {
                const newOCount = data.overviewCount;
                document.getElementById("overviews").textContent = "Gemini Overviews: " + newOCount;

                // let num = newOCount * 4.3;
                // if (num < 1000) {
                //         document.getElementById("ai-emissions").textContent = "AI Emissions: " + num.toFixed(3) + "gs";
                // } else {
                //         num = num / 1000;
                //         document.getElementById("ai-emissions").textContent = "AI Emissions: " + num.toFixed(3) + "kgs";
                // }

                // num = newOCount / 15;
                // document.getElementById("streams").textContent = "Hours of Videos Streamed: " + num.toFixed(3);

                // num = newOCount / 16;
                // document.getElementById("kettle").textContent = "Kettles Boiled: " + num.toFixed(3);

                // num = newOCount / 35;
                // document.getElementById("water").textContent = "Water Used: " + num.toFixed(3);

                // num = newOCount / 139;
                // document.getElementById("laundry").textContent = "Loads of Laundry: " + num.toFixed(3);

                // num = newOCount / 13227;
                // document.getElementById("plane").textContent = "Flight Hours: " + num.toFixed(3);

                // num = newOCount * 3;
                // document.getElementById("watt").textContent = "Watt-Hours: " + num;
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
// 
