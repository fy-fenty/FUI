import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'fui-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less']
})
export default class PaginatorComponent implements OnInit, OnChanges {

  /**
   * default dispaly rows
   */
  @Input()
  rows: number = 5;

  /**
   * how numbers to show in one page
   */
  @Input() set pageSize(val: number) {
    this.rows = val || 5;
    this.currentPage = 0; //reset to first page if paging size changed
    this.init();
  }
  @Input() currentPage = 0;
  @Input() pageLinkSize = 5;
  @Input() data: Array<any> = [];
  @Input() showBetAlways = false;
  @Input() keepCurrentPage = true;
  @Input() preLabel = 'Previous';
  @Input() preHiddenLabel = 'Go to previous page';
  @Input() nextLabel = 'Next';
  @Input() nextHiddenLabel = 'Go to next page';
  @Input() pagingInfoFromBackend: any;
  @Input() forBackednSort = false;
  @Output() dataChange: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  @Output() pageChange = new EventEmitter();
  origData: Array<any> = [];
  pageCount: number = 0;
  pageArr: Array<number> = [];

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      if (!changes['data'].currentValue) {
        this.origData = [];
        this.currentPage = 0;
        this.init();
      } else {
        if (!changes['data'].currentValue._isPaged) {
          this.origData = changes['data'].currentValue;
          this.keepIfNeed();
          this.init();
        }
      }
    } else if (changes['rows'] && changes['rows'].currentValue
      && changes['rows'].currentValue !== changes['rows'].previousValue) {
      this.keepIfNeed();
      this.init();
    }
    this.getVisiblePageArr();
  }

  keepIfNeed() {
    this.getPageCount();
    if (this.keepCurrentPage) {
      if (this.currentPage >= this.pageCount) {
        this.currentPage = this.pageCount <= 0 ? 0 : this.pageCount - 1;
      }
    } else {
      this.currentPage = 0;
    }
  }

  init() {
    this.doPage();
    this.initDefaultValue();
    this.getPageCount();
    this.getVisiblePageArr();
  }

  sort(data: Array<any>) {
    this.origData = data;
    this.init();
  }

  doPage() {
    if (!this.forBackednSort) {
      this.data = Object.assign(this.origData.slice(
        this.currentPage * this.rows,
        this.rows + (this.currentPage * this.rows)), { _isPaged: true });
      setTimeout(() => this.dataChange.emit(this.data));
    }
    this.pageChange.emit({
      first: this.currentPage * this.rows,
      data: this.data,
      rows: this.rows,
      page: this.currentPage,
      pageCount: this.pageCount
    });
  }

  initDefaultValue() {
    this.rows = this.rows ? this.rows : 5;
    this.pageLinkSize = this.pageLinkSize ? this.pageLinkSize : 5;
    this.currentPage = this.currentPage ? this.currentPage : 0;
  }

  getPageCount() {
    // tslint:disable-next-line: max-line-length
    this.pageCount = this.pagingInfoFromBackend ? Math.ceil(this.pagingInfoFromBackend.total / this.rows) : Math.ceil(this.origData.length / this.rows);
  }

  changePage(actionKey: any) {
    this.getCurrentPage(actionKey);
    this.getVisiblePageArr();
    this.doPage();
  }

  getVisiblePageArr() {
    this.pageArr = [];
    const visiblePage = Math.min(this.pageLinkSize, this.pageCount);
    let start = Math.max(0, Math.ceil(this.currentPage - visiblePage / 2));
    // When page next to the end
    if (this.currentPage >= Math.floor(this.pageCount - visiblePage / 2)) {
      start = Math.max(0, this.pageCount - this.pageLinkSize);
    }
    const end = start + visiblePage - 1;
    for (let i = start; i <= end; i++) {
      this.pageArr.push(i);
    }
  }

  getCurrentPage(actionKey: any) {
    if (actionKey === 'first') {
      this.currentPage = 0;
    } else if (actionKey === 'last') {
      this.currentPage = this.pageCount - 1;
    } else if (actionKey === 'pre') {
      if (this.currentPage <= 0) {
        return;
      }
      this.currentPage = this.currentPage - 1;
    } else if (actionKey === 'next') {
      if (this.currentPage >= this.pageCount - 1) {
        return;
      }
      this.currentPage = this.currentPage + 1;
    } else {
      this.currentPage = Number(actionKey);
    }
  }
}
