class Ship {
   #length;
   #hits = 0;
   constructor(length_ = 0) {
      this.#length = length_;
   }

   hit() {
      if (this.isSunk()) throw RangeError("Has already been sunk");
      this.#hits++;
   }

   isSunk() {
      return this.#hits === this.#length;
   }
}

export default Ship;
