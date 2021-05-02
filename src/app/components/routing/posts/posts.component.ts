import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/interfaces/posts/posts';
import { Users } from 'src/app/interfaces/users/users';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Posts[];
  users: Users[];

  constructor(
    private _postService: PostsService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.users = this._postService.getUsers();
    this._postService.getPosts().subscribe(
      (posts) => (this.posts = posts),
      (err) => console.log('got some error: ', err),
      () => console.log('callback is complete')
    );
  }

  handleCreatePost(): void {
    let userId: string;
    this._route.queryParams.subscribe((param) => (userId = param.userId));
    console.log('before', this.posts[0]);

    if (+userId >= 1) {
      let createPost: Posts = this.posts[0];
      console.log(createPost);
      createPost.id = null;
      createPost.userId = +userId;
      createPost.title = 'this is new title';
      createPost.body = 'this is body';
      this._postService.createPost(createPost).subscribe(
        (post) => (this.posts[0] = post),
        (err) => console.log('something went wrong', err)
      );
    }
    console.log('after', this.posts[0]);
  }

  handleUpdatePost(): void {
    console.log('Implimentation not provided');
  }

  handleDeletePost(): void {
    console.log('Implimentation not provided');
  }
}
