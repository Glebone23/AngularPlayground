import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { SearchComponent } from './components/search.component';
import { UserDetailsComponent } from './components/user.details.component';
import { AuthCheckDirective } from './directives/auth.check.directive';
import { GetService } from './services/get.service';

import { routing } from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    UserDetailsComponent,
    AuthCheckDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [GetService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
