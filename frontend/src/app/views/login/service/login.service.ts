import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioAuthenticado: boolean = false
  constructor() { }
}
