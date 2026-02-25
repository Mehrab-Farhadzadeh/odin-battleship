import Gameboard from "./Gameboard";
import Position from "./Position";

describe("Gameboard", () => {
   test("is defined", () => {
      expect(Gameboard).toBeDefined();
      const gameboard = new Gameboard();
      expect(gameboard).toBeDefined();
   });

   describe("addShip", () => {
      test("addShip up", () => {
         const gameboard = new Gameboard();

         let startingPos = new Position(6, 6);
         let shipLength = 4;
         let direction = "up";
         let shipId = gameboard.addShip(shipLength, startingPos, direction);
         const shipPositions = [startingPos];
         shipPositions.push(new Position(5, 6));
         shipPositions.push(new Position(4, 6));
         shipPositions.push(new Position(3, 6));
         for (const position of shipPositions) {
            expect(gameboard.getBoardAt(position)).toEqual(shipId);
         }
      });

      test("addShip right", () => {
         const gameboard = new Gameboard();

         let startingPos = new Position(1, 1);
         let shipLength = 4;
         let direction = "right";
         let shipId = gameboard.addShip(shipLength, startingPos, direction);
         const shipPositions = [startingPos];
         shipPositions.push(new Position(1, 2));
         shipPositions.push(new Position(1, 3));
         shipPositions.push(new Position(1, 4));
         for (const position of shipPositions) {
            expect(gameboard.getBoardAt(position)).toEqual(shipId);
         }
      });

      test("addShip down", () => {
         const gameboard = new Gameboard();

         let startingPos = new Position(1, 1);
         let shipLength = 4;
         let direction = "down";
         let shipId = gameboard.addShip(shipLength, startingPos, direction);
         const shipPositions = [startingPos];
         shipPositions.push(new Position(2, 1));
         shipPositions.push(new Position(3, 1));
         shipPositions.push(new Position(4, 1));
         for (const position of shipPositions) {
            expect(gameboard.getBoardAt(position)).toEqual(shipId);
         }
      });

      test("addShip left", () => {
         const gameboard = new Gameboard();

         let startingPos = new Position(1, 6);
         let shipLength = 4;
         let direction = "left";
         let shipId = gameboard.addShip(shipLength, startingPos, direction);
         const shipPositions = [startingPos];
         shipPositions.push(new Position(1, 5));
         shipPositions.push(new Position(1, 4));
         shipPositions.push(new Position(1, 3));
         for (const position of shipPositions) {
            expect(gameboard.getBoardAt(position)).toEqual(shipId);
         }
      });

      test("addShip up out of range", () => {
         const gameboard = new Gameboard();

         let startingPos = new Position(1, 6);
         let shipLength = 4;
         let direction = "up";
         expect(() => {
            gameboard.addShip(shipLength, startingPos, direction);
         }).toThrow(new RangeError("Trying to access out of board"));
      });

      test("addShip right out of range", () => {
         const gameboard = new Gameboard();

         let startingPos = new Position(1, 8);
         let shipLength = 4;
         let direction = "right";
         expect(() => {
            gameboard.addShip(shipLength, startingPos, direction);
         }).toThrow(new RangeError("Trying to access out of board"));
      });

      test("addShip down out of range", () => {
         const gameboard = new Gameboard();

         let startingPos = new Position(9, 1);
         let shipLength = 4;
         let direction = "down";
         expect(() => {
            gameboard.addShip(shipLength, startingPos, direction);
         }).toThrow(new RangeError("Trying to access out of board"));
      });

      test("addShip left out of range", () => {
         const gameboard = new Gameboard();

         let startingPos = new Position(1, 1);
         let shipLength = 4;
         let direction = "left";
         expect(() => {
            gameboard.addShip(shipLength, startingPos, direction);
         }).toThrow(new RangeError("Trying to access out of board"));
      });
   });

   test.todo("receiveAttack");
   test.todo("isShipLeft");
});
