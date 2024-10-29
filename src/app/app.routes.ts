import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'**',component:NotfoundComponent}
];
