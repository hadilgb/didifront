import { NgModule ,OnInit, ViewChild} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROUTES, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstNavbarComponent } from './first-navbar/first-navbar.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ProductComponent } from './product/product.component';
import { ProductModule } from './product/product.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeproductsComponent } from './homeproducts/homeproducts.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {  MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import { ProduitComponent } from './admin-dashboard/produit/produit.component';
import { DashComponent } from './admin-dashboard/dash/dash.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UpdateProduitComponent } from './admin-dashboard/produit/update-produit/update-produit.component';
import { AddProduitComponent } from './admin-dashboard/produit/add-produit/add-produit.component';
import { MatSelectModule } from '@angular/material/select';
import { CategorieComponent } from './admin-dashboard/categorie/categorie.component';
import { AddCategorieComponent } from './admin-dashboard/categorie/add-categorie/add-categorie.component';
import { AddSubcategorieComponent } from './admin-dashboard/categorie/add-subcategorie/add-subcategorie.component';
import { SubcategorieComponent } from './admin-dashboard/categorie/subcategorie/subcategorie.component';
import { ListproductComponent } from './home/listproduct/listproduct.component';
import { ListComponent } from './home/listproduct/list/list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { CommandComponent } from './admin-dashboard/command/command/command.component';
import { ReclamationComponent } from './user-dash/reclamation/reclamation.component';
import { CommandeclientComponent } from './user-dash/commandeclient/commandeclient.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ProfileComponent } from './user-dash/profile/profile.component';
import { AddrecComponent } from './user-dash/reclamation/addrec/addrec.component';
import { ClientsComponent } from './admin-dashboard/clients/clients.component';
import { UpdateCategorieComponent } from './admin-dashboard/categorie/update-categorie/update-categorie.component';
@NgModule({
  declarations: [
    ListproductComponent,
    AppComponent,
    HomeComponent,
    FirstNavbarComponent,
    ClothingComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    UserDashComponent,
    HomeproductsComponent,
    ElectronicsComponent,
    ProduitComponent,
    DashComponent,
    UpdateProduitComponent,
    AddProduitComponent,
    CategorieComponent,
    AddCategorieComponent,
    AddSubcategorieComponent,
    SubcategorieComponent,
    ListComponent,
    CommandComponent,
    ReclamationComponent,
    CommandeclientComponent,
    ProfileComponent,
    AddrecComponent,
    ClientsComponent,
    UpdateCategorieComponent
  ],
  imports: [
    MatDialogModule,
    MatSnackBarModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    NgImageSliderModule,
    MatCardModule,
    ProductModule,
    BrowserModule.withServerTransition({ appId: 'angular-starter' }),
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    FontAwesomeModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
