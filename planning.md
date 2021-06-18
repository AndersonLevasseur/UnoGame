# Assignments
1. learn about [markdown](https://www.markdownguide.org/cheat-sheet/) and generate rest of doc with markdown
1. build out rough API plan
    1. maybe in another md
    1. Make Uno description 
    1. send to Dan by Friday

# Uno Game
- See list of games
    - load screen
- Join game
    - List of players
        - x number shows up game starts
- Create game
- Start game
    - Draw pile contains 108 cards
        - 19 Blue 0-9 
            - 1 zero
            - two of 1-9
        - 19 Red 0-9
            - 1 zero
            - two of 1-9
        - 19 Green 0-9
            - 1 zero
            - two of 1-9
        - 19 Yellow 0-9
            - 1 zero
            - two of 1-9
        - 8 Skip, reverse, and draw 2
            - 2 of each color
        - 4 Wilds, and Wild Draw 4s
    - Start Round
        - Deal cards
        - Pick player to go first
            - Draw 
                - May play card drawn immediately if it is playable
                - Can choose to draw even if there is a playable card in your hand
                    - Cannot play card in your hand after a card is drawn
            - Play card
                - **Uno Rule**
                    - Before playing your 2nd to last card you must call uno
                        - If you don't and you are caught you must pick up 4 cards
                        - If noone catches you and the next player plays or draws you are safe
                - has to be a matching color, or id
                    - id being number, or wild, draw2, etc.
                - If draw2 player up next gets dealt 2 more cards and their turn is over
                - If wild player who played card gets to change the required color
                - If skip next player doesn't get to play, they are skipped
                - If reverse the direction of play is reversed
                - If wild draw 4 played player who played gets to change color and next player has to pick up four
                    - Extra rules
    - End Round
        - When any player runs out of cards
            - **ALL** points awarded to player who goes out first for each round
            - Number cards (0-9) worth face value
            - Draw 2, Reverse, and Skip all worth 20 points
            - Wild, and Wild Draw 4 worth 50 points each
        - Prompt next round to start
- End Game
    - Prompt rematch
# Uno Rules
- End Game
    - First player to reach 500 points
        - **ALL** points awarded to player who goes out first for each round
            - Number cards (0-9) worth face value
            - Draw 2, Reverse, and Skip all worth 20 points
            - Wild, and Wild Draw 4 worth 50 points each
# Uno Rules
- Multiple sets
    - official
        - two player
        - More than two
    - house
    - challenge
# Uno API
