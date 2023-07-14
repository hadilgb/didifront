import { Component } from '@angular/core';
import {ProductService} from '../product/product.service'
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent {
  categories : Array<any> = [
    {
      src :"../assets/img/all_clothes.jpg",
      name :"voir tous les Vêtements"
    },
    {
      src :"../assets/img/femme_clothes.jpg",
      name :"Vêtements pour femmes"
    },
    {
      src :"../assets/img/homme_clothes.jpg",
      name :"Vêtements pour hommes"
    },
    {
      src :"../assets/img/enfant_clothes.jpg",
      name :"Vêtements pour enfants"
    },
    {
      src :"../assets/img/jeunes_clothes.jpg",
      name :"Vêtements pour Jeunes"
    },
    {
      src :"../assets/img/bebe_clothes.jpg",
      name :"Vêtements pour bébé"
    },
    {
      src :"../assets/img/chaussures.jpg",
      name :"Chaussures"
    },
    {
      src :"../assets/img/bijoux.jpg",
      name :"Bijoux et montres"
    },
    {
      src :"../assets/img/accessoires.jpg",
      name :"Accessoires"
    },
    {
      src :"../assets/img/sport.jpg",
      name :"Sport"
    },
    {
      src :"../assets/img/summer.jpg",
      name :"Maillot"
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
  resetUsers(): void {
    this.products = null;
    this.loaded = true;
  }
  dynamicSlides = [
    {
      id: '1',
      src:'./assets/img/swim1.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: '2',
      src:'./assets/img/swim2.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: '3',
      src:'./assets/img/swim3.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: '4',
      src:'./assets/img/swim4.jpg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: '5',
      src:'./assets/img/swim5.jpg',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: '1',
      src:'./assets/img/swim1.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: '2',
      src:'./assets/img/swim2.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: '3',
      src:'./assets/img/swim3.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: '4',
      src:'./assets/img/swim4.jpg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: '5',
      src:'./assets/img/swim5.jpg',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: '1',
      src:'./assets/img/swim1.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: '2',
      src:'./assets/img/swim2.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: '3',
      src:'./assets/img/swim3.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: '4',
      src:'./assets/img/swim4.jpg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: '5',
      src:'./assets/img/swim5.jpg',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: '1',
      src:'./assets/img/swim1.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: '2',
      src:'./assets/img/swim2.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: '3',
      src:'./assets/img/swim3.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: '4',
      src:'./assets/img/swim4.jpg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: '5',
      src:'./assets/img/swim5.jpg',
      alt:'Side 5',
      title:'Side 5'
    }
  ]
  brands = [
    {
      id: '1',
      src:'./assets/img/zara.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: '2',
      src:'./assets/img/nike.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: '3',
      src:'./assets/img/bershka.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: '4',
      src:'./assets/img/adidas.jpg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: '5',
      src:'./assets/img/joliesse.jpg',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: '1',
      src:'./assets/img/rosace.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: '2',
      src:'./assets/img/zen.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: '3',
      src:'./assets/img/fatale.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: '4',
      src:'./assets/img/lcwaikiki.jpg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: '5',
      src:'./assets/img/swim5.jpg',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: '1',
      src:'./assets/img/swim1.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: '2',
      src:'./assets/img/swim2.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: '3',
      src:'./assets/img/swim3.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: '4',
      src:'./assets/img/swim4.jpg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: '5',
      src:'./assets/img/swim5.jpg',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: '1',
      src:'./assets/img/swim1.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: '2',
      src:'./assets/img/swim2.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: '3',
      src:'./assets/img/swim3.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: '4',
      src:'./assets/img/swim4.jpg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: '5',
      src:'./assets/img/swim5.jpg',
      alt:'Side 5',
      title:'Side 5'
    }
  ]
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

  customOptionss: OwlOptions = {
    loop: true,
    autoWidth : false,
    margin : 15,
    stagePadding : 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    slideBy : 10,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      100: {
        items: 2
      },
      200: {
        items: 3
      },
      300: {
        items: 4
      },
      400: {
        items: 5
      },
      500: {
        items: 6
      },
      600: {
        items: 7
      },
      700: {
        items: 8
      },
      800: {
        items: 9
      },
      900: {
        items: 10
      }
    },
    nav: true
  }
  open : boolean = false;
  img : String = "";
  text :String ="";
  name : String = "";
  open_add_to_cart(im : String,tex : String,na : String):void{
    this.open = true;
    this.img=im;
    this.text = tex;
    this.name = na;
  }
}
