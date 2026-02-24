import Gameboard from "./Gameboard";
import Position from "./Position";

describe("Gameboard", () => {
   test("is defined", () => {
      expect(Gameboard).toBeDefined();
      const gameboard = new Gameboard();
      expect(gameboard).toBeDefined();
   });

   function getOffsetPos(direction, offset) {
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

   function calcPos(startingPos, direction, offset) {
      const offsetPos = getOffsetPos(direction, offset);
      return Position.add(startingPos, offsetPos);
   }

   describe("addShip", () => {
      test("addShip up", () => {
         const gameboard = new Gameboard();

         let startingPos = new Position(6, 6);
         let shipLength = 4;
         let direction = "up";
         
         let shipId = gameboard.addShip(shipLength, startingPos, direction);
         for (let offset = 0; offset < shipLength; offset++) {
            const shipPos = calcPos(startingPos, direction, offset);
            expect(gameboard.getBoardAt(shipPos)).toEqual(shipId);
         }
      });

      test("addShip right", () => {
         const gameboard = new Gameboard();

         let startingPos = new Position(1, 1);
         let shipLength = 4;
         let direction = "right";
         let shipId = gameboard.addShip(shipLength, startingPos, direction);
         for (let offset = 0; offset < shipLength; offset++) {
            const shipPos = calcPos(startingPos, direction, offset);
            expect(gameboard.getBoardAt(shipPos)).toEqual(shipId);
         }
      });

      test("addShip down", () => {
         const gameboard = new Gameboard();

         let startingPos = new Position(1, 1);
         let shipLength = 4;
         let direction = "down";
         let shipId = gameboard.addShip(shipLength, startingPos, direction);
         for (let offset = 0; offset < shipLength; offset++) {
            const shipPos = calcPos(startingPos, direction, offset);
            expect(gameboard.getBoardAt(shipPos)).toEqual(shipId);
         }
      });

      test("addShip left", () => {
         const gameboard = new Gameboard();

         let startingPos = new Position(1, 6);
         let shipLength = 4;
         let direction = "left";
         let shipId = gameboard.addShip(shipLength, startingPos, direction);
         for (let offset = 0; offset < shipLength; offset++) {
            const shipPos = calcPos(startingPos, direction, offset);
            expect(gameboard.getBoardAt(shipPos)).toEqual(shipId);
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
