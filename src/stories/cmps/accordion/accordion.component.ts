import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'fui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less']
})
export default class AccordionComponent implements OnInit, OnChanges {
  @Input() tips: string = '';
  @Input() headerLabel: string = '';
  @Input() searchbox: boolean = false;
  @Input() headerIcon: string = '';
  @Input() expanded: boolean = false;
  @Input() classRef: string = '';
  @Input() isLast: boolean = false;

  @Output() expandedChange = new EventEmitter<boolean>();

  public idRef: string = '';

  constructor() {
  }

  ngOnInit() {
    this.idRef = uuid.v4();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLast'] && !this.isLast) {
      this.isLast = true;
    }
  }

  headerClicked() {
    this.expanded = !this.expanded;
    this.expandedChange.emit(this.expanded);
  }

}
