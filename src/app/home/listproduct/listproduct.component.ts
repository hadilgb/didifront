import { Component,ViewChild,OnInit ,ChangeDetectorRef,Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';

import {MatPaginator, MatPaginatorDefaultOptions} from '@angular/material/paginator';
import { ProductService } from 'src/app/product/product.service';
import { CategorieService } from 'src/app/admin-dashboard/categorie/categorie.service';
import { Location } from '@angular/common';
export interface Element {
  categorieId : string;
  nom: string;
  prixunite: number;
  image : string;
  
}
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent {
  categoryId: any ;
  categorieForm: FormGroup;
  subcategorieForm: FormGroup;
  categories : any;
  x : any;
  categ : Array<Object>=[];
  showAddForm: boolean = false;
  showAddsubForm: boolean = false;
  showUpdateForm: boolean = false;
  selectedCategorie: any;
  products : any;
  loaded: boolean;
  displayedColumns: string[] = [ 'id','nom','image','actions'];
  public dataSource : any = [];
  constructor(private route: ActivatedRoute ,private router : Router, private productservice: ProductService,private categorieService: CategorieService,  private location: Location, private formBuilder: FormBuilder,private homeservice : HomeService) {
    this.loaded = false;
    this.categorieForm = this.formBuilder.group({
      nom: [''],
      description: [''],
      image: [''],
    });
    this.subcategorieForm = this.formBuilder.group({
      nom: [''],
      description: [''],
      image: [''],
    });
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log(file);
      
      const image = URL.createObjectURL(file);
      this.categorieForm.patchValue({
        image: './assets/img/categories/'+file.name
      });
    }
  }
 
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['categoryId'];
      // Perform filtering or any other logic based on the category ID
      console.log('Category ID:', this.categoryId);
      // Call your filter function or perform filtering operations here
    });
  
    this.getcategory();
    this.dataSource.paginator = this.paginator;
  }
  getcategory(): void {
    this.homeservice.getItems('http://localhost:8094/Subcategory/getcat')
    .subscribe(
      categories => {

        this.categories = categories;
        const filteredCategories = this.categories.filter((category: any) => category.categorieid === this.categoryId);
        this.categories =filteredCategories;
        this.router.navigateByUrl("/listproduit/"+this.categoryId);

      });
      console.log(this.categories);
      
  this.categ = this.categories;
  
  }
  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.dataSource){
      this.dataSource.paginator = value;
    }
  }


  
  applyFilter(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }
  getProducts(): void {
    this.loaded = false;
    this.productservice.getItems('http://localhost:8094/Product/getcat')
      .subscribe(
        products => {
          this.products = products;
          this.dataSource = products;
          
          this.loaded = true;
          console.table(this.products);
        });
  }
  deleteCategorie(id: string): void {
    if (confirm('Are you sure you want to delete this categories?')) {
      this.categorieService.deleteItem(id).subscribe(
        () => {
          console.log("here");
          window.location.reload();
        },
        (error) => {

        }
      );
    }
  }
  showAddCategorieForm(): void {
    this.showAddForm = !this.showAddForm; 
   }
  showAddSubcategorieForm(): void {
    this.showAddsubForm = !this.showAddsubForm; 
   }
 showUpdateCategorieForm(categorie: any) {
  this.selectedCategorie = categorie;
  this.categorieForm.patchValue({
    nom: categorie.nom,
    description: categorie.description,
    image: categorie.image
  });
  this.showUpdateForm = true;
}

updateCategorie() {
  const updatedCategorie = {
    categorieid: this.selectedCategorie.categorieid,
    nom: this.categorieForm.value.nom,
    image: this.categorieForm.value.image,
  };

  this.categorieService.updateCategorie(this.selectedCategorie.categorieid,updatedCategorie).subscribe(
    () => {
      
      window.location.reload();
    },
    (error) => {
      console.log(error);
      
    }
  );
  this.categorieForm.reset();
  this.showUpdateForm = false;
}

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
}
