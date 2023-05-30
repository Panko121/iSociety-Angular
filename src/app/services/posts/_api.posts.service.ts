import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentsApi } from 'src/app/Models/Comment';
import { PostsApi } from 'src/app/Models/Posts';
import { UsersApi } from 'src/app/Models/Users';


@Injectable({
  providedIn: 'root'
})

export class ApiPostsService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<PostsApi>('https://dummyjson.com/posts');
  }

}
