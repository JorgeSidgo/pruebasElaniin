import {Component, Input, OnInit} from '@angular/core';
import {User} from '../interfaces/user';
import {UsersService} from '../services/users.service';
import {HomeComponent} from '../home/home.component';
declare var $: any;
import swal from 'sweetalert2';

@Component({
  selector: 'app-new-modal',
  templateUrl: './new-modal.component.html',
  styleUrls: ['./new-modal.component.css']
})
export class NewModalComponent implements OnInit {

  @Input() fields: object[];

  @Input() title: string;

  @Input() id_form: string;

  user: User = {
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    password: null,
    role_id: 1
  };

  constructor(private usersService: UsersService, private home: HomeComponent) {

  }

  save() {
    $('#btnNew').addClass('loading');

    this.usersService.save(this.user).subscribe((data) => {

      swal.fire({
        title: 'Registered',
        text: 'The user has been registered',
        type: 'success',
        showConfirmButton: false,
        timer: 1500
      });
      this.home.fillTable();
      $('#new-modal').modal('hide');
    }, (error) => {
      console.log(error);
    });
    $('#btnNew').removeClass('loading');
    this.user = {
      firstname: null,
      lastname: null,
      username: null,
      email: null,
      password: null,
      role_id: 1
    };
  }

  cancel() {
    $('#btnNew').removeClass('loading');
  }

  ngOnInit() {

  }
}
