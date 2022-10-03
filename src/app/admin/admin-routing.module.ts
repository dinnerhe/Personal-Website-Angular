import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import { FriendCreateComponent } from "./friend-create/friend-create.component";

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path:'signup', component: SignupComponent, canActivate: [AuthGuard]},
  {path:'friendcreate', component: FriendCreateComponent, canActivate: [AuthGuard]}

]

@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)

export class AdminRoutingModule{

}
