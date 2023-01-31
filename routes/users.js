var express = require('express');
var router = express.Router();
const {getUsers, postUser, putUser, patchUser, deleteUser} = require("../modules/http/axios_user")

/* GET USER*/
router.get('/', async function(req, res, next) {
  try{
    const {id} = req.query;
    const response = await getUsers();
    const dataUser = response.data;
    let result = dataUser;
    if(id){
      result = dataUser.filter((item) => {
        return item.id===Number(id)
      })
    }
    res.send({
      status: true,
      data: result
    })
  }catch(error){
    console.log(error)
    res.send({
      status: false,
      message: error
    })
  }
});

router.post("/submit", async function(req, res, next){
  try{
    const submitDataUser = await postUser();
    const response = submitDataUser.data;

    res.send({
      status: true,
      data: response
    })
  }catch(error){
    console.log(error)
    res.send({
      status: false,
      message: error
    })
  }
})

router.put("/put/:id", async function(req, res, next){
  try{
    const id = req.params.id;
    const result = Number(id);
    const submitDataUser = await putUser(result);
    const response = submitDataUser.data;
    res.send({
      status: true,
      data: response
    })
  }catch(error){
    console.log(error)
    res.send({
      status: false,
      message: error
    })
  }
})

router.patch("/patch/:id", async function(req, res, next){
  try{
    const id = req.params.id;
    const result = Number(id);
    const submitDataUser = await patchUser(result);
    const response = submitDataUser.data;
    res.send({
      status: true,
      data: response
    })
  }catch(error){
    console.log(error)
    res.send({
      status: false,
      message: error
    })
  }
})

router.delete("/delete/:id", async function(req, res, next){
  try{
    const id = req.params.id;
    const result = Number(id);
    const submitDataUser = await deleteUser(result);
    const response = submitDataUser.data;
    res.send({
      status: true,
      data: response
    })
  }catch(error){
    console.log(error)
    res.send({
      status: false,
      message: error
    })
  }
})

module.exports = router;
