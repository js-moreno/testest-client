import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  form = this.formBuilder.group({
    first_name: ['', [Validators.required, Validators.maxLength(100)]],
    last_name: ['', [Validators.required, Validators.maxLength(100)]],
    phone: ['', [Validators.pattern('^[0-9]*$'), , Validators.maxLength(50)]],
    address: ['', Validators.maxLength(150)],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    // password_confirmation: ['', [Validators.required, Validators.minLength(8)]],
  });
  public error = null;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register(): void {
    if (this.form.valid) {
      let user = this.usersService.new();
      user.attributes = this.form.value;
      user.save().subscribe({
        next: () => {
          const navigationExtras: NavigationExtras = {
            state: {
              registration: 'Registro exitoso',
            },
          };
          this.router.navigate(['/auth'], navigationExtras);
        },
        error: (error) => {
          this.error = error.errors[0].detail;
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
