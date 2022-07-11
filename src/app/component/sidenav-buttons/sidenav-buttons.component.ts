import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-buttons',
  templateUrl: './sidenav-buttons.component.html',
  styleUrls: ['./sidenav-buttons.component.css']
})
export class SidenavButtonsComponent implements OnInit {
  Options: string[] = ['Matrix', 'Home','Implementation Levels'];
  Icons: string[] = ['bar_chart','home','home'];
  Routing: string[]=['/matrix','/','/circular-heatmap']
  constructor() { }

  ngOnInit(): void {
  }

}