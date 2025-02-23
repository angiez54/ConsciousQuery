# Conscious Query- A Chrome Extension  

## 🌱 Track Your Searches & Their Environmental Impact  

The increasing amounts of AI integration within our day to day lives it makes it harder to see the environmental impact of our searches. **ConscienceQuery** is a Chrome extension that monitors your search activity on Google, tracking the number of queries made with or without AI. This data is converted into a summary which shows the total enviromental cost for your searches.

---

## 🚀 Features  

✅ **Search Tracking** - Monitors Google search queries and Gemini interactions.  
✅ **Environmental Impact Metrics** - Calculates the estimated CO₂ emissions generated from search activities.  
✅ **Background Monitoring** - Runs in the background and logs data persistently.  

---

## 📂 File Structure  

```
📦 ConscienceQuery
┣ 📜 manifest.json      # Chrome Extension Manifest (Permissions & Scripts)
┣ 📜 background.js      # Tracks search queries & tab activity
┣ 📜 contentScript.js   # Observes changes in Google and ChatGPT
┣ 📜 icon_128.png       # Extension icon
┣ 📜 popup.html         # (Optional) UI for displaying data
┣ 📜 README.md          # Documentation
```

---

## 🔧 Installation  

1️⃣ **Download the Source Code**  
   Clone this repository or download the ZIP file.  

2️⃣ **Enable Developer Mode in Chrome**  
   - Open Chrome and go to `chrome://extensions/`  
   - Enable **Developer Mode** (top-right corner).  

3️⃣ **Load the Extension**  
   - Click **"Load Unpacked"**  
   - Select the folder where you saved the extension files.  

4️⃣ **Start Tracking!**  
   - Open Google and start searching!  
   - The extension will count searches and estimate environmental effects.  

---

## 🌍 Environmental Impact Calculation  

- Each Google search consumes energy, mainly due to data center operations.  
- The extension estimates **CO₂ emissions per search** based on studies (e.g., **0.2g CO₂ per query**).  
- Over time, it tracks your **carbon footprint from searches**.  

---

## 🛡️ Permissions  

The extension requires the following permissions:  

| Permission    | Reason |
|--------------|--------|
| `storage`    | To store search count data. |
| `tabs`       | To detect active tabs and URL changes. |
| `host_permissions` | To access Google Search and ChatGPT pages. |

---

## 📝 Future Enhancements  

🚀 **Visual Analytics** - Graphs to display environmental impact over time.  
🌍 **Additional Search Engines** - Support for Bing, DuckDuckGo, etc.  
📊 **Detailed Carbon Footprint Reports** - Breakdowns of daily/weekly search impact.  

---

## 📜 License  

This project is open-source under the **MIT License**.  

---
