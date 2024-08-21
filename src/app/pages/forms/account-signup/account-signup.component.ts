import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validator, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-account-signup',
  standalone: true,
  imports: [ ],
  templateUrl: './account-signup.component.html',
  styleUrl: './account-signup.component.scss'
})
export class AccountSignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  accountCreate = new FormGroup({
    email: new FormControl('',[
      Validators.required
    ]),

  })


  

  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.accountCreate.value);
  }

  ngOnInit(): void {
      
  }

}
