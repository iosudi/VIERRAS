import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './page/not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    RouterModule.forChild([{ path: '', component: NotFoundComponent }]),
  ],
})
export class NotFoundModule {}
