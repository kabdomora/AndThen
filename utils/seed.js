const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThought, getRandomUser, getRandomEmail, genRandomIndex } = require('./data');

console.time('seeding');

connection.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [];
    const thoughts = [];



    const createUser = () => {

        let userLength = Math.floor(Math.random(15));

        users.push({
            username: getRandomUser(userLength),
            email: getRandomEmail(userLength),
            friends: [users[genRandomIndex(users)]._id],
            thoughts: [thoughts[genRandomIndex(thoughts)]._id],
        });
    };

    let strings = Math.floor(Math.random(30));

    for (let i = 0; i < strings; i++) {    
        thoughts.push({
            thoughtText: getRandomThought(strings),
            username: [users[genRandomIndex(users)].username],            
        });
    }

    await Thought.collection.insertMany(thoughts);

    thoughts.forEach(() => createUser());

    await User.collection.insertMany(users);

    console.table(thoughts);
    console.table(users, ['username', 'email', '_id']);
    console.timeEnd('seeding');
    process.exit(0);
});