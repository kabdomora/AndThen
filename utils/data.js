let domains = [
    "gmail.com",
    "hotmail.com",
    "yahoo.com",
    "ucla.edu",
];

const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomUser = (userLength) => {
    let username ='';

    for (let i=0; i < userLength; i++) {
            username += String.fromCharCode(Math.floor(Math.random()*26)+97);
    }

    return username;
};

const getRandomEmail = (userLength) => {
    let email ='';
    for (let i=0; i < userLength; i++) {
        email += String.fromCharCode(Math.floor(Math.random()*26)+97);
    }

    email += Math.random(domains);

    return email;
};

const phrases = [
    "The quick brown fox jumps over the lazy dog",
    "All that glitters is not gold",
    "A watched pot never boils",
    "Actions speak louder than words",
    "As you sow, so shall you reap",
    "Behind every great man is a great woman",
    "Better late than never",
    "Birds of a feather flock together",
    "Don't count your chickens before they hatch",
    "Don't put all your eggs in one basket",
    "Easy come, easy go",
    "Every cloud has a silver lining",
    "Every dog has its day",
    "Every man has his price",
    "Everything happens for a reason",
    "Familiarity breeds contempt",
    "Fortune favors the bold",
    "Honesty is the best policy",
    "If at first you don't succeed, try, try again",
    "Ignorance is bliss",
    "It takes two to tango",
    "Laughter is the best medicine",
    "Let sleeping dogs lie",
    "Life is like a box of chocolates",
    "Money can't buy happiness",
    "Necessity is the mother of invention",
    "No pain, no gain",
    "Nothing ventured, nothing gained",
    "One man's trash is another man's treasure",
    "Practice makes perfect",
    "Rome wasn't built in a day"
  ];

const getRandomThought = () => {
    let thought = '';    

    return thought += `${phrases[genRandomIndex(phrases)]}`;
    
};

module.exports = {
    getRandomUser,
    getRandomThought,
    genRandomIndex,
    getRandomEmail,
};
  