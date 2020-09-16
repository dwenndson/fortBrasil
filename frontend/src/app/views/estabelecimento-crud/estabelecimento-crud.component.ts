import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/service/header.service';

@Component({
  selector: 'app-estabelecimento-crud',
  templateUrl: './estabelecimento-crud.component.html',
  styleUrls: ['./estabelecimento-crud.component.scss']
})
export class EstabelecimentoCrudComponent implements OnInit {

  constructor(private router: Router,
    private headerService: HeaderService) {
      headerService.headerData = {
        title: 'Cadastro de Produto',
        icon: 'storefront',
        routeUrl: '/products'
      }
    }
  ngOnInit(): void {
  }
  navigateToEstabelecimentoCreate(): void {
    this.router.navigate(['/estabelecimento/create'])
  }

}
