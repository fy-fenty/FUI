import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
	selector: 'fui-messagetip',
	templateUrl: './messagetip.component.html',
	styleUrls: ['./messagetip.component.less']
})
export default class MessageTipComponent implements OnInit {
  @ViewChild('wrapper') wrapper: ElementRef | null = null;

	@Input() title: string = '';
	@Input() message: string = '';
  @Input() visible: boolean = true;
	@Input() isGreyBg: boolean = false;
	iconType: string = '';
  _messageType: string = '';

  get messageType(): any {
    return this._messageType;
  }
  @Input() set messageType(message: 'success' | 'error' | 'warning' | 'reminder') {
    this._messageType = message;
    switch(message) {
      case 'success':
        this.iconType = 'icon-ok';
      break;
      case 'error':
        this.iconType = 'icon-remove'
      break;
      case 'warning':
        this.iconType = 'icon-warning-sign';
      break;
      default:
        this.iconType = 'icon-info-sign';
      break;
    }
  }


	@Output() visibleChange: EventEmitter<boolean> = new EventEmitter();

	constructor() { }

	ngOnInit() { }
}
