import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  cyear: number = new Date().getFullYear();

}
