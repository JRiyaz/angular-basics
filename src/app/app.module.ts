import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { StringInterpolationComponent } from './components/bindings/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './components/bindings/property-binding/property-binding.component';
import { EventBindingComponent } from './components/bindings/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/bindings/two-way-binding/two-way-binding.component';
import { AttributeBindingComponent } from './components/bindings/attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './components/bindings/class-binding/class-binding.component';
import { StyleBindingComponent } from './components/bindings/style-binding/style-binding.component';
import { ProjectedContentComponent } from './components/content-and-child/projected-content/projected-content.component';
import { ChildContentComponent } from './components/content-and-child/child-content/child-content.component';
import { HomeComponent } from './components/routing/home/home.component';
import { AboutComponent } from './components/routing/about/about.component';
import { NavBarComponent } from './components/routing/nav-bar/nav-bar.component';
import { UsersComponent } from './components/routing/users/users.component';
import { FooterComponent } from './components/routing/footer/footer.component';
import { UserComponent } from './components/routing/user/user.component';
import { UsersService } from './services/users/users.service';
import { UsersResolveGuard } from './guards/usersResolve/users-resolve.guard';
import { ContactComponent } from './components/routing/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    ProjectedContentComponent,
    ChildContentComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    UsersComponent,
    FooterComponent,
    UserComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService, UsersResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
