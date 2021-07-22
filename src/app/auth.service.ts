import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated:boolean = false;


  constructor( private router: Router, private route: ActivatedRoute, private api: ApiService) { }
    login(user) {
      console.log(user)
      localStorage.setItem('token','2312')
      this.isAuthenticated =  true;
      this.router.navigate(['/admin'])
    }
    logout() {
      localStorage.removeItem('token')
      this.isAuthenticated = false;
      this.router.navigate(['/login']);
      
    }

    register(user) {
      console.log(user);
      this.api.lastId += 1;
      user.id = this.api.lastId;
      //user.email = user.username;
      this.api.users.push(user)
      this.router.navigate(['/login'])
    }
}
