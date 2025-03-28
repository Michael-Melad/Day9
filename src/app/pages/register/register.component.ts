import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
   import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
   
   @Component({
     selector: 'app-register',
     templateUrl: './register.component.html',
     imports:[ReactiveFormsModule,NgIf],
     standalone: true
   })
   export class RegisterComponent {
    registerForm: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.registerForm = this.fb.group({
        email: ['', [Validators.required, Validators.email, Validators.minLength(10)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  
    onSubmit() {
      if (this.registerForm.valid) {
        console.log("Register Form Submitted", this.registerForm.value);
      }
    }
  }


