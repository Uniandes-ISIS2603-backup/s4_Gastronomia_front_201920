import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
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
        path: 'home',
        component: AuthLoginComponent
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
