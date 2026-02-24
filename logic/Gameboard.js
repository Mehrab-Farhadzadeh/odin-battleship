import Ship from "./Ship";
import Position from "./Position";

class Gameboard {
   #width;
   #board;
   #ships = {};
   constructor(width_ = 10) {
      this.#width = width_;
      this.#board = Array.from({ length: this.#width }, () =>
         Array.from({ length: this.#width }, () => "EMPTY"),
      );
   }

   #getOffsetPos(direction, offset) {
      let offsetPos;
      switch (direction) {
         case "up":
            offsetPos = new Position(-offset, 0);
            break;
         case "right":
            offsetPos = new Position(0, offset);
            break;
         case "down":
            offsetPos = new Position(offset, 0);
            break;
         case "left":
            offsetPos = new Position(0, -offset);
            break;
         default:
            throw new TypeError("Invalid direction");
      }
      return offsetPos;
   }

   #calcPos(startingPos, direction, offset) {
      const offsetPos = this.#getOffsetPos(direction, offset);
      return Position.add(startingPos, offsetPos);
   }

   addShip(length, startingPos, direction) {
      const newShip = new Ship(length);
      this.#ships[newShip.id] = newShip;
      for (let offset = 0; offset < length; offset++) {
         const shipPos = this.#calcPos(startingPos, direction, offset);
         this.#setBoardAt(shipPos, newShip.id);
      }
      return newShip.id;
   }

   #setBoardAt(position, value) {
      if (
         position.x < 0 ||
         position.x >= this.#width ||
         position.y < 0 ||
         position.y >= this.#width
      )
         throw new RangeError("Trying to access out of board");
      this.#board[position.x][position.y] = value;
   }

   getBoardAt(position) {
      return this.#board[position.x][position.y];
   }
}

export default Gameboard;
