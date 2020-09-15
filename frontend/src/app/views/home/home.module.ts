import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class HomeModule { }
