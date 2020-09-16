import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentoCrudComponent } from './estabelecimento-crud.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [EstabelecimentoCrudComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ]
})
export class EstabelecimentoCrudModule { }
