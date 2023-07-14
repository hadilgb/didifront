import { Component } from '@angular/core';
import {ProductService} from '../product/product.service'
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-homeproducts',
  templateUrl: './homeproducts.component.html',
  styleUrls: ['./homeproducts.component.css']
})
export class HomeproductsComponent {
  categories : Array<any> = [
    {
      src :"../assets/img/categories/bedding.jpg",
      name :"Bedding"
    },
    {
      src :"../assets/img/categories/furniture.jpg",
      name :"Furniture"
    },
    {
      src :"../assets/img/categories/storage&organization.jpg",
      name :"Storage & Organization"
    },
    {
      src :"../assets/img/categories/homedecor.jpg",
      name :"Home Décor"
    },
    {
      src :"../assets/img/categories/rugs&mats.jpg",
      name :"Area rugs & mats"
    },
    {
      src :"../assets/img/categories/bathaccessoires.jpg",
      name :"Bath accessoires"
    },
    {
      src :"../assets/img/categories/kitchenware.jpg",
      name :"Kitchenware"
    },
    {
      src :"../assets/img/categories/dining.jpg",
      name :"Dining & entertainment"
    },
    {
      src :"../assets/img/categories/cutains.jpg",
      name :"Cutains"
    },
    {
      src :"../assets/img/categories/small_appliances.jpg",
      name :"Small appliances"
    },
    {
      src :"../assets/img/categories/food_storage.jpg",
      name :"Organization & Food Storage"
    },
    {
      src :"../assets/img/categories/vaccum.jpg",
      name :"Vaccum & floor care"
    }
  ]
  rooms = [
    {
      src:'./assets/img/office.jpg',
      title:'Office'
    },
    {
      src:'./assets/img/bedroom.jpg',
      title:'Bedroom'
    },
    {
      src:'./assets/img/living.jpg',
      title:'Living room'
    },
    {
      src:'./assets/img/kidsroom.jpg',
      title:'kids room'
    },
    {
      src:'./assets/img/bathroom.jpg',
      title:'Bathroom'
    }
  ]
  products: any;
  loaded: boolean;
  constructor(
    private productservice: ProductService) {
    this.loaded = false;
  }
  ngOnInit(): void {
    this.getByCategory();
  }
  getByCategory(): void {
    this.loaded = false;
    this.productservice.getItemsByCategory('http://localhost:8093/Product/ProductbyCat/clothing')
      .subscribe(
        products => {
          this.products = products;
          this.loaded = true;
        });
  }
  customOptions: OwlOptions = {
    loop: true,
    autoWidth : false,
    margin : 15,
    stagePadding : 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    slideBy : 4,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
}
