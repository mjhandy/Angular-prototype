import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'privacy-policy', loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) 
  },
  { 
    path: 'terms-conditions', loadChildren: () => import('./pages/terms/terms.module').then(m => m.TermsModule) 
  },
  { 
    path: 'pages/typography', 
    loadChildren: () => import('./pages/typography/typography.module').then(m => m.TypographyModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
