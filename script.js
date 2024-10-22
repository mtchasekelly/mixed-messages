// Store the message components 
const messageComponents = {
    types: ['This is the best joke ever',
        'This is the worst joke ever', 
        'This is the funniest joke ever',
        'This is the silliest joke ever',
        'This is the cleverest joke ever'],

    questions: ['Why did the lady put lipstick on her forehead',
        'Why do dolphins sing off-key',
        'Why don\'t zombies eat clowns',
        'Why is it so hard to drive in a screw',
        'Why shouldn\'t you trust atoms',
        'Why shouldn\'t you tell pigs your secrets',
        'Why did the teacher go to the eye doctor',
        'Why should you take advice from a porcupine', 
        'Why do libraries have elevators'],
              
    punchlines: ['she was trying to makeup her mind',
                'you can\'t tuna fish',
                'you can\'t tuna fish',
                'it doesn\'t have a steering wheel',
                'they make up everything',
                'they always squeal',
                'they couldn\'t control their pupils',
                'they have a lot of good points',
                'they have a lot of stories']    
      
}

// Generate a random selection
const generateRandOption = (option) => {
    return Math.floor(Math.random() * option);
}

// Store the nonsensical joke
let nonsensicalJoke = [];

// Formulate the nonsensical joke
// Iterate through each array in the object, make a random selection from each
for (let selection in messageComponents) {
    let selectOption = generateRandOption(messageComponents[selection].length);

    switch (selection) {

        case 'types':      
        nonsensicalJoke.push(`${messageComponents[selection][selectOption]}:`);
        break;

        case 'questions':
            nonsensicalJoke.push(`${messageComponents[selection][selectOption]}?`);
            break;

        case 'punchlines':
            nonsensicalJoke.push(`Because ${messageComponents[selection][selectOption]}!`);
            break;    

        default:
            nonsensicalJoke.push("Unfortunately, we cannot tell you a joke at this time.");
            break;

    }
}

// Test 
// console.log(nonsensicalJoke);

// Put the program together 
const finalNonsensicalJoke = () => {
    console.log(nonsensicalJoke.join('\n'));
}

// Call the function
finalNonsensicalJoke();











