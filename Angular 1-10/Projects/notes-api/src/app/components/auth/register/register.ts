import { Component, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register implements OnInit {
  isLoading = signal<boolean>(false);
  constructor(
    private titleService: Title,
    private authService: AuthService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.titleService?.setTitle('Notes API | Register');
  }
  authForm = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  };
  showPassword = false;
  showConfirmPassword = false;

  onSubmit(form: NgForm) {
    if (form?.invalid) {
      return;
    }
    const payload = {
      username: form?.value?.username,
      password: form?.value?.password,
      email: form?.value?.email,
    };
    this.isLoading.set(true);
    this.authService?.registerUser(payload)?.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.toastr.error(err?.error?.error ?? 'Registration Failed');
        console.log(err);
      },
      complete: () => {
        this.isLoading.set(false);
      },
    });
  }
}
