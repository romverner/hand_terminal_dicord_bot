// Returns random integer in range. Inclusive.
const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const rollDice = (message, numDice, sides, modifier=0) => {
    let [sum, meta] = [0, []];
    
    for (let i = 0; i < numDice; i++) {
        var roll = randomInteger(1, parseInt(sides));
        meta.push(roll);
        sum += roll;
    };

    sum += parseInt(modifier);

    const displayMeta = (metaArr) => {
        let metaString = '';
        metaArr.forEach((roll, i) =>  {
            metaString += (i === 0) ? `Roll ${i+1}: ${roll}` : `
                    Roll ${i+1}: ${roll}`;
        });
        return metaString;
    };

    message.reply(`
        **ROLL RESULTS:**
            **INPUT:** ${message.content.split('roll ')[1]}
            **FINAL SUM:** ${sum}
            **META:**
                Number of _${sides}_-sided dice cast: _${numDice}_
                    ${displayMeta(meta)}
                Modifier added: _${modifier}_
    `);
};

module.exports = (msg) => {
    let parsedMsgArr  = msg.content.split('roll ');

    if (parsedMsgArr[1].includes('d')) {
        let parsedCastArr = parsedMsgArr[1].split('d');
        let isModified    = (parsedCastArr[1].includes('+') || 
                             parsedCastArr[1].includes('-'));
        
        // If we detected the 'dieString' had an operator:
        if (isModified) {
            let parsedModifierArr = (parsedCastArr[1].includes('+')) ? 
                                     parsedCastArr[1].split('+') : 
                                     parsedCastArr[1].split('-');

            let [ numDice, sides, modifier ] = [
                parsedCastArr[0], 
                parsedModifierArr[0], 
                parsedModifierArr[1]
            ];

            if (parsedCastArr[1].includes('-')) {
                modifier = -Math.abs(parseInt(modifier));
            };

            rollDice(msg, numDice, sides, modifier);
        } else {
            let [numDice, sides] = [parsedCastArr[0], parsedCastArr[1]];
            rollDice(msg, numDice, sides);
        };
    };
};