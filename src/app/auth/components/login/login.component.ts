import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/core/services/oauth/oauth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  public params = new URLSearchParams();
  private CLIENT_ID = environment.clientID;
  public error = null;
  public registration = null;

  constructor(
    private formBuilder: FormBuilder,
    public oauthService: OauthService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as { registration: string };
    this.registration = state?.registration;
  }

  ngOnInit(): void {}

  login(): void {
    this.params.set('grant_type', 'password');
    this.params.set('scopes', 'openid read write');
    this.params.set('client_id', this.CLIENT_ID);
    this.params.set('username', this.form.value.email);
    this.params.set('password', this.form.value.password);

    if (this.form.valid) {
      this.oauthService.requestAccessToken(this.params.toString()).subscribe({
        next: (res) => {
          localStorage.setItem('access_token', res.access_token);
          this.router.navigate(['/customers']);
        },
        error: (error) => {
          this.error = error.error.error_description;
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
