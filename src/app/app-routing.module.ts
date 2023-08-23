import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './pages/home/home.module';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data:{
      title: 'Home'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
