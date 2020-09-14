import { HomeModule } from './views/home/home.module';
import { EstabelecimentoModule } from './components/estabelecimento/estabelecimento.module';
import { NavModule } from './components/template/nav/nav.module';
import { HeaderModule } from './components/template/header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterModule } from './components/template/footer/footer.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    FooterModule,
    NavModule,
    EstabelecimentoModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
