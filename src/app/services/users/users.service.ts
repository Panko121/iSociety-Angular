import { Injectable } from '@angular/core';
import { Observable, shareReplay, take, map } from 'rxjs';
import { User } from 'src/app/Models/Users';
import { ApiUsersService } from './_api.users.service';
import { UserProfile } from 'src/app/Models/User-Profile';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users$: Observable<User[]>;
  singleUser$: Observable<UserProfile>;

  constructor(private apiService: ApiUsersService) {
    this.users$ = this.getUsersFromApi().pipe(take(1),shareReplay(),map(items => items.users));
  }

  getUsersFromApi(){
    return this.apiService.getUsers();
  }

  getUserById(id:number){
    return this.apiService.getUserProfile(id);
  }
}

