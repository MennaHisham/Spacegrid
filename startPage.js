class StartPage{
    preload() {
        this.imageStart = loadImage('assets/frontPage.png');
      }
      draw() {
        image(this.imageStart, 0, 0 ,800, 800);
      }
}