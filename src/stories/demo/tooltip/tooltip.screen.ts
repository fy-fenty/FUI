import { Component } from '@angular/core';
import { TooltipService } from '../../cmps/tooltip/tooltip.services';

@Component({
  selector: 'Page',
  templateUrl: './tooltip.screen.html',
  styleUrls: ['./tooltip.screen.less'],
})
export default class PageComponent {
  constructor(
    private tipService: TooltipService
  ) { }

  showTip(title: string, message: string, type: string) {
    this.tipService.showPopup({
      message,
      title,
      type,
      life: 3000
    });
  }
}

