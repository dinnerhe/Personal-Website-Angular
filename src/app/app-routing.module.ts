import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent} from './component/about-me/about-me.component';
import { MainPageComponent} from "./component/main-page/main-page.component";
import { MessageBoardComponent} from "./component/message-board/message-board.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'message-board', component: MessageBoardComponent},
  {path: 'admin', loadChildren: ()=>import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
