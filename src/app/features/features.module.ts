import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CustomersComponent } from './components/customers/customers.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CreditCardsFormComponent } from './components/credit-cards/credit-cards-form/credit-cards-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomersComponent,
    CreditCardsComponent,
    CreditCardsFormComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FeaturesModule {}
