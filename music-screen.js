// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(containerElement,musicinfo) {
    this.containerElement=containerElement;
    this.musicinfo=musicinfo;
    this.create_gif=this.create_gif.bind(this);
    this.kick=this.kick.bind(this);
    this.transMusic=this.transMusic.bind(this);
    this.botton=document.querySelector('#play-botton');

    this.create_gif(this.musicinfo.gifValue);


  }
  // TODO(you): Add methods as necessary.
  show() {
    this.containerElement.classList.remove('inactive');

    this.create_audio(this.musicinfo.songValue);
    this.AudioPlayer.play();
    this.Button=new PlayButton(this.botton);

    this.botton.addEventListener('click',this.transMusic);
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }

  create_audio(url){
    this.AudioPlayer=new AudioPlayer();
    this.AudioPlayer.setSong(url);
    this.AudioPlayer.setKickCallback(this.kick);
  }

  create_gif(url){
    const GIFContainerfront = document.querySelector('#gif-box-front');
    const GIFContainerback = document.querySelector('#gif-box-back');
    this.GIFDisplay=new GifDisplay(GIFContainerfront,GIFContainerback,url);
    //this.show();

  }

  kick(){
    this.GIFDisplay.change();
  }

  transMusic(){
    if(this.Button.now=="pause"){
      this.AudioPlayer.pause();
      this.Button.change();
    }else{
      this.AudioPlayer.play();
      this.Button.change();
    }
    //this.GIFDisplay.change();
  }

}
