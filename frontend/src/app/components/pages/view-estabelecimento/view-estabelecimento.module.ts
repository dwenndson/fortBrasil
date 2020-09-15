import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ViewEstabelecimentoComponent } from './view-estabelecimento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ViewEstabelecimentoComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class ViewEstabelecimentoModule { }
