import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
	selector: 'fui-messagetip',
	templateUrl: './messagetip.component.html',
	styleUrls: ['./messagetip.component.less']
})
export default class MessageTipComponent implements OnInit {
  /**
   * This title will shown before as the message
   */
	@Input() title: string = '';

  /**
   * What text would be dispalyed
   */
	@Input() message: string = '';

  /**
   * In default, will dispaly.
   */
  @Input() visible: boolean = true;

  /**
   * Is grey background?
   */
	@Input() isGreyBg: boolean = false;

	iconType: string = '';

  /**
   * Intermediate variable, for iconType
   */
  _messageType: string = '';

  @Input() set type(type: 'success' | 'error' | 'warning' | 'reminder') {
    this._messageType = type;
    switch(type) {
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
  get type(): any {
    return this._messageType;
  }

  /**
   * The message type, success or error or warning or reminder
   */
	@Output() visibleChange: EventEmitter<boolean> = new EventEmitter();

	constructor() { }

	ngOnInit() { }
}
