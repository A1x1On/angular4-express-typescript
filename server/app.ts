/// <reference path="./typings/index.d.ts" />
import * as express from "express";
import { join } from "path";
import * as favicon from "serve-favicon";
import { json, urlencoded } from "body-parser";

import { loginRouter } from "./routes/login";

//import BaseRoutes = require("./routes/new");
import BaseRoutes = require("./backend/services/newService");
import { protectedRouter } from "./routes/protected";

const app: express.Application = express();
app.disable("x-powered-by");

let root = process.cwd();

app.use(express.static(join(__dirname, '/dist/src')));

app.use(json());
app.use(urlencoded({ extended: true }));

// api routes


console.log('__dirname ', __dirname);

// API ошибки будем обрабатывать своим JSON ответом


app.use("/login", loginRouter);

app.use('/api', new BaseRoutes().routes);

//app.use('/api', function (error: any, req: express.Request, res: express.Response, next: express.NextFunction){
//  res.status(statusCode).json({error});
//});


app.use('/dest/src', express.static(join(__dirname, '../src')));
app.use('/dest/server/backend', express.static(join(__dirname, '../server/backend')));

// error handlers
// development error handler
// will print stacktrace
if (app.get("env") === "development") {

  app.use(express.static(join(__dirname, '../node_modules')));

  app.use(function(err, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
      error: err,
      message: err.message
    });
  });
}

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
  let err = new Error("Not Found");
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message
  });
});

app.all('*', (req: any, res: any) => {  // все остальное отправляем в dist/front/index.html/angularRoute
  res.status(200).sendFile(join(process.cwd(), '/dist/src', '/index.html'));
});




export { app }
