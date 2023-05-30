import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentsApi } from 'src/app/Models/Comment';


@Injectable({
  providedIn: 'root'
})

export class ApiCommentsService {

  constructor(private http: HttpClient) { }

  getComments(){
    return this.http.get<CommentsApi>('https://dummyjson.com/comments');
  }
}
