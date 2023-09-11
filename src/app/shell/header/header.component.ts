import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './login/login.component';
import { LangToggleComponent } from '../../shared/lang-toggle/lang-toggle.component';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports : [ 
    MatIconModule, 
    LoginComponent,
    RouterModule,
    TranslateModule,
    LangToggleComponent ]
})
export class HeaderComponent {


}