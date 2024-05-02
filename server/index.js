const express = require("express")
const dotenv = require("dotenv")
const path = require("path")
dotenv.config()
const app = express()
// Serve static assets from the React application's dist/ folder
const distPath = path.join(__dirname, "../giphy-search/dist")
app.use(express.static(distPath))
// Giphy API endpoint to fetch trending GIFs
app.get("/api/gifs", async (req, res) => {
  const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=3`
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error("Error fetching GIFs:", error)
    res.status(500).json({ error: "Failed to fetch GIFs" })
  }
})
// Search endpoint to handle user search requests
app.get("/api/search", async (req, res) => {
  const searchTerm = req.query.search
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchTerm}`
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error("Error searching GIFs:", error)
    res.status(500).json({ error: "Failed to search GIFs" })
  }
})
// Start the server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
