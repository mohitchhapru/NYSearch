import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UsersService } from './users.service';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';

// import { InfiniteScrollModule } from "ngx-infinite-scroll";
// import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    DashboardComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // InfiniteScrollModule,
    RouterModule.forRoot([      
      {
        path: '',
        component: UsersComponent
      },
      {
          path: 'nysearch',
          component: DashboardComponent
      }
    ])
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);