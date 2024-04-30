
const { v4: uuidv4 } = require('uuid');

let users=[
    {
        id: uuidv4(),
        username:" Kaniz",
        email: "kf@gmail.com",
    },
    {
        id: uuidv4(),
        username:"ABC",
        email: "abc@test.com",
    },
]

module.exports=users;
