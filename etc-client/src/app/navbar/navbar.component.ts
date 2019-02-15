import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from '../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;

  constructor(private route: Router, private token: TokenService) {
    this.username = token.getUserName();
  }

  logout() {
    this.token.eraseToken();
    this.route.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
