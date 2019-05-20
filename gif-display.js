// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(GIFContainerfront,GIFContainerback,gifurl) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.GIFContainerfront=GIFContainerfront;
    this.GIFContainerback=GIFContainerback;
    this.gifurl=gifurl;
    this.GIF=[];
    this.limit=0;
    this.gifUrls=[];
    this.front=0;
    this.back=0;
    this.now=0;

    this._onJsonReady = this._onJsonReady.bind(this);
    this._renderGIF = this._renderGIF.bind(this);
    this.change=this.change.bind(this);
    this.init=this.init.bind(this);

    this.getUrllist();
  }

  init(){
    if(this.limit<2){
      console.log("error : "+this.limit);

    }else{
      this.back=Math.floor(Math.random()*this.limit);
      this.front=this.randomnum(this.back,this.limit);
      this.GIFContainerfront.style.backgroundImage="url('"+this.GIF[this.front].src+"')";
      this.GIFContainerback.style.backgroundImage="url('"+this.GIF[this.back].src+"')";
      this.GIFContainerfront.classList.add('gif-box-front');
    }

    document.dispatchEvent(new CustomEvent('load_finish'));
  }


  // TODO(you): Add methods as necessary.
  getUrllist() {
    fetch('https://api.giphy.com/v1/gifs/search?q='+this.gifurl+'&rating=g&limit=25&api_key=rGrMJ7KXMNsi7y1I94GmPa2LzmHTnYEG')
        .then(this._onResponse)
        .then(this._onJsonReady);
  }

  _renderGIF() {
    for(let g of this.gifUrls) {
      this.GIF[this.limit] = new Image();
      this.GIF[this.limit].src = g;
      this.limit++;
    }

    this.init();
  }

  _onJsonReady(json) {
    if (!json.data) {
      return;
    }
    for (const item of json.data) {
      const url = item.images.downsized.url;
      this.gifUrls.push(url);
      //console.log(url);
    }
    this._renderGIF();
  }

  _onResponse(response) {
    return response.json();
  }

  randomnum(n,limit){
    if(limit<2)return 0;
    let x=Math.floor(Math.random()*limit);
    while(x==n){
      x=Math.floor(Math.random()*limit)
    }
    return x;
  }

  change(){
    if(this.now==0){
      this.now=1;

      this.GIFContainerfront.classList.remove('gif-box-front');
      this.GIFContainerback.classList.add('gif-box-front');

      this.front=this.randomnum(this.back,this.limit);
      this.GIFContainerfront.style.backgroundImage="url('"+this.GIF[this.front].src+"')";
    }else{
      this.now=0;

      this.GIFContainerback.classList.remove('gif-box-front');
      this.GIFContainerfront.classList.add('gif-box-front');

      this.back=this.randomnum(this.front,this.limit);
      this.GIFContainerback.style.backgroundImage="url('"+this.GIF[this.back].src+"')";
    }
  }
}
