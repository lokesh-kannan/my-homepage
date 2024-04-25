import { Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FetchpageComponent } from './fetchpage/fetchpage.component';
import { RegistrationComponent } from './registration/registration.component';


export const routes: Routes = [
    {path: 'loginpage', component:LoginpageComponent },
    {path: 'fetchpage', component:FetchpageComponent },
    {path: 'registration', component:RegistrationComponent },
];
