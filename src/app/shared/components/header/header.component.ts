import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/core/services/oauth/oauth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  public params = new URLSearchParams();
  private CLIENT_ID = environment.clientID;

  constructor(private oauthService: OauthService, private router: Router) {}

  ngOnInit(): void {
    this.params.set('client_id', this.CLIENT_ID);
    this.params.set('token', this.oauthService.getAccessToken());
  }

  logout(): void {
    this.oauthService
      .requestRevokeToken(this.params.toString())
      .subscribe(() => {
        this.oauthService.deleteAccessToken();
        this.router.navigate(['/auth']);
      });
  }
}
