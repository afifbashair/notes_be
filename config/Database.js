import {Sequelize} from "sequelize";

const db = new Sequelize('notes_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

try {
    await db.authenticate();
    console.log("Database connected...");
} catch (error) {
    console.error("Database connection failed..", error);
}

export default db;