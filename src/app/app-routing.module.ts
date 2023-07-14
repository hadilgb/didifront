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
import { AuthGuardAdmin } from './authAdmin.guard';
import { AuthGuardUser } from './authUser.guard';
import { CommandComponent } from './admin-dashboard/command/command/command.component';
import { CommandeclientComponent } from './user-dash/commandeclient/commandeclient.component';
import { ReclamationComponent } from './user-dash/reclamation/reclamation.component';
import { ProfileComponent } from './user-dash/profile/profile.component';
import { AddrecComponent } from './user-dash/reclamation/addrec/addrec.component';
import { ClientsComponent } from './admin-dashboard/clients/clients.component';

const routes: Routes = [
  { path : 'register', component : RegisterComponent },
  { path : 'home', component : HomeproductsComponent  },
  { path : 'electronics', component : ElectronicsComponent },
  { path : 'login', component : LoginComponent},
  { path : 'deal', component : DealsComponent },
  { path : '', component : HomeComponent},
  { path : 'listsubcategorie', component : ListproductComponent },
  { path : 'listProduit', component : ListComponent },
  { path : 'clothing', component : ClothingComponent },
  {
    path: 'httpclient',
    loadChildren: () => import('./product/product.module')
      .then(mod => mod.ProductModule)
  },
  { path : 'Dashboard-Admin', component: AdminDashboardComponent,canActivate:[AuthGuardAdmin],
children :[
  {path : 'prod', component : ProduitComponent,  canActivate: [AuthGuardAdmin]},
  {path : 'categories', component : CategorieComponent,  canActivate: [AuthGuardAdmin]},
  {path : 'commands', component : CommandComponent,  canActivate: [AuthGuardAdmin]},
  {path : 'clients', component : ClientsComponent,  canActivate: [AuthGuardAdmin]},
  { path : 'Admin', component : AdminDashboardComponent,  canActivate: [AuthGuardAdmin]},
  { path : 'test', component : DashComponent,  canActivate: [AuthGuardAdmin]},
 

]},

      { path : 'user-dash', component : UserDashComponent,  canActivate: [AuthGuardUser] ,
      children  : [
        {path : 'commandes',component : CommandeclientComponent},
        {path : 'reclamation',component : ReclamationComponent},
        {path : '',component : ProfileComponent},
        {path : 'reclamation/add',component : AddrecComponent}
      ]
    }

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
