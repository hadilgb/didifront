import { Component,ViewChild,OnInit ,ChangeDetectorRef} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from '../../home/home.service';

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
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{
  produitForm: FormGroup;
  categories : any;
  categ : Array<Object>=[];
  showAddForm: boolean = false;
  showUpdateForm: boolean = false;
  selectedProduct: any;
  products : any;
  loaded: boolean;
  displayedColumns: string[] = [ 'reference','categorie','imgUrl','nom', 'nombreClic','nombrevente', 'prixunite','quantite','actions'];
  public dataSource : any = [];
  constructor(private productservice: ProductService,  private location: Location, private formBuilder: FormBuilder,private homeservice : HomeService) {
    this.loaded = false;
    this.produitForm = this.formBuilder.group({
      nom: [''],
      quantite: [''],
      prixunite: [''],
      categorieid: ['']
    });
  }
 
 
  ngOnInit() {
    
    this.getProducts();
    this.getcategory();
  }
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  getcategory(): void {
    this.homeservice.getItems('http://localhost:8094/Category/getcat')
      .subscribe(
        categories => {
          this.categories = categories;
        });
    this.categ = this.categories;
  
  }
  
  applyFilter(filterValue: string) {
    
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getProducts(): void {
    this.loaded = false;
    this.productservice.getItems('http://localhost:8094/Product/getprod')
      .subscribe(
        products => {
          this.products = products;
          this.dataSource = new MatTableDataSource(Object.values(products)); 
          this.dataSource.paginator = this.paginator;
          this.loaded = true;
          console.table(this.products);
        });

  }
  deleteProduct(id: string): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productservice.deleteItem(id).subscribe(
        () => {
          console.log("here");
          window.location.reload();
        },
        (error) => {

        }
      );
    }
  }
  showAddProductForm(): void {
    this.showAddForm = !this.showAddForm; 
   }
 showUpdateProductForm(product: any) {
  this.selectedProduct = product;
  this.produitForm.patchValue({
    nom: product.nom,
    quantite: product.quantite,
    prixunite: product.prixunite,
    categorieid: product.categorieid
  });
  this.showUpdateForm = true;
}

updateProduct() {
  const updatedProduct = {
    prodid: this.selectedProduct.prodid,
    nom: this.produitForm.value.nom,
    quantite: this.produitForm.value.quantite,
    prixunite: this.produitForm.value.prixunite,
    categorieid: this.produitForm.value.categorieid
  };

  console.log(this.selectedProduct.prodid);
  this.productservice.updateProduct(this.selectedProduct.prodid,updatedProduct).subscribe(
    () => {
      
      window.location.reload();
    },
    (error) => {
    }
  );
  this.produitForm.reset();
  this.showUpdateForm = false;
}

}
