import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SeoService } from './shared/services/seo.service';
import { filter, map, mergeMap, tap } from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng Prototpe App';
  skipLinkPath: string | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute, 
    private seoService: SeoService
  ) { 

  }

  ngOnInit() {
    // skip to main
    this.skipLinkPath = `${this.router.url}#main`;

    // reouter based meta tags
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
    ).subscribe(data => {
      let seoData = data['seo'];
      this.seoService.updateTitle(seoData['title']);
      this.seoService.updateMetaTags(seoData['metaTags']);
    });

  }



  skipToMain(id: string) {
    let el = document.getElementById(id);
    el?.setAttribute('tabindex','-1');
    el?.focus();
  }

}
