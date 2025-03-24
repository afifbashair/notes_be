import {Sequelize} from "sequelize";

const db = new Sequelize('notes_db','root','',{
    host: '34.27.151.250',
    dialect: 'mysql'
});

try {
    await db.authenticate();
    console.log("Database connected...");
} catch (error) {
    console.error("Database connection failed..", error);
}

export default db;
