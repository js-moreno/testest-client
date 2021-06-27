import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SiNoPipe } from './pipes/si-no.pipe';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SiNoPipe],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-left' }),
  ],
  exports: [HeaderComponent, FooterComponent, SiNoPipe],
})
export class SharedModule {}
