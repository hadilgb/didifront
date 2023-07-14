import { Component,ViewChild,OnInit ,ChangeDetectorRef,Input, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from '../../../home/home.service';

import {MatPaginator, MatPaginatorDefaultOptions} from '@angular/material/paginator';
import { ProductService } from 'src/app/product/product.service';
import { CategorieService } from 'src/app/admin-dashboard/categorie/categorie.service';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface Element {
  categorieId : string;
  nom: string;
  prixunite: number;
  image : string;
}
@Component({
  selector: 'app-subcategorie',
  templateUrl: './subcategorie.component.html',
  styleUrls: ['./subcategorie.component.css']
})
export class SubcategorieComponent {
  
  @Input() selectedCategoryId:any;
  categorieForm: FormGroup;
  subcategorieForm: FormGroup;
  categories : any;
  categ : Array<Object>=[];
  showAddForm: boolean = false;
  showAddsubForm: boolean = false;
  showUpdateForm: boolean = false;
  selectedCategorie: any;
  products : any;
  loaded: boolean;
  displayedColumns: string[] = [ 'id','nom','image','actions'];
  public dataSource : any = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private productservice: ProductService,private categorieService: CategorieService,  private location: Location, private formBuilder: FormBuilder,private homeservice : HomeService) {
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
    this.categories=this.getcategory();
    this.dataSource.paginator = this.paginator;
  }
  getcategory(): void {
    this.homeservice.getItems('http://localhost:8094/Subcategory/getcat')
      .subscribe(
        categories => {

          this.categories = categories;
          const filteredCategories = this.categories.filter((category: any) => category.categorieid === this.data.categorieId);
          this.categories =filteredCategories;
          this.dataSource = new MatTableDataSource(Object.values(filteredCategories)); 
          this.dataSource.paginator = this.paginator;
        });
        console.log(this.categories);
        
    this.categ = this.categories;
  
  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  
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
          this.ngOnInit();
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

}
