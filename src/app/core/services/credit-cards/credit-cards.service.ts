import { Injectable } from '@angular/core';
import { Service, Resource } from 'ngx-jsonapi';

export class CreditCard extends Resource {
  public attributes = {};
}

@Injectable({
  providedIn: 'root',
})
export class CreditCardsService extends Service<CreditCard> {
  public resource = CreditCard;
  public type = 'credit-cards';
}
