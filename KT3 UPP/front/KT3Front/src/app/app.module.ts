import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Notauthorized } from './guard/notauthorized';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ResidentComponent } from './resident/resident.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    canActivate:[Notauthorized]
  },

  {
    path:"home",
    component:HomeComponent,
    canActivate:[Notauthorized]
  },

  {
    path:"registration",
    component:RegistrationComponent,
    canActivate:[Notauthorized]
  },
  {
    path:"resident",
    component: ResidentComponent,
    canActivate:[Notauthorized]
  },
  {path: "**" , redirectTo:"registration"}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    ResidentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [Notauthorized],
  bootstrap: [AppComponent]
})
export class AppModule { }
