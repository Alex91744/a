import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '5000', 10);

// Serve static files from the root directory (where index.html, styles.css, script.js are located)
app.use(express.static(path.join(__dirname, '..')));

// API route for build data
app.get('/api/builds', (req, res) => {
  const buildData = [
    // Basic build information for API - detailed info handled client-side
    { buildId: "S6000Y25MJD1SU10", date: "June 1, 2025", storeUiVersion: "Store UI 1.0", buildType: "public", buildNumber: 1 },
    { buildId: "S6000Y25MJD6SU10", date: "June 6, 2025", storeUiVersion: "Store UI 1.0", buildType: "public", buildNumber: 2 },
    { buildId: "S6000Y25MJD8SU10", date: "June 8, 2025", storeUiVersion: "Store UI 1.0", buildType: "public", buildNumber: 3 },
    { buildId: "S6000Y25MJD17SU10", date: "June 17, 2025", storeUiVersion: "Store UI 1.0", buildType: "public", buildNumber: 4 },
    { buildId: "S6000Y25MJD22SU20", date: "June 22, 2025", storeUiVersion: "Store UI 2.0", buildType: "public", buildNumber: 5 },
    
    // Developer App Builds
    { buildId: "S6000Y25MAD28SU10", date: "April 28, 2025", storeUiVersion: "Store UI 1.0", buildType: "developer", buildNumber: 1 },
    { buildId: "S6000Y25MJD3SU10", date: "June 3, 2025", storeUiVersion: "Store UI 1.0", buildType: "developer", buildNumber: 2 },
    { buildId: "S6000Y25MJD5SU10", date: "June 5, 2025", storeUiVersion: "Store UI 1.0", buildType: "developer", buildNumber: 3 },
    { buildId: "S6000Y25MJD13SU10", date: "June 13, 2025", storeUiVersion: "Store UI 1.0", buildType: "developer", buildNumber: 4 },
    { buildId: "S6000Y25MJD19SU20", date: "June 19, 2025", storeUiVersion: "Store UI 2.0", buildType: "developer", buildNumber: 5 },
    { buildId: "S6000Y25MJD27SU30", date: "June 27, 2025", storeUiVersion: "Store UI 3.0", buildType: "developer", buildNumber: 6 },
  ];
  
  res.json(buildData);
});

// Fallback to serve index.html for any unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});