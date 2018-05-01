import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatereportComponent } from './createreport/createreport.component';
import { AuthGuard } from './_guards/auth.guard';
import { EditreportComponent } from './editreport/editreport.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'createreport', component: CreatereportComponent},
            { path: 'editreport', component: EditreportComponent},
            { path: 'editprofile', component: EditprofileComponent},
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
