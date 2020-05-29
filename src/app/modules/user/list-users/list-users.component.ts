import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user/user.service';
import {User} from '../../../core/models/user';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  dataSource;
  private users:User[];
  displayedColumns : string[]=[ 'username', 'firstName','lastName', 'email','role']
  constructor(private  userSerivce: UserService) {
  }
 /* openDialog(id): void {
    const dialogRef = this.dialog.open(AreYouSureComponent, {
      width: '250px',
      data: 'Delete item ?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id);
      }
    });
  }*/
  ngOnInit() {
    this.userSerivce.getAllUsers().subscribe((users:any) => {this.users = users, this.dataSource = new MatTableDataSource<User>(this.users)});

    //this.userSerivce.getAllUsers().subscribe((result)=>this.users=result);
  }

  loadUsers() {
    this.userSerivce.getAllUsers().subscribe(users => this.users = users);

  }

  delete(id: any) {
    this.userSerivce.delete(id).subscribe(() => this.loadUsers());
  }

}
