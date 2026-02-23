import Gameboard from "./Gameboard";

describe("Gameboard", () => {
   test("is defined", () => {
      expect(Gameboard).toBeDefined();
      const gameboard = new Gameboard();
      expect(gameboard).toBeDefined();
   });
});
