import { Component, OnInit, ViewEncapsulation, ViewChild  } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css'],

})
export class RegistrazioneComponent implements OnInit {

  user:any = {
    'email':'',
    'password':'',
    'firstName:': '',
    'lastName': ''
  }

  closeResult = '';
@ViewChild('content', { static: false }) private content;


  constructor(private authservice: AuthService, private api: ApiService,private modalService: NgbModal) { }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }


  iscriviti() {
    if(this.user.email == '' || this.user.password == '') {
      this.modalService.open(this.content);
    } else {
      this.authservice.register(this.user);
      console.log(this.user)
    }
  }

  ngOnInit(): void {
  }

}
