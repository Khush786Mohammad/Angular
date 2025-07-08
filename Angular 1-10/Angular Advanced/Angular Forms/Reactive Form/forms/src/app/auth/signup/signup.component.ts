import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';

function mustContainsSpecialCharacter(control: AbstractControl){
  if(!control.value)
    return null;
  const specialCharacters = ['!','@','#','$','%'];
  const doesContains = specialCharacters.some((char) => control.value.includes(char))
  if(doesContains){
    return null;
  }
  return {doesNotContainSpecialCharacters: true};
}

function passwordMatched(control: AbstractControl){
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if(password === confirmPassword){
    return null;
  }
  return {passwordDoesNotMatched: true};
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signUp = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.required, Validators.email]
    }),
    passwords: new FormGroup({
      password: new FormControl('',{
        validators: [Validators.required, Validators.minLength(8),mustContainsSpecialCharacter]
      }),
      confirmPassword: new FormControl('',{
        validators:[Validators.required,Validators.minLength(8),mustContainsSpecialCharacter]
      }),
     },
     {
      validators: [passwordMatched]
     }
    ),
    firstName: new FormControl('',{
      validators: [Validators.required]
    }),
    lastName: new FormControl('',{
      validators: [Validators.required]
    }),

    address: new FormGroup({
      street: new FormControl('',{
        validators: [Validators.required]
      }),
      number: new FormControl('',{
        validators: [Validators.required]
      }),
      postalCode: new FormControl('',{
        validators: [Validators.required]
      }),
      city: new FormControl('',{
        validators: [Validators.required]
      })
    }), 
    
    role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('other',{
      validators: [Validators.required]
    }),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false)
    ],{
      validators: [Validators.required]
    }),
    agree: new FormControl(false, {validators: [Validators.requiredTrue]})
  });

  get isEmailInvalid(){
    return this.signUp.controls.email.touched && this.signUp.controls.email.dirty && this.signUp.controls.email.invalid;
  }

  get isPasswordInvalid(){
    return this.signUp.controls.passwords.controls.password.touched && this.signUp.controls.passwords.controls.password.dirty && this.signUp.controls.passwords.controls.password.invalid;
  }

  get passwordNotMatched(){
    return this.signUp.controls.passwords.controls.password.touched && 
    this.signUp.controls.passwords.controls.password.dirty && 
    this.signUp.controls.passwords.controls.password.valid && 
    this.signUp.controls.passwords.controls.confirmPassword.touched && 
    this.signUp.controls.passwords.controls.confirmPassword.dirty && 
    this.signUp.controls.passwords.controls.password.value !== this.signUp.controls.passwords.controls.confirmPassword.value;
  }
  onSubmit(){
    console.log(this.signUp);
    if(this.signUp.valid){
      console.log('form is valid');
    }
    else
    console.log("form is invalid")
  }

  onReset(){
    this.signUp.reset();
  }
}
