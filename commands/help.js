const CMDS = `Here are the things I can assist you with:

                        ~ ~ Transcript ~ ~

**ROLLING DICE:**
    To roll dice, type the word 'roll', followed by a space, and
    then the dice combination you wish to roll using the following
    nomenclature:
    |----------------------------------------------------------
    |   **WITH MODIFIER:**
    |   (# of dice to roll)d(number of sides)+(stat modifier)
    |   **Examples:**
    |       roll 3d20+7
    |       Sums the roll of three 20-sided dice and adds seven.
    |       roll 1d6+4
    |       Sums the roll of a six-sided die and adds four.
    |----------------------------------------------------------
    |   **NO MODIFIER:**
    |   (# of dice to roll)d(number of sides)
    |   **Examples:**
    |       roll 1d10
    |       Rolls a single 10-sided die.
    |       roll 3d12
    |       Sums the roll of three 12-sided dice.
    |----------------------------------------------------------
**SEARCH:**
    First, mention the @Hand_Terminal handle, then type 'search', 
    followed by a space, followed by your query.
        **Examples:**
            @Hand_Terminal search James Holden
            @Hand_Terminal search protomolecule

                        ~ ~ End ~ ~
`;

module.exports = (message) => {
    message.reply(`${CMDS}`);
};