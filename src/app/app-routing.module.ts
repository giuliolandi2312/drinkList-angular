import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlcoholicComponent } from './alcoholic/alcoholic.component';
import { NonAlcoholicComponent } from './non-alcoholic/non-alcoholic.component';
import { OrdinaryDrinkComponent } from './ordinary-drink/ordinary-drink.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { AdminComponent } from './admin/admin.component';
import { MyguardGuard } from './myguard.guard';



const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'alcoholic', component: AlcoholicComponent},
  {path:'non_alcoholic', component: NonAlcoholicComponent},
  {path:'ordinary_drink', component: OrdinaryDrinkComponent},
  {path:'cocktail', component: CocktailComponent},
  {path:'alcoholic/:idDrink', component: DrinkDetailComponent},
  {path:'non_alcoholic/:idDrink', component: DrinkDetailComponent},
  {path:'ordinarydrink/:idDrink', component: DrinkDetailComponent},
  {path:'cocktail/:idDrink', component: DrinkDetailComponent},
  {path:'login', component: LoginComponent},
  {path:'registazione', component: RegistrazioneComponent},
  {path:'admin', component: AdminComponent, canActivate:[MyguardGuard]},
  {path:'**', component: PageErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
