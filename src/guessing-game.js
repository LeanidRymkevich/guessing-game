class GuessingGame {
    left;
    right;
  
    constructor() {
    }
  
    setRange(min, max) {
        this.left = min;
        this.right = max;
    }
  
    guess() {
        return this.middle();
    }
  
    lower() {
        this.right = this.middle();
    }
  
    greater() {
        this.left = this.middle();
    }
  
    middle() {
        return Math.round((this.right - this.left) / 2) + this.left;
    }
  }

module.exports = GuessingGame;
