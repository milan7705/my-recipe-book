import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
  { path:'', redirectTo: '/login', pathMatch: 'full'},
  { path:'login', component: LoginComponent},
  { path:'create', component: RecipeCreateComponent, canActivate: [AuthGuard]},
  { path:'edit/:recipeId', component: RecipeCreateComponent, canActivate: [AuthGuard]},
  { path:'recipe-list', component: RecipeListComponent, canActivate: [AuthGuard]},
  { path:'signup', component: SignupComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
