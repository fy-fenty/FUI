import { Component } from '@angular/core';

/**
 * Support responsive, there will show different behavior on different viewport
 * And support touch draggle in small portal
 */
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
