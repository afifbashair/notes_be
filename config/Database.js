import {Sequelize} from "sequelize";

const db = new Sequelize('notes_db','admin','praktikumcc',{
    host: '34.132.46.92',
    dialect: 'mysql'
});

try {
    await db.authenticate();
    console.log("Database connected...");
} catch (error) {
    console.error("Database connection failed..", error);
}

export default db;
