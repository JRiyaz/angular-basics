import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/routing/about/about.component';
import { ContactComponent } from './components/routing/contact/contact.component';
import { HomeComponent } from './components/routing/home/home.component';
import { PostComponent } from './components/routing/post/post.component';
import { PostsComponent } from './components/routing/posts/posts.component';
import { UserComponent } from './components/routing/user/user.component';
import { UsersComponent } from './components/routing/users/users.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ConfirmationGuard } from './guards/confirmation/confirmation.guard';
import { UsersResolveGuard } from './guards/usersResolve/users-resolve.guard';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'users', component: UsersComponent, pathMatch: 'prefix',
    resolve: {
      users: UsersResolveGuard
    },
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      // { path: '', component: HomeComponent },
      // { path: 'user/:userId', component: UserComponent }
      { path: ':userId', component: UserComponent }
    ]
  },
  {
    path: 'posts', component: PostsComponent, children: [
      { path: '', component: PostComponent }
    ]
  },
  { path: 'contact', component: ContactComponent, canDeactivate: [ConfirmationGuard] },
  { path: '**', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  providers: [AuthGuard, ConfirmationGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
