import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users/users.service';
import { ApiUsersService } from './services/users/_api.users.service';
import { CommentsService } from './services/comments/comments.service';
import { ApiCommentsService } from './services/comments/_api.comments.service';
import { PostsService } from './services/posts/posts.service';
import { ApiPostsService } from './services/posts/_api.posts.service';
import { PostsBoardComponent } from './posts-board/posts-board.component';
import { SinglePostComponent } from './posts-board/single-post/single-post.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { AddPostComponent } from './add-post/add-post.component';
import { NavbarComponent } from './home-page/navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostsBoardComponent,
    SinglePostComponent,
    ActiveUsersComponent,
    AddPostComponent,
    NavbarComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService,ApiUsersService,CommentsService,ApiCommentsService,PostsService,ApiPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
