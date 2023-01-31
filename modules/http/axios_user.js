const axios = require("axios");

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'content-type': 'application/json'}
})

const getUsers = () => {
    return instance.get("/users")
}

const postUser = () => {
    return instance.post("/users", {
        method: 'POST',
        body: JSON.stringify({
            name: 'Farica',
            username: 'ica',
            email: 'faricavashti15@gmail.com',
            addres: 'Malang',
            phone: '08123456789',
            website: "farica.com",
            company: 'DAnS'
        }),
    })
}

const putUser = (item) => {
    return instance.put(`/users/` + item, {
        method: 'PUT',
        body: JSON.stringify({
            name: 'Farica',
            username: 'ica',
            email: 'faricavashti15@gmail.com',
            addres: 'Malang',
            phone: '08123456780',
            website: "farica.com",
            company: 'DAnS'
        }),
    })
}

const patchUser = (item) => {
    return instance.put(`/users/` + item, {
        method: 'PATCH',
        body: JSON.stringify({
            username: 'farica'
        }),
    })
}

const deleteUser = (item) => {
    return instance.put(`/users/` + item, {
        method: 'DELETE'
    })
}

module.exports = {getUsers, postUser, putUser, patchUser, deleteUser};