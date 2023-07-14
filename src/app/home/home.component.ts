import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imgCollection: Array<object> = [
    {
      image: './assets/img/slider/1.jpg',
      thumbImage: './assets/img/slider/1.jpg',
      
    }, {
      image: './assets/img/slider/2.jpg',
      thumbImage: './assets/img/slider/2.jpg',
  
    }, {
      image: './assets/img/slider/3.jpg',
      thumbImage: './assets/img/slider/3.jpg'
    }, {
      image: './assets/img/slider/4.jpg',
      thumbImage: './assets/img/slider/4.jpg'
    }, {
      image: './assets/img/slider/1.jpg',
      thumbImage: './assets/img/slider/1.jpg'
    }, {
      image: './assets/img/slider/2.jpg',
      thumbImage: './assets/img/slider/2.jpg'
    }
    , {
      image: './assets/img/slider/2.jpg',
      thumbImage: './assets/img/slider/2.jpg'
    }
    , {
      image: './assets/img/slider/2.jpg',
      thumbImage: './assets/img/slider/2.jpg'
    }
    , {
      image: './assets/img/slider/2.jpg',
      thumbImage: './assets/img/slider/2.jpg'
    }
    , {
      image: './assets/img/slider/2.jpg',
      thumbImage: './assets/img/slider/2.jpg'
    }
    , {
      image: './assets/img/slider/2.jpg',
      thumbImage: './assets/img/slider/2.jpg'
    }
];
categories : any;
categ : Array<Object>=[];
loaded: boolean;

constructor(private homeservice : HomeService ){
  this.loaded = false;
}
ngOnInit(): void {
  this.getcategory();
}
url: string = "./assets/img/accessoires.jpg";
    imageChange(event: any){
        this.url = event.target.src;
    }

getcategory(): void {
  this.homeservice.getItems('http://localhost:8094/Category/getcat')
    .subscribe(
      categories => {
        this.categories = categories;
      });
  this.categ = this.categories;
console.log(this.categories);
}

customOptions: OwlOptions = {
  loop: true,
  autoWidth : false,
  margin : 15,
  stagePadding : 10,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dotsEach: true,
  navSpeed: 600,
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
grocery : Array<any> =[
  {
    image : "./assets/img/categories/fruit_legume.jpg",
    nom : "Fruit et Legume"
  },
  {
    image : "../assets/img/categories/dairyeggs.jpg",
    nom : "Dairy & eggs"
  },
  {
    image : "../assets/img/categories/meat.jpg",
    nom : "Meat,seafood& alternatives"
  },
  {
    image : "../assets/img/categories/pantryfood.jpg",
    nom : "Pantry Food"
  },
  {
    image : "../assets/img/categories/frozenfood.jpg",
    nom : "Frozen Food"
  },
  {
    image : "../assets/img/categories/bakery.jpg",
    nom : "Backery"
  },
  {
    image : "../assets/img/categories/deli.jpg",
    nom : "Deli & fresh prepared meals"
  },
  {
    image : "../assets/img/categories/chips.jpg",
    nom : "Chips & snacks"
  }
]
}
