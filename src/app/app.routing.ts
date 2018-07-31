import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent, LoginComponent, RegisterComponent, HomeComponent } from './components';
import { SettingsComponent } from './settings';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'mainpage', component: MainpageComponent },

    { path: 'addressbook',  redirectTo: 'addressbook' },
    { path: 'settings', component: SettingsComponent, data: { title: 'Settings' }},
    //{ path: 'examples', loadChildren: 'app/examples/examples.module#ExamplesModule' },
    { path: 'examples', loadChildren: './examples/examples.module#ExamplesModule' },
    { path: 'about', redirectTo: 'about' },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    // useHash supports github.io demo page, remove in your app
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class routing {}
//export const routing = RouterModule.forRoot(appRoutes);