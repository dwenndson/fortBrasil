import { AppRoutingModule } from './../../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list";

import { NavComponent } from './nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
