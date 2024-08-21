import { NgModule } from '@angular/core';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// components
import { HeaderComponent } from './shell/header/header.component';
import { FooterComponent } from './shell/footer/footer.component';

// material items
import { MaterialModule } from './shared/material/material.module';
import { SvgIconModule } from './shared/svg-icon/svg-icon.module';

// forms
import { ReactiveFormsModule } from '@angular/forms';


// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent], imports: [TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: httpTranslateLoaderFactory,
            deps: [
                HttpClient
            ]
        }
    }),
        HeaderComponent,
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        SvgIconModule,
        ReactiveFormsModule], 
        providers: [Meta, provideHttpClient(withInterceptorsFromDi())]
})

export class AppModule { }
