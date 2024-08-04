import { Component, TemplateRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage-service';
import { NgbNav, NgbDropdownModule, NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    TranslateModule,
    NgbNav,
    NgbDropdownModule,
    RouterModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  providers: [NgbOffcanvasConfig, NgbOffcanvas]
})
export class NavComponent {
  // collapsed = true;

  constructor(
    config: NgbOffcanvasConfig,
    private offcanvasService: NgbOffcanvas,
    private LocalStorageSerivce: LocalStorageService,
  ) {
    config.position = 'end';
    config.backdropClass = 'bg-info';
    config.keyboard = false;

  }

  ngOnInit() {
    let lang = this.LocalStorageSerivce.getItem('lang');

    console.debug('header lang get from local storage:', lang);
  }

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content);
  }
}
