import { Sequelize } from 'sequelize';

const db = new Sequelize('blog','root','',{
    host: "localhost",
    dialect: "mysql"
});


try{
    await db.authenticate();
    console.log("Server succesfully established")
} catch(err){
    console.log("Unable to connect to the database:",err)
}

export default db;