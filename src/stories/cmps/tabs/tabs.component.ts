import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ElementRef
} from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'fui-tab',
  template: `
  <div class="tabitem {{classRef}}" [ngStyle]="contentStyle" *ngIf="shown" #template
    tabIndex=0
    role="tabpanel"
    [attr.id]="idRef + '-body'"
    [attr.aria-selected]="shown"
    [attr.aria-labelledby]="idRef + '-head'"
  >
    <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./tabs.component.less']
})
export class TabComponent implements OnInit {
  shown = false;
  public shiftToTabListEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() checked = false;
  @Input() header = null;
  @Input() icon = null;
  @Input() badge = null;
  @Input() contentStyle = false;
  @Input() classRef: string = '';
  @ViewChild('template') template: ElementRef = new ElementRef(null);
  public idRef: string = '';

  constructor() {}
  ngOnInit() {
    this.idRef = uuid.v4();
  }

  hide() {
    this.shown = false;
  }

  show() {
    this.shown = true;
  }
}

@Component({
  selector: 'fui-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export default class TabsComponent implements OnInit, AfterContentInit {
  @Input() list: Array<any> = [];
  @Input() style = false;
  @Input() tabStyle = false;
  @Input() contentStyle = false;
  @Input() classRef: string = '';
  @Output() tabClickCallback = new EventEmitter();
  @ContentChildren(TabComponent) tabLists: QueryList<TabComponent> = new QueryList();
  @ViewChild('tabPanelList') tabPanelList: ElementRef = new ElementRef(null);
  @Input()
  set inputActiveIndex(index: number) {
    if (this.tabLists && index >= this.tabLists.length) {
      index = 0;
    }
    this.currentIndex = index;
  }

  currentIndex = 0;
  private currentTab = 0;

  private direction: any = {
    37: -1,
    39: 1
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const headers: Array<any> = [];
    this.tabLists.forEach((p) => {
      p.contentStyle = this.contentStyle;
      p.classRef = this.classRef;
      if (p.header) {
        headers.push({ label: p.header, icon: p.icon, badge: p.badge, idRef: p.idRef});
      }
    });
    if (headers.length > 0) {
      this.list = headers;
    }
    this.inputActiveIndex = this.currentIndex;
    this.switchTab (this.currentIndex);
  }

  switchTab(index: number) {
    this.tabClickCallback.emit(index);
    this.tabLists.forEach((p, i) => {
      if (i === index) {
        if (!p.shown) {
          p.show();
        }
        this.currentIndex = i;
      } else {
        if (!!p.show) {
          p.hide();
        }
      }
    });
  }

  tabClick($event: any, index: number) {
    this.currentTab = index;
    this.currentIndex = index;
    this.switchTab(index);
  }

  focusTableTitle(index: number) {
    this.currentTab = index;
    try {
      this.tabPanelList.nativeElement.children[index].focus();
    } catch(err) {
      console.log('there is no tab content', err);
    }
  }

  pressedNavigateKey(event: any) {
    switch (event.value) {
      case 'homeKeyup':
        this.switchTabOnHomePress();
        break;
      case 'endKeyup':
        this.switchTabOnEndPress();
        break;
      case 'left':
        this.switchTabOnArrowPress(event);
        break;
      case 'right':
        this.switchTabOnArrowPress(event);
        break;
    }
  }

  switchTabOnArrowPress(event: any) {
    const pressed = event.keyboard.keyCode;

    if (this.direction[pressed]) {
      let newTabIndex: number = 0;
      if (this.list[this.currentTab + this.direction[pressed]]) {
        newTabIndex = this.currentTab + this.direction[pressed];
      } else if (this.direction[pressed] === -1) {
        newTabIndex = this.lastTab();
      } else if (this.direction[pressed] === 1) {
        newTabIndex = this.firstTab();
      }
      this.focusTableTitle(newTabIndex);
    }
  }

  switchTabOnHomePress() {
    const newTabIndex = this.firstTab();
    this.focusTableTitle(newTabIndex);
  }

  switchTabOnEndPress() {
    const newTabIndex = this.lastTab();
    this.focusTableTitle(newTabIndex);
  }

  firstTab() {
    return 0;
  }

  lastTab() {
    return this.list.length - 1;
  }
}
