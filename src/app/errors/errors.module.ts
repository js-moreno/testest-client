import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, ErrorsRoutingModule, MaterialModule],
})
export class ErrorsModule {}
