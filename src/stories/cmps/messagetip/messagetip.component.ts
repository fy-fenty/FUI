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
	@Input() messageType = 'success';
	@Output() visibleChange: EventEmitter<boolean> = new EventEmitter();

	constructor() { }

	ngOnInit() { }
}
