import { Routes } from '@angular/router';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';

export const routes: Routes = [
    { path: "", component: TextcomponentComponent },
    { path: 'get-data', component: EmpInfoComponent }
];
