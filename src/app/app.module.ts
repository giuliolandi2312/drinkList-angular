import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlcoholicComponent } from './alcoholic/alcoholic.component';
import { NonAlcoholicComponent } from './non-alcoholic/non-alcoholic.component';
import { OrdinaryDrinkComponent } from './ordinary-drink/ordinary-drink.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AlcoholicComponent,
    NonAlcoholicComponent,
    OrdinaryDrinkComponent,
    CocktailComponent,
    HomepageComponent,
    DrinkDetailComponent,
    PageErrorComponent,
    RegistrazioneComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
<!--<form class="example-form">
    <mat-form-field class="example-full-width">
      <mat-label>Email</mat-label>
      <input matInput placeholder="email">
    </mat-form-field>
  
    <mat-form-field class="example-full-width">
      <mat-label>Password</mat-label>
      <input matInput placeholder="Inserisci password">
    </mat-form-field>
  </form>

  <button mat-fab color="accent" type="button" >Entra!!!</button>-->


<!-------------------------TIPOGRAPHY-->


  <!--<div class=mat-display-4>This is display 4</div>
  <div class=mat-display-4>This is display 3</div>
  <div class=mat-display-4>This is display 2</div>
  <div class=mat-display-4>This is display 1</div>

  <div class="mat-headline">This is heading for h1</div>
  <div class="mat-title">This is heading for h2</div>
  <div class="mat-subheading-2">This is heading for h3</div>
  <div class="mat-subheading-1">This is heading for h4</div>

  <div class="mat-body-1">This is body text</div>
  <div class="mat-body-2">This is bold body text</div>
  <div class="mat-caption">This is caption text</div>

  <div class="mat-typography">
      <h1>This is a heading for h1</h1>
      <h2>This is a heading for h2</h2>
      <h3>This is a heading for h3</h3>
      <h4>This is a heading for h4</h4>
  </div>-->


  <!---------------------BUTTON-->


  <!--<div>
      <button mat-button>Click me!</button>
      <button mat-raised-button>Click me!</button>
      <button mat-flat-button>Click me!</button>
      <button mat-stroked-button>Click me!</button>
  </div>

  <div>
      <button mat-icon-button>Icon</button>
      <button mat-fab>fab</button>
      <button mat-mini-fab>Mini-fab</button>
  </div>

  <div>
      <button color="primary" mat-button>Primary</button>
      <button color="accent" mat-button>Accent</button>
      <button color="warn" disableRipple mat-button>Warn</button>
  </div>

  <div>
    <button color="primary" mat-raised-button>Primary</button>
    <button color="accent" mat-raised-button>Accent</button>
    <button color="warn" mat-raised-button>Warn</button>
</div>-->



<!--------------------------TOGGLE BUTTON-->



<!--<div>
    <mat-button-toggle #toggleBtn checked disableRipple>Toggle</mat-button-toggle>
    {{toggleBtn.checked}}
</div>

<div>
    <mat-button-toggle-group #toggleGroup="matButtonToggleGroup" multiple>
        <mat-button-toggle value="angular">Angular</mat-button-toggle>
        <mat-button-toggle value="react">React</mat-button-toggle>
        <mat-button-toggle value="vue">Vue</mat-button-toggle>
    </mat-button-toggle-group>
    {{toggleGroup.value}}
</div>-->


<!---------------------------ICON-->



<!--<div>
    <mat-icon color="primary">grade</mat-icon>
</div> -->


<!-----------------------------BADGE-->



<!---<div>
    <span [matBadge]="notifications" [matBadgeHidden]="notifications === 0">Notifications</span>
</div>
<div>
    <span matBadge="5" matBadgePosition="below before">Notifications</span>
</div>
<div>
    <span matBadge="5" matBadgePosition="below after">Notifications</span>
</div>
<div>
    <span matBadge="5" matBadgePosition="above before">Notifications</span>
</div>
<div>
    <span matBadge="5" matBadgeSize="small" >Notifications</span>
</div>
<div>
    <span matBadge="5" matBadgeSize="medium">Notifications</span>
</div>
<div>
    <span matBadge="5" matBadgeSize="large">Notifications</span>
</div>
<div>
    <span matBadge="5" matBadgeColor="primary" >Notifications</span>
</div>
<div>
    <span matBadge="5" matBadgeColor="accent">Notifications</span>
</div>
<div>
    <span matBadge="5" matBadgeColor="warn" matBadgeOverLap="false">Notifications</span>
</div>-->


<!-------------------------------------SPINNER------>

<!--<mat-progress-spinner value="40"></mat-progress-spinner>-->
<!--<mat-spinner *ngIf="showSpinner" color="accent"></mat-spinner>
<button (click)="loadData()">Load data</button>-->


<!-------------------------------------TOOLBAR------>


<!--<mat-toolbar color="primary">
    <span>Codevolution</span>
</mat-toolbar>
<mat-toolbar color="primary" class="navbar ">
    <div>Codevolution</div>
    <div>
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
    </div>
</mat-toolbar>-->

<!----------------------------------SIDENAV-->


<!--<mat-sidenav-container>
    <mat-sidenav #sidenav (opened)="log('Opened')" (closed)="log('Closed')"mode="side" [(opened)]="opened">Sidenav</mat-sidenav>
    <mat-sidenav-content>Main
        <button (click)="opened=!opened">Toggle Opened</button>
        <button (click)="sidenav.open()">Open</button>
        <button (click)="sidenav.close()">Close</button>
        <button (click)="sidenav.toggle()">Toggle</button>
    </mat-sidenav-content>
