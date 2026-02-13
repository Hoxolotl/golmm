import * as GOLmap from "./GOLmap.js"
    
//Conway's GOL rules:



function testisAliveIsAFunction(){
    //Given a reference
        const testFunction = GOLmap.isAlive
    //When I check the typeof on that reference
        const actual = typeof testFunction
    //Then I expect it to be a function
        const expected = "function"
        console.log("GOLmap.isAlive() is a function", expected === actual)
}


function testIsAliveWorks() {
    // Given
        const cell = {x: 0, y: 0, color:""};
    // When
        const actual = GOLmap.isAlive(cell)
    // Then
        const expected = false;
        console.log("function GOLmap.isAlive returns correct values", expected === actual);
}

/*
Any live cell with fewer than two live neighbours dies, as if by underpopulation.
*/
function testFirstRule() {

    // Given a cell
        const cell = {x: 0, y: 0, color:""};
    //when fewer than two live neighbours dies

    //then it dies

    console.log(GOLmap.isAlive(cell))
    GOLmap.gameTic()
    console.log(GOLmap.isDead(cell))
}

testisAliveIsAFunction()
testIsAliveWorks()
testFirstRule()


/*
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

//A player has a PlayerID 


//A PLayerID references to a CSS color




//--
//This is going to be multiplayer:
// need to track individuel user interactions

// need to CRDT between users

// need a central scoring system

// need a shop for drag and drop ships


// need a leaderboard

