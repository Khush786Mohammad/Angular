import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';

function mustContainsSpecialCharacter(control: AbstractControl){
  const specialCharacters = ['!','@','#','$','%'];
  const doesContains = specialCharacters.some((char) => control.value.includes(char))
  if(doesContains){
    return null;
  }
  return {doesNotContainSpecialCharacters: true};
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
    password: new FormControl('',{
      validators: [Validators.required, Validators.minLength(8),mustContainsSpecialCharacter]
    })
  });

  get isEmailInvalid(){
    return this.signUp.controls.email.touched && this.signUp.controls.email.dirty && this.signUp.controls.email.invalid;
  }

  get isPasswordInvalid(){
    return this.signUp.controls.password.touched && this.signUp.controls.password.dirty && this.signUp.controls.password.invalid;
  }

  onSubmit(){
    console.log(this.signUp);
    console.log(this.signUp.controls.email.value);
    console.log(this.signUp.controls.password.value);
  }

  onReset(){
    this.signUp.reset();
  }
}
