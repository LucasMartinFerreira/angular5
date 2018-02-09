import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


/**Componentes**/
import { PostCreateAndEditComponent } from './post-create-and-edit/post-create-and-edit.component';

/**Services**/

import { PostService } from './../../services/posts/post.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PostCreateAndEditComponent
  ],
  providers :[
    PostService
  ]
})
export class PostsModule { }
