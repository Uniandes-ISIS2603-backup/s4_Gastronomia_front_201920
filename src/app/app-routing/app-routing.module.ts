import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import { AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component'
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
<<<<<<< HEAD
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { AdministradorCreateComponent } from '../administrador/administrador-create/administrador-create.component';

const routes: Routes = [
    

    {
        path: 'clientes',
        children: [
            {
                path: 'list',
                component: ClienteListComponent,
            },
            {
                path: 'add',
                component: ClienteCreateComponent
            },
            {
                path: ':id',
                component: ClienteDetailComponent,
                runGuardsAndResolvers: 'always'
            } 
        ]
    },
    {
=======
import { TarjetaDetailComponent } from '../tarjeta/tarjeta-detail/tarjeta-detail.component';
import { TarjetaListComponent } from '../tarjeta/tarjeta-list/tarjeta-list.component';
import { TarjetaCreateComponent} from '../tarjeta/tarjeta-create/tarjeta-create.component';
const routes: Routes = [
    {
        path: 'tarjetas',
        children: [{
          path: 'list',
          component: TarjetaListComponent
        },
        {
        path: 'add',
        component: TarjetaCreateComponent
        },
        {
          path: ':id',
          component: TarjetaDetailComponent,
        }
        ]
      },
     {
>>>>>>> je.canizarez
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
    },
    {
        path:'restaurantes',
        children:[]
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
