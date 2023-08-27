import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [MatIconModule]
})
export class LoginComponent {
  loggedIn = false;
}
