import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './components/auth/auth.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {AuthGuard} from './components/auth.guard';


const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
