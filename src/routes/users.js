var express = require('express');
var router = express.Router();
const {getUsersData, postUsersData, putUsersData, patchUsersData, deleteUsersData} = require("../controllers/users")
const {validateQuery, validateBody} = require("../middleware/validation")

/* GET USER*/
router.get('/', validateQuery, getUsersData);

router.post("/submit", validateQuery, validateBody, postUsersData)

router.put("/put/:id", validateQuery, putUsersData)

router.patch("/patch/:id", validateQuery, patchUsersData)

router.delete("/delete/:id", validateQuery, deleteUsersData)

module.exports = router;
