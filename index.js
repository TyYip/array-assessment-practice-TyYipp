const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach((book) => console.log(book.authorFirst, "wrote", book.name, "in", book.publishDate));
//Sort books from oldest to most recent
//"--- wrote --- in ---"
const dates = books.sort(function (books1, books2) {
  return books1.publishDate - books2.publishDate;
});
console.log(dates);
//sort books alphabetically
titles.sort();
console.log(titles);
//Find who wrote War and Peace
const obj = books.find(book => book.name === 'War and Peace');
console.log(obj.authorFirst, obj.authorLast);
//how many books were written before 1900?
const greater1900 = books.filter((book) => {
  return book.publishDate < 1900;
});
console.log(greater1900);
//was there at least one book published within the last 100 years?
const greater100 = books.filter((book) => {
  return book.publishDate > 1923;
});
if (greater100.length > 0) {
console.log("yes there is at least one book published within the last 100 years")
}
else {
console.log("no there is no book published within the last 100 years");
}
//was every book published within the last 100 years?
const greater = books.filter((book) => {
  return book.publishDate > 1923;
});
const great = books.filter((book) => {
  return book.publishDate;
});
if (greater === great) {
console.log("yes every book published within the last 100 years");
}
else {
console.log("no not every book published within the last 100 years ");
}
//print a list of books that "includes" the genre historical
const fill = books.filter(function(history) {
  return history.genre === 'historical';
});
console.log(fill);
