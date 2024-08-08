import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSignupComponent } from './account-signup.component';

const routes: Routes = [{ path: '', component: AccountSignupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSignupRoutingModule { }
