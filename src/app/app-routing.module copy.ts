import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashComponent } from './admin-dashboard/dash/dash.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AppComponent } from './app.component';
import { ClothingComponent } from './clothing/clothing.component';
import { DealsComponent } from './deals/deals.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { HomeproductsComponent } from './homeproducts/homeproducts.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ProduitComponent } from './admin-dashboard/produit/produit.component';
import { CategorieComponent } from './admin-dashboard/categorie/categorie.component'; 
import { ListproductComponent } from './home/listproduct/listproduct.component';
import { ListComponent } from './home/listproduct/list/list.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path : 'register', component : RegisterComponent },
  { path : 'home', component : HomeproductsComponent, canActivate: [AuthGuard]  },
  { path : 'electronics', component : ElectronicsComponent,  canActivate: [AuthGuard] },
  { path : 'login', component : LoginComponent},
  { path : 'deal', component : DealsComponent ,  canActivate: [AuthGuard]},
  { path : '', component : HomeComponent,  canActivate: [AuthGuard] },
  { path : 'listsubcategorie', component : ListproductComponent ,  canActivate: [AuthGuard]},
  { path : 'listProduit', component : ListComponent ,  canActivate: [AuthGuard]},
  { path : 'clothing', component : ClothingComponent ,  canActivate: [AuthGuard]},
  {
    path: 'httpclient',
    loadChildren: () => import('./product/product.module')
      .then(mod => mod.ProductModule)
  },
  { path : 'Dashboard-Admin', component: AdminDashboardComponent,
children :[
  {path : 'prod', component : ProduitComponent,  canActivate: [AuthGuard]},
  {path : 'categories', component : CategorieComponent,  canActivate: [AuthGuard]},
  { path : 'Admin', component : AdminDashboardComponent,  canActivate: [AuthGuard]},
  { path : 'test', component : DashComponent,  canActivate: [AuthGuard]}

]},

  {
    path : 'user',component : UserLayoutComponent ,
    children : [
      { path : 'user-dash', component : UserDashComponent,  canActivate: [AuthGuard] }
    ]
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
