import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {HomeComponent} from '../home/home.component';
import {User} from '../interfaces/user';
import swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  @Input() title: string;
  @Input() id_form: string;
  @Input() id_user: number;
  @Input() userDetails: User;

  constructor(private usersService: UsersService, private home: HomeComponent) {
  }

  edit() {
    $('#btnEdit').addClass('loading');
    this.usersService.edit(this.userDetails).subscribe((data) => {

      swal.fire({
        title: 'Edited',
        text: 'The changes have been saved',
        type: 'success',
        showConfirmButton: false,
        timer: 1500
      });
      this.home.fillTable();
      $('#edit-modal').modal('hide');
      $('#btnEdit').removeClass('loading');
    }, (error) => {
      console.log(error);
    });

  }

  cancel() {
    this.userDetails = {
      firstname: null,
      lastname: null,
      username: null,
      email: null,
      password: null,
      role_id: 1
    };
    $('#' + this.id_form).removeClass('loading');
  }

  ngOnInit() {
  }

}
