var express = require('express');
const {getPosts, postPost, putPost, patchPost, deletePost} = require("../modules/http/axios_post")

const getPostsData = async (req, res) => {
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
}

const postPostsData = async (req, res) => {
    const dataBody = req.body
    console.log(dataBody, 'dataBody')
    try{
        const submitDataPost = await postPost();
        const response = submitDataPost.data;
    
        res.send({
          status: true,
          data: response,
          reqBody: dataBody
        })
    }catch(error){
        console.log(error)
        res.send({
          status: false,
          message: error
        })
    }
}

const putPostsData = async (req, res) => {
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
}

const patchPostsData = async (req, res) => {
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
}

const deletePostsData = async (req, res) => {
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
}

module.exports={getPostsData, putPostsData, postPostsData, patchPostsData, deletePostsData}