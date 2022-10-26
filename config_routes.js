// קובץ שבו יוגדרו כל הראוטים של האיי פי איי שלנו
const usersR = require("./users");
const prodsR = require("./prods");


exports.routesInit = (app) => {
  app.use("/users", usersR);
  app.use("/prods", prodsR);

}