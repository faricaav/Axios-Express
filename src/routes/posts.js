var express = require('express');
var router = express.Router();
const {getPostsData, postPostsData, putPostsData, patchPostsData, deletePostsData } = require("../controllers/posts")
const {validateQuery, validateBody} = require("../middleware/validation")

/* GET USER*/
router.get('/', validateQuery, getPostsData);

router.post("/submit", validateQuery, validateBody, postPostsData)

router.put("/put/:id", validateQuery, putPostsData)

router.patch("/patch/:id", validateQuery, patchPostsData)

router.delete("/delete/:id", validateQuery, deletePostsData)

module.exports = router;
