import { Component } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { Post } from '../Models/Posts';
import { User } from '../Models/Users';
import { Comment } from '../Models/Comment';
import { CommentsService } from '../services/comments/comments.service';
import { PostsService } from '../services/posts/posts.service';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-posts-board',
  templateUrl: './posts-board.component.html',
  styleUrls: ['./posts-board.component.scss']
})
export class PostsBoardComponent {

  posts$: Observable<Post[]> = this.postsService.posts$;
  users$: Observable<User[]> = this.usersService.users$;
  comment$: Observable<Comment[]> = this.commentsService.comments$;

  combinedPosts$ = combineLatest([this.posts$, this.users$, this.comment$]).pipe(map(([posts, users, comments]) => {
      return posts.map(post => {
        const author = users.find(user => user?.id === post?.userId)
        const postComments = comments.find(comment => comment?.postId === post?.id)

        return {
          postAuthorId: author.id,
          postAuthor: `${author.firstName} ${author.lastName}`,
          authorImage: author.image,
          postTitle: post.title,
          postBody: post.body,
          postTags: post.tags,
          postReactions: post.reactions,
          commentsData: postComments
         }
    })
  }))

  constructor(private postsService: PostsService, private usersService: UsersService, private commentsService: CommentsService) { }

}
