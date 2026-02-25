export default class Position {
   constructor(x_, y_) {
      this.x = x_;
      this.y = y_;
   }

   addItTo(offset) {
      this.x += offset.x;
      this.y += offset.y;
      return this;
   }

   static add(p1, p2) {
      return new Position(p1.x + p2.x, p1.y + p2.y);
   }

   equals(position) {
      return this.x === position.x && this.y === position.y;
   }

   moveUp(offset) {
      this.x -= offset;
      return this;
   }
   moveRight(offset) {
      this.y += offset;
      return this;
   }
   moveDown(offset) {
      this.x += offset;
      return this;
   }
   moveLeft(offset) {
      this.x -= offset;
      return this;
   }

   moveTo(direction, offset) {
      switch (direction) {
         case "up":
            this.x -= offset;
            break;
         case "right":
            this.y += offset;
            break;
         case "down":
            this.x += offset;
            break;
         case "left":
            this.y -= offset;
            break;
         default:
            throw new TypeError("Invalid direction");
      }
   }

   clone() {
      return new Position(this.x, this.y);
   }
}
