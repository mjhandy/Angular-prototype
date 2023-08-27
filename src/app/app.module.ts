import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';

// material items
import { MaterialModule } from './shared/material/material.module';
import { SvgIconModule } from './shared/svg-icon/svg-icon.module';



@NgModule({
  declarations: [
    AppComponent,    
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    HeaderComponent,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    SvgIconModule    
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
