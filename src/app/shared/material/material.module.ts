import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    // MatIconRegistry
  ],
  providers:[
    MatIconRegistry
  ]

})
export class MaterialModule { }
