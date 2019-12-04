import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions'
import 'rxjs/add/operator/catch';
import { ClienteService } from '../cliente/cliente.service';

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor (
        private router: Router,
        private roleService: NgxRolesService,
        private permissionsService: NgxPermissionsService,
        private clienteService: ClienteService,
    ) { }

    start (): void {
        localStorage.removeItem('role');
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['edit_author_permission', 'delete_author_permission', 'leave_review']);
        const role = localStorage.getItem('role');
        if (!role) {
            this.setGuestRole();
        } else if (role === 'ADMIN') {
            this.setAdministratorRole();
        } else if (role === 'RESTAURANT') {
            this.setRestaurantRole();
        } else {
            this.setClientRole();
        }
    }

    setGuestRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    setAdministratorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['edit_author_permission', 'delete_author_permission']);
        localStorage.setItem('role', 'ADMIN');
    }

    setRestaurantRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('RESTAURANT', ['edit_author_permission', 'delete_author_permission']);
        localStorage.setItem('role', 'RESTAURANT');
    }

    setClientRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('CLIENT', ['leave_review']);
        localStorage.setItem('role', 'CLIENT');
    }

    printRole (): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login (role, username) {
        if (role === 'Administrator') {
            this.setAdministratorRole();
        } else if (role === 'Restaurant administrator') {
            this.setRestaurantRole();
        } else {
            this.setClientRole();
            this.clienteService.getClienteDetailByUsername(username).subscribe(clienteDetail => {
                localStorage.setItem('userId', clienteDetail.id.toString());
            });
            console.log(localStorage.getItem('userId'));  
        }
        this.router.navigateByUrl('/');
    }

    /**
     * Logs the user out
     */
    logout (): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
        this.router.navigateByUrl('/');
    }
}
