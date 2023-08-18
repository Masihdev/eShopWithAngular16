import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  menuList: string[] = ['home', 'products', 'sale', 'new arrival', 'contacts', 'services'];
}
