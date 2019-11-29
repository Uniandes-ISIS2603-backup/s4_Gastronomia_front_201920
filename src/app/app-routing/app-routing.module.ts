import {NgModule, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import { AdministradorListComponent} from '../administrador/administrador-list/administrador-list.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { TarjetaDetailComponent } from '../tarjeta/tarjeta-detail/tarjeta-detail.component';
import { TarjetaListComponent } from '../tarjeta/tarjeta-list/tarjeta-list.component';
import { TarjetaCreateComponent} from '../tarjeta/tarjeta-create/tarjeta-create.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { ReservaListComponent } from '../reserva/reserva-list/reserva-list.component';
import { ReservaDetailComponent } from '../reserva/reserva-detail/reserva-detail.component';
import { ReservaCreateComponent } from '../reserva/reserva-create/reserva-create.component';
import { AdministradorCreateComponent } from '../administrador/administrador-create/administrador-create.component';
import { FacturaListComponent} from '../factura/factura-list/factura-list.component';
import { FacturaCreateComponent } from '../factura/factura-create/factura-create.component';
import { TipoComidaListComponent} from '../tipo-comida/tipo-comida-list/tipo-comida-list.component';
import { TipoComidaCreateComponent } from '../tipo-comida/tipo-comida-create/tipo-comida-create.component';
import { RestauranteListComponent } from '../Restaurante/Restaurante-List/restaurante-list.component';
import { RestauranteCreateComponent } from '../Restaurante/Restaurante-create/Restaurante-create.component';
import { RestauranteDetailComponent } from '../Restaurante/Restaurante-detail/Restaurante_detail.component';
import { FoodblogDetailComponent } from '../foodblog/foodblog-detail/foodblog-detail.component';
import { FoodblogListComponent } from '../foodblog/foodblog-list/foodblog-list.component';
import { FoodblogCreateComponent } from '../foodblog/foodblog-create/foodblog-create.component';
import { HomeComponent } from '../home/home/home.component';

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
          outlet: 'detail'
        }
        ]
      },
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
        path: 'reservas',
        children: [
            {
                path: 'list',
                component: ReservaListComponent,
            },
            {
                path: 'add',
                component: ReservaCreateComponent
            },
            {
                path: ':id',
                component: ReservaDetailComponent,
                runGuardsAndResolvers: 'always'
            } 
        ]
    },
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
    
    /*
    {
        path: 'home',
        component: HomeComponent,
    },
    */
    {
        path: '**',
        redirectTo: 'home',
    },
    {
        path:'restaurantes',
        children:[
            {
                path:'list',
                component: RestauranteListComponent
            },
            {
                path: 'create',
                component: RestauranteCreateComponent
            },
            {
                path: ':id',
                component: RestauranteDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
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
        path: 'blog',
        children: [
        {        
            path: 'list',
            component: FoodblogListComponent
        },
        {
            path:'detail',
            component: FoodblogDetailComponent

        },
        {
                path: 'create',
                component: FoodblogCreateComponent
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
