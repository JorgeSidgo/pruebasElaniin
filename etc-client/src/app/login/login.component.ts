import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {TokenService} from '../services/token.service';
import {User} from '../interfaces/user';
import {Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  pass: string;

  constructor(private usersService: UsersService, private token: TokenService, private router: Router) { }

  login() {
    $('#btnLogin').addClass('loading');
    this.usersService.login(this.email, this.pass).subscribe((data: User) => {
      if (data.id == null) {
        $('#btnLogin').addClass('red');
        $('#btnLogin').attr('disabled', 'disabled');
        $('#btnLogin').html('Wrong Data');
        setTimeout(() => {
          $('#btnLogin').removeClass('red');
          $('#btnLogin').removeAttr('disabled');
          $('#btnLogin').html('Login');
        }, 1500);
      } else {
        this.token.setToken(data.etc_token, data.username);
        this.router.navigateByUrl('/home');
      }
      $('#btnLogin').removeClass('loading');
    });
  }

  ngOnInit() {
  }

}
