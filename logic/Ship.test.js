import Ship from "./Ship";

describe("Ship", () => {
   const ship4 = new Ship(4);
   test("hit", () => {
      ship4.hit();
      expect(ship4.hits).toEqual(1);
   });

   test("is sunk?", () => {
      ship4.hit();
      expect(ship4.isSunk()).toEqual(false);
      ship4.hit();
      ship4.hit();
      expect(ship4.isSunk()).toEqual(true);
   });

   test("hit after sunk", () => {
      expect(() => {
         ship4.hit();
      }).toThrow(new RangeError("Has already been sunk"));
   });
});
