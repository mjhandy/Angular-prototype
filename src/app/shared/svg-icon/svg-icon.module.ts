import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MaterialModule } from '../material/material.module';
import { MatIconRegistry } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SvgIconModule { 
  private iconPath = '/assets/icons';

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ){
    this.matIconRegistry
      .addSvgIcon(
        'profile',
        this.setPath(`${this.iconPath}/profile.svg`)      
      )
  }

  private setPath(url: string): SafeResourceUrl { 
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url); 
  }  
}
