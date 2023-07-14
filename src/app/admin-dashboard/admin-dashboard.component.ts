import { Component, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product/product.service';
import { Router } from '@angular/router';
import { ReclamationService } from './reclamation.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  products: any;
  loaded: boolean;
  recs : any;
  constructor(private router :Router,
    private productservice: ProductService,private recservice : ReclamationService) {
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
    this.getrecs();
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
  getrecs(): void {
    this.recservice.getreclamation()
      .subscribe(
        recs => {
          
          this.recs = recs;
          console.log(this.recs);
        });

  }
  remove (id : any) : void{
    const confirmation = window.confirm('Are you sure to delete this complain?');
    if(confirmation ){
      this.recservice.remove(id).subscribe(()=>{
        
      },
      ()=>{
        window.alert("complain is deleted");
      })
    }
  }
}