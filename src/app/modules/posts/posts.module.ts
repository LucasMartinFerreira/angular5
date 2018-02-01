import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/**Componentes**/
import { PostCreateAndEditComponent } from './post-create-and-edit/post-create-and-edit.component';

/**Services**/

import { PostService } from './../../services/posts/post.service';
import { PostCommentsComponent } from './post-comments/post-comments.component'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PostCreateAndEditComponent,
    PostCommentsComponent
  ],
  providers :[
    PostService
  ]
})
export class PostsModule { }
