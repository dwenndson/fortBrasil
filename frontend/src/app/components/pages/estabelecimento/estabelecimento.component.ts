import { HeaderService } from './../../template/header/service/header.service';
import { Estabelecimento } from './models/estabelecimento.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.scss']
})
export class EstabelecimentoComponent implements OnInit {

  public estabelecimento: Estabelecimento[];
  public displayColuns = []
  constructor(private router: Router,
    private headerService: HeaderService) {
      headerService.headerData = {
        title: 'Cadastro de Produto',
        icon: 'storefront',
        routeUrl: '/estabelecimento'
      }
    }

  ngOnInit(): void {

  }
  navigateToEstabelecimentoCreate(): void {
    this.router.navigate(['/estabelecimento/create'])
  }

}
