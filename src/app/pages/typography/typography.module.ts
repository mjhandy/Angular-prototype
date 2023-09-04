import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypographyComponent } from './typography.component';
import { TypographyRoutingModule } from './typography-routing.module';



@NgModule({
  declarations: [
    TypographyComponent
  ],
  imports: [
    CommonModule,
    TypographyRoutingModule
  ]
})
export class TypographyModule { }
