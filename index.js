const express = require("express");
const app = express();
const port = 3000;
const booksDirRoute = require ('./routes/booksDir')

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/books", booksDirRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({message : err.message});
    return
})

app.get("/", (req, res) => {
  res.json({ alert: "Selamat Datang di Anu" });
});

app.listen(port, () => {
  console.log(`Aplikasi Berjalan di http://localhost:${port}`);
});