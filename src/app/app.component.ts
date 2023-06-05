import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './core/services/utilities/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public sidebarOpen: boolean = true;

  constructor(private storageService: LocalStorageService) {}

  ngOnInit(): void {
    this.storageService.initializeMockData();
  }

 

}
