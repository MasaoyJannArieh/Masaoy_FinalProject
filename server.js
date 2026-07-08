require('dotenv').config();
console.log("MONGODB_URI =", process.env.MONGODB_URI);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const Book = mongoose.model('Book', new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    publicationYear: Number,
    status: String,
    rating: Number,
    coverUrl: String
}));

// GET all books
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET one book
app.get('/books/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
});

// ADD book
app.post('/books', async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.json(book);
});

// UPDATE book
app.put('/books/:id', async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(book);
});

// DELETE book
app.delete('/books/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});