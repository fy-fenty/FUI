import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';
import TooltipModel from './tooltip.model';
import { TooltipService } from './tooltip.services';

@Component({
  selector: 'fui-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less'],
  animations: [
    trigger('shown', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.2s', style({ opacity: 0 }))
      ])
    ])
  ]
})

export default class TooltipComponent implements OnInit, OnDestroy {

  @Input() msgTips: Array<TooltipModel> = [];
  @Input() tipLsn: Subscription | null = null;
  @Input() timeout: any = null;
  constructor(
    private tipService: TooltipService
  ) {
    this.tipLsn = this.tipService.popups$.subscribe((pop: TooltipModel) => {
      this.msgTips.push(pop);
      this.timeout = setTimeout((p) => {
        this.msgTips.splice(this.msgTips.findIndex((t => t === p)), 1);
      }, pop.life || 3000, pop);
    });
  }

  drop() {
    this.msgTips.splice(0, this.msgTips.length - 1);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.tipLsn) {
      this.tipLsn.unsubscribe();
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
}
