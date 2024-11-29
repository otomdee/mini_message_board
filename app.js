const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRoute");
const newMessageRouter = require("./routes/newMessageRoute");


const app = express();

app.use('/', indexRouter);
app.use('/new', newMessageRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
})