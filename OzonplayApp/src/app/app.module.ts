import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { LiveComponent } from './live/live.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EventregisterComponent } from './eventregister/eventregister.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { UserregisterComponent } from './signup/userregister/userregister.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'live',
    component: LiveComponent
  },
  {
    path: 'scoreboard',
    component: ScoreboardComponent
  },
  {
    path: 'schedules',
    component: SchedulesComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
    children: [
      {
        path: ':type',
        component: UserregisterComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'eventregister',
    component: EventregisterComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    LiveComponent,
    ScoreboardComponent,
    SchedulesComponent,
    SignupComponent,
    LoginComponent,
    EventregisterComponent,
    UserregisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
