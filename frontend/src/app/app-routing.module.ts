import { LoginComponent } from './views/login/login.component';
import { EstabelecimentoCrudComponent } from './views/estabelecimento-crud/estabelecimento-crud.component';
import { EstabelecimentoComponent } from './components/pages/estabelecimento/estabelecimento.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "home", component: HomeComponent},
  { path: "estabelecimento", component: EstabelecimentoComponent},
  { path: "teste", component: EstabelecimentoCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
