import {RouterModule, Routes} from "@angular/router";
import { PostListComponent } from "./modules/posts/post-list/post-list.component";
import { UsersListComponent } from './modules/users/users-list/users-list.component';
import { BlockListElementsComponent } from './components/block-list-elements/block-list-elements.component';

const router : Routes = <Routes>[
  {path: 'blockListComponent/:name', component: BlockListElementsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'blockListComponent/posts'}
];

export const app_routing = RouterModule.forRoot(router, {useHash:true})
