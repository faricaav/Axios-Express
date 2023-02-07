var express = require('express');
const {getUsers, postUser, putUser, patchUser, deleteUser} = require("../modules/http/axios_user")

const getUsersData = async (req, res) => {
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
}

const postUsersData = async (req, res) => {
    const dataBody = req.body
    console.log(dataBody, 'dataBody')
    try{
        const submitDataUser = await postUser();
        const response = submitDataUser.data;
    
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

const putUsersData = async (req, res) => {
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
}

const patchUsersData = async (req, res) => {
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
}

const deleteUsersData = async (req, res) => {
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
}

module.exports={getUsersData, postUsersData, putUsersData, patchUsersData, deleteUsersData}