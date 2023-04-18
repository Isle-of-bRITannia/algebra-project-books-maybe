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

export {
  API as shelves
}