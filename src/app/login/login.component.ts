import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  user:any = {
    'email':'',
    'password':''
  }

closeResult = '';
@ViewChild('content', { static: false }) private content; //per prelevare l'elemento del template che ha variabile preimpostata #CONTENT


  constructor(public authservice: AuthService, private api: ApiService, private modalService: NgbModal) { }
  
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }



  ngOnInit(): void {
  }

  checkUser(){
        let index = this.api.users.findIndex((value)=>{
          return value.email === this.user.email && value.password === this.user.password;
        })
        if(index !== -1){
          return this.api.users[index];
        } else {
          return null;
        }
    
  }

  login(user){
    if(this.checkUser()){
        this.authservice.login(this.user);
    } else {
      this.modalService.open(this.content);
    }
    // this.outservice.logIn(this.user);
  }

  
  logout(){
    this.authservice.logout();
  }

}