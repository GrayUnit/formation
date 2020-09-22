import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  public menuIsOpen: boolean;

  constructor() { }

  ngOnInit(): void {
    this.menuIsOpen = false;
  }

  // Un commentaire sur une ligne
  /*
    Un commentaire
    sur plusieurs lignes
  */

  public toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    console.log(this.menuIsOpen);
  }

}
