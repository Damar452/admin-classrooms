import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { menuItems } from 'src/app/core/consts/menu-items.consts';
import { userLoggedKey } from 'src/app/core/consts/storage-keys.consts';
import { User } from 'src/app/core/models/auth/auth.type';
import { MenuItem } from 'src/app/core/models/menu-items.type';
import { LocalStorageService } from 'src/app/core/services/utilities/local-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) {}

  public menuItems: MenuItem[] = menuItems;
  public userData!: User;
  @Output() onChangeSidebar = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.userData = this.localStorageService.getData(userLoggedKey);
  }

  public changeSidebar(event: Event) {
    const target = event.target as HTMLInputElement;
    this.onChangeSidebar.emit(!target.checked);
  }
  
}
