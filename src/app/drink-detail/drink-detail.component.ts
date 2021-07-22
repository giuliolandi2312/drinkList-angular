import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.css']
})
export class DrinkDetailComponent implements OnInit {
  drink:any;
  ingredients:any[];
  constructor(private api: ApiService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('idDrink'));
    this.api.getDrink(productIdFromRoute).subscribe(
      (response:any) => {
        if(!response || !response.drinks){
          setTimeout(()=> this.router.navigate(['/']),2000)
      } else { this.drink = response.drinks[0];
            
      
        const {strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,
          strIngredient12,strIngredient13,strIngredient14,strIngredient15} = this.drink;
  
        const newArray = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,
          strIngredient12,strIngredient13,strIngredient14,strIngredient15];
  
        this.ingredients = newArray.filter(value => value !== null);};



 

      

      });
  }

}
