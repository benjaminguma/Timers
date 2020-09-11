const express = require("express");
const app = express();
//routes
const TimersRoute = require("./routes/timers");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   res.header("access-control-allow-origin", "*");
//   res.header(
//     "Access-Control-Allow-methods",
//     "GET,POST,PUT,PATCH,OPTIONS,DELETE"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-requested-with,Content-Type,Accept"
//   );
//   next();
// });
app.use("/timers", TimersRoute);
app.listen(3001);
