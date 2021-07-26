import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectBar';


  constructor(public authservice: AuthService, public router: Router, public route: ActivatedRoute) {}

  disabled() {
    this.router.navigate(['admin'])
  }
}
