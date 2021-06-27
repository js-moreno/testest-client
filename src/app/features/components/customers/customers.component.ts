import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DocumentCollection } from 'ngx-jsonapi';
import { OauthService } from 'src/app/core/services/oauth/oauth.service';
import { User, UsersService } from 'src/app/core/services/users/users.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.sass'],
})
export class CustomersComponent implements OnInit {
  public customers: DocumentCollection<User>;
  public dataSource: MatTableDataSource<any>;

  constructor(
    private customersService: UsersService,
    private router: Router,
    private oauthService: OauthService
  ) {
    this.customersService.all().subscribe({
      next: (customers) => {
        this.customers = customers;
        this.dataSource = new MatTableDataSource(customers.data);
      },
      error: () => {
        this.oauthService.deleteAccessToken();
        this.router.navigate(['/auth']);
      },
    });
  }

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email'];

  ngOnInit(): void {}
}
