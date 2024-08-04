import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage-service';
import { NgbNav, NgbDropdownModule  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    TranslateModule, 
    NgbNav, 
    NgbDropdownModule 
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  collapsed = true;

  constructor(
    private LocalStorageSerivce: LocalStorageService,
  ){}

  ngOnInit(){
    let lang = this.LocalStorageSerivce.getItem('lang');

    console.debug('header lang get from local storage:', lang); 
  }
}
