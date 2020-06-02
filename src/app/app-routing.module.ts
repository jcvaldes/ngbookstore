import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { ListBooksComponent } from './components/admin/list-books/list-books.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/user/login/login.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'book/:id', component: DetailsBookComponent},
  {path: 'book/:id', component: DetailsBookComponent},
  {path: 'admin/list-books', component: ListBooksComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/profile', component: ProfileComponent},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
