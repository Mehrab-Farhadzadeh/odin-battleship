class Ship {
   #id;
   #length;
   #hits = 0;
   constructor(length_ = 0) {
      this.#length = length_;
      this.#id = crypto.randomUUID();
   }

   hit() {
      if (this.isSunk()) throw RangeError("Has already been sunk");
      this.#hits++;
   }

   isSunk() {
      return this.#hits === this.#length;
   }

   get id() {
      return this.#id;
   }
}

export default Ship;
