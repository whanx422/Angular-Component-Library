import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingPageNoRecordComponent } from './listing-page-no-record.component';


const routes: Routes = [
  {path : '', component: ListingPageNoRecordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingPageNoRecordRoutingModule { }