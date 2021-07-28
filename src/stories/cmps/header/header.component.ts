import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export default class HeaderComponent {
  @Input()
  user: unknown = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}
