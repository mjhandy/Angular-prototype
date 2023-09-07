import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports : [ MatIconModule, LoginComponent,RouterModule,TranslateModule ]
})
export class HeaderComponent {

}