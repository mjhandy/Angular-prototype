import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports : [ MatIconModule]
})
export class HeaderComponent {

}
