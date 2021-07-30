import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'fui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less']
})

export default class AccordionComponent implements OnInit, OnChanges {

  /**
   * This label will float at right of title
   */
  @Input() tips: string = '';

  /**
   * The expand label
   */
  @Input() headerLabel: string = '';

  /**
   * The icon for the label
   */
  @Input() headerIcon: string = '';

  /**
   * Display the text or not in default
   */
  @Input() expanded: boolean = false;

  /**
   * Addtional class for container
   */
  @Input() classRef: string = '';

  /**
   * If True, this Accordion will show a bottom border for last.
   */
  @Input() isLast: boolean = false;

  /**
   * Will trigger if clicking label to expand
   */
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
