
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
   
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports:[ReactiveFormsModule,FormsModule],
  standalone: true
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log("Login Form Submitted", form.value);
    }
  }
}