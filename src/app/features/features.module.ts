import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CustomersComponent } from './components/customers/customers.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CustomersComponent, CreditCardsComponent],
  imports: [CommonModule, FeaturesRoutingModule, SharedModule, MaterialModule],
})
export class FeaturesModule {}
