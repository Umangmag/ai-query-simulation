const express = require("express");
const router = express.Router();
const { queryData, explainQuery, validateQuery } = require("./controllers");

router.post("/query", queryData);
router.post("/explain", explainQuery);
router.post("/validate", validateQuery);

module.exports = router;
