import { Injectable } from '@angular/core';
import { Observable, shareReplay, take , map } from 'rxjs';
import { Post } from 'src/app/Models/Posts';
import { ApiPostsService } from './_api.posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts$: Observable<Post[]>;

  constructor(private apiService: ApiPostsService) {
    this.posts$ = this.getPostsFromApi().pipe(take(1),shareReplay(),map(items => items.posts));
  }

  getPostsFromApi(){
    return this.apiService.getPosts();
  }
}
