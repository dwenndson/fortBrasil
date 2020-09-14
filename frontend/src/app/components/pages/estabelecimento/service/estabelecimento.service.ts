import { Estabelecimento } from './../models/estabelecimento.model';
import { environment } from './../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  private url = `${environment.urlBase}estabelecimento`;
  constructor(private http: HttpClient) { }

  findAll(): Observable<Estabelecimento[]>{
    return this.http.get(`${this.url}/all`)
    .pipe(
      map((item: Estabelecimento[]) => item),
      catchError((err: any) => this.catchError(err, null))
    );
  }

  save(estabelecimento: Estabelecimento): Observable<Estabelecimento> {
    return
  }

  private catchError<T>(err: any, ret: T = null): Observable<T> {
    console.log(err);
    return of(ret);
  }
}
