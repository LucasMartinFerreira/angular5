import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/**Componentes**/
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateAndEditComponent } from './post-create-and-edit/post-create-and-edit.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PostListComponent,
    PostCreateAndEditComponent
  ]
})
export class PostsModule { }
