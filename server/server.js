const express = require('express');
const mongoose = require('mongoose');

// Create an Express application
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Define routes
app.use('/api/categories', require('./routes/categories'));
app.use('/api/blogs', require('./routes/blogs'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
