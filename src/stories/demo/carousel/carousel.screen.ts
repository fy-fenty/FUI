import { Component } from '@angular/core';

@Component({
  selector: 'carousel-screen',
  templateUrl: './carousel.screen.html',
  styleUrls: ['./carousel.screen.less']
})
export default class CarouselScreen {
  public carousels = ['Slide A', 'Slide B', 'Slide C'];
  constructor() { }

  ngOnInit() {
  }

}
