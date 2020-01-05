const mongoose = require("mongoose");
const books = mongoose.model('books', { name: String });

const book = new books({
    name: "node learning",
});

// module.exports = mongoose.model("Book", BookSchema);
book.save().then(() => console.log('books'));