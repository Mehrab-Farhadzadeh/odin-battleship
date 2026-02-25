import Ship from "./Ship";
import Position from "./Position";

class Gameboard {
   #width;
   #board;
   #ships = {};
   #sunkShips = 0;
   constructor(width_ = 10) {
      this.#width = width_;
      this.#board = Array.from({ length: this.#width }, () =>
         Array.from({ length: this.#width }, () => "EMPTY"),
      );
   }

   addShip(length, startingPos, direction) {
      const newShip = new Ship(length);
      this.#ships[newShip.id] = newShip;
      for (
         let position = startingPos.clone(), i = 0;
         i < length;
         position.moveTo(direction, 1), i++
      ) {
         this.#setBoardAt(position, newShip.id);
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

   receiveAttack(position) {
      const boardSquare = this.getBoardAt(position);
      if (boardSquare.includes("HIT")) {
         throw new RangeError("Attacking the hit position is invalid");
      } else if (boardSquare === "EMPTY") {
      } else {
         this.#ships[boardSquare].hit();
         if (this.#ships[boardSquare].isSunk()) this.#sunkShips++;
      }
      const attackResult = "HIT " + boardSquare;
      this.#setBoardAt(position, attackResult);
      return attackResult;
   }

   isShipSunk(shipId) {
      return this.#ships[shipId].isSunk();
   }

   isShipLeft() {
      return Object.keys(this.#ships).length - this.#sunkShips > 0;
   }
}

export default Gameboard;
