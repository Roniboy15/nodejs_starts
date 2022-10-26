const http = require("http");
const fs = require("fs"); // file system

// http -> מודול שיודע להריץ שרת
const server = http.createServer((req,res) => {
  // קורא את הקובץ
  // fs.readFile("public/spring.html",(err,data) => {
  fs.readFile("public"+req.url,(err,data) => {
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write("<h2>Page 404, not found</h2>");
      res.end();
      return console.log(err)
    }
    console.log(data.toString());
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write("<h2>Hello from server of nodejs 33333</h2>");
    // מחזיר את המידע שנקרא מהקובץ הטמל בצורת באפר
    // לסטרינג ומגיש אותו לדפדפן
    res.write(data.toString());
    // .end -> סיום שיגור
    res.end();
  })
  
})
//  מפעיל את השרת ומאזין לפורט 3001
// localhost:3001
server.listen(3001);