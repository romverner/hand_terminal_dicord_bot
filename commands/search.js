const dateTime = require("node-datetime");
const axios = require('axios');

const CONSTS = {
    WIKI: 'https://expanse.fandom.com/wiki/',
    CORRUPT: 'Message: Ẃ̴̧̖̦̪̲̪̰̖̳̜̖̒̾̈̒̕a̵͔̦̯̲͈̎̒̈̒͐̃̈́͗́͘͝͠r̷̨̮̲̙͍̲̒̀͂̚ǹ̶̨̟͍̺͍̥̹̓̓͋̍͗̾̌͜͝i̵̢̫͔͚̲̩̝̰͎͈̙̩͚̳͂̔̈̍̍̐͆̊͐͗n̴̹̱̱̻͎̿̿͑͒̈́̔̇̀̅̉̚g̵̢͍͔̜̝̼̺͕̘̪̹͈̭̠͇̏̋́͐̓͋͐͘͝͠,̸̡̨̻͎̮̗̦̉͌̄͝ͅ ̶̯̐̂͆̉̇͂͝͠u̴̩̝̣̮̮̙̠͔̹̠̥̲̭̻̓́̓͒̎̌̈́̈́̍̕̚ͅň̶̦̞͕̹̰̺͖̠̪͇̗̻̒̽͐͒̀̇́̒́̕a̶̫̺̫̞͛u̷̢̱̼̹̻͔̘̦͉͌̿̍͒͊̐̀ͅṫ̵̛͈͐̌̌̆̄͝ḩ̵̺͈̣̥̫̗̐͛̅͜o̷̢̪̰̫͇͉̹̽̐͊̇̑̌͘ŗ̶̡͖̪̜͉͈̫̺̗̹̺̪̂̈́͗͜͝i̵̧̡̺͈̼͍̺̱̱̍̓̈͐̀̅̏̈̉͋̚̕z̴̛̻̜̺͙̱̺̝̯̺̥̙͂̓̋̐̈͑͂̌̈́͆̑͠͝ę̸̡̘͓̰̤͚̫͎̟͎̂̍̑̈̂͒̃͝ͅd̸͙͍̻̥̗̍̅̎̄̑̀͌̑͌͒̑̐̉̈ ̶̧͇̘̰̞̞̜̠̯͕͐̇͆͊͒̋̾͂͊͒́̕ǎ̶̫̞͓̳̩͚̘͈̲͉̔̄̓͆̐̈̀̎͑͋́͘̚͜c̶̟̮͖̰̰̜̃̈́̆c̷̨̦̜͖̠̠̠̤͍̜̦̋̃͆̿͜ͅe̷̡̡̡̛̱̖̲̤̥̥͍̖͎̯͛͐͊̎̈́̂͘͝͠s̴̱̹̭̅͜ş̸̨͉͕͎͙̮̖͙͕̍̿͜ ̴͕͇͉̲̒̽̈́͛̃̀d̶̼̬̮̺̥͉͕̙̣̟̅̈́͊̊̍́͑̑̀̈́̍͋̍̈́e̵͎͌̚ţ̷̥͎̼̓̇̒͆̀̔̑͊̈́e̴̜̬̙̙̹̦̥̫̞̫̖̫̾̐̾̾͜ç̸̡͎͖͎̼̪̩͎̫̫̹͉̒́̈̓͜t̵̡̛͇͉͚̣͚͕͕̳̀̀͆́́̀́̈́̈́͊̉͝ͅȇ̴̤̣̻̹͆̈̋̋̈́͑̄̓̕͠ḓ̷̢̡̗̼̐̍.̷͖͇̀̈́̓͘ ̵̡͖́͆̀̒Y̶̤͙̹̾̈́͘ͅǫ̸̧̢̳̪͙̖̮͙͈̦̝̥͑̃̍͝ư̸̛̯͕͙̟̬͎̰̈́̅͐̈́r̶̛͔̪̤̬̟͓̪͙̳̲̭̟͙̓̏̊͐̑͐̎̎͋̍͋͝ ̵͖͕̞͕̲̯̬͚̞̳̇̾́͗̈͜͠s̶̨̛͍̞͚̻̈̽̏̒͒̏̓́̋̔̈́͠͝͝i̶͈̻͈͎̱͍͇̣̫͛g̶̨̱͎̯̱̳̝͍̪͕̟̖̲͕͗̏̐̂̐̓͆̇̽́̀̃̕̕ṉ̸̺̄̒̀ḁ̷̭̪̰̜̥̯̥̯̦̎̈́̈̎̄́̒̅̆̿̇̄̄̚l̷͎̤̉̓̈̐́̔͆̐̐͒͋͠͝ͅ ̵̢̧̼͍̯͓͙̭͈̘̤̖̺̉̈́̀̇͆͊̑̃͊̉͊͝h̶̼̿͑̈́̇̄̅͊͐͒͆̚͝a̸̡̢̦̙͕͖̱̻̙̓̈́̏̾͌̄̈͊̓͋̐̌̕͘͘ͅs̴̛͖͎̱̖̩͇̝̯̜̙̹͙̗͓̓̀̎̂͂́̉̔̉ ̸̛͕̼͇͕̻̳̭̫̥͆͐̕b̴̢̛͓͈̪̈̆̾̃ȇ̵̲͕̩̫̱̩́̈́̂͜͜ͅȇ̸͉̪̻͎̝̤̥̆̈́̍̿͊̇͘ͅͅn̸̹̽̑͆̚̚͠ ̸̰͐͑̍͒̅͆͝͠r̶̥̻͉̜͉͚̘͐́̉̂̈́̒̂͝e̶̢̩̺̎̆̒͜c̶̯͖͕̰̼͇̪̗̏̑͠ơ̷̤͙̟͐̄͌̓̈́̃̉̎͘͜ȓ̸̤͔͇͚̹̝̖̈́́̔͆͆̐̕̚͝͠d̵̡̤͍̺̾́̎͘ệ̵̢̯̗͉͉͇̹̣͚̪̤̜̬̮̓͋̀̽̚͝ḋ̶̦͈͙̹̿̈͑̆́̀̏́͝͝ ̵̱̀̿̂̿́ǻ̸̱̩̬̣͈̖̥̅͒̇̈̏̊̊̚ͅņ̵͉̫̝̪͚̬̮̌̉͒͑̆̀d̵̹̲̣̈̄͋ͅ ̸͖̈́͊t̴̪̜̫̾͐̃r̷̢̛̬̺̗̥̩͍͔̜̩̂̆̑̒̆̉̾́͜͜͠͝͝a̴̧̖͎̠͚͌͗̏͑̋́͂̚̕͝c̷̦̳̰̬̝̔̓͛̀̽͛̔̎̄͘͜͠ē̸̬̬̘̜̯͕̙̦̈́̀d̵̥͈̪̲͓̀̇̅̿̋̇̍̚͝.̷̢̢͓̳̤͉͍̤̼͚̫͇̻͇̺̌͒͠',
    GOOGLE: 'https://www.google.com/search?hl=&site=&q=the+expanse+'
};

