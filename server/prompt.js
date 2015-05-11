var random = require('./random');

var gender = ["male", "female"];
var jobs = ["secret agent", "spy", "bank robber", "thief", "mastermind", "thug", "heavy", "criminal", "robber", "burglar", "car thief", "cop", "policeman", "detective", "private investigator", "police chief", "paramedic", "doctor", "nurse", "insurance salesman", "car salesman", "racer", "dancer", "businessman", "CEO", "celebrity", "socialite"];
var activities = ["bank heist", "cocktail party", "club party", "petty robbery", "shootout", "street race", "night out", "business meeting", "date night", "jewelry heist", "protection racket", "drug deal", "ER trip"];

var personA, personB, activity, prompt;

var makePrompt = function() {
    personA = {};
    personB = {};
    // Get random data from the arrays above
    personA.gender = random(gender);
    personB.gender = random(gender);
    personA.job = random(jobs);
    personB.job = random(jobs);
    activity = random(activities);
    // Compile that data into a silly prompt and return it
    prompt = "When a " + personA.gender + " " + personA.job + " meets the " + personB.gender + " " + personB.job + " of their dreams, will they meet again after the " + activity + "?";
    return prompt;
};

module.exports = makePrompt;