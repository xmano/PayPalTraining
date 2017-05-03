import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  public name;
  constructor(){
    this.name = "Angular 2 Rocks!";
  }  
}