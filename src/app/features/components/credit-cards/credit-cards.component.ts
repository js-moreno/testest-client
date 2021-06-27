import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DocumentCollection } from 'ngx-jsonapi';
import {
  CreditCard,
  CreditCardsService,
} from 'src/app/core/services/credit-cards/credit-cards.service';
import { OauthService } from 'src/app/core/services/oauth/oauth.service';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.sass'],
})
export class CreditCardsComponent implements OnInit {
  public creditCards: DocumentCollection<CreditCard>;
  public dataSource: MatTableDataSource<any>;

  constructor(
    private creditCardsService: CreditCardsService,
    private router: Router,
    private oauthService: OauthService
  ) {
    this.creditCardsService.all().subscribe({
      next: (creditCards) => {
        this.creditCards = creditCards;
        this.dataSource = new MatTableDataSource(creditCards.data);
      },
      error: () => {
        this.oauthService.deleteAccessToken();
        this.router.navigate(['/auth']);
      },
    });
  }

  displayedColumns: string[] = [
    'id',
    'franchise',
    'truncated_number',
    'due_date',
    'is_principal',
  ];

  styleObject(bool) {
    if (bool)
      return {
        color: 'white',
        background: 'limegreen',
        padding: '2px 5px',
        ['border-radius']: '5px',
      };
    else
      return {
        color: 'white',
        background: 'red',
        padding: '2px 5px',
        ['border-radius']: '5px',
      };
  }

  ngOnInit(): void {}
}
