import {Alg} from './algebra.js';
import {pipe} from '../utility/pipe.js';

const interpret = (shelves, shelfIndex, cursor, bookIndex) => ({
    moveDown: (shelves, shelfIndex, cursor) => {
        return shelves[shelfIndex + 1][cursor];
    },
    newShelf: (shelves) => {
        return shelves.length =+ 1;
    },
    moveAllTheWayLeft: (shelves, shelfIndex, cursor) => {
        return shelves[shelfIndex][cursor] = 0
    }
});

//Note from travis vvvv
/*
const interpret = (shelves, shelfIndex, cursor, bookIndex) => {
    let result = {
        2darray: [],
        cursor: []
    }
    switch (shelves._tag) {
        case 'move_down':
   
            let shelfResult = interpret(shelves.shelves);
            return {
                cursor: [cursor[0], cursor[1] + 1],
                2darray: shelfResult.2darray
            }
        case 'new_shelf'
            return {
                cursor: [0,0],
                2darray: [
                    [],
                    [],
                    []
                ]
            };
    }
} 


interpet(API.downShelf(API.newShelf()));

*/