import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 studentFields:{[index: string]:any}={};

  constructor() { }
 setField(name:string,value:string){
  this.studentFields[name]=value;
 }
  getField(name:string){
    return this.studentFields[name];
  }
}