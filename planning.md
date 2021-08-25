# Assignments
1. learn about [markdown](https://www.markdownguide.org/cheat-sheet/) and generate rest of doc with markdown
1. build out rough API plan
    1. maybe in another md
    1. Make Uno description 
    1. send to Dan by Friday

    ## Setting up OpenAPI 
This isn't the only way to do this but it's a good way. It lets us generate documents that are human readable so other people can consume our API

1. Install [OpenAPI Editor](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi)
1. See the example of what an API document can look like by looking at the [Smartwyre API](https://docs.smartwyre.info/)
1. Look at the [Swagger documentation](https://swagger.io/docs/specification/basic-structure/) to see how to fill the fields in
1. Follow the quickstart guide for developing your first bit of documentation

# Uno Game - Classic Rules
- See list of games
    - load screen
- Join game
    - List of players
        - x number shows up game starts
- Create game  
    -
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
                - If draw2 player up next picks up 2 cards and their turn is over
                - If wild player who played card gets to change the required color
                - If skip next player doesn't get to play, they are skipped
                - If reverse the direction of play is reversed
                - If wild draw 4 played player who played gets to change color, next player has to pick up, and cannot play
                    - Draw 4 is supposed to be played only when you have no other cards to be played
                        - Can be played illegally
                    - When played the victim can challenge that the card was played illegally
                        - If victim was correct and the challenge passes 
                            - player must draw 4 cards 
                            - play passes to next player
                        - If victim is wrong and therefor the challenge fails
                            - victim must pick up 6 cards 
                            - play passes beyond victim to next player 
    - End Round
        - When any player runs out of cards
            - **ALL** points awarded to player who goes out first for each round
            - Number cards (0-9) worth face value
            - Draw 2, Reverse, and Skip all worth 20 points
            - Wild, and Wild Draw 4 worth 50 points each
        - Prompt next round to start
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
            - Change target score
            - Make optional anyway
        - More than two
    - house
        - reverse scoring
        - Passing on drawcards
    - reverse
        - Has a "dark side"
    - challenge
# Uno API
- Get
    - Lobby?
    - 200
        - OK
    - 400
        - Bad Request
    - 500
        - Internal ERROR
- Post
    - Entered Game
        - Status
    - 200
        - OK
    - 400
        - Bad Request
    - 500
        - Internal ERROR
- Post
    - Played turn
        - Played card
        - Drew Card
        - Skipped?
            - probably shouldn't give your chance to play
        - Call UNO
    - 200
        - OK
    - 400
        - Bad Request
    - 500
        - Internal ERROR
            - Not your turn
- Get 
    - State of Board
        - My cards
        - Number of cards in each opponent hand
        - Number of cards in Deck?
            - Not really important I don't think




# Exercise
- Start screen
    1. Asks for username
        - max 16 char
            - *POST to establish user*
    1. loads list of games 
        - *Get lobby*
        - join game
        - *Post user to game*
            - *Returns List of Games*
    1. create game
        - *Post to game to lobby*
- Game loading screen
    - View other player
        - *Get another lobby?*
    - Ready button
        - Once all players "ready" start, or countdown to start
            - *pressing will be a **POST**, changing users ready status*
- Game
    - *player **GET** to receive cards and info about who's turn is next*
    - rounds
        - only one for now
            - first to run out of cards
        - Play card
        - Draw card
        - Call "UNO" **POST**
        - Call someone else for "UNO"
            - can't be a post because then you always get called
- Post Game screen
    - Shows all the players with the position they finish in
        - **GET**
        - Countdown starts until next game start
            - 64 seconds
            - Everyplayer has a MIA or Rematch status
                - Post to game your status when you decide
                    - If you leave it posts a MIA?

+ Post
    + announce presence/assign a username
    + 200
        + Ok
    + 400
        + Bad Request
            + Username of 16 characters
    + 500
        + Internal Error
+ Post 
    + create game
    + 200
        + Ok
    + 400
        + Bad Request
    + 500
        + Internal Error
+ Get 
    + Getlist of games
        + options of being played currently or open for people to join
    + 200
        + Ok
    + 500
        + Internal Error
+ Get 
    + Used for playing, returns the active game
        + players, cards in your hand, number of opponents cards, etc.
    + 200
        + Ok
    + 500
        + Internal Error
+ Post
    + Call UNO for/at last player
    + 200
        + Ok
    + 400
        + Bad Request
    + 500
        + Internal Error
+ Post
    + Play a card
    + 200
        + Ok
    + 400
        + Bad Request
    + 500
        + Internal Error
