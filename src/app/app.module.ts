import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PostsModule } from './modules/posts/posts.module';
import { UserModule } from './modules/users/user.module';
import { LoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Router **/
import { app_routing } from './router';

/**Componentes**/
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BlockListElementsComponent } from './components/block-list-elements/block-list-elements.component';
import { PostListComponent } from './modules/posts/post-list/post-list.component';
import { UsersListComponent } from './modules/users/users-list/users-list.component';
import { PostCommentsComponent } from './modules/posts/post-comments/post-comments.component'


/**Servicios **/

import { PostModel } from './models/posts/post.model'
import { User } from './models/users/user'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    PostListComponent,
    UsersListComponent,
    BlockListElementsComponent,
    PostCommentsComponent
  ],
  imports: [
    PostsModule,
    UserModule,
    BrowserModule,
    app_routing,
    HttpModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    LoadingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-bottom-full-width',
      preventDuplicates: true,
    })
  ],
  providers: [
    PostModel,
    User
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
