require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Test API Route
app.get('/api/test', (req, res) => {
    res.json({ message: "Backend is working!" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));

