import { Component,ViewChild,OnInit ,ChangeDetectorRef, Output, EventEmitter} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from '../../home/home.service';

import {MatPaginator, MatPaginatorDefaultOptions} from '@angular/material/paginator';
import { ProductService } from 'src/app/product/product.service';
import { CategorieService } from 'src/app/admin-dashboard/categorie/categorie.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SubcategorieComponent } from './subcategorie/subcategorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { AddSubcategorieComponent } from './add-subcategorie/add-subcategorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
export interface Element {
  categorieId : string;
  nom: string;
  prixunite: number;
  image : string;
}
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  @Output() selectedCategoryIdChange = new EventEmitter<string>();
  @Output() selectedCatId = new EventEmitter<string>();
  selectedCategoryId: string = '';

    categorieForm: FormGroup;
    subcategorieForm: FormGroup;
    categories : any;
    categ : Array<Object>=[];
    showAddForm: boolean = false;
    showAddsubForm: boolean = false;
    showSubForm: boolean = false;
    showUpdateForm: boolean = false;
    selectedCategorie: any;
    products : any;
    loaded: boolean;

    displayedColumns: string[] = [ 'id','nom','image','actions'];
    public dataSource : any = [];
    constructor(private dialogup: MatDialog,private dialog: MatDialog,private dialogadd: MatDialog,private productservice: ProductService,private categorieService: CategorieService,  private location: Location, private formBuilder: FormBuilder,private homeservice : HomeService) {
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
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

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
    }
    getcategory(): void {
      this.dataSource.paginator = this.paginator;

      this.homeservice.getItems('http://localhost:8094/Category/getcat')
        .subscribe(
          categories => {
            this.categories = categories;
            this.dataSource = new MatTableDataSource(Object.values(categories)); 
            this.dataSource.paginator = this.paginator;
          });
      this.categ = this.categories;
    
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
            window.location.reload();
          },
          (error) => {
  
          }
        );
        window.location.reload();
      }
    }
    showAddCategorieForm(): void {
      const test = this.dialogadd.open(AddCategorieComponent,{
        width: '900px' 
        }); 
     }
     veiwSubcategorie(id: string): void {
      this.selectedCategoryId = id;
      console.log(id);
      this.selectedCategoryIdChange.emit(this.selectedCategoryId);
      this.showSubForm = !this.showSubForm; 
     }
    showAddSubcategorieForm(): void {
      const test = this.dialogadd.open(AddSubcategorieComponent,{
        width: '900px' 
        });  
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
  
 
  openDialog(element: any): void {
    const dialogRef = this.dialog.open(SubcategorieComponent, {
      width: '900px', 
      data: { categorieId: element }
    });
  }
  openDialogg(element: any,el : any,img : any): void {
    this.selectedCatId.emit(element);
    const dialogRef = this.dialogup.open(UpdateCategorieComponent, {
      width: '500px',
      data : {element,el,img}
    });
  }
}
