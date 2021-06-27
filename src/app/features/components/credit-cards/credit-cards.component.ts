import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DocumentCollection } from 'ngx-jsonapi';
import {
  CreditCard,
  CreditCardRead,
  CreditCardsReadService,
  CreditCardsService,
} from 'src/app/core/services/credit-cards/credit-cards.service';
import { OauthService } from 'src/app/core/services/oauth/oauth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.sass'],
})
export class CreditCardsComponent implements OnInit {
  public creditCardRead: DocumentCollection<CreditCardRead>;
  public dataSource: MatTableDataSource<any>;

  constructor(
    private creditCardsReadService: CreditCardsReadService,
    private router: Router,
    private oauthService: OauthService,
    private toastr: ToastrService
  ) {
    this.creditCardsReadService.all().subscribe({
      next: (creditCards) => {
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
    'options',
  ];

  styleObject(bool) {
    if (bool)
      return {
        color: 'white',
        background: '#51a351',
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

  delete(creditCard: CreditCardRead) {
    let title = `${creditCard.attributes.franchise} ${creditCard.attributes.truncated_number}`;
    if (
      confirm(`¿Realmente quieres eliminar la tarjeta de crédito  ${title}?`)
    ) {
      creditCard.delete().subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter((value, key) => {
            return value.id != creditCard.id;
          });
          this.toastr.success(
            `La tarjeta de crédito ${title} ha sido eliminada`,
            '¡Éxito!'
          );
        },
        error: () => {
          this.toastr.error(
            `Algo salio mal y la tarjeta de crédito ${title} no fue eliminada`,
            '¡Error!'
          );
        },
      });
    }
  }
}
