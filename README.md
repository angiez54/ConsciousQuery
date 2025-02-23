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
┣ 📜 contentScript.js   # Observes changes in Google
┣ 📜 popup.html         # UI for displaying data
┣ 📜 popup.css          # Styling for popup.html
┣ 📜 README.md          # Documentation
┣ 📦 images             # Icons
┣-- 📜 icon_16.png      # Extension icon small
┣-- 📜 icon_32.png      # Extension icon medium
┣-- 📜 icon_128.png     # Extension icon large
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

- Each Google search consumes energy, mainly due to data center operations. However, the difference in emmissions with every AI overview is night and day.
- The estimated **CO₂ emissions per search** is based on studies. A normal google search is esitmated to be **0.2g CO₂ per query**. However with the AI Overview that number jumps up to **4.3g CO₂ per query** an almost 20x increase.
- Over time, it tracks your **carbon footprint from searches**.  
 
### Sources
[The carbon footprint of Chat-GPT](https://smartly.ai/blog/the-carbon-footprint-of-chatgpt-how-much-co2-does-a-query-generate)

[What is the environmental impact of AI ](https://www.grantable.co/guides/what-is-the-environmental-impact-of-ai#:~:text=While%20a%20single%20generative%20AI,over%202%20million%20refrigerators%20continuously)

---

## 🛡️ Permissions  

The extension requires the following permissions:  

| Permission    | Reason |
|--------------|--------|
| `storage`    | To store search count data. |
| `tabs`       | To detect active tabs and URL changes. |
| `host_permissions` | To access Google Search and ChatGPT pages. |

---

## 📜 License  

This project is open-source under the **MIT License**.  

---
