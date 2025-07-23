import { NgFor } from '@angular/common';
import { afterNextRender, Component, DestroyRef, ElementRef, inject, NgModule, OnDestroy, signal, viewChild, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { debounceTime, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  private destroyRef = inject(DestroyRef);
  private form = viewChild.required<NgForm>('loginForm');
  constructor(){
    afterNextRender( () => {
      const subscription = this.form().valueChanges?.pipe(debounceTime(1000)).subscribe({
        next:(val)=>window.localStorage.setItem('address',JSON.stringify({email:val.email}))
      });
      this.destroyRef.onDestroy(()=>subscription?.unsubscribe())
    });
  }

  login(loginForm: NgForm){
    const userEmail = loginForm.form.value;
    const userPassword = loginForm.form.value;
    
    if(loginForm.form.invalid){
      return ;
    }
    console.log(loginForm.form);
    console.log(userEmail,userPassword);
    loginForm.reset();
  }
}
