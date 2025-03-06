import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { EmpInfoComponent } from "./emp-info/emp-info.component";
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextcomponentComponent, ImagecomponentComponent, EmpInfoComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jawad Hossain Mahi this is your first project';
}
