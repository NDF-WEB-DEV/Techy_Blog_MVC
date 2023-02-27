// connect to you db
const sequelize = require('../config/connection');
// pull in your models
// example const { User, Project } = require('../models');

// create your seed data
// example: 
// const userData = [
//     {
//         id: 1,
//         username: 'fkdslfdsk',
//         password: 'chicken',
//         email: 'ifowejfi@chicken.com'
//     }
// ]

// write a function to push that fake data into the database
const seedDatabase = async () => {
    // connect to your database
    await sequelize.sync({ force: true });

    // use the bulkcreate function to push your whole array
    // -- of fake data into your database
    // example:
    /*
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    */

    // stop the database
    process.exit(0);
};

// call the function to push that data into the database
seedDatabase();
