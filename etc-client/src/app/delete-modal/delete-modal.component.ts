import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {HomeComponent} from '../home/home.component';

declare var $: any;
import swal from 'sweetalert2';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Input() title: string;
  @Input() id_form: string;
  @Input() id_user: number;

  constructor(private usersService: UsersService, private home: HomeComponent) {
  }

  delete() {
    $('#btnDel').addClass('loading');
    this.usersService.delete(this.id_user).subscribe((data) => {
      if (data === 1) {
        swal.fire({
          title: 'Deleted',
          text: 'The user has been deleted',
          type: 'success',
          showConfirmButton: false,
          timer: 1500
        });
        this.home.fillTable();
      } else if (data === 3) {
        swal.fire({
          title: 'Warning',
          text: 'This user can\'t be deleted because is logged in right now',
          type: 'warning'
        });
      }
      $('#btnDel').removeClass('loading');
      $('#delete-modal').modal('hide');
    }, (error) => {
      console.log(error);
    });
  }

  cancel() {

  }

  ngOnInit() {
  }

}
