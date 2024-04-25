import { Component } from '@angular/core';
import { FetchFormInputComponent } from '../fetch-form-input/fetch-form-input.component';
import { RegisterService } from '../register.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-fetchpage',
  standalone: true,
  imports: [FetchFormInputComponent, CommonModule],
  templateUrl: './fetchpage.component.html',
  styleUrl: './fetchpage.component.css'
})
export class FetchpageComponent {
 fields:{name:string,value:any}[]=[];
  constructor(private service:RegisterService){
    
    for (let obj in this.service.studentFields){
      const field ={
        "name":obj,
        "value":this.service.getField(obj)
      };
      this.fields.push(field);
      
    }
  }
  nameLabel = "Name";
  mobileLabel = "Mobile";
  dobLabel = "Date of birth";
  ageLabel = "Age";
  addressLabel = "Address";
  districtLabel = "District";
  talukLabel = "Taluk";
  villageLabel = "Village";
  englishLabel = "English";
  mathsLabel = "Maths";
  scienceLabel = "Science";
  socialLabel = "Social";
  tamilLabel = "Tamil";
  acknowledgeLabel = "Acknowledgement number";
  name="";
}
