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
import {ResenaListComponent} from '../resena/resena-list/resena-list.component';
import {ResenaCreateComponent} from '../resena/resena-create/resena-create.component';


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
            component: TarjetaCreateComponent,
            data: {
                permissions: {
                    only: ['CLIENT']
                }
            }
        },
        {
            path: ':id',
            component: TarjetaDetailComponent,
            outlet: 'detail',
            data: {
                permissions: {
                    only: ['CLIENT']
                }
            }
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
                path: 'sign-up',
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
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
            },
            {
                path: 'add',
                component: ClienteCreateComponent,
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':id',
                component: ClienteDetailComponent,
                runGuardsAndResolvers: 'always',
                data: {
                    permissions: {
                        only: ['ADMIN', 'CLIENT']
                    }
                }
            } 
        ]
    },
    {
        path: 'reservas',
        children: [
            {
                path: 'list',
                component: ReservaListComponent,
                data: {
                    permissions: {
                        only: ['ADMIN', 'CLIENT', 'RESTAURANT']
                    }
                }
            },
            {
                path: 'add',
                component: ReservaCreateComponent,
                data: {
                    permissions: {
                        only: ['CLIENT']
                    }
                }
            },
            {
                path: ':id',
                component: ReservaDetailComponent,
                runGuardsAndResolvers: 'always',
                data: {
                    permissions: {
                        only: ['ADMIN', 'CLIENT']
                    }
                }
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
        path:'restaurantes',
        children:[
            {
                path:'list',
                component: RestauranteListComponent,
                data: {
                    permissions: {
                        only: ['ADMIN', 'CLIENT', 'GUEST']
                    }
                }
            },
            {
                path: 'create',
                component: RestauranteCreateComponent,
                data: {
                    permissions: {
                        only: ['RESTAURANT']
                    }
                }
            },
            {
                path: ':id',
                component: RestauranteDetailComponent,
                runGuardsAndResolvers: 'always',
                data: {
                    permissions: {
                        only: ['ADMIN', 'CLIENT', 'GUEST']
                    }
                }
            }
        ]
    } , 

    {
        path: 'administrador',
        children: [
           
        {        
                path: 'list',
                component: AdministradorListComponent,
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
        } ,
        {
                path: 'create',
                component: AdministradorCreateComponent,
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
        },  
        ]
    },

    {
        path: 'facturas',
        children: [
            {        
                path: 'list',
                component: FacturaListComponent,
                data: {
                    permissions: {
                        only: ['ADMIN', 'CLIENT', 'RESTAURANT']
                    }
                }
            },
            {
                path: 'create',
                component: FacturaCreateComponent,
                data: {
                    permissions: {
                        only: ['RESTAURANT']
                    }
                }
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
                path: 'create',
                component: FoodblogCreateComponent
            },
            {
                path:':id',
                component: FoodblogDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'resena',
        children:[
            {
                path: 'list',
                component : ResenaListComponent
            },
            {
                path: 'create',
                component: ResenaCreateComponent
            }
        {        
            path: 'list',
            component: FoodblogListComponent,
            data: {
                permissions: {
                    only: ['ADMIN', 'CLIENT', 'RESTAURANT', 'GUEST']
                }
            }

        },
        {
            path:':id',
            component: FoodblogDetailComponent,
            data: {
                permissions: {
                    only: ['ADMIN', 'CLIENT', 'RESTAURANT', 'GUEST']
                }
            }

        },
        {
            path: 'create',
            component: FoodblogCreateComponent,
            data: {
                permissions: {
                    only: ['CLIENT']
                }
            }
        }
        ]
    },
    {
        path: 'tipoComida',
        children: [
           
        {        
                path: 'list',
                component: TipoComidaListComponent,
                data: {
                    permissions: {
                        only: ['ADMIN', 'CLIENT', 'RESTAURANT']
                    }
                }
        },
        {
            path: 'create',
            component: TipoComidaCreateComponent,
            data: {
                permissions: {
                    only: ['ADMIN', 'CLIENT', 'RESTAURANT']
                }
            }
        }   
        ]
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    
    {
        path: '**',
        redirectTo: 'home',
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
