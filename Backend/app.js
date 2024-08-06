var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require("./DBConnection");
var cors = require("cors");
var path = require("path");
var Adsign = require("./Routes/adsign");
var signup = require("./Routes/signup");
var login = require("./Routes/login");
var Adlogin = require("./Routes/adlogin");
var honda_Submit = require("./Routes/honda")
var hondia_Submit = require("./Routes/hondia")
var suzuki_Submit = require("./Routes/suzuki")
var bmw_Submit = require("./Routes/bmw")
var honda_Display = require("./Routes/honda")
var hondia_Display = require("./Routes/hondia")
var suzuki_Display = require("./Routes/suzuki")
var bmw_Display = require("./Routes/bmw")
var honda_Update = require("./Routes/honda")
var hondia_Update = require("./Routes/hondia")
var suzuki_Update = require("./Routes/suzuki")
var bmw_Update = require("./Routes/bmw")
var honda_Delete = require("./Routes/honda")
var hondia_Delete = require("./Routes/hondia")
var suzuki_Delete = require("./Routes/suzuki")
var bmw_Delete = require("./Routes/bmw")
var cartItems = require("./Routes/cart")
var displayCart = require("./Routes/cart-display")
var removeCart = require("./Routes/remove-cart");
const stripe = require('./stripe-gateway');
const webhook = require('./web-hook');
//======================================APPLICATION=========================================
var app = express(); // Intializing App
app.use('/api', webhook);
// view engine setup
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use("/Public", express.static(path.join(__dirname, 'Public')));
// Connect to the DataBase
connectDB();

// ========================================End-Points===============================
app.use("/AdminSignIn", Adsign);
app.use("/AdminLogin", Adlogin);
app.use("/Honda-SubmitCars", honda_Submit);
app.use("/Hondia-SubmitCars", hondia_Submit);
app.use("/Suzuki-SubmitCars", suzuki_Submit);
app.use("/Bmw-SubmitCars", bmw_Submit);
app.use("/Honda-DisplayCars", honda_Display);
app.use("/Hondia-DisplayCars", hondia_Display);
app.use("/Suzuki-DisplayCars", suzuki_Display);
app.use("/Bmw-DisplayCars", bmw_Display);
app.use("/Honda-UpdateCars", honda_Update);
app.use("/Hondia-UpdateCars", hondia_Update);
app.use("/Suzuki-UpdateCars", suzuki_Update);
app.use("/Bmw-UpdateCars", bmw_Update);
app.use("/Honda-DeleteCars", honda_Delete);
app.use("/Hondia-DeleteCars", hondia_Delete);
app.use("/Suzuki-DeleteCars", suzuki_Delete);
app.use("/Bmw-DeleteCars", bmw_Delete);
app.use("/Customer-Signup", signup);
app.use("/Customer-Login", login);
app.use("/CartItems", cartItems);
app.use("/Display-Cart", displayCart);
app.use("/Remove-Cart", removeCart);
app.use('/api/stripe', stripe);
// Apply raw body parser for Stripe webhook endpoint
//===========================================================================

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
