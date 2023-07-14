import { Component } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../../home/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent {
  produitForm: FormGroup;
  categories : any;
  categ : Array<Object>=[];
  constructor(private router: Router,private productService: ProductService, private formBuilder: FormBuilder,private homeservice : HomeService) {
    this.produitForm = this.formBuilder.group({
      nom: ['', Validators.required],
      quantite: [0, Validators.required],
      prixunite: [0, Validators.required],
      subcategorieid: ['', Validators.required],
      imgUrl: ['', Validators.required]
    });
   
  }
  ngOnInit(): void {
    this.getcategory();
  }
  getcategory(): void {
    this.homeservice.getItems('http://localhost:8094/Subcategory/getcat')
      .subscribe(
        categories => {
          this.categories = categories;
        });
    this.categ = this.categories;
  
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log(file);
      
      const imageUrl = URL.createObjectURL(file);
      this.produitForm.patchValue({
        imgUrl: './assets/img/categories/'+file.name
      });
    }
  }
  addProduct() {
    if (this.produitForm.invalid) {
      return;
    }
    const newProduct = this.produitForm.value;
    console.log(newProduct);
    this.productService.addProduct(newProduct).subscribe(
      () => {
        window.location.reload();
      },
      (error) => {
      }
    );
  }
}
