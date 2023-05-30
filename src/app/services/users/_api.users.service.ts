import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersApi } from 'src/app/Models/Users';
import { UserProfile } from 'src/app/Models/User-Profile';


@Injectable({
  providedIn: 'root'
})

export class ApiUsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<UsersApi>('https://dummyjson.com/users?limit=100');
  }

  getUserProfile(id:number){
    return this.http.get<UserProfile>(`https://dummyjson.com/users/${id}`);
  }

}
