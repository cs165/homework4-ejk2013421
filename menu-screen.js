// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor(containerElement) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.containerElement=containerElement;
    this.theme=['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
    document.querySelector('#query-input').value=this.theme[Math.floor(Math.random()*this.theme.length)];
  }
  // TODO(you): Add methods as necessary.
  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }


}