</mat-sidenav-container>-->


<!----------------------------------MENU------>


    
<!---<mat-menu #appMenu="matMenu" xPosition="after" yPosition="above">
    <button mat-menu-item [matMenuTriggerFor]="subMenu">FrontEnd</button>
    <button mat-menu-item>BackEnd</button>
    <button mat-menu-item>FrontEnd</button>
</mat-menu>

<button class="center" mat-flat-button [matMenuTriggerFor]="appMenu">Menu</button>

<mat-menu #subMenu="matMenu">
    <button mat-menu-item>Angular</button>
    <button mat-menu-item>React</button>
    <button mat-menu-item>Vue</button>
</mat-menu>

<mat-menu #lazyMenu ="matMenu">
    <ng-template matMenuContent let-name="name" let-hobby="hobby">
        <button mat-menu-item>Setting</button>
        <button mat-menu-item>Hobby is {{hobby}}</button>
        <button mat-menu-item>Log out {{name}}</button>
    </ng-template>
</mat-menu>

<button mat-raised-button [matMenuTriggerData]="{name: 'Vishwas', hobby:'football'}" [matMenuTriggerFor]="lazyMenu">Vishwas</button>
<button mat-raised-button [matMenuTriggerData]="{name: 'Vishwas'}" [matMenuTriggerFor]="lazyMenu">Codevolution</button>--->

<!---------------------------------------------LIST-->


<!--<mat-list dense>
    <mat-list-item>Item 1</mat-list-item>
    <mat-list-item>Item 2</mat-list-item>
    <mat-list-item>Item 3</mat-list-item>
</mat-list>

<mat-nav-list>
    <a mat-list-item href="#">Home</a>
    <a mat-list-item href="#">About</a>
    <a mat-list-item href="#">Services</a>
</mat-nav-list>

<mat-list>
    <mat-list-item>
        <mat-icon matListIcon>home</mat-icon>
        <h3 matLine>Heading</h3>
        <p matLine>Line</p>
    </mat-list-item>
    <mat-divider></mat-divider>
    <mat-list-item>
        <mat-icon matListIcon>folder</mat-icon>
        <h3 matLine>Heading 2</h3>
        <p matLine>Line 2</p>
    </mat-list-item>
</mat-list>---->


<!---------------------------------GRID LIST-->


<!--<mat-grid-list cols="2">
    <mat-grid-tile colspan="2" rowHeight="2:1">Tile 1</mat-grid-tile>
    <mat-grid-tile>Tile 2</mat-grid-tile>
    <mat-grid-tile>Tile 3</mat-grid-tile>
    <mat-grid-tile>Tile 4</mat-grid-tile>
</mat-grid-list>-->


<!-----------------------------------------CARD-->


<!--<mat-card>Basic card</mat-card>
<mat-card>
    <mat-card-title>
        Card title
    </mat-card-title>
    <mat-card-content>
        This is the card content
    </mat-card-content>
    <mat-card-actions align="end">
        <button mat-flat-button>Login</button>
    </mat-card-actions>
</mat-card>-->


<!------------------------------------MAT FORM FIELD-->



<!--<mat-form-field floatLabel="auto" hideRequiredMarker appearance="legacy">
    <mat-label>Name</mat-label>
    <input matInput required>
    <mat-hint align="end">Min 5 characters</mat-hint>
</mat-form-field>

<mat-form-field floatLabel="auto" hideRequiredMarker appearance="standard">
    <mat-label>Name</mat-label>
    <input matInput required>
    <mat-hint align="end">Min 5 characters</mat-hint>
</mat-form-field>

<mat-form-field floatLabel="auto" hideRequiredMarker appearance="fill" color="accent">
    <mat-label>Name</mat-label>
    <input matInput required>
    <mat-hint align="end">Min 5 characters</mat-hint>
</mat-form-field>

<mat-form-field floatLabel="auto" hideRequiredMarker appearance="outline" color="warn">
    <mat-label>Name</mat-label>
    <input matInput required>
    <mat-hint align="end">Min 5 characters</mat-hint>
</mat-form-field>-->

<!-------------------------------SELECT-->


<!----<mat-form-field>
    <mat-select [(value)]="selectedValue" multiple>
        <mat-label>Topic</mat-label>
        <mat-option>None</mat-option>
        <mat-optgroup label="web">
            <mat-option value="angular">Angular</mat-option>
            <mat-option value="react">React</mat-option>
            <mat-option value="vue">Vue</mat-option>
        </mat-optgroup>
        <mat-optgroup label="mobile">
            <mat-option value="ionic">Angular</mat-option>
            <mat-option value="reactnative">React</mat-option>

        </mat-optgroup>
    </mat-select>
</mat-form-field>
{{selectedValue}}---->


<!-----------------------------------PAGINATOR-->



<!----<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">


    <ng-container matColumnDef="position">
      <th mat-header-cell *matHeaderCellDef> No. </th>
      <td mat-cell *matCellDef="let element"> {{element.position}} </td>
    </ng-container>
  

    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef> Name </th>
      <td mat-cell *matCellDef="let element"> {{element.name}} </td>
    </ng-container>
  

    <ng-container matColumnDef="weight">
      <th mat-header-cell *matHeaderCellDef> Weight </th>
      <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
    </ng-container>
  

    <ng-container matColumnDef="symbol">
      <th mat-header-cell *matHeaderCellDef> Symbol </th>
      <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
    </ng-container>
  
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

  <mat-paginator [length]="100" [pageSize]="10" [pageSizeOptions]="[5,10,20]" showFirstLastButtons></mat-paginator>--->

  */