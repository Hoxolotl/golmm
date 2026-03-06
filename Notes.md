# golmm
Game Of Life Massive Multiplayer

The goal of this project is to implement different technologies for a massive multiplayer game of life website.

Current WIP website is hosted on https://golmm.online/

# Plans:
 ## Solid implementation
* players will be able to design their own ships and save them to their solid pods see https://solidproject.org/ for more info

## Game of Life implementation
* using TDD
* implementing using a CRDT protocol to keep players in sync, maybe spacetime.db
* visualisation using D3.js

# User stories
## Game of life
* Any live cell with fewer than two live neighbours dies, as if by underpopulation.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any live cell with more than three live neighbours dies, as if by overpopulation.
* Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## Multiplayer
* cell color are determined by majority, or the most recent cell, as if the youngest and most abundant partners are selected to procreate
* a player dropped cell always overrides the color, as if by divine intervention
* WIP: joining a guild: idea is that a player can join a guild, when they are joined they recieve the budget/players from the guild on their personal score/budget. Mind you that their personal budget is used to drop ships in the field.

## GOLMM
* players can drag-n-drop their premade ships from their ship library
* players can design ships and save them to their solid-pod
* players have a specific budget/day to start dropping ships
* score is increased by "flipping" more life to your color
* score increase is also added to a "budget pool" that allows dropping ships in the field
* ship costs 1 for 1 pixel.

# notes on TDD:
* only check to disproove: "look for the black swan".


# notes on commercialisation:
* entice players to pay fro perks... design some perks
* * set a cap on earned budget/day for free players, basically spamming flyers should be possible, but as soon as you spame battlefleets you should get stuk at the 11th carrier drop.

# Architecture
* simplycode frontend hosted on golmm.online
* spacetime.db backend runs the game
* payment provider'n'stuff tbd.


# Spacetime
export PATH="/Users/hoxolotl/.local/bin:$PATH"