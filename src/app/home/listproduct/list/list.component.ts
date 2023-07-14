import { Component,ViewChild,OnInit ,ChangeDetectorRef} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from '../../../home/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartserviceService } from '../../../first-navbar/cartservice.service';

import {MatPaginator, MatPaginatorDefaultOptions} from '@angular/material/paginator';
import { ProductService } from 'src/app/product/product.service';
import { Location } from '@angular/common';
export interface Element {
  prodid : string;
  categorieid : string;
  nom: string;
  quantite: number;
  prixunite: number;
  imgUrl : string;
  nombreClic: string;
  nombrevente: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private router: Router, private cartService: CartserviceService,private snackBar: MatSnackBar,private route: ActivatedRoute ,private productservice: ProductService,  private location: Location, private formBuilder: FormBuilder,private homeservice : HomeService) {
    this.loadCartItemsFromLocalStorage();
  }
  cartItems: any[] = [];
  categories : any;
  categoryId : any;
  categ : Array<Object>=[];
  showAddForm: boolean = false;
  showUpdateForm: boolean = false;
  selectedProduct: any;
  products : any;
  ngOnInit() {
    this.route.queryParams.subscribe((params:any) => {
      this.loadCartItemsFromLocalStorage();
      this.categoryId = params['categoryId'];
      // Perform filtering or any other logic based on the category ID
      console.log('Category ID:', this.categoryId);
      // Call your filter function or perform filtering operations here
    });
  
    this.getProducts();

  }
  getProducts(): void {
    this.productservice.getItems('http://localhost:8094/Product/getprod')
      .subscribe(
        products => {
          this.products = products;
          const filteredCategories = this.products.filter((category: any) => category.subcategorieid == this.categoryId);
          this.products =filteredCategories;
  
        });

  }
  addToCart(productId: string, quantity: number, prixunite : number , nomprod : string,image:string): void {
    const item = {
      prodid: productId,
      quantite: quantity,
      prixtotale: prixunite*quantity,
      nomprod :nomprod,
      image:image,
    };
  this.productservice.addItem(item).subscribe();
        const message = `Added ${quantity} item(s) to the cart`;
        this.snackBar.open(message, 'Close', { duration: 2000 });
        this.cartService.addToCart(productId,quantity,prixunite);
        this.cartItems.push(item)
        this.saveCartItemsToLocalStorage();
        window.location.reload();
      }
      saveCartItemsToLocalStorage(): void {
        console.log(JSON.stringify(this.cartItems));
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      }
      clearCart(): void {
        this.cartItems = [];
        localStorage.removeItem('cartItems');
      }
      loadCartItemsFromLocalStorage(): void {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
          this.cartItems = JSON.parse(savedCartItems);
        }
      }
      url: string = "./assets/img/accessoires.jpg";
      imageChange(event: any){
          this.url = event.target.src;
      }
   
}
