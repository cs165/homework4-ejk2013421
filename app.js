// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    const menuElement = document.querySelector('#menu');
    this.menu = new MenuScreen(menuElement);

    const form = document.querySelector('form');
    form.addEventListener('submit', this._onSubmit.bind(this));
    document.addEventListener("load_finish",this.loadfinish.bind(this));

  }
  // TODO(you): Add methods as necessary.
  _onSubmit(event) {
    event.preventDefault();
    const textInput = document.querySelector('#song-selector');
    const gifInput = document.querySelector('#query-input');
    const query = encodeURIComponent(gifInput.value);
    const music={
      'songValue':textInput.value,
      'gifValue':query
    };

    this.menu.hide();

    this.create_musicElement(music);
  }

  create_musicElement(music){
    const musicElement = document.querySelector('#music-screen');
    this.music=new MusicScreen(musicElement,music);
  }

  loadfinish(){
    console.log("finish");
    if(this.music.GIFDisplay.limit>=2){
      this.music.show();
    }
    else{
      const ERR = document.querySelector('#error');
      ERR.classList.remove('inactive');
      this.menu.show();
    }

  }
}
