var express = require('express');
var router = express.Router();
const {getPosts, postPost, putPost, patchPost, deletePost} = require("../modules/http/axios_post")

/* GET USER*/
router.get('/', async function(req, res, next) {
  try{
    const {id} = req.query;
    const response = await getPosts();
    const dataPost = response.data;
    let result = dataPost;
    if(id){
      result = dataPost.filter((item) => {
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
    const submitDataPost = await postPost();
    const response = submitDataPost.data;

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
    const submitDataUser = await putPost(result);
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
    const submitDataPost = await patchPost(result);
    const response = submitDataPost.data;
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
    const submitDataPost = await deletePost(result);
    const response = submitDataPost.data;
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
