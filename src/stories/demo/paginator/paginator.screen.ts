// YourPage.component.ts

import { Component, ViewChild } from '@angular/core';
import PaginatorComponent from 'src/stories/cmps/paginator/paginator.component';

@Component({
  selector: 'paginator-screen',
  templateUrl: './paginator.screen.html',
  styleUrls: ['./paginator.screen.less']
})
export default class PaginatorScreen {

  rowCount = 10;
  items: any = [];
  item: any;
  orgItems = [];
  @ViewChild('pgtor') pgtor: PaginatorComponent | null = null;
  constructor() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
    this.orgItems = this.items;
  }

  sort(s1: number, s2: number) {
    this.pgtor && this.pgtor.sort(this.orgItems.sort((a, b) => a > b ? s1 : (a < b ? s2 : 0)));
  }
}
