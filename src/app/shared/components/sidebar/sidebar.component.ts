import { Component, EventEmitter, Output } from '@angular/core';
import { menuItems } from 'src/app/core/consts/menu-items.consts';
import { MenuItem } from 'src/app/core/models/menu-items.type';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public menuItems: MenuItem[] = menuItems;
  @Output() onChangeSidebar = new EventEmitter<boolean>();

  public changeSidebar(event: Event) {
    const target = event.target as HTMLInputElement;
    this.onChangeSidebar.emit(!target.checked);
  }

}
