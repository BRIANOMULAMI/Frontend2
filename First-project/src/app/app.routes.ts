import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './auth/pages/signup/signup.component';
import { AdminpanelComponent } from './auth/pages/adminpanel/adminpanel.component';
import { JudgesPanelComponent } from './auth/pages/judges-panel/judges-panel.component';

export const routes: Routes = [
    {
        path: "",
        component: DefaultLayoutComponent,
        children: [
            {
                path: "",
                component:HomeComponent
            }
        ]
    },
    {
        path: "auth",
        component: AuthLayoutComponent,
        children: [
            {
                path: "login",
                component:LoginComponent
            },
            {
                path: "signup",
                component:SignupComponent
            },
            {
                path: "adminpanel",
                component:AdminpanelComponent
            },

            {
                path: "judges-panel",
                component:JudgesPanelComponent
            }

        ]
    }
];
