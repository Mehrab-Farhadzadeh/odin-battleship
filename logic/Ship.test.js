import Ship from "./Ship";

describe("Ship", () => {
   test("is sunk?", () => {
      const ship2 = new Ship(2);
      ship2.hit();
      expect(ship2.isSunk()).toEqual(false);
      ship2.hit();
      expect(ship2.isSunk()).toEqual(true);
   });

   test("hit after sunk", () => {
      const ship2 = new Ship(2);
      ship2.hit();
      ship2.hit();
      expect(() => {
         ship2.hit();
      }).toThrow(new RangeError("Has already been sunk"));
   });
});
