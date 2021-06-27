import { Injectable } from '@angular/core';
import { Service, Resource } from 'ngx-jsonapi';

export class CreditCard extends Resource {
  public attributes = {
    number: '',
    franchise: '',
    due_date_year: '',
    due_date_month: '',
    is_principal: '',
  };
}

export class CreditCardRead extends Resource {
  public attributes = {
    truncated_number: '',
    franchise: '',
    due_date: '',
    due_date_year: '',
    due_date_month: '',
    is_principal: '',
  };
}

@Injectable({
  providedIn: 'root',
})
export class CreditCardsService extends Service<CreditCard> {
  public resource = CreditCard;
  public type = 'credit-cards';
}
@Injectable({
  providedIn: 'root',
})
export class CreditCardsReadService extends Service<CreditCardRead> {
  public resource = CreditCardRead;
  public type = 'credit-cards';
}
