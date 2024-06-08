import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    title: 'Home Page | Ng Prototype',
    data:{
      seo:{
        
        metaTags:[
          {name: 'description', content:'This is the prototype home page'}
        ]
      }
    }
  },
  { 
    path: 'privacy-policy', 
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule),
    title: 'Privacy Policy | Ng Prototype',
    data:{
      seo:{
        
        metaTags:[
          {name: 'description', content:'This is the prototype Privacy Policy'}
        ]
      }
    }
  },
  { 
    path: 'terms-conditions', 
    loadChildren: () => import('./pages/terms/terms.module').then(m => m.TermsModule),
    title: 'Terms & Conditions | Ng Prototype',
    data:{
      seo:{
        
        metaTags:[
          {name: 'description', content:'This is the prototype Terms & Conditions page'}
        ]
      }
    }
  },
  { 
    path: 'pages/typography', 
    loadChildren: () => import('./pages/typography/typography.module').then(m => m.TypographyModule),
    title: 'Typography | Ng Prototype',
    data:{
      seo:{
        
        metaTags:[
          {name: 'description', content:'This is the prototype Typography page'}
        ]
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
