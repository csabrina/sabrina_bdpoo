let Sequelize = require("sequelize");

let db = new Sequelize(
    "postgres://itiqaqrhudheos:49e1118e31cd6aeeb9e42a90aa83fdf3bd50043630a176d8252e32267f994c75@ec2-54-145-249-177.compute-1.amazonaws.com:5432/da9coh0ahdu79o",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
            }
        }
    }
);

module.exports = db;