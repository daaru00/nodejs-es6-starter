/**
 * Greeting class.
 */

class Greeting {

  constructor(name) {
    this.name = name || 'Guest';
  }

  hello() {
    return `Welcome, ${this.name}!`;
  }

}

export default Greeting;
