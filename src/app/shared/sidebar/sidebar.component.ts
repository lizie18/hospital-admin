import { Component, OnInit } from '@angular/core';
import { SidebareService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(
    public sidebarMenu: SidebareService
  ) { }

  ngOnInit(): void {
  }

}
