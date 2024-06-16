import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor, NgForOf} from "@angular/common";

import { LocalStorageService } from 'src/app/shared/services/local-storage-service';

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
    private LocalStorageSerivce: LocalStorageService,
  ) {
    translate.addLangs([
      'en-CA', 
      'fr-CA'
    ]);
    translate.setDefaultLang('en-CA');
    translate.use('en-CA');
  }

  ngOnInit() {
    // language 
    console.log('Lang Toggle lang:', this.translate.currentLang);
    

    this.checkLang();
  }

  //switch languages and set lang in local storage
  translateLanguageTo(lang: string){
    this.translate.use(lang);
    this.LocalStorageSerivce.setItem('lang', lang);

  }

  checkLang(){
    const currentLang = this.LocalStorageSerivce.getItem('lang');

    if (!currentLang){
      this.LocalStorageSerivce.setItem('lang', this.translate.currentLang);
      console.debug('Initial language as been set')
      
    }
  }

}
