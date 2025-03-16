"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_config_1 = __importDefault(require("./db/db.config"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const _dirname = path_1.default.resolve();
const port = process.env.PORT;
async function fetchBooks(req, res) {
    try {
        const result = await db_config_1.default.query("SELECT * FROM public.books ORDER BY id ASC");
        const books = result.rows;
        const { search, genre, yearRange, sortBy } = req.query;
        let filteredBooks = [...books];
        if (search) {
            const searchTerm = search.toLowerCase().trim();
            filteredBooks = filteredBooks.filter(book => book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm) ||
                book.description.toLowerCase().includes(searchTerm));
        }
        if (genre) {
            filteredBooks = filteredBooks.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
        }
        if (yearRange) {
            switch (yearRange) {
                case 'pre-1900':
                    filteredBooks = filteredBooks.filter(book => parseInt(book.year) < 1900);
                    break;
                case '1900-1950':
                    filteredBooks = filteredBooks.filter(book => parseInt(book.year) >= 1900 && parseInt(book.year) <= 1950);
                    break;
                case 'post-1950':
                    filteredBooks = filteredBooks.filter(book => parseInt(book.year) > 1950);
                    break;
            }
        }
        if (sortBy) {
            switch (sortBy) {
                case 'title-asc':
                    filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'title-desc':
                    filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                case 'year-asc':
                    filteredBooks.sort((a, b) => parseInt(a.year) - parseInt(b.year));
                    break;
                case 'year-desc':
                    filteredBooks.sort((a, b) => parseInt(b.year) - parseInt(a.year));
                    break;
                case 'pages-asc':
                    filteredBooks.sort((a, b) => parseInt(a.pages) - parseInt(b.pages));
                    break;
                case 'pages-desc':
                    filteredBooks.sort((a, b) => parseInt(b.pages) - parseInt(a.pages));
                    break;
            }
        }
        const stats = {
            totalBooks: filteredBooks.length,
            avgPages: filteredBooks.length
                ? Math.round(filteredBooks.reduce((sum, book) => sum + parseInt(book.pages), 0) / filteredBooks.length)
                : 0,
            oldestBook: filteredBooks.length
                ? Math.min(...filteredBooks.map(book => parseInt(book.year)))
                : null,
            uniqueGenres: new Set(filteredBooks.map(book => book.genre)).size
        };
        res.json(filteredBooks);
        return filteredBooks;
    }
    catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Internal server error" });
        return [];
    }
}
app.get('/api/books', async (req, res) => {
    try {
        await fetchBooks(req, res);
    }
    catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.get('/api/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db_config_1.default.query("SELECT * FROM books WHERE id = $1", [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: "Book not found" });
            return;
        }
        res.status(200).json(result.rows[0]);
    }
    catch (error) {
        console.error("Error getting book:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
//update user 
//delete user  
//create a book
app.post("/api/books", async (req, res) => {
    try {
        const { title, author, genre, year, pages, publisher, description, image, price } = req.body;
        const bookResult = await db_config_1.default.query(`INSERT INTO books (title, author, genre, year, pages, publisher, description, image, price) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, [title, author, genre, year, pages, publisher, description, image, price]);
        res.status(201).json({
            message: "Book created successfully",
            book: bookResult.rows[0]
        });
    }
    catch (error) {
        console.error("Error creating book:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.put('/api/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, genre, year, pages, publisher, description, image, price } = req.body;
        const checkBook = await db_config_1.default.query("SELECT * FROM public.books WHERE id = $1", [id]);
        if (checkBook.rows.length === 0) {
            res.status(404).json({ message: "Book not found" });
            return;
        }
        const result = await db_config_1.default.query("UPDATE books SET title=$1, author=$2, genre=$3, year=$4, pages=$5, publisher=$6, description=$7, image=$8, price=$9, updated_at=NOW() WHERE id=$10 RETURNING *", [title, author, genre, year, pages, publisher, description, image, price, id]);
        res.json({ message: "Book updated successfully", book: result.rows[0] });
    }
    catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.delete('/api/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const checkBook = await db_config_1.default.query("SELECT * FROM public.books WHERE id = $1", [id]);
        if (checkBook.rows.length === 0) {
            res.status(404).json({ message: "Book not found" });
            return;
        }
        await db_config_1.default.query("DELETE FROM public.books WHERE id = $1", [id]);
        res.json({ message: "Book deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}😊😊`);
});
// app.use(cors({
//   origin: 'http://localhost:3000',
//methods: 'GET,POST,PUT,DELETE',
// credentials: true}))
