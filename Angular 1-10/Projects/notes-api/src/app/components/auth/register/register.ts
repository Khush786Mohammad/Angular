import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { RegistrationForm } from '../Model/RegistrationForm';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService?.setTitle('Notes API | Register');
  }
  authForm: RegistrationForm = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  };

  onSubmit(form: NgForm) {
    console.log(form?.value);
  }
}
