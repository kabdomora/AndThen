const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThought, getRandomEmail, genRandomIndex, getRandomUsername } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    await Thought.deleteMany({});    

    const users = [];
    const thoughts = getRandomThought(5);  

    for (let i = 0; i < 30; i++) {

        users.push({
            username: getRandomUsername(Math.floor(Math.random()*15)),
            email: getRandomEmail(Math.floor(Math.random()*15)),
            thoughts: [thoughts[genRandomIndex(thoughts)]._id],
        }); 
    }

    await Thought.collection.insertMany(thoughts);
    await User.collection.insertMany(users);

    console.table(thoughts);
    console.table(users, ['username', 'email', '_id']);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});