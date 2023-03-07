const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThought, getRandomUser, genRandomIndex } = require('./data');

console.time('seeding');

connection.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [];
    const thoughts = [];

    const createUser = (user) => {
        users.push({
            username,
            email,
            friends: [users[genRandomIndex(users)]._id],
        });
    };

    for (let i = 0; i < 10; i++) {
        const staticUser = getRandomThought();

        thoughts.push({
            thoughtText,
            username: staticUser,            
        });
    }

    await Thought.collection.insertMany(thoughts);

    thoughts.forEach(() => makePost(getRandomUser(10)));

    await User.collection.insertMany(users);

    console.table(thoughts);
    console.table(users, ['username', 'email', '_id']);
    console.timeEnd('seeding');
    process.exit(0);
});