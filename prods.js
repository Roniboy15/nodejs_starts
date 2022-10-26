const express = require("express");
const {prods_ar} = require("../data/prodsJson");
const router = express.Router();

// localhost:3002/prods -> ביחס למה שהוגדר ביוז בקובץ קונפיג
router.get("/", (req,res) => {
  // res.json({msg:"Prods work"});
  res.json(prods_ar);
})

//  localhost:3002/prods/single/
// :index -> מייצג את פארמס שאפשר לאסוף 
// ולא כתובת סטטית
router.get("/single/:index",(req,res) => {
  // איסוף פרמס מהכתובת יו אר אל 
  // res.json({msg:"you choose:"+req.params.index})
  let index = req.params.index;
  res.json(prods_ar[index])
})

module.exports = router;