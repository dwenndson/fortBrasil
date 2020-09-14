import { EstabelecimentoService } from './service/estabelecimento.service';
import { Estabelecimento } from './models/estabelecimento.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.scss']
})
export class EstabelecimentoComponent implements OnInit {

  public estabelecimento: Estabelecimento[];
  public displayColuns = []
  constructor(private service: EstabelecimentoService) { }

  ngOnInit(): void {

  }

}