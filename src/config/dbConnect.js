import mysql from 'mysql'


const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

dbConnection.on('error', (error) => {
    console.error('Erro na conexão com o bando de dados: ', error)
})

dbConnection.once('open', () => {
    console.log('Conexão com o banco de dados efetuada com sucesso!')
})

export default dbConnection