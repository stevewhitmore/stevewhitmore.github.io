import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blatherings-menu',
  templateUrl: './blatherings-menu.component.html',
  styleUrls: ['./blatherings-menu.component.scss']
})
export class BlatheringsMenuComponent {
  @Input() menuItems: any;
  @Output() menuItemClickEvent: EventEmitter<any> = new EventEmitter<any>();
  
  relaySelection(name: string): void {
    this.menuItemClickEvent.emit(name);
  }
}
