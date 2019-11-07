import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import {TarjetaModule} from './tarjeta/tarjeta.module';
import {AppComponent} from './app.component';   
import {AdministradorModule} from './administrador/administrador.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
<<<<<<< HEAD
import {FacturaModule} from './factura/factura.module';
import {TipoComidaModule} from './tipo-comida/tipo-comida.module';


=======
import { ClienteModule } from './cliente/cliente.module';
import { ReservaModule } from './reserva/reserva.module';
import {RestauranteModule} from './Restaurante/restaurante.module';
>>>>>>> 4fc07a46f9a1f6e156298826edadeeb8f9282252


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RestauranteModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AdministradorModule,
        FacturaModule,
        TipoComidaModule,
        AuthModule,
        TarjetaModule,
        RestauranteModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        ClienteModule,
        ReservaModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
