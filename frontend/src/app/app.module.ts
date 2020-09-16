import { EstabelecimentoCrudModule } from './views/estabelecimento-crud/estabelecimento-crud.module';
import { EstabelecimentoModule } from './components/pages/estabelecimento/estabelecimento.module';
import { HomeModule } from './views/home/home.module';
import { NavModule } from './components/template/nav/nav.module';
import { HeaderModule } from './components/template/header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterModule } from './components/template/footer/footer.module';
import { ViewEstabelecimentoModule } from './components/pages/view-estabelecimento/view-estabelecimento.module';
import { LoginModule } from './views/login/login.module';
@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    FooterModule,
    NavModule,
    HomeModule,
    ViewEstabelecimentoModule,
    EstabelecimentoModule,
    EstabelecimentoCrudModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
