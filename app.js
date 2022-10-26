const express = require("express");
const http = require("http");
const path = require("path");
const {routesInit} = require("./routes/config_routes") 


// app -> מקבל את היכולות והתכונות של אקספרס
const app = express();

// פונקציית אמצע שמגדירה שתקיית פאבליק וכל הקבצים שנמצאים
// בתוכה יהיו חשופים לצד לקוח בדפדפן
app.use(express.static(path.join(__dirname,"public")));

// הגדרת ראוט מקצועי שמחזיר לצד לקוח ג'ייסון
// localhost:3002/user -> מחזיר ג'ייסון
// זימון של פונקציה שמגדירה את כל הרואטים שיהיו בפרוייקט
routesInit(app);

const server = http.createServer(app);

server.listen(3002);

console.log("app work");
