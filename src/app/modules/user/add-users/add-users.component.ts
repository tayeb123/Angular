import {Component, OnInit} from '@angular/core';
import {User} from '../../../core/models/user';
import {UserService} from '../../../core/services/user/user.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  user: User = new User('', '', '', '', '', '');
  id: string;

  constructor(private userService: UserService, private location: Location, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      if (this.id) {
        this.userService.findById(this.id).subscribe(user => this.user = user);
      }
    });
  }

  submit() {
    if (this.id) {
      delete this.user.password;
      this.userService.editById(this.id, this.user).subscribe(user => this.router.navigate(['/users']));


    } else {
      console.log(this.user);
      this.userService.addUser(this.user).subscribe(user => this.router.navigate(['/users']));
    }
  }

  goBack() {
    this.location.back();
    console.log('Go back');
  }

}
