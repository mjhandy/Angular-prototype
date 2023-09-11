import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng16App';
  skipLinkPath: string | undefined;

  constructor(
    private router: Router,
    public translate: TranslateService,
    
  ) { 
    translate.addLangs(['en-ca', 'fr-ca' ]);
    translate.setDefaultLang('en-ca');
    translate.use('en-ca');
  }

  ngOnInit() {
    // skip to main
    this.skipLinkPath = `${this.router.url}#main`;

    // language 
    console.debug('lang:', this.translate.currentLang);
    localStorage.setItem('lang', this.translate.currentLang);
    //set the default lange html attr
  }

  //switch languages and set lang in local storage
  translateLanguageTo(lang: string){
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  skipToMain(id: string) {
    let el = document.getElementById(id);
    el?.setAttribute('tabindex','-1');
    el?.focus();
  }

}
