import { Injectable } from '@angular/core';
import { Observable, shareReplay, take, map } from 'rxjs';
import { Comment } from 'src/app/Models/Comment';
import { ApiCommentsService } from './_api.comments.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments$: Observable<Comment[]>;

  constructor(private apiService: ApiCommentsService) {
    this.comments$ = this.getCommentsFromApi().pipe(take(1),shareReplay(),map(items => items.comments));
  }

  getCommentsFromApi(){
    return this.apiService.getComments();
  }
}
