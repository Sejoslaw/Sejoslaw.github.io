import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'seia-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<void>();

  constructor() {}
}
