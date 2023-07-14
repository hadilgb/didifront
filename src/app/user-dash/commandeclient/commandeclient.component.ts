import { Component, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';
import { CartserviceService } from 'src/app/first-navbar/cartservice.service';

@Component({
  selector: 'app-commandeclient',
  templateUrl: './commandeclient.component.html',
  styleUrls: ['./commandeclient.component.css']
})
export class CommandeclientComponent {
  commandItems: any[] = [];
  nbrCommands  :any ;

  cartItems: any[] = [];
  clearcart: any[] = [];
  commandAccepted: any[] = [];
  commandRefused: any[] = [];
  loggedIn: boolean=false;
  affiche: boolean=true;
nbrproduit :any ;
nbrproduitAccepted :any ;
test: any;
nbrproduitRefus :any ;
  products: any;
  loaded: boolean;
  constructor(private router :Router,
    private productservice: ProductService,private cartService: CartserviceService) {
    this.loaded = false;
  }

getProducts(): void {
    this.loaded = false;
    this.productservice.getItems('http://localhost:8094/Product/getcat')
      .subscribe(
        products => {
          this.products = products;
          this.loaded = true;
        });
  }

logout(): void {
  localStorage.removeItem('token');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('role');
  localStorage.removeItem('email');
  this.router.navigateByUrl('login')


  }
  startDate = new Date(1990, 0, 1);
  ngOnInit(): void {
    this.getAllCommands();
    this.nbrCommands= this.commandItems.length;
    this.nbrproduit= this.cartItems.length;
    this.nbrproduitAccepted= this.commandAccepted.length;
    this.nbrproduitRefus= this.commandRefused.length;
    const body = document.getElementById("hold");
    var bg= <Element> body;
    var sidebar = document .querySelector(".sidebar");
    var sb= <Element> sidebar;
    var toggle = document .querySelector(".toggle ");
    var togglev= <Element> toggle;
    var searchbtn = document .querySelector(".search-box");
    var searchbtnv= <Element> searchbtn;
    const modeswitch= document .querySelector(".toggle-switch");
    var modeswitchv= <Element> modeswitch;
    var modetext= document .querySelector(".mode-text");
    var modetextv= <Element> modetext;
    const home= document .querySelector(".home");
    var homev= <Element> home;
    const nav = document.querySelector(".nav-link");
    var navv= <Element> nav;
    const content = document.querySelector(".content");
    var contentv= <Element> content;
    togglev.addEventListener("click", () => {
      sb.classList.toggle("close");
      homev.classList.toggle("open");
      });
    searchbtnv.addEventListener("click", () => {
        sb.classList.remove("close");

        });
    modeswitchv.addEventListener("click", () => {
      bg.classList.toggle("dark");
      if(bg.classList.contains("dark")){
        modetextv.innerHTML = "Light mode"
      }else {
        modetextv.innerHTML = "Dark mode"
      }
      });
      navv.addEventListener("click", () => {
        sb.classList.toggle("close");
        homev.classList.toggle("open");
        });
        this.getProducts();
  }
  getAllCommands():void{
    
    this.cartService.getCommandItems().subscribe(
      (data) => {
        this.commandItems = data.filter((command:any) => command.email === localStorage.getItem('email'));
        this.commandAccepted = this.commandItems.filter((command:any) => command.etat === "confirme");
        this.commandRefused = this.commandItems.filter((command:any) => command.etat === "annuler");
        this.commandItems = this.commandItems.filter((command:any) => command.etat === "enattente");
        
      },
      (error) => {
        console.error('Failed to create command:', error);
      }
      );
    }
 
}