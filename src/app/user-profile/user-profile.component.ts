import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { Observable } from 'rxjs';
import { UserProfile } from '../Models/User-Profile';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile$:Observable<UserProfile>;

  constructor(private usersService: UsersService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('userId');
    this.userProfile$ = this.usersService?.getUserById(Number(id))

  }
}
