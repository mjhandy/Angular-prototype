import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountSignupComponent } from './account-signup.component';
import { AccountSignupRoutingModule } from './account-signup-routing.module';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    AccountSignupComponent,
    AccountSignupRoutingModule
  ]
})
export class AccountSignupModule { }
