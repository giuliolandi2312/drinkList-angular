import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { USERS } from './admin/users';



const httpOption = { 
  headers: new HttpHeaders({
    'app-id':'60d1bbbb3b61065eb08f3cf1'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apipath = 'https://www.thecocktaildb.com/api/json/v1/1/';
  private admin_api = 'https://dummyapi.io/data/api/'; 
  private appId = '60d1bbbb3b61065eb08f3cf1';
  users = USERS;
  lastId = 1;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  getAlcoholic(){
    return this.http.get(this.apipath + 'filter.php?a=Alcoholic').pipe(
      catchError(this.handleError)
    );
  }
  getCocktail(){
    return this.http.get(this.apipath + 'filter.php?c=Cocktail').pipe(
      catchError(this.handleError)
    );
  }
  getNonAlcoholic(){
    return this.http.get(this.apipath + 'filter.php?a=Non_Alcoholic').pipe(
      catchError(this.handleError)
    );
  }
  getOrdinaryDrink(){
    return this.http.get(this.apipath + 'filter.php?c=Ordinary_Drink').pipe(
      catchError(this.handleError)
    );
  }
  getDrink(id:any){
    return this.http.get(this.apipath + 'lookup.php?i=' +id).pipe(
      catchError(this.handleError)
    );
  }
  getUsers(page,limit){
    return this.http.get(this.admin_api + 'user?page='+ page+'&limit'+limit,httpOption).pipe(
     catchError(this.handleError)
    );
   }
  private handleError(error:any){
    if(error.status=== 0) {
      console.log('something went wrong:', error.error)
    } else {
      console.log(
        `backend returned code ${error.status},` + 
        `message was : ${error.message}`
      );
    } 
    return throwError(error);
    };
  }
