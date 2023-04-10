const express = require("express");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const magicRouter = require("./routes/magic");
const articlesRouter = require("./routes/articles");
const catalogRouter = require("./routes/catalog"); //Import routes 
app = express();
//mongodb+srv://gergestannous:<password>@cluster0.eegazyo.mongodb.net/?retryWrites=true&w=majority
// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = "mongodb+srv://gergestannous:LbjWwuKrqmDuN2w7@cluster0.eegazyo.mongodb.net/?retryWrites=true&w=majority";

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

//setting view engine to ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/articles", articlesRouter);
app.use("/magic", magicRouter);
app.use("/catalog", catalogRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
  });
  
  // error handler
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    console.log(err.message);
    // render the error page
    res.status(err.status || 500);
    res.render("error", {err} );
  });
  
module.exports = app;

app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});