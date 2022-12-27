import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./_guards/auth.guard";
import {NotFoundComponent} from "./errors/not-found/not-found.component";
import {ServerErrorComponent} from "./errors/server-error/server-error.component";
import {EnterprisesListComponent} from "./_components/enterprises-list/enterprises-list.component";
import {RegisterComponent} from "./_components/register/register.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'enterprises-list', component: EnterprisesListComponent, canActivate: [AuthGuard]},
  {path: 'app-register', component: RegisterComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
