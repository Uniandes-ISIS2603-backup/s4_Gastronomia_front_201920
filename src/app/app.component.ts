import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import {Router} from '@angular/router';

/**
 * The app component. This component is the base of s4_gastronomia-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "s4_gastronomia-Front";
        this.authService.start();
    }
   // constructor() {}
       /**
     * @ignore
     */
    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    getUserInformation(): void {

        if ( localStorage.getItem('role') === 'CLIENT')
        {
            console.log(localStorage.getItem('role'));
                
        
            this.router.navigateByUrl('/clientes/' + localStorage.getItem('userId'));}
        else
        {
        this.router.navigateByUrl('/administrador/' + localStorage.getItem('userId'));
          }


    }

    logout(): void {
        this.authService.logout()
    }

}





