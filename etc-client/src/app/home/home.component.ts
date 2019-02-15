import { Component, OnInit } from '@angular/core';
declare var $: any;
import {UsersService} from '../services/users.service';
import {User} from '../interfaces/user';
import {Role} from '../interfaces/roles';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[];
  roles: Role[];
  userDetails: User = {
    id: null,
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    role_id: 1
  };
  id_user: number;

  constructor(private usersService: UsersService) {
    this.fillTable();
  }

  fillTable() {
    const request = this.usersService.get();

    request.roles.subscribe((roles: Role[]) => {
      this.roles = roles;
    });

    request.users.subscribe((data: User[]) => {
      data.forEach((user) => {
        const role_id = user.role_id;

        this.roles.forEach((role) => {
          if (role.id === role_id) {
            user.desc = role.desc;
          }
        });

      });
      this.users = data;
    });
  }

  getUserData(id: number) {
    $('#editUser').addClass('loading');

    this.usersService.getUser(id).subscribe((data: User) => {
      this.userDetails = data;
    });

    $('#editUser').removeClass('loading');
  }

  modalNew() {
    $('#new-modal').modal('setting', 'closable', false).modal(
      'show');
  }

  modalEdit(id: number) {
    this.getUserData(id);
    $('#edit-modal').modal('setting', 'closable', false).modal(
      'show');
  }

  modalDelete(id: number) {
    this.id_user = id;
    $('#delete-modal').modal('setting', 'closable', false).modal(
      'show');
  }


  ngOnInit() {

  }
}
