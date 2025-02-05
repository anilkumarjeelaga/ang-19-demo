import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';

export const routes: Routes = [
    {
        path:'',  redirectTo:'/layout', pathMatch:'full'
    },
    {
        path:'login', loadComponent:() => import('./login/login.component').then((c) => c.LoginComponent)
    },
    {
        path:"layout", component:LayoutComponent
    },
    {
        path:'**', component:PagenotFoundComponent
    }
];
