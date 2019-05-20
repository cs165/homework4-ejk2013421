// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor(Container) {
    this.Container=Container;
    this.now='pause';
    this.change=this.change.bind(this);

    this.Container.src="images/pause.png";
  }
  // TODO(you): Add methods as necessary.
  change(){
    if(this.now=='play'){
      this.now="pause";
      this.Container.src="images/"+this.now+".png";
    }
    else{
      this.now="play";
      this.Container.src="images/"+this.now+".png";
    }
  }
}
