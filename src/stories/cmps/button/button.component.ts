import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'fui-button--primary' : 'fui-button--secondary';

    return ['fui-button', `fui-button--${this.size}`, mode];
  }
}
