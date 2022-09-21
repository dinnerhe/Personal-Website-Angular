import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent} from './component/about-me/about-me.component';
import { MainPageComponent} from "./component/main-page/main-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'about-me', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
