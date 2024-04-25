import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fetch-form-input',
  standalone: true,
  imports: [FormsModule],
  template: `  <div class="row">
  <div class={{fetchInpLeft}}>
      <div class="row">
          <label class="{{labelClass}} col-form-label">{{formLabel}}:</label>
          <div class="{{inputClass}}">
              <input type="text" class="form-control" [(ngModel)]="inpVar">
          </div>
      </div>
  </div>
</div>`,

  styleUrl: './fetch-form-input.component.css'
})
export class FetchFormInputComponent {
  @Input() formLabel: string ="";
  @Input() labelClass: string ="col-sm-2 offset-sm-2";
  @Input() inputClass: string ="col-sm-4";
  @Input() fetchInpLeft: string="col";
  @Input() inpVar: string="templateValue";
  templateValue = "";


}
