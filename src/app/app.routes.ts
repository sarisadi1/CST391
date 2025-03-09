import { Routes } from '@angular/router';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { ResourceFormComponent } from './resource-form/resource-form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: 'list', component: ResourceListComponent },
  { path: 'resource/:id', component: ResourceDetailComponent },
  { path: 'new', component: ResourceFormComponent },
  { path: 'edit/:id', component: ResourceFormComponent },
  { path: 'login', component: LoginComponent }, // Route for LoginComponent
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];