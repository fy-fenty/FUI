import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ContentChildren,
  QueryList,
  TemplateRef,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';

@Component({
  selector: 'fui-carousel-item',
  template: '<ng-content></ng-content>',
  styleUrls: [
    './carousel.component.less',
    './carousel.component.resp.less'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselItemComponent {
}

@Component({
  selector: 'fui-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [
    './carousel.component.less',
    './carousel.component.resp.less'
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class CarouselComponent {
  @ContentChildren('carouselItem')
  public carouselList: QueryList<TemplateRef<HTMLElement>> = new QueryList();

  public curInde = 0;
  public prePage = 0;
  public goRight = true;
  public startListenTouch = false;
  private touchStartPoint = { x: 0, y: 0 };
  public movedPercent = 0;
  private touchStartTimestamp = 0;
  @Input() public portalSize = {
    SM: 720,
    MD: 1024,
    LG: 1920
  };
  @ViewChild('arrowWrap') public arrowWrapEle: ElementRef = new ElementRef(null);

  constructor(
    public changeRef: ChangeDetectorRef
  ) { }

  gotoPage(pageNo: number) {
    if (pageNo === this.curInde) {
      return;
    }
    const isNext = pageNo > this.curInde;
    this.goRight = isNext;
    let tmpInde = this.curInde;
    if (isNext) {
      tmpInde = pageNo >= this.carouselList.length ? this.carouselList.length - 1 : pageNo;
    } else {
      tmpInde = pageNo < 0 ? 0 : pageNo;
    }
    if (window.innerWidth <= this.portalSize.SM) {
      this.prePage = this.curInde = tmpInde;
    } else {
      this.prePage = tmpInde;
      setTimeout(() => {
        this.curInde = tmpInde;
        this.changeRef.detectChanges();
      }, 300);
    }
  }

  touchStart(touchEvent: TouchEvent) {
    this.touchStartPoint = {
      x: touchEvent.touches[0].clientX,
      y: touchEvent.touches[0].clientY,
    };
  }

  touchMove(touchEvent: TouchEvent) {
    this.startListenTouch = true;
    if (!this.touchStartTimestamp) {
      this.touchStartTimestamp = touchEvent.timeStamp;
    }
    const currentPoint = {
      x: touchEvent.touches[0].clientX,
      y: touchEvent.touches[0].clientY,
    };
    const preMovedPercent = Math.round(((currentPoint.x - this.touchStartPoint.x) / window.innerWidth) * 100);
    this.movedPercent =
      this.curInde <= 0 ? (preMovedPercent > 15 ? 15 : preMovedPercent) : (
      this.curInde >= (this.carouselList.length - 1) ? (preMovedPercent < -15 ? -15 : preMovedPercent) : preMovedPercent);
  }

  touchEnd(touchEvent: TouchEvent) {
    const movedTimestamp = touchEvent.timeStamp - this.touchStartTimestamp;
    const absMovedPercent = Math.abs(this.movedPercent);
    if (movedTimestamp <= 300) {
      if (absMovedPercent > 5) {
        this.gotoPage(this.movedPercent > 0 ? this.curInde - 1 : this.curInde + 1);
      }
    } else {
      if (absMovedPercent > 30) {
        this.gotoPage(this.movedPercent > 0 ? this.curInde - 1 : this.curInde + 1);
      }
    }
    this.startListenTouch = false;
    this.touchStartTimestamp = 0;
    this.movedPercent = 0;
  }
}
