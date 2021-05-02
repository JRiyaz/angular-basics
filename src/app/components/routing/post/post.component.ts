import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/interfaces/posts/posts';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Posts[];

  username: string;

  constructor(private _route: ActivatedRoute, private _postsService: PostsService) { }

  ngOnInit(): void {

    this._route.queryParams.subscribe(param => {
      // const userId: number = +param.userId;
      // const userId: number = +param.get('userId');
      const userId: number = +param['userId'];
      if (userId >= 0) {
        this.username = this._postsService.getUserName(userId);
        this._postsService.getPostsByUserId(param['userId'])
          .subscribe(posts => this.posts = posts);
      }
    });
  }
}
