import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/interfaces/posts/posts';
import { Users } from 'src/app/interfaces/users/users';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService implements OnInit {
  constructor(private _http: HttpClient, private usersService: UsersService) { }

  private static _URL: string = 'https://jsonplaceholder.typicode.com/posts';

  ngOnInit(): void { }

  getPosts(): Observable<Posts[]> {
    return this._http.get<Posts[]>(PostsService._URL);
  }

  getPostsByUserId(userId: string): Observable<Posts[]> {
    let params = new HttpParams().set('userId', userId);
    return this._http.get<Posts[]>(PostsService._URL, { params });
  }

  getUserName(userId: number): string {
    return this.usersService.getUserName(userId);
  }

  getUsers(): Users[] {
    return this.usersService.getUsers();
  }

  createPost(post: Posts): Observable<Posts> {
    return this._http.post<Posts>(PostsService._URL, post);
  }

  updatePost(post: Posts): Observable<Posts> {
    return this._http.put<Posts>(`${PostsService._URL}/${post.id}`, post);
  }

  deletePost(id: number): Observable<Posts> {
    return this._http.delete<Posts>(`${PostsService._URL}/${id}`);
  }
}
