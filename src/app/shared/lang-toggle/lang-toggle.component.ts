import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import {NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'app-lang-toggle',
  templateUrl: './lang-toggle.component.html',
  styleUrls: ['./lang-toggle.component.scss'],
  standalone: true,
  imports: [
    NgFor,
    TranslateModule
  ]
})
export class LangToggleComponent {



  constructor(
    public translate: TranslateService,
  ) {
    translate.addLangs([
      'en-ca', 
      'fr-ca'
    ]);
    translate.setDefaultLang('en-ca');
    translate.use('en-ca');
  }

  ngOnInit() {
    // language 
    console.log('lang:', this.translate.currentLang);
    

    this.checkLang();
  }

  //switch languages and set lang in local storage
  translateLanguageTo(lang: string){
    this.translate.use(lang);
    localStorage.setItem('lang', lang);

  }

  checkLang(){
    const currentLang = localStorage.getItem('lang');

    if (!currentLang){
      localStorage.setItem('lang', this.translate.currentLang);
      
    }
  }

}
