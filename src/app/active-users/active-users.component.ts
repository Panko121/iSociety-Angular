import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/Users';
import { UsersService } from '../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent {

  users$: Observable<User[]> = this.usersService.users$;

  constructor(private usersService: UsersService, private router: Router) { }

  checkProfile(id :number){
    console.log(id)
    this.router.navigate([`user-profile/${id}`])
  }

}
