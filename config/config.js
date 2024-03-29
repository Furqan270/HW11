require('dotenv').config()

const config = {
    development : {
        username : process.env.DB_USER,
        password : process.env.DB_PASSWORD, 
        database : process.env.DB_name,
        host : process.env.DB_HOST,
        dialect: 'postgres'
    },
    test:  {
        username : process.env.DB_USER,
        password : process.env.DB_PASSWORD, 
        database : process.env.DB_name,
        host : process.env.DB_HOST,
        dialect: 'postgres'
    }
}

module.exports = config