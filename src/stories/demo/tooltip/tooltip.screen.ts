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

  showTip(title: string, message: string, msgType: string) {
    this.tipService.showPopup({
      message: message,
      title: title,
      tipType: msgType,
      life: 3000
    });
  }
}

