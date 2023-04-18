import {Alg} from './algebra.js';
import {pipe} from '../utility/pipe.js';

/*
Shelve
MoveRight
MoveSpace
DownShelf -> Maybe break into MoveDown and MoveAllTheWayLeft?
CombineShelves
EmptyShelf
*/

const Alg = {
    moveDown: (shelves) => ({
      _tag: 'move_down',
      shelves
    }),
    newShelf: () => ({
        _tag: ' new_shelf'
    })
}  

//above is for algebra.js

const API = {
  moveDown: (shelves, shelfIndex) => shelves[shelfIndex + 1],
  moveAllTheWayLeft: (shelves, shelfIndex, cursor) => shelves[shelfIndex][cursor] = 0,
  downShelf: (shelves, shelfIndex, cursor) => pipe(API.moveDown(shelves, shelfIndex), API.moveAllTheWayLeft(shelves, shelfIndex, cursor)),
  moveRight: (shelves, shelfIndex, cursor, bookWidth) => (shelves[shelfIndex][cursor] + bookWidth) <= 24 ? shelves[shelfIndex][cursor] + bookWidth : API.downShelf(shelves, shelfIndex, cursor),
  shelve: (bookWidth, cursor) => pipe(Alg.shelve(bookWidth), API.moveRight(shelves, shelfIndex, cursor, bookWidth)),
  moveSpace: (shelves, shelfIndex, cursor, bookIndex) => API.moveRight(shelves, shelfIndex, cursor, bookWidth),
  emptyShelf: (shelves, shelfIndex, cursor) => API.downShelf(shelves, shelfIndex, cursor),
  //combineShelves: (shelves, shelfIndex1, shelfIndex2) => shelves[shelfIndex1] = 
};

//Below is for a separate file observe.js
interrpet(API.downShelf(API.newShelf()));

cosnt interpret = (shelves) => {
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

export {
  API as shelves
}