// Store the message components 
const messageComponents = {
    types: ['best', 'worst', 'funniest', 'silliest', 'cleverest', 'sweetest'],
    questions: ['Why did the lady put lipstick on her forehead',
               'Did you hear about the invisible man who went to the doctor',
               'Why do dolphins sing off-key',
               'Did you hear about the computer that went to the doctor',
               'Why don\'t zombies eat clowns',
               'Did you hear about the dull pencil',
               'Why is it so hard to drive in a screw',
               'Where do spiders buy their clothes',
               'Did you hear about the emotional wedding',
               'Why shouldn\'t you trust atoms'],
    punchlines: ['She was trying to makeup her mind',
                'He\'s still waiting to be seen',
                'Because you can\'t tuna fish',
                'It had a virus',
                'Because they taste funny',
                'It was pointless',
                'Because it doesn\'t have a steering wheel',
                'On the web',
                'Even the cake was in tiers',
                'They make up everything'] 
}

// Generate a random selection
const generateRandOption = (option) => {
    return Math.floor(Math.random() * option);
}

// Store the nonsensical joke
let nonsensicalJoke = [];

// Iterate through each array in the object, make a random selection from each
for (let selection in messageComponents) {
    let selectOption = generateRandOption(messageComponents[selection].length);

    switch (selection) {

        case 'types':      
            nonsensicalJoke.push(`Prepare to hear the 
                ${messageComponents[selection][selectOption]} joke you'll ever hear...`);
            break;

        case 'questions':
            nonsensicalJoke.push(`${messageComponents[selection][selectOption]}?`);
            break;

        case 'punchlines':
            nonsensicalJoke.push(`${messageComponents[selection][selectOption]}!`);
            break;

        default:
            nonsensicalJoke.push("Unfortunately, we cannot tell you a joke at this time.");
            break;

    }
}

// Test 
console.log(nonsensicalJoke);








