import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import { AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { AdministradorCreateComponent } from '../administrador/administrador-create/administrador-create.component';
import { FacturaListComponent} from '../factura/factura-list/factura-list.component';
import { FacturaCreateComponent } from '../factura/factura-create/factura-create.component';
import { TipoComidaListComponent} from '../tipo-comida/tipo-comida-list/tipo-comida-list.component';
import { TipoComidaCreateComponent } from '../tipo-comida/tipo-comida-create/tipo-comida-create.component';

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
    },

    {
        path: 'facturas',
        children: [
           
        {        
                path: 'list',
                component: FacturaListComponent
        },
        {
            path: 'create',
            component: FacturaCreateComponent
        }
       
        ]
    },
    {
        path: 'tipoComida',
        children: [
           
        {        
                path: 'list',
                component: TipoComidaListComponent
        },
        {
            path: 'create',
            component: TipoComidaCreateComponent
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
