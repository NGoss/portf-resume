import { Component, OnInit } from '@angular/core';
import { NavItem } from './nav-item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navItems :NavItem[] = [
    { name: 'Home', link: '/' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
