import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home.component';
import { SearchComponent } from './components/search.component';
import { UserDetailsComponent } from './components/user.details.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'user',
        component: UserDetailsComponent
    },
    {
        path: 'user/:id',
        component: UserDetailsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
