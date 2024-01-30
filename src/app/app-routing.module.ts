
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routingApp: Routes = [
  {path : '', 
  loadChildren: () => import('./default-page/default-page.module').then((m) => m.DefaultPageModule)
},
  {path : 'pageA', 
  loadChildren: () => import('./listing-page-no-record/listing-page-no-record.module').then((m) => m.ListingPageNoRecordModule)
}
];

@NgModule({
    imports: [RouterModule.forRoot(routingApp)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }