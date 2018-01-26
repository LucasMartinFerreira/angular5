import {RouterModule, Routes} from "@angular/router";
import {PostListComponent} from "./posts/post-list/post-list.component"

const router : Routes = <Routes>[
  {path: 'posts', component: PostListComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'posts'}
];

export const app_routing = RouterModule.forRoot(router, {useHash:true})
