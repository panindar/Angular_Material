import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  title = 'material-demo';
  opened = false;

  log(state) {
    console.log(state)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
