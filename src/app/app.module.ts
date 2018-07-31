import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared';
import { CoreModule } from './core';
import { SettingsModule } from './settings';
import { StaticModule } from './static';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AuthGuard } from './_guards';
import { MainpageComponent, LoginComponent, RegisterComponent, HomeComponent } from './components/';
import { JwtInterceptor } from './_helpers';
import { AlertComponent } from './_directives';
import { AlertService, AuthenticationService, UserService } from './_services';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,

    // core & shared
    CoreModule,
    SharedModule,

    // features
    StaticModule,
    SettingsModule,

    routing
  ],
  providers: [AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
