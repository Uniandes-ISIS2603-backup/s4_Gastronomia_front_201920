import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import { AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component'
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { AdministradorCreateComponent } from '../administrador/administrador-create/administrador-create.component';

const routes: Routes = [
    

     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    
    
    /*{
        path: 'home',
        component: AuthLoginComponent
    },
    */
    {
        path: '**',
        redirectTo: 'home',
<<<<<<< HEAD
    },
    {
        path:'restaurantes',
        children:[
=======
    } , 

    {
        path: 'administrador',
        children: [
           
        {        
                path: 'list',
                component: AdministradorListComponent
        } ,
        {
                path: 'create',
                component: AdministradorCreateComponent
        },
        {
            path: 'login',
            component: AuthLoginComponent
        }
       
>>>>>>> b5e6107b8ec247944a66c9a5666072af6a62f940
            
        ]
    }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
