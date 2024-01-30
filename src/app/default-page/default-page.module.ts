import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultPageComponent } from './default-page.component';
import { SharedModule } from '../shared/shared/shared.module';
import { DefaultPageRoutingModule } from './default-page-routing.module';

@NgModule({
  declarations: [DefaultPageComponent],

  imports: [
    CommonModule,
    DefaultPageRoutingModule,
    SharedModule
  ]
})
export class DefaultPageModule { }
