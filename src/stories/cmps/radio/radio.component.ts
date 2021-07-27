import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-radio',
  template: ` <label
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }">
  <input
    type="radio"
    (click)="onClick.emit($event)"
  /> {{ label }} </label>`,
  styleUrls: ['./radio.less'],
})
export default class RadioComponent {
  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the radio be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Radio contents
   *
   * @required
   */
  @Input()
  label = 'Radio';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {

    return ['storybook-radio', `storybook-radio--${this.size}`];
  }
}
