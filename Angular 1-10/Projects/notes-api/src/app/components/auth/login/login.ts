import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnInit {
  authForm = {
    username: '',
    password: '',
  };

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
    console.log(form.value);
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
          localStorage.setItem('token', JSON.stringify(token));
          console.log(token);
          this.router.navigate(['/notes'], {
            replaceUrl: true,
          });
        }
      },
      error: (err) => {
        this.toastr.error(err?.error ?? 'Something went wrong.');
      },
    });
  }
}
