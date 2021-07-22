import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.css']
})
export class PageErrorComponent implements OnInit {

  constructor(private route:ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    setTimeout(()=> this.router.navigate(['/']),4000)
  }

}
