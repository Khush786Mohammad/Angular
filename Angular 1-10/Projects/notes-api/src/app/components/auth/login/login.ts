import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { LoginForm } from '../Model/LoginForm';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnInit {
  authForm: LoginForm = {
    username: '',
    password: '',
  };

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Notes API | Login');
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
