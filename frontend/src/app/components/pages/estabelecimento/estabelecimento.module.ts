import { EstabelecimentoComponent } from './estabelecimento.component';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EstabelecimentoComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule
  ]
})
export class EstabelecimentoModule { }
