import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';
import { LoginForm } from '../../../model/loginForm';
import { HttpErrorResponse } from '@angular/common/http';

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
  showPassword: boolean = false;

  constructor(
    private titleService: Title,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Notes API | Login');
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const payload = {
      username: form.value?.username,
      password: form.value?.password,
    };
    this.authService?.login(payload)?.subscribe({
      next: (res: any) => {
        if (res && res?.token) {
          const token = (res as any)['token'];
          localStorage.setItem('token', token);
          this.authService?.initiateSessionTimeout();
          this.router.navigate(['/user/notes'], {
            replaceUrl: true,
          });
        }
      },
      error: (err: HttpErrorResponse) => {
        const message =
          typeof err.error === 'string'
            ? err.error
            : err.error?.message || 'Something went wrong.';

        this.toastr.error(message);
      },
    });
  }
}
