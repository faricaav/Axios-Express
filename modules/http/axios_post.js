const axios = require("axios");

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'content-type': 'application/json'}
})

const getPosts = () => {
    return instance.get("/posts")
}

const postPost = () => {
    return instance.post("/posts", {
        method: 'POST',
        body: JSON.stringify({
            userId: "1",
            title: "This is Title",
            body: "This is Body"
        }),
    })
}

const putPost = (item) => {
    return instance.put(`/posts/` + item, {
        method: 'PUT',
        body: JSON.stringify({
            userId: "2",
            title: "This is Title",
            body: "This is Body"
        }),
    })
}

const patchPost = (item) => {
    return instance.put(`/posts/` + item, {
        method: 'PATCH',
        body: JSON.stringify({
            body: "This is a New Body"
        }),
    })
}

const deletePost = (item) => {
    return instance.put(`/posts/` + item, {
        method: 'DELETE'
    })
}

module.exports = {getPosts, postPost, putPost, patchPost, deletePost};