module.exports = (msg) => {
    strArr = msg.content.split('search ');
    searchURL = `${CONSTS.WIKI}${strArr[1].replace(/ /g, "_")}`;
    
    var dt = dateTime.create();

    // Primitive GET query to see if wiki endpoint exists. If yes,
    // provide link, else return google results as error.
    axios.get(searchURL).then(response => {
        msg.reply(`
            **PRIVATE DATA ACCESSED:**
                11.222.333.44 - - [${new Date(dt.now())}]
                
                Aggregate results from OPA, MCR(N), UN databases: 
                ${searchURL}
        `);

        if (msg.content.toLowerCase().includes('protomolecule')) {
            msg.reply('Incoming message detected. Please stand by...');
            setTimeout(() => {
                msg.reply(CONSTS.CORRUPT);
                setTimeout(() => {
                    msg.reply('I could not trace the origin of the message.');
                }, 3000);
            }, 2500);
        };
    })
    .catch((error) => {
        msg.reply(`
        **NO PRIVATE DATA AVAILABLE:**
            11.222.333.44 - - [${new Date(dt.now())}]
            
            I was unable to access information on the OPA, MCR(N), or UN servers.
            Here is publicly available information:
                ~ ~ CAUTION - - UNVERIFIED RESULTS ~ ~
                ${CONSTS.GOOGLE}${strArr[1].replace(/ /g, "+")}
            `);
    })
};