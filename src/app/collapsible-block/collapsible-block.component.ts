import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-block',
  templateUrl: './collapsible-block.component.html',
  styleUrls: ['./collapsible-block.component.css']
})
export class CollapsibleBlockComponent implements OnInit {

  @Input() title :string = "";
  expanded :boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

}
