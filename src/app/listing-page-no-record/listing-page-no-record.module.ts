import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared/shared.module';
import { ListingPageNoRecordComponent } from './listing-page-no-record.component';
import { ListingPageNoRecordRoutingModule } from './listing-page-no-record-routing';


@NgModule({
  declarations: [ListingPageNoRecordComponent],

  imports: [
    CommonModule,
    ListingPageNoRecordRoutingModule,
    SharedModule
  ]
})
export class ListingPageNoRecordModule { }
