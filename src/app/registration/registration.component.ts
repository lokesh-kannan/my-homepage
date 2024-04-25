import { Component} from '@angular/core';
import { RegisterFormInputComponent } from '../register-form-input/register-form-input.component';
import { FetchFormInputComponent } from '../fetch-form-input/fetch-form-input.component';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RegisterFormInputComponent, FetchFormInputComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent{
  constructor(private service:RegisterService,private router:Router){
    
  }
  submit(){
    console.log(this.service.studentFields);
    this.router.navigate(["/fetchpage"]);
    
  }

}
