import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { CustomersComponent } from './components/customers/customers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full',
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'credit-cards',
    component: CreditCardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
