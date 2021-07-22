import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { USERS } from './users';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  message: string;
  errors = false;
  users: any = []
  page = 0
  pageSize = 10
  collectionSize = 0
  myusers = [...USERS]

  closeResult = '';
@ViewChild('content', { static: false }) private content;
  

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private authservice: AuthService,private modalService: NgbModal) { }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  refreshUsers(){
    return this.api.getUsers(this.page, this.pageSize).subscribe(
      (response:any) => {
        this.users = [...this.api.users,...response.data];
        this.collectionSize = response.total;
      },
     (error : any) => {
       console.log('Errore dal component', error.message);
       this.errors = true;
       this.message = 'Ooops, qualcosa è andato storto!'
       setTimeout(()=>this.router.navigate(['/']),5000);
     });
    }
    logout() {
      this.authservice.logout();
      this.modalService.open(this.content)
    }
  
    ngOnInit(): void {
      
    this.refreshUsers();
  }
}
