import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { LangToggleComponent } from '../../shared/lang-toggle/lang-toggle.component';
import { LoginComponent } from './login/login.component';
import { LocalStorageService } from 'src/app/shared/services/local-storage-service';


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
  constructor(
    private LocalStorageSerivce: LocalStorageService,
  ){

  }

 
  

  ngOnInit(){
    let lang = this.LocalStorageSerivce.getItem('lang');

    console.debug('header lang get from local storage:', lang); 
  }
}