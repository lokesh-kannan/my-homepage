import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-form-input',
  standalone: true,
  imports: [FormsModule],
  template: `<div class="row">
  <div class="col">
      <div class="row">
          <label class="col-sm-3 form-label">{{registerInpLabel1}}:</label>
          <div class="inplb col-sm-9">
              <input type="text" class="form-control" [(ngModel)]="inpVar1" (ngModelChange)="updateinpvar1()"> 
          </div>

      </div>
  </div>
  <div class="col">
      <div class="row">
          <label class="col-sm-3 col-form-label">{{registerInpLabel2}}:</label>
          <div class="inpbox col-sm-9">
              <input type="text" class="form-control" [(ngModel)]="inpVar2" (ngModelChange)="updateinpvar2()">
          </div>

      </div>
  </div>
</div>`,
  styleUrl: './register-form-input.component.css'
})
export class RegisterFormInputComponent {
  @Input() registerInpLabel1: string="";
  @Input() registerInpLabel2: string="";
  inpVar1: string="";
  inpVar2: string="";
 constructor(private service:RegisterService){

 }

 updateinpvar1(){
  this.service.setField(this.registerInpLabel1,this.inpVar1);
 }
 updateinpvar2(){
  this.service.setField(this.registerInpLabel2,this.inpVar2);
 }
}
