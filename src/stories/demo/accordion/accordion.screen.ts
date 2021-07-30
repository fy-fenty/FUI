import { Component } from '@angular/core';

@Component({
  selector: 'accordion-screen',
  templateUrl: './accordion.screen.html',
  styleUrls: ['./accordion.screen.less']
})
export default class AccordionScreen {
  expanded = false;
  constructor() { }

  ngOnInit() {
  }

}
