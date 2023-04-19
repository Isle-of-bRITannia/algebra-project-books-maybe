const Alg = {
    moveDown: (shelves, shelfIndex, cursor) => ({
      _tag: 'move_down',
      shelves,
      shelfIndex,
      cursor
    }),
    newShelf: (shelves) => ({
        _tag: 'new_shelf',
        shelves
    }),
    moveAllTheWayLeft: (shelves, shelfIndex, cursor) => ({
        _tag: 'move_all_the_way_left',
        shelves,
        shelfIndex,
        cursor
    })
};

export {
    Alg
}