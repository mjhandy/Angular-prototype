import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'en',
    pathMatch: 'full'
  },
  { 
    path: 'en', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    title: 'English Home Page | Ng Prototype',
    data:{
      seo:{        
        metaTags:[
          {name: 'description', content:'This is the prototype home page'}
        ]
      }
    }
  },
  { 
    path: 'en/privacy-policy', 
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
    path: 'en/terms-conditions', 
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
    path: 'en/pages/typography', 
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
  { 
    path: 'en/forms/account-signup', 
    loadChildren: () => import('./pages/forms/account-signup/account-signup.module').then(m => m.AccountSignupModule),
    title: 'Account Signup | Ng Prototype',
    data:{
      seo:{        
        metaTags:[
          {name: 'description', content:'This is an example Account Signup form.'}
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
