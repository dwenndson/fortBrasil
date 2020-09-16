import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/service/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hide = true;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  navigatorRegister(): void {
    this.router.navigate(['/register'])
  }


}
