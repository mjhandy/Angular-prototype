import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';





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
  ) { }

  ngOnInit() {
    // skip to main
    this.skipLinkPath = `${this.router.url}#main`;
  }


  skipToMain(id: string) {
    let el = document.getElementById(id);
    el?.setAttribute('tabindex','-1');
    el?.focus();
  }

}
