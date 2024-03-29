import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-non-alcoholic',
  templateUrl: './non-alcoholic.component.html',
  styleUrls: ['./non-alcoholic.component.css']
})
export class NonAlcoholicComponent implements OnInit {

  nonalcoholic:any = [ ];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getNonAlcoholic().subscribe((response:any) => this.nonalcoholic = response.drinks);
  }

}